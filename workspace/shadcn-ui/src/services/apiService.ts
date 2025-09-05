import { AuthTokens, User } from '@/contexts/AuthContext';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// HTTP Status Codes
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

// API Error Types
export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'APIError';
  }
}

export class AuthenticationError extends APIError {
  constructor(message: string = 'Authentication required') {
    super(message, HTTP_STATUS.UNAUTHORIZED, 'AUTH_REQUIRED');
    this.name = 'AuthenticationError';
  }
}

export class AuthorizationError extends APIError {
  constructor(message: string = 'Access denied') {
    super(message, HTTP_STATUS.FORBIDDEN, 'ACCESS_DENIED');
    this.name = 'AuthorizationError';
  }
}

export class NetworkError extends Error {
  constructor(message: string = 'Network error') {
    super(message);
    this.name = 'NetworkError';
  }
}

// Token storage keys
const ACCESS_TOKEN_KEY = 'auth_access_token';
const REFRESH_TOKEN_KEY = 'auth_refresh_token';

// Request/Response Types
interface APIRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string>;
  timeout?: number;
  retries?: number;
}

interface APIResponse<T = any> {
  data: T;
  status: number;
  message?: string;
  success: boolean;
}

// API Client Class
class APIClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  private interceptors: {
    request: Array<(config: APIRequestConfig) => APIRequestConfig | Promise<APIRequestConfig>>;
    response: Array<(response: APIResponse) => APIResponse | Promise<APIResponse>>;
    error: Array<(error: APIError) => APIError | Promise<APIError>>;
  };

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    this.interceptors = {
      request: [],
      response: [],
      error: [],
    };

    this.setupDefaultInterceptors();
  }

  // Setup default interceptors for authentication
  private setupDefaultInterceptors() {
    // Request interceptor for authentication
    this.addRequestInterceptor(async (config) => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (token) {
        config.headers = {
          ...config.headers,
          'Authorization': `Bearer ${token}`,
        };
      }
      return config;
    });

    // Response interceptor for token refresh
    this.addResponseInterceptor(async (response) => {
      // If we get a 401, try to refresh the token
      if (response.status === HTTP_STATUS.UNAUTHORIZED) {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
        if (refreshToken) {
          try {
            const newTokens = await this.refreshAccessToken(refreshToken);
            if (newTokens) {
              // Retry the original request with new token
              const originalRequest = response as any;
              if (originalRequest.config) {
                originalRequest.config.headers['Authorization'] = `Bearer ${newTokens.accessToken}`;
                return this.request(originalRequest.config);
              }
            }
          } catch (error) {
            // Token refresh failed, redirect to login
            this.handleAuthFailure();
            throw new AuthenticationError();
          }
        } else {
          this.handleAuthFailure();
          throw new AuthenticationError();
        }
      }
      return response;
    });

    // Error interceptor
    this.addErrorInterceptor((error) => {
      if (error.status === HTTP_STATUS.UNAUTHORIZED) {
        this.handleAuthFailure();
      }
      return error;
    });
  }

  // Handle authentication failure
  private handleAuthFailure() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem('auth_user');

    // Redirect to login if not already there
    if (window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }

  // Refresh access token
  private async refreshAccessToken(refreshToken: string): Promise<AuthTokens | null> {
    try {
      const response = await fetch(`${this.baseURL}/auth/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken }),
      });

      if (response.ok) {
        const data = await response.json();
        const tokens = {
          accessToken: data.accessToken,
          refreshToken: data.refreshToken || refreshToken,
        };

        // Update stored tokens
        localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
        if (data.refreshToken) {
          localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
        }

        return tokens;
      }
      return null;
    } catch (error) {
      console.error('Token refresh failed:', error);
      return null;
    }
  }

  // Add request interceptor
  addRequestInterceptor(interceptor: (config: APIRequestConfig) => APIRequestConfig | Promise<APIRequestConfig>) {
    this.interceptors.request.push(interceptor);
  }

  // Add response interceptor
  addResponseInterceptor(interceptor: (response: APIResponse) => APIResponse | Promise<APIResponse>) {
    this.interceptors.response.push(interceptor);
  }

  // Add error interceptor
  addErrorInterceptor(interceptor: (error: APIError) => APIError | Promise<APIError>) {
    this.interceptors.error.push(interceptor);
  }

  // Build URL with query parameters
  private buildURL(endpoint: string, params?: Record<string, string>): string {
    const url = new URL(endpoint, this.baseURL);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    return url.toString();
  }

  // Execute request interceptors
  private async executeRequestInterceptors(config: APIRequestConfig): Promise<APIRequestConfig> {
    let processedConfig = config;

    for (const interceptor of this.interceptors.request) {
      processedConfig = await interceptor(processedConfig);
    }

    return processedConfig;
  }

  // Execute response interceptors
  private async executeResponseInterceptors(response: APIResponse): Promise<APIResponse> {
    let processedResponse = response;

    for (const interceptor of this.interceptors.response) {
      processedResponse = await interceptor(processedResponse);
    }

    return processedResponse;
  }

  // Execute error interceptors
  private async executeErrorInterceptors(error: APIError): Promise<APIError> {
    let processedError = error;

    for (const interceptor of this.interceptors.error) {
      processedError = await interceptor(processedError);
    }

    return processedError;
  }

  // Core request method
  async request<T = any>(
    endpoint: string,
    config: APIRequestConfig = {}
  ): Promise<APIResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      params,
      timeout = 30000,
      retries = 0,
    } = config;

    // Execute request interceptors
    const processedConfig = await this.executeRequestInterceptors({
      method,
      headers: { ...this.defaultHeaders, ...headers },
      body,
      params,
      timeout,
      retries,
    });

    const url = this.buildURL(endpoint, processedConfig.params);

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), processedConfig.timeout);

    try {
      const response = await fetch(url, {
        method: processedConfig.method,
        headers: processedConfig.headers,
        body: processedConfig.body ? JSON.stringify(processedConfig.body) : undefined,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let responseData: any = {};

      // Try to parse response body
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        try {
          responseData = await response.json();
        } catch (error) {
          // If JSON parsing fails, create a generic response
          responseData = { message: 'Invalid JSON response' };
        }
      } else {
        responseData = await response.text();
      }

      const apiResponse: APIResponse<T> = {
        data: responseData,
        status: response.status,
        message: responseData.message,
        success: response.ok,
      };

      if (!response.ok) {
        const error = new APIError(
          responseData.message || `HTTP ${response.status}`,
          response.status,
          responseData.code,
          responseData.details
        );

        // Execute error interceptors
        const processedError = await this.executeErrorInterceptors(error);
        throw processedError;
      }

      // Execute response interceptors
      return await this.executeResponseInterceptors(apiResponse);
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof APIError) {
        throw error;
      }

      if (error.name === 'AbortError') {
        throw new NetworkError('Request timeout');
      }

      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new NetworkError('Network connection failed');
      }

      throw new APIError(error.message || 'Unknown error', 0);
    }
  }

  // HTTP method shortcuts
  async get<T = any>(endpoint: string, config?: Omit<APIRequestConfig, 'method'>): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'GET' });
  }

  async post<T = any>(endpoint: string, data?: any, config?: Omit<APIRequestConfig, 'method' | 'body'>): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'POST', body: data });
  }

  async put<T = any>(endpoint: string, data?: any, config?: Omit<APIRequestConfig, 'method' | 'body'>): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PUT', body: data });
  }

  async patch<T = any>(endpoint: string, data?: any, config?: Omit<APIRequestConfig, 'method' | 'body'>): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'PATCH', body: data });
  }

  async delete<T = any>(endpoint: string, config?: Omit<APIRequestConfig, 'method'>): Promise<APIResponse<T>> {
    return this.request<T>(endpoint, { ...config, method: 'DELETE' });
  }
}

// Create and export API client instance
export const apiClient = new APIClient(API_BASE_URL);

// Authentication API methods
export const authAPI = {
  // Login with email and password
  async login(email: string, password: string) {
    const response = await apiClient.post('/auth/login', { email, password });
    return response.data;
  },

  // Login with Google OAuth
  async loginWithGoogle() {
    window.location.href = `${API_BASE_URL}/auth/google`;
  },

  // Logout
  async logout() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    const response = await apiClient.post('/auth/logout', { refreshToken });
    return response.data;
  },

  // Refresh token
  async refreshToken() {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) {
      throw new AuthenticationError('No refresh token available');
    }

    const response = await apiClient.post('/auth/refresh', { refreshToken });
    return response.data;
  },

  // Get current user profile
  async getCurrentUser() {
    const response = await apiClient.get('/auth/me');
    return response.data;
  },

  // Update user profile
  async updateProfile(updates: Partial<User>) {
    const response = await apiClient.put('/auth/profile', updates);
    return response.data;
  },

  // Get user permissions
  async getUserPermissions() {
    const response = await apiClient.get('/auth/permissions');
    return response.data;
  },

  // Change password
  async changePassword(currentPassword: string, newPassword: string) {
    const response = await apiClient.put('/auth/change-password', {
      currentPassword,
      newPassword,
    });
    return response.data;
  },

  // Get user sessions
  async getUserSessions() {
    const response = await apiClient.get('/auth/sessions');
    return response.data;
  },

  // Revoke session
  async revokeSession(sessionId: string) {
    const response = await apiClient.delete(`/auth/sessions/${sessionId}`);
    return response.data;
  },
};

// User management API methods (Admin only)
export const userAPI = {
  // Get all users (paginated)
  async getAllUsers(params?: {
    page?: number;
    limit?: number;
    search?: string;
    role?: string;
    status?: string;
  }) {
    const queryParams: Record<string, string> = {};
    if (params) {
      if (params.page !== undefined) queryParams.page = params.page.toString();
      if (params.limit !== undefined) queryParams.limit = params.limit.toString();
      if (params.search) queryParams.search = params.search;
      if (params.role) queryParams.role = params.role;
      if (params.status) queryParams.status = params.status;
    }

    const response = await apiClient.get('/auth/users', { params: queryParams });
    return response.data;
  },

  // Update user role
  async updateUserRole(userId: string, role: string) {
    const response = await apiClient.put(`/auth/users/${userId}/role`, { role });
    return response.data;
  },
};

// Course API methods
export const courseAPI = {
  // Get all courses
  async getCourses() {
    const response = await apiClient.get('/courses');
    return response.data;
  },

  // Get course by ID
  async getCourse(courseId: string) {
    const response = await apiClient.get(`/courses/${courseId}`);
    return response.data;
  },

  // Create course
  async createCourse(courseData: any) {
    const response = await apiClient.post('/courses', courseData);
    return response.data;
  },

  // Update course
  async updateCourse(courseId: string, updates: any) {
    const response = await apiClient.put(`/courses/${courseId}`, updates);
    return response.data;
  },

  // Delete course
  async deleteCourse(courseId: string) {
    const response = await apiClient.delete(`/courses/${courseId}`);
    return response.data;
  },
};

// Quiz API methods
export const quizAPI = {
  // Get quizzes for a lesson
  async getQuizzes(lessonId: string) {
    const response = await apiClient.get(`/quizzes?lessonId=${lessonId}`);
    return response.data;
  },

  // Submit quiz answers
  async submitQuiz(quizId: string, answers: any) {
    const response = await apiClient.post(`/quizzes/${quizId}/submit`, { answers });
    return response.data;
  },
};

// Progress API methods
export const progressAPI = {
  // Get user progress
  async getUserProgress() {
    const response = await apiClient.get('/progress');
    return response.data;
  },

  // Update lesson progress
  async updateLessonProgress(lessonId: string, progress: number) {
    const response = await apiClient.put(`/progress/lessons/${lessonId}`, { progress });
    return response.data;
  },

  // Mark lesson as completed
  async completeLesson(lessonId: string) {
    const response = await apiClient.post(`/progress/lessons/${lessonId}/complete`);
    return response.data;
  },
};

// Export types and utilities
export type { APIRequestConfig, APIResponse };
export { HTTP_STATUS };