import { logger } from './monitoring.js';

/**
 * Comprehensive Gemini API Error Handler
 * Provides detailed error analysis and recovery strategies
 */

class GeminiErrorHandler {
  /**
   * Error code to HTTP status mapping
   */
  static ERROR_STATUS_MAP = {
    'MISSING_API_KEY': 400,
    'INVALID_API_KEY_FORMAT': 400,
    'INVALID_PROMPT': 400,
    'UNAUTHORIZED': 401,
    'FORBIDDEN': 403,
    'NOT_FOUND': 404,
    'RATE_LIMIT_EXCEEDED': 429,
    'RESOURCE_EXHAUSTED': 429,
    'QUOTA_EXCEEDED': 429,
    'INTERNAL_ERROR': 500,
    'SERVICE_UNAVAILABLE': 503,
    'DEADLINE_EXCEEDED': 504,
    'NETWORK_ERROR': 503,
    'TIMEOUT': 504,
    'CONTENT_BLOCKED': 400,
    'NO_CANDIDATES': 500,
    'PARSE_ERROR': 500,
    'UNEXPECTED_ERROR': 500
  };

  /**
   * Error code to user-friendly message mapping
   */
  static ERROR_MESSAGE_MAP = {
    'MISSING_API_KEY': 'API key is not configured. Please contact administrator.',
    'INVALID_API_KEY_FORMAT': 'API key format is invalid. Please contact administrator.',
    'INVALID_PROMPT': 'The prompt provided is invalid or empty.',
    'UNAUTHORIZED': 'Your API key is not authorized to access this resource.',
    'FORBIDDEN': 'You do not have permission to access this resource.',
    'NOT_FOUND': 'The requested resource was not found.',
    'RATE_LIMIT_EXCEEDED': 'Too many requests. Please wait before trying again.',
    'RESOURCE_EXHAUSTED': 'API quota has been exhausted. Please try again later.',
    'QUOTA_EXCEEDED': 'Monthly quota has been exceeded. Please upgrade your plan.',
    'INTERNAL_ERROR': 'An internal error occurred. Please try again later.',
    'SERVICE_UNAVAILABLE': 'The service is temporarily unavailable. Please try again later.',
    'DEADLINE_EXCEEDED': 'Request took too long to complete. Please try again.',
    'NETWORK_ERROR': 'Network error occurred. Please check your connection.',
    'TIMEOUT': 'Request timed out. Please try again.',
    'CONTENT_BLOCKED': 'The generated content was blocked due to safety policies.',
    'NO_CANDIDATES': 'No valid response was generated. Please try again.',
    'PARSE_ERROR': 'Failed to parse API response. Please try again.',
    'UNEXPECTED_ERROR': 'An unexpected error occurred. Please try again later.'
  };

  /**
   * Error recovery strategies
   */
  static RECOVERY_STRATEGIES = {
    'RATE_LIMIT_EXCEEDED': {
      action: 'RETRY_WITH_BACKOFF',
      delay: 5000,
      maxRetries: 3,
      message: 'Rate limited. Retrying with exponential backoff...'
    },
    'RESOURCE_EXHAUSTED': {
      action: 'RETRY_WITH_BACKOFF',
      delay: 10000,
      maxRetries: 2,
      message: 'Resource exhausted. Retrying after delay...'
    },
    'TIMEOUT': {
      action: 'RETRY_WITH_LONGER_TIMEOUT',
      delay: 2000,
      maxRetries: 2,
      message: 'Request timed out. Retrying with longer timeout...'
    },
    'NETWORK_ERROR': {
      action: 'RETRY_WITH_BACKOFF',
      delay: 3000,
      maxRetries: 3,
      message: 'Network error. Retrying...'
    },
    'SERVICE_UNAVAILABLE': {
      action: 'RETRY_WITH_BACKOFF',
      delay: 5000,
      maxRetries: 3,
      message: 'Service unavailable. Retrying...'
    },
    'INTERNAL_ERROR': {
      action: 'RETRY_WITH_BACKOFF',
      delay: 2000,
      maxRetries: 2,
      message: 'Internal error. Retrying...'
    },
    'DEADLINE_EXCEEDED': {
      action: 'RETRY_WITH_LONGER_TIMEOUT',
      delay: 3000,
      maxRetries: 1,
      message: 'Deadline exceeded. Retrying with longer timeout...'
    }
  };

  /**
   * Parse error and extract details
   */
  static parseError(error) {
    const parsed = {
      code: error.code || 'UNEXPECTED_ERROR',
      message: error.message || 'An unexpected error occurred',
      statusCode: error.statusCode || 500,
      details: error.details || {},
      timestamp: new Date().toISOString(),
      retryable: this.isRetryable(error),
      recoveryStrategy: this.getRecoveryStrategy(error.code)
    };

    return parsed;
  }

  /**
   * Check if error is retryable
   */
  static isRetryable(error) {
    const retryableCodes = [
      'RATE_LIMIT_EXCEEDED',
      'RESOURCE_EXHAUSTED',
      'TIMEOUT',
      'NETWORK_ERROR',
      'SERVICE_UNAVAILABLE',
      'INTERNAL_ERROR',
      'DEADLINE_EXCEEDED',
      'ECONNRESET',
      'ECONNREFUSED',
      'ETIMEDOUT'
    ];

    const retryableStatuses = [408, 429, 500, 502, 503, 504];

    return (
      retryableCodes.includes(error.code) ||
      retryableStatuses.includes(error.statusCode) ||
      retryableCodes.some(code => error.message.includes(code))
    );
  }

  /**
   * Get recovery strategy for error
   */
  static getRecoveryStrategy(errorCode) {
    return this.RECOVERY_STRATEGIES[errorCode] || {
      action: 'FAIL',
      message: 'Error is not recoverable'
    };
  }

  /**
   * Get HTTP status code for error
   */
  static getStatusCode(errorCode) {
    return this.ERROR_STATUS_MAP[errorCode] || 500;
  }

  /**
   * Get user-friendly message
   */
  static getUserMessage(errorCode) {
    return this.ERROR_MESSAGE_MAP[errorCode] || 'An unexpected error occurred';
  }

  /**
   * Format error response
   */
  static formatErrorResponse(error) {
    const parsed = this.parseError(error);

    return {
      success: false,
      error: {
        code: parsed.code,
        message: this.getUserMessage(parsed.code),
        details: parsed.details,
        retryable: parsed.retryable,
        recoveryStrategy: parsed.recoveryStrategy
      },
      timestamp: parsed.timestamp
    };
  }

  /**
   * Log error with context
   */
  static logError(error, context = {}) {
    const parsed = this.parseError(error);

    logger.error('Gemini API Error', {
      code: parsed.code,
      message: parsed.message,
      statusCode: parsed.statusCode,
      retryable: parsed.retryable,
      context,
      details: parsed.details
    });

    return parsed;
  }

  /**
   * Suggest fixes based on error
   */
  static suggestFixes(errorCode) {
    const fixes = {
      'MISSING_API_KEY': [
        'Set GEMINI_API_KEY environment variable',
        'Get API key from https://makersuite.google.com/app/apikey',
        'Restart the application after setting the key'
      ],
      'INVALID_API_KEY_FORMAT': [
        'Verify API key format (should be alphanumeric)',
        'Remove any whitespace from the key',
        'Check for special characters that might be invalid'
      ],
      'UNAUTHORIZED': [
        'Verify API key is correct',
        'Check if API key has expired',
        'Regenerate API key from Google Cloud Console'
      ],
      'RATE_LIMIT_EXCEEDED': [
        'Implement request throttling',
        'Use exponential backoff for retries',
        'Consider upgrading API plan for higher limits',
        'Cache responses when possible'
      ],
      'RESOURCE_EXHAUSTED': [
        'Check monthly quota usage',
        'Upgrade API plan for higher quota',
        'Optimize prompt length to reduce token usage',
        'Implement request batching'
      ],
      'TIMEOUT': [
        'Increase request timeout value',
        'Reduce prompt complexity',
        'Check network connection',
        'Try again with shorter prompts'
      ],
      'NETWORK_ERROR': [
        'Check internet connection',
        'Verify firewall/proxy settings',
        'Check if ISP blocks Google APIs',
        'Try using VPN if blocked'
      ],
      'SERVICE_UNAVAILABLE': [
        'Wait a few minutes and try again',
        'Check Google Cloud status page',
        'Implement retry logic with backoff',
        'Monitor service status'
      ],
      'CONTENT_BLOCKED': [
        'Review prompt for safety policy violations',
        'Rephrase the prompt to be less sensitive',
        'Adjust safety settings if applicable',
        'Contact support if blocked incorrectly'
      ]
    };

    return fixes[errorCode] || ['Try again later', 'Check error details for more information'];
  }

  /**
   * Create detailed error report
   */
  static createErrorReport(error, context = {}) {
    const parsed = this.parseError(error);
    const fixes = this.suggestFixes(parsed.code);

    return {
      error: {
        code: parsed.code,
        message: parsed.message,
        statusCode: parsed.statusCode,
        userMessage: this.getUserMessage(parsed.code),
        details: parsed.details
      },
      recovery: {
        retryable: parsed.retryable,
        strategy: parsed.recoveryStrategy,
        suggestedFixes: fixes
      },
      context,
      timestamp: parsed.timestamp
    };
  }

  /**
   * Handle error in Express middleware
   */
  static handleExpressError(error, req, res, next) {
    const report = this.createErrorReport(error, {
      method: req.method,
      path: req.path,
      ip: req.ip
    });

    const statusCode = this.getStatusCode(error.code);

    logger.error('Express error handler', {
      code: error.code,
      statusCode,
      path: req.path
    });

    res.status(statusCode).json({
      success: false,
      ...report
    });
  }
}

export default GeminiErrorHandler;
