import { User } from '../models.js';
import { hashPassword, comparePassword, validatePasswordStrength } from '../utils/auth.js';
import { tokenManager } from '../utils/tokenManager.js';
import { logger } from '../utils/monitoring.js';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import config from '../config.js';

export class AuthService {
  constructor() {
    this.emailTransporter = this.initializeEmailTransporter();
  }

  initializeEmailTransporter() {
    if (config.EMAIL_SERVICE === 'gmail') {
      return nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: config.EMAIL_USER,
          pass: config.EMAIL_PASSWORD
        }
      });
    }
    return null;
  }

  async validateEmailExists(email) {
    const user = await User.findOne({ email: email.toLowerCase() });
    return user;
  }

  async validatePassword(plainPassword, hashedPassword) {
    return await comparePassword(plainPassword, hashedPassword);
  }

  async validatePasswordStrength(password) {
    return validatePasswordStrength(password);
  }

  async hashPassword(password) {
    return await hashPassword(password);
  }

  async createPasswordResetToken(userId) {
    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const expiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000);

    await User.findByIdAndUpdate(userId, {
      'security.passwordResetToken': hashedToken,
      'security.passwordResetExpires': expiresAt
    });

    return { resetToken, expiresAt };
  }

  async verifyPasswordResetToken(resetToken) {
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');
    const user = await User.findOne({
      'security.passwordResetToken': hashedToken,
      'security.passwordResetExpires': { $gt: new Date() }
    });

    return user;
  }

  async resetPassword(resetToken, newPassword) {
    const passwordValidation = validatePasswordStrength(newPassword);
    if (!passwordValidation.isValid) {
      throw new Error('Password does not meet security requirements');
    }

    const user = await this.verifyPasswordResetToken(resetToken);
    if (!user) {
      throw new Error('Invalid or expired reset token');
    }

    const hashedPassword = await this.hashPassword(newPassword);
    user.password = hashedPassword;
    user.security.passwordResetToken = undefined;
    user.security.passwordResetExpires = undefined;
    user.loginAttempts = 0;
    user.lockUntil = undefined;

    await user.save();
    return user;
  }

  async sendPasswordResetEmail(email, resetToken) {
    if (!this.emailTransporter) {
      logger.warn('Email service not configured');
      return false;
    }

    const resetUrl = `${config.FRONTEND_URL}/reset-password?token=${resetToken}`;

    const mailOptions = {
      from: config.EMAIL_FROM || config.EMAIL_USER,
      to: email,
      subject: 'Password Reset Request - Java Learning Platform',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Password Reset Request</h2>
          <p>You requested a password reset for your account. Click the link below to reset your password:</p>
          <p>
            <a href="${resetUrl}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Reset Password
            </a>
          </p>
          <p>Or copy this link: <a href="${resetUrl}">${resetUrl}</a></p>
          <p style="color: #666; font-size: 12px;">This link will expire in 1 hour.</p>
          <p style="color: #666; font-size: 12px;">If you didn't request this, please ignore this email.</p>
        </div>
      `
    };

    try {
      await this.emailTransporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      logger.error('Failed to send password reset email', { message: error.message, stack: error.stack });
      return false;
    }
  }

  async sendVerificationEmail(email, verificationToken) {
    if (!this.emailTransporter) {
      logger.warn('Email service not configured');
      return false;
    }

    const verificationUrl = `${config.FRONTEND_URL}/verify-email?token=${verificationToken}`;

    const mailOptions = {
      from: config.EMAIL_FROM || config.EMAIL_USER,
      to: email,
      subject: 'Email Verification - Java Learning Platform',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Verify Your Email</h2>
          <p>Welcome! Please verify your email address to complete your registration:</p>
          <p>
            <a href="${verificationUrl}" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Verify Email
            </a>
          </p>
          <p>Or copy this link: <a href="${verificationUrl}">${verificationUrl}</a></p>
          <p style="color: #666; font-size: 12px;">This link will expire in 24 hours.</p>
        </div>
      `
    };

    try {
      await this.emailTransporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      logger.error('Failed to send verification email', { message: error.message, stack: error.stack });
      return false;
    }
  }

  async createEmailVerificationToken(userId) {
    const verificationToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(verificationToken).digest('hex');
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await User.findByIdAndUpdate(userId, {
      'security.emailVerificationToken': hashedToken,
      'security.emailVerificationExpires': expiresAt
    });

    return { verificationToken, expiresAt };
  }

  async verifyEmail(verificationToken) {
    const hashedToken = crypto.createHash('sha256').update(verificationToken).digest('hex');
    const user = await User.findOne({
      'security.emailVerificationToken': hashedToken,
      'security.emailVerificationExpires': { $gt: new Date() }
    });

    if (!user) {
      throw new Error('Invalid or expired verification token');
    }

    user.isEmailVerified = true;
    user.security.emailVerificationToken = undefined;
    user.security.emailVerificationExpires = undefined;
    await user.save();

    return user;
  }

  async handleLoginAttempt(user, success = false) {
    if (success) {
      user.loginAttempts = 0;
      user.lockUntil = undefined;
      user.lastLogin = new Date();
    } else {
      user.loginAttempts = (user.loginAttempts || 0) + 1;
      if (user.loginAttempts >= 5) {
        user.lockUntil = new Date(Date.now() + 2 * 60 * 60 * 1000);
      }
    }
    await user.save();
  }

  async isAccountLocked(user) {
    if (!user.lockUntil) return false;
    if (user.lockUntil < new Date()) {
      user.lockUntil = undefined;
      user.loginAttempts = 0;
      await user.save();
      return false;
    }
    return true;
  }

  async getAccountLockTimeRemaining(user) {
    if (!user.lockUntil) return 0;
    const now = new Date();
    if (user.lockUntil < now) return 0;
    return Math.ceil((user.lockUntil - now) / 1000 / 60);
  }
}

export const authService = new AuthService();
