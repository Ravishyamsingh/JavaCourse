import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUNDS = 12; // Increased from 10 for better security
const TOKEN_EXPIRY = '15m'; // Reduced from 7d for better security

// Validate required environment variables at startup
const validateEnvironment = () => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  if (process.env.JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET must be at least 32 characters long');
  }
};

// Initialize environment validation
validateEnvironment();

// Password utilities with enhanced security
export const hashPassword = async (password) => {
  if (!password || password.length < 6) {
    throw new Error('Password must be at least 6 characters long');
  }
  
  const saltRounds = Number(process.env.SALT_ROUNDS) || SALT_ROUNDS;
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
  console.warn('⚠️  DEPRECATED: Use tokenManager.generateAccessToken() instead');
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: TOKEN_EXPIRY,
    issuer: 'java-course-api',
    audience: 'java-course-client'
  });
};

export const verifyToken = (token) => {
  console.warn('⚠️  DEPRECATED: Use tokenManager.verifyAccessToken() instead');
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is required');
  }
  return jwt.verify(token, process.env.JWT_SECRET);
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
