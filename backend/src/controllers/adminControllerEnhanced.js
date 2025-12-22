import { User } from '../models/User.js';
import { AuditLog, AdminRole, AdminPermission } from '../models/AdminModels.js';
import { logger } from '../utils/monitoring.js';
import bcrypt from 'bcryptjs';

/**
 * Get all users with pagination and filtering
 */
export const adminGetAllUsers = async (req, res, next) => {
  try {
    const { page = 1, limit = 20, role, status, search } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const query = {};
    if (role && role !== 'all') query.role = role;
    if (status === 'active') query.isActive = true;
    if (status === 'inactive') query.isActive = false;
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const [users, total] = await Promise.all([
      User.find(query)
        .select('-password')
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      User.countDocuments(query)
    ]);

    res.json({
      success: true,
      data: users,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching users:', error);
    next(error);
  }
};

/**
 * Get user by ID
 */
export const adminGetUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select('-password').lean();
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    logger.error('Error fetching user:', error);
    next(error);
  }
};

/**
 * Create new user
 */
export const adminCreateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role = 'user' } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
      isActive: true
    });

    await user.save();

    logger.info('User created by admin', { userId: user._id, createdBy: req.user._id });

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: user
    });
  } catch (error) {
    logger.error('Error creating user:', error);
    next(error);
  }
};

/**
 * Update user
 */
export const adminUpdateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { firstName, lastName, email, isActive } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (typeof isActive === 'boolean') user.isActive = isActive;

    await user.save();

    logger.info('User updated by admin', { userId, updatedBy: req.user._id });

    res.json({
      success: true,
      message: 'User updated successfully',
      data: user
    });
  } catch (error) {
    logger.error('Error updating user:', error);
    next(error);
  }
};

/**
 * Delete user
 */
export const adminDeleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    logger.info('User deleted by admin', { userId, deletedBy: req.user._id });

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    logger.error('Error deleting user:', error);
    next(error);
  }
};

/**
 * Reset user password
 */
export const adminResetUserPassword = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { newPassword } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    logger.info('User password reset by admin', { userId, resetBy: req.user._id });

    res.json({
      success: true,
      message: 'Password reset successfully'
    });
  } catch (error) {
    logger.error('Error resetting password:', error);
    next(error);
  }
};

/**
 * Update user role
 */
export const adminUpdateUserRole = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { role, permissions } = req.body;

    // Validate role
    const validRoles = ['user', 'admin', 'superadmin'];
    if (!validRoles.includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role'
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    user.role = role;
    if (permissions) user.permissions = permissions;

    await user.save();

    logger.info('User role updated by admin', { userId, newRole: role, updatedBy: req.user._id });

    res.json({
      success: true,
      message: 'Role updated successfully',
      data: user
    });
  } catch (error) {
    logger.error('Error updating user role:', error);
    next(error);
  }
};

/**
 * Get user progress
 */
export const adminGetUserProgress = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).lean();
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Mock progress data - would come from actual progress tracking
    const progress = {
      lessonsCompleted: 15,
      quizzesAttempted: 8,
      quizzesPass: 6,
      averageScore: 78,
      certificatesEarned: 2,
      studyStreak: 5,
      totalStudyTime: 120, // hours
      lastActive: new Date()
    };

    res.json({
      success: true,
      data: progress
    });
  } catch (error) {
    logger.error('Error fetching user progress:', error);
    next(error);
  }
};

/**
 * Get dashboard statistics
 */
export const adminGetDashboardStats = async (req, res, next) => {
  try {
    const totalUsers = await User.countDocuments();
    const activeUsers = await User.countDocuments({ isActive: true });
    const adminUsers = await User.countDocuments({ role: { $in: ['admin', 'superadmin'] } });
    
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const newUsersThisMonth = await User.countDocuments({ createdAt: { $gte: thirtyDaysAgo } });

    const recentUsers = await User.find()
      .select('-password')
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    res.json({
      success: true,
      data: {
        totalUsers,
        activeUsers,
        adminUsers,
        newUsersThisMonth,
        recentUsers
      }
    });
  } catch (error) {
    logger.error('Error fetching dashboard stats:', error);
    next(error);
  }
};

/**
 * Bulk update users
 */
export const adminBulkUpdateUsers = async (req, res, next) => {
  try {
    const { userIds, updates } = req.body;

    if (!Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'User IDs array is required'
      });
    }

    const result = await User.updateMany(
      { _id: { $in: userIds } },
      { $set: updates }
    );

    logger.info('Bulk user update by admin', { count: result.modifiedCount, updatedBy: req.user._id });

    res.json({
      success: true,
      message: `Updated ${result.modifiedCount} users`,
      data: result
    });
  } catch (error) {
    logger.error('Error bulk updating users:', error);
    next(error);
  }
};

/**
 * Export users as CSV
 */
export const adminExportUsers = async (req, res, next) => {
  try {
    const { format = 'csv' } = req.query;

    const users = await User.find().select('-password').lean();

    if (format === 'csv') {
      const headers = ['ID', 'First Name', 'Last Name', 'Email', 'Role', 'Status', 'Created At', 'Last Login'];
      const rows = users.map(u => [
        u._id,
        u.firstName,
        u.lastName,
        u.email,
        u.role,
        u.isActive ? 'Active' : 'Inactive',
        new Date(u.createdAt).toISOString(),
        u.lastLogin ? new Date(u.lastLogin).toISOString() : 'Never'
      ]);

      const csv = [headers, ...rows].map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');

      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="users-${Date.now()}.csv"`);
      return res.send(csv);
    }

    res.json({
      success: true,
      data: users,
      count: users.length
    });
  } catch (error) {
    logger.error('Error exporting users:', error);
    next(error);
  }
};

/**
 * Get system logs
 */
export const adminGetSystemLogs = async (req, res, next) => {
  try {
    const { page = 1, limit = 50 } = req.query;
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [logs, total] = await Promise.all([
      AuditLog.find()
        .populate('userId', 'firstName lastName email')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit))
        .lean(),
      AuditLog.countDocuments()
    ]);

    res.json({
      success: true,
      data: logs,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    logger.error('Error fetching system logs:', error);
    next(error);
  }
};

/**
 * Grant permissions to user
 */
export const adminGrantPermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { permissions } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (!user.permissions) user.permissions = [];
    user.permissions = [...new Set([...user.permissions, ...permissions])];

    await user.save();

    logger.info('Permissions granted to user', { userId, grantedBy: req.user._id });

    res.json({
      success: true,
      message: 'Permissions granted successfully',
      data: user.permissions
    });
  } catch (error) {
    logger.error('Error granting permissions:', error);
    next(error);
  }
};

/**
 * Revoke permissions from user
 */
export const adminRevokePermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { permissions } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (user.permissions) {
      user.permissions = user.permissions.filter(p => !permissions.includes(p));
    }

    await user.save();

    logger.info('Permissions revoked from user', { userId, revokedBy: req.user._id });

    res.json({
      success: true,
      message: 'Permissions revoked successfully',
      data: user.permissions
    });
  } catch (error) {
    logger.error('Error revoking permissions:', error);
    next(error);
  }
};

/**
 * Get user permissions
 */
export const adminGetUserPermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).lean();
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      data: {
        userId,
        role: user.role,
        permissions: user.permissions || []
      }
    });
  } catch (error) {
    logger.error('Error fetching user permissions:', error);
    next(error);
  }
};
