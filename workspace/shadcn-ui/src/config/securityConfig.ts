/**
 * Frontend Security Configuration
 * Comprehensive security settings and best practices
 */

/**
 * Content Security Policy (CSP) Configuration
 * Prevents XSS, clickjacking, and other injection attacks
 */
export const CSP_CONFIG = {
  'default-src': ["'self'"],
  'script-src': [
    "'self'",
    "'unsafe-eval'",
    'blob:',
    'https://accounts.google.com',
    'https://apis.google.com',
    'https://accounts.google.com/gsi/client'
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    'https://accounts.google.com'
  ],
  'img-src': [
    "'self'",
    'data:',
    'https:',
    'blob:'
  ],
  'font-src': [
    "'self'",
    'data:',
    'https:'
  ],
  'connect-src': [
    "'self'",
    'http://localhost:5000',
    'https://accounts.google.com',
    'https://apis.google.com',
    'https://generativelanguage.googleapis.com',
    'https://emkc.org'
  ],
  'worker-src': [
    "'self'",
    'blob:'
  ],
  'frame-src': [
    'https://accounts.google.com'
  ],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': []
};

/**
 * Security Headers Configuration
 */
export const SECURITY_HEADERS = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload'
};

/**
 * CORS Configuration
 */
export const CORS_CONFIG = {
  allowedOrigins: [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000'
  ],
  allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'X-CSRF-Token',
    'Accept',
    'Origin'
  ],
  credentials: true,
  maxAge: 86400
};

/**
 * Authentication Security Settings
 */
export const AUTH_SECURITY = {
  // Token expiration times
  accessTokenExpiry: 15 * 60 * 1000, // 15 minutes
  refreshTokenExpiry: 7 * 24 * 60 * 60 * 1000, // 7 days
  sessionTimeout: 30 * 60 * 1000, // 30 minutes of inactivity
  
  // Password requirements
  passwordMinLength: 12,
  passwordRequireUppercase: true,
  passwordRequireLowercase: true,
  passwordRequireNumbers: true,
  passwordRequireSpecialChars: true,
  
  // Login attempt limits
  maxLoginAttempts: 5,
  loginAttemptWindow: 15 * 60 * 1000, // 15 minutes
  lockoutDuration: 30 * 60 * 1000, // 30 minutes
  
  // Session security
  secureCookies: true,
  httpOnlyCookies: true,
  sameSiteCookies: 'Strict',
  
  // Token storage
  useSecureStorage: true,
  encryptTokens: true
};

/**
 * Input Validation Rules
 */
export const INPUT_VALIDATION = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    maxLength: 254,
    required: true
  },
  password: {
    minLength: 12,
    maxLength: 128,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
    required: true
  },
  username: {
    pattern: /^[a-zA-Z0-9_-]{3,20}$/,
    maxLength: 20,
    required: true
  },
  url: {
    pattern: /^https?:\/\/.+/,
    maxLength: 2048,
    required: false
  },
  phone: {
    pattern: /^[\d\s\-\+\(\)]{10,}$/,
    maxLength: 20,
    required: false
  }
};

/**
 * Rate Limiting Configuration
 */
export const RATE_LIMITING = {
  // API endpoints
  api: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100
  },
  
  // Authentication endpoints
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 10
  },
  
  // Login endpoint
  login: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 5
  },
  
  // Password reset
  passwordReset: {
    windowMs: 60 * 60 * 1000, // 1 hour
    maxRequests: 3
  }
};

/**
 * XSS Prevention Configuration
 */
export const XSS_PREVENTION = {
  // Sanitize HTML
  sanitizeHtml: true,
  
  // Allowed HTML tags (empty for maximum security)
  allowedTags: [],
  
  // Allowed HTML attributes
  allowedAttributes: [],
  
  // Escape special characters
  escapeSpecialChars: true,
  
  // Content Security Policy
  enableCSP: true,
  
  // Disable inline scripts
  disableInlineScripts: true,
  
  // Disable eval
  disableEval: true
};

/**
 * CSRF Protection Configuration
 */
export const CSRF_PROTECTION = {
  enabled: true,
  headerName: 'X-CSRF-Token',
  parameterName: '_csrf',
  cookieName: 'XSRF-TOKEN',
  cookieHttpOnly: true,
  cookieSecure: true,
  cookieSameSite: 'Strict'
};

/**
 * Data Encryption Configuration
 */
export const ENCRYPTION = {
  // Algorithm
  algorithm: 'AES-256-GCM',
  
  // Key derivation
  keyDerivation: 'PBKDF2',
  iterations: 100000,
  
  // Encryption for sensitive data
  encryptSensitiveData: true,
  
  // Fields to encrypt
  fieldsToEncrypt: [
    'accessToken',
    'refreshToken',
    'password',
    'apiKey',
    'secret'
  ]
};

/**
 * Logging Configuration
 */
export const LOGGING = {
  // Log security events
  logSecurityEvents: true,
  
  // Log authentication attempts
  logAuthAttempts: true,
  
  // Log failed validations
  logFailedValidations: true,
  
  // Log sensitive data (disabled in production)
  logSensitiveData: false,
  
  // Log level
  level: import.meta.env.PROD ? 'warn' : 'debug'
};

/**
 * API Security Configuration
 */
export const API_SECURITY = {
  // API versioning
  version: 'v1',
  
  // API key required
  requireApiKey: false,
  
  // Rate limiting
  enableRateLimiting: true,
  
  // Request validation
  validateRequests: true,
  
  // Response validation
  validateResponses: true,
  
  // Timeout
  timeout: 30000, // 30 seconds
  
  // Retry configuration
  retries: 3,
  retryDelay: 1000
};

/**
 * Browser Security Configuration
 */
export const BROWSER_SECURITY = {
  // Disable right-click context menu
  disableContextMenu: false,
  
  // Disable developer tools
  disableDeveloperTools: false,
  
  // Disable copy/paste
  disableCopyPaste: false,
  
  // Disable drag and drop
  disableDragDrop: false,
  
  // Disable printing
  disablePrinting: false,
  
  // Disable screenshots
  disableScreenshots: false
};

/**
 * Third-party Security Configuration
 */
export const THIRD_PARTY_SECURITY = {
  // Google OAuth
  google: {
    enabled: true,
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    redirectUri: import.meta.env.VITE_GOOGLE_REDIRECT_URI,
    scope: ['profile', 'email'],
    validateToken: true
  },
  
  // External APIs
  externalApis: {
    validateSSL: true,
    timeout: 30000,
    retries: 3
  }
};

/**
 * Data Protection Configuration
 */
export const DATA_PROTECTION = {
  // Data retention
  retentionDays: 90,
  
  // Data anonymization
  anonymizeData: true,
  
  // Data deletion
  deleteOnLogout: true,
  
  // Backup encryption
  encryptBackups: true,
  
  // PII protection
  protectPII: true,
  
  // Fields considered PII
  piiFields: [
    'email',
    'phone',
    'ssn',
    'creditCard',
    'bankAccount',
    'address',
    'dateOfBirth'
  ]
};

/**
 * Compliance Configuration
 */
export const COMPLIANCE = {
  // GDPR compliance
  gdpr: {
    enabled: true,
    consentRequired: true,
    dataExportEnabled: true,
    dataDeleteEnabled: true
  },
  
  // CCPA compliance
  ccpa: {
    enabled: true,
    privacyNoticeRequired: true,
    optOutEnabled: true
  },
  
  // HIPAA compliance
  hipaa: {
    enabled: false,
    encryptionRequired: true,
    auditLoggingRequired: true
  }
};

export default {
  CSP_CONFIG,
  SECURITY_HEADERS,
  CORS_CONFIG,
  AUTH_SECURITY,
  INPUT_VALIDATION,
  RATE_LIMITING,
  XSS_PREVENTION,
  CSRF_PROTECTION,
  ENCRYPTION,
  LOGGING,
  API_SECURITY,
  BROWSER_SECURITY,
  THIRD_PARTY_SECURITY,
  DATA_PROTECTION,
  COMPLIANCE
};
