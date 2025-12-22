/**
 * Logger utility for controlled console output
 * Disables console logs in production and prevents sensitive data exposure
 */

const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Sensitive patterns to redact
const SENSITIVE_PATTERNS = [
  /Bearer\s+[a-zA-Z0-9._-]+/gi,
  /token['":\s]+[a-zA-Z0-9._-]+/gi,
  /password['":\s]+[^,}"\n]+/gi,
  /email['":\s]+[^\s,}"\n]+/gi,
  /refreshToken['":\s]+[a-zA-Z0-9._-]+/gi,
  /accessToken['":\s]+[a-zA-Z0-9._-]+/gi,
];

/**
 * Redact sensitive information from strings
 */
function redactSensitiveData(data: any): any {
  if (typeof data === 'string') {
    let redacted = data;
    SENSITIVE_PATTERNS.forEach(pattern => {
      redacted = redacted.replace(pattern, '[REDACTED]');
    });
    return redacted;
  }

  if (typeof data === 'object' && data !== null) {
    if (Array.isArray(data)) {
      return data.map(item => redactSensitiveData(item));
    }

    const redacted: any = {};
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        // Redact sensitive keys
        if (
          key.toLowerCase().includes('token') ||
          key.toLowerCase().includes('password') ||
          key.toLowerCase().includes('secret') ||
          key.toLowerCase().includes('key')
        ) {
          redacted[key] = '[REDACTED]';
        } else if (typeof value === 'object') {
          redacted[key] = redactSensitiveData(value);
        } else {
          redacted[key] = value;
        }
      }
    }
    return redacted;
  }

  return data;
}

/**
 * Logger object with controlled output
 */
export const logger = {
  /**
   * Log debug information (development only)
   */
  debug: (...args: any[]) => {
    if (isDevelopment) {
      const redacted = args.map(arg => redactSensitiveData(arg));
      console.debug('[DEBUG]', ...redacted);
    }
  },

  /**
   * Log general information (development only)
   */
  info: (...args: any[]) => {
    if (isDevelopment) {
      const redacted = args.map(arg => redactSensitiveData(arg));
      console.info('[INFO]', ...redacted);
    }
  },

  /**
   * Log warnings (development only)
   */
  warn: (...args: any[]) => {
    if (isDevelopment) {
      const redacted = args.map(arg => redactSensitiveData(arg));
      console.warn('[WARN]', ...redacted);
    }
  },

  /**
   * Log errors (always, but redacted)
   */
  error: (...args: any[]) => {
    const redacted = args.map(arg => redactSensitiveData(arg));
    if (isDevelopment) {
      console.error('[ERROR]', ...redacted);
    } else if (isProduction) {
      // In production, only log to error tracking service
      // Example: Sentry.captureException(redacted[0]);
      console.error('[ERROR]', ...redacted);
    }
  },

  /**
   * Log API calls (development only, with redaction)
   */
  api: (method: string, url: string, status?: number, data?: any) => {
    if (isDevelopment) {
      const redactedData = redactSensitiveData(data);
      const statusColor = status && status >= 400 ? '❌' : '✅';
      console.log(`${statusColor} [API] ${method} ${url}${status ? ` (${status})` : ''}`, redactedData);
    }
  },

  /**
   * Log authentication events (development only, with redaction)
   */
  auth: (event: string, data?: any) => {
    if (isDevelopment) {
      const redactedData = redactSensitiveData(data);
      console.log(`🔐 [AUTH] ${event}`, redactedData);
    }
  },

  /**
   * Log performance metrics
   */
  performance: (label: string, duration: number) => {
    if (isDevelopment) {
      console.log(`⏱️ [PERF] ${label}: ${duration}ms`);
    }
  },

  /**
   * Disable all console output (useful for testing)
   */
  disable: () => {
    console.log = () => {};
    console.info = () => {};
    console.warn = () => {};
    console.error = () => {};
    console.debug = () => {};
  },

  /**
   * Enable all console output
   */
  enable: () => {
    // Re-enable by reloading or using original console methods
    window.location.reload();
  },
};

export default logger;
