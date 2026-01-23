import mongoose from 'mongoose';
import { User } from './src/models.js';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

async function createTestUsers() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing users for testing
    await User.deleteMany({});
    console.log('🗑️  Cleared existing users');

    // Create Admin User
    const adminPassword = await bcrypt.hash('RaviShyam@1234', 12);
    const admin = new User({
      firstName: 'Ravi',
      lastName: 'Shyam Singh',
      email: 'ravishyamsingh52325@gmail.com',
      password: adminPassword,
      role: 'superadmin',
      provider: 'local',
      isEmailVerified: true,
      isActive: true,
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

    // Create Test User
    const testPassword = await bcrypt.hash('password123', 12);
    const testUser = new User({
      firstName: 'Test',
      lastName: 'User',
      email: 'test@example.com',
      password: testPassword,
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

    console.log('\n📋 Login Credentials:');
    console.log('  Admin: ravishyamsingh52325@gmail.com / RaviShyam@1234');
    console.log('  Test: test@example.com / password123');

    await mongoose.disconnect();
    console.log('\n✅ Disconnected from MongoDB');
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

createTestUsers();
