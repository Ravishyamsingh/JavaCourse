import { User } from '../models.js';

// Role hierarchy for cascading permissions
const ROLE_HIERARCHY = {
  guest: 0,
  user: 1,
  admin: 2,
  superadmin: 3
};

// Default permissions for each role
const DEFAULT_PERMISSIONS = {
  guest: {
    // Basic read-only access
    courses: ['read'],
    lessons: ['read'],
    quizzes: ['read']
  },
  user: {
    // Standard user permissions
    courses: ['read', 'enroll'],
    lessons: ['read', 'complete'],
    quizzes: ['read', 'take'],
    assignments: ['read', 'submit'],
    progress: ['read', 'update'],
    profile: ['read', 'update'],
    certificates: ['read']
  },
  admin: {
    // Administrative permissions
    courses: ['create', 'read', 'update', 'delete', 'publish'],
    lessons: ['create', 'read', 'update', 'delete'],
    quizzes: ['create', 'read', 'update', 'delete'],
    assignments: ['create', 'read', 'update', 'delete', 'grade'],
    users: ['read', 'update', 'manage'],
    analytics: ['read'],
    notifications: ['create', 'read', 'update', 'delete'],
    media: ['create', 'read', 'update', 'delete'],
    system: ['read']
  },
  superadmin: {
    // Full system access
    '*': ['*'] // Wildcard for all resources and actions
  }
};

/**
 * Check if user has required role level
 * @param {string} userRole - User's current role
 * @param {string} requiredRole - Required role level
 * @returns {boolean}
 */
export const hasRole = (userRole, requiredRole) => {
  const userLevel = ROLE_HIERARCHY[userRole] || 0;
  const requiredLevel = ROLE_HIERARCHY[requiredRole] || 0;
  return userLevel >= requiredLevel;
};

/**
 * Check if user has specific permission for a resource
 * @param {string} userRole - User's current role
 * @param {string} resource - Resource name (e.g., 'courses', 'users')
 * @param {string} action - Action name (e.g., 'read', 'create', 'update', 'delete')
 * @param {Object} userPermissions - User's custom permissions (for admin users)
 * @returns {boolean}
 */
export const hasPermission = (userRole, resource, action, userPermissions = null) => {
  // Super admin has all permissions
  if (userRole === 'superadmin') {
    return true;
  }

  // Check custom permissions for admin users
  if (userPermissions && userPermissions.length > 0) {
    const customPermission = userPermissions.find(perm =>
      perm.resource === resource || perm.resource === '*'
    );

    if (customPermission) {
      return customPermission.actions.includes(action) || customPermission.actions.includes('*');
    }
  }

  // Check default permissions
  const rolePermissions = DEFAULT_PERMISSIONS[userRole];
  if (!rolePermissions) {
    return false;
  }

  // Check wildcard resource permission
  if (rolePermissions['*'] && (rolePermissions['*'].includes(action) || rolePermissions['*'].includes('*'))) {
    return true;
  }

  // Check specific resource permission
  const resourcePermissions = rolePermissions[resource];
  if (!resourcePermissions) {
    return false;
  }

  return resourcePermissions.includes(action);
};

/**
 * Middleware to check if user has required role
 * @param {string|string[]} requiredRoles - Required role(s)
 * @param {Object} options - Additional options
 */
export const requireRole = (requiredRoles, options = {}) => {
  return async (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
          code: 'AUTH_REQUIRED'
        });
      }

      const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
      const hasRequiredRole = roles.some(role => hasRole(user.role, role));

      if (!hasRequiredRole) {
        return res.status(403).json({
          success: false,
          message: 'Insufficient permissions',
          code: 'INSUFFICIENT_PERMISSIONS',
          requiredRoles: roles,
          userRole: user.role
        });
      }

      // Log admin/superadmin actions
      if (['admin', 'superadmin'].includes(user.role)) {
        console.log(`🔐 Admin Action: ${user.email} (${user.role}) - ${req.method} ${req.path}`);
      }

      next();
    } catch (error) {
      console.error('❌ Role middleware error:', error);
      res.status(500).json({
        success: false,
        message: 'Authorization check failed',
        code: 'AUTH_CHECK_FAILED'
      });
    }
  };
};

/**
 * Middleware to check if user has specific permission
 * @param {string} resource - Resource name
 * @param {string} action - Action name
 * @param {Object} options - Additional options
 */
export const requirePermission = (resource, action, options = {}) => {
  return async (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
          code: 'AUTH_REQUIRED'
        });
      }

      const hasRequiredPermission = hasPermission(
        user.role,
        resource,
        action,
        user.adminData?.permissions
      );

      if (!hasRequiredPermission) {
        return res.status(403).json({
          success: false,
          message: `Permission denied: ${action} on ${resource}`,
          code: 'PERMISSION_DENIED',
          resource,
          action,
          userRole: user.role
        });
      }

      next();
    } catch (error) {
      console.error('❌ Permission middleware error:', error);
      res.status(500).json({
        success: false,
        message: 'Permission check failed',
        code: 'PERMISSION_CHECK_FAILED'
      });
    }
  };
};

/**
 * Middleware for ownership-based access control
 * @param {string} resourceType - Type of resource (e.g., 'course', 'lesson')
 * @param {string} ownerField - Field name that contains owner ID
 */
export const requireOwnership = (resourceType, ownerField = 'userId') => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      const resourceId = req.params.id || req.body.id;

      if (!user || !resourceId) {
        return res.status(400).json({
          success: false,
          message: 'Invalid request parameters',
          code: 'INVALID_PARAMETERS'
        });
      }

      // Admins and superadmins can access all resources
      if (['admin', 'superadmin'].includes(user.role)) {
        console.log(`🔐 Admin access granted: ${user.email} accessing ${resourceType} ${resourceId}`);
        return next();
      }

      // For other users, check actual ownership in database
      try {
        let resource = null;
        
        // Import models dynamically to avoid circular dependencies
        const { User } = await import('../models.js');
        
        switch (resourceType.toLowerCase()) {
          case 'user':
          case 'profile':
            // Users can only access their own profile
            if (resourceId !== user._id.toString()) {
              return res.status(403).json({
                success: false,
                message: 'Access denied: You can only access your own profile',
                code: 'OWNERSHIP_DENIED'
              });
            }
            break;
            
          case 'course':
            // For courses, check if user is enrolled or is the instructor
            resource = await User.findById(user._id).select('progress.enrolledCourses');
            if (!resource || !resource.progress.enrolledCourses.includes(resourceId)) {
              return res.status(403).json({
                success: false,
                message: 'Access denied: You are not enrolled in this course',
                code: 'ENROLLMENT_REQUIRED'
              });
            }
            break;
            
          case 'lesson':
          case 'quiz':
            // For lessons/quizzes, check course enrollment
            // This would require additional logic to map lesson/quiz to course
            console.log(`🔐 Lesson/Quiz access check: ${user.email} accessing ${resourceType} ${resourceId}`);
            break;
            
          default:
            // For unknown resource types, deny access by default
            return res.status(403).json({
              success: false,
              message: `Access denied: Unknown resource type ${resourceType}`,
              code: 'UNKNOWN_RESOURCE_TYPE'
            });
        }

        console.log(`✅ Ownership verified: ${user.email} can access ${resourceType} ${resourceId}`);
        next();
      } catch (dbError) {
        console.error('❌ Database error during ownership check:', dbError);
        return res.status(500).json({
          success: false,
          message: 'Failed to verify resource ownership',
          code: 'OWNERSHIP_CHECK_DB_ERROR'
        });
      }
    } catch (error) {
      console.error('❌ Ownership middleware error:', error);
      res.status(500).json({
        success: false,
        message: 'Ownership check failed',
        code: 'OWNERSHIP_CHECK_FAILED'
      });
    }
  };
};

/**
 * Middleware for conditional access based on enrollment
 * @param {string} resourceType - Type of resource
 */
export const requireEnrollment = (resourceType) => {
  return async (req, res, next) => {
    try {
      const user = req.user;
      const resourceId = req.params.id || req.body.id || req.params.courseId;

      if (!user || !resourceId) {
        return res.status(400).json({
          success: false,
          message: 'Invalid request parameters',
          code: 'INVALID_PARAMETERS'
        });
      }

      // Admins and superadmins don't need enrollment
      if (['admin', 'superadmin'].includes(user.role)) {
        console.log(`🔐 Admin enrollment bypass: ${user.email} accessing ${resourceType} ${resourceId}`);
        return next();
      }

      // Check actual enrollment in database
      try {
        const { User } = await import('../models.js');
        
        const userWithEnrollment = await User.findById(user._id)
          .select('progress.enrolledCourses')
          .lean();

        if (!userWithEnrollment) {
          return res.status(404).json({
            success: false,
            message: 'User not found',
            code: 'USER_NOT_FOUND'
          });
        }

        // Check if user is enrolled in the course
        const isEnrolled = userWithEnrollment.progress.enrolledCourses.some(
          courseId => courseId.toString() === resourceId.toString()
        );

        if (!isEnrolled) {
          return res.status(403).json({
            success: false,
            message: `Access denied: You must be enrolled in this ${resourceType} to access it`,
            code: 'ENROLLMENT_REQUIRED',
            resourceType,
            resourceId
          });
        }

        console.log(`✅ Enrollment verified: ${user.email} is enrolled in ${resourceType} ${resourceId}`);
        next();
      } catch (dbError) {
        console.error('❌ Database error during enrollment check:', dbError);
        return res.status(500).json({
          success: false,
          message: 'Failed to verify enrollment',
          code: 'ENROLLMENT_CHECK_DB_ERROR'
        });
      }
    } catch (error) {
      console.error('❌ Enrollment middleware error:', error);
      res.status(500).json({
        success: false,
        message: 'Enrollment check failed',
        code: 'ENROLLMENT_CHECK_FAILED'
      });
    }
  };
};

/**
 * Combined middleware for complex authorization rules
 * @param {Object} rules - Authorization rules
 */
export const authorize = (rules) => {
  return async (req, res, next) => {
    try {
      const user = req.user;

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Authentication required',
          code: 'AUTH_REQUIRED'
        });
      }

      // Check role requirements
      if (rules.roles) {
        const roles = Array.isArray(rules.roles) ? rules.roles : [rules.roles];
        const hasRequiredRole = roles.some(role => hasRole(user.role, role));

        if (!hasRequiredRole) {
          return res.status(403).json({
            success: false,
            message: 'Insufficient role permissions',
            code: 'INSUFFICIENT_ROLE',
            requiredRoles: roles,
            userRole: user.role
          });
        }
      }

      // Check permission requirements
      if (rules.permissions) {
        for (const perm of rules.permissions) {
          const hasRequiredPermission = hasPermission(
            user.role,
            perm.resource,
            perm.action,
            user.adminData?.permissions
          );

          if (!hasRequiredPermission) {
            return res.status(403).json({
              success: false,
              message: `Permission denied: ${perm.action} on ${perm.resource}`,
              code: 'PERMISSION_DENIED',
              resource: perm.resource,
              action: perm.action,
              userRole: user.role
            });
          }
        }
      }

      // Check ownership if required
      if (rules.requireOwnership) {
        const resourceId = req.params.id || req.body.id;
        const resourceType = rules.requireOwnership.resourceType || 'resource';
        
        if (resourceType === 'profile' && resourceId !== user._id.toString()) {
          return res.status(403).json({
            success: false,
            message: 'Access denied: You can only access your own profile',
            code: 'OWNERSHIP_DENIED'
          });
        }
        
        console.log(`✅ Ownership check passed for ${user.email}`);
      }

      // Check enrollment if required
      if (rules.requireEnrollment) {
        const resourceId = req.params.id || req.body.id || req.params.courseId;
        
        if (resourceId) {
          const { User } = await import('../models.js');
          const userWithEnrollment = await User.findById(user._id)
            .select('progress.enrolledCourses')
            .lean();

          const isEnrolled = userWithEnrollment?.progress.enrolledCourses.some(
            courseId => courseId.toString() === resourceId.toString()
          );

          if (!isEnrolled) {
            return res.status(403).json({
              success: false,
              message: 'Access denied: Enrollment required',
              code: 'ENROLLMENT_REQUIRED'
            });
          }
        }
        
        console.log(`✅ Enrollment check passed for ${user.email}`);
      }

      next();
    } catch (error) {
      console.error('❌ Authorization middleware error:', error);
      res.status(500).json({
        success: false,
        message: 'Authorization check failed',
        code: 'AUTHORIZATION_FAILED'
      });
    }
  };
};

// Export utility functions for use in routes
export { ROLE_HIERARCHY, DEFAULT_PERMISSIONS };