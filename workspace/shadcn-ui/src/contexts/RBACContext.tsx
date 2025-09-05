import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserRole, Permission, User } from '@/types/cms';
import { useAuth } from './AuthContext';

interface RBACContextType {
  userRole: UserRole | null;
  permissions: Permission[];
  hasPermission: (resource: string, action: string) => boolean;
  hasRole: (role: UserRole | UserRole[]) => boolean;
  canAccess: (requiredRole: UserRole) => boolean;
  isLoading: boolean;
}

const RBACContext = createContext<RBACContextType | undefined>(undefined);

export const useRBAC = () => {
  const context = useContext(RBACContext);
  if (context === undefined) {
    throw new Error('useRBAC must be used within an RBACProvider');
  }
  return context;
};

// Role hierarchy - higher roles inherit permissions from lower roles
const ROLE_HIERARCHY: Record<UserRole, number> = {
  [UserRole.STUDENT]: 1,
  [UserRole.INSTRUCTOR]: 2,
  [UserRole.ADMIN]: 3,
  [UserRole.SUPER_ADMIN]: 4,
};

// Default permissions for each role
const DEFAULT_PERMISSIONS: Record<UserRole, Permission[]> = {
  [UserRole.STUDENT]: [
    { id: '1', name: 'view_courses', resource: 'course', action: 'read', conditions: { enrolled: true } },
    { id: '2', name: 'view_lessons', resource: 'lesson', action: 'read', conditions: { enrolled: true } },
    { id: '3', name: 'submit_assignments', resource: 'assignment', action: 'create', conditions: { enrolled: true } },
    { id: '4', name: 'take_quizzes', resource: 'quiz', action: 'create', conditions: { enrolled: true } },
    { id: '5', name: 'view_progress', resource: 'progress', action: 'read', conditions: { own: true } },
    { id: '6', name: 'participate_forums', resource: 'forum', action: 'create', conditions: { enrolled: true } },
    { id: '7', name: 'view_certificates', resource: 'certificate', action: 'read', conditions: { own: true } },
  ],
  [UserRole.INSTRUCTOR]: [
    { id: '8', name: 'create_courses', resource: 'course', action: 'create' },
    { id: '9', name: 'edit_own_courses', resource: 'course', action: 'update', conditions: { owner: true } },
    { id: '10', name: 'create_lessons', resource: 'lesson', action: 'create' },
    { id: '11', name: 'edit_lessons', resource: 'lesson', action: 'update', conditions: { course_owner: true } },
    { id: '12', name: 'create_assignments', resource: 'assignment', action: 'create' },
    { id: '13', name: 'grade_assignments', resource: 'assignment', action: 'update', conditions: { course_owner: true } },
    { id: '14', name: 'create_quizzes', resource: 'quiz', action: 'create' },
    { id: '15', name: 'view_student_progress', resource: 'progress', action: 'read', conditions: { course_owner: true } },
    { id: '16', name: 'moderate_forums', resource: 'forum', action: 'update', conditions: { course_owner: true } },
    { id: '17', name: 'manage_media', resource: 'media', action: 'create' },
    { id: '18', name: 'view_analytics', resource: 'analytics', action: 'read', conditions: { course_owner: true } },
  ],
  [UserRole.ADMIN]: [
    { id: '19', name: 'manage_all_courses', resource: 'course', action: '*' },
    { id: '20', name: 'manage_users', resource: 'user', action: '*' },
    { id: '21', name: 'manage_system_settings', resource: 'settings', action: '*' },
    { id: '22', name: 'view_all_analytics', resource: 'analytics', action: 'read' },
    { id: '23', name: 'manage_notifications', resource: 'notification', action: '*' },
    { id: '24', name: 'manage_forums', resource: 'forum', action: '*' },
    { id: '25', name: 'export_data', resource: 'data', action: 'export' },
    { id: '26', name: 'import_data', resource: 'data', action: 'import' },
  ],
  [UserRole.SUPER_ADMIN]: [
    { id: '27', name: 'full_system_access', resource: '*', action: '*' },
    { id: '28', name: 'manage_roles', resource: 'role', action: '*' },
    { id: '29', name: 'manage_permissions', resource: 'permission', action: '*' },
    { id: '30', name: 'system_maintenance', resource: 'system', action: '*' },
  ],
};

export const RBACProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [permissions, setPermissions] = useState<Permission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      // In a real app, this would come from the user object or API
      const role = (user as any).role || UserRole.STUDENT;
      setUserRole(role);
      
      // Get permissions for the user's role and all lower roles
      const userPermissions = getRolePermissions(role);
      setPermissions(userPermissions);
    } else {
      setUserRole(null);
      setPermissions([]);
    }
    setIsLoading(false);
  }, [user]);

  const getRolePermissions = (role: UserRole): Permission[] => {
    const allPermissions: Permission[] = [];
    const userRoleLevel = ROLE_HIERARCHY[role];

    // Add permissions for current role and all lower roles
    Object.entries(ROLE_HIERARCHY).forEach(([roleKey, level]) => {
      if (level <= userRoleLevel) {
        const rolePermissions = DEFAULT_PERMISSIONS[roleKey as UserRole] || [];
        allPermissions.push(...rolePermissions);
      }
    });

    return allPermissions;
  };

  const hasPermission = (resource: string, action: string): boolean => {
    if (!userRole) return false;

    // Super admin has all permissions
    if (userRole === UserRole.SUPER_ADMIN) return true;

    return permissions.some(permission => {
      // Check if permission matches resource and action
      const resourceMatch = permission.resource === '*' || permission.resource === resource;
      const actionMatch = permission.action === '*' || permission.action === action;
      
      return resourceMatch && actionMatch;
    });
  };

  const hasRole = (requiredRole: UserRole | UserRole[]): boolean => {
    if (!userRole) return false;

    const requiredRoles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
    return requiredRoles.includes(userRole);
  };

  const canAccess = (requiredRole: UserRole): boolean => {
    if (!userRole) return false;

    const userRoleLevel = ROLE_HIERARCHY[userRole];
    const requiredRoleLevel = ROLE_HIERARCHY[requiredRole];

    return userRoleLevel >= requiredRoleLevel;
  };

  const value = {
    userRole,
    permissions,
    hasPermission,
    hasRole,
    canAccess,
    isLoading,
  };

  return (
    <RBACContext.Provider value={value}>
      {children}
    </RBACContext.Provider>
  );
};

// Higher-order component for role-based route protection
export const withRoleProtection = <P extends object>(
  Component: React.ComponentType<P>,
  requiredRole: UserRole,
  fallbackComponent?: React.ComponentType
) => {
  return (props: P) => {
    const { canAccess, isLoading } = useRBAC();

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!canAccess(requiredRole)) {
      if (fallbackComponent) {
        const FallbackComponent = fallbackComponent;
        return <FallbackComponent />;
      }
      return <div>Access Denied</div>;
    }

    return <Component {...props} />;
  };
};

// Component for conditional rendering based on permissions
export const PermissionGate: React.FC<{
  resource: string;
  action: string;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ resource, action, children, fallback = null }) => {
  const { hasPermission } = useRBAC();

  if (hasPermission(resource, action)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};

// Component for conditional rendering based on roles
export const RoleGate: React.FC<{
  roles: UserRole | UserRole[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ roles, children, fallback = null }) => {
  const { hasRole } = useRBAC();

  if (hasRole(roles)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
};