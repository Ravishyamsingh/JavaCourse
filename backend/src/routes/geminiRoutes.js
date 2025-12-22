import express from 'express';
import {
  generateContentHandler,
  streamContentHandler,
  checkStatusHandler,
  checkQuotaHandler,
  getMetricsHandler,
  resetCircuitBreakerHandler,
  clearQueueHandler
} from '../controllers/geminiController.js';
import { authMiddleware } from '../middleware/auth.js';
import { authorize } from '../middleware/rbac.js';
import { validateRequest } from '../utils/validation.js';
import Joi from 'joi';

const router = express.Router();

/**
 * Validation schemas
 */
const generateContentSchema = Joi.object({
  prompt: Joi.string().required().min(1).max(10000),
  options: Joi.object({
    temperature: Joi.number().min(0).max(2),
    maxOutputTokens: Joi.number().min(1).max(4096),
    topP: Joi.number().min(0).max(1),
    topK: Joi.number().min(1),
    safetySettings: Joi.array()
  }).optional()
});

const streamContentSchema = Joi.object({
  prompt: Joi.string().required().min(1).max(10000),
  options: Joi.object({
    temperature: Joi.number().min(0).max(2),
    maxOutputTokens: Joi.number().min(1).max(4096),
    topP: Joi.number().min(0).max(1),
    topK: Joi.number().min(1)
  }).optional()
});

/**
 * Generate content
 * POST /api/gemini/generate
 * Body: { prompt, options? }
 */
router.post(
  '/generate',
  authMiddleware,
  validateRequest(generateContentSchema),
  generateContentHandler
);

/**
 * Stream content
 * POST /api/gemini/stream
 * Body: { prompt, options? }
 */
router.post(
  '/stream',
  authMiddleware,
  validateRequest(streamContentSchema),
  streamContentHandler
);

/**
 * Check API status
 * GET /api/gemini/status
 */
router.get(
  '/status',
  authMiddleware,
  checkStatusHandler
);

/**
 * Check quota usage
 * GET /api/gemini/quota
 */
router.get(
  '/quota',
  authMiddleware,
  authorize({ roles: ['admin', 'superadmin'] }),
  checkQuotaHandler
);

/**
 * Get system metrics
 * GET /api/gemini/metrics
 */
router.get(
  '/metrics',
  authMiddleware,
  authorize({ roles: ['admin', 'superadmin'] }),
  getMetricsHandler
);

/**
 * Reset circuit breaker
 * POST /api/gemini/reset-circuit-breaker
 */
router.post(
  '/reset-circuit-breaker',
  authMiddleware,
  authorize({ roles: ['superadmin'] }),
  resetCircuitBreakerHandler
);

/**
 * Clear request queue
 * POST /api/gemini/clear-queue
 */
router.post(
  '/clear-queue',
  authMiddleware,
  authorize({ roles: ['superadmin'] }),
  clearQueueHandler
);

export default router;
