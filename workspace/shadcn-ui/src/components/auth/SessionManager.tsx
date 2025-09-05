import React from 'react';
import { useSession } from '@/hooks/useSession';
import { useConcurrentLogin } from '@/hooks/useConcurrentLogin';
import { useRoleChangeDetection } from '@/hooks/useRoleChangeDetection';
import { useAuth } from '@/contexts/AuthContext';
import { useErrorHandler } from '@/utils/errorHandler';

const SessionManager: React.FC = () => {
  const { isAuthenticated, user } = useAuth();
  const { handleError } = useErrorHandler();

  // Initialize session management only when authenticated
  useSession({
    warningTime: 5, // 5 minutes before expiry
    checkInterval: 60000, // check every minute
    inactivityThreshold: 30, // 30 minutes of inactivity
  });

  // Initialize concurrent login detection
  useConcurrentLogin({
    checkInterval: 30000, // 30 seconds
    maxConcurrentSessions: 1,
    forceLogoutOnConflict: true,
    showWarnings: true
  });

  // Initialize role change detection
  useRoleChangeDetection({
    checkInterval: 60000, // 1 minute
    showNotifications: true,
    autoLogoutOnRoleChange: true,
    gracePeriod: 30 // 30 seconds
  });

  // Handle global error events
  React.useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      if (event.error && event.error.message) {
        const message = event.error.message.toLowerCase();
        if (message.includes('auth') || message.includes('token') || message.includes('session')) {
          handleError(event.error, 'global_error_handler');
        }
      }
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason && typeof event.reason === 'object') {
        const reason = event.reason.message || event.reason.toString();
        if (reason.toLowerCase().includes('auth') ||
            reason.toLowerCase().includes('token') ||
            reason.toLowerCase().includes('session')) {
          handleError(event.reason, 'unhandled_promise_rejection');
        }
      }
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [handleError]);

  // Log session management status in development
  React.useEffect(() => {
    if (process.env.NODE_ENV === 'development' && isAuthenticated && user) {
      console.log('🔐 Session Manager Active:', {
        user: user.email,
        role: user.role,
        sessionManagement: 'enabled',
        concurrentLoginDetection: 'enabled',
        roleChangeDetection: 'enabled',
        errorHandling: 'enabled'
      });
    }
  }, [isAuthenticated, user]);

  // This component doesn't render anything, it just manages session state
  return null;
};

export default SessionManager;