/**
 * Secure Logger Utility
 * Sanitizes sensitive data before logging to console
 * Only logs in development mode
 */

const SENSITIVE_KEYS = [
  'password',
  'token',
  'accessToken',
  'refreshToken',
  'email',
  'phone',
  'ssn',
  'creditCard',
  'apiKey',
  'secret',
  'authorization',
  'cookie',
  'session',
  'user',
  'credential',
  'jwt',
  'bearer'
];

const SENSITIVE_PATTERNS = [
  /password["\s:=]+([^\s,}]+)/gi,
  /token["\s:=]+([^\s,}]+)/gi,
  /email["\s:=]+([^\s,}@]+@[^\s,}]+)/gi,
  /Bearer\s+([^\s,}]+)/gi,
  /Authorization["\s:=]+([^\s,}]+)/gi
];

interface LogContext {
  level: 'log' | 'error' | 'warn' | 'info' | 'debug';
  message: string;
  data?: any;
  isDevelopment?: boolean;
}

/**
 * Sanitize sensitive data from objects
 */
function sanitizeData(data: any, depth = 0): any {
  if (depth > 5) return '[Circular Reference]';
  if (data === null || data === undefined) return data;
  if (typeof data !== 'object') return sanitizeString(String(data));

  if (Array.isArray(data)) {
    return data.map(item => sanitizeData(item, depth + 1));
  }

  const sanitized: any = {};
  for (const [key, value] of Object.entries(data)) {
    const lowerKey = key.toLowerCase();
    
    if (SENSITIVE_KEYS.some(sensitiveKey => lowerKey.includes(sensitiveKey))) {
      sanitized[key] = '[REDACTED]';
    } else if (typeof value === 'object') {
      sanitized[key] = sanitizeData(value, depth + 1);
    } else {
      sanitized[key] = sanitizeString(String(value));
    }
  }
  return sanitized;
}

/**
 * Sanitize sensitive patterns from strings
 */
function sanitizeString(str: string): string {
  if (typeof str !== 'string') return str;
  
  let sanitized = str;
  for (const pattern of SENSITIVE_PATTERNS) {
    sanitized = sanitized.replace(pattern, (match, group) => {
      if (group && group.length > 0) {
        return match.replace(group, '[REDACTED]');
      }
      return '[REDACTED]';
    });
  }
  return sanitized;
}

/**
 * Format log message
 */
function formatMessage(message: string, data?: any): string {
  if (!data) return message;
  
  try {
    const sanitized = sanitizeData(data);
    return `${message} ${JSON.stringify(sanitized)}`;
  } catch (error) {
    return message;
  }
}

/**
 * Main logger object
 */
export const logger = {
  /**
   * Log message (only in development)
   */
  log: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      const formatted = formatMessage(message, data);
      console.log(formatted);
    }
  },

  /**
   * Log error (only in development)
   */
  error: (message: string, error?: any) => {
    if (process.env.NODE_ENV === 'development') {
      let errorData = error;
      if (error instanceof Error) {
        errorData = {
          message: error.message,
          name: error.name
          // Don't include stack trace in console
        };
      }
      const formatted = formatMessage(message, errorData);
      console.error(formatted);
    }
  },

  /**
   * Log warning (only in development)
   */
  warn: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      const formatted = formatMessage(message, data);
      console.warn(formatted);
    }
  },

  /**
   * Log info (only in development)
   */
  info: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      const formatted = formatMessage(message, data);
      console.info(formatted);
    }
  },

  /**
   * Log debug (only in development)
   */
  debug: (message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      const formatted = formatMessage(message, data);
      console.debug(formatted);
    }
  },

  /**
   * Sanitize data for safe logging
   */
  sanitize: (data: any): any => {
    return sanitizeData(data);
  }
};

export default logger;
