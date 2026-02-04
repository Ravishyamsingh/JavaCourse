import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function updateAdmin() {
  try {
    const uri = process.env.MONGODB_URI || process.env.MONGO_URL;
    
    // Validate URI before attempting connection
    if (!uri) {
      console.error('❌ Error: MongoDB URI not found');
      console.error('Please set MONGODB_URI or MONGO_URL environment variable');
      process.exit(1);
    }
    
    console.log('Connecting to MongoDB...');
    
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB');
    
    // Get target email from command line or environment
    const targetEmail = process.argv[2] || process.env.ADMIN_EMAIL;
    
    if (!targetEmail) {
      console.error('❌ Error: Target email not provided');
      console.error('Usage: node updateAdminRole.mjs <email> OR set ADMIN_EMAIL env variable');
      await mongoose.disconnect();
      process.exit(1);
    }
    
    console.log(`Updating user: ${targetEmail}`);
    
    const result = await mongoose.connection.db.collection('users').updateOne(
      { email: targetEmail },
      { 
        $set: { 
          role: 'superadmin',
          isActive: true,
          isEmailVerified: true
        }
      }
    );
    
    console.log('Update result:', JSON.stringify(result, null, 2));
    
    // Check if any documents were matched/modified
    if (result.matchedCount === 0) {
      console.error(`❌ Error: No user found with email: ${targetEmail}`);
      await mongoose.disconnect();
      process.exit(1);
    }
    
    if (result.modifiedCount === 0) {
      console.warn(`⚠️  Warning: User ${targetEmail} was found but role was already set to superadmin`);
    } else {
      console.log(`✅ Successfully updated ${result.modifiedCount} user(s)`);
    }
    
    const user = await mongoose.connection.db.collection('users').findOne(
      { email: targetEmail }
    );
    
    console.log('✅ User email:', user?.email);
    console.log('✅ User role now:', user?.role);
    console.log('✅ User isActive:', user?.isActive);
    
    await mongoose.disconnect();
    console.log('✅ Done - Disconnected from MongoDB');
  } catch (err) {
    console.error('❌ Error:', err.message);
    try {
      if (mongoose.connection.readyState !== 0) {
        await mongoose.disconnect();
        console.log('🔌 MongoDB connection cleaned up');
      }
    } catch (closeError) {
      console.error('❌ Error closing MongoDB connection:', closeError.message);
    }
    process.exit(1);
  }
}

updateAdmin();
