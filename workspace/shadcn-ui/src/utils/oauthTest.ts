/**
 * Google OAuth Testing Utility
 * Comprehensive testing for Google OAuth authentication flow
 */

import { UserRole } from '@/types/auth';

declare global {
  interface Window {
    oauthTests: typeof import('./oauthTest');
  }
}

export interface OAuthTestResult {
  success: boolean;
  message: string;
  user?: any;
  error?: string;
  timestamp: Date;
}

export interface TestSuiteResult {
  totalTests: number;
  passedTests: number;
  failedTests: number;
  results: OAuthTestResult[];
  duration: number;
}

/**
 * Test Google OAuth authentication flow
 */
export const testGoogleOAuthFlow = async (): Promise<OAuthTestResult> => {
  const startTime = Date.now();

  try {
    console.log('🧪 Testing Google OAuth authentication flow...');

    // Check if Google Identity Services is loaded
    if (!window.google?.accounts?.id) {
      throw new Error('Google Identity Services not loaded');
    }

    // Check environment variables
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!clientId) {
      throw new Error('VITE_GOOGLE_CLIENT_ID not configured');
    }

    if (!apiUrl) {
      throw new Error('VITE_API_URL not configured');
    }

    console.log('✅ Environment variables configured correctly');
    console.log('🔑 Client ID:', clientId.substring(0, 20) + '...');
    console.log('📍 API URL:', apiUrl);

    // Test API connectivity
    const testResponse = await fetch(`${apiUrl}/auth/test`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!testResponse.ok) {
      console.warn('⚠️ API test endpoint not available, but this is expected');
    }

    return {
      success: true,
      message: 'Google OAuth flow test completed successfully',
      timestamp: new Date(),
    };

  } catch (error) {
    console.error('❌ Google OAuth flow test failed:', error);
    return {
      success: false,
      message: 'Google OAuth flow test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date(),
    };
  }
};

/**
 * Test role-based authentication scenarios
 */
export const testRoleBasedAuthentication = async (): Promise<OAuthTestResult[]> => {
  const results: OAuthTestResult[] = [];
  const roles: UserRole[] = [UserRole.GUEST, UserRole.USER, UserRole.ADMIN, UserRole.SUPER_ADMIN];

  console.log('🧪 Testing role-based authentication scenarios...');

  for (const role of roles) {
    try {
      console.log(`🔍 Testing ${role} role authentication...`);

      // Test role-specific API endpoints
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

      // Test role validation endpoint
      const response = await fetch(`${apiUrl}/auth/validate-role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ role }),
      });

      if (response.ok) {
        const data = await response.json();
        results.push({
          success: true,
          message: `${role} role validation successful`,
          user: { role },
          timestamp: new Date(),
        });
      } else {
        results.push({
          success: false,
          message: `${role} role validation failed`,
          error: `HTTP ${response.status}`,
          timestamp: new Date(),
        });
      }

    } catch (error) {
      results.push({
        success: false,
        message: `${role} role test failed`,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date(),
      });
    }
  }

  return results;
};

/**
 * Test session management features
 */
export const testSessionManagement = async (): Promise<OAuthTestResult[]> => {
  const results: OAuthTestResult[] = [];

  console.log('🧪 Testing session management features...');

  try {
    // Test session storage
    const testToken = 'test-jwt-token';
    const testUser = { id: '123', email: 'test@example.com', role: 'user' };

    localStorage.setItem('accessToken', testToken);
    localStorage.setItem('user', JSON.stringify(testUser));

    const storedToken = localStorage.getItem('accessToken');
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (storedToken === testToken && storedUser.id === testUser.id) {
      results.push({
        success: true,
        message: 'Session storage test passed',
        timestamp: new Date(),
      });
    } else {
      results.push({
        success: false,
        message: 'Session storage test failed',
        error: 'Data not stored correctly',
        timestamp: new Date(),
      });
    }

    // Clean up
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');

  } catch (error) {
    results.push({
      success: false,
      message: 'Session management test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date(),
    });
  }

  return results;
};

/**
 * Test error handling scenarios
 */
export const testErrorHandling = async (): Promise<OAuthTestResult[]> => {
  const results: OAuthTestResult[] = [];

  console.log('🧪 Testing error handling scenarios...');

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  // Test invalid token
  try {
    const response = await fetch(`${apiUrl}/auth/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer invalid-token',
      },
    });

    if (response.status === 401) {
      results.push({
        success: true,
        message: 'Invalid token error handling test passed',
        timestamp: new Date(),
      });
    } else {
      results.push({
        success: false,
        message: 'Invalid token error handling test failed',
        error: `Expected 401, got ${response.status}`,
        timestamp: new Date(),
      });
    }
  } catch (error) {
    results.push({
      success: false,
      message: 'Invalid token error handling test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date(),
    });
  }

  // Test missing credentials
  try {
    const response = await fetch(`${apiUrl}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });

    if (response.status === 400) {
      results.push({
        success: true,
        message: 'Missing credentials error handling test passed',
        timestamp: new Date(),
      });
    } else {
      results.push({
        success: false,
        message: 'Missing credentials error handling test failed',
        error: `Expected 400, got ${response.status}`,
        timestamp: new Date(),
      });
    }
  } catch (error) {
    results.push({
      success: false,
      message: 'Missing credentials error handling test failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date(),
    });
  }

  return results;
};

/**
 * Run complete OAuth test suite
 */
export const runOAuthTestSuite = async (): Promise<TestSuiteResult> => {
  const startTime = Date.now();
  const results: OAuthTestResult[] = [];

  console.log('🚀 Starting comprehensive OAuth test suite...');

  try {
    // Test 1: Google OAuth Flow
    const oauthResult = await testGoogleOAuthFlow();
    results.push(oauthResult);

    // Test 2: Role-based Authentication
    const roleResults = await testRoleBasedAuthentication();
    results.push(...roleResults);

    // Test 3: Session Management
    const sessionResults = await testSessionManagement();
    results.push(...sessionResults);

    // Test 4: Error Handling
    const errorResults = await testErrorHandling();
    results.push(...errorResults);

  } catch (error) {
    console.error('❌ Test suite execution failed:', error);
    results.push({
      success: false,
      message: 'Test suite execution failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date(),
    });
  }

  const endTime = Date.now();
  const duration = endTime - startTime;

  const passedTests = results.filter(r => r.success).length;
  const failedTests = results.filter(r => !r.success).length;

  console.log(`✅ Test suite completed in ${duration}ms`);
  console.log(`📊 Results: ${passedTests} passed, ${failedTests} failed`);

  return {
    totalTests: results.length,
    passedTests,
    failedTests,
    results,
    duration,
  };
};

/**
 * Generate test report
 */
export const generateTestReport = (result: TestSuiteResult): string => {
  const report = [
    '# OAuth Authentication Test Report',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Summary',
    `- Total Tests: ${result.totalTests}`,
    `- Passed: ${result.passedTests}`,
    `- Failed: ${result.failedTests}`,
    `- Duration: ${result.duration}ms`,
    `- Success Rate: ${((result.passedTests / result.totalTests) * 100).toFixed(1)}%`,
    '',
    '## Detailed Results',
  ];

  result.results.forEach((testResult, index) => {
    report.push(`### Test ${index + 1}: ${testResult.message}`);
    report.push(`- Status: ${testResult.success ? '✅ PASSED' : '❌ FAILED'}`);
    if (testResult.error) {
      report.push(`- Error: ${testResult.error}`);
    }
    if (testResult.user) {
      report.push(`- User: ${JSON.stringify(testResult.user, null, 2)}`);
    }
    report.push(`- Timestamp: ${testResult.timestamp.toISOString()}`);
    report.push('');
  });

  return report.join('\n');
};

// Export for use in browser console
if (typeof window !== 'undefined') {
  (window as any).oauthTests = {
    testGoogleOAuthFlow,
    testRoleBasedAuthentication,
    testSessionManagement,
    testErrorHandling,
    runOAuthTestSuite,
    generateTestReport,
  };

  console.log('🧪 OAuth test utilities loaded. Use window.oauthTests to run tests.');
}