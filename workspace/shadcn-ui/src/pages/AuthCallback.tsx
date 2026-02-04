import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { storeAuthData, getDefaultRoute } from '@/lib/auth';

/**
 * Helper to get a cookie value by name
 */
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    return cookieValue ? decodeURIComponent(cookieValue) : null;
  }
  return null;
};

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Check for error parameters
        const error = searchParams.get('error');
        if (error) {
          let errorMessage = 'Authentication failed';
          switch (error) {
            case 'oauth_error':
              errorMessage = 'Google authentication failed. Please try again.';
              break;
            case 'oauth_failed':
              errorMessage = 'Google authentication was not completed.';
              break;
            case 'server_error':
              errorMessage = 'Server error during authentication. Please try again.';
              break;
            default:
              errorMessage = `Authentication error: ${error}`;
          }
          
          toast.error(errorMessage);
          navigate('/login', { replace: true });
          return;
        }

        const authSuccess = searchParams.get('auth');
        const provider = searchParams.get('provider');

        // Check if OAuth was successful - tokens are now in HTTP-only cookies
        if (authSuccess === 'success' && provider === 'google') {
          // Read user data from the userData cookie (non-httpOnly)
          const userDataCookie = getCookie('userData');
          
          if (userDataCookie) {
            try {
              const user = JSON.parse(userDataCookie);
              
              // Note: accessToken and refreshToken are in HTTP-only cookies
              // They will be sent automatically with requests
              // We store a flag in localStorage to indicate authenticated state
              storeAuthData('cookie-auth', '', user);

              // Notify AuthContext listeners
              window.dispatchEvent(new StorageEvent('storage', {
                key: 'auth_access_token',
                newValue: 'cookie-auth',
                oldValue: null,
                storageArea: localStorage
              }));

              toast.success(`Welcome back, ${user.firstName}!`);
              // Redirect based on user role
              const redirectPath = getDefaultRoute(user.role);
              navigate(redirectPath, { replace: true });
              return;
            } catch (parseError) {
              console.error('Failed to parse user data cookie:', parseError);
            }
          }
          
          // Fallback: cookies may be set but userData not readable
          // Try to fetch user profile from API using the cookie-based auth
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/auth/me`, {
              credentials: 'include' // Include cookies
            });
            
            if (response.ok) {
              const data = await response.json();
              if (data.success && data.user) {
                storeAuthData('cookie-auth', '', data.user);
                toast.success(`Welcome back, ${data.user.firstName}!`);
                const redirectPath = getDefaultRoute(data.user.role);
                navigate(redirectPath, { replace: true });
                return;
              }
            }
          } catch (fetchError) {
            console.error('Failed to fetch user profile:', fetchError);
          }
          
          toast.error('Authentication completed but session could not be established. Please try again.');
          navigate('/login', { replace: true });
          return;
        }

        toast.error('No authentication data received');
        navigate('/login', { replace: true });
      } catch (callbackError) {
        toast.error('Failed to process authentication callback');
        navigate('/login', { replace: true });
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Completing Authentication
        </h2>
        <p className="text-gray-600">
          Please wait while we complete your Google Sign-In...
        </p>
      </div>
    </div>
  );
};

export default AuthCallback;