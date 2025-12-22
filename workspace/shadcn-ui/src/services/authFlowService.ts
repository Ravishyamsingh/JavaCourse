const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface AuthResponse {
  success: boolean;
  message: string;
  code: string;
  action?: string;
  email?: string;
  accessToken?: string;
  refreshToken?: string;
  user?: any;
}

export interface EmailCheckResponse {
  success: boolean;
  exists: boolean;
  provider?: string;
  message: string;
}

export class AuthFlowService {
  static async checkEmailExists(email: string): Promise<EmailCheckResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/password/check-email?email=${encodeURIComponent(email)}`);
      return await response.json();
    } catch (error) {
      console.error('Email check error:', error);
      throw error;
    }
  }

  static async login(email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message,
          code: data.code,
          action: this.getActionForLoginError(data.code)
        };
      }

      return {
        success: true,
        message: data.message,
        code: data.code,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user
      };
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  static async signup(firstName: string, lastName: string, email: string, password: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message,
          code: data.code
        };
      }

      return {
        success: true,
        message: data.message,
        code: data.code,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user
      };
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  }

  static async googleLogin(token: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message,
          code: data.code
        };
      }

      return {
        success: true,
        message: data.message,
        code: data.code,
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user
      };
    } catch (error) {
      console.error('Google login error:', error);
      throw error;
    }
  }

  static async forgotPassword(email: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/password/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message,
          code: data.code,
          action: this.getActionForForgotPasswordError(data.code)
        };
      }

      return {
        success: true,
        message: data.message,
        code: data.code,
        email: data.email
      };
    } catch (error) {
      console.error('Forgot password error:', error);
      throw error;
    }
  }

  static async resetPassword(token: string, newPassword: string, confirmPassword: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/password/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, newPassword, confirmPassword })
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message,
          code: data.code,
          action: this.getActionForResetPasswordError(data.code)
        };
      }

      return {
        success: true,
        message: data.message,
        code: data.code,
        action: data.action
      };
    } catch (error) {
      console.error('Reset password error:', error);
      throw error;
    }
  }

  static async validateResetToken(token: string): Promise<{ valid: boolean; email?: string }> {
    try {
      const response = await fetch(`${API_BASE_URL}/password/validate-reset-token?token=${encodeURIComponent(token)}`);
      const data = await response.json();

      if (!response.ok) {
        return { valid: false };
      }

      return {
        valid: data.valid,
        email: data.email
      };
    } catch (error) {
      console.error('Validate reset token error:', error);
      return { valid: false };
    }
  }

  static async verifyEmail(token: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/password/verify-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token })
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message,
          code: data.code
        };
      }

      return {
        success: true,
        message: data.message,
        code: data.code
      };
    } catch (error) {
      console.error('Email verification error:', error);
      throw error;
    }
  }

  static async resendVerificationEmail(email: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/password/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message,
          code: data.code
        };
      }

      return {
        success: true,
        message: data.message,
        code: data.code,
        email: data.email
      };
    } catch (error) {
      console.error('Resend verification error:', error);
      throw error;
    }
  }

  private static getActionForLoginError(code: string): string {
    const actionMap: { [key: string]: string } = {
      'USER_NOT_FOUND': 'SIGNUP',
      'INVALID_PASSWORD': 'FORGOT_PASSWORD',
      'GOOGLE_AUTH_REQUIRED': 'GOOGLE_LOGIN',
      'ACCOUNT_LOCKED': 'WAIT_OR_FORGOT_PASSWORD'
    };
    return actionMap[code] || 'RETRY';
  }

  private static getActionForForgotPasswordError(code: string): string {
    const actionMap: { [key: string]: string } = {
      'USER_NOT_FOUND': 'SIGNUP',
      'GOOGLE_AUTH_ONLY': 'GOOGLE_LOGIN'
    };
    return actionMap[code] || 'RETRY';
  }

  private static getActionForResetPasswordError(code: string): string {
    const actionMap: { [key: string]: string } = {
      'INVALID_RESET_TOKEN': 'FORGOT_PASSWORD'
    };
    return actionMap[code] || 'RETRY';
  }
}

export default AuthFlowService;
