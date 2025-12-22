import { User } from '../models.js';
import { authService } from '../services/authService.js';
import { sanitizeInput } from '../utils/validation.js';
import Joi from 'joi';

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required().trim().lowercase()
});

const resetPasswordSchema = Joi.object({
  token: Joi.string().required(),
  newPassword: Joi.string().min(8).required(),
  confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required()
});

const verifyEmailSchema = Joi.object({
  token: Joi.string().required()
});

export const forgotPassword = async (req, res, next) => {
  try {
    console.log('🔐 Forgot password request for:', req.body.email);

    const sanitizedBody = sanitizeInput(req.body);
    const { error, value } = forgotPasswordSchema.validate(sanitizedBody);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        code: 'VALIDATION_ERROR'
      });
    }

    const { email } = value;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No account found with this email. Please sign up to create a new account.',
        code: 'USER_NOT_FOUND',
        action: 'SIGNUP'
      });
    }

    if (user.provider === 'google' && !user.password) {
      return res.status(400).json({
        success: false,
        message: 'This account uses Google Sign-In. Please use Google to log in.',
        code: 'GOOGLE_AUTH_ONLY',
        action: 'GOOGLE_LOGIN'
      });
    }

    const { resetToken } = await authService.createPasswordResetToken(user._id);

    const emailSent = await authService.sendPasswordResetEmail(email, resetToken);

    if (!emailSent) {
      console.warn('⚠️  Email service not configured, but token created');
    }

    console.log('✅ Password reset email sent to:', email);

    res.json({
      success: true,
      message: 'Password reset link has been sent to your email. Please check your inbox.',
      code: 'RESET_EMAIL_SENT',
      email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3')
    });
  } catch (error) {
    console.error('❌ Forgot password error:', error);
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    console.log('🔐 Password reset attempt');

    const sanitizedBody = sanitizeInput(req.body);
    const { error, value } = resetPasswordSchema.validate(sanitizedBody);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        code: 'VALIDATION_ERROR'
      });
    }

    const { token, newPassword } = value;

    const user = await authService.verifyPasswordResetToken(token);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Password reset link has expired or is invalid. Please request a new one.',
        code: 'INVALID_RESET_TOKEN',
        action: 'FORGOT_PASSWORD'
      });
    }

    const passwordValidation = authService.validatePasswordStrength(newPassword);
    if (!passwordValidation.isValid) {
      return res.status(400).json({
        success: false,
        message: 'Password does not meet security requirements',
        code: 'WEAK_PASSWORD',
        errors: passwordValidation.errors
      });
    }

    const updatedUser = await authService.resetPassword(token, newPassword);

    console.log('✅ Password reset successful for:', updatedUser.email);

    res.json({
      success: true,
      message: 'Password has been reset successfully. Please log in with your new password.',
      code: 'PASSWORD_RESET_SUCCESS',
      action: 'LOGIN'
    });
  } catch (error) {
    console.error('��� Reset password error:', error);
    if (error.message.includes('Invalid or expired')) {
      return res.status(400).json({
        success: false,
        message: error.message,
        code: 'INVALID_RESET_TOKEN',
        action: 'FORGOT_PASSWORD'
      });
    }
    next(error);
  }
};

export const verifyEmail = async (req, res, next) => {
  try {
    console.log('📧 Email verification attempt');

    const sanitizedBody = sanitizeInput(req.body);
    const { error, value } = verifyEmailSchema.validate(sanitizedBody);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        code: 'VALIDATION_ERROR'
      });
    }

    const { token } = value;

    const user = await authService.verifyEmail(token);

    console.log('✅ Email verified for:', user.email);

    res.json({
      success: true,
      message: 'Email verified successfully. You can now access all features.',
      code: 'EMAIL_VERIFIED',
      user: {
        id: user._id,
        email: user.email,
        isEmailVerified: user.isEmailVerified
      }
    });
  } catch (error) {
    console.error('❌ Email verification error:', error);
    if (error.message.includes('Invalid or expired')) {
      return res.status(400).json({
        success: false,
        message: error.message,
        code: 'INVALID_VERIFICATION_TOKEN',
        action: 'RESEND_VERIFICATION'
      });
    }
    next(error);
  }
};

export const resendVerificationEmail = async (req, res, next) => {
  try {
    console.log('📧 Resend verification email request');

    const sanitizedBody = sanitizeInput(req.body);
    const { error, value } = forgotPasswordSchema.validate(sanitizedBody);

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        code: 'VALIDATION_ERROR'
      });
    }

    const { email } = value;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No account found with this email.',
        code: 'USER_NOT_FOUND'
      });
    }

    if (user.isEmailVerified) {
      return res.status(400).json({
        success: false,
        message: 'This email is already verified.',
        code: 'EMAIL_ALREADY_VERIFIED'
      });
    }

    const { verificationToken } = await authService.createEmailVerificationToken(user._id);

    const emailSent = await authService.sendVerificationEmail(email, verificationToken);

    if (!emailSent) {
      console.warn('⚠️  Email service not configured');
    }

    console.log('✅ Verification email resent to:', email);

    res.json({
      success: true,
      message: 'Verification email has been sent. Please check your inbox.',
      code: 'VERIFICATION_EMAIL_SENT',
      email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3')
    });
  } catch (error) {
    console.error('❌ Resend verification email error:', error);
    next(error);
  }
};

export const checkEmailExists = async (req, res, next) => {
  try {
    const { email } = req.query;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required',
        code: 'MISSING_EMAIL'
      });
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      return res.json({
        success: true,
        exists: true,
        provider: user.provider,
        message: user.provider === 'google' && !user.password
          ? 'This email is registered with Google Sign-In'
          : 'This email is already registered'
      });
    }

    res.json({
      success: true,
      exists: false,
      message: 'Email is available for registration'
    });
  } catch (error) {
    console.error('❌ Check email error:', error);
    next(error);
  }
};

export const validatePasswordResetToken = async (req, res, next) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'Reset token is required',
        code: 'MISSING_TOKEN'
      });
    }

    const user = await authService.verifyPasswordResetToken(token);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Password reset link has expired or is invalid',
        code: 'INVALID_RESET_TOKEN'
      });
    }

    res.json({
      success: true,
      valid: true,
      message: 'Reset token is valid',
      email: user.email.replace(/(.{2})(.*)(@.*)/, '$1***$3')
    });
  } catch (error) {
    console.error('❌ Validate reset token error:', error);
    next(error);
  }
};
