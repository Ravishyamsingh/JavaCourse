#!/usr/bin/env node

/**
 * Database Initialization Script
 * Creates indexes and initializes database collections
 * Run: npm run init-db
 */

import mongoose from 'mongoose';
import config from '../src/config.js';
import { User } from '../src/models.js';
import { Token } from '../src/models/Token.js';
import { ProctorSession, ProctorEvent, QuestionProgress, TestLifecycle } from '../src/models/ProctorModels.js';
import { logger } from '../src/utils/monitoring.js';

const initializeDatabase = async () => {
  try {
    console.log('\n🔄 Starting database initialization...\n');

    // Step 1: Connect to MongoDB
    logger.info('Connecting to MongoDB...', { url: config.MONGO_URL });
    console.log('📡 Connecting to MongoDB...');
    
    await mongoose.connect(config.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    });
    
    console.log('✅ Connected to MongoDB\n');
    logger.info('Connected to MongoDB successfully');

    // Step 2: Create indexes for User collection
    console.log('📑 Creating indexes for User collection...');
    await User.collection.createIndex({ email: 1 }, { unique: true });
    await User.collection.createIndex({ googleId: 1 }, { sparse: true });
    await User.collection.createIndex({ role: 1 });
    await User.collection.createIndex({ createdAt: -1 });
    await User.collection.createIndex({ lastLogin: -1 });
    console.log('✅ User indexes created\n');
    logger.info('User indexes created');

    // Step 3: Create indexes for Token collection
    console.log('📑 Creating indexes for Token collection...');
    await Token.collection.createIndex({ userId: 1, isRevoked: 1 });
    await Token.collection.createIndex({ refreshToken: 1 }, { sparse: true });
    await Token.collection.createIndex({ expiresAt: 1 });
    console.log('✅ Token indexes created\n');
    logger.info('Token indexes created');

    // Step 4: Create indexes for ProctorSession collection
    console.log('📑 Creating indexes for ProctorSession collection...');
    await ProctorSession.collection.createIndex({ userId: 1, testId: 1, sessionId: 1 }, { unique: true });
    await ProctorSession.collection.createIndex({ userId: 1, status: 1 });
    await ProctorSession.collection.createIndex({ testId: 1 });
    console.log('✅ ProctorSession indexes created\n');
    logger.info('ProctorSession indexes created');

    // Step 5: Create indexes for ProctorEvent collection
    console.log('📑 Creating indexes for ProctorEvent collection...');
    await ProctorEvent.collection.createIndex({ userId: 1, testId: 1, createdAt: -1 });
    await ProctorEvent.collection.createIndex({ eventIdempotencyKey: 1 }, { sparse: true });
    await ProctorEvent.collection.createIndex({ type: 1, createdAt: -1 });
    await ProctorEvent.collection.createIndex({ severity: 1, processed: 1 });
    console.log('✅ ProctorEvent indexes created\n');
    logger.info('ProctorEvent indexes created');

    // Step 6: Create indexes for QuestionProgress collection
    console.log('📑 Creating indexes for QuestionProgress collection...');
    await QuestionProgress.collection.createIndex({ userId: 1, testId: 1, sessionId: 1, questionId: 1 }, { unique: true });
    console.log('✅ QuestionProgress indexes created\n');
    logger.info('QuestionProgress indexes created');

    // Step 7: Create indexes for TestLifecycle collection
    console.log('📑 Creating indexes for TestLifecycle collection...');
    await TestLifecycle.collection.createIndex({ userId: 1, testId: 1, sessionId: 1 }, { unique: true });
    console.log('✅ TestLifecycle indexes created\n');
    logger.info('TestLifecycle indexes created');

    // Step 8: Check for existing admin
    console.log('🔍 Checking for existing superadmin...');
    const adminExists = await User.findOne({ role: 'superadmin' });
    
    if (adminExists) {
      console.log(`✅ Superadmin found: ${adminExists.email}\n`);
      logger.info('Superadmin already exists', { email: adminExists.email });
    } else {
      console.log('⚠️  No superadmin found');
      console.log('📝 To create a superadmin, run: npm run create-admin\n');
      logger.warn('No superadmin found in database');
    }

    // Step 9: Get collection statistics
    console.log('📊 Collection Statistics:');
    const userCount = await User.countDocuments();
    const tokenCount = await Token.countDocuments();
    const sessionCount = await ProctorSession.countDocuments();
    const eventCount = await ProctorEvent.countDocuments();
    const progressCount = await QuestionProgress.countDocuments();
    const lifecycleCount = await TestLifecycle.countDocuments();

    console.log(`   Users: ${userCount}`);
    console.log(`   Tokens: ${tokenCount}`);
    console.log(`   Proctor Sessions: ${sessionCount}`);
    console.log(`   Proctor Events: ${eventCount}`);
    console.log(`   Question Progress: ${progressCount}`);
    console.log(`   Test Lifecycle: ${lifecycleCount}\n`);

    logger.info('Database statistics', {
      users: userCount,
      tokens: tokenCount,
      sessions: sessionCount,
      events: eventCount,
      progress: progressCount,
      lifecycle: lifecycleCount
    });

    // Step 10: Verify indexes
    console.log('✅ Verifying indexes...');
    const userIndexes = await User.collection.getIndexes();
    const tokenIndexes = await Token.collection.getIndexes();
    const sessionIndexes = await ProctorSession.collection.getIndexes();
    const eventIndexes = await ProctorEvent.collection.getIndexes();
    const progressIndexes = await QuestionProgress.collection.getIndexes();
    const lifecycleIndexes = await TestLifecycle.collection.getIndexes();

    console.log(`   User indexes: ${Object.keys(userIndexes).length}`);
    console.log(`   Token indexes: ${Object.keys(tokenIndexes).length}`);
    console.log(`   Session indexes: ${Object.keys(sessionIndexes).length}`);
    console.log(`   Event indexes: ${Object.keys(eventIndexes).length}`);
    console.log(`   Progress indexes: ${Object.keys(progressIndexes).length}`);
    console.log(`   Lifecycle indexes: ${Object.keys(lifecycleIndexes).length}\n`);

    console.log('✅ Database initialization completed successfully!\n');
    logger.info('Database initialization completed successfully');

    // Disconnect
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB\n');
    logger.info('Disconnected from MongoDB');

    process.exit(0);

  } catch (error) {
    console.error('\n❌ Database initialization failed:', error.message);
    logger.error('Database initialization failed', {
      message: error.message,
      stack: error.stack,
      code: error.code
    });

    if (error.message.includes('connect ECONNREFUSED')) {
      console.error('\n❌ MongoDB is not running!');
      console.error(`   Connection string: ${config.MONGO_URL}`);
      console.error('   Please start MongoDB and try again.\n');
    }

    if (error.message.includes('authentication failed')) {
      console.error('\n❌ MongoDB authentication failed!');
      console.error('   Check your MONGO_URL credentials.\n');
    }

    process.exit(1);
  }
};

// Run initialization
initializeDatabase();
