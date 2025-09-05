# Google OAuth Redirect URI Fix Guide
## Resolving "Error 400: redirect_uri_mismatch"

**Issue Identified:** Google Cloud Console redirect URI configuration doesn't match backend callback URL

**Error Message:** "Access blocked: This app's request is invalid - Error 400: redirect_uri_mismatch"

## Root Cause Analysis

The Google OAuth flow is working correctly on the backend (status 302 redirects), but Google is rejecting the authentication because the redirect URI in the Google Cloud Console doesn't match the callback URL being sent by the backend.

**Current Backend Configuration:**
- Callback URL: `http://localhost:5000/api/auth/google/callback`
- Client ID: `21858022853-hn264ot2amaurp9ms4hof7kutgsr2ru0.apps.googleusercontent.com`

## IMMEDIATE FIX REQUIRED

### Step 1: Update Google Cloud Console

1. **Go to Google Cloud Console:** https://console.cloud.google.com/
2. **Navigate to:** APIs & Services > Credentials
3. **Find your OAuth 2.0 Client ID:** `21858022853-hn264ot2amaurp9ms4hof7kutgsr2ru0`
4. **Click Edit** on the OAuth client
5. **Add Authorized Redirect URIs:**
   ```
   http://localhost:5000/api/auth/google/callback
   http://127.0.0.1:5000/api/auth/google/callback
   ```
6. **Save the configuration**

### Step 2: Verify Backend Configuration

The backend `.env` file should have:
```bash
GOOGLE_CLIENT_ID=21858022853-hn264ot2amaurp9ms4hof7kutgsr2ru0.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
```

### Step 3: Test the OAuth Flow

After updating the Google Cloud Console:
1. Restart the backend server
2. Try Google Sign-In again
3. Should redirect to Google successfully
4. Should return to the application after authentication

## Alternative Solution (If Console Access Not Available)

If you cannot access the Google Cloud Console, you can create a new OAuth application:

### Create New Google OAuth Application:

1. **Go to:** https://console.cloud.google.com/
2. **Create New Project** or select existing
3. **Enable Google+ API**
4. **Create OAuth 2.0 Credentials**
5. **Configure Authorized Redirect URIs:**
   ```
   http://localhost:5000/api/auth/google/callback
   http://127.0.0.1:5000/api/auth/google/callback
   https://yourdomain.com/api/auth/google/callback (for production)
   ```
6. **Update both frontend and backend .env files** with new credentials

## Testing Verification

### Expected Flow:
1. ✅ User clicks "Continue with Google"
2. ✅ Frontend redirects to backend OAuth endpoint
3. ✅ Backend redirects to Google OAuth
4. ✅ User authenticates with Google
5. ✅ Google redirects back to backend callback
6. ✅ Backend processes authentication and redirects to frontend
7. ✅ User is logged in successfully

### Current Status:
- ✅ Steps 1-3 working (backend receiving requests)
- ❌ Step 4 failing due to redirect URI mismatch
- ⏳ Steps 5-7 pending fix

## Security Considerations

The implemented OAuth flow maintains all security enhancements:
- ✅ Secure cookie-based token storage
- ✅ CSRF protection
- ✅ Rate limiting
- ✅ Input validation
- ✅ Proper error handling

## Production Deployment Notes

For production deployment, ensure:
1. **HTTPS URLs** in Google Cloud Console
2. **Production domain** in authorized redirect URIs
3. **Environment variables** properly configured
4. **CORS policies** updated for production domain

## Quick Fix Commands

If you have access to Google Cloud Console, run these commands after updating the redirect URIs:

```bash
# Restart backend to ensure clean state
cd backend
npm start

# Test the OAuth endpoint directly
curl -I http://localhost:5000/api/auth/google
```

Expected response: `HTTP/1.1 302 Found` with `Location` header pointing to Google OAuth.

---

**IMMEDIATE ACTION REQUIRED:** Update Google Cloud Console with correct redirect URI to resolve the authentication issue.