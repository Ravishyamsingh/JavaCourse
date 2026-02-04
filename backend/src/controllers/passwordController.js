import { User } from '../models.js';
import { authService } from '../services/authService.js';
import { sanitizeInput } from '../utils/validation.js';
import { getLoggableEmail } from '../utils/sanitization.js';
import Joi from 'joi';
import { logger } from '../utils/monitoring.js';

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
    logger.info('Forgot password request', { email: getLoggableEmail(req.body.email) });

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

    // Allow Google users to set a password (enables hybrid login)
    // This is intentional - we want users to be able to add email/password login to their Google account
    const isSettingFirstPassword = user.provider === 'google' && !user.password;

    const { resetToken } = await authService.createPasswordResetToken(user._id);

    const emailSent = await authService.sendPasswordResetEmail(email, resetToken);

    if (!emailSent) {
      logger.warn('Email service not configured, but token created');
    }

    const logMessage = isSettingFirstPassword ? 'Password setup email sent for Google user' : 'Password reset email sent';
    logger.info(logMessage, { email: getLoggableEmail(email) });

    res.json({
      success: true,
      message: isSettingFirstPassword 
        ? 'A link to set your password has been sent to your email. This will allow you to login with email and password.'
        : 'Password reset link has been sent to your email. Please check your inbox.',
      code: isSettingFirstPassword ? 'SET_PASSWORD_EMAIL_SENT' : 'RESET_EMAIL_SENT',
      email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3')
    });
  } catch (error) {
    logger.error('Forgot password error', { message: error.message, stack: error.stack });
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    logger.info('Password reset attempt');

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

    logger.info('Password reset successful', { email: getLoggableEmail(updatedUser.email) });

    res.json({
      success: true,
      message: 'Password has been reset successfully. Please log in with your new password.',
      code: 'PASSWORD_RESET_SUCCESS',
      action: 'LOGIN'
    });
  } catch (error) {
    logger.error('Reset password error', { message: error.message, stack: error.stack });
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
    logger.info('Email verification attempt');

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

    logger.info('Email verified', { email: getLoggableEmail(user.email) });

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
    logger.error('Email verification error', { message: error.message, stack: error.stack });
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
    logger.info('Resend verification email request');

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
      logger.warn('Email service not configured');
    }

    logger.info('Verification email resent', { email: getLoggableEmail(email) });

    res.json({
      success: true,
      message: 'Verification email has been sent. Please check your inbox.',
      code: 'VERIFICATION_EMAIL_SENT',
      email: email.replace(/(.{2})(.*)(@.*)/, '$1***$3')
    });
  } catch (error) {
    logger.error('Resend verification email error', { message: error.message, stack: error.stack });
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
    logger.error('Check email error', { message: error.message, stack: error.stack });
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
    logger.error('Validate reset token error', { message: error.message, stack: error.stack });
    next(error);
  }
};
