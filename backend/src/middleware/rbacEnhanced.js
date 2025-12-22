import { logger } from '../utils/monitoring.js';

/**
 * Role-Based Access Control Middleware
 * Enforces role-based permissions for admin operations
 */
export const authorize = (options = {}) => {
  return async (req, res, next) => {
    try {
      const { roles = [], permissions = [] } = options;
      const user = req.user;

      if (!user) {
        return res.status(401).json({
          success: false,
          message: 'Unauthorized: User not authenticated'
        });
      }

      // Check role-based access
      if (roles.length > 0 && !roles.includes(user.role)) {
        logger.warn('Unauthorized access attempt', {
          userId: user._id,
          requiredRoles: roles,
          userRole: user.role,
          path: req.path
        });

        return res.status(403).json({
          success: false,
          message: 'Forbidden: Insufficient role privileges'
        });
      }

      // Check permission-based access
      if (permissions.length > 0) {
        const userPermissions = user.permissions || [];
        const hasPermission = permissions.some(p => userPermissions.includes(p));

        if (!hasPermission) {
          logger.warn('Unauthorized permission access attempt', {
            userId: user._id,
            requiredPermissions: permissions,
            userPermissions,
            path: req.path
          });

          return res.status(403).json({
            success: false,
            message: 'Forbidden: Insufficient permissions'
          });
        }
      }

      next();
    } catch (error) {
      logger.error('Authorization middleware error:', error);
      next(error);
    }
  };
};

/**
 * Super Admin Only Middleware
 */
export const superAdminOnly = (req, res, next) => {
  try {
    if (req.user?.role !== 'superadmin') {
      logger.warn('Super admin access denied', {
        userId: req.user?._id,
        userRole: req.user?.role,
        path: req.path
      });

      return res.status(403).json({
        success: false,
        message: 'Forbidden: Super Admin access required'
      });
    }

    next();
  } catch (error) {
    logger.error('Super admin middleware error:', error);
    next(error);
  }
};

/**
 * Admin or Super Admin Middleware
 */
export const adminOrSuperAdmin = (req, res, next) => {
  try {
    if (!['admin', 'superadmin'].includes(req.user?.role)) {
      logger.warn('Admin access denied', {
        userId: req.user?._id,
        userRole: req.user?.role,
        path: req.path
      });

      return res.status(403).json({
        success: false,
        message: 'Forbidden: Admin access required'
      });
    }

    next();
  } catch (error) {
    logger.error('Admin middleware error:', error);
    next(error);
  }
};

/**
 * Resource Owner or Admin Middleware
 * Allows access if user is the resource owner or admin
 */
export const resourceOwnerOrAdmin = (resourceIdParam = 'userId') => {
  return (req, res, next) => {
    try {
      const resourceId = req.params[resourceIdParam];
      const userId = req.user?._id?.toString();
      const userRole = req.user?.role;

      if (userId !== resourceId && !['admin', 'superadmin'].includes(userRole)) {
        logger.warn('Resource access denied', {
          userId,
          resourceId,
          userRole,
          path: req.path
        });

        return res.status(403).json({
          success: false,
          message: 'Forbidden: You can only access your own resources'
        });
      }

      next();
    } catch (error) {
      logger.error('Resource owner middleware error:', error);
      next(error);
    }
  };
};

/**
 * Permission-based Access Control
 * Checks if user has specific permission
 */
export const requirePermission = (permission) => {
  return (req, res, next) => {
    try {
      const userPermissions = req.user?.permissions || [];

      if (!userPermissions.includes(permission)) {
        logger.warn('Permission denied', {
          userId: req.user?._id,
          requiredPermission: permission,
          userPermissions,
          path: req.path
        });

        return res.status(403).json({
          success: false,
          message: `Forbidden: ${permission} permission required`
        });
      }

      next();
    } catch (error) {
      logger.error('Permission middleware error:', error);
      next(error);
    }
  };
};

/**
 * Rate limiting for admin operations
 */
export const adminRateLimit = (req, res, next) => {
  // This would typically use a rate limiting library like express-rate-limit
  // For now, we'll just pass through
  next();
};
