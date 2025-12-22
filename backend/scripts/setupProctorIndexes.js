import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { ProctorEvent, ProctorSession, QuestionProgress, TestLifecycle } from '../src/models/ProctorModels.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/java-course';

async function setupIndexes() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    console.log('\n📊 Setting up ProctorEvent indexes...');
    await ProctorEvent.collection.createIndex({ userId: 1, testId: 1, createdAt: -1 });
    await ProctorEvent.collection.createIndex({ eventIdempotencyKey: 1 }, { unique: true, sparse: true });
    await ProctorEvent.collection.createIndex({ type: 1, createdAt: -1 });
    await ProctorEvent.collection.createIndex({ severity: 1, processed: 1 });
    await ProctorEvent.collection.createIndex({ sessionId: 1, createdAt: -1 });
    console.log('✅ ProctorEvent indexes created');

    console.log('\n📊 Setting up ProctorSession indexes...');
    await ProctorSession.collection.createIndex({ userId: 1, testId: 1, sessionId: 1 }, { unique: true });
    await ProctorSession.collection.createIndex({ userId: 1, status: 1 });
    await ProctorSession.collection.createIndex({ sessionId: 1 }, { unique: true });
    await ProctorSession.collection.createIndex({ status: 1, createdAt: -1 });
    console.log('✅ ProctorSession indexes created');

    console.log('\n📊 Setting up QuestionProgress indexes...');
    await QuestionProgress.collection.createIndex({ userId: 1, testId: 1, sessionId: 1, questionId: 1 }, { unique: true });
    await QuestionProgress.collection.createIndex({ userId: 1, sessionId: 1 });
    await QuestionProgress.collection.createIndex({ completed: 1, createdAt: -1 });
    console.log('✅ QuestionProgress indexes created');

    console.log('\n📊 Setting up TestLifecycle indexes...');
    await TestLifecycle.collection.createIndex({ userId: 1, testId: 1, sessionId: 1 }, { unique: true });
    await TestLifecycle.collection.createIndex({ createdAt: -1 });
    console.log('✅ TestLifecycle indexes created');

    console.log('\n📋 Index Summary:');
    console.log('ProctorEvent indexes:', await ProctorEvent.collection.getIndexes());
    console.log('ProctorSession indexes:', await ProctorSession.collection.getIndexes());
    console.log('QuestionProgress indexes:', await QuestionProgress.collection.getIndexes());
    console.log('TestLifecycle indexes:', await TestLifecycle.collection.getIndexes());

    console.log('\n✅ All indexes created successfully!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error setting up indexes:', error);
    process.exit(1);
  }
}

setupIndexes();
