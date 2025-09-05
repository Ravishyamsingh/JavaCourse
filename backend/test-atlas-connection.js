// Quick MongoDB Atlas Connection Test
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const testConnection = async () => {
    console.log('🔄 Testing MongoDB Atlas connection...');
    console.log('Connection URL (masked):', process.env.MONGO_URL?.replace(/:[^:]*@/, ':****@'));
    
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('✅ Successfully connected to MongoDB Atlas!');
        console.log('📁 Database:', mongoose.connection.name);
        console.log('🌐 Host:', mongoose.connection.host);
        
        // Test a simple operation
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('📊 Available collections:', collections.map(c => c.name));
        
        await mongoose.disconnect();
        console.log('✅ Test completed successfully!');
        process.exit(0);
        
    } catch (error) {
        console.error('❌ MongoDB Atlas connection failed:');
        console.error('Error:', error.message);
        
        if (error.message.includes('authentication failed')) {
            console.error('🔐 Authentication issue - check username/password');
        } else if (error.message.includes('network')) {
            console.error('🌐 Network issue - check internet connection');
        } else if (error.message.includes('timeout')) {
            console.error('⏰ Connection timeout - check network access in Atlas');
        }
        
        process.exit(1);
    }
};

testConnection();
