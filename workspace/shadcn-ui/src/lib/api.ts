import axios from 'axios';
import { getAccessToken, clearAuthData } from './auth';

/**
 * Get API URL from environment or construct from current domain
 * Priority:
 * 1. VITE_API_URL environment variable
 * 2. Development: http://localhost:5000/api
 * 3. Production: Use current domain
 */
const getApiUrl = (): string => {
  // First priority: environment variable
  if (import.meta.env.VITE_API_URL) {
    const url = import.meta.env.VITE_API_URL;
    console.log('🔌 API URL from VITE_API_URL:', url);
    return url;
  }

  // Second priority: development mode
  if (import.meta.env.DEV) {
    const devUrl = 'http://localhost:5000/api';
    console.log('🔌 API URL (development):', devUrl);
    return devUrl;
  }

  // Third priority: production - use current domain
  try {
    const protocol = window.location.protocol;
    const host = window.location.host;
    const prodUrl = `${protocol}//${host}/api`;
    console.log('🔌 API URL (production):', prodUrl);
    return prodUrl;
  } catch (error) {
    console.error('❌ Failed to construct API URL:', error);
    // Fallback
    return '/api';
  }
};

const API_URL = getApiUrl();

/**
 * Create axios instance with proper configuration
 */
export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 15000, // Increased timeout for slow networks
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // Include cookies in requests
});

/**
 * Request interceptor to add auth token
 */
apiClient.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('❌ Request interceptor error:', error);
    return Promise.reject(error);
  }
);

/**
 * Response interceptor for error handling
 */
apiClient.interceptors.response.use(
  (response) => {
    // Log successful responses in development
    if (import.meta.env.DEV) {
      console.log('✅ API Response:', response.config.url, response.status);
    }
    return response;
  },
  (error) => {
    // Handle 401 Unauthorized
    if (error.response?.status === 401) {
      console.warn('⚠️ Unauthorized (401) - clearing auth data');
      clearAuthData();
      window.location.href = '/login';
    }

    // Handle 403 Forbidden
    if (error.response?.status === 403) {
      console.error('❌ Forbidden (403) - insufficient permissions');
    }

    // Handle 404 Not Found
    if (error.response?.status === 404) {
      console.error('❌ Not Found (404):', error.config?.url);
    }

    // Handle 500 Server Error
    if (error.response?.status === 500) {
      console.error('❌ Server Error (500)');
    }

    // Handle network errors
    if (error.message === 'Network Error') {
      console.error('❌ Network Error - API server may be down');
      console.error('   API URL:', API_URL);
    }

    // Log error in development
    if (import.meta.env.DEV) {
      console.error('❌ API Error:', {
        url: error.config?.url,
        status: error.response?.status,
        message: error.message,
        data: error.response?.data
      });
    }

    return Promise.reject(error);
  }
);

export default apiClient;
