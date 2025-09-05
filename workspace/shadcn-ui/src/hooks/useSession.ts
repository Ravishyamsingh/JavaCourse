import { useEffect, useRef, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole, SESSION_DURATION } from '@/types/auth';
import { toast } from 'sonner';

interface SessionConfig {
  warningTime: number; // minutes before expiry to show warning
  checkInterval: number; // milliseconds between activity checks
  inactivityThreshold: number; // minutes of inactivity before logout
}

const DEFAULT_CONFIG: SessionConfig = {
  warningTime: 5, // 5 minutes before expiry
  checkInterval: 60000, // check every minute
  inactivityThreshold: 30, // 30 minutes of inactivity
};

export const useSession = (config: Partial<SessionConfig> = {}) => {
  const { user, logout, isAuthenticated, refreshToken } = useAuth();
  const sessionConfig = { ...DEFAULT_CONFIG, ...config };

  const lastActivityRef = useRef<number>(Date.now());
  const warningShownRef = useRef<boolean>(false);
  const expiryWarningTimeoutRef = useRef<NodeJS.Timeout>();
  const activityCheckIntervalRef = useRef<NodeJS.Timeout>();
  const sessionExpiryTimeoutRef = useRef<NodeJS.Timeout>();

  // Get session duration for current user role
  const getSessionDuration = useCallback((role?: UserRole): number => {
    if (!role) return SESSION_DURATION[UserRole.GUEST];
    return SESSION_DURATION[role] || SESSION_DURATION[UserRole.USER];
  }, []);

  // Calculate session expiry time
  const getSessionExpiry = useCallback((): number => {
    if (!user) return Date.now();
    const duration = getSessionDuration(user.role);
    return Date.now() + (duration * 60 * 60 * 1000); // convert hours to milliseconds
  }, [user, getSessionDuration]);

  // Update last activity timestamp
  const updateActivity = useCallback(() => {
    lastActivityRef.current = Date.now();
  }, []);

  // Check if session is expired
  const isSessionExpired = useCallback((): boolean => {
    if (!user) return false;
    const expiryTime = getSessionExpiry();
    return Date.now() > expiryTime;
  }, [user, getSessionExpiry]);

  // Check if user has been inactive too long
  const isInactive = useCallback((): boolean => {
    const inactiveTime = Date.now() - lastActivityRef.current;
    const threshold = sessionConfig.inactivityThreshold * 60 * 1000; // convert to milliseconds
    return inactiveTime > threshold;
  }, [sessionConfig.inactivityThreshold]);

  // Show expiry warning
  const showExpiryWarning = useCallback(() => {
    if (warningShownRef.current) return;

    const timeLeft = Math.ceil((getSessionExpiry() - Date.now()) / (1000 * 60)); // minutes
    toast.warning(`Your session will expire in ${timeLeft} minutes. Please save your work.`, {
      duration: 10000,
      action: {
        label: 'Extend Session',
        onClick: () => extendSession(),
      },
    });
    warningShownRef.current = true;
  }, [getSessionExpiry]);

  // Extend session by refreshing token
  const extendSession = useCallback(async () => {
    try {
      await refreshToken();
      warningShownRef.current = false;
      toast.success('Session extended successfully');
      setupSessionTimers();
    } catch (error) {
      console.error('Failed to extend session:', error);
      toast.error('Failed to extend session. Please sign in again.');
    }
  }, [refreshToken]);

  // Handle session expiry
  const handleSessionExpiry = useCallback(async () => {
    try {
      await logout();
      toast.error('Your session has expired. Please sign in again.');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }, [logout]);

  // Handle inactivity logout
  const handleInactivityLogout = useCallback(async () => {
    try {
      await logout();
      toast.error('You have been logged out due to inactivity.');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }, [logout]);

  // Setup session timers
  const setupSessionTimers = useCallback(() => {
    if (!user || !isAuthenticated) return;

    // Clear existing timers
    if (expiryWarningTimeoutRef.current) {
      clearTimeout(expiryWarningTimeoutRef.current);
    }
    if (activityCheckIntervalRef.current) {
      clearInterval(activityCheckIntervalRef.current);
    }
    if (sessionExpiryTimeoutRef.current) {
      clearTimeout(sessionExpiryTimeoutRef.current);
    }

    const expiryTime = getSessionExpiry();
    const warningTime = expiryTime - (sessionConfig.warningTime * 60 * 1000);

    // Setup expiry warning timer
    if (warningTime > Date.now()) {
      expiryWarningTimeoutRef.current = setTimeout(() => {
        showExpiryWarning();
      }, warningTime - Date.now());
    }

    // Setup session expiry timer
    sessionExpiryTimeoutRef.current = setTimeout(() => {
      handleSessionExpiry();
    }, expiryTime - Date.now());

    // Setup activity check interval
    activityCheckIntervalRef.current = setInterval(() => {
      if (isInactive()) {
        handleInactivityLogout();
      }
    }, sessionConfig.checkInterval);

  }, [
    user,
    isAuthenticated,
    getSessionExpiry,
    sessionConfig.warningTime,
    sessionConfig.checkInterval,
    showExpiryWarning,
    handleSessionExpiry,
    isInactive,
    handleInactivityLogout
  ]);

  // Setup activity listeners
  const setupActivityListeners = useCallback(() => {
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];

    const handleActivity = () => {
      updateActivity();
    };

    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [updateActivity]);

  // Cleanup timers
  const cleanup = useCallback(() => {
    if (expiryWarningTimeoutRef.current) {
      clearTimeout(expiryWarningTimeoutRef.current);
    }
    if (activityCheckIntervalRef.current) {
      clearInterval(activityCheckIntervalRef.current);
    }
    if (sessionExpiryTimeoutRef.current) {
      clearTimeout(sessionExpiryTimeoutRef.current);
    }
  }, []);

  // Initialize session management
  useEffect(() => {
    if (isAuthenticated && user) {
      updateActivity();
      setupSessionTimers();
      const cleanupListeners = setupActivityListeners();

      return () => {
        cleanup();
        cleanupListeners();
      };
    } else {
      cleanup();
    }
  }, [isAuthenticated, user, setupSessionTimers, setupActivityListeners, cleanup, updateActivity]);

  // Reset warning flag when user changes
  useEffect(() => {
    warningShownRef.current = false;
  }, [user]);

  return {
    sessionDuration: user ? getSessionDuration(user.role) : 0,
    timeUntilExpiry: user ? Math.max(0, getSessionExpiry() - Date.now()) : 0,
    isSessionExpired: isSessionExpired(),
    isInactive: isInactive(),
    extendSession,
    updateActivity,
    getSessionExpiry: () => getSessionExpiry(),
  };
};