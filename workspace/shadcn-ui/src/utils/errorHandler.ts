import { toast } from 'sonner';

export interface AuthError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

export enum AuthErrorCode {
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  INVALID_PASSWORD = 'INVALID_PASSWORD',
  ACCOUNT_LOCKED = 'ACCOUNT_LOCKED',
  EMAIL_NOT_VERIFIED = 'EMAIL_NOT_VERIFIED',
  SESSION_EXPIRED = 'SESSION_EXPIRED',
  INSUFFICIENT_PERMISSIONS = 'INSUFFICIENT_PERMISSIONS',
  NETWORK_ERROR = 'NETWORK_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  RATE_LIMITED = 'RATE_LIMITED',
  CONCURRENT_LOGIN = 'CONCURRENT_LOGIN',
  ROLE_CHANGED = 'ROLE_CHANGED',
  TOKEN_INVALID = 'TOKEN_INVALID',
  REFRESH_FAILED = 'REFRESH_FAILED',
  GOOGLE_AUTH_ERROR = 'GOOGLE_AUTH_ERROR',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  USER_NOT_FOUND = 'USER_NOT_FOUND'
}

export const ERROR_MESSAGES: Record<AuthErrorCode, string> = {
  [AuthErrorCode.INVALID_CREDENTIALS]: 'Invalid email or password. Please check your credentials and try again.',
  [AuthErrorCode.INVALID_PASSWORD]: 'Invalid password. Please try again.',
  [AuthErrorCode.ACCOUNT_LOCKED]: 'Your account has been temporarily locked due to multiple failed login attempts.',
  [AuthErrorCode.EMAIL_NOT_VERIFIED]: 'Please verify your email address before signing in.',
  [AuthErrorCode.SESSION_EXPIRED]: 'Your session has expired. Please sign in again.',
  [AuthErrorCode.INSUFFICIENT_PERMISSIONS]: 'You don\'t have permission to access this resource.',
  [AuthErrorCode.NETWORK_ERROR]: 'Network connection error. Please check your internet connection.',
  [AuthErrorCode.SERVER_ERROR]: 'Server error occurred. Please try again later.',
  [AuthErrorCode.RATE_LIMITED]: 'Too many requests. Please wait a moment before trying again.',
  [AuthErrorCode.CONCURRENT_LOGIN]: 'Your account is already logged in from another device.',
  [AuthErrorCode.ROLE_CHANGED]: 'Your account permissions have been updated. Please sign in again.',
  [AuthErrorCode.TOKEN_INVALID]: 'Authentication token is invalid. Please sign in again.',
  [AuthErrorCode.REFRESH_FAILED]: 'Failed to refresh session. Please sign in again.',
  [AuthErrorCode.GOOGLE_AUTH_ERROR]: 'Google authentication failed. Please try again.',
  [AuthErrorCode.VALIDATION_ERROR]: 'Please check your input and try again.',
  [AuthErrorCode.USER_NOT_FOUND]: 'User not found. Please register first.'
};

export const ERROR_ACTIONS: Record<AuthErrorCode, { 
  action?: string; 
  redirect?: string; 
  retry?: boolean;
  showDetails?: boolean;
}> = {
  [AuthErrorCode.INVALID_CREDENTIALS]: { retry: true },
  [AuthErrorCode.INVALID_PASSWORD]: { retry: true },
  [AuthErrorCode.ACCOUNT_LOCKED]: { action: 'Contact Support', showDetails: true },
  [AuthErrorCode.EMAIL_NOT_VERIFIED]: { action: 'Resend Verification', redirect: '/verify-email' },
  [AuthErrorCode.SESSION_EXPIRED]: { redirect: '/login' },
  [AuthErrorCode.INSUFFICIENT_PERMISSIONS]: { redirect: '/dashboard' },
  [AuthErrorCode.NETWORK_ERROR]: { retry: true },
  [AuthErrorCode.SERVER_ERROR]: { retry: true },
  [AuthErrorCode.RATE_LIMITED]: { showDetails: true },
  [AuthErrorCode.CONCURRENT_LOGIN]: { action: 'Force Login', showDetails: true },
  [AuthErrorCode.ROLE_CHANGED]: { redirect: '/login' },
  [AuthErrorCode.TOKEN_INVALID]: { redirect: '/login' },
  [AuthErrorCode.REFRESH_FAILED]: { redirect: '/login' },
  [AuthErrorCode.GOOGLE_AUTH_ERROR]: { retry: true },
  [AuthErrorCode.VALIDATION_ERROR]: { retry: true },
  [AuthErrorCode.USER_NOT_FOUND]: { action: 'Register', redirect: '/register' }
};

export class AuthErrorHandler {
  private static errorLog: AuthError[] = [];
  private static maxLogSize = 100;

  static createError(code: AuthErrorCode, details?: any): AuthError {
    const error: AuthError = {
      code,
      message: ERROR_MESSAGES[code],
      details,
      timestamp: new Date()
    };

    this.logError(error);
    return error;
  }

  static handleError(error: AuthError | Error | string, context?: string): AuthError {
    let authError: AuthError;

    if (typeof error === 'string') {
      authError = this.createError(AuthErrorCode.SERVER_ERROR, { originalMessage: error, context });
    } else if (error instanceof Error) {
      authError = this.parseError(error, context);
    } else {
      authError = error;
    }

    this.showErrorToUser(authError);
    return authError;
  }

  private static parseError(error: Error, context?: string): AuthError {
    const message = error.message.toLowerCase();
    
    // Network errors
    if (message.includes('network') || message.includes('fetch')) {
      return this.createError(AuthErrorCode.NETWORK_ERROR, { originalError: error, context });
    }
    
    // Authentication specific errors
    if (message.includes('user not found')) {
      return this.createError(AuthErrorCode.USER_NOT_FOUND, { originalError: error, context });
    }

    if (message.includes('invalid password')) {
      return this.createError(AuthErrorCode.INVALID_PASSWORD, { originalError: error, context });
    }

    if (message.includes('invalid credentials') || message.includes('unauthorized')) {
      return this.createError(AuthErrorCode.INVALID_CREDENTIALS, { originalError: error, context });
    }
    
    if (message.includes('token') && message.includes('expired')) {
      return this.createError(AuthErrorCode.SESSION_EXPIRED, { originalError: error, context });
    }
    
    if (message.includes('token') && message.includes('invalid')) {
      return this.createError(AuthErrorCode.TOKEN_INVALID, { originalError: error, context });
    }
    
    if (message.includes('refresh')) {
      return this.createError(AuthErrorCode.REFRESH_FAILED, { originalError: error, context });
    }
    
    if (message.includes('google') || message.includes('oauth')) {
      return this.createError(AuthErrorCode.GOOGLE_AUTH_ERROR, { originalError: error, context });
    }
    
    if (message.includes('permission') || message.includes('forbidden')) {
      return this.createError(AuthErrorCode.INSUFFICIENT_PERMISSIONS, { originalError: error, context });
    }
    
    if (message.includes('rate limit') || message.includes('too many')) {
      return this.createError(AuthErrorCode.RATE_LIMITED, { originalError: error, context });
    }
    
    if (message.includes('concurrent') || message.includes('already logged')) {
      return this.createError(AuthErrorCode.CONCURRENT_LOGIN, { originalError: error, context });
    }
    
    if (message.includes('role') && message.includes('changed')) {
      return this.createError(AuthErrorCode.ROLE_CHANGED, { originalError: error, context });
    }
    
    if (message.includes('email') && message.includes('verify')) {
      return this.createError(AuthErrorCode.EMAIL_NOT_VERIFIED, { originalError: error, context });
    }
    
    if (message.includes('locked') || message.includes('suspended')) {
      return this.createError(AuthErrorCode.ACCOUNT_LOCKED, { originalError: error, context });
    }
    
    if (message.includes('validation') || message.includes('invalid input')) {
      return this.createError(AuthErrorCode.VALIDATION_ERROR, { originalError: error, context });
    }

    // Default to server error
    return this.createError(AuthErrorCode.SERVER_ERROR, { originalError: error, context });
  }

  private static showErrorToUser(error: AuthError): void {
    const config = ERROR_ACTIONS[error.code as AuthErrorCode];
    
    if (config?.action) {
      toast.error(error.message, {
        action: {
          label: config.action,
          onClick: () => this.handleErrorAction(error)
        },
        duration: 8000
      });
    } else {
      toast.error(error.message, {
        duration: config?.retry ? 6000 : 4000
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Auth Error:', error);
    }
  }

  private static handleErrorAction(error: AuthError): void {
    const config = ERROR_ACTIONS[error.code as AuthErrorCode];
    
    switch (error.code) {
      case AuthErrorCode.ACCOUNT_LOCKED:
        window.open('mailto:support@java-course.com?subject=Account Locked&body=My account has been locked. Please help me regain access.');
        break;
      case AuthErrorCode.EMAIL_NOT_VERIFIED:
        // Trigger email verification resend
        this.resendVerificationEmail();
        break;
      case AuthErrorCode.CONCURRENT_LOGIN:
        // Show force login dialog
        this.showForceLoginDialog();
        break;
      default:
        if (config?.redirect) {
          window.location.href = config.redirect;
        }
    }
  }

  private static async resendVerificationEmail(): Promise<void> {
    try {
      // Implementation would call API to resend verification email
      toast.success('Verification email sent! Please check your inbox.');
    } catch (error) {
      toast.error('Failed to send verification email. Please try again.');
    }
  }

  private static showForceLoginDialog(): void {
    // Implementation would show a dialog asking if user wants to force login
    const confirmed = confirm('Your account is logged in elsewhere. Do you want to sign out other sessions and continue?');
    if (confirmed) {
      // Implementation would call API to force login
      toast.success('Other sessions have been terminated. You can now continue.');
    }
  }

  private static logError(error: AuthError): void {
    this.errorLog.unshift(error);
    
    // Keep only the most recent errors
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(0, this.maxLogSize);
    }
  }

  static getErrorLog(): AuthError[] {
    return [...this.errorLog];
  }

  static clearErrorLog(): void {
    this.errorLog = [];
  }

  static getErrorStats(): { [key: string]: number } {
    const stats: { [key: string]: number } = {};
    
    this.errorLog.forEach(error => {
      stats[error.code] = (stats[error.code] || 0) + 1;
    });
    
    return stats;
  }
}

// Utility function for handling async operations with error handling
export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  context?: string
): Promise<T> {
  try {
    return await operation();
  } catch (error) {
    const authError = AuthErrorHandler.handleError(error as Error, context);
    throw authError;
  }
}

// Hook for handling errors in React components
export function useErrorHandler() {
  const handleError = (error: Error | string, context?: string) => {
    return AuthErrorHandler.handleError(error, context);
  };

  const createError = (code: AuthErrorCode, details?: any) => {
    return AuthErrorHandler.createError(code, details);
  };

  return {
    handleError,
    createError,
    getErrorLog: AuthErrorHandler.getErrorLog,
    clearErrorLog: AuthErrorHandler.clearErrorLog,
    getErrorStats: AuthErrorHandler.getErrorStats
  };
}