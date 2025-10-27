import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { storeAuthData } from '@/lib/auth';

const AuthCallback: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

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

        const accessToken = searchParams.get('accessToken');
        const refreshToken = searchParams.get('refreshToken') || '';
        const userParam = searchParams.get('user');

        if (accessToken && userParam) {
          try {
            const user = JSON.parse(userParam);
            console.log('✅ OAuth callback received valid tokens for:', user.email);

            storeAuthData(accessToken, refreshToken, user);

            // Notify AuthContext listeners
            window.dispatchEvent(new StorageEvent('storage', {
              key: 'auth_access_token',
              newValue: accessToken,
              oldValue: null,
              storageArea: localStorage
            }));

            toast.success(`Welcome back, ${user.firstName}!`);
            navigate('/', { replace: true });
            return;
          } catch (parseError) {
            console.error('❌ Error parsing OAuth user payload:', parseError);
            toast.error('Authentication data was corrupted. Please try again.');
            navigate('/login', { replace: true });
            return;
          }
        }

        const authSuccess = searchParams.get('auth');
        const provider = searchParams.get('provider');

        if (authSuccess === 'success' && provider === 'google') {
          console.warn('⚠️ OAuth reported success but no tokens were received');
          toast.error('Authentication completed without session tokens. Please try logging in again.');
          navigate('/login', { replace: true });
          return;
        }

        console.warn('⚠️ No authentication data found in callback');
        toast.error('No authentication data received');
        navigate('/login', { replace: true });
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