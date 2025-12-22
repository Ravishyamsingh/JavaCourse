// Backend Configuration
// Following the patterns specified in copilot instructions

import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
// Load environment variables with flexible behavior for local development.
// Priority: explicit environment > .env > environment-specific overrides.

const NODE_ENV = process.env.NODE_ENV || 'development';

const loadEnvFile = (fileName) => {
  const filePath = path.resolve(process.cwd(), fileName);
  if (!fs.existsSync(filePath)) {
    return;
  }

  dotenv.config({ path: filePath, override: true });
};

// Baseline environment configuration
loadEnvFile('.env');

if (NODE_ENV === 'development') {
  // Local-first overrides so developers can keep production values in .env
  loadEnvFile('.env.local');
  loadEnvFile('.env.development');
  loadEnvFile('.env.development.local');
} else {
  loadEnvFile('.env.local');
  loadEnvFile(`.env.${NODE_ENV}`);
  loadEnvFile(`.env.${NODE_ENV}.local`);
}

const config = {
  // Server Configuration
  PORT: process.env.PORT || 5000,
  NODE_ENV,
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',

  // Database Configuration
  // Default to a local MongoDB instance for development
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017/javacourse',

  // Redis Configuration
  REDIS_URL: process.env.REDIS_URL,
  REDIS_PASSWORD: process.env.REDIS_PASSWORD,
  REDIS_DB: parseInt(process.env.REDIS_DB) || 0,

  // Frontend Configuration
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  BACKEND_URL: process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 5000}`,

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
  GOOGLE_CALLBACK_URL:
    process.env.GOOGLE_CALLBACK_URL ||
    `${process.env.BACKEND_URL || `http://localhost:${process.env.PORT || 5000}`}/api/auth/google/callback`,

  // Security Configuration
  BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 12,
  SESSION_SECRET: process.env.SESSION_SECRET || 'your-session-secret-change-in-production',

  // Rate Limiting
  RATE_LIMIT_WINDOW_MS: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
  RATE_LIMIT_MAX_REQUESTS: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,

  // CORS Configuration
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173',
  COOKIE_DOMAIN: process.env.COOKIE_DOMAIN,
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || '',

  // Remote Compiler Configuration
  PAIZA_API_BASE: process.env.PAIZA_API_BASE || 'https://api.paiza.io',
  PAIZA_API_KEY: process.env.PAIZA_API_KEY || 'guest',
  JAVA_SOURCE_LIMIT_BYTES: parseInt(process.env.JAVA_SOURCE_LIMIT_BYTES) || 40000,
  JAVA_INPUT_LIMIT_BYTES: parseInt(process.env.JAVA_INPUT_LIMIT_BYTES) || 8000,
  JAVA_OUTPUT_LIMIT_BYTES: parseInt(process.env.JAVA_OUTPUT_LIMIT_BYTES) || 20000,
  COMPILER_POLL_INTERVAL_MS: parseInt(process.env.COMPILER_POLL_INTERVAL_MS) || 1200,
  COMPILER_MAX_POLLS: parseInt(process.env.COMPILER_MAX_POLLS) || 20,

  // Gemini API Configuration
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  GEMINI_API_BASE: process.env.GEMINI_API_BASE || 'https://generativelanguage.googleapis.com/v1beta/models',
  GEMINI_MODEL: process.env.GEMINI_MODEL || 'gemini-pro',
  GEMINI_TIMEOUT_MS: parseInt(process.env.GEMINI_TIMEOUT_MS) || 30000,
  GEMINI_MAX_RETRIES: parseInt(process.env.GEMINI_MAX_RETRIES) || 3,
  GEMINI_RATE_LIMIT_PER_MINUTE: parseInt(process.env.GEMINI_RATE_LIMIT_PER_MINUTE) || 60,

  // Email Configuration (Nodemailer)
  EMAIL_SERVICE: process.env.EMAIL_SERVICE || 'gmail',
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: parseInt(process.env.EMAIL_PORT) || 587,
  EMAIL_SECURE: process.env.EMAIL_SECURE === 'true',
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM || `Java Course <${process.env.EMAIL_USER}>`,

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

// Validate configuration on startup
const validateConfiguration = () => {
  const errors = [];
  const warnings = [];

  // Critical checks - must have in production
  if (config.NODE_ENV === 'production') {
    if (!config.JWT_ACCESS_SECRET) {
      errors.push('JWT_ACCESS_SECRET is required in production');
    } else if (config.JWT_ACCESS_SECRET.length < 32) {
      errors.push('JWT_ACCESS_SECRET must be at least 32 characters in production');
    }

    if (!config.JWT_REFRESH_SECRET) {
      errors.push('JWT_REFRESH_SECRET is required in production');
    } else if (config.JWT_REFRESH_SECRET.length < 32) {
      errors.push('JWT_REFRESH_SECRET must be at least 32 characters in production');
    }

    if (!config.MONGO_URL) {
      errors.push('MONGO_URL is required in production');
    }

    if (!config.GOOGLE_CLIENT_ID) {
      warnings.push('GOOGLE_CLIENT_ID not set - Google OAuth will not work');
    }

    if (!config.GOOGLE_CLIENT_SECRET) {
      warnings.push('GOOGLE_CLIENT_SECRET not set - Google OAuth will not work');
    }
  }

  // Development warnings
  if (config.NODE_ENV === 'development') {
    if (!config.JWT_ACCESS_SECRET) {
      warnings.push('JWT_ACCESS_SECRET not set - using weak default');
    }

    if (!config.JWT_REFRESH_SECRET) {
      warnings.push('JWT_REFRESH_SECRET not set - using weak default');
    }

    if (!config.MONGO_URL || config.MONGO_URL.includes('localhost')) {
      warnings.push('Using local MongoDB - ensure it is running');
    }
  }

  // Print errors
  if (errors.length > 0) {
    console.error('\n❌ CONFIGURATION ERRORS:');
    errors.forEach(error => console.error(`   - ${error}`));
    console.error('\nPlease fix these errors before starting the server.\n');
    process.exit(1);
  }

  // Print warnings
  if (warnings.length > 0) {
    console.warn('\n⚠️  CONFIGURATION WARNINGS:');
    warnings.forEach(warning => console.warn(`   - ${warning}`));
    console.warn('');
  }
};

// Run validation
validateConfiguration();

console.log('✅ Backend configuration loaded');
console.log(`📍 Environment: ${config.NODE_ENV}`);
console.log(`🗄️ Database: ${config.MONGO_URL}`);
console.log(`🌐 Frontend: ${config.FRONTEND_URL}`);
console.log(`🔐 JWT Access Expiry: ${config.JWT_ACCESS_EXPIRY}`);
console.log(`🔑 JWT Refresh Expiry: ${config.JWT_REFRESH_EXPIRY}`);

export default config;