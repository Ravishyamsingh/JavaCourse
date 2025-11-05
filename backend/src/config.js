// Backend Configuration
// Following the patterns specified in copilot instructions

import dotenv from 'dotenv';
// Load environment variables with flexible behavior for local development.
// Priority: explicit environment > .env > .env.local (when NODE_ENV=development)

const NODE_ENV = process.env.NODE_ENV || 'development';

// Always load .env if present
dotenv.config({ path: '.env' });

// If running locally, also load .env.local and .env.development (if present)
if (NODE_ENV === 'development') {
  dotenv.config({ path: '.env.local' });
  dotenv.config({ path: '.env.development' });
} else {
  // allow environment-specific file (optional) in non-dev modes
  dotenv.config({ path: `.env.${NODE_ENV}` });
}

const config = {
  // Server Configuration
  PORT: process.env.PORT || 5000,
  NODE_ENV,
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',

  // Database Configuration
  // Default to a local MongoDB instance for development
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

// Required variables are strictly enforced in production only.
const requiredEnvVars = [
  'JWT_ACCESS_SECRET',
  'JWT_REFRESH_SECRET',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'MONGO_URL'
];

if (NODE_ENV === 'production') {
  const missingVars = requiredEnvVars.filter((varName) => !config[varName]);
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables (production):', missingVars);
    console.error('Please configure these in your production environment (Vercel, PM2, etc.).');
    process.exit(1);
  }
} else {
  // In development, log warnings but do not exit; fallbacks exist for local work
  const missingVars = requiredEnvVars.filter((varName) => !config[varName]);
  if (missingVars.length > 0) {
    console.warn('⚠️ Development warning - missing environment variables:', missingVars);
    console.warn('Using defaults where possible. For a clean local setup, copy backend/.env.example to backend/.env and set values.');
  }
}

console.log('✅ Backend configuration loaded');
console.log(`📍 Environment: ${config.NODE_ENV}`);
console.log(`🗄️ Database: ${config.MONGO_URL}`);
console.log(`🌐 Frontend: ${config.FRONTEND_URL}`);

export default config;