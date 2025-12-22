import express from "express";
import rateLimit, { ipKeyGenerator } from 'express-rate-limit';
import { User } from "./models.js";
import { signup, login, getProfile, getCourses, googleAuth as legacyGoogleAuth } from "./controllers.js";
import {
  refreshToken,
  logout,
  logoutAll,
  getUserSessions,
  revokeSession,
  validateToken,
  changePassword,
  googleAuth,
  googleAuthCallback,
  getCurrentUser,
  updateProfile,
  getUserPermissions,
  getAllUsers,
  updateUserRole
} from "./controllers/authController.js";
import { authMiddleware } from "./middleware/auth.js";
import {
  authRateLimit,
  googleAuthRateLimit,
  generalRateLimit,
  adminRateLimit,
  resetFailedAttempts,
  incrementFailedAttempts,
  csrfProtection,
  provideCSRFToken
} from "./middleware/security.js";
import {
  requireRole,
  requirePermission,
  authorize,
  requireOwnership,
  requireEnrollment
} from "./middleware/rbac.js";

import { getUserProgress, updateUserProgress } from './controllers/progressController.js';
import { runJavaCompiler } from './controllers/compilerController.js';
import proctorRoutes from './routes/proctorRoutes.js';
import testRoutes from './routes/testRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import passwordRoutes from './routes/passwordRoutes.js';
import quizRoutes from './routes/quizRoutes.js';
import backupRoutes from './routes/backupRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import healthRoutes from './routes/healthRoutes.js';
import {
  downloadUserProgressReport,
  getUserProgressReport,
  downloadAdminUsersReport,
  getAdminUsersReport,
  downloadProctoringReport,
  getProctoringReport
} from './controllers/reportController.js';
import {
  validateRequest,
  signupSchema,
  loginSchema,
  profileUpdateSchema,
  searchQuerySchema,
  roleUpdateSchema,
  progressUpdateSchema
} from "./utils/validation.js";

const router = express.Router();


// Apply general rate limiting to all routes
router.use(generalRateLimit);

// Compiler endpoint
router.post('/compiler/java/run', runJavaCompiler);

// Test ID generation endpoints
router.use('/test', testRoutes);

// Proctoring endpoints
router.use('/proctor', proctorRoutes);

// Admin endpoints
router.use('/admin', adminRoutes);

// Quiz generation endpoints
router.use('/quiz', quizRoutes);

// Backup and recovery endpoints
router.use('/backup', backupRoutes);

// Advanced analytics endpoints
router.use('/analytics', analyticsRoutes);

// Health check endpoints
router.use('/health', healthRoutes);

// Progress endpoints with specific rate limiting (max 30 requests per 15 minutes per user)
const progressRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // limit each user to 30 progress requests per windowMs
  message: {
    success: false,
    message: 'Too many progress updates. Please wait before trying again.',
    retryAfter: 15 * 60
  },
  keyGenerator: (req) => {
    return req.user?._id || ipKeyGenerator(req);
  },
  standardHeaders: true,
  legacyHeaders: false
});

router.get('/user/progress', authMiddleware, progressRateLimit, getUserProgress);
router.post('/user/progress',
  authMiddleware,
  progressRateLimit,
  validateRequest(progressUpdateSchema),
  updateUserProgress
);

// User progress reports
router.get('/reports/progress',
  authMiddleware,
  getUserProgressReport
);

router.get('/reports/progress/download',
  authMiddleware,
  downloadUserProgressReport
);

// Password recovery routes (before CSRF protection)
router.use('/password', passwordRoutes);

// Provide CSRF tokens for all routes
router.use(provideCSRFToken);

// Authentication Routes with enhanced security
router.post("/auth/signup",
  authRateLimit,
  validateRequest(signupSchema),
  async (req, res, next) => {
    try {
      await signup(req, res);
      resetFailedAttempts(req);
    } catch (error) {
      incrementFailedAttempts(req);
      next(error);
    }
  }
);

router.post("/auth/login",
  authRateLimit,
  validateRequest(loginSchema),
  async (req, res, next) => {
    try {
      await login(req, res);
      resetFailedAttempts(req);
    } catch (error) {
      incrementFailedAttempts(req);
      next(error);
    }
  }
);

// Google OAuth Routes (Passport.js implementation)
router.get("/auth/google", googleAuthRateLimit, googleAuth);
router.get("/auth/google/callback", googleAuthCallback);

// Legacy Google OAuth (for backward compatibility with frontend token-based auth)
router.post("/auth/google", googleAuthRateLimit, legacyGoogleAuth);

// Token Management Routes with CSRF protection
router.post("/auth/refresh", authRateLimit, refreshToken);
router.post("/auth/logout", authMiddleware, csrfProtection, logout);
router.post("/auth/logout-all", authMiddleware, csrfProtection, logoutAll);
router.get("/auth/validate", authMiddleware, validateToken);
router.put("/auth/change-password",
  authMiddleware,
  csrfProtection,
  changePassword
);

// User Profile Routes with ownership protection
router.get("/auth/me", authMiddleware, getCurrentUser);
router.put("/auth/profile",
  authMiddleware,
  csrfProtection,
  validateRequest(profileUpdateSchema),
  requireOwnership('profile'),
  updateProfile
);
router.get("/auth/permissions", authMiddleware, getUserPermissions);

// Legacy route (keeping for backward compatibility)
router.get("/auth/profile",
  authMiddleware,
  requireOwnership('profile'),
  getProfile
);

// Admin Routes with enhanced security
router.get("/auth/users",
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  validateRequest(searchQuerySchema, 'query'),
  getAllUsers
);

router.put("/auth/users/:userId/role",
  authMiddleware,
  adminRateLimit,
  csrfProtection,
  authorize({ roles: ['superadmin'] }), // Only superadmin can change roles
  validateRequest(roleUpdateSchema),
  updateUserRole
);

// Admin reporting endpoints
router.get('/reports/admin/users',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  getAdminUsersReport
);

router.get('/reports/admin/users/download',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  downloadAdminUsersReport
);

router.get('/reports/admin/proctoring',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  getProctoringReport
);

router.get('/reports/admin/proctoring/download',
  authMiddleware,
  adminRateLimit,
  authorize({ roles: ['admin', 'superadmin'] }),
  downloadProctoringReport
);

// Session Management Routes with CSRF protection
router.get("/auth/sessions", authMiddleware, getUserSessions);
router.delete("/auth/sessions/:sessionId",
  authMiddleware,
  csrfProtection,
  requireOwnership('session'),
  revokeSession
);

// Session registration endpoint (for concurrent login detection)
router.post("/auth/sessions/register", authMiddleware, async (req, res) => {
  try {
    res.json({
      success: true,
      message: "Session registered successfully",
      sessionId: req.user._id
    });
  } catch (error) {
    console.error('Session registration error:', error);
    res.status(500).json({ success: false, message: "Failed to register session" });
  }
});

// Session check endpoint (for concurrent login detection)
router.get("/auth/sessions/check", authMiddleware, async (req, res) => {
  try {
    // In a full implementation, you would track sessions in a database
    // For now, return current session is valid
    res.json({
      success: true,
      currentSessionValid: true,
      sessions: []
    });
  } catch (error) {
    console.error('Session check error:', error);
    res.status(500).json({ success: false, message: "Failed to check sessions" });
  }
});

// Terminate other sessions endpoint
router.post("/auth/sessions/terminate-others", authMiddleware, async (req, res) => {
  try {
    // In a full implementation, you would invalidate other sessions in database
    res.json({
      success: true,
      message: "Other sessions terminated successfully"
    });
  } catch (error) {
    console.error('Session termination error:', error);
    res.status(500).json({ success: false, message: "Failed to terminate sessions" });
  }
});

// Update session activity endpoint
router.put("/auth/sessions/activity", authMiddleware, async (req, res) => {
  try {
    // In a full implementation, you would update last activity timestamp
    res.json({
      success: true,
      message: "Session activity updated"
    });
  } catch (error) {
    console.error('Session activity update error:', error);
    res.status(500).json({ success: false, message: "Failed to update activity" });
  }
});

// User role status endpoint (for role change detection)
router.get("/auth/user/role-status", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('role isActive');
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.json({
      success: true,
      role: user.role,
      isActive: user.isActive
    });
  } catch (error) {
    console.error('Role status check error:', error);
    res.status(500).json({ success: false, message: "Failed to check role status" });
  }
});

// Course Routes with enrollment checks
router.get("/getCourses", getCourses);

// Protected Dashboard Route
router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to your dashboard!",
    user: {
      id: req.user._id,
      email: req.user.email,
      role: req.user.role
    },
    timestamp: new Date().toISOString()
  });
});

// Course-specific routes with enrollment requirements
router.get("/courses/:courseId/lessons",
  authMiddleware,
  requireEnrollment('course'),
  (req, res) => {
    res.json({
      success: true,
      message: "Course lessons retrieved",
      courseId: req.params.courseId
    });
  }
);

router.get("/courses/:courseId/quizzes",
  authMiddleware,
  requireEnrollment('course'),
  (req, res) => {
    res.json({
      success: true,
      message: "Course quizzes retrieved",
      courseId: req.params.courseId
    });
  }
);

export default router;