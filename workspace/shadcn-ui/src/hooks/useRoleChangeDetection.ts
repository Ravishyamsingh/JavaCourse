import { useEffect, useRef, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types/auth';
import { AuthErrorHandler, AuthErrorCode } from '@/utils/errorHandler';
import { toast } from 'sonner';

interface RoleChangeConfig {
  checkInterval: number; // milliseconds
  showNotifications: boolean;
  autoLogoutOnRoleChange: boolean;
  gracePeriod: number; // seconds before forced logout
}

const DEFAULT_CONFIG: RoleChangeConfig = {
  checkInterval: 60000, // 1 minute
  showNotifications: true,
  autoLogoutOnRoleChange: true,
  gracePeriod: 30 // 30 seconds
};

interface RoleChangeEvent {
  previousRole: UserRole;
  newRole: UserRole;
  timestamp: Date;
  reason?: string;
  changedBy?: string;
}

export const useRoleChangeDetection = (config: Partial<RoleChangeConfig> = {}) => {
  const { user, logout, isAuthenticated, refreshToken } = useAuth();
  const roleConfig = { ...DEFAULT_CONFIG, ...config };
  
  const currentRoleRef = useRef<UserRole | null>(user?.role || null);
  const checkIntervalRef = useRef<NodeJS.Timeout>();
  const gracePeriodTimeoutRef = useRef<NodeJS.Timeout>();
  const roleChangeHistoryRef = useRef<RoleChangeEvent[]>([]);

  // Check for role changes
  const checkRoleChanges = useCallback(async () => {
    if (!user || !isAuthenticated) return;

    try {
      const response = await fetch('/api/auth/user/role-status', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_access_token')}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        if (response.status === 401) {
          // Token might be expired, try to refresh
          try {
            await refreshToken();
            return; // Retry on next interval
          } catch (refreshError) {
            console.error('Failed to refresh token during role check:', refreshError);
            return;
          }
        }
        throw new Error(`Role check failed: ${response.status}`);
      }

      const data = await response.json();
      const serverRole = data.role as UserRole;
      const currentRole = currentRoleRef.current;

      // Check if role has changed
      if (currentRole && serverRole !== currentRole) {
        handleRoleChange(currentRole, serverRole, data.changeReason, data.changedBy);
      }

      // Update current role reference
      currentRoleRef.current = serverRole;

    } catch (error) {
      console.error('Role change detection error:', error);
      // Don't show error to user for background checks
    }
  }, [user, isAuthenticated, refreshToken]);

  // Handle role change
  const handleRoleChange = useCallback((
    previousRole: UserRole,
    newRole: UserRole,
    reason?: string,
    changedBy?: string
  ) => {
    const roleChangeEvent: RoleChangeEvent = {
      previousRole,
      newRole,
      timestamp: new Date(),
      reason,
      changedBy
    };

    // Add to history
    roleChangeHistoryRef.current.unshift(roleChangeEvent);
    
    // Keep only last 10 role changes
    if (roleChangeHistoryRef.current.length > 10) {
      roleChangeHistoryRef.current = roleChangeHistoryRef.current.slice(0, 10);
    }

    if (roleConfig.showNotifications) {
      showRoleChangeNotification(roleChangeEvent);
    }

    if (roleConfig.autoLogoutOnRoleChange) {
      initiateGracefulLogout(roleChangeEvent);
    }

    // Log the role change
    console.info('Role change detected:', roleChangeEvent);

  }, [roleConfig.showNotifications, roleConfig.autoLogoutOnRoleChange]);

  // Show role change notification
  const showRoleChangeNotification = useCallback((event: RoleChangeEvent) => {
    const { previousRole, newRole, reason, changedBy } = event;
    
    let message = `Your role has been changed from ${getRoleDisplayName(previousRole)} to ${getRoleDisplayName(newRole)}.`;
    
    if (reason) {
      message += ` Reason: ${reason}`;
    }
    
    if (changedBy) {
      message += ` Changed by: ${changedBy}`;
    }

    const isUpgrade = getRoleLevel(newRole) > getRoleLevel(previousRole);
    
    toast[isUpgrade ? 'success' : 'warning'](message, {
      duration: 8000,
      action: {
        label: 'Refresh Session',
        onClick: () => handleRefreshSession()
      }
    });

  }, []);

  // Get role display name
  const getRoleDisplayName = (role: UserRole): string => {
    const roleNames = {
      [UserRole.GUEST]: 'Guest',
      [UserRole.USER]: 'User',
      [UserRole.ADMIN]: 'Administrator',
      [UserRole.SUPER_ADMIN]: 'Super Administrator'
    };
    return roleNames[role] || role;
  };

  // Get role level for comparison
  const getRoleLevel = (role: UserRole): number => {
    const roleLevels = {
      [UserRole.GUEST]: 1,
      [UserRole.USER]: 2,
      [UserRole.ADMIN]: 3,
      [UserRole.SUPER_ADMIN]: 4
    };
    return roleLevels[role] || 0;
  };

  // Initiate graceful logout
  const initiateGracefulLogout = useCallback((event: RoleChangeEvent) => {
    const { newRole, previousRole } = event;
    
    // Create auth error for role change
    const error = AuthErrorHandler.createError(
      AuthErrorCode.ROLE_CHANGED,
      { previousRole, newRole, event }
    );

    // Show countdown notification
    let countdown = roleConfig.gracePeriod;
    
    const countdownToast = toast.warning(
      `Your permissions have changed. You will be signed out in ${countdown} seconds to apply the new role.`,
      {
        duration: roleConfig.gracePeriod * 1000,
        action: {
          label: 'Sign Out Now',
          onClick: () => {
            if (gracePeriodTimeoutRef.current) {
              clearTimeout(gracePeriodTimeoutRef.current);
            }
            performRoleChangeLogout(event);
          }
        }
      }
    );

    // Update countdown every second
    const countdownInterval = setInterval(() => {
      countdown--;
      if (countdown > 0) {
        // Update toast message (this is a simplified approach)
        console.log(`Logout in ${countdown} seconds...`);
      } else {
        clearInterval(countdownInterval);
      }
    }, 1000);

    // Set timeout for automatic logout
    gracePeriodTimeoutRef.current = setTimeout(() => {
      clearInterval(countdownInterval);
      performRoleChangeLogout(event);
    }, roleConfig.gracePeriod * 1000);

  }, [roleConfig.gracePeriod]);

  // Perform logout due to role change
  const performRoleChangeLogout = useCallback(async (event: RoleChangeEvent) => {
    try {
      toast.info('Signing out to apply your new role permissions...', { duration: 3000 });
      
      // Store role change info for post-login redirect
      sessionStorage.setItem('roleChangeEvent', JSON.stringify(event));
      
      await logout();
      
      // Redirect to login with role change message
      setTimeout(() => {
        window.location.href = '/login?roleChanged=true';
      }, 1000);
      
    } catch (error) {
      console.error('Error during role change logout:', error);
      // Force reload as fallback
      window.location.reload();
    }
  }, [logout]);

  // Handle refresh session
  const handleRefreshSession = useCallback(async () => {
    try {
      await refreshToken();
      toast.success('Session refreshed successfully');
      
      // Force a role check after refresh
      setTimeout(() => {
        checkRoleChanges();
      }, 1000);
      
    } catch (error) {
      toast.error('Failed to refresh session. Please sign in again.');
      setTimeout(() => {
        logout();
      }, 2000);
    }
  }, [refreshToken, checkRoleChanges, logout]);

  // Setup role change monitoring
  useEffect(() => {
    if (!isAuthenticated || !user) {
      // Clear interval if not authenticated
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = undefined;
      }
      
      // Clear grace period timeout
      if (gracePeriodTimeoutRef.current) {
        clearTimeout(gracePeriodTimeoutRef.current);
        gracePeriodTimeoutRef.current = undefined;
      }
      
      return;
    }

    // Initialize current role
    currentRoleRef.current = user.role;

    // Setup periodic role checks
    checkIntervalRef.current = setInterval(() => {
      checkRoleChanges();
    }, roleConfig.checkInterval);

    // Initial check
    checkRoleChanges();

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
      if (gracePeriodTimeoutRef.current) {
        clearTimeout(gracePeriodTimeoutRef.current);
      }
    };
  }, [isAuthenticated, user, checkRoleChanges, roleConfig.checkInterval]);

  // Update role reference when user changes
  useEffect(() => {
    if (user?.role) {
      currentRoleRef.current = user.role;
    }
  }, [user?.role]);

  // Handle page focus to check for role changes
  useEffect(() => {
    const handleFocus = () => {
      if (isAuthenticated && user) {
        // Check for role changes when page regains focus
        checkRoleChanges();
      }
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [isAuthenticated, user, checkRoleChanges]);

  return {
    currentRole: currentRoleRef.current,
    roleChangeHistory: roleChangeHistoryRef.current,
    checkRoleChanges,
    handleRefreshSession
  };
};