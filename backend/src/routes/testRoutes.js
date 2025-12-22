import express from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { generateTestId, getUserTestIds } from '../controllers/testController.js';

const router = express.Router();

/**
 * Generate a unique 6-digit test ID
 * POST /api/test/generate-id
 */
router.post('/generate-id', authMiddleware, generateTestId);

/**
 * Get user's test ID history
 * GET /api/test/my-test-ids
 */
router.get('/my-test-ids', authMiddleware, getUserTestIds);

export default router;
