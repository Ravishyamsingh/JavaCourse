import { User } from '../models.js';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { ADMIN_BACKEND_CONFIG, getErrorMessage, getSuccessMessage, isValidRole, isValidEmail, isValidPassword } from '../config/adminConfig.js';

const USER_ROLES = ADMIN_BACKEND_CONFIG.USER_ROLES;

export const adminGetAllUsers = async (req, res, next) => {
  try {
    const { role, status, search, page = 1, limit = 20, sortBy = 'createdAt', sortOrder = -1 } = req.query;

    const query = {};
    
    if (role && Object.values(USER_ROLES).includes(role)) {
      query.role = role;
    }

    if (status === 'active') {
      query.isActive = true;
    } else if (status === 'inactive') {
      query.isActive = false;
    }

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sort = { [sortBy]: parseInt(sortOrder) };

    const [users, total] = await Promise.all([
      User.find(query)
        .select('-password -security.twoFactorSecret -security.backupCodes')
        .sort(sort)
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
    next(error);
  }
};

export const adminGetUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId)
      .select('-password -security.twoFactorSecret -security.backupCodes')
      .lean();

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
    next(error);
  }
};

export const adminCreateUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password, role = USER_ROLES.USER } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields'
      });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.toLowerCase().trim(),
      password: hashedPassword,
      role,
      provider: 'local',
      isEmailVerified: true,
      isActive: true
    });

    await newUser.save();

    const userResponse = newUser.toObject();
    delete userResponse.password;
    delete userResponse.security;

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: userResponse
    });
  } catch (error) {
    next(error);
  }
};

export const adminUpdateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { firstName, lastName, email, role, isActive } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (email && email !== user.email) {
      const existingUser = await User.findOne({ email: email.toLowerCase() });
      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'Email already exists'
        });
      }
      user.email = email.toLowerCase().trim();
    }

    if (firstName) user.firstName = firstName.trim();
    if (lastName) user.lastName = lastName.trim();
    if (role && Object.values(USER_ROLES).includes(role)) user.role = role;
    if (typeof isActive === 'boolean') user.isActive = isActive;

    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;
    delete userResponse.security;

    res.json({
      success: true,
      message: 'User updated successfully',
      data: userResponse
    });
  } catch (error) {
    next(error);
  }
};

export const adminDeleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    if (userId === req.user._id.toString()) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete your own account'
      });
    }

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const adminResetUserPassword = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { newPassword } = req.body;

    if (!newPassword || newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters'
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.security.passwordResetToken = undefined;
    user.security.passwordResetExpires = undefined;

    await user.save();

    res.json({
      success: true,
      message: 'Password reset successfully'
    });
  } catch (error) {
    next(error);
  }
};

export const adminUpdateUserRole = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { role, permissions } = req.body;

    console.log('🔄 Role change request:', { userId, role, currentUser: req.user._id });

    // Validate role
    if (!role || !Object.values(USER_ROLES).includes(role)) {
      console.error('❌ Invalid role:', role);
      return res.status(400).json({
        success: false,
        message: 'Invalid role. Must be one of: user, admin, superadmin'
      });
    }

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      console.error('❌ User not found:', userId);
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    console.log('✅ User found:', { userId, currentRole: user.role });

    // Prevent self-demotion from superadmin
    if (req.user.role === 'superadmin' && req.user._id.toString() === userId && role !== 'superadmin') {
      console.error('❌ Cannot demote self from superadmin');
      return res.status(400).json({
        success: false,
        message: 'Cannot demote yourself from superadmin role'
      });
    }

    // Update role
    const oldRole = user.role;
    user.role = role;

    console.log('🔄 Updating role:', { oldRole, newRole: role });

    // Update permissions if provided
    if (permissions && Array.isArray(permissions)) {
      user.adminData = user.adminData || {};
      user.adminData.permissions = permissions;
      console.log('✅ Permissions updated:', permissions);
    }

    // Log the change
    user.adminData = user.adminData || {};
    user.adminData.lastRoleChange = {
      changedBy: req.user._id,
      changedAt: new Date(),
      oldRole,
      newRole: role
    };

    await user.save();

    console.log('✅ Role updated successfully:', { userId, oldRole, newRole: role });

    const userResponse = user.toObject();
    delete userResponse.password;
    delete userResponse.security;

    res.json({
      success: true,
      message: `User role updated from ${oldRole} to ${role} successfully`,
      data: userResponse
    });
  } catch (error) {
    console.error('❌ Error updating user role:', error);
    next(error);
  }
};

export const adminGetUserProgress = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId)
      .select('firstName lastName email progress')
      .lean();

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const progressData = {
      user: {
        id: user._id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email
      },
      progress: user.progress || {},
      stats: {
        completedLessons: user.progress?.completedLessons?.length || 0,
        completedQuizzes: user.progress?.completedQuizzes?.length || 0,
        totalScore: user.progress?.totalScore || 0,
        studyStreak: user.progress?.studyStreak || 0,
        totalStudyTime: user.progress?.totalStudyTime || 0,
        certificatesEarned: user.progress?.certificatesEarned?.length || 0
      }
    };

    res.json({
      success: true,
      data: progressData
    });
  } catch (error) {
    next(error);
  }
};

export const adminGetDashboardStats = async (req, res, next) => {
  try {
    // Calculate start of current month
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    const [totalUsers, activeUsers, adminUsers, usersByRole, recentUsers, newUsersThisMonth] = await Promise.all([
      User.countDocuments(),
      User.countDocuments({ isActive: true }),
      User.countDocuments({ role: { $in: [USER_ROLES.ADMIN, USER_ROLES.SUPER_ADMIN] } }),
      User.aggregate([
        { $group: { _id: '$role', count: { $sum: 1 } } }
      ]),
      User.find()
        .select('firstName lastName email role createdAt')
        .sort({ createdAt: -1 })
        .limit(10)
        .lean(),
      User.countDocuments({ createdAt: { $gte: startOfMonth } })
    ]);

    const roleDistribution = {};
    usersByRole.forEach(item => {
      roleDistribution[item._id] = item.count;
    });

    res.json({
      success: true,
      data: {
        totalUsers,
        activeUsers,
        inactiveUsers: totalUsers - activeUsers,
        adminUsers,
        roleDistribution,
        recentUsers,
        newUsersThisMonth,
        // Additional monitoring stats
        totalRequests: 0, // Would come from logging system
        errorRate: 0, // Would come from error tracking
        sessionsChange: 0 // Would come from session tracking
      }
    });
  } catch (error) {
    next(error);
  }
};

export const adminBulkUpdateUsers = async (req, res, next) => {
  try {
    const { userIds, updates } = req.body;

    if (!Array.isArray(userIds) || userIds.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user IDs'
      });
    }

    const result = await User.updateMany(
      { _id: { $in: userIds } },
      { $set: updates },
      { multi: true }
    );

    res.json({
      success: true,
      message: `Updated ${result.modifiedCount} users`,
      data: {
        matched: result.matchedCount,
        modified: result.modifiedCount
      }
    });
  } catch (error) {
    next(error);
  }
};

export const adminExportUsers = async (req, res, next) => {
  try {
    const { format = 'json', role, status } = req.query;

    const query = {};
    if (role && Object.values(USER_ROLES).includes(role)) {
      query.role = role;
    }
    if (status === 'active') {
      query.isActive = true;
    } else if (status === 'inactive') {
      query.isActive = false;
    }

    const users = await User.find(query)
      .select('firstName lastName email role isActive createdAt lastLogin')
      .lean();

    if (format === 'csv') {
      const csv = convertToCSV(users);
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="users.csv"');
      res.send(csv);
    } else {
      res.json({
        success: true,
        data: users
      });
    }
  } catch (error) {
    next(error);
  }
};

function convertToCSV(data) {
  if (!data || data.length === 0) return '';

  const headers = Object.keys(data[0]);
  const csv = [headers.join(',')];

  data.forEach(row => {
    const values = headers.map(header => {
      const value = row[header];
      if (value === null || value === undefined) return '';
      if (typeof value === 'string' && value.includes(',')) {
        return `"${value}"`;
      }
      return value;
    });
    csv.push(values.join(','));
  });

  return csv.join('\n');
}

export const adminGetSystemLogs = async (req, res, next) => {
  try {
    const { page = 1, limit = 50, action, resource } = req.query;

    const skip = (parseInt(page) - 1) * parseInt(limit);

    const query = {};
    if (action) query['adminData.systemLogs.action'] = action;
    if (resource) query['adminData.systemLogs.resource'] = resource;

    const users = await User.find(query)
      .select('adminData.systemLogs')
      .skip(skip)
      .limit(parseInt(limit))
      .lean();

    const logs = [];
    users.forEach(user => {
      if (user.adminData && user.adminData.systemLogs) {
        logs.push(...user.adminData.systemLogs);
      }
    });

    res.json({
      success: true,
      data: logs.sort((a, b) => b.timestamp - a.timestamp),
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit)
      }
    });
  } catch (error) {
    next(error);
  }
};

export const adminGrantPermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { permissions } = req.body;

    if (!Array.isArray(permissions) || permissions.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Permissions array is required'
      });
    }

    // Validate permission structure
    const validPermissions = permissions.every(perm =>
      perm.resource && Array.isArray(perm.actions) && perm.actions.length > 0
    );

    if (!validPermissions) {
      return res.status(400).json({
        success: false,
        message: 'Invalid permission structure. Each permission must have resource and actions array'
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (!user.adminData) user.adminData = {};
    user.adminData.permissions = permissions;
    user.adminData.lastActivity = new Date();

    await user.save();

    const userResponse = user.toObject();
    delete userResponse.password;

    res.json({
      success: true,
      message: 'Permissions granted successfully',
      data: userResponse
    });
  } catch (error) {
    next(error);
  }
};

export const adminRevokePermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { resources } = req.body;

    if (!Array.isArray(resources) || resources.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Resources array is required'
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (user.adminData && user.adminData.permissions) {
      user.adminData.permissions = user.adminData.permissions.filter(
        perm => !resources.includes(perm.resource)
      );
      user.adminData.lastActivity = new Date();
      await user.save();
    }

    const userResponse = user.toObject();
    delete userResponse.password;

    res.json({
      success: true,
      message: 'Permissions revoked successfully',
      data: userResponse
    });
  } catch (error) {
    next(error);
  }
};

export const adminGetUserPermissions = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId)
      .select('role adminData.permissions')
      .lean();

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
        permissions: user.adminData?.permissions || [],
        hasCustomPermissions: !!(user.adminData?.permissions && user.adminData.permissions.length > 0)
      }
    });
  } catch (error) {
    next(error);
  }
};
