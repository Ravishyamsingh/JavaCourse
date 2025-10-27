import { User } from "../models.js";
import { Token } from "../models/Token.js";
import { tokenManager } from "../utils/tokenManager.js";
import passport from "../config/passport.js";
import { hasRole, hasPermission } from "../middleware/rbac.js";

// Token refresh endpoint
export const refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(400).json({
        success: false,
        message: "Refresh token is required",
        code: 'MISSING_REFRESH_TOKEN'
      });
    }

    const tokens = await tokenManager.refreshTokenPair(refreshToken, req);

    res.json({
      success: true,
      message: "Tokens refreshed successfully",
      ...tokens
    });
  } catch (error) {
    console.error('❌ Token refresh error:', error);
    res.status(401).json({
      success: false,
      message: error.message || "Failed to refresh token",
      code: 'REFRESH_FAILED'
    });
  }
};

// Logout endpoint
export const logout = async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    const { refreshToken } = req.body;

    if (token) {
      await tokenManager.revokeToken(token, 'user_logout');
    }

    if (refreshToken) {
      await tokenManager.revokeToken(refreshToken, 'user_logout');
    }

    res.json({
      success: true,
      message: "Logged out successfully"
    });
  } catch (error) {
    console.error('❌ Logout error:', error);
    res.status(500).json({
      success: false,
      message: "Logout failed"
    });
  }
};

// Logout from all devices
export const logoutAll = async (req, res) => {
  try {
    const userId = req.user._id;
    await tokenManager.revokeAllUserTokens(userId, 'user_logout_all');

    res.json({
      success: true,
      message: "Logged out from all devices successfully"
    });
  } catch (error) {
    console.error('❌ Logout all error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to logout from all devices"
    });
  }
};

// Get user sessions
export const getUserSessions = async (req, res) => {
  try {
    const userId = req.user._id;
    const sessions = await tokenManager.getUserActiveSessions(userId);

    res.json({
      success: true,
      sessions: sessions.map(session => ({
        id: session._id,
        ipAddress: session.ipAddress,
        userAgent: session.userAgent,
        lastUsed: session.lastUsed,
        createdAt: session.createdAt,
        provider: session.provider,
        isCurrent: session.ipAddress === req.ip
      }))
    });
  } catch (error) {
    console.error('❌ Get sessions error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to retrieve sessions"
    });
  }
};

// Revoke specific session
export const revokeSession = async (req, res) => {
  try {
    const { sessionId } = req.params;
    const userId = req.user._id;

    const session = await Token.findOne({
      _id: sessionId,
      userId,
      isRevoked: false
    });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found"
      });
    }

    await session.revoke('user_revoke_session');

    res.json({
      success: true,
      message: "Session revoked successfully"
    });
  } catch (error) {
    console.error('❌ Revoke session error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to revoke session"
    });
  }
};

// Validate token endpoint
export const validateToken = async (req, res) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    const decoded = await tokenManager.verifyAccessToken(token);
    const user = await User.findById(decoded._id).select('-password');

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    res.json({
      success: true,
      valid: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        provider: user.provider,
        isEmailVerified: user.isEmailVerified
      }
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      valid: false,
      message: error.message || "Invalid token"
    });
  }
};

// Change password
export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    if (user.provider === 'google' && !user.password) {
      return res.status(400).json({
        success: false,
        message: "Cannot change password for Google OAuth users"
      });
    }

    const isValidPassword = await comparePassword(currentPassword, user.password);
    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect"
      });
    }

    const hashedNewPassword = await hashPassword(newPassword);
    user.password = hashedNewPassword;
    await user.save();

    // Revoke all existing tokens for security
    await tokenManager.revokeAllUserTokens(userId, 'password_change');

    res.json({
      success: true,
      message: "Password changed successfully. Please login again."
    });
  } catch (error) {
    console.error('❌ Change password error:', error);
    res.status(500).json({
      success: false,
      message: "Failed to change password"
    });
  }
};

// Google OAuth Controllers

/**
 * Initiate Google OAuth authentication
 * GET /api/auth/google
 */
export const googleAuth = (req, res, next) => {
  console.log('🔐 Initiating Google OAuth authentication');

  // Store additional state if needed
  const state = req.query.state || 'login';
  req.session = req.session || {};
  req.session.oauthState = state;

  passport.authenticate('google', {
    scope: ['profile', 'email'],
    state: state
  })(req, res, next);
};

/**
 * Google OAuth callback handler
 * GET /api/auth/google/callback
 */
export const googleAuthCallback = (req, res, next) => {
  console.log('🔐 Processing Google OAuth callback');

  passport.authenticate('google', { session: false }, async (err, user, info) => {
    try {
      if (err) {
        console.error('❌ Google OAuth authentication error:', err);
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=oauth_error`);
      }

      if (!user) {
        console.log('⚠️  Google OAuth authentication failed:', info?.message);
        const errorCode = info?.code || 'oauth_failed';
        return res.redirect(`${process.env.FRONTEND_URL}/login?error=${errorCode}`);
      }

      // Generate tokens for the authenticated user
      const tokens = await tokenManager.createTokenPair(user._id, 'google', [], {
        ip: req.ip,
        get: (header) => req.get(header)
      });

      // Update user's last login
      await User.findByIdAndUpdate(user._id, {
        lastLogin: new Date(),
        $inc: { loginAttempts: 0 } // Reset login attempts on successful login
      });

      console.log('✅ Google OAuth successful for user:', user.email);

      // Redirect to frontend with secure cookies
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
      const redirectUrl = new URL('/auth/callback', frontendUrl);

      const userPayload = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        provider: user.provider
      };

      // Set secure HTTP-only cookies for tokens
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000, // 15 minutes for access token
        domain: process.env.NODE_ENV === 'production' ? '.your-domain.com' : undefined
      };

      const refreshCookieOptions = {
        ...cookieOptions,
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days for refresh token
      };

      // Set cookies
      res.cookie('accessToken', tokens.accessToken, cookieOptions);
      res.cookie('refreshToken', tokens.refreshToken, refreshCookieOptions);
      
      // Set user data in a separate cookie (non-sensitive data only)
      res.cookie('userData', JSON.stringify(userPayload), {
        ...cookieOptions,
        httpOnly: false, // Allow frontend to read user data
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      });

      // Add success parameter to URL instead of tokens
      redirectUrl.searchParams.set('auth', 'success');
      redirectUrl.searchParams.set('provider', 'google');
      redirectUrl.searchParams.set('accessToken', tokens.accessToken);
      redirectUrl.searchParams.set('refreshToken', tokens.refreshToken);
      redirectUrl.searchParams.set('user', JSON.stringify(userPayload));

      res.redirect(redirectUrl.toString());
    } catch (error) {
      console.error('❌ Google OAuth callback error:', error);
      res.redirect(`${process.env.FRONTEND_URL}/login?error=server_error`);
    }
  })(req, res, next);
};

/**
 * Get current authenticated user profile
 * GET /api/auth/me
 */
export const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated',
        code: 'NOT_AUTHENTICATED'
      });
    }

    // Get fresh user data from database
    const freshUser = await User.findById(user._id)
      .select('-password -security.passwordResetToken -security.passwordResetExpires -security.emailVerificationToken -security.emailVerificationExpires')
      .lean();

    if (!freshUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    res.json({
      success: true,
      user: {
        id: freshUser._id,
        firstName: freshUser.firstName,
        lastName: freshUser.lastName,
        email: freshUser.email,
        avatar: freshUser.avatar,
        role: freshUser.role,
        provider: freshUser.provider,
        isEmailVerified: freshUser.isEmailVerified,
        isActive: freshUser.isActive,
        lastLogin: freshUser.lastLogin,
        profile: freshUser.profile,
        preferences: freshUser.preferences,
        progress: freshUser.progress,
        createdAt: freshUser.createdAt,
        updatedAt: freshUser.updatedAt
      }
    });
  } catch (error) {
    console.error('❌ Get current user error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get user profile',
      code: 'GET_USER_FAILED'
    });
  }
};

/**
 * Update user profile
 * PUT /api/auth/profile
 */
export const updateProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const updates = req.body;

    // Fields that can be updated
    const allowedFields = [
      'firstName', 'lastName', 'avatar',
      'profile.bio', 'profile.phone', 'profile.dateOfBirth', 'profile.gender',
      'profile.location', 'profile.socialLinks',
      'preferences.theme', 'preferences.notifications', 'preferences.language', 'preferences.privacy'
    ];

    // Validate updates (simplified validation)
    const validatedUpdates = {};
    Object.keys(updates).forEach(key => {
      if (allowedFields.includes(key) || key.startsWith('profile.') || key.startsWith('preferences.')) {
        validatedUpdates[key] = updates[key];
      }
    });

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { ...validatedUpdates, updatedAt: new Date() },
      { new: true, runValidators: true }
    ).select('-password -security');

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user: {
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        avatar: updatedUser.avatar,
        role: updatedUser.role,
        profile: updatedUser.profile,
        preferences: updatedUser.preferences,
        updatedAt: updatedUser.updatedAt
      }
    });
  } catch (error) {
    console.error('❌ Update profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
      code: 'UPDATE_PROFILE_FAILED'
    });
  }
};

/**
 * Get user permissions and capabilities
 * GET /api/auth/permissions
 */
export const getUserPermissions = async (req, res) => {
  try {
    const user = req.user;

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated',
        code: 'NOT_AUTHENTICATED'
      });
    }

    // Get user permissions based on role
    const permissions = {
      role: user.role,
      canCreateCourses: hasPermission(user.role, 'courses', 'create', user.adminData?.permissions),
      canManageUsers: hasPermission(user.role, 'users', 'manage', user.adminData?.permissions),
      canViewAnalytics: hasPermission(user.role, 'analytics', 'read', user.adminData?.permissions),
      canManageMedia: hasPermission(user.role, 'media', 'create', user.adminData?.permissions),
      canGradeAssignments: hasPermission(user.role, 'assignments', 'grade', user.adminData?.permissions),
      isAdmin: hasRole(user.role, 'admin'),
      isSuperAdmin: hasRole(user.role, 'superadmin'),
      customPermissions: user.adminData?.permissions || []
    };

    res.json({
      success: true,
      permissions
    });
  } catch (error) {
    console.error('❌ Get permissions error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get permissions',
      code: 'GET_PERMISSIONS_FAILED'
    });
  }
};

/**
 * Admin: Get all users (paginated)
 * GET /api/auth/users
 */
export const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const search = req.query.search || '';
    const role = req.query.role || '';
    const status = req.query.status || '';

    // Build query
    const query = {};
    if (search) {
      query.$or = [
        { firstName: new RegExp(search, 'i') },
        { lastName: new RegExp(search, 'i') },
        { email: new RegExp(search, 'i') }
      ];
    }
    if (role) query.role = role;
    if (status === 'active') query.isActive = true;
    if (status === 'inactive') query.isActive = false;

    const users = await User.find(query)
      .select('-password -security')
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit)
      .lean();

    const total = await User.countDocuments(query);

    res.json({
      success: true,
      users: users.map(user => ({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        provider: user.provider,
        isActive: user.isActive,
        isEmailVerified: user.isEmailVerified,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt
      })),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('❌ Get all users error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get users',
      code: 'GET_USERS_FAILED'
    });
  }
};

/**
 * Admin: Update user role
 * PUT /api/auth/users/:userId/role
 */
export const updateUserRole = async (req, res) => {
  try {
    const { userId } = req.params;
    const { role } = req.body;

    // Validate role
    const validRoles = ['guest', 'user', 'admin', 'superadmin'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role',
        code: 'INVALID_ROLE'
      });
    }

    // Prevent self-demotion for super admins
    if (userId === req.user._id && req.user.role === 'superadmin' && role !== 'superadmin') {
      return res.status(400).json({
        success: false,
        message: 'Cannot change your own superadmin role',
        code: 'CANNOT_DEMOTE_SELF'
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        role,
        updatedAt: new Date(),
        'adminData.lastActivity': new Date()
      },
      { new: true }
    ).select('-password -security');

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        code: 'USER_NOT_FOUND'
      });
    }

    // Log admin action
    console.log(`🔐 Admin Action: ${req.user.email} changed ${updatedUser.email}'s role to ${role}`);

    res.json({
      success: true,
      message: 'User role updated successfully',
      user: {
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        role: updatedUser.role
      }
    });
  } catch (error) {
    console.error('❌ Update user role error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update user role',
      code: 'UPDATE_ROLE_FAILED'
    });
  }
};