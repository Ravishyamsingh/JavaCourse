import React, { useEffect, useRef, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Chrome, Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

import { storeAuthData } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';

// Import centralized Google types
import type {
  GoogleCredentialResponse,
  GooglePromptNotification
} from '@/types/google';

interface GoogleSignInProps {
  onSuccess?: (user: any) => void;
  onError?: (error: any) => void;
  disabled?: boolean;
  className?: string;
}

const GoogleSignIn: React.FC<GoogleSignInProps> = ({
  onSuccess,
  onError,
  disabled = false,
  className = ''
}) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const scriptLoaded = useRef(false);
  const scriptLoading = useRef(false);
  const { getRoleDisplayName } = useAuth();
  const navigate = useNavigate();

  // Force AuthContext to detect localStorage changes
  const forceAuthUpdate = () => {
    // Dispatch a custom event to trigger AuthContext update
    window.dispatchEvent(new StorageEvent('storage', {
      key: 'auth_access_token',
      newValue: localStorage.getItem('auth_access_token'),
      oldValue: null,
      storageArea: localStorage
    }));
  };

  // Check if Google Sign-In script is loaded (now included in HTML)
  const checkGoogleScript = useCallback(() => {
    if (scriptLoaded.current) return;

    console.log('🔍 Checking for Google Sign-In script...');
    console.log('🌐 Browser:', navigator.userAgent);

    // Check if Google Identity Services is available
    if (window.google?.accounts?.id) {
      console.log('✅ Google Sign-In script already loaded from HTML');
      scriptLoaded.current = true;
      initializeGoogleSignIn();
      return;
    }

    // If not available, wait a bit and try again
    console.log('⏳ Waiting for Google Sign-In script to load...');
    setTimeout(() => {
      if (window.google?.accounts?.id) {
        console.log('✅ Google Sign-In script loaded successfully');
        scriptLoaded.current = true;
        initializeGoogleSignIn();
      } else {
        console.error('❌ Google Sign-In script failed to load');
        toast.error('Failed to load Google authentication. Please refresh the page and try again.');
      }
    }, 2000); // Wait 2 seconds for script to load
  }, []);
  
  // Initialize Google Sign-In with browser compatibility
  const initializeGoogleSignIn = useCallback(() => {
    // Check if Google Identity Services is available
    if (!window.google?.accounts?.id) {
      console.error('❌ Google Identity Services not available');
      console.log('🔍 Checking if script loaded properly...');

      // Try to reload script if not available
      setTimeout(() => {
        if (!window.google?.accounts?.id) {
          console.error('❌ Google Identity Services still not available after retry');
          toast.error('Google authentication is not available. Please refresh the page and try again.');
        } else {
          console.log('✅ Google Identity Services became available');
          initializeGoogleSignIn();
        }
      }, 2000);
      return;
    }

    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

    if (!clientId) {
      console.error('❌ Google Client ID not configured properly');
      console.log('📝 Please set VITE_GOOGLE_CLIENT_ID in .env file');
      toast.error('Google authentication is not properly configured');
      return;
    }

    console.log('🔑 Initializing Google Sign-In with Client ID:', clientId.substring(0, 20) + '...');
    console.log('🌐 Browser User Agent:', navigator.userAgent);

    try {
      // Browser-specific configuration
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

      console.log('📱 Mobile device:', isMobile);
      console.log('🦊 Firefox browser:', isFirefox);
      console.log('🧭 Safari browser:', isSafari);

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleGoogleResponse,
        auto_select: false,
        cancel_on_tap_outside: true
      });

      console.log('✅ Google Sign-In initialized successfully');
      console.log('🔧 Configuration:', {
        context: isMobile ? 'signin' : 'signup',
        ux_mode: isMobile ? 'redirect' : 'popup',
        mobile: isMobile,
        firefox: isFirefox,
        safari: isSafari
      });

    } catch (error) {
      console.error('❌ Failed to initialize Google Sign-In:', error);
      console.error('🔍 Error details:', {
        message: error.message,
        stack: error.stack,
        browser: navigator.userAgent
      });
      toast.error('Failed to initialize Google authentication. Please try a different browser or refresh the page.');
    }
  }, []);
  
  // Check for Google script on component mount
  useEffect(() => {
    checkGoogleScript();
    
    return () => {
      // Cleanup if needed
    };
  }, [checkGoogleScript]);

  const handleGoogleResponse = async (response: GoogleCredentialResponse) => {
    setIsLoading(true);
    try {
      console.log('🔐 Google Sign-In response received');
      console.log('🔑 Credential token length:', response.credential?.length);

      // Get API URL from environment variables
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
      console.log('📍 Using API URL:', API_URL);

      // Send the credential token to our backend
      const apiResponse = await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: response.credential
        }),
      });

      if (!apiResponse.ok) {
        const errorText = await apiResponse.text();
        console.error('❌ Google auth API error:', apiResponse.status, errorText);
        throw new Error(`Authentication failed (${apiResponse.status})`);
      }

      const data = await apiResponse.json();

      if (data.success) {
        // Use our utility function to store auth data consistently
        const accessToken = data.accessToken || data.token;
        const refreshToken = data.refreshToken || '';

        storeAuthData(accessToken, refreshToken, data.user);

        console.log('✅ Auth data stored successfully');
        console.log('👤 User role:', data.user.role);

        toast.success(`Welcome, ${data.user.firstName}!`);

        // Force AuthContext to detect the localStorage changes
        forceAuthUpdate();

        if (onSuccess) {
          onSuccess(data.user);
        }

        // Navigate based on user role
        const userRole = data.user.role;
        let redirectPath = '/dashboard'; // default

        switch (userRole) {
          case 'superadmin':
            redirectPath = '/super-admin';
            break;
          case 'admin':
            redirectPath = '/admin';
            break;
          case 'user':
            redirectPath = '/dashboard';
            break;
          case 'guest':
          default:
            redirectPath = '/';
            break;
        }

        console.log('🔄 Redirecting to:', redirectPath);
        navigate(redirectPath, { replace: true });
      } else {
        throw new Error(data.message || 'Google authentication failed');
      }
    } catch (error) {
      console.error('❌ Google Sign-In error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Google authentication failed';
      toast.error(errorMessage);
      
      if (onError) {
        onError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    console.log('🚀 Starting Google Sign-In process...');
    
    // Use backend OAuth redirect to bypass CORS issues
    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    
    setIsLoading(true);
    
    try {
      // Check if Google script is available for frontend flow
      if (window.google?.accounts?.id) {
        console.log('✅ Using frontend Google Sign-In flow');
        
        window.google.accounts.id.prompt((notification?: GooglePromptNotification) => {
          console.log('📣 Google prompt notification:', notification?.getNotDisplayedReason?.() || 'Displayed');

          if (notification?.isNotDisplayed?.()) {
            const reason = notification.getNotDisplayedReason?.();
            console.log('⚠️ Frontend flow failed, falling back to backend redirect. Reason:', reason);
            
            // Fallback to backend redirect
            console.log('🔄 Redirecting to backend OAuth flow...');
            window.location.href = `${API_URL}/auth/google`;
            return;
          }
          
          if (notification?.isSkippedMoment?.()) {
            console.log('⚠️ Sign-In prompt skipped, falling back to backend redirect');
            window.location.href = `${API_URL}/auth/google`;
            return;
          }

          setIsLoading(false);
        });
      } else {
        // No Google script available, use backend redirect
        console.log('🔄 Google script not available, using backend OAuth redirect...');
        toast.info('Redirecting to Google Sign-In...', {
          description: 'You will be redirected to Google for authentication'
        });
        
        // Small delay to show the toast message
        setTimeout(() => {
          window.location.href = `${API_URL}/auth/google`;
        }, 1000);
      }
    } catch (error) {
      console.error('❌ Error with Google Sign-In, falling back to backend redirect:', error);
      
      // Always fallback to backend redirect if frontend fails
      toast.info('Redirecting to Google Sign-In...', {
        description: 'Using secure backend authentication flow'
      });
      
      setTimeout(() => {
        window.location.href = `${API_URL}/auth/google`;
      }, 1000);
    }
  }
  
  // Render Google Sign-In button as fallback
  const renderGoogleButton = () => {
    try {
      const buttonContainer = document.getElementById('google-signin-button');
      if (buttonContainer && window.google?.accounts?.id) {
        // Clear previous content
        buttonContainer.innerHTML = '';
        buttonContainer.style.display = 'block';
        
        console.log('🔄 Rendering Google Sign-In button as fallback...');
        
        window.google.accounts.id.renderButton(buttonContainer, {
          theme: 'outline',
          size: 'large',
          width: 400,
          text: 'continue_with'
        });
      }
    } catch (error) {
      console.error('❌ Error rendering Google button:', error);
      toast.error('Failed to load Google Sign-In button');
    }
  };

  return (
    <div className={className}>
      <Button
        type="button"
        variant="outline"
        onClick={handleGoogleSignIn}
        className="w-full h-12 border-2 hover:bg-gray-50 transition-colors"
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-5 w-5 mr-3 animate-spin" />
        ) : (
          <Chrome className="h-5 w-5 mr-3 text-red-500" />
        )}
        <span className="font-medium">
          {isLoading ? 'Signing in...' : 'Continue with Google'}
        </span>
      </Button>
      
      {/* Hidden div for Google button rendering */}
      <div id="google-signin-button" style={{ display: 'none' }}></div>
    </div>
  );
};

export default GoogleSignIn;