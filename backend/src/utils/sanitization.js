/**
 * Input Sanitization Utility
 * Prevents XSS, SQL injection, and other attacks
 */

import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize string input
 */
export const sanitizeString = (input) => {
  if (typeof input !== 'string') return input;
  
  // Remove leading/trailing whitespace
  let sanitized = input.trim();
  
  // Remove null bytes
  sanitized = sanitized.replace(/\0/g, '');
  
  // Use DOMPurify for HTML sanitization
  sanitized = DOMPurify.sanitize(sanitized, { ALLOWED_TAGS: [] });
  
  return sanitized;
};

/**
 * Sanitize email
 */
export const sanitizeEmail = (email) => {
  if (typeof email !== 'string') return email;
  
  const sanitized = email.toLowerCase().trim();
  
  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(sanitized)) {
    throw new Error('Invalid email format');
  }
  
  return sanitized;
};

/**
 * Sanitize object recursively
 */
export const sanitizeObject = (obj) => {
  if (obj === null || obj === undefined) return obj;
  
  if (typeof obj === 'string') {
    return sanitizeString(obj);
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => sanitizeObject(item));
  }
  
  if (typeof obj === 'object') {
    const sanitized = {};
    for (const [key, value] of Object.entries(obj)) {
      // Sanitize key
      const sanitizedKey = sanitizeString(key);
      // Sanitize value
      sanitized[sanitizedKey] = sanitizeObject(value);
    }
    return sanitized;
  }
  
  return obj;
};

/**
 * Sanitize request body middleware
 */
export const sanitizeRequestBody = (req, res, next) => {
  if (req.body && typeof req.body === 'object') {
    req.body = sanitizeObject(req.body);
  }
  next();
};

/**
 * Sanitize query parameters middleware
 */
export const sanitizeQueryParams = (req, res, next) => {
  if (req.query && typeof req.query === 'object') {
    req.query = sanitizeObject(req.query);
  }
  next();
};

/**
 * Validate and sanitize URL
 */
export const sanitizeUrl = (url) => {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      throw new Error('Invalid protocol');
    }
    return urlObj.toString();
  } catch (error) {
    throw new Error('Invalid URL');
  }
};

/**
 * Escape HTML special characters
 */
export const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

/**
 * Validate file name
 */
export const sanitizeFileName = (fileName) => {
  // Remove path traversal attempts
  let sanitized = fileName.replace(/\.\./g, '');
  
  // Remove special characters except dots and hyphens
  sanitized = sanitized.replace(/[^a-zA-Z0-9._-]/g, '');
  
  // Limit length
  sanitized = sanitized.substring(0, 255);
  
  if (!sanitized) {
    throw new Error('Invalid file name');
  }
  
  return sanitized;
};

/**
 * Validate and sanitize phone number
 */
export const sanitizePhoneNumber = (phone) => {
  // Remove all non-digit characters
  const sanitized = phone.replace(/\D/g, '');
  
  // Check if it's a valid length (10-15 digits)
  if (sanitized.length < 10 || sanitized.length > 15) {
    throw new Error('Invalid phone number');
  }
  
  return sanitized;
};
