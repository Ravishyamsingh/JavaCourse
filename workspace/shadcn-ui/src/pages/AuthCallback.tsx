import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const auth = useAuth();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        console.log('🔄 Processing OAuth callback...');
        
        // Check for error parameters
        const error = searchParams.get('error');
        if (error) {
          console.error('❌ OAuth error:', error);
          
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

        // Check for success parameters from secure cookie-based flow
        const authSuccess = searchParams.get('auth');
        const provider = searchParams.get('provider');
        
        if (authSuccess === 'success' && provider === 'google') {
          console.log('✅ OAuth callback successful, checking for auth data...');
          
          // Check if auth data is available in cookies (new secure method)
          const checkCookieAuthData = () => {
            // Try to get user data from cookie
            const userDataCookie = document.cookie
              .split('; ')
              .find(row => row.startsWith('userData='));
            
            if (userDataCookie) {
              try {
                const userData = userDataCookie.split('=')[1];
                const user = JSON.parse(decodeURIComponent(userData));
                console.log('✅ Auth data found in cookies, user authenticated:', user.email);
                
                // Store in localStorage for AuthContext compatibility
                localStorage.setItem('auth_user', JSON.stringify(user));
                
                // Create a dummy token for AuthContext (actual auth is via cookies)
                localStorage.setItem('auth_access_token', 'cookie-based-auth');
                localStorage.setItem('auth_refresh_token', 'cookie-based-refresh');
                
                // Trigger auth context update
                window.dispatchEvent(new StorageEvent('storage', {
                  key: 'auth_access_token',
                  newValue: 'cookie-based-auth',
                  oldValue: null,
                  storageArea: localStorage
                }));
                
                toast.success(`Welcome back, ${user.firstName}!`);
                
                // Navigate based on user role
                switch (user.role) {
                  case 'superadmin':
                    navigate('/super-admin-panel', { replace: true });
                    break;
                  case 'admin':
                    navigate('/admin-panel', { replace: true });
                    break;
                  case 'user':
                    navigate('/dashboard', { replace: true });
                    break;
                  case 'guest':
                  default:
                    navigate('/guest-dashboard', { replace: true });
                    break;
                }
                return true;
              } catch (parseError) {
                console.error('❌ Error parsing user data from cookie:', parseError);
                return false;
              }
            }
            
            // Fallback: check localStorage (legacy method)
            const accessToken = localStorage.getItem('auth_access_token');
            const userData = localStorage.getItem('auth_user');
            
            if (accessToken && userData) {
              try {
                const user = JSON.parse(userData);
                console.log('✅ Auth data found in localStorage, user authenticated:', user.email);
                
                toast.success(`Welcome back, ${user.firstName}!`);
                
                // Navigate based on user role
                switch (user.role) {
                  case 'superadmin':
                    navigate('/super-admin-panel', { replace: true });
                    break;
                  case 'admin':
                    navigate('/admin-panel', { replace: true });
                    break;
                  case 'user':
                    navigate('/dashboard', { replace: true });
                    break;
                  case 'guest':
                  default:
                    navigate('/guest-dashboard', { replace: true });
                    break;
                }
                return true;
              } catch (parseError) {
                console.error('❌ Error parsing user data from localStorage:', parseError);
                return false;
              }
            }
            return false;
          };

          // Check immediately
          if (checkCookieAuthData()) {
            return;
          }

          // If not found immediately, wait a bit for cookies to be set
          setTimeout(() => {
            if (checkCookieAuthData()) {
              return;
            }
            
            // If still not found, there might be an issue
            console.warn('⚠️ Auth data not found after callback');
            toast.error('Authentication completed but session data not found. Please try logging in again.');
            navigate('/login', { replace: true });
          }, 2000);
          
        } else {
          // No success parameter, might be an old-style callback with tokens in URL
          const accessToken = searchParams.get('accessToken');
          const refreshToken = searchParams.get('refreshToken');
          const userParam = searchParams.get('user');
          
          if (accessToken && userParam) {
            try {
              const user = JSON.parse(userParam);
              const tokens = { accessToken, refreshToken: refreshToken || '' };
              
              console.log('✅ Processing legacy token-based callback');
              
              // Store auth data manually since handleGoogleCallback doesn't exist
              localStorage.setItem('auth_access_token', tokens.accessToken);
              localStorage.setItem('auth_refresh_token', tokens.refreshToken);
              localStorage.setItem('auth_user', JSON.stringify(user));
              
              // Trigger auth context update
              window.dispatchEvent(new StorageEvent('storage', {
                key: 'auth_access_token',
                newValue: tokens.accessToken,
                oldValue: null,
                storageArea: localStorage
              }));
              
              // Navigate based on user role
              switch (user.role) {
                case 'superadmin':
                  navigate('/super-admin-panel', { replace: true });
                  break;
                case 'admin':
                  navigate('/admin-panel', { replace: true });
                  break;
                case 'user':
                  navigate('/dashboard', { replace: true });
                  break;
                case 'guest':
                default:
                  navigate('/guest-dashboard', { replace: true });
                  break;
              }
            } catch (parseError) {
              console.error('❌ Error parsing callback data:', parseError);
              toast.error('Invalid authentication data received');
              navigate('/login', { replace: true });
            }
          } else {
            console.warn('⚠️ No authentication data found in callback');
            toast.error('No authentication data received');
            navigate('/login', { replace: true });
          }
        }
      } catch (callbackError) {
        console.error('❌ Callback processing error:', callbackError);
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