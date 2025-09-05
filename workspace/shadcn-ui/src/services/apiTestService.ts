// Test file for API Service
import { apiClient, authAPI } from './apiService';

export const testAPIConnection = async () => {
  try {
    console.log('🔍 Testing API connection...');
    console.log('API Base URL:', import.meta.env.VITE_API_URL || 'http://localhost:5000/api');
    
    // Test basic connectivity
    const response = await apiClient.get('/health');
    console.log('✅ API Health Check:', response);
    return true;
  } catch (error) {
    console.error('❌ API Connection failed:', error);
    return false;
  }
};

export const testAuthEndpoints = async () => {
  try {
    console.log('🔍 Testing auth endpoints...');
    
    // This should return 401 for unauthorized access
    await authAPI.getCurrentUser();
    console.log('✅ Auth endpoints accessible');
    return true;
  } catch (error) {
    if (error.status === 401) {
      console.log('✅ Auth endpoints working (401 expected for unauthorized)');
      return true;
    }
    console.error('❌ Auth endpoints failed:', error);
    return false;
  }
};

// Export test function to run in console
export const runAPITests = async () => {
  console.log('🚀 Running API Service Tests...');
  
  const healthTest = await testAPIConnection();
  const authTest = await testAuthEndpoints();
  
  if (healthTest && authTest) {
    console.log('🎉 All API tests passed!');
  } else {
    console.log('⚠️ Some API tests failed. Check your backend connection.');
  }
  
  return { healthTest, authTest };
};

// Auto-run tests in development
if (import.meta.env.DEV) {
  console.log('🔧 Development mode detected. API Service tests available.');
  console.log('Run: runAPITests() in console to test API connection');
}
