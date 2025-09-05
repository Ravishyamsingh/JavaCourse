import request from 'supertest';
import { app } from '../src/app.js';
import { User } from '../src/models.js';
import { Token } from '../src/models/Token.js';
import { tokenManager } from '../src/utils/tokenManager.js';
import connectDB from '../dbconnection/index.js';

describe('OAuth Authentication Tests', () => {
  let server;
  let testUser;
  let validToken;

  beforeAll(async () => {
    // Connect to test database
    await connectDB();
    server = app.listen(0);
  });

  afterAll(async () => {
    // Cleanup
    await User.deleteMany({});
    await Token.deleteMany({});
    await server.close();
  });

  beforeEach(async () => {
    // Create test user
    testUser = new User({
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      provider: 'google',
      googleId: 'test-google-id',
      isEmailVerified: true
    });
    await testUser.save();

    // Generate valid token
    const tokens = await tokenManager.createTokenPair(testUser._id, 'google', ['read', 'write']);
    validToken = tokens.accessToken;
  });

  afterEach(async () => {
    await User.deleteMany({});
    await Token.deleteMany({});
  });

  describe('POST /api/auth/google', () => {
    test('should reject request without token', async () => {
      const response = await request(app)
        .post('/api/auth/google')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.code).toBe('MISSING_TOKEN');
    });

    test('should reject invalid token format', async () => {
      const response = await request(app)
        .post('/api/auth/google')
        .send({ token: 'invalid-token' });

      expect(response.status).toBe(400);
      expect(response.body.success).toBe(false);
      expect(response.body.code).toBe('INVALID_TOKEN_FORMAT');
    });

    test('should handle rate limiting', async () => {
      const invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      
      // Make multiple requests to trigger rate limiting
      for (let i = 0; i < 12; i++) {
        await request(app)
          .post('/api/auth/google')
          .send({ token: invalidToken });
      }

      const response = await request(app)
        .post('/api/auth/google')
        .send({ token: invalidToken });

      expect(response.status).toBe(429);
    });
  });

  describe('POST /api/auth/refresh', () => {
    test('should refresh valid token', async () => {
      const tokens = await tokenManager.createTokenPair(testUser._id, 'google');
      
      const response = await request(app)
        .post('/api/auth/refresh')
        .send({ refreshToken: tokens.refreshToken });

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.accessToken).toBeDefined();
      expect(response.body.refreshToken).toBeDefined();
    });

    test('should reject invalid refresh token', async () => {
      const response = await request(app)
        .post('/api/auth/refresh')
        .send({ refreshToken: 'invalid-refresh-token' });

      expect(response.status).toBe(401);
      expect(response.body.success).toBe(false);
      expect(response.body.code).toBe('REFRESH_FAILED');
    });
  });

  describe('GET /api/auth/profile', () => {
    test('should return user profile with valid token', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(response.body.user.email).toBe(testUser.email);
    });

    test('should reject request without token', async () => {
      const response = await request(app)
        .get('/api/auth/profile');

      expect(response.status).toBe(401);
      expect(response.body.code).toBe('NO_TOKEN');
    });

    test('should reject invalid token', async () => {
      const response = await request(app)
        .get('/api/auth/profile')
        .set('Authorization', 'Bearer invalid-token');

      expect(response.status).toBe(401);
      expect(response.body.code).toBe('INVALID_TOKEN_FORMAT');
    });
  });

  describe('POST /api/auth/logout', () => {
    test('should logout successfully', async () => {
      const response = await request(app)
        .post('/api/auth/logout')
        .set('Authorization', `Bearer ${validToken}`)
        .send({});

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
    });
  });

  describe('GET /api/auth/sessions', () => {
    test('should return user sessions', async () => {
      const response = await request(app)
        .get('/api/auth/sessions')
        .set('Authorization', `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body.success).toBe(true);
      expect(Array.isArray(response.body.sessions)).toBe(true);
    });
  });

  describe('GET /api/health', () => {
    test('should return health status', async () => {
      const response = await request(app)
        .get('/api/health');

      expect(response.status).toBe(200);
      expect(response.body.status).toBe('OK');
      expect(response.body.version).toBe('2.0.0');
    });
  });

  describe('Token Management', () => {
    test('should create token pair', async () => {
      const tokens = await tokenManager.createTokenPair(testUser._id, 'google');
      
      expect(tokens.accessToken).toBeDefined();
      expect(tokens.refreshToken).toBeDefined();
      expect(tokens.expiresIn).toBe(900);
      expect(tokens.tokenType).toBe('Bearer');
    });

    test('should verify access token', async () => {
      const tokens = await tokenManager.createTokenPair(testUser._id, 'google');
      const decoded = await tokenManager.verifyAccessToken(tokens.accessToken);
      
      expect(decoded._id).toBe(testUser._id.toString());
    });

    test('should revoke token', async () => {
      const tokens = await tokenManager.createTokenPair(testUser._id, 'google');
      const result = await tokenManager.revokeToken(tokens.accessToken);
      
      expect(result).toBe(true);
      
      // Token should be invalid after revocation
      await expect(tokenManager.verifyAccessToken(tokens.accessToken))
        .rejects.toThrow('Invalid access token');
    });

    test('should cleanup expired tokens', async () => {
      // Create expired token
      const expiredToken = new Token({
        userId: testUser._id,
        accessToken: 'expired-token-hash',
        refreshToken: 'expired-refresh-hash',
        expiresAt: new Date(Date.now() - 1000), // 1 second ago
        refreshExpiresAt: new Date(Date.now() - 1000),
        provider: 'google'
      });
      await expiredToken.save();

      const cleanedCount = await tokenManager.cleanupExpiredTokens();
      expect(cleanedCount).toBeGreaterThan(0);
    });
  });

  describe('Security Tests', () => {
    test('should validate token structure', () => {
      const validJWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      const invalidToken = 'invalid.token';

      expect(tokenManager.validateTokenStructure(validJWT)).toBe(true);
      expect(tokenManager.validateTokenStructure(invalidToken)).toBe(false);
      expect(tokenManager.validateTokenStructure(null)).toBe(false);
      expect(tokenManager.validateTokenStructure('')).toBe(false);
    });

    test('should handle CORS properly', async () => {
      const response = await request(app)
        .options('/api/auth/google')
        .set('Origin', 'http://localhost:5173')
        .set('Access-Control-Request-Method', 'POST');

      expect(response.status).toBe(204);
      expect(response.headers['access-control-allow-origin']).toBe('http://localhost:5173');
    });

    test('should reject unauthorized CORS origins in production', async () => {
      process.env.NODE_ENV = 'production';
      
      const response = await request(app)
        .post('/api/auth/google')
        .set('Origin', 'http://malicious-site.com')
        .send({ token: 'test-token' });

      // Should be blocked by CORS
      expect(response.status).toBe(403);
      
      process.env.NODE_ENV = 'test';
    });
  });
});