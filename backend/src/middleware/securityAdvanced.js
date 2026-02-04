/**
 * Advanced Security Middleware
 * Prevents XSS, injection attacks, and other security vulnerabilities
 */

/**
 * Sanitize input to prevent XSS attacks
 */
export const sanitizeInput = (input) => {
  if (!input) return input;
  
  if (typeof input === 'string') {
    // Don't sanitize email addresses, names, or passwords
    // Only remove actual dangerous HTML tags and scripts
    return input
      .replace(/<script[^>]*>.*?<\/script>/gi, '')
      .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .trim()
      .substring(0, 5000); // Increased limit for code/content
  }
  
  if (typeof input === 'object') {
    const sanitized = Array.isArray(input) ? [...input] : { ...input };
    
    for (const key in sanitized) {
      if (typeof sanitized[key] === 'string') {
        sanitized[key] = sanitizeInput(sanitized[key]);
      } else if (typeof sanitized[key] === 'object') {
        sanitized[key] = sanitizeInput(sanitized[key]);
      }
    }
    
    return sanitized;
  }
  
  return input;
};

/**
 * Detect potential XSS attempts
 */
export const detectXSSAttempt = (input) => {
  if (!input || typeof input !== 'string') return false;
  
  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /eval\(/gi,
    /expression\(/gi,
    /vbscript:/gi,
    /data:text\/html/gi,
    /src\s*=\s*["\']?data:/gi
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Detect potential SQL injection attempts
 */
export const detectSQLInjection = (input) => {
  if (!input || typeof input !== 'string') return false;
  
  // Skip SQL injection detection for email addresses
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
    return false;
  }
  
  const sqlPatterns = [
    /(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|SCRIPT|JAVASCRIPT|EVAL)\b)/gi,
    /(-{2}|\/\*|\*\/|;|['"])/g, // Restored quotes to pattern
    /(or\s+1\s*=\s*1)/gi,
    /(or\s+true)/gi,
    /(1\s*=\s*1)/gi
  ];
  
  return sqlPatterns.some(pattern => pattern.test(input));
};

/**
 * Detect potential SQL injection attempts without quote patterns (for allowed fields)
 */
export const detectSQLInjectionWithoutQuotes = (input) => {
  if (!input || typeof input !== 'string') return false;
  
  // Skip SQL injection detection for email addresses
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input)) {
    return false;
  }
  
  const sqlPatternsNoQuotes = [
    /(\b(UNION|SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|SCRIPT|JAVASCRIPT|EVAL)\b)/gi,
    /(-{2}|\/\*|\*\/|;)/g, // No quotes in this version
    /(or\s+1\s*=\s*1)/gi,
    /(or\s+true)/gi,
    /(1\s*=\s*1)/gi
  ];
  
  return sqlPatternsNoQuotes.some(pattern => pattern.test(input));
};

/**
 * Detect potential NoSQL injection attempts
 */
export const detectNoSQLInjection = (input) => {
  if (!input) return false;
  
  const noSqlPatterns = [
    /\$where/gi,
    /\$ne/gi,
    /\$gt/gi,
    /\$regex/gi,
    /\$or/gi,
    /\$and/gi,
    /\$not/gi,
    /\$nor/gi,
    /\$exists/gi,
    /\$type/gi,
    /\$mod/gi,
    /\$text/gi,
    /\$where/gi,
    /\$function/gi
  ];
  
  const inputStr = JSON.stringify(input);
  return noSqlPatterns.some(pattern => pattern.test(inputStr));
};

/**
 * Middleware to sanitize all request inputs
 * Smart filtering to avoid false positives on legitimate data
 */
export const sanitizeRequestMiddleware = (req, res, next) => {
  try {
    // Fields that should NOT be sanitized (contain special characters or are IDs)
    const skipSanitizationFields = [
      'refreshToken', 'accessToken', 'token', 'password', 'csrfToken',
      'userId', 'sessionId', 'id', '_id', 'userAgent', 'deviceInfo',
      'timestamp', 'lastActivity', 'ipAddress',
      // Code editor fields - contain programming code with keywords like 'class', 'select', etc.
      'code', 'input', 'source_code', 'stdin', 'output', 'sourceCode'
    ];
    
    // Fields that legitimately need quotes (JSON strings, search queries, etc.)
    const allowedFieldsWithQuotes = [
      'searchQuery', 'query', 'description', 'bio', 'content', 'message', 
      'name', 'title', 'comment', 'note', 'jsonData'
    ];
    
    // Sanitize query parameters
    if (req.query) {
      for (const key in req.query) {
        const value = req.query[key];
        
        // Skip sanitization and injection detection for sensitive/ID fields and code fields
        if (skipSanitizationFields.includes(key)) {
          continue;
        }
        
        // Check for injection attempts (but not on tokens/IDs/code fields)
        if (detectXSSAttempt(value) || detectNoSQLInjection(value)) {
          console.warn(`🚨 Potential injection attempt detected in query parameter: ${key}`);
          return res.status(400).json({
            success: false,
            message: 'Invalid input detected',
            code: 'INVALID_INPUT'
          });
        }
        
        // Use targeted SQL injection detection (skip quote matching for allowed fields)
        if (!allowedFieldsWithQuotes.includes(key) && detectSQLInjection(value)) {
          console.warn(`🚨 Potential SQL injection attempt detected in query parameter: ${key}`);
          return res.status(400).json({
            success: false,
            message: 'Invalid input detected',
            code: 'INVALID_INPUT'
          });
        } else if (allowedFieldsWithQuotes.includes(key) && detectSQLInjectionWithoutQuotes(value)) {
          console.warn(`🚨 Potential SQL injection attempt detected in query parameter: ${key}`);
          return res.status(400).json({
            success: false,
            message: 'Invalid input detected',
            code: 'INVALID_INPUT'
          });
        }
        
        req.query[key] = sanitizeInput(value);
      }
    }
    
    // Sanitize body parameters
    if (req.body && typeof req.body === 'object') {
      for (const key in req.body) {
        const value = req.body[key];
        
        // Skip sanitization and injection detection for sensitive/ID fields and code fields
        if (skipSanitizationFields.includes(key)) {
          continue;
        }
        
        // Check for injection attempts (but not on tokens/IDs/code fields)
        if (detectXSSAttempt(JSON.stringify(value)) || detectNoSQLInjection(value)) {
          console.warn(`🚨 Potential injection attempt detected in body parameter: ${key}`);
          return res.status(400).json({
            success: false,
            message: 'Invalid input detected',
            code: 'INVALID_INPUT'
          });
        }
        
        // Use targeted SQL injection detection (skip quote matching for allowed fields)
        if (!allowedFieldsWithQuotes.includes(key) && detectSQLInjection(JSON.stringify(value))) {
          console.warn(`🚨 Potential SQL injection attempt detected in body parameter: ${key}`);
          return res.status(400).json({
            success: false,
            message: 'Invalid input detected',
            code: 'INVALID_INPUT'
          });
        } else if (allowedFieldsWithQuotes.includes(key) && detectSQLInjectionWithoutQuotes(JSON.stringify(value))) {
          console.warn(`🚨 Potential injection attempt detected in body parameter: ${key}`);
          return res.status(400).json({
            success: false,
            message: 'Invalid input detected',
            code: 'INVALID_INPUT'
          });
        }
        
        req.body[key] = sanitizeInput(value);
      }
    }
    
    // Sanitize URL parameters (but skip IDs and tokens)
    if (req.params) {
      for (const key in req.params) {
        const value = req.params[key];
        
        // Skip sanitization for IDs and tokens
        if (key.includes('Id') || key.includes('id') || skipSanitizationFields.includes(key)) {
          continue;
        }
        
        // Check for injection attempts
        if (detectXSSAttempt(value) || detectSQLInjection(value) || detectNoSQLInjection(value)) {
          console.warn(`🚨 Potential injection attempt detected in URL parameter: ${key}`);
          return res.status(400).json({
            success: false,
            message: 'Invalid input detected',
            code: 'INVALID_INPUT'
          });
        }
        
        req.params[key] = sanitizeInput(value);
      }
    }
    
    next();
  } catch (error) {
    console.error('Sanitization middleware error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      code: 'SERVER_ERROR'
    });
  }
};

/**
 * Validate email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format
 */
export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Escape HTML special characters
 */
export const escapeHtml = (text) => {
  if (!text || typeof text !== 'string') return text;
  
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  
  return text.replace(/[&<>"']/g, m => map[m]);
};

/**
 * Validate and parse JSON safely
 */
export const parseJsonSafely = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Failed to parse JSON:', error);
    return null;
  }
};

/**
 * Prevent CSRF attacks by validating CSRF tokens
 */
export const validateCSRFToken = (req, res, next) => {
  // Skip CSRF validation for GET requests
  if (req.method === 'GET') {
    return next();
  }
  
  const token = req.headers['x-csrf-token'] || req.body?.csrfToken;
  const sessionToken = req.session?.csrfToken;
  
  if (!token || token !== sessionToken) {
    console.warn('🚨 CSRF token validation failed');
    return res.status(403).json({
      success: false,
      message: 'CSRF token validation failed',
      code: 'CSRF_VALIDATION_FAILED'
    });
  }
  
  next();
};

/**
 * Rate limiting for sensitive endpoints
 */
export const createRateLimiter = (windowMs, maxRequests) => {
  const requests = new Map();
  
  return (req, res, next) => {
    const key = req.ip;
    const now = Date.now();
    
    if (!requests.has(key)) {
      requests.set(key, []);
    }
    
    const userRequests = requests.get(key);
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      console.warn(`🚨 Rate limit exceeded for IP: ${key}`);
      return res.status(429).json({
        success: false,
        message: 'Too many requests, please try again later',
        code: 'RATE_LIMIT_EXCEEDED',
        retryAfter: Math.ceil(windowMs / 1000)
      });
    }
    
    validRequests.push(now);
    requests.set(key, validRequests);
    
    next();
  };
};

/**
 * Validate request headers for security
 */
export const validateSecurityHeaders = (req, res, next) => {
  // Check for required security headers
  const requiredHeaders = {
    'content-type': ['application/json', 'application/x-www-form-urlencoded'],
    'user-agent': true
  };
  
  for (const [header, allowedValues] of Object.entries(requiredHeaders)) {
    const value = req.headers[header];
    
    if (!value) {
      console.warn(`🚨 Missing required header: ${header}`);
      return res.status(400).json({
        success: false,
        message: 'Missing required security header',
        code: 'MISSING_SECURITY_HEADER'
      });
    }
    
    if (Array.isArray(allowedValues) && !allowedValues.some(v => value.includes(v))) {
      console.warn(`🚨 Invalid header value for ${header}: ${value}`);
      return res.status(400).json({
        success: false,
        message: 'Invalid header value',
        code: 'INVALID_HEADER_VALUE'
      });
    }
  }
  
  next();
};

/**
 * Prevent clickjacking attacks
 */
export const preventClickjacking = (req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
};

/**
 * Validate API key
 */
export const validateApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  const validApiKey = process.env.API_KEY;
  
  if (!apiKey || apiKey !== validApiKey) {
    console.warn('🚨 Invalid API key attempt');
    return res.status(401).json({
      success: false,
      message: 'Invalid API key',
      code: 'INVALID_API_KEY'
    });
  }
  
  next();
};

export default {
  sanitizeInput,
  detectXSSAttempt,
  detectSQLInjection,
  detectNoSQLInjection,
  sanitizeRequestMiddleware,
  isValidEmail,
  isValidUrl,
  escapeHtml,
  parseJsonSafely,
  validateCSRFToken,
  createRateLimiter,
  validateSecurityHeaders,
  preventClickjacking,
  validateApiKey
};
