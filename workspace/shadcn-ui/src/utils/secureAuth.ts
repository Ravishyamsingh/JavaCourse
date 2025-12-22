/**
 * Secure Authentication Utilities
 * Prevents XSS attacks and sensitive data exposure
 */

// Token storage keys
const ACCESS_TOKEN_KEY = 'auth_access_token';
const REFRESH_TOKEN_KEY = 'auth_refresh_token';
const USER_KEY = 'auth_user';

// Sensitive data that should never be logged
const SENSITIVE_PATTERNS = [
  /token/i,
  /password/i,
  /secret/i,
  /credential/i,
  /apikey/i,
  /api_key/i,
  /authorization/i,
  /bearer/i
];

/**
 * Sanitize object for logging - removes sensitive data
 */
export const sanitizeForLogging = (obj: any): any => {
  if (!obj) return obj;
  
  if (typeof obj !== 'object') return obj;
  
  const sanitized = Array.isArray(obj) ? [...obj] : { ...obj };
  
  for (const key in sanitized) {
    if (SENSITIVE_PATTERNS.some(pattern => pattern.test(key))) {
      sanitized[key] = '[REDACTED]';
    } else if (typeof sanitized[key] === 'object') {
      sanitized[key] = sanitizeForLogging(sanitized[key]);
    }
  }
  
  return sanitized;
};

/**
 * Safe console logging - prevents sensitive data exposure
 */
export const safeLog = {
  info: (message: string, data?: any) => {
    if (import.meta.env.DEV) {
      console.log(message, data ? sanitizeForLogging(data) : '');
    }
  },
  
  warn: (message: string, data?: any) => {
    if (import.meta.env.DEV) {
      console.warn(message, data ? sanitizeForLogging(data) : '');
    }
  },
  
  error: (message: string, data?: any) => {
    if (import.meta.env.DEV) {
      console.error(message, data ? sanitizeForLogging(data) : '');
    }
  }
};

/**
 * Validate and sanitize user input to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  if (typeof input !== 'string') return '';
  
  // Remove any HTML tags and dangerous characters
  return input
    .replace(/[<>\"']/g, '')
    .trim()
    .substring(0, 1000); // Limit length
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate token format (basic check)
 */
export const isValidToken = (token: string): boolean => {
  if (!token || typeof token !== 'string') return false;
  
  // JWT format: header.payload.signature
  const parts = token.split('.');
  return parts.length === 3 && parts.every(part => part.length > 0);
};

/**
 * Store auth data securely
 */
export const storeAuthDataSecurely = (
  accessToken: string,
  refreshToken: string,
  user: any
): boolean => {
  try {
    // Validate tokens before storing
    if (!isValidToken(accessToken)) {
      safeLog.error('Invalid access token format');
      return false;
    }
    
    if (refreshToken && !isValidToken(refreshToken)) {
      safeLog.error('Invalid refresh token format');
      return false;
    }
    
    // Validate user object
    if (!user || typeof user !== 'object') {
      safeLog.error('Invalid user object');
      return false;
    }
    
    // Store tokens
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    if (refreshToken) {
      localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    }
    
    // Store only non-sensitive user data
    const safeUserData = {
      id: user.id || user._id,
      firstName: sanitizeInput(user.firstName || ''),
      lastName: sanitizeInput(user.lastName || ''),
      email: user.email,
      avatar: user.avatar,
      role: user.role,
      provider: user.provider,
      isEmailVerified: user.isEmailVerified
    };
    
    localStorage.setItem(USER_KEY, JSON.stringify(safeUserData));
    
    safeLog.info('✅ Auth data stored securely');
    return true;
  } catch (error) {
    safeLog.error('Failed to store auth data:', error);
    return false;
  }
};

/**
 * Get stored authentication data
 */
export const getAuthDataSecurely = () => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    const userStr = localStorage.getItem(USER_KEY);
    
    if (!accessToken || !userStr) {
      return null;
    }
    
    // Validate token format
    if (!isValidToken(accessToken)) {
      safeLog.warn('Invalid access token format found in storage');
      clearAuthDataSecurely();
      return null;
    }
    
    const user = JSON.parse(userStr);
    
    return {
      accessToken,
      refreshToken,
      user
    };
  } catch (error) {
    safeLog.error('Failed to get auth data:', error);
    return null;
  }
};

/**
 * Clear authentication data securely
 */
export const clearAuthDataSecurely = (): boolean => {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    
    safeLog.info('✅ Auth data cleared securely');
    return true;
  } catch (error) {
    safeLog.error('Failed to clear auth data:', error);
    return false;
  }
};

/**
 * Check if user is authenticated
 */
export const isAuthenticatedSecurely = (): boolean => {
  const authData = getAuthDataSecurely();
  return !!(authData?.accessToken && authData?.user);
};

/**
 * Get current user safely
 */
export const getCurrentUserSafely = () => {
  const authData = getAuthDataSecurely();
  return authData?.user || null;
};

/**
 * Get access token safely
 */
export const getAccessTokenSafely = (): string | null => {
  try {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    if (token && isValidToken(token)) {
      return token;
    }
    return null;
  } catch (error) {
    safeLog.error('Failed to get access token:', error);
    return null;
  }
};

/**
 * Get refresh token safely
 */
export const getRefreshTokenSafely = (): string | null => {
  try {
    const token = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (token && isValidToken(token)) {
      return token;
    }
    return null;
  } catch (error) {
    safeLog.error('Failed to get refresh token:', error);
    return null;
  }
};

/**
 * Prevent XSS by escaping HTML
 */
export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
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
export const parseJsonSafely = (jsonString: string): any => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    safeLog.error('Failed to parse JSON:', error);
    return null;
  }
};

/**
 * Check if user has specific role
 */
export const hasRoleSafely = (role: string | string[]): boolean => {
  const user = getCurrentUserSafely();
  if (!user) return false;
  
  if (Array.isArray(role)) {
    return role.includes(user.role);
  }
  
  return user.role === role;
};

/**
 * Validate CORS origin
 */
export const isValidOrigin = (origin: string): boolean => {
  const allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5173',
    'http://127.0.0.1:3000'
  ];
  
  if (import.meta.env.PROD) {
    // In production, validate against environment variable
    const prodOrigin = import.meta.env.VITE_APP_URL;
    return origin === prodOrigin;
  }
  
  return allowedOrigins.includes(origin);
};

/**
 * Prevent console injection attacks
 */
export const disableConsoleInProduction = () => {
  if (import.meta.env.PROD) {
    // Disable console methods in production
    const noop = () => {};
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;
  }
};

/**
 * Detect and prevent XSS attempts
 */
export const detectXSSAttempt = (input: string): boolean => {
  const xssPatterns = [
    /<script[^>]*>.*?<\/script>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    /<iframe/gi,
    /<object/gi,
    /<embed/gi,
    /eval\(/gi,
    /expression\(/gi
  ];
  
  return xssPatterns.some(pattern => pattern.test(input));
};

/**
 * Secure session storage
 */
export const secureSessionStorage = {
  set: (key: string, value: any) => {
    try {
      if (detectXSSAttempt(JSON.stringify(value))) {
        safeLog.warn('Potential XSS attempt detected');
        return false;
      }
      sessionStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      safeLog.error('Failed to set session storage:', error);
      return false;
    }
  },
  
  get: (key: string) => {
    try {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      safeLog.error('Failed to get session storage:', error);
      return null;
    }
  },
  
  remove: (key: string) => {
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch (error) {
      safeLog.error('Failed to remove session storage:', error);
      return false;
    }
  }
};
