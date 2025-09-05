import { useEffect, useRef, useCallback } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { AuthErrorHandler, AuthErrorCode } from '@/utils/errorHandler';
import { toast } from 'sonner';

interface ConcurrentLoginConfig {
  checkInterval: number; // milliseconds
  maxConcurrentSessions: number;
  forceLogoutOnConflict: boolean;
  showWarnings: boolean;
}

const DEFAULT_CONFIG: ConcurrentLoginConfig = {
  checkInterval: 30000, // 30 seconds
  maxConcurrentSessions: 1,
  forceLogoutOnConflict: true,
  showWarnings: true
};

interface SessionInfo {
  sessionId: string;
  userId: string;
  deviceInfo: string;
  ipAddress: string;
  lastActivity: string;
  userAgent: string;
}

export const useConcurrentLogin = (config: Partial<ConcurrentLoginConfig> = {}) => {
  const { user, logout, isAuthenticated } = useAuth();
  const concurrentConfig = { ...DEFAULT_CONFIG, ...config };
  
  const sessionId = useRef<string>(generateSessionId());
  const checkIntervalRef = useRef<NodeJS.Timeout>();
  const lastCheckRef = useRef<number>(Date.now());

  // Generate unique session ID
  function generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Get device information
  const getDeviceInfo = useCallback((): string => {
    const ua = navigator.userAgent;
    let device = 'Unknown Device';
    
    if (ua.includes('Mobile')) device = 'Mobile Device';
    else if (ua.includes('Tablet')) device = 'Tablet';
    else if (ua.includes('Windows')) device = 'Windows PC';
    else if (ua.includes('Mac')) device = 'Mac';
    else if (ua.includes('Linux')) device = 'Linux PC';
    
    const browser = getBrowserInfo();
    return `${device} (${browser})`;
  }, []);

  const getBrowserInfo = (): string => {
    const ua = navigator.userAgent;
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Safari')) return 'Safari';
    if (ua.includes('Edge')) return 'Edge';
    return 'Unknown Browser';
  };

  // Register current session
  const registerSession = useCallback(async () => {
    if (!user || !isAuthenticated) return;

    try {
      const sessionData = {
        sessionId: sessionId.current,
        userId: user.id,
        deviceInfo: getDeviceInfo(),
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      };

      const response = await fetch('/api/auth/sessions/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_access_token')}`
        },
        body: JSON.stringify(sessionData)
      });

      if (!response.ok) {
        throw new Error('Failed to register session');
      }

      const result = await response.json();
      
      if (result.conflictingSessions && result.conflictingSessions.length > 0) {
        handleConcurrentSessions(result.conflictingSessions);
      }

    } catch (error) {
      console.error('Session registration error:', error);
    }
  }, [user, isAuthenticated, getDeviceInfo]);

  // Check for concurrent sessions
  const checkConcurrentSessions = useCallback(async () => {
    if (!user || !isAuthenticated) return;

    try {
      const response = await fetch('/api/auth/sessions/check', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_access_token')}`,
          'X-Session-ID': sessionId.current
        }
      });

      if (!response.ok) {
        if (response.status === 409) {
          // Concurrent session detected
          const data = await response.json();
          handleConcurrentSessions(data.sessions);
        }
        return;
      }

      const data = await response.json();
      
      if (data.sessions && data.sessions.length > concurrentConfig.maxConcurrentSessions) {
        handleConcurrentSessions(data.sessions);
      }

      // Check if current session is still valid
      if (data.currentSessionValid === false) {
        handleSessionInvalidated();
      }

    } catch (error) {
      console.error('Concurrent session check error:', error);
    }
  }, [user, isAuthenticated, concurrentConfig.maxConcurrentSessions]);

  // Handle concurrent sessions detected
  const handleConcurrentSessions = useCallback((sessions: SessionInfo[]) => {
    const otherSessions = sessions.filter(s => s.sessionId !== sessionId.current);
    
    if (otherSessions.length === 0) return;

    if (concurrentConfig.showWarnings) {
      const deviceList = otherSessions.map(s => s.deviceInfo).join(', ');
      
      toast.warning(`Your account is active on other devices: ${deviceList}`, {
        duration: 10000,
        action: {
          label: 'Secure Account',
          onClick: () => showConcurrentLoginDialog(otherSessions)
        }
      });
    }

    if (concurrentConfig.forceLogoutOnConflict) {
      setTimeout(() => {
        handleForceLogout('Concurrent login detected from another device');
      }, 5000); // Give user 5 seconds to see the warning
    }

  }, [concurrentConfig.showWarnings, concurrentConfig.forceLogoutOnConflict]);

  // Show concurrent login dialog
  const showConcurrentLoginDialog = useCallback((sessions: SessionInfo[]) => {
    const message = `Your account is currently active on ${sessions.length} other device(s):\n\n` +
      sessions.map(s => `• ${s.deviceInfo} (Last active: ${new Date(s.lastActivity).toLocaleString()})`).join('\n') +
      '\n\nWhat would you like to do?';

    const choice = confirm(message + '\n\nClick OK to terminate other sessions, or Cancel to continue with multiple sessions.');
    
    if (choice) {
      terminateOtherSessions();
    }
  }, []);

  // Terminate other sessions
  const terminateOtherSessions = useCallback(async () => {
    try {
      const response = await fetch('/api/auth/sessions/terminate-others', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_access_token')}`,
          'X-Session-ID': sessionId.current
        }
      });

      if (response.ok) {
        toast.success('Other sessions have been terminated successfully');
      } else {
        throw new Error('Failed to terminate other sessions');
      }
    } catch (error) {
      AuthErrorHandler.handleError(error as Error, 'terminate_other_sessions');
    }
  }, []);

  // Handle session invalidated
  const handleSessionInvalidated = useCallback(async () => {
    const error = AuthErrorHandler.createError(
      AuthErrorCode.CONCURRENT_LOGIN,
      { sessionId: sessionId.current }
    );
    
    AuthErrorHandler.handleError(error, 'session_invalidated');
    
    // Force logout after a short delay
    setTimeout(async () => {
      await logout();
    }, 2000);
  }, [logout]);

  // Handle force logout
  const handleForceLogout = useCallback(async (reason: string) => {
    toast.error(`Logging out: ${reason}`, { duration: 3000 });
    
    setTimeout(async () => {
      await logout();
    }, 3000);
  }, [logout]);

  // Update session activity
  const updateSessionActivity = useCallback(async () => {
    if (!user || !isAuthenticated) return;

    try {
      await fetch('/api/auth/sessions/activity', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_access_token')}`,
          'X-Session-ID': sessionId.current
        }
      });
    } catch (error) {
      // Silent fail for activity updates
      console.debug('Session activity update failed:', error);
    }
  }, [user, isAuthenticated]);

  // Setup concurrent login monitoring
  useEffect(() => {
    if (!isAuthenticated || !user) {
      // Clear interval if not authenticated
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
        checkIntervalRef.current = undefined;
      }
      return;
    }

    // Register session on mount
    registerSession();

    // Setup periodic checks
    checkIntervalRef.current = setInterval(() => {
      checkConcurrentSessions();
      updateSessionActivity();
    }, concurrentConfig.checkInterval);

    return () => {
      if (checkIntervalRef.current) {
        clearInterval(checkIntervalRef.current);
      }
    };
  }, [
    isAuthenticated,
    user,
    registerSession,
    checkConcurrentSessions,
    updateSessionActivity,
    concurrentConfig.checkInterval
  ]);

  // Handle page visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isAuthenticated) {
        // Check for concurrent sessions when page becomes visible
        checkConcurrentSessions();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isAuthenticated, checkConcurrentSessions]);

  // Handle beforeunload to cleanup session
  useEffect(() => {
    const handleBeforeUnload = async () => {
      if (isAuthenticated && user) {
        // Mark session as ended
        navigator.sendBeacon('/api/auth/sessions/end', JSON.stringify({
          sessionId: sessionId.current,
          userId: user.id
        }));
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isAuthenticated, user]);

  return {
    sessionId: sessionId.current,
    terminateOtherSessions,
    checkConcurrentSessions,
    updateSessionActivity
  };
};