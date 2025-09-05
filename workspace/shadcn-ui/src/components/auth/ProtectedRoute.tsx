import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { Loader2, Shield, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: UserRole | UserRole[];
  requireAuth?: boolean;
  fallbackPath?: string;
  showAccessDenied?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
  requireAuth = true,
  fallbackPath = '/login',
  showAccessDenied = true
}) => {
  const { user, isAuthenticated, isLoading, hasRole } = useAuth();
  const location = useLocation();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Checking permissions...</p>
        </div>
      </div>
    );
  }

  // Check if authentication is required
  if (requireAuth && !isAuthenticated) {
    return <Navigate to={fallbackPath} state={{ from: location }} replace />;
  }

  // Check role-based access
  if (requiredRole && isAuthenticated) {
    const hasRequiredRole = Array.isArray(requiredRole)
      ? requiredRole.some(role => hasRole(role))
      : hasRole(requiredRole);

    if (!hasRequiredRole) {
      if (showAccessDenied) {
        return <AccessDeniedComponent requiredRole={requiredRole} userRole={user?.role} />;
      }
      return <Navigate to="/dashboard" replace />;
    }
  }

  // If user is authenticated but trying to access login/signup pages, redirect to dashboard
  if (isAuthenticated && ['/login', '/signup', '/forgot-password'].includes(location.pathname)) {
    const redirectPath = getRoleBasedRedirect(user?.role);
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

// Helper function to get role-based redirect path
const getRoleBasedRedirect = (role?: UserRole): string => {
  switch (role) {
    case UserRole.GUEST:
      return '/guest-dashboard';
    case UserRole.USER:
      return '/dashboard';
    case UserRole.ADMIN:
      return '/admin-panel';
    case UserRole.SUPER_ADMIN:
      return '/super-admin-panel';
    default:
      return '/dashboard';
  }
};

// Access Denied Component
interface AccessDeniedProps {
  requiredRole: UserRole | UserRole[];
  userRole?: UserRole;
}

const AccessDeniedComponent: React.FC<AccessDeniedProps> = ({ requiredRole, userRole }) => {
  const { logout } = useAuth();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
  };

  const getRequiredRoleText = (role: UserRole | UserRole[]): string => {
    if (Array.isArray(role)) {
      return role.map(r => r.charAt(0).toUpperCase() + r.slice(1)).join(' or ');
    }
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-100 px-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="space-y-1 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <CardTitle className="text-2xl font-semibold text-red-600">Access Denied</CardTitle>
            <CardDescription>
              You don't have permission to access this page
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-red-900">Required Role:</p>
                  <p className="text-red-800">{getRequiredRoleText(requiredRole)}</p>
                  {userRole && (
                    <p className="text-red-700 mt-2">
                      Your current role: <span className="font-medium">{userRole}</span>
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                onClick={() => window.history.back()}
                className="w-full"
                variant="outline"
              >
                Go Back
              </Button>

              <Button
                onClick={handleLogout}
                className="w-full bg-red-600 hover:bg-red-700"
                variant="destructive"
              >
                Sign Out & Try Different Account
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                Need help with access permissions?{' '}
                <a
                  href="mailto:support@java-course.com"
                  className="text-blue-600 hover:text-blue-500 font-medium"
                >
                  Contact Support
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Higher-order component for role-based route protection
export const withRoleProtection = <P extends object>(
  Component: React.ComponentType<P>,
  requiredRole: UserRole | UserRole[],
  options?: {
    requireAuth?: boolean;
    fallbackPath?: string;
    showAccessDenied?: boolean;
  }
) => {
  return (props: P) => (
    <ProtectedRoute
      requiredRole={requiredRole}
      requireAuth={options?.requireAuth ?? true}
      fallbackPath={options?.fallbackPath ?? '/login'}
      showAccessDenied={options?.showAccessDenied ?? true}
    >
      <Component {...props} />
    </ProtectedRoute>
  );
};

// Hook for checking permissions in components
export const useProtectedRoute = () => {
  const { user, isAuthenticated, hasRole, hasPermission } = useAuth();

  return {
    user,
    isAuthenticated,
    hasRole,
    hasPermission,
    canAccess: (requiredRole: UserRole | UserRole[]) => {
      if (!isAuthenticated) return false;
      return Array.isArray(requiredRole)
        ? requiredRole.some(role => hasRole(role))
        : hasRole(requiredRole);
    }
  };
};

export default ProtectedRoute;