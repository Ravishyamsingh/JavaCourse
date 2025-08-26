import { useState, FormEvent, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from 'firebase/auth';
import { Eye, EyeOff } from 'lucide-react';
import { auth, googleProvider, CONFIG } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockoutEndTime, setLockoutEndTime] = useState<number | null>(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard';

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  useEffect(() => {
    // Check if account is locked
    const storedLockoutEnd = localStorage.getItem('loginLockoutEnd');
    const storedAttempts = localStorage.getItem('loginAttempts');
    
    if (storedLockoutEnd) {
      const lockoutEnd = parseInt(storedLockoutEnd);
      if (Date.now() < lockoutEnd) {
        setIsLocked(true);
        setLockoutEndTime(lockoutEnd);
      } else {
        localStorage.removeItem('loginLockoutEnd');
        localStorage.removeItem('loginAttempts');
        resetLoginAttempts();
      }
    }
    
    if (storedAttempts) {
      setLoginAttempts(parseInt(storedAttempts));
    }

    // Load remembered email
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleEmailPasswordLogin = async (e: FormEvent) => {
    e.preventDefault();
    
    if (isLocked) {
      setError('Account is temporarily locked. Please try again later.');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Handle successful login
      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
      } else {
        localStorage.removeItem('rememberedEmail');
      }
      
      resetLoginAttempts();
      setSuccess('Login successful! Redirecting...');
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
      
    } catch (error: any) {
      console.error('Login error:', error);
      handleLoginError(error);
      incrementLoginAttempts();
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    if (isLocked) {
      setError('Account is temporarily locked. Please try again later.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      
      // Handle successful login
      resetLoginAttempts();
      setSuccess('Google login successful! Redirecting...');
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 1500);
      
    } catch (error: any) {
      console.error('Google login error:', error);
      handleLoginError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccess('Password reset email sent! Check your inbox.');
      setShowForgotPassword(false);
    } catch (error: any) {
      console.error('Password reset error:', error);
      handleLoginError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    if (!email) {
      setError('Email is required');
      return false;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return false;
    }

    if (!password) {
      setError('Password is required');
      return false;
    }

    if (password.length < CONFIG.minPasswordLength) {
      setError(`Password must be at least ${CONFIG.minPasswordLength} characters`);
      return false;
    }

    return true;
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginError = (error: any) => {
    let message = 'Login failed. Please try again.';

    switch (error.code) {
      case 'auth/invalid-email':
        message = 'Invalid email address';
        break;
      case 'auth/user-disabled':
        message = 'This account has been disabled';
        break;
      case 'auth/user-not-found':
        message = 'No account found with this email';
        break;
      case 'auth/wrong-password':
        message = 'Invalid password';
        break;
      case 'auth/too-many-requests':
        message = 'Too many failed attempts. Please try again later.';
        break;
      case 'auth/network-request-failed':
        message = 'Network error. Please check your connection.';
        break;
      case 'auth/popup-closed-by-user':
        message = 'Google sign-in was cancelled.';
        break;
      case 'auth/popup-blocked':
        message = 'Popup was blocked. Please allow popups for this site.';
        break;
      case 'auth/invalid-credential':
        message = 'Invalid email or password.';
        break;
      default:
        message = error.message || 'An unexpected error occurred.';
    }

    setError(message);
  };

  const incrementLoginAttempts = () => {
    const newAttempts = loginAttempts + 1;
    setLoginAttempts(newAttempts);
    localStorage.setItem('loginAttempts', newAttempts.toString());
    
    if (newAttempts >= CONFIG.maxLoginAttempts) {
      const lockoutEnd = Date.now() + CONFIG.lockoutDuration;
      setIsLocked(true);
      setLockoutEndTime(lockoutEnd);
      localStorage.setItem('loginLockoutEnd', lockoutEnd.toString());
      setError(`Too many failed attempts. Account locked for ${CONFIG.lockoutDuration / 60000} minutes.`);
    }
  };

  const resetLoginAttempts = () => {
    setLoginAttempts(0);
    setIsLocked(false);
    setLockoutEndTime(null);
    localStorage.removeItem('loginLockoutEnd');
    localStorage.removeItem('loginAttempts');
  };

  const getRemainingLockoutTime = () => {
    if (!lockoutEndTime) return '';
    const remaining = Math.ceil((lockoutEndTime - Date.now()) / 1000 / 60);
    return `${remaining} minute${remaining !== 1 ? 's' : ''}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            {showForgotPassword ? 'Reset your password' : 'Sign in to your account'}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="mb-4 border-green-200 bg-green-50">
              <AlertDescription className="text-green-800">{success}</AlertDescription>
            </Alert>
          )}
          
          {isLocked && lockoutEndTime && (
            <Alert className="mb-4">
              <AlertDescription>
                Account is locked for {getRemainingLockoutTime()}. Please try again later.
              </AlertDescription>
            </Alert>
          )}

          {showForgotPassword ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reset-email">Email</Label>
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={handleForgotPassword}
                  disabled={isLoading}
                  className="flex-1"
                >
                  {isLoading ? 'Sending...' : 'Send Reset Email'}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowForgotPassword(false)}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <>
              <form onSubmit={handleEmailPasswordLogin}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading || isLocked}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading || isLocked}
                        className="pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading || isLocked}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                        disabled={isLoading || isLocked}
                      />
                      <Label htmlFor="remember" className="text-sm">Remember me</Label>
                    </div>
                    <Button 
                      variant="link" 
                      className="p-0" 
                      type="button"
                      onClick={() => setShowForgotPassword(true)}
                      disabled={isLoading || isLocked}
                    >
                      Forgot password?
                    </Button>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading || isLocked}
                  >
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </Button>
                </div>
              </form>

              <div className="relative my-4">
                <Separator />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoogleLogin}
                disabled={isLoading || isLocked}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Continue with Google
              </Button>
            </>
          )}
        </CardContent>

        {!showForgotPassword && (
          <CardFooter className="flex flex-col items-center justify-center space-y-2">
            <div className="text-sm text-muted-foreground">
              Don't have an account?
            </div>
            <Button variant="link" asChild>
              <a href="/signup">Create account</a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
