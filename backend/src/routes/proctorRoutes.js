import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { adminRateLimit } from '../middleware/security.js';
import { authorize } from '../middleware/rbac.js';
import { validateRequest } from '../utils/validation.js';
import Joi from 'joi';
import {
  startSession,
  submitSession,
  logEvent,
  upsertQuestionProgress,
  getSessionSummary,
  adminListEvents,
  adminSessionDetail,
  adminTestReport,
  adminUserTestHistory,
  getActiveSessions,
  abortSession,
  saveProgress,
  getProgress,
  resumeSession,
  interruptSession,
  adminGenerateResumeLink,
  adminListInterruptedSessions,
  adminRevokeResume
} from '../controllers/proctorController.js';

const router = express.Router();

// ============================================================================
// VALIDATION SCHEMAS
// ============================================================================

const eventSchema = Joi.object({
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required(),
  type: Joi.string().trim().min(1).max(50).required(),
  details: Joi.object().unknown(true).optional()
});

const sessionStartSchema = Joi.object({
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required(),
  meta: Joi.object().unknown(true).optional()
});

const sessionSubmitSchema = Joi.object({
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required(),
  auto: Joi.boolean().optional(),
  totalQuestions: Joi.number().min(0).optional(),
  completedQuestions: Joi.number().min(0).optional(),
  totalViolations: Joi.number().min(0).optional(),
  questionsData: Joi.array().items(
    Joi.object({
      questionId: Joi.string().required(),
      title: Joi.string().optional(),
      difficulty: Joi.string().valid('easy', 'medium', 'hard').optional(),
      completed: Joi.boolean().optional(),
      attempts: Joi.number().min(0).optional(),
      code: Joi.string().max(50000).optional(),
      output: Joi.string().max(10000).optional(),
      timeSpentMs: Joi.number().min(0).optional()
    })
  ).optional()
});

const questionProgressSchema = Joi.object({
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required(),
  questionId: Joi.string().trim().min(1).max(100).required(),
  code: Joi.string().max(50000).optional(),
  output: Joi.string().max(10000).optional(),
  completed: Joi.boolean().optional(),
  timeSpentMs: Joi.number().min(0).optional(),
  attemptDelta: Joi.number().integer().min(0).optional()
});

const abortSessionSchema = Joi.object({
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required()
});

const saveProgressSchema = Joi.object({
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required(),
  currentQuestionId: Joi.string().trim().max(100).optional().allow(null),
  answers: Joi.object().pattern(
    Joi.string(),
    Joi.object({
      code: Joi.string().max(50000).optional(),
      lastOutput: Joi.string().max(10000).optional(),
      completed: Joi.boolean().optional(),
      attempts: Joi.number().min(0).optional()
    })
  ).optional(),
  violations: Joi.number().min(0).optional()
});

const resumeSessionSchema = Joi.object({
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required(),
  resumeToken: Joi.string().trim().max(100).optional()
});

const interruptSessionSchema = Joi.object({
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required(),
  reason: Joi.string().trim().max(500).optional()
});

const adminGenerateResumeLinkSchema = Joi.object({
  userId: Joi.string().trim().min(1).max(100).required(),
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required(),
  reason: Joi.string().trim().max(500).optional(),
  expiresInHours: Joi.number().min(1).max(168).optional() // Max 7 days
});

const adminRevokeResumeSchema = Joi.object({
  userId: Joi.string().trim().min(1).max(100).required(),
  testId: Joi.string().trim().min(1).max(100).required(),
  sessionId: Joi.string().trim().min(1).max(100).required()
});

// ============================================================================
// USER ROUTES (Authenticated)
// ============================================================================

/**
 * Start a new proctoring session
 * POST /api/proctor/start
 */
router.post('/start',
  authMiddleware,
  validateRequest(sessionStartSchema),
  startSession
);

/**
 * Submit a proctoring session
 * POST /api/proctor/submit
 */
router.post('/submit',
  authMiddleware,
  validateRequest(sessionSubmitSchema),
  submitSession
);

/**
 * Log a proctoring event
 * POST /api/proctor/log
 */
router.post('/log',
  authMiddleware,
  validateRequest(eventSchema),
  logEvent
);

/**
 * Update question progress
 * POST /api/proctor/question
 */
router.post('/question',
  authMiddleware,
  validateRequest(questionProgressSchema),
  upsertQuestionProgress
);

/**
 * Get session summary
 * GET /api/proctor/summary/:testId/:sessionId
 */
router.get('/summary/:testId/:sessionId',
  authMiddleware,
  getSessionSummary
);

/**
 * Get user's active sessions
 * GET /api/proctor/active-sessions
 */
router.get('/active-sessions',
  authMiddleware,
  getActiveSessions
);

/**
 * Abort a session
 * POST /api/proctor/abort
 */
router.post('/abort',
  authMiddleware,
  validateRequest(abortSessionSchema),
  abortSession
);

/**
 * Save test progress (auto-save)
 * POST /api/proctor/save-progress
 */
router.post('/save-progress',
  authMiddleware,
  validateRequest(saveProgressSchema),
  saveProgress
);

/**
 * Get saved progress for resuming
 * GET /api/proctor/get-progress/:testId/:sessionId
 */
router.get('/get-progress/:testId/:sessionId',
  authMiddleware,
  getProgress
);

/**
 * Resume a test session
 * POST /api/proctor/resume
 */
router.post('/resume',
  authMiddleware,
  validateRequest(resumeSessionSchema),
  resumeSession
);

/**
 * Mark session as interrupted
 * POST /api/proctor/interrupt
 */
router.post('/interrupt',
  authMiddleware,
  validateRequest(interruptSessionSchema),
  interruptSession
);

// ============================================================================
// ADMIN ROUTES (Admin/SuperAdmin only)
// ============================================================================

/**
 * List all events with filtering
 * GET /api/proctor/admin/events
 * Query params: userId, testId, type, severity, sessionId, limit, skip
 */
router.get('/admin/events',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  adminListEvents
);

/**
 * Get detailed session information
 * GET /api/proctor/admin/session/:userId/:testId/:sessionId
 */
router.get('/admin/session/:userId/:testId/:sessionId',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  adminSessionDetail
);

/**
 * Generate comprehensive test report
 * GET /api/proctor/admin/report/:testId
 * Query params: startDate, endDate
 */
router.get('/admin/report/:testId',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  adminTestReport
);

/**
 * Get user's test history
 * GET /api/proctor/admin/user/:userId/history
 * Query params: limit, skip
 */
router.get('/admin/user/:userId/history',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  adminUserTestHistory
);

/**
 * List interrupted/resumable sessions
 * GET /api/proctor/admin/interrupted-sessions
 */
router.get('/admin/interrupted-sessions',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  adminListInterruptedSessions
);

/**
 * Generate resume link for a user
 * POST /api/proctor/admin/generate-resume-link
 */
router.post('/admin/generate-resume-link',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  validateRequest(adminGenerateResumeLinkSchema),
  adminGenerateResumeLink
);

/**
 * Revoke resume access
 * POST /api/proctor/admin/revoke-resume
 */
router.post('/admin/revoke-resume',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  validateRequest(adminRevokeResumeSchema),
  adminRevokeResume
);

export default router;
