import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function updateAdmin() {
  try {
    const uri = process.env.MONGODB_URI || process.env.MONGO_URL;
    console.log('Connecting to MongoDB...');
    
    await mongoose.connect(uri);
    console.log('✅ Connected to MongoDB');
    
    const result = await mongoose.connection.db.collection('users').updateOne(
      { email: 'ravishyamsingh52325@gmail.com' },
      { 
        $set: { 
          role: 'superadmin',
          isActive: true,
          isEmailVerified: true
        }
      }
    );
    
    console.log('Update result:', JSON.stringify(result, null, 2));
    
    const user = await mongoose.connection.db.collection('users').findOne(
      { email: 'ravishyamsingh52325@gmail.com' }
    );
    
    console.log('✅ User email:', user?.email);
    console.log('✅ User role now:', user?.role);
    console.log('✅ User isActive:', user?.isActive);
    
    await mongoose.disconnect();
    console.log('✅ Done - Disconnected from MongoDB');
  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

updateAdmin();
