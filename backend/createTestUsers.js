import mongoose from 'mongoose';
import { User } from './src/models.js';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();

async function createTestUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Safety guard: Only allow user deletion in safe environments
    const isDevelopment = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
    const allowDelete = process.env.ALLOW_USER_DELETE === 'true';
    
    if (!isDevelopment && !allowDelete) {
      console.error('❌ User deletion blocked - not in development/test environment or ALLOW_USER_DELETE not set');
      console.error('Set NODE_ENV=development or ALLOW_USER_DELETE=true to proceed');
      process.exit(1);
    }

    // Clear existing test users only (safety measure)
    await User.deleteMany({ isTestAccount: true });
    console.log('🗑️  Cleared existing test users');

    // Create Admin User with environment-driven credentials
    const adminEmail = process.env.TEST_ADMIN_EMAIL || 'test+admin@example.com';
    const adminPasswordGenerated = !process.env.TEST_ADMIN_PASSWORD;
    const adminPlainPassword = process.env.TEST_ADMIN_PASSWORD || crypto.randomBytes(16).toString('hex');
    const adminPassword = await bcrypt.hash(adminPlainPassword, 12);
    const admin = new User({
      firstName: 'Test',
      lastName: 'Admin',
      email: adminEmail,
      password: adminPassword,
      role: 'superadmin',
      provider: 'local',
      isEmailVerified: true,
      isActive: true,
      isTestAccount: true,
      profile: {
        bio: 'Super Administrator',
        socialLinks: {}
      },
      preferences: {
        theme: 'system',
        notifications: {
          email: true,
          push: true,
          sms: false,
          courseUpdates: true,
          achievements: true,
          marketing: false
        },
        language: 'en'
      }
    });
    await admin.save();
    console.log('✅ Created admin:', admin.email);

    // Create Test User with secure password
    const testPasswordGenerated = !process.env.TEST_USER_PASSWORD;
    const testPlainPassword = process.env.TEST_USER_PASSWORD || crypto.randomBytes(12).toString('hex');
    const testPassword = await bcrypt.hash(testPlainPassword, 12);
    const testUser = new User({
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: testPassword,
      isTestAccount: true,
      role: 'user',
      provider: 'local',
      isEmailVerified: true,
      isActive: true,
      profile: {
        bio: 'Test user account',
        socialLinks: {}
      },
      preferences: {
        theme: 'system',
        notifications: {
          email: true,
          push: true,
          sms: false,
          courseUpdates: true,
          achievements: true,
          marketing: false
        },
        language: 'en'
      }
    });
    await testUser.save();
    console.log('✅ Created test user:', testUser.email);

    // Log credentials - always show generated passwords, debug mode for env-provided ones
    const shouldShowCredentials = process.env.DEBUG_CREDENTIALS === 'true' || adminPasswordGenerated || testPasswordGenerated;
    
    if (shouldShowCredentials) {
      console.log('\n📋 Login Credentials:');
      if (adminPasswordGenerated) {
        console.log(`  Admin: ${adminEmail} / ${adminPlainPassword} (GENERATED - SAVE THIS!)`);
      } else if (process.env.DEBUG_CREDENTIALS === 'true') {
        console.log(`  Admin: ${adminEmail} / ${adminPlainPassword}`);
      } else {
        console.log(`  Admin: ${adminEmail} / [env-provided]`);
      }
      
      if (testPasswordGenerated) {
        console.log(`  Test: ${testUser.email} / ${testPlainPassword} (GENERATED - SAVE THIS!)`);
      } else if (process.env.DEBUG_CREDENTIALS === 'true') {
        console.log(`  Test: ${testUser.email} / ${testPlainPassword}`);
      } else {
        console.log(`  Test: ${testUser.email} / [env-provided]`);
      }
    } else {
      console.log('\n📋 User accounts created successfully');
      console.log(`  Admin: ${adminEmail}`);
      console.log(`  Test: ${testUser.email}`);
      console.log('  Passwords stored securely - set DEBUG_CREDENTIALS=true to view');
    }

    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

createTestUsers();
