import axios from 'axios';
import { getAccessToken, clearAuthData } from './auth';

// Use the correct environment variable as specified in copilot instructions
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance with /api prefix as specified
export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token using our auth utilities
apiClient.interceptors.request.use(
  (config) => {
    // Use getAccessToken from our auth utilities for consistency
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid - use clearAuthData for consistency
      clearAuthData();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
