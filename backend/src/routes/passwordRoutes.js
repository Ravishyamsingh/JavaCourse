import express from 'express';
import { authRateLimit } from '../middleware/security.js';
import { validateRequest } from '../utils/validation.js';
import Joi from 'joi';
import {
  forgotPassword,
  resetPassword,
  verifyEmail,
  resendVerificationEmail,
  checkEmailExists,
  validatePasswordResetToken
} from '../controllers/passwordController.js';

const router = express.Router();

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

const resendVerificationSchema = Joi.object({
  email: Joi.string().email().required().trim().lowercase()
});

router.post('/forgot-password',
  authRateLimit,
  validateRequest(forgotPasswordSchema),
  forgotPassword
);

router.post('/reset-password',
  authRateLimit,
  validateRequest(resetPasswordSchema),
  resetPassword
);

router.post('/verify-email',
  authRateLimit,
  validateRequest(verifyEmailSchema),
  verifyEmail
);

router.post('/resend-verification',
  authRateLimit,
  validateRequest(resendVerificationSchema),
  resendVerificationEmail
);

router.get('/check-email',
  authRateLimit,
  checkEmailExists
);

router.get('/validate-reset-token',
  authRateLimit,
  validatePasswordResetToken
);

export default router;
