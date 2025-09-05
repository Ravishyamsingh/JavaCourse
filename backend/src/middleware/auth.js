import { tokenManager } from "../utils/tokenManager.js";
import { User } from "../models.js";

export const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '') || req.header('x-auth-token');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.',
        code: 'NO_TOKEN'
      });
    }

    // Use secure tokenManager for verification
    const decoded = await tokenManager.verifyAccessToken(token);
    
    // Get fresh user data from database
    const user = await User.findById(decoded._id)
      .select('-password -security.passwordResetToken -security.passwordResetExpires')
      .lean();

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found.',
        code: 'USER_NOT_FOUND'
      });
    }

    // Check if account is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated.',
        code: 'ACCOUNT_DEACTIVATED'
      });
    }

    // Check if account is locked
    if (user.lockUntil && user.lockUntil > Date.now()) {
      return res.status(401).json({
        success: false,
        message: 'Account is temporarily locked.',
        code: 'ACCOUNT_LOCKED'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('❌ Auth middleware error:', error);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.',
      code: 'INVALID_TOKEN'
    });
  }
};
