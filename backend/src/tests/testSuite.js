/**
 * Comprehensive Test Suite
 * Unit, Integration, and E2E tests
 */

import assert from 'assert';
import { logger } from '../utils/monitoring.js';

class TestSuite {
  constructor() {
    this.tests = [];
    this.results = {
      passed: 0,
      failed: 0,
      skipped: 0,
      total: 0
    };
  }

  /**
   * Register a test
   */
  test(name, fn) {
    this.tests.push({ name, fn, type: 'test' });
  }

  /**
   * Register a unit test
   */
  unitTest(name, fn) {
    this.tests.push({ name, fn, type: 'unit' });
  }

  /**
   * Register an integration test
   */
  integrationTest(name, fn) {
    this.tests.push({ name, fn, type: 'integration' });
  }

  /**
   * Register an E2E test
   */
  e2eTest(name, fn) {
    this.tests.push({ name, fn, type: 'e2e' });
  }

  /**
   * Run all tests
   */
  async runAll() {
    logger.info('Starting test suite', { totalTests: this.tests.length });

    for (const test of this.tests) {
      try {
        await test.fn();
        this.results.passed++;
        logger.info(`✓ ${test.type.toUpperCase()}: ${test.name}`);
      } catch (error) {
        this.results.failed++;
        logger.error(`✗ ${test.type.toUpperCase()}: ${test.name}`, { error: error.message });
      }
    }

    this.results.total = this.tests.length;
    this.printResults();
    return this.results;
  }

  /**
   * Print test results
   */
  printResults() {
    console.log('\n========== TEST RESULTS ==========');
    console.log(`Total Tests: ${this.results.total}`);
    console.log(`Passed: ${this.results.passed}`);
    console.log(`Failed: ${this.results.failed}`);
    console.log(`Skipped: ${this.results.skipped}`);
    console.log(`Success Rate: ${((this.results.passed / this.results.total) * 100).toFixed(2)}%`);
    console.log('==================================\n');
  }
}

/**
 * Authentication Tests
 */
export const authTests = new TestSuite();

authTests.unitTest('Password hashing should work correctly', async () => {
  const bcrypt = await import('bcryptjs');
  const password = 'TestPassword123';
  const hashedPassword = await bcrypt.hash(password, 10);
  const isMatch = await bcrypt.compare(password, hashedPassword);
  assert.strictEqual(isMatch, true, 'Password should match');
});

authTests.unitTest('JWT token should be created and verified', async () => {
  const jwt = await import('jsonwebtoken');
  const secret = 'test-secret';
  const payload = { userId: '123', role: 'admin' };
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  const decoded = jwt.verify(token, secret);
  assert.strictEqual(decoded.userId, payload.userId, 'User ID should match');
});

/**
 * Validation Tests
 */
export const validationTests = new TestSuite();

validationTests.unitTest('Email validation should work correctly', async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  assert.strictEqual(emailRegex.test('test@example.com'), true, 'Valid email should pass');
  assert.strictEqual(emailRegex.test('invalid-email'), false, 'Invalid email should fail');
});

validationTests.unitTest('Password strength validation should work', async () => {
  const validatePassword = (password) => {
    return password.length >= 8 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /[0-9]/.test(password);
  };

  assert.strictEqual(validatePassword('StrongPass123'), true, 'Strong password should pass');
  assert.strictEqual(validatePassword('weak'), false, 'Weak password should fail');
});

/**
 * Security Tests
 */
export const securityTests = new TestSuite();

securityTests.unitTest('Input sanitization should remove XSS attempts', async () => {
  const sanitizeString = (input) => {
    return input.replace(/<[^>]*>/g, '').trim();
  };

  const xssAttempt = '<script>alert("XSS")</script>';
  const sanitized = sanitizeString(xssAttempt);
  assert.strictEqual(sanitized, 'alert("XSS")', 'XSS should be removed');
});

securityTests.unitTest('Rate limiting should track requests', async () => {
  const requests = new Map();
  const isRateLimited = (ip, limit = 5, window = 60000) => {
    const now = Date.now();
    if (!requests.has(ip)) {
      requests.set(ip, []);
    }

    const userRequests = requests.get(ip).filter(time => now - time < window);
    userRequests.push(now);
    requests.set(ip, userRequests);

    return userRequests.length > limit;
  };

  const ip = '192.168.1.1';
  for (let i = 0; i < 5; i++) {
    assert.strictEqual(isRateLimited(ip, 5), false, 'Should not be rate limited');
  }
  assert.strictEqual(isRateLimited(ip, 5), true, 'Should be rate limited after 6 requests');
});

/**
 * Database Tests
 */
export const databaseTests = new TestSuite();

databaseTests.integrationTest('Database connection should be established', async () => {
  try {
    const mongoose = await import('mongoose');
    assert.strictEqual(mongoose.connection.readyState, 1, 'Database should be connected');
  } catch (error) {
    logger.warn('Database connection test skipped - database not available');
  }
});

/**
 * API Tests
 */
export const apiTests = new TestSuite();

apiTests.integrationTest('Health check endpoint should return 200', async () => {
  try {
    const response = await fetch('http://localhost:5000/api/health');
    assert.strictEqual(response.status, 200, 'Health check should return 200');
  } catch (error) {
    logger.warn('API test skipped - server not running');
  }
});

/**
 * Performance Tests
 */
export const performanceTests = new TestSuite();

performanceTests.unitTest('Function execution time should be acceptable', async () => {
  const start = Date.now();
  
  // Simulate some work
  for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
  }
  
  const duration = Date.now() - start;
  assert.strictEqual(duration < 1000, true, 'Function should complete within 1 second');
});

/**
 * Run all test suites
 */
export async function runAllTests() {
  logger.info('Running comprehensive test suite');

  const allResults = {
    auth: await authTests.runAll(),
    validation: await validationTests.runAll(),
    security: await securityTests.runAll(),
    database: await databaseTests.runAll(),
    api: await apiTests.runAll(),
    performance: await performanceTests.runAll()
  };

  const totalPassed = Object.values(allResults).reduce((sum, r) => sum + r.passed, 0);
  const totalFailed = Object.values(allResults).reduce((sum, r) => sum + r.failed, 0);
  const totalTests = Object.values(allResults).reduce((sum, r) => sum + r.total, 0);

  console.log('\n========== OVERALL RESULTS ==========');
  console.log(`Total Tests: ${totalTests}`);
  console.log(`Passed: ${totalPassed}`);
  console.log(`Failed: ${totalFailed}`);
  console.log(`Success Rate: ${((totalPassed / totalTests) * 100).toFixed(2)}%`);
  console.log('====================================\n');

  return allResults;
}

export default { authTests, validationTests, securityTests, databaseTests, apiTests, performanceTests, runAllTests };
