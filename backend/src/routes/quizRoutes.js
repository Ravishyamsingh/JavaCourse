import express from 'express';
import {
  generateModuleQuiz,
  generateMixedQuizHandler,
  generateAdaptiveQuizHandler,
  generateExamHandler,
  getModulesHandler,
  submitQuizHandler
} from '../controllers/quizController.js';
import { authMiddleware } from '../middleware/auth.js';
import { validateRequest } from '../utils/validation.js';
import Joi from 'joi';

const router = express.Router();

/**
 * Validation schemas
 */
const generateModuleQuizSchema = Joi.object({
  module: Joi.string().required().min(1).max(100),
  count: Joi.number().integer().min(1).max(50).default(10),
  difficulty: Joi.string().valid('easy', 'medium', 'hard', 'mixed').default('mixed')
});

const generateMixedQuizSchema = Joi.object({
  modules: Joi.array().items(Joi.string()).min(1).required(),
  count: Joi.number().integer().min(1).max(100).default(20),
  difficulty: Joi.string().valid('easy', 'medium', 'hard', 'mixed').default('mixed')
});

const generateAdaptiveQuizSchema = Joi.object({
  performance: Joi.object().optional(),
  count: Joi.number().integer().min(1).max(50).default(15)
});

const generateExamSchema = Joi.object({
  modules: Joi.array().items(Joi.string()).optional(),
  count: Joi.number().integer().min(10).max(200).default(50)
});

const submitQuizSchema = Joi.object({
  quizId: Joi.string().required(),
  answers: Joi.array().items(
    Joi.object({
      questionId: Joi.string().required(),
      selected: Joi.number().required(),
      correctAnswer: Joi.number().required()
    })
  ).required()
});

/**
 * Generate quiz for a specific module
 * POST /api/quiz/generate-module
 * Body: { module, count?, difficulty? }
 */
router.post(
  '/generate-module',
  authMiddleware,
  validateRequest(generateModuleQuizSchema),
  generateModuleQuiz
);

/**
 * Generate mixed quiz from multiple modules
 * POST /api/quiz/generate-mixed
 * Body: { modules[], count?, difficulty? }
 */
router.post(
  '/generate-mixed',
  authMiddleware,
  validateRequest(generateMixedQuizSchema),
  generateMixedQuizHandler
);

/**
 * Generate adaptive quiz based on user performance
 * POST /api/quiz/generate-adaptive
 * Body: { performance?, count? }
 */
router.post(
  '/generate-adaptive',
  authMiddleware,
  validateRequest(generateAdaptiveQuizSchema),
  generateAdaptiveQuizHandler
);

/**
 * Generate practice exam
 * POST /api/quiz/generate-exam
 * Body: { modules?, count? }
 */
router.post(
  '/generate-exam',
  authMiddleware,
  validateRequest(generateExamSchema),
  generateExamHandler
);

/**
 * Get available modules
 * GET /api/quiz/modules
 */
router.get(
  '/modules',
  authMiddleware,
  getModulesHandler
);

/**
 * Submit quiz answers and get score
 * POST /api/quiz/submit
 * Body: { quizId, answers[] }
 */
router.post(
  '/submit',
  authMiddleware,
  validateRequest(submitQuizSchema),
  submitQuizHandler
);

export default router;
