import express from "express";
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
import {
  validateRequest,
  signupSchema,
  loginSchema,
  profileUpdateSchema,
  searchQuerySchema,
  roleUpdateSchema
} from "./utils/validation.js";

const router = express.Router();

// Apply general rate limiting to all routes
router.use(generalRateLimit);

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

// Session Management Routes with CSRF protection
router.get("/auth/sessions", authMiddleware, getUserSessions);
router.delete("/auth/sessions/:sessionId",
  authMiddleware,
  csrfProtection,
  requireOwnership('session'),
  revokeSession
);

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

// Health check endpoint
router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Authentication API Server is running",
    timestamp: new Date().toISOString(),
    version: "2.0.0",
    endpoints: {
      signup: "POST /api/auth/signup",
      login: "POST /api/auth/login",
      googleAuth: "POST /api/auth/google",
      profile: "GET /api/auth/profile (protected)",
      dashboard: "GET /api/dashboard (protected)",
      courses: "GET /api/getCourses"
    }
  });
});

export default router;