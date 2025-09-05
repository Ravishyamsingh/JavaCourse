import apiClient from '@/lib/api';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  provider: 'local' | 'google';
  progress?: {
    completedLessons: string[];
    completedQuizzes: string[];
    achievements: string[];
    certificatesEarned: string[];
    totalScore: number;
  };
}

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}

class AuthService {
  // Regular email/password signup
  async signup(data: SignupData): Promise<AuthResponse> {
    try {
      const response = await apiClient.post('/auth/signup', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Signup failed');
    }
  }

  // Regular email/password login
  async login(data: LoginData): Promise<AuthResponse> {
    try {
      const response = await apiClient.post('/auth/login', data);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  }

  // Google OAuth login
  async googleLogin(googleToken: string): Promise<AuthResponse> {
    try {
      console.log('🔍 Attempting Google login...');
      console.log('📍 API Base URL:', import.meta.env.VITE_API_BASE_URL);
      console.log('🎫 Token length:', googleToken.length);
      
      const response = await apiClient.post('/auth/google', {
        token: googleToken
      });
      
      console.log('✅ Google login successful, status:', response.status);
      
      if (!response.data.success) {
        console.error('❌ Google login failed with error:', response.data.message);
        throw new Error(response.data.message);
      }
      
      return response.data;
    } catch (error: any) {
      console.error('❌ Google login failed:', error);
      
      // Enhanced error handling for better debugging
      if (error.code === 'ECONNREFUSED') {
        throw new Error('Backend server is not running. Please start the server on port 8000.');
      }
      
      if (error.response?.status === 404) {
        console.error('🔍 Request URL:', error.config?.url);
        console.error('🔍 Base URL:', error.config?.baseURL);
        throw new Error('Google OAuth endpoint not found. Check server configuration.');
      }
      
      if (error.response?.status === 401) {
        throw new Error('Invalid Google token. Please try signing in again.');
      }
      
      if (error.response?.status === 500) {
        throw new Error('Server error during Google authentication. Please try again.');
      }
      
      if (error.response) {
        console.error('📊 Response status:', error.response.status);
        console.error('📊 Response data:', error.response.data);
        console.error('📊 Request URL:', error.config?.url);
      }
      
      throw new Error(error.response?.data?.message || 'Google login failed. Please try again.');
    }
  }

  // Get user profile
  async getProfile(): Promise<{ success: boolean; user: User }> {
    try {
      const response = await apiClient.get('/auth/profile');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch profile');
    }
  }

  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  // Get stored token
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Get stored user
  getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }

  // Store auth data
  storeAuthData(token: string, user: User): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const authService = new AuthService();
export default authService;
