import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from '../config.js';
import { logger } from './monitoring.js';

const SALT_ROUNDS = 12; // Increased from 10 for better security
const TOKEN_EXPIRY = '15m'; // Reduced from 7d for better security

// Validate required environment variables at startup
const validateEnvironment = () => {
  // In production, require a strong JWT_SECRET. In development, allow a fallback
  if (config.NODE_ENV === 'production') {
    if (!config.JWT_ACCESS_SECRET) {
      throw new Error('JWT_ACCESS_SECRET environment variable is required in production');
    }
    if (config.JWT_ACCESS_SECRET.length < 32) {
      throw new Error('JWT_ACCESS_SECRET must be at least 32 characters long in production');
    }
  } else {
    // Development: if JWT_ACCESS_SECRET is missing, try falling back or set a dev default.
    if (!config.JWT_ACCESS_SECRET) {
      logger.warn('JWT_ACCESS_SECRET not set — using a weak development default. Do NOT use in production.');
    }
  }
};

// Initialize environment validation
validateEnvironment();

// Password utilities with enhanced security
export const hashPassword = async (password) => {
  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  
  const saltRounds = config.BCRYPT_SALT_ROUNDS || SALT_ROUNDS;
  const salt = await bcrypt.genSalt(saltRounds);
  return await bcrypt.hash(password, salt);
};

export const comparePassword = async (password, hashedPassword) => {
  if (!password || !hashedPassword) {
    throw new Error('Password and hash are required for comparison');
  }
  return await bcrypt.compare(password, hashedPassword);
};

// DEPRECATED: Legacy JWT utilities - Use tokenManager instead
// These functions are kept for backward compatibility but should not be used
export const generateToken = (payload) => {
  logger.warn('DEPRECATED: Use tokenManager.generateAccessToken() instead');
  const secret = config.JWT_ACCESS_SECRET || config.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_ACCESS_SECRET or JWT_SECRET environment variable is required');
  }
  return jwt.sign(payload, secret, {
    expiresIn: TOKEN_EXPIRY,
    issuer: 'java-course-api',
    audience: 'java-course-client'
  });
};

export const verifyToken = (token) => {
  logger.warn('DEPRECATED: Use tokenManager.verifyAccessToken() instead');
  const secret = config.JWT_ACCESS_SECRET || config.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_ACCESS_SECRET or JWT_SECRET environment variable is required');
  }
  return jwt.verify(token, secret);
};

// Secure random token generation utility
export const generateSecureToken = (length = 32) => {
  const crypto = require('crypto');
  return crypto.randomBytes(length).toString('hex');
};

// Password strength validation
export const validatePasswordStrength = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const errors = [];
  
  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long`);
  }
  if (!hasUpperCase) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!hasLowerCase) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!hasNumbers) {
    errors.push('Password must contain at least one number');
  }
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
