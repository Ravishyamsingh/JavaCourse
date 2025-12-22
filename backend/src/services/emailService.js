/**
 * Email Notification Service
 * Handles all email communications
 */

import nodemailer from 'nodemailer';
import { logger } from '../utils/monitoring.js';

class EmailService {
  constructor() {
    this.transporter = null;
    this.initializeTransporter();
  }

  /**
   * Initialize email transporter
   */
  initializeTransporter() {
    try {
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      });

      // Verify connection
      this.transporter.verify((error, success) => {
        if (error) {
          logger.error('Email transporter verification failed', { error: error.message });
        } else {
          logger.info('Email transporter verified successfully');
        }
      });
    } catch (error) {
      logger.error('Failed to initialize email transporter', { error: error.message });
    }
  }

  /**
   * Send email
   */
  async sendEmail(to, subject, html, text = '') {
    try {
    if (!this.transporter) {
        logger.warn('Email transporter not initialized');
        return { success: false, message: 'Email service not available' };
      }

      const mailOptions = {
        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM}>`,
        to,
        subject,
        html,
        text: text || html.replace(/<[^>]*>/g, '')
      };

      const info = await this.transporter.sendMail(mailOptions);
      logger.info('Email sent successfully', { messageId: info.messageId, to });
      return { success: true, messageId: info.messageId };
    } catch (error) {
      logger.error('Failed to send email', { error: error.message, to });
      return { success: false, message: error.message };
    }
  }

  /**
   * Send welcome email
   */
  async sendWelcomeEmail(user) {
    const html = `
      <h2>Welcome to Java Course!</h2>
      <p>Hi ${user.firstName},</p>
      <p>Thank you for signing up. Your account has been created successfully.</p>
      <p>You can now log in and start learning Java programming.</p>
      <a href="${process.env.FRONTEND_URL}/login" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Login Now</a>
      <p>Best regards,<br>Java Course Team</p>
    `;

    return this.sendEmail(user.email, 'Welcome to Java Course', html);
  }

  /**
   * Send password reset email
   */
  async sendPasswordResetEmail(user, resetToken) {
    const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;
    const html = `
      <h2>Password Reset Request</h2>
      <p>Hi ${user.firstName},</p>
      <p>We received a request to reset your password. Click the link below to proceed:</p>
      <a href="${resetLink}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
      <p>This link will expire in 1 hour.</p>
      <p>If you didn't request this, please ignore this email.</p>
      <p>Best regards,<br>Java Course Team</p>
    `;

    return this.sendEmail(user.email, 'Password Reset Request', html);
  }

  /**
   * Send account locked email
   */
  async sendAccountLockedEmail(user) {
    const html = `
      <h2>Account Security Alert</h2>
      <p>Hi ${user.firstName},</p>
      <p>Your account has been temporarily locked due to multiple failed login attempts.</p>
      <p>This is a security measure to protect your account.</p>
      <p>Your account will be automatically unlocked in 30 minutes.</p>
      <p>If this wasn't you, please reset your password immediately.</p>
      <a href="${process.env.FRONTEND_URL}/forgot-password" style="background-color: #dc3545; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a>
      <p>Best regards,<br>Java Course Team</p>
    `;

    return this.sendEmail(user.email, 'Account Security Alert', html);
  }

  /**
   * Send security alert email
   */
  async sendSecurityAlertEmail(user, alertDetails) {
    const html = `
      <h2>Security Alert</h2>
      <p>Hi ${user.firstName},</p>
      <p><strong>Alert Type:</strong> ${alertDetails.type}</p>
      <p><strong>Description:</strong> ${alertDetails.description}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p>If this wasn't you, please secure your account immediately.</p>
      <a href="${process.env.FRONTEND_URL}/auth/change-password" style="background-color: #dc3545; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Change Password</a>
      <p>Best regards,<br>Java Course Security Team</p>
    `;

    return this.sendEmail(user.email, 'Security Alert', html);
  }

  /**
   * Send quiz result email
   */
  async sendQuizResultEmail(user, quizResult) {
    const html = `
      <h2>Quiz Result</h2>
      <p>Hi ${user.firstName},</p>
      <p>You have completed the quiz: <strong>${quizResult.quizName}</strong></p>
      <p><strong>Score:</strong> ${quizResult.score}/${quizResult.totalScore}</p>
      <p><strong>Percentage:</strong> ${quizResult.percentage}%</p>
      <p><strong>Status:</strong> ${quizResult.passed ? 'PASSED' : 'FAILED'}</p>
      <a href="${process.env.FRONTEND_URL}/quiz-results" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Details</a>
      <p>Best regards,<br>Java Course Team</p>
    `;

    return this.sendEmail(user.email, `Quiz Result: ${quizResult.quizName}`, html);
  }

  /**
   * Send certificate email
   */
  async sendCertificateEmail(user, certificateDetails) {
    const html = `
      <h2>Congratulations!</h2>
      <p>Hi ${user.firstName},</p>
      <p>Congratulations! You have successfully completed the course: <strong>${certificateDetails.courseName}</strong></p>
      <p>Your certificate has been generated and is ready for download.</p>
      <a href="${process.env.FRONTEND_URL}/certificate" style="background-color: #28a745; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Download Certificate</a>
      <p>Best regards,<br>Java Course Team</p>
    `;

    return this.sendEmail(user.email, 'Certificate Awarded', html);
  }

  /**
   * Send admin notification email
   */
  async sendAdminNotificationEmail(adminEmail, notification) {
    const html = `
      <h2>Admin Notification</h2>
      <p><strong>Type:</strong> ${notification.type}</p>
      <p><strong>Message:</strong> ${notification.message}</p>
      <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      <p>Please log in to the admin panel for more details.</p>
      <a href="${process.env.FRONTEND_URL}/admin" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Go to Admin Panel</a>
      <p>Best regards,<br>Java Course System</p>
    `;

    return this.sendEmail(adminEmail, `Admin Notification: ${notification.type}`, html);
  }

  /**
   * Send bulk email
   */
  async sendBulkEmail(recipients, subject, html) {
    try {
      const results = [];
      for (const recipient of recipients) {
        const result = await this.sendEmail(recipient, subject, html);
        results.push({ recipient, ...result });
      }
      return { success: true, results };
    } catch (error) {
      logger.error('Bulk email failed', { error: error.message });
      return { success: false, message: error.message };
    }
  }
}

export const emailService = new EmailService();
