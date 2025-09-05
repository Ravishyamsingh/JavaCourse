import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'sonner';
import {
  User,
  UserRole,
  AuthTokens,
  AuthState,
  AuthContextType,
  ROLE_PERMISSIONS,
  ROLE_HIERARCHY,
  ROLE_DISPLAY,
  SESSION_DURATION
} from '@/types/auth';

// API base URL
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Token storage keys
const ACCESS_TOKEN_KEY = 'auth_access_token';
const REFRESH_TOKEN_KEY = 'auth_refresh_token';
const USER_KEY = 'auth_user';

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    tokens: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
        const userData = localStorage.getItem(USER_KEY);

        if (accessToken && refreshToken && userData) {
          const user = JSON.parse(userData);
          const tokens = { accessToken, refreshToken };

          // Validate token with server
          const isValid = await validateToken(accessToken);
          if (isValid) {
            setAuthState({
              user,
              tokens,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
          } else {
            // Try to refresh token
            const refreshTokenValue = localStorage.getItem(REFRESH_TOKEN_KEY);
            if (refreshTokenValue) {
              const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken: refreshTokenValue }),
              });

              const data = await response.json();

              if (response.ok) {
                const { accessToken, refreshToken: newRefreshToken } = data;
                const newTokens = {
                  accessToken,
                  refreshToken: newRefreshToken || refreshTokenValue,
                };

                localStorage.setItem(ACCESS_TOKEN_KEY, newTokens.accessToken);
                if (newRefreshToken) {
                  localStorage.setItem(REFRESH_TOKEN_KEY, newTokens.refreshToken);
                }

                setAuthState({
                  user,
                  tokens: newTokens,
                  isAuthenticated: true,
                  isLoading: false,
                  error: null,
                });
              } else {
                // Refresh failed, clear auth data
                clearAuthData();
                setAuthState(prev => ({ ...prev, isLoading: false }));
              }
            } else {
              // No refresh token, clear auth data
              clearAuthData();
              setAuthState(prev => ({ ...prev, isLoading: false }));
            }
          }
        } else {
          setAuthState(prev => ({ ...prev, isLoading: false }));
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
        clearAuthData();
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    };

    initializeAuth();
  }, []);

  // Listen for localStorage changes (for Google OAuth) - Optimized without polling
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      // Only handle auth-related storage changes
      if (![ACCESS_TOKEN_KEY, USER_KEY, REFRESH_TOKEN_KEY].includes(e.key || '')) {
        return;
      }

      console.log('🔄 Storage change detected for auth key:', e.key);

      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
      const userData = localStorage.getItem(USER_KEY);

      if (accessToken && userData) {
        try {
          const user = JSON.parse(userData);
          const tokens = { accessToken, refreshToken: refreshToken || '' };

          setAuthState({
            user,
            tokens,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          console.log('✅ Auth state updated from storage change');
        } catch (error) {
          console.error('❌ Error parsing user data from localStorage:', error);
          clearAuthData();
          setAuthState({
            user: null,
            tokens: null,
            isAuthenticated: false,
            isLoading: false,
            error: 'Invalid user data in storage',
          });
        }
      } else if (!accessToken) {
        // Auth data was cleared
        setAuthState({
          user: null,
          tokens: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
        console.log('🔄 Auth state cleared from storage change');
      }
    };

    // Custom event for same-tab auth updates (for Google OAuth)
    const handleAuthUpdate = (e: CustomEvent) => {
      console.log('🔄 Custom auth update event received');
      const { user, tokens } = e.detail;
      
      if (user && tokens) {
        storeAuthData(user, tokens);
        setAuthState({
          user,
          tokens,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      }
    };

    // Listen for storage events (cross-tab)
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for custom auth events (same-tab)
    window.addEventListener('authUpdate', handleAuthUpdate as EventListener);

    // One-time check on mount for existing auth data
    const checkInitialAuthState = () => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
      const userData = localStorage.getItem(USER_KEY);

      if (accessToken && userData && !authState.isAuthenticated) {
        try {
          const user = JSON.parse(userData);
          const tokens = { accessToken, refreshToken: refreshToken || '' };

          setAuthState({
            user,
            tokens,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });

          console.log('✅ Initial auth state restored from storage');
        } catch (error) {
          console.error('❌ Error parsing initial user data:', error);
          clearAuthData();
        }
      }
    };

    // Check once on mount, no polling
    if (!authState.isAuthenticated) {
      checkInitialAuthState();
    }

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('authUpdate', handleAuthUpdate as EventListener);
    };
  }, []); // Remove authState.isAuthenticated dependency to prevent loops

  // Validate token with server
  const validateToken = async (token: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/validate`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.valid;
      }
      return false;
    } catch (error) {
      console.error('Token validation error:', error);
      return false;
    }
  };

  // Store auth data in localStorage
  const storeAuthData = (user: User, tokens: AuthTokens) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  };

  // Clear auth data from localStorage
  const clearAuthData = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  };

  // Login with email and password
  const login = async (email: string, password: string, selectedRole?: UserRole): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, selectedRole }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      const { user, accessToken, refreshToken } = data;
      const tokens = { accessToken, refreshToken };

      storeAuthData(user, tokens);

      setAuthState({
        user,
        tokens,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      toast.success(`Welcome back, ${user.firstName}!`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: errorMessage,
      }));
      toast.error(errorMessage);
      throw error;
    }
  };

  // Login with Google OAuth
  const loginWithGoogle = async (): Promise<void> => {
    try {
      // Redirect to Google OAuth
      window.location.href = `${API_BASE_URL}/auth/google`;
    } catch (error) {
      console.error('Google login error:', error);
      toast.error('Failed to initiate Google login');
      throw error;
    }
  };

  // Handle Google OAuth callback
  const handleGoogleCallback = async (tokens: AuthTokens, user: User) => {
    try {
      storeAuthData(user, tokens);

      setAuthState({
        user,
        tokens,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });

      toast.success(`Welcome, ${user.firstName}!`);
    } catch (error) {
      console.error('Google callback error:', error);
      toast.error('Failed to complete Google login');
      throw error;
    }
  };

  // Logout
  const logout = async (): Promise<void> => {
    setAuthState(prev => ({ ...prev, isLoading: true }));

    try {
      const token = authState.tokens?.accessToken;
      if (token) {
        // Call logout endpoint
        await fetch(`${API_BASE_URL}/auth/logout`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            refreshToken: authState.tokens?.refreshToken,
          }),
        });
      }
    } catch (error) {
      console.error('Logout API error:', error);
      // Continue with local logout even if API call fails
    }

    // Clear local auth data
    clearAuthData();

    setAuthState({
      user: null,
      tokens: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });

    toast.success('Logged out successfully');
  };

  // Refresh token
  const refreshToken = async (): Promise<void> => {
    try {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }

      const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Token refresh failed');
      }

      const { accessToken, refreshToken: newRefreshToken } = data;
      const tokens = {
        accessToken,
        refreshToken: newRefreshToken || refreshToken,
      };

      // Update stored tokens
      localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
      if (newRefreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
      }

      setAuthState(prev => ({
        ...prev,
        tokens,
      }));
    } catch (error) {
      console.error('Token refresh error:', error);
      // If refresh fails, logout user
      await logout();
      throw error;
    }
  };

  // Update user profile
  const updateProfile = async (updates: Partial<User>): Promise<void> => {
    if (!authState.user || !authState.tokens) {
      throw new Error('Not authenticated');
    }

    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${authState.tokens.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Profile update failed');
      }

      const updatedUser = { ...authState.user, ...data.user };
      localStorage.setItem(USER_KEY, JSON.stringify(updatedUser));

      setAuthState(prev => ({
        ...prev,
        user: updatedUser,
      }));

      toast.success('Profile updated successfully');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Profile update failed';
      toast.error(errorMessage);
      throw error;
    }
  };

  // Clear error
  const clearError = () => {
    setAuthState(prev => ({ ...prev, error: null }));
  };

  // Check if user has specific role
  const hasRole = (role: string | string[]): boolean => {
    if (!authState.user) return false;

    if (Array.isArray(role)) {
      return role.includes(authState.user.role);
    }

    return authState.user.role === role;
  };

  // Check if user has permission for resource and action
  const hasPermission = (resource: string, action: string): boolean => {
    if (!authState.user) return false;

    // Super admin has all permissions
    if (authState.user.role === UserRole.SUPER_ADMIN) return true;

    const userPermissions = ROLE_PERMISSIONS[authState.user.role] || {};

    // Check wildcard resource
    if (userPermissions['*'] && (userPermissions['*'].includes(action) || userPermissions['*'].includes('*'))) {
      return true;
    }

    // Check specific resource
    const resourcePermissions = userPermissions[resource];
    if (!resourcePermissions) return false;

    return resourcePermissions.includes(action);
  };

  // Get role display name
  const getRoleDisplayName = (role: UserRole): string => {
    return ROLE_DISPLAY[role]?.name || role;
  };

  // Get role color
  const getRoleColor = (role: UserRole): string => {
    return ROLE_DISPLAY[role]?.color || 'text-gray-600';
  };

  // Context value
  const contextValue: AuthContextType = {
    ...authState,
    login,
    loginWithGoogle,
    logout,
    refreshToken,
    updateProfile,
    clearError,
    hasRole,
    hasPermission,
    getRoleDisplayName,
    getRoleColor,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Utility function to handle Google OAuth callback
export const handleGoogleOAuthCallback = async (
  tokens: AuthTokens,
  user: User,
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>
) => {
  try {
    // Store auth data
    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(user));

    setAuthState({
      user,
      tokens,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });

    toast.success(`Welcome, ${user.firstName}!`);
  } catch (error) {
    console.error('Google callback error:', error);
    toast.error('Failed to complete Google login');
    throw error;
  }
};

export default AuthContext;