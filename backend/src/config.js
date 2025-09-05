// Backend Configuration
// Following the patterns specified in copilot instructions

import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: './.env' });

const config = {
  // Server Configuration
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',

  // Database Configuration
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/javacourse',

  // Frontend Configuration
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',

  // JWT Configuration
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  JWT_ACCESS_EXPIRY: process.env.JWT_ACCESS_EXPIRY || '15m',
  JWT_REFRESH_EXPIRY: process.env.JWT_REFRESH_EXPIRY || '7d',

  // Legacy JWT (for backward compatibility)
  JWT_SECRET: process.env.JWT_SECRET,

  // Google OAuth Configuration
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5000/api/auth/google/callback',

  // Security Configuration
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12,
  SESSION_SECRET: process.env.SESSION_SECRET || 'your-session-secret-change-in-production',

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,

  // CORS Configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',

  // Legacy Configuration (for backward compatibility)
  MONGODB_URI: process.env.MONGODB_URI || process.env.MONGO_URL,
  SALT: parseInt(process.env.SALT) || 12,
};

// Validation
const requiredEnvVars = [
  'JWT_ACCESS_SECRET',
  'JWT_REFRESH_SECRET',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'MONGO_URL'
];

const missingVars = requiredEnvVars.filter(varName => !config[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars);
  console.error('Please check your .env file and ensure all required variables are set.');
  process.exit(1);
}

console.log('✅ Backend configuration loaded successfully');
console.log(`📍 Environment: ${config.NODE_ENV}`);
console.log(`🗄️ Database: ${config.MONGO_URL}`);
console.log(`🌐 Frontend: ${config.FRONTEND_URL}`);

export default config;