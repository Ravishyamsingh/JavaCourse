/**
 * Security Test Suite
 * Tests for authentication, authorization, input validation, and security measures
 */

import request from 'supertest';
import { app } from '../src/app.js';
import { User } from '../src/models.js';
import { tokenManager } from '../src/utils/tokenManager.js';
import mongoose from 'mongoose';

describe('Security Tests', () => {
  let testUser;
  let authToken;
  let adminUser;
  let adminToken;

  beforeAll(async () => {
    // Connect to test database
    await mongoose.connect(process.env.MONGODB_TEST_URI || 'mongodb://localhost:27017/javacourse_test');
    
    // Create test users
    testUser = new User({
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: '$2b$12$testhashedpassword',
      role: 'user',
      isActive: true,
      isEmailVerified: true
    });
    await testUser.save();

    adminUser = new User({
      firstName: 'Admin',
      lastName: 'User',
      email: 'admin@example.com',
      password: '$2b$12$testhashedpassword',
      role: 'admin',
      isActive: true,
      isEmailVerified: true
    });
    await adminUser.save();

    // Generate test tokens
    const userTokens = await tokenManager.createTokenPair(testUser._id, 'local', [], {});
    const adminTokens = await tokenManager.createTokenPair(adminUser._id, 'local', [], {});
    
    authToken = userTokens.accessToken;
    adminToken = adminTokens.accessToken;
  });

  afterAll(async () => {
    // Clean up test data
    await User.deleteMany({ email: { $in: ['test@example.com', 'admin@example.com'] } });
    await mongoose.disconnect();
  });

  describe('Authentication Security', () => {
    test('should reject requests without authentication token', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.code).toBe('NO_TOKEN');
    });

    test('should reject requests with invalid token', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer invalid_token')
        .expect(401);

      expect(response.body.success).toBe(false);
      expect(response.body.code).toBe('INVALID_TOKEN');
    });

    test('should accept requests with valid token', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(response.body.user.email).toBe('test@example.com');
    });

    test('should prevent timing attacks on login', async () => {
      const startTime = Date.now();
      
      // Test with non-existent user
      await request(app)
        .post('/api/auth/login')
        .send({
          email: 'nonexistent@example.com',
          password: 'wrongpassword'
        })
        .expect(401);
      
      const nonExistentTime = Date.now() - startTime;
      
      const startTime2 = Date.now();
      
      // Test with existing user but wrong password
      await request(app)
        .post('/api/auth/login')
        .send({
          email: 'test@example.com',
          password: 'wrongpassword'
        })
        .expect(401);
      
      const existingTime = Date.now() - startTime2;
      
      // Response times should be similar (within 100ms)
      expect(Math.abs(nonExistentTime - existingTime)).toBeLessThan(100);
    });
  });

  describe('Input Validation Security', () => {
    test('should reject malicious input in signup', async () => {
      const maliciousInputs = [
        {
          firstName: '<script>alert("xss")</script>',
          lastName: 'User',
          email: 'test@example.com',
          password: 'Password123!'
        },
        {
          firstName: 'Test',
          lastName: 'User',
          email: 'test@example.com',
          password: 'weak'
        },
        {
          firstName: 'Test',
          lastName: 'User',
          email: 'invalid-email',
          password: 'Password123!'
        }
      ];

      for (const input of maliciousInputs) {
        const response = await request(app)
          .post('/api/auth/signup')
          .send(input)
          .expect(400);

        expect(response.body.success).toBe(false);
        expect(response.body.code).toBe('VALIDATION_ERROR');
      }
    });

    test('should sanitize NoSQL injection attempts', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: { $ne: null },
          password: { $ne: null }
        })
        .expect(400);

      expect(response.body.success).toBe(false);
    });

    test('should prevent prototype pollution', async () => {
      const response = await request(app)
        .put('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          '__proto__.isAdmin': true,
          'constructor.prototype.isAdmin': true,
          firstName: 'Test'
        })
        .expect(200);

      // Verify prototype pollution didn't occur
      expect({}.isAdmin).toBeUndefined();
    });
  });

  describe('Rate Limiting Security', () => {
    test('should enforce rate limits on authentication endpoints', async () => {
      const promises = [];
      
      // Send multiple requests rapidly
      for (let i = 0; i < 10; i++) {
        promises.push(
          request(app)
            .post('/api/auth/login')
            .send({
              email: 'test@example.com',
              password: 'wrongpassword'
            })
        );
      }

      const responses = await Promise.all(promises);
      
      // Some requests should be rate limited
      const rateLimited = responses.filter(r => r.status === 429);
      expect(rateLimited.length).toBeGreaterThan(0);
    });

    test('should have different rate limits for different endpoints', async () => {
      // Test general API rate limit
      const response = await request(app)
        .get('/api/health')
        .expect(200);

      expect(response.headers['x-ratelimit-limit']).toBeDefined();
    });
  });

  describe('Authorization Security', () => {
    test('should prevent unauthorized access to admin endpoints', async () => {
      const response = await request(app)
        .get('/api/auth/users')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(403);

      expect(response.body.success).toBe(false);
      expect(response.body.code).toBe('INSUFFICIENT_ROLE');
    });

    test('should allow authorized access to admin endpoints', async () => {
      const response = await request(app)
        .get('/api/auth/users')
        .set('Authorization', `Bearer ${adminToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.users)).toBe(true);
    });

    test('should prevent users from accessing other users\' profiles', async () => {
      const otherUser = new User({
        firstName: 'Other',
        lastName: 'User',
        email: 'other@example.com',
        password: '$2b$12$testhashedpassword',
        role: 'user'
      });
      await otherUser.save();

      const response = await request(app)
        .get(`/api/auth/profile`)
        .set('Authorization', `Bearer ${authToken}`)
        .query({ userId: otherUser._id })
        .expect(200); // Should only return own profile

      expect(response.body.user.email).toBe('test@example.com');
      
      await User.deleteOne({ _id: otherUser._id });
    });
  });

  describe('CSRF Protection', () => {
    test('should require CSRF token for state-changing operations', async () => {
      const response = await request(app)
        .put('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .send({
          firstName: 'Updated'
        })
        .expect(403);

      expect(response.body.code).toBe('CSRF_TOKEN_INVALID');
    });

    test('should accept valid CSRF token', async () => {
      // First get CSRF token
      const tokenResponse = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      const csrfToken = tokenResponse.headers['x-csrf-token'];
      expect(csrfToken).toBeDefined();

      // Use CSRF token in state-changing request
      const response = await request(app)
        .put('/api/auth/profile')
        .set('Authorization', `Bearer ${authToken}`)
        .set('X-CSRF-Token', csrfToken)
        .send({
          firstName: 'Updated'
        })
        .expect(200);

      expect(response.body.success).toBe(true);
    });
  });

  describe('Session Security', () => {
    test('should track user sessions', async () => {
      const response = await request(app)
        .get('/api/auth/sessions')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.sessions)).toBe(true);
    });

    test('should allow session revocation', async () => {
      // Get sessions first
      const sessionsResponse = await request(app)
        .get('/api/auth/sessions')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      if (sessionsResponse.body.sessions.length > 0) {
        const sessionId = sessionsResponse.body.sessions[0].id;
        
        // Get CSRF token
        const tokenResponse = await request(app)
          .get('/api/auth/me')
          .set('Authorization', `Bearer ${authToken}`)
          .expect(200);

        const csrfToken = tokenResponse.headers['x-csrf-token'];

        // Revoke session
        const response = await request(app)
          .delete(`/api/auth/sessions/${sessionId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .set('X-CSRF-Token', csrfToken)
          .expect(200);

        expect(response.body.success).toBe(true);
      }
    });
  });

  describe('Security Headers', () => {
    test('should include security headers in responses', async () => {
      const response = await request(app)
        .get('/api/health')
        .expect(200);

      // Check for security headers
      expect(response.headers['x-content-type-options']).toBe('nosniff');
      expect(response.headers['x-frame-options']).toBeDefined();
      expect(response.headers['x-xss-protection']).toBeDefined();
      expect(response.headers['strict-transport-security']).toBeDefined();
    });

    test('should include CSRF token in response headers', async () => {
      const response = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);

      expect(response.headers['x-csrf-token']).toBeDefined();
      expect(response.headers['x-csrf-token'].length).toBeGreaterThan(10);
    });
  });

  describe('Error Handling Security', () => {
    test('should not leak sensitive information in error messages', async () => {
      const response = await request(app)
        .get('/api/nonexistent-endpoint')
        .expect(404);

      expect(response.body.message).not.toContain('stack');
      expect(response.body.message).not.toContain('password');
      expect(response.body.message).not.toContain('secret');
    });

    test('should handle malformed JSON gracefully', async () => {
      const response = await request(app)
        .post('/api/auth/login')
        .set('Content-Type', 'application/json')
        .send('{"invalid": json}')
        .expect(400);

      expect(response.body.success).toBe(false);
    });
  });
});

describe('Performance Tests', () => {
  test('should respond to health check within acceptable time', async () => {
    const startTime = Date.now();
    
    await request(app)
      .get('/api/health')
      .expect(200);
    
    const responseTime = Date.now() - startTime;
    expect(responseTime).toBeLessThan(1000); // Should respond within 1 second
  });

  test('should handle concurrent requests efficiently', async () => {
    const promises = [];
    const startTime = Date.now();
    
    // Send 50 concurrent requests
    for (let i = 0; i < 50; i++) {
      promises.push(
        request(app)
          .get('/api/health')
          .expect(200)
      );
    }

    await Promise.all(promises);
    
    const totalTime = Date.now() - startTime;
    expect(totalTime).toBeLessThan(5000); // Should complete within 5 seconds
  });
});