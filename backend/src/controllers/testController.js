import crypto from 'crypto';
import { ProctorSession } from '../models/ProctorModels.js';

/**
 * Generate a unique 6-digit test ID for a user
 * POST /api/test/generate-id
 * Body: { email }
 */
export const generateTestId = async (req, res, next) => {
  try {
    const userEmail = req.user?.email || req.body?.email;
    
    if (!userEmail) {
      return res.status(400).json({
        success: false,
        message: 'User email is required',
        code: 'MISSING_EMAIL'
      });
    }

    // Generate deterministic but unique 6-digit ID based on email + timestamp
    const timestamp = Date.now();
    const hash = crypto
      .createHash('sha256')
      .update(`${userEmail}-${timestamp}`)
      .digest('hex');
    
    // Extract first 6 hex chars and convert to decimal, then mod to get 6 digits
    const hexSegment = hash.substring(0, 8);
    const numericId = parseInt(hexSegment, 16) % 900000 + 100000; // ensures 6 digits (100000-999999)
    
    const testId = numericId.toString();

    // Optional: Store test ID assignment in database for tracking
    // (Not creating session yet, just reserving the ID)
    
    res.json({
      success: true,
      message: 'Test ID generated successfully',
      testId,
      email: userEmail,
      generatedAt: new Date().toISOString()
    });
  } catch (err) {
    next(err);
  }
};

/**
 * Get user's test IDs history
 * GET /api/test/my-test-ids
 */
export const getUserTestIds = async (req, res, next) => {
  try {
    // Find all unique test IDs for this user from their sessions
    const sessions = await ProctorSession.find({ userId: req.user._id })
      .select('testId startedAt status')
      .sort({ startedAt: -1 })
      .limit(20);

    const testIds = sessions.map(s => ({
      testId: s.testId,
      startedAt: s.startedAt,
      status: s.status
    }));

    res.json({
      success: true,
      message: 'Test IDs retrieved',
      testIds
    });
  } catch (err) {
    next(err);
  }
};
