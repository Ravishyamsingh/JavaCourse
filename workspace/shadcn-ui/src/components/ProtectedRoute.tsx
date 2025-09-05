import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  allowedRoles?: string[];
  requiredPermissions?: Array<{
    resource: string;
    action: string;
  }>;
  fallbackPath?: string;
  showLoading?: boolean;
}

/**
 * ProtectedRoute component that handles authentication and authorization
 *
 * @param children - The component to render if access is granted
 * @param requireAuth - Whether authentication is required (default: true)
 * @param allowedRoles - Array of roles that can access this route
 * @param requiredPermissions - Array of permission objects {resource, action}
 * @param fallbackPath - Path to redirect to if access is denied
 * @param showLoading - Whether to show loading spinner during auth check
 */
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requireAuth = true,
  allowedRoles,
  requiredPermissions,
  fallbackPath = '/login',
  showLoading = true,
}) => {
  const {
    isAuthenticated,
    isLoading,
    user,
    hasRole,
    hasPermission
  } = useAuth();

  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading && showLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // Check authentication requirement
  if (requireAuth && !isAuthenticated) {
    // Redirect to login with return path
    return <Navigate to={fallbackPath} state={{ from: location }} replace />;
  }

  // If authentication is not required, allow access
  if (!requireAuth) {
    return <>{children}</>;
  }

  // Check role-based access
  if (allowedRoles && allowedRoles.length > 0) {
    const hasAllowedRole = hasRole(allowedRoles);

    if (!hasAllowedRole) {
      // User doesn't have required role
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-100">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h2>
            <p className="text-gray-600 mb-4">
              You don't have the required permissions to access this page.
            </p>
            <p className="text-sm text-gray-500">
              Required roles: {allowedRoles.join(', ')}
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Your role: {user?.role || 'None'}
            </p>
          </div>
        </div>
      );
    }
  }

  // Check permission-based access
  if (requiredPermissions && requiredPermissions.length > 0) {
    const hasAllPermissions = requiredPermissions.every(perm =>
      hasPermission(perm.resource, perm.action)
    );

    if (!hasAllPermissions) {
      // User doesn't have required permissions
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100">
          <div className="text-center max-w-md mx-auto p-8">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Permission Denied</h2>
            <p className="text-gray-600 mb-4">
              You don't have the required permissions to access this page.
            </p>
            <div className="text-left bg-white p-4 rounded-lg border">
              <p className="text-sm font-medium text-gray-700 mb-2">Required permissions:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {requiredPermissions.map((perm, index) => (
                  <li key={index}>
                    • {perm.action} on {perm.resource}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }
  }

  // All checks passed, render the protected content
  return <>{children}</>;
};

/**
 * Higher-order component for protecting routes with authentication
 */
export const withAuth = <P extends object>(
  Component: React.ComponentType<P>,
  options: Omit<ProtectedRouteProps, 'children'> = {}
) => {
  return (props: P) => (
    <ProtectedRoute {...options}>
      <Component {...props} />
    </ProtectedRoute>
  );
};

/**
 * Higher-order component for protecting routes with role requirements
 */
export const withRole = <P extends object>(
  Component: React.ComponentType<P>,
  allowedRoles: string[],
  options: Omit<ProtectedRouteProps, 'children' | 'allowedRoles'> = {}
) => {
  return (props: P) => (
    <ProtectedRoute {...options} allowedRoles={allowedRoles}>
      <Component {...props} />
    </ProtectedRoute>
  );
};

/**
 * Higher-order component for protecting routes with permission requirements
 */
export const withPermission = <P extends object>(
  Component: React.ComponentType<P>,
  requiredPermissions: Array<{ resource: string; action: string }>,
  options: Omit<ProtectedRouteProps, 'children' | 'requiredPermissions'> = {}
) => {
  return (props: P) => (
    <ProtectedRoute {...options} requiredPermissions={requiredPermissions}>
      <Component {...props} />
    </ProtectedRoute>
  );
};

/**
 * Hook for checking access to specific resources
 */
export const useAccessControl = () => {
  const { hasRole, hasPermission, user } = useAuth();

  const canAccess = (
    allowedRoles?: string[],
    requiredPermissions?: Array<{ resource: string; action: string }>
  ): boolean => {
    // Check roles
    if (allowedRoles && allowedRoles.length > 0) {
      if (!hasRole(allowedRoles)) {
        return false;
      }
    }

    // Check permissions
    if (requiredPermissions && requiredPermissions.length > 0) {
      const hasAllPermissions = requiredPermissions.every(perm =>
        hasPermission(perm.resource, perm.action)
      );

      if (!hasAllPermissions) {
        return false;
      }
    }

    return true;
  };

  const canCreate = (resource: string) => hasPermission(resource, 'create');
  const canRead = (resource: string) => hasPermission(resource, 'read');
  const canUpdate = (resource: string) => hasPermission(resource, 'update');
  const canDelete = (resource: string) => hasPermission(resource, 'delete');

  return {
    canAccess,
    canCreate,
    canRead,
    canUpdate,
    canDelete,
    user,
    hasRole,
    hasPermission,
  };
};

export default ProtectedRoute;