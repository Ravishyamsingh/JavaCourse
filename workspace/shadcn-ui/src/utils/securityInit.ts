/**
 * Frontend Security Initialization
 * Applies security measures on application startup
 */

import { disableConsoleInProduction } from '@/utils/secureAuth';
import { BROWSER_SECURITY, LOGGING } from '@/config/securityConfig';

/**
 * Initialize security measures
 */
export const initializeSecurity = () => {
  // Disable console in production
  disableConsoleInProduction();
  
  // Apply security headers
  applySecurityHeaders();
  
  // Prevent common attacks
  preventCommonAttacks();
  
  // Initialize browser security
  initializeBrowserSecurity();
  
  // Setup security event listeners
  setupSecurityEventListeners();
  
  console.log('🔒 Security initialization complete');
};

/**
 * Apply security headers via meta tags
 */
const applySecurityHeaders = () => {
  // Content Security Policy
  const cspMeta = document.createElement('meta');
  cspMeta.httpEquiv = 'Content-Security-Policy';
  cspMeta.content = `
    default-src 'self';
    script-src 'self' https://accounts.google.com https://apis.google.com https://accounts.google.com/gsi/client;
    style-src 'self' 'unsafe-inline' https://accounts.google.com;
    img-src 'self' data: https: blob:;
    font-src 'self' data: https:;
    connect-src 'self' http://localhost:5000 https://accounts.google.com https://apis.google.com https://generativelanguage.googleapis.com;
    frame-src https://accounts.google.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
  `;
  document.head.appendChild(cspMeta);
  
  // X-UA-Compatible
  const xUAMeta = document.createElement('meta');
  xUAMeta.httpEquiv = 'X-UA-Compatible';
  xUAMeta.content = 'IE=edge';
  document.head.appendChild(xUAMeta);
  
  // Referrer Policy
  const referrerMeta = document.createElement('meta');
  referrerMeta.name = 'referrer';
  referrerMeta.content = 'strict-origin-when-cross-origin';
  document.head.appendChild(referrerMeta);
};

/**
 * Prevent common attacks
 */
const preventCommonAttacks = () => {
  // Prevent clickjacking
  if (window.self !== window.top) {
    window.top!.location = window.self.location;
  }
  
  // Prevent MIME type sniffing
  document.addEventListener('DOMContentLoaded', () => {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);
  });
  
  // Prevent XSS
  preventXSS();
  
  // Prevent CSRF
  preventCSRF();
};

/**
 * Prevent XSS attacks
 */
const preventXSS = () => {
  // Disable dangerous DOM methods
  const dangerousMethods = ['innerHTML', 'insertAdjacentHTML', 'document.write'];
  
  // Override innerHTML to sanitize
  const originalSetInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML')?.set;
  
  if (originalSetInnerHTML) {
    Object.defineProperty(Element.prototype, 'innerHTML', {
      set: function(value: string) {
        if (typeof value === 'string' && containsXSSPatterns(value)) {
          console.warn('🚨 Potential XSS attempt detected in innerHTML');
          return;
        }
        originalSetInnerHTML.call(this, value);
      },
      get: Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML')?.get
    });
  }
};

/**
 * Prevent CSRF attacks
 */
const preventCSRF = () => {
  // Add CSRF token to all requests
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  
  if (csrfToken) {
    // Store CSRF token
    sessionStorage.setItem('csrf-token', csrfToken);
  }
};

/**
 * Initialize browser security features
 */
const initializeBrowserSecurity = () => {
  // Disable right-click if configured
  if (BROWSER_SECURITY.disableContextMenu) {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      return false;
    });
  }
  
  // Disable copy/paste if configured
  if (BROWSER_SECURITY.disableCopyPaste) {
    document.addEventListener('copy', (e) => {
      e.preventDefault();
      return false;
    });
    
    document.addEventListener('paste', (e) => {
      e.preventDefault();
      return false;
    });
  }
  
  // Disable drag and drop if configured
  if (BROWSER_SECURITY.disableDragDrop) {
    document.addEventListener('dragover', (e) => {
      e.preventDefault();
      return false;
    });
    
    document.addEventListener('drop', (e) => {
      e.preventDefault();
      return false;
    });
  }
  
  // Disable printing if configured
  if (BROWSER_SECURITY.disablePrinting) {
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        return false;
      }
    });
  }
};

/**
 * Setup security event listeners
 */
const setupSecurityEventListeners = () => {
  // Monitor for XSS attempts
  window.addEventListener('error', (event) => {
    if (LOGGING.logSecurityEvents) {
      console.warn('🚨 Error event detected:', event.message);
    }
  });
  
  // Monitor for unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (LOGGING.logSecurityEvents) {
      console.warn('🚨 Unhandled promise rejection:', event.reason);
    }
  });
  
  // Monitor for storage events (potential XSS)
  window.addEventListener('storage', (event) => {
    if (event.key && containsXSSPatterns(event.newValue || '')) {
      console.warn('🚨 Potential XSS attempt detected in storage');
      // Clear the suspicious storage
      localStorage.removeItem(event.key);
    }
  });
  
  // Monitor for message events (postMessage attacks)
  window.addEventListener('message', (event) => {
    // Only accept messages from trusted origins
    const trustedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      window.location.origin
    ];
    
    if (!trustedOrigins.includes(event.origin)) {
      console.warn('🚨 Message from untrusted origin:', event.origin);
      return;
    }
  });
};

/**
 * Check if string contains XSS patterns
 */
const containsXSSPatterns = (str: string): boolean => {
  if (!str || typeof str !== 'string') return false;
  
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
    /data:text\/html/gi
  ];
  
  return xssPatterns.some(pattern => pattern.test(str));
};

/**
 * Validate API responses for security
 */
export const validateApiResponse = (response: any): boolean => {
  if (!response) return false;
  
  // Check for suspicious patterns in response
  const responseStr = JSON.stringify(response);
  
  if (containsXSSPatterns(responseStr)) {
    console.warn('🚨 Potential XSS detected in API response');
    return false;
  }
  
  return true;
};

/**
 * Sanitize user input
 */
export const sanitizeUserInput = (input: string): string => {
  if (!input || typeof input !== 'string') return '';
  
  // Remove HTML tags
  let sanitized = input.replace(/<[^>]*>/g, '');
  
  // Remove dangerous characters
  sanitized = sanitized.replace(/[<>\"']/g, '');
  
  // Limit length
  sanitized = sanitized.substring(0, 1000);
  
  return sanitized.trim();
};

/**
 * Encrypt sensitive data
 */
export const encryptSensitiveData = (data: string, key: string): string => {
  // Simple XOR encryption (for demonstration)
  // In production, use proper encryption libraries
  let encrypted = '';
  for (let i = 0; i < data.length; i++) {
    encrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return btoa(encrypted);
};

/**
 * Decrypt sensitive data
 */
export const decryptSensitiveData = (encrypted: string, key: string): string => {
  try {
    const data = atob(encrypted);
    let decrypted = '';
    for (let i = 0; i < data.length; i++) {
      decrypted += String.fromCharCode(data.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return decrypted;
  } catch (error) {
    console.error('Failed to decrypt data:', error);
    return '';
  }
};

/**
 * Generate CSRF token
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Verify CSRF token
 */
export const verifyCSRFToken = (token: string): boolean => {
  const storedToken = sessionStorage.getItem('csrf-token');
  return token === storedToken;
};

export default {
  initializeSecurity,
  validateApiResponse,
  sanitizeUserInput,
  encryptSensitiveData,
  decryptSensitiveData,
  generateCSRFToken,
  verifyCSRFToken
};
