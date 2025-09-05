// Authentication utility functions

// Token storage keys
const ACCESS_TOKEN_KEY = 'auth_access_token';
const REFRESH_TOKEN_KEY = 'auth_refresh_token';
const USER_KEY = 'auth_user';

/**
 * Store authentication data in localStorage
 */
export const storeAuthData = (accessToken: string, refreshToken: string, user: any) => {
  try {
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log('✅ Auth data stored successfully');
  } catch (error) {
    console.error('❌ Failed to store auth data:', error);
  }
};

/**
 * Get stored authentication data
 */
export const getAuthData = () => {
  try {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    const userStr = localStorage.getItem(USER_KEY);
    
    if (accessToken && userStr) {
      return {
        accessToken,
        refreshToken,
        user: JSON.parse(userStr)
      };
    }
    
    return null;
  } catch (error) {
    console.error('❌ Failed to get auth data:', error);
    return null;
  }
};

/**
 * Clear authentication data from localStorage
 */
export const clearAuthData = () => {
  try {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    console.log('✅ Auth data cleared');
  } catch (error) {
    console.error('❌ Failed to clear auth data:', error);
  }
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  const authData = getAuthData();
  return !!(authData?.accessToken && authData?.user);
};

/**
 * Get current user from localStorage
 */
export const getCurrentUser = () => {
  const authData = getAuthData();
  return authData?.user || null;
};

/**
 * Get access token from localStorage
 */
export const getAccessToken = (): string | null => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
};

/**
 * Get refresh token from localStorage
 */
export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

/**
 * Check if user has specific role
 */
export const hasRole = (role: string | string[]): boolean => {
  const user = getCurrentUser();
  if (!user) return false;

  if (Array.isArray(role)) {
    return role.includes(user.role);
  }

  return user.role === role;
};

/**
 * Check if user has permission for resource and action
 */
export const hasPermission = (resource: string, action: string): boolean => {
  const user = getCurrentUser();
  if (!user) return false;

  // Super admin has all permissions
  if (user.role === 'superadmin') return true;

  // Define role-based permissions
  const rolePermissions: Record<string, Record<string, string[]>> = {
    guest: {
      courses: ['read'],
      lessons: ['read'],
      quizzes: ['read'],
    },
    user: {
      courses: ['read', 'enroll'],
      lessons: ['read', 'complete'],
      quizzes: ['read', 'take'],
      assignments: ['read', 'submit'],
      profile: ['read', 'update'],
      certificates: ['read'],
    },
    admin: {
      courses: ['create', 'read', 'update', 'delete', 'publish'],
      lessons: ['create', 'read', 'update', 'delete'],
      quizzes: ['create', 'read', 'update', 'delete'],
      assignments: ['create', 'read', 'update', 'delete', 'grade'],
      users: ['read', 'update'],
      analytics: ['read'],
      media: ['create', 'read', 'update', 'delete'],
    },
    superadmin: {
      '*': ['*'], // All permissions
    },
  };

  const userPermissions = rolePermissions[user.role] || {};

  // Check wildcard resource
  if (userPermissions['*'] && (userPermissions['*'].includes(action) || userPermissions['*'].includes('*'))) {
    return true;
  }

  // Check specific resource
  const resourcePermissions = userPermissions[resource];
  if (!resourcePermissions) return false;

  return resourcePermissions.includes(action);
};

/**
 * Navigate based on user role
 */
export const getDefaultRoute = (userRole: string): string => {
  switch (userRole) {
    case 'superadmin':
      return '/super-admin';
    case 'admin':
      return '/admin';
    case 'user':
      return '/dashboard';
    case 'guest':
    default:
      return '/';
  }
};

/**
 * Format user display name
 */
export const getUserDisplayName = (user: any): string => {
  if (!user) return 'Guest';
  
  if (user.firstName && user.lastName) {
    return `${user.firstName} ${user.lastName}`;
  }
  
  if (user.firstName) {
    return user.firstName;
  }
  
  return user.email || 'User';
};

/**
 * Get role display name
 */
export const getRoleDisplayName = (role: string): string => {
  const roleNames: Record<string, string> = {
    guest: 'Guest',
    user: 'User',
    admin: 'Administrator',
    superadmin: 'Super Administrator'
  };
  
  return roleNames[role] || role;
};
