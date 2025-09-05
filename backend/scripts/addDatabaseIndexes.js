#!/usr/bin/env node

/**
 * Database Index Creation Script
 * Adds performance-critical indexes to MongoDB collections
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/javacourse';

async function createIndexes() {
  try {
    console.log('🔗 Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    const db = mongoose.connection.db;

    console.log('📊 Creating performance indexes...');

    // User collection indexes
    console.log('Creating User collection indexes...');
    await db.collection('users').createIndex({ email: 1 }, { unique: true });
    await db.collection('users').createIndex({ googleId: 1 }, { unique: true, sparse: true });
    await db.collection('users').createIndex({ role: 1, isActive: 1 });
    await db.collection('users').createIndex({ lastLogin: -1 });
    await db.collection('users').createIndex({ 'progress.enrolledCourses': 1 });
    await db.collection('users').createIndex({ createdAt: -1 });
    await db.collection('users').createIndex({ lockUntil: 1 }, { sparse: true });
    
    // Compound indexes for common queries
    await db.collection('users').createIndex({ 
      role: 1, 
      isActive: 1, 
      isEmailVerified: 1 
    });

    // Token collection indexes
    console.log('Creating Token collection indexes...');
    await db.collection('oauth_tokens').createIndex({ userId: 1, isRevoked: 1 });
    await db.collection('oauth_tokens').createIndex({ refreshToken: 1, isRevoked: 1 });
    await db.collection('oauth_tokens').createIndex({ 
      expiresAt: 1 
    }, { 
      expireAfterSeconds: 0 
    });
    await db.collection('oauth_tokens').createIndex({ 
      refreshExpiresAt: 1 
    }, { 
      expireAfterSeconds: 0 
    });
    await db.collection('oauth_tokens').createIndex({ ipAddress: 1, createdAt: -1 });

    // Course collection indexes (if exists)
    console.log('Creating Course collection indexes...');
    try {
      await db.collection('courses').createIndex({ name: 1 });
      await db.collection('courses').createIndex({ createdAt: -1 });
      await db.collection('courses').createIndex({ isActive: 1 });
    } catch (error) {
      console.log('⚠️  Course collection may not exist yet');
    }

    console.log('✅ All indexes created successfully');

    // List all indexes for verification
    console.log('\n📋 Verifying indexes...');
    const userIndexes = await db.collection('users').listIndexes().toArray();
    const tokenIndexes = await db.collection('oauth_tokens').listIndexes().toArray();
    
    console.log(`Users collection: ${userIndexes.length} indexes`);
    console.log(`Tokens collection: ${tokenIndexes.length} indexes`);

    userIndexes.forEach(index => {
      console.log(`  - ${index.name}: ${JSON.stringify(index.key)}`);
    });

    tokenIndexes.forEach(index => {
      console.log(`  - ${index.name}: ${JSON.stringify(index.key)}`);
    });

  } catch (error) {
    console.error('❌ Error creating indexes:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  }
}

// Run the script
createIndexes().then(() => {
  console.log('🎉 Database indexing completed successfully');
  process.exit(0);
}).catch(error => {
  console.error('💥 Database indexing failed:', error);
  process.exit(1);
});