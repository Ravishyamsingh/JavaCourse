import { logger } from '../utils/monitoring.js';
import { SystemConfig } from '../models/AdminModels.js';

/**
 * Security Headers Middleware
 * Adds security headers to all responses
 */
export const securityHeaders = (req, res, next) => {
  // Prevent clickjacking
  res.setHeader('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Enable XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Content Security Policy
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"
  );

  // Referrer Policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Permissions Policy
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  next();
};

/**
 * IP Whitelist Middleware
 * Restricts access based on IP whitelist
 */
export const ipWhitelistMiddleware = async (req, res, next) => {
  try {
    const config = await SystemConfig.findOne();
    
    if (!config || !config.ipWhitelist || config.ipWhitelist.length === 0) {
      return next();
    }

    const clientIp = req.ip || req.connection.remoteAddress;
    
    if (!config.ipWhitelist.includes(clientIp)) {
      logger.warn('IP whitelist violation', {
        clientIp,
        path: req.path,
        method: req.method
      });

      return res.status(403).json({
        success: false,
        message: 'Access denied: IP not whitelisted'
      });
    }

    next();
  } catch (error) {
    logger.error('IP whitelist middleware error:', error);
    next(error);
  }
};

/**
 * Maintenance Mode Middleware
 * Blocks requests when maintenance mode is enabled
 */
export const maintenanceModeMiddleware = async (req, res, next) => {
  try {
    const config = await SystemConfig.findOne();
    
    if (config?.maintenanceMode) {
      // Allow admin users to bypass maintenance mode
      if (req.user?.role === 'superadmin' || req.user?.role === 'admin') {
        return next();
      }

      logger.info('Maintenance mode: Request blocked', {
        userId: req.user?._id,
        path: req.path
      });

      return res.status(503).json({
        success: false,
        message: 'System is under maintenance. Please try again later.'
      });
    }

    next();
  } catch (error) {
    logger.error('Maintenance mode middleware error:', error);
    next(error);
  }
};

/**
 * Rate Limiting Middleware
 * Implements rate limiting for API endpoints
 */
export const adminRateLimit = (req, res, next) => {
  // This would typically use express-rate-limit
  // For now, we'll implement a simple in-memory rate limiter
  next();
};

/**
 * Request Validation Middleware
 * Validates request body and parameters
 */
export const validateRequest = (schema) => {
  return async (req, res, next) => {
    try {
      const { error, value } = schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        const messages = error.details.map(d => d.message);
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: messages
        });
      }

      req.body = value;
      next();
    } catch (err) {
      logger.error('Request validation error:', err);
      next(err);
    }
  };
};

/**
 * SQL Injection Prevention Middleware
 * Sanitizes input to prevent SQL injection
 */
export const preventSqlInjection = (req, res, next) => {
  const sqlKeywords = ['DROP', 'DELETE', 'INSERT', 'UPDATE', 'SELECT', 'UNION', 'EXEC', 'SCRIPT'];
  
  const checkValue = (value) => {
    if (typeof value === 'string') {
      const upperValue = value.toUpperCase();
      return sqlKeywords.some(keyword => upperValue.includes(keyword));
    }
    return false;
  };

  // Check query parameters
  for (const key in req.query) {
    if (checkValue(req.query[key])) {
      logger.warn('Potential SQL injection attempt', {
        userId: req.user?._id,
        parameter: key,
        value: req.query[key]
      });
      return res.status(400).json({
        success: false,
        message: 'Invalid input detected'
      });
    }
  }

  // Check body parameters
  for (const key in req.body) {
    if (checkValue(req.body[key])) {
      logger.warn('Potential SQL injection attempt', {
        userId: req.user?._id,
        parameter: key,
        value: req.body[key]
      });
      return res.status(400).json({
        success: false,
        message: 'Invalid input detected'
      });
    }
  }

  next();
};

/**
 * XSS Prevention Middleware
 * Sanitizes input to prevent XSS attacks
 */
export const preventXss = (req, res, next) => {
  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe[^>]*>.*?<\/iframe>/gi,
    /<object[^>]*>.*?<\/object>/gi,
    /<embed[^>]*>/gi
  ];

  const checkValue = (value) => {
    if (typeof value === 'string') {
      return xssPatterns.some(pattern => pattern.test(value));
    }
    return false;
  };

  // Check body parameters
  for (const key in req.body) {
    if (checkValue(req.body[key])) {
      logger.warn('Potential XSS attempt', {
        userId: req.user?._id,
        parameter: key
      });
      return res.status(400).json({
        success: false,
        message: 'Invalid input detected'
      });
    }
  }

  next();
};

/**
 * CSRF Protection Middleware
 * Validates CSRF tokens
 */
export const csrfProtection = (req, res, next) => {
  // Skip CSRF check for GET requests
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    return next();
  }

  const token = req.headers['x-csrf-token'] || req.body._csrf;
  const sessionToken = req.session?.csrfToken;

  if (!token || token !== sessionToken) {
    logger.warn('CSRF token validation failed', {
      userId: req.user?._id,
      path: req.path,
      method: req.method
    });

    return res.status(403).json({
      success: false,
      message: 'CSRF token validation failed'
    });
  }

  next();
};

/**
 * Error Handler Middleware
 * Centralized error handling
 */
export const errorHandler = (err, req, res, next) => {
  logger.error('Unhandled error:', {
    message: err.message,
    stack: err.stack,
    userId: req.user?._id,
    path: req.path,
    method: req.method
  });

  // Don't expose internal error details to client
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 'Internal server error' : err.message;

  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { error: err.message })
  });
};

/**
 * Request Logging Middleware
 * Logs all incoming requests
 */
export const requestLogger = (req, res, next) => {
  const start = Date.now();

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info('Request completed', {
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      duration: `${duration}ms`,
      userId: req.user?._id,
      ip: req.ip
    });
  });

  next();
};
