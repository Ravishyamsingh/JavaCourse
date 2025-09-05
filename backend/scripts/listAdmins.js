import dotenv from "dotenv";
import mongoose from "mongoose";
import { User } from "../src/models.js";

dotenv.config({ path: "../.env" });

const listAdmins = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/javacourse");
    console.log("Connected to MongoDB");

    // Find all admin and superadmin users
    const admins = await User.find({ 
      role: { $in: ['admin', 'superadmin'] } 
    }).select('firstName lastName email role provider isActive createdAt');

    if (admins.length === 0) {
      console.log("No admin users found in the database.");
    } else {
      console.log("📋 Admin Users Found:");
      console.log("=====================");
      admins.forEach((admin, index) => {
        console.log(`${index + 1}. ${admin.firstName} ${admin.lastName}`);
        console.log(`   📧 Email: ${admin.email}`);
        console.log(`   👑 Role: ${admin.role}`);
        console.log(`   🔗 Provider: ${admin.provider}`);
        console.log(`   ✅ Active: ${admin.isActive}`);
        console.log(`   📅 Created: ${admin.createdAt}`);
        console.log("   ────────────────────────────────");
      });
    }
    
  } catch (error) {
    console.error("❌ Error listing admins:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

listAdmins();
