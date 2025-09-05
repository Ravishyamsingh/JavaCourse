import mongoose from 'mongoose';
import { User } from '../src/models.js';
import { hashPassword } from '../src/utils/auth.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const ADMIN_EMAIL = 'ravishyamsingh52325@gmail.com';
const ADMIN_PASSWORD = 'RaviShyam@1234';

async function createAdminUser() {
  try {
    // Connect to MongoDB
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/javacourse';
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // Check if admin user already exists
    let adminUser = await User.findOne({ email: ADMIN_EMAIL });

    if (adminUser) {
      // Update existing user to superadmin
      adminUser.role = 'superadmin';
      adminUser.isActive = true;
      adminUser.isEmailVerified = true;
      
      // Update password if it's a local account
      if (adminUser.provider === 'local') {
        adminUser.password = await hashPassword(ADMIN_PASSWORD);
      }
      
      await adminUser.save();
      console.log('✅ Updated existing user to Super Admin:', ADMIN_EMAIL);
    } else {
      // Create new super admin user
      const hashedPassword = await hashPassword(ADMIN_PASSWORD);
      
      adminUser = new User({
        firstName: 'Ravi',
        lastName: 'Shyam Singh',
        email: ADMIN_EMAIL,
        password: hashedPassword,
        role: 'superadmin',
        provider: 'local',
        isEmailVerified: true,
        isActive: true,
        profile: {
          bio: 'Super Administrator of Java Course Platform',
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
          language: 'en',
          privacy: {
            profileVisibility: 'public',
            showProgress: true,
            showAchievements: true
          }
        },
        progress: {
          completedLessons: [],
          completedQuizzes: [],
          achievements: [],
          certificatesEarned: [],
          totalScore: 0,
          enrolledCourses: [],
          studyStreak: 0,
          totalStudyTime: 0
        },
        adminData: {
          permissions: [
            {
              resource: '*',
              actions: ['*'],
              conditions: {}
            }
          ],
          lastActivity: new Date(),
          managedUsers: [],
          systemLogs: [
            {
              action: 'account_created',
              resource: 'user',
              timestamp: new Date(),
              details: { message: 'Super admin account created via script' }
            }
          ]
        }
      });

      await adminUser.save();
      console.log('✅ Created new Super Admin user:', ADMIN_EMAIL);
    }

    console.log('📋 Admin User Details:');
    console.log('  Email:', adminUser.email);
    console.log('  Role:', adminUser.role);
    console.log('  Provider:', adminUser.provider);
    console.log('  Active:', adminUser.isActive);
    console.log('  Email Verified:', adminUser.isEmailVerified);

    // Also create a test regular user for testing
    const testUserEmail = 'test@example.com';
    let testUser = await User.findOne({ email: testUserEmail });

    if (!testUser) {
      const testHashedPassword = await hashPassword('password123');
      
      testUser = new User({
        firstName: 'Test',
        lastName: 'User',
        email: testUserEmail,
        password: testHashedPassword,
        role: 'user',
        provider: 'local',
        isEmailVerified: true,
        isActive: true,
        profile: { bio: 'Test user account', socialLinks: {} },
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
        },
        progress: {
          completedLessons: [],
          completedQuizzes: [],
          achievements: [],
          certificatesEarned: [],
          totalScore: 0,
          enrolledCourses: [],
          studyStreak: 0,
          totalStudyTime: 0
        }
      });

      await testUser.save();
      console.log('✅ Created test user:', testUserEmail);
    }

    console.log('\n🎉 Admin setup completed successfully!');
    console.log('\n📝 Login Credentials:');
    console.log('  Super Admin Email:', ADMIN_EMAIL);
    console.log('  Super Admin Password:', ADMIN_PASSWORD);
    console.log('  Test User Email:', testUserEmail);
    console.log('  Test User Password: password123');

  } catch (error) {
    console.error('❌ Error creating admin user:', error);
  } finally {
    await mongoose.disconnect();
    console.log('✅ Disconnected from MongoDB');
    process.exit(0);
  }
}

// Run the script
createAdminUser();
