import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, XCircle, Loader2, User, Shield, Navigation } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { getAuthData, clearAuthData } from '@/lib/auth';
import GoogleSignIn from '@/components/GoogleSignIn';
import { toast } from 'sonner';

const GoogleOAuthTest: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [testResults, setTestResults] = useState<any>({});
  const [isTesting, setIsTesting] = useState(false);

  // Test authentication state
  useEffect(() => {
    const runAuthTests = async () => {
      setIsTesting(true);

      const results: any = {};

      try {
        // Test 1: Check localStorage data
        const authData = getAuthData();
        results.localStorage = {
          hasAccessToken: !!authData?.accessToken,
          hasRefreshToken: !!authData?.refreshToken,
          hasUser: !!authData?.user,
          userRole: authData?.user?.role || 'none'
        };

        // Test 2: Check AuthContext state
        results.authContext = {
          isAuthenticated,
          hasUser: !!user,
          userRole: user?.role || 'none',
          userEmail: user?.email || 'none'
        };

        // Test 3: Check API connectivity
        try {
          const response = await fetch('http://localhost:5000/api/health');
          results.apiConnectivity = {
            status: response.ok ? 'success' : 'failed',
            statusCode: response.status
          };
        } catch (error) {
          results.apiConnectivity = {
            status: 'error',
            error: 'Cannot connect to API'
          };
        }

        // Test 4: Check Google OAuth configuration
        const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
        const apiUrl = import.meta.env.VITE_API_URL;

        results.googleConfig = {
          hasClientId: !!clientId,
          hasApiUrl: !!apiUrl,
          clientIdLength: clientId?.length || 0,
          apiUrl: apiUrl || 'none'
        };

        setTestResults(results);
      } catch (error) {
        console.error('Test execution error:', error);
        toast.error('Test execution failed');
      } finally {
        setIsTesting(false);
      }
    };

    runAuthTests();
  }, [user, isAuthenticated]);

  const handleGoogleSuccess = (userData: any) => {
    console.log('Google OAuth Success:', userData);
    toast.success(`Successfully authenticated as ${userData.firstName}!`);
  };

  const handleGoogleError = (error: any) => {
    console.error('Google OAuth Error:', error);
    toast.error('Google authentication failed');
  };

  const clearAllAuthData = () => {
    clearAuthData();
    toast.success('All authentication data cleared');
    // Force page reload to reset state
    setTimeout(() => window.location.reload(), 1000);
  };

  const TestResult = ({ title, result, success }: { title: string; result: any; success: boolean }) => (
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center gap-3">
        {success ? (
          <CheckCircle className="h-5 w-5 text-green-500" />
        ) : (
          <XCircle className="h-5 w-5 text-red-500" />
        )}
        <span className="font-medium">{title}</span>
      </div>
      <div className="text-sm text-gray-600">
        {typeof result === 'object' ? JSON.stringify(result, null, 2) : result}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Google OAuth Test Suite</h1>
          <p className="text-gray-600">Comprehensive testing for Google authentication and role-based navigation</p>
        </div>

        {/* Current Auth Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Current Authentication Status
            </CardTitle>
            <CardDescription>
              Real-time authentication state and user information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm text-gray-700">Authentication State</h3>
                <div className="flex items-center gap-2">
                  <Badge variant={isAuthenticated ? "default" : "secondary"}>
                    {isAuthenticated ? "Authenticated" : "Not Authenticated"}
                  </Badge>
                  {user?.role && (
                    <Badge variant="outline">
                      {user.role}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-sm text-gray-700">User Information</h3>
                {user ? (
                  <div className="text-sm">
                    <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Provider:</strong> {user.provider}</p>
                  </div>
                ) : (
                  <p className="text-gray-500">No user data available</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Google OAuth Test */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Google OAuth Authentication Test
            </CardTitle>
            <CardDescription>
              Test the complete Google OAuth flow and role-based navigation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isAuthenticated ? (
              <div className="space-y-4">
                <Alert>
                  <AlertDescription>
                    Click the Google Sign-In button below to test the OAuth flow.
                    After successful authentication, you should be automatically redirected
                    to the appropriate dashboard based on your user role.
                  </AlertDescription>
                </Alert>

                <div className="flex justify-center">
                  <GoogleSignIn
                    onSuccess={handleGoogleSuccess}
                    onError={handleGoogleError}
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    You are currently authenticated! The Google OAuth flow is working correctly.
                  </AlertDescription>
                </Alert>

                <div className="flex gap-2">
                  <Button onClick={logout} variant="outline">
                    Logout
                  </Button>
                  <Button onClick={clearAllAuthData} variant="destructive">
                    Clear All Auth Data
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* System Tests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Navigation className="h-5 w-5" />
              System Integration Tests
            </CardTitle>
            <CardDescription>
              Automated tests for system components and configuration
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isTesting ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-6 w-6 animate-spin mr-2" />
                Running tests...
              </div>
            ) : (
              <div className="space-y-3">
                <TestResult
                  title="LocalStorage Data"
                  result={testResults.localStorage}
                  success={testResults.localStorage?.hasAccessToken && testResults.localStorage?.hasUser}
                />

                <TestResult
                  title="AuthContext State"
                  result={testResults.authContext}
                  success={testResults.authContext?.isAuthenticated === isAuthenticated}
                />

                <TestResult
                  title="API Connectivity"
                  result={testResults.apiConnectivity}
                  success={testResults.apiConnectivity?.status === 'success'}
                />

                <TestResult
                  title="Google Configuration"
                  result={testResults.googleConfig}
                  success={testResults.googleConfig?.hasClientId && testResults.googleConfig?.hasApiUrl}
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Role-Based Navigation Test */}
        <Card>
          <CardHeader>
            <CardTitle>Role-Based Navigation Test</CardTitle>
            <CardDescription>
              Test navigation paths for different user roles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-sm">Expected Navigation Paths</h3>
                <div className="text-sm space-y-1">
                  <p><strong>Super Admin:</strong> /super-admin</p>
                  <p><strong>Admin:</strong> /admin</p>
                  <p><strong>User:</strong> /dashboard</p>
                  <p><strong>Guest:</strong> /</p>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold text-sm">Current User Path</h3>
                {user ? (
                  <div className="text-sm">
                    <p><strong>Role:</strong> {user.role}</p>
                    <p><strong>Expected Path:</strong>
                      {user.role === 'superadmin' ? '/super-admin' :
                       user.role === 'admin' ? '/admin' :
                       user.role === 'user' ? '/dashboard' : '/'}
                    </p>
                    <p><strong>Current Path:</strong> {window.location.pathname}</p>
                  </div>
                ) : (
                  <p className="text-gray-500">No user authenticated</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Instructions */}
        <Card>
          <CardHeader>
            <CardTitle>Test Instructions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">1. Test Google OAuth Flow</h4>
                <p>Click the "Continue with Google" button. You should be redirected to Google's consent screen, then back to the application with automatic role-based navigation.</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">2. Test Role-Based Navigation</h4>
                <p>After authentication, verify that you're redirected to the correct dashboard based on your user role. Check the "Current User Path" section above.</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">3. Test System Integration</h4>
                <p>Review the "System Integration Tests" section to ensure all components are working correctly.</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">4. Test Logout Flow</h4>
                <p>Use the "Logout" button to test the logout functionality and verify that authentication data is properly cleared.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GoogleOAuthTest;