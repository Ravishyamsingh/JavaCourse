# OAuth Authentication Testing Guide

## Overview

This guide provides comprehensive testing procedures for the MERN stack authentication system with Google OAuth integration and role-based access control (RBAC).

## Test Components

### 1. OAuth Test Suite (`/oauth-tests`)

A dedicated testing interface accessible at `/oauth-tests` (Super Admin only) that provides:

- **Automated Test Execution**: Run complete test suites with one click
- **Real-time Progress Tracking**: Visual progress indicators during test execution
- **Detailed Results**: Individual test results with success/failure status
- **Report Generation**: Downloadable markdown reports of test results
- **Test Coverage Metrics**: Statistics on test pass/fail rates

### 2. Test Utilities (`src/utils/oauthTest.ts`)

Comprehensive testing utilities that can be used programmatically:

```typescript
import { runOAuthTestSuite, generateTestReport } from '@/utils/oauthTest';

// Run complete test suite
const results = await runOAuthTestSuite();

// Generate markdown report
const report = generateTestReport(results);
```

## Test Categories

### 1. Google OAuth Flow Tests

**Purpose**: Verify Google OAuth integration works correctly

**Tests Include**:
- Google Identity Services script loading
- Client ID configuration validation
- API URL configuration validation
- OAuth initialization
- Token exchange verification

**Expected Results**:
- ✅ Google script loads successfully
- ✅ Environment variables are properly configured
- ✅ API endpoints are reachable
- ✅ OAuth flow initializes without errors

### 2. Role-Based Authentication Tests

**Purpose**: Ensure role-based access control works for all user types

**Tests Include**:
- Guest user role validation
- Regular user role validation
- Admin role validation
- Super Admin role validation
- Permission hierarchy verification

**Expected Results**:
- ✅ Each role is properly validated
- ✅ Role-specific permissions are enforced
- ✅ Access control works as expected

### 3. Session Management Tests

**Purpose**: Verify session handling and persistence

**Tests Include**:
- Token storage and retrieval
- Session persistence across page reloads
- Automatic logout on session expiry
- Concurrent login detection

**Expected Results**:
- ✅ Tokens are stored securely in localStorage
- ✅ Sessions persist correctly
- ✅ Automatic logout works
- ✅ Concurrent login detection functions

### 4. Error Handling Tests

**Purpose**: Ensure robust error handling and recovery

**Tests Include**:
- Invalid token responses
- Missing credentials handling
- Network failure recovery
- API error responses

**Expected Results**:
- ✅ Invalid tokens return 401 status
- ✅ Missing credentials return 400 status
- ✅ Network errors are handled gracefully
- ✅ User-friendly error messages are displayed

## Manual Testing Procedures

### Pre-Testing Setup

1. **Environment Configuration**:
   ```bash
   # Frontend (.env)
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   VITE_API_URL=http://localhost:5000/api

   # Backend (.env)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   MONGODB_URI=mongodb://localhost:27017/javacourse
   ```

2. **Service Dependencies**:
   - MongoDB running on port 27017
   - Backend server running on port 5000
   - Frontend development server running on port 5173

3. **Google Console Setup**:
   - OAuth 2.0 credentials configured
   - Authorized redirect URIs include `http://localhost:5000/api/auth/google/callback`
   - Authorized JavaScript origins include `http://localhost:5173`

### Test Execution Steps

#### Automated Testing

1. **Access Test Suite**:
   - Login as Super Admin
   - Navigate to `/oauth-tests`
   - Click "Run Test Suite"

2. **Monitor Results**:
   - Watch progress bar for completion
   - Review individual test results
   - Check overall pass/fail statistics

3. **Generate Reports**:
   - Click "Download Report" for markdown documentation
   - Save results for audit purposes

#### Manual Testing Scenarios

##### Google OAuth Testing

1. **Test Login Flow**:
   - Click "Continue with Google" button
   - Verify Google consent screen appears
   - Complete OAuth flow
   - Verify successful login and redirect

2. **Test Different User Types**:
   - Test with existing Google account
   - Test with new Google account
   - Verify role assignment (default: USER)

3. **Test Error Scenarios**:
   - Cancel OAuth flow midway
   - Use invalid credentials
   - Test network disconnection during flow

##### Role-Based Access Testing

1. **Guest User Testing**:
   - Access public content
   - Attempt restricted actions (should fail)
   - Verify read-only permissions

2. **Regular User Testing**:
   - Access user dashboard
   - Complete courses and quizzes
   - Check profile management

3. **Admin User Testing**:
   - Access admin panel
   - Manage users and content
   - Verify elevated permissions

4. **Super Admin Testing**:
   - Access all system features
   - Modify system settings
   - Manage other admins

##### Session Management Testing

1. **Session Persistence**:
   - Login and refresh page
   - Verify automatic re-authentication
   - Test session timeout behavior

2. **Concurrent Login Detection**:
   - Open multiple browser tabs
   - Login with same credentials
   - Verify session invalidation

3. **Automatic Logout**:
   - Wait for session expiry
   - Verify automatic logout
   - Test logout from all devices

## Troubleshooting

### Common Issues

#### Google OAuth Not Working

**Symptoms**:
- Google button doesn't respond
- Console errors about Google Identity Services

**Solutions**:
1. Verify Google Client ID in environment variables
2. Check Google Console configuration
3. Ensure HTTPS in production (OAuth requires secure context)
4. Clear browser cache and cookies

#### API Connection Failed

**Symptoms**:
- Tests fail with network errors
- Backend not responding

**Solutions**:
1. Verify backend server is running (`npm start` in backend directory)
2. Check API URL configuration
3. Verify CORS settings
4. Check MongoDB connection

#### Role Access Issues

**Symptoms**:
- Users can't access expected features
- Permission errors

**Solutions**:
1. Verify user role in database
2. Check role hierarchy configuration
3. Review protected route settings
4. Test with different user accounts

#### Session Problems

**Symptoms**:
- Users logged out unexpectedly
- Session not persisting

**Solutions**:
1. Check localStorage for token corruption
2. Verify JWT token expiry settings
3. Test with different browsers
4. Check for concurrent login conflicts

### Debug Tools

#### Browser Developer Tools

- **Console**: Check for JavaScript errors
- **Network**: Monitor API requests and responses
- **Application**: Inspect localStorage and sessionStorage
- **Security**: Verify HTTPS and secure context

#### Backend Logs

```bash
# View backend logs
cd backend && npm start

# Check MongoDB connection
mongosh --eval "db.stats()"
```

#### Test Utilities

```javascript
// Access test utilities in browser console
window.oauthTests.runOAuthTestSuite()
window.oauthTests.testGoogleOAuthFlow()
window.oauthTests.testRoleBasedAuthentication()
```

## Performance Benchmarks

### Expected Test Execution Times

- **Complete Test Suite**: 5-15 seconds
- **Google OAuth Test**: 2-5 seconds
- **Role Validation Tests**: 1-3 seconds
- **Session Management Tests**: 1-2 seconds
- **Error Handling Tests**: 1-2 seconds

### Performance Optimization

1. **Bundle Size**: Monitor JavaScript bundle size
2. **API Response Times**: Ensure <500ms response times
3. **Database Queries**: Optimize MongoDB queries
4. **Caching**: Implement proper caching strategies

## Security Testing

### Authentication Security

- [ ] JWT token integrity verification
- [ ] Password hashing validation
- [ ] Session fixation prevention
- [ ] CSRF protection verification
- [ ] XSS prevention checks

### Authorization Security

- [ ] Role escalation prevention
- [ ] Permission bypass testing
- [ ] Access control validation
- [ ] Data leakage prevention

### OAuth Security

- [ ] State parameter validation
- [ ] PKCE implementation verification
- [ ] Token storage security
- [ ] Redirect URI validation

## Maintenance

### Regular Testing Schedule

- **Daily**: Automated test suite execution
- **Weekly**: Manual security testing
- **Monthly**: Performance benchmarking
- **Quarterly**: Full security audit

### Test Updates

- Update tests when new features are added
- Modify tests when authentication flow changes
- Review and update security test cases
- Maintain test documentation

## Support

For issues with the testing system:

1. Check this documentation first
2. Review browser console for errors
3. Check backend logs for API issues
4. Verify environment configuration
5. Contact development team for complex issues

## Version History

- **v1.0**: Initial OAuth testing implementation
- **v1.1**: Added comprehensive error handling tests
- **v1.2**: Enhanced session management testing
- **v1.3**: Added performance benchmarking
- **v1.4**: Improved security testing coverage