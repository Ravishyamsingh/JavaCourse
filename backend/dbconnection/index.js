import mongoose from "mongoose";
import config from "../src/config.js";

const connectDB = async () => {
  try {
    // Use config file for consistency with copilot instructions
    const connectionInstance = await mongoose.connect(config.MONGO_URL);
    console.log(`✅ MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
    console.log(`📊 Database: ${config.MONGO_URL}`);
  } catch (error) {
    console.error("❌ MongoDB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;




















// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";


// const dbconnection = async () => {
//     try {
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("MONGODB connection FAILED ", error);
//         process.exit(1)
//     }
// }

// // export default connectDB