const PERMISSIONS = {
  USER_MANAGEMENT: {
    CREATE: 'user:create',
    READ: 'user:read',
    UPDATE: 'user:update',
    DELETE: 'user:delete',
    RESET_PASSWORD: 'user:reset_password',
    CHANGE_ROLE: 'user:change_role'
  },
  CONTENT_MANAGEMENT: {
    CREATE: 'content:create',
    READ: 'content:read',
    UPDATE: 'content:update',
    DELETE: 'content:delete',
    PUBLISH: 'content:publish'
  },
  ANALYTICS: {
    VIEW_DASHBOARD: 'analytics:view_dashboard',
    VIEW_REPORTS: 'analytics:view_reports',
    EXPORT_DATA: 'analytics:export_data'
  },
  SYSTEM: {
    VIEW_LOGS: 'system:view_logs',
    MANAGE_SETTINGS: 'system:manage_settings',
    MANAGE_ADMINS: 'system:manage_admins'
  }
};

const ROLE_PERMISSIONS = {
  user: [],
  admin: [
    PERMISSIONS.USER_MANAGEMENT.READ,
    PERMISSIONS.USER_MANAGEMENT.UPDATE,
    PERMISSIONS.CONTENT_MANAGEMENT.CREATE,
    PERMISSIONS.CONTENT_MANAGEMENT.READ,
    PERMISSIONS.CONTENT_MANAGEMENT.UPDATE,
    PERMISSIONS.ANALYTICS.VIEW_DASHBOARD,
    PERMISSIONS.ANALYTICS.VIEW_REPORTS
  ],
  superadmin: Object.values(PERMISSIONS).flatMap(p => Object.values(p))
};

export function hasPermission(user, permission) {
  if (user.role === 'superadmin') return true;
  
  const rolePerms = ROLE_PERMISSIONS[user.role] || [];
  if (rolePerms.includes(permission)) return true;

  if (user.adminData?.permissions) {
    return user.adminData.permissions.some(perm =>
      perm.actions.includes(permission)
    );
  }

  return false;
}

export function hasAnyPermission(user, permissions) {
  return permissions.some(perm => hasPermission(user, perm));
}

export function hasAllPermissions(user, permissions) {
  return permissions.every(perm => hasPermission(user, perm));
}

export function getPermissionsByRole(role) {
  return ROLE_PERMISSIONS[role] || [];
}

export function createPermissionMiddleware(requiredPermissions) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      });
    }

    const hasPerms = Array.isArray(requiredPermissions)
      ? hasAllPermissions(req.user, requiredPermissions)
      : hasPermission(req.user, requiredPermissions);

    if (!hasPerms) {
      return res.status(403).json({
        success: false,
        message: 'Insufficient permissions'
      });
    }

    next();
  };
}

export { PERMISSIONS, ROLE_PERMISSIONS };
