import mongoose from "mongoose";
import config from "../src/config.js";
import { logger } from "../src/utils/monitoring.js";

const connectDB = async () => {
  try {
    // Use config file for consistency with copilot instructions
    const connectionInstance = await mongoose.connect(config.MONGO_URL);
    logger.info('MongoDB connected successfully', {
      host: connectionInstance.connection.host,
      database: config.MONGO_URL.replace(/\/\/[^:]+:[^@]+@/, '//***:***@') // Mask credentials in logs
    });
  } catch (error) {
    logger.error('MongoDB connection failed', {
      message: error.message,
      stack: error.stack
    });
    process.exit(1);
  }
};

export default connectDB;

// // export default connectDB