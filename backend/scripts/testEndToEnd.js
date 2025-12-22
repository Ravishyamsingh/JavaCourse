#!/usr/bin/env node

/**
 * End-to-End Testing Script
 * Tests all major features and verifies proper integration
 */

import config from '../src/config.js';
import mongoose from 'mongoose';
import { User } from '../src/models.js';
import { Token } from '../src/models/Token.js';
import { ProctorSession, ProctorEvent, QuestionProgress, TestLifecycle } from '../src/models/ProctorModels.js';
import { tokenManager } from '../src/utils/tokenManager.js';
import { hashPassword } from '../src/utils/auth.js';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

const log = {
  success: (msg) => console.log(`${colors.green}✅${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}❌${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️${colors.reset}  ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ️${colors.reset}  ${msg}`),
  section: (msg) => console.log(`\n${colors.cyan}═══ ${msg} ═══${colors.reset}`)
};

let testsPassed = 0;
let testsFailed = 0;

const test = async (name, fn) => {
  try {
    await fn();
    log.success(name);
    testsPassed++;
  } catch (error) {
    log.error(`${name}: ${error.message}`);
    testsFailed++;
  }
};

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    log.success('Connected to MongoDB');
  } catch (error) {
    log.error(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

const disconnectDatabase = async () => {
  try {
    await mongoose.disconnect();
    log.success('Disconnected from MongoDB');
  } catch (error) {
    log.error(`Failed to disconnect from MongoDB: ${error.message}`);
  }
};

const testUserAuthentication = async () => {
  log.section('User Authentication Tests');

  const testEmail = `test-${Date.now()}@example.com`;
  const testPassword = 'TestPassword123!';
  let testUserId;

  // Test user creation
  await test('Create user', async () => {
    const hashedPassword = await hashPassword(testPassword);
    const user = new User({
      firstName: 'Test',
      lastName: 'User',
      email: testEmail,
      password: hashedPassword,
      provider: 'local',
      role: 'user'
    });
    await user.save();
    testUserId = user._id;
    if (!testUserId) throw new Error('User ID not generated');
  });

  // Test token creation
  let accessToken, refreshToken;
  await test('Create token pair', async () => {
    const tokens = await tokenManager.createTokenPair(testUserId, 'local', ['role:user']);
    accessToken = tokens.accessToken;
    refreshToken = tokens.refreshToken;
    if (!accessToken || !refreshToken) throw new Error('Tokens not generated');
  });

  // Test token verification
  await test('Verify access token', async () => {
    const decoded = await tokenManager.verifyAccessToken(accessToken);
    if (decoded._id.toString() !== testUserId.toString()) throw new Error('Token user mismatch');
  });

  // Test token refresh
  await test('Refresh token pair', async () => {
    const newTokens = await tokenManager.refreshTokenPair(refreshToken);
    if (!newTokens.accessToken || !newTokens.refreshToken) throw new Error('New tokens not generated');
  });

  // Test token revocation
  await test('Revoke token', async () => {
    const revoked = await tokenManager.revokeToken(accessToken, 'test_revocation');
    if (!revoked) throw new Error('Token revocation failed');
  });

  // Cleanup
  await User.deleteOne({ _id: testUserId });
};

const testProctoringSessions = async () => {
  log.section('Proctoring Session Tests');

  const testUserId = new mongoose.Types.ObjectId();
  const testId = 'test-java-cert';
  const sessionId = `session-${Date.now()}`;

  // Test session creation
  await test('Create proctoring session', async () => {
    const session = new ProctorSession({
      userId: testUserId,
      testId,
      sessionId,
      status: 'in_progress'
    });
    await session.save();
    if (!session._id) throw new Error('Session not created');
  });

  // Test event logging
  await test('Log proctoring event', async () => {
    const event = new ProctorEvent({
      userId: testUserId,
      testId,
      sessionId,
      type: 'violation',
      severity: 'critical',
      details: { reason: 'tab_switch' }
    });
    await event.save();
    if (!event._id) throw new Error('Event not logged');
  });

  // Test question progress
  await test('Track question progress', async () => {
    const progress = new QuestionProgress({
      userId: testUserId,
      testId,
      sessionId,
      questionId: 'q1',
      code: 'public class Main { }',
      completed: true,
      attempts: 1,
      timeSpentMs: 5000
    });
    await progress.save();
    if (!progress._id) throw new Error('Progress not tracked');
  });

  // Test lifecycle tracking
  await test('Track test lifecycle', async () => {
    const lifecycle = new TestLifecycle({
      userId: testUserId,
      testId,
      sessionId,
      actions: [
        { type: 'start', at: new Date(), details: {} },
        { type: 'submit', at: new Date(), details: {} }
      ]
    });
    await lifecycle.save();
    if (!lifecycle._id) throw new Error('Lifecycle not tracked');
  });

  // Test session retrieval
  await test('Retrieve session data', async () => {
    const session = await ProctorSession.findOne({ userId: testUserId, testId, sessionId });
    if (!session) throw new Error('Session not found');
  });

  // Test event retrieval
  await test('Retrieve events', async () => {
    const events = await ProctorEvent.find({ userId: testUserId, testId, sessionId });
    if (events.length === 0) throw new Error('Events not found');
  });

  // Cleanup
  await ProctorSession.deleteMany({ userId: testUserId, testId, sessionId });
  await ProctorEvent.deleteMany({ userId: testUserId, testId, sessionId });
  await QuestionProgress.deleteMany({ userId: testUserId, testId, sessionId });
  await TestLifecycle.deleteMany({ userId: testUserId, testId, sessionId });
};

const testUserProgress = async () => {
  log.section('User Progress Tests');

  const testEmail = `progress-test-${Date.now()}@example.com`;
  let testUserId;

  // Create test user
  await test('Create user for progress tracking', async () => {
    const user = new User({
      firstName: 'Progress',
      lastName: 'Test',
      email: testEmail,
      password: 'hashed',
      provider: 'local',
      role: 'user',
      progress: {
        completedLessons: [],
        completedQuizzes: [],
        totalScore: 0
      }
    });
    await user.save();
    testUserId = user._id;
  });

  // Test progress update
  await test('Update user progress', async () => {
    const user = await User.findByIdAndUpdate(
      testUserId,
      {
        $push: { 'progress.completedLessons': 'lesson1' },
        $inc: { 'progress.totalScore': 100 }
      },
      { new: true }
    );
    if (!user.progress.completedLessons.includes('lesson1')) throw new Error('Progress not updated');
  });

  // Test progress retrieval
  await test('Retrieve user progress', async () => {
    const user = await User.findById(testUserId);
    if (!user.progress) throw new Error('Progress not found');
    if (user.progress.totalScore !== 100) throw new Error('Progress data incorrect');
  });

  // Cleanup
  await User.deleteOne({ _id: testUserId });
};

const testConfiguration = async () => {
  log.section('Configuration Tests');

  await test('Database URL is configured', async () => {
    if (!config.MONGO_URL) throw new Error('MONGO_URL not configured');
  });

  await test('JWT secrets are configured', async () => {
    if (!config.JWT_ACCESS_SECRET || !config.JWT_REFRESH_SECRET) {
      throw new Error('JWT secrets not configured');
    }
  });

  await test('Frontend URL is configured', async () => {
    if (!config.FRONTEND_URL) throw new Error('FRONTEND_URL not configured');
  });

  await test('Backend URL is configured', async () => {
    if (!config.BACKEND_URL) throw new Error('BACKEND_URL not configured');
  });

  await test('Compiler configuration is valid', async () => {
    if (!config.PAIZA_API_BASE) throw new Error('PAIZA_API_BASE not configured');
    if (config.JAVA_SOURCE_LIMIT_BYTES <= 0) throw new Error('JAVA_SOURCE_LIMIT_BYTES invalid');
    if (config.COMPILER_MAX_POLLS <= 0) throw new Error('COMPILER_MAX_POLLS invalid');
  });
};

const testDatabaseConnectivity = async () => {
  log.section('Database Connectivity Tests');

  await test('MongoDB connection is working', async () => {
    const admin = mongoose.connection.db.admin();
    const status = await admin.ping();
    if (!status) throw new Error('MongoDB ping failed');
  });

  await test('User collection is accessible', async () => {
    const count = await User.countDocuments();
    if (typeof count !== 'number') throw new Error('User collection not accessible');
  });

  await test('Token collection is accessible', async () => {
    const count = await Token.countDocuments();
    if (typeof count !== 'number') throw new Error('Token collection not accessible');
  });

  await test('Proctor collections are accessible', async () => {
    const sessionCount = await ProctorSession.countDocuments();
    const eventCount = await ProctorEvent.countDocuments();
    if (typeof sessionCount !== 'number' || typeof eventCount !== 'number') {
      throw new Error('Proctor collections not accessible');
    }
  });
};

const printSummary = () => {
  log.section('Test Summary');
  console.log(`Total Tests: ${testsPassed + testsFailed}`);
  console.log(`${colors.green}Passed: ${testsPassed}${colors.reset}`);
  console.log(`${colors.red}Failed: ${testsFailed}${colors.reset}`);

  const successRate = ((testsPassed / (testsPassed + testsFailed)) * 100).toFixed(2);
  console.log(`\nSuccess Rate: ${successRate}%`);

  if (testsFailed === 0) {
    log.success('All tests passed! ✨');
    process.exit(0);
  } else {
    log.error(`${testsFailed} test(s) failed.`);
    process.exit(1);
  }
};

// Run all tests
const runTests = async () => {
  console.log(`${colors.cyan}╔════════════════════════════════════════════════════════════╗${colors.reset}`);
  console.log(`${colors.cyan}║     End-to-End Integration Tests                           ║${colors.reset}`);
  console.log(`${colors.cyan}╚════════════════════════════════════════════════════════════╝${colors.reset}\n`);

  await connectDatabase();

  await testConfiguration();
  await testDatabaseConnectivity();
  await testUserAuthentication();
  await testProctoringSessions();
  await testUserProgress();

  await disconnectDatabase();

  printSummary();
};

runTests().catch(error => {
  log.error(`Test suite failed: ${error.message}`);
  process.exit(1);
});
