import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { body, validationResult } from 'express-validator';
import crypto from 'crypto';

// Configure Google OAuth rate limiting so we can tune it per environment
// Allow higher limits in shared test environments while keeping production defaults tight
const defaultGoogleOAuthWindowMs = 60 * 60 * 1000; // 1 hour default window
const googleOAuthWindowMs = parseInt(process.env.GOOGLE_OAUTH_WINDOW_MS || `${defaultGoogleOAuthWindowMs}`, 10);
const googleOAuthMaxAttempts = parseInt(process.env.GOOGLE_OAUTH_MAX_ATTEMPTS || '60', 10);

const googleOAuthRetryMinutes = Math.ceil(googleOAuthWindowMs / 60000);
const googleOAuthRetryLabel = (() => {
  if (googleOAuthRetryMinutes >= 120) {
    const hours = Math.ceil(googleOAuthRetryMinutes / 60);
    return hours === 1 ? '1 hour' : `${hours} hours`;
  }
  return googleOAuthRetryMinutes === 1 ? '1 minute' : `${googleOAuthRetryMinutes} minutes`;
})();

// Store for tracking failed attempts per IP/email combination
const failedAttempts = new Map();

const getAttemptKey = (req) => `${req.ip}:${req.body?.email || req.user?.email || 'unknown'}`;
const getFailedAttemptCount = (req) => failedAttempts.get(getAttemptKey(req)) || 0;
const calculateWaitTime = (attempts) => Math.min(15 * Math.pow(2, Math.floor(attempts / 3)), 60);

// Progressive rate limiting for authentication endpoints
export const authRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: (req) => {
    const attempts = getFailedAttemptCount(req);
    
    // Progressive limits based on failed attempts
    if (attempts >= 10) return 1; // Very strict after 10 failures
    if (attempts >= 5) return 2;  // Stricter after 5 failures
    if (attempts >= 3) return 3;  // Moderate after 3 failures
    return 5; // Initial limit
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: getAttemptKey,
  skip: (req) => {
    // Skip rate limiting for successful authentications
    return req.authSuccess === true;
  },
  handler: (req, res, _next, options) => {
    const attempts = incrementFailedAttempts(req);
    const waitTime = calculateWaitTime(attempts); // Exponential backoff, max 60 min

    res.status(options.statusCode ?? 429).json({
      success: false,
      message: `Too many authentication attempts. Please try again in ${waitTime} minutes.`,
      code: 'RATE_LIMITED',
      retryAfter: waitTime * 60,
      attempts
    });
  }
});

// Strict rate limiting for Google OAuth
export const googleAuthRateLimit = rateLimit({
  windowMs: googleOAuthWindowMs,
  max: googleOAuthMaxAttempts,
  message: {
    success: false,
    message: `Too many Google authentication attempts. Please try again in ${googleOAuthRetryLabel}.`,
    code: 'GOOGLE_RATE_LIMITED',
    retryAfter: googleOAuthRetryMinutes * 60
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    return req.ip + ':google_oauth';
  }
});

// General API rate limiting
export const generalRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // 1000 requests per window per IP
  message: {
    success: false,
    message: 'Too many requests from this IP. Please try again later.',
    code: 'GENERAL_RATE_LIMITED'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Strict rate limiting for admin endpoints
export const adminRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 100, // 100 requests per hour for admin operations
  message: {
    success: false,
    message: 'Too many admin requests. Please try again in an hour.',
    code: 'ADMIN_RATE_LIMITED'
  },
  keyGenerator: (req) => {
    return req.user?.id || req.ip;
  }
});

// Function to reset failed attempts on successful login
export const resetFailedAttempts = (req) => {
  const key = getAttemptKey(req);
  failedAttempts.delete(key);
  req.authSuccess = true;
};

// Function to increment failed attempts
export const incrementFailedAttempts = (req) => {
  const key = getAttemptKey(req);
  const attempts = failedAttempts.get(key) || 0;
  const updatedAttempts = attempts + 1;
  failedAttempts.set(key, updatedAttempts);
  
  // Clean up old entries periodically
  if (failedAttempts.size > 10000) {
    const entries = Array.from(failedAttempts.entries());
    entries.slice(0, 5000).forEach(([key]) => failedAttempts.delete(key));
  }

  return updatedAttempts;
};

// Cleanup function to remove old failed attempts (run periodically)
export const cleanupFailedAttempts = () => {
  const cutoff = Date.now() - (24 * 60 * 60 * 1000); // 24 hours ago
  for (const [key, data] of failedAttempts.entries()) {
    if (typeof data === 'object' && data.timestamp < cutoff) {
      failedAttempts.delete(key);
    }
  }
};

// Run cleanup every hour
setInterval(cleanupFailedAttempts, 60 * 60 * 1000);

// Security headers middleware
export const securityHeaders = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://accounts.google.com"],
      scriptSrc: ["'self'", "https://accounts.google.com", "https://apis.google.com"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'", "https://accounts.google.com"],
      frameSrc: ["https://accounts.google.com"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
});

// Input validation for Google OAuth
export const validateGoogleAuth = [
  body('token')
    .isLength({ min: 100, max: 2000 })
    .withMessage('Invalid Google token format')
    .matches(/^[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+\.[A-Za-z0-9\-_]+$/)
    .withMessage('Invalid JWT token structure'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid request data',
        errors: errors.array()
      });
    }
    next();
  }
];

// Input validation for regular login
export const validateLogin = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Valid email is required'),
  body('password')
    .isLength({ min: 6, max: 128 })
    .withMessage('Password must be between 6 and 128 characters'),
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Invalid request data',
        errors: errors.array()
      });
    }
    next();
  }
];

// Enhanced CSRF protection for state-changing operations
export const csrfProtection = (req, res, next) => {
  // Skip CSRF for safe methods and OAuth callbacks
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method) ||
      req.path.includes('/auth/google/callback')) {
    return next();
  }

  const token = req.headers['x-csrf-token'] ||
                req.body._csrf ||
                req.query._csrf;
  
  // For cookie-based sessions, check session token
  if (req.session?.csrfToken) {
    if (!token || token !== req.session.csrfToken) {
      console.log(`🚫 CSRF token mismatch for ${req.ip} - ${req.method} ${req.path}`);
      return res.status(403).json({
        success: false,
        message: 'Invalid or missing CSRF token',
        code: 'CSRF_TOKEN_INVALID'
      });
    }
  } else {
    // For JWT-based auth, validate CSRF token from header
    const userAgent = req.get('User-Agent') || '';
    const expectedToken = generateCSRFToken(req.user?.id || req.ip, userAgent);
    
    if (!token || token !== expectedToken) {
      console.log(`🚫 CSRF validation failed for ${req.ip} - ${req.method} ${req.path}`);
      return res.status(403).json({
        success: false,
        message: 'Invalid or missing CSRF token',
        code: 'CSRF_TOKEN_INVALID'
      });
    }
  }
  
  next();
};

// Generate CSRF token
export const generateCSRFToken = (userId, userAgent) => {
  const secret = process.env.CSRF_SECRET || process.env.JWT_SECRET;
  const data = `${userId}:${userAgent}:${Date.now()}`;
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
};

// Middleware to provide CSRF token to client
export const provideCSRFToken = (req, res, next) => {
  if (req.session) {
    // Session-based CSRF token
    if (!req.session.csrfToken) {
      req.session.csrfToken = generateCSRFToken(req.user?.id || req.ip, req.get('User-Agent') || '');
    }
    res.locals.csrfToken = req.session.csrfToken;
  } else {
    // JWT-based CSRF token
    const token = generateCSRFToken(req.user?.id || req.ip, req.get('User-Agent') || '');
    res.locals.csrfToken = token;
  }
  
  // Add CSRF token to response headers
  res.set('X-CSRF-Token', res.locals.csrfToken);
  next();
};

// Request logging middleware
export const requestLogger = (req, res, next) => {
  const start = Date.now();
  const originalSend = res.send;
  
  res.send = function(data) {
    const duration = Date.now() - start;
    if (process.env.NODE_ENV !== 'production') {
      console.log({
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
        ip: req.ip,
        userAgent: req.get('User-Agent'),
        statusCode: res.statusCode,
        duration: `${duration}ms`,
        userId: req.user?._id || 'anonymous'
      });
    }
    originalSend.call(this, data);
  };
  
  next();
};