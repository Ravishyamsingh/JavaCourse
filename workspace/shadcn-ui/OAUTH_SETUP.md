# Google OAuth Setup for Local Development

## Problem
You're getting a "redirect_uri_mismatch" error because your Google Cloud Console OAuth configuration only includes the production domain (`login-a906f.firebaseapp.com`), but you're running the app locally on `localhost:5173`.

## Solution
Add the localhost redirect URI to your Google Cloud Console OAuth configuration.

## Step-by-Step Instructions

### 1. Access Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project: `login-a906f`

### 2. Navigate to OAuth Configuration
1. In the left sidebar, go to **APIs & Services** > **Credentials**
2. Find your OAuth 2.0 Client ID (it should be associated with your Firebase project)
3. Click on the OAuth client ID to edit it

### 3. Add Localhost Redirect URIs
In the **Authorized redirect URIs** section, add these URIs:

```
http://localhost:5173/__/auth/handler
http://localhost:3000/__/auth/handler
http://127.0.0.1:5173/__/auth/handler
http://127.0.0.1:3000/__/auth/handler
```

**Note:** We're adding multiple ports (3000 and 5173) and both localhost and 127.0.0.1 to cover different development scenarios.

### 4. Save Changes
1. Click **Save** at the bottom of the page
2. Wait a few minutes for the changes to propagate

### 5. Alternative: Use Firebase Emulator (Recommended for Development)
For a more robust local development setup, consider using Firebase Auth Emulator:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Initialize Firebase in your project: `firebase init`
3. Start the emulator: `firebase emulators:start --only auth`
4. Update your `.env` file to use the emulator:
   ```
   VITE_FIREBASE_AUTH_DOMAIN=localhost
   VITE_USE_FIREBASE_EMULATOR=true
   ```

## Running the Application

After completing the OAuth setup:

1. Navigate to the project directory:
   ```bash
   cd workspace/shadcn-ui
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

## Troubleshooting

- **Still getting redirect_uri_mismatch?** 
  - Double-check that you saved the changes in Google Cloud Console
  - Wait 5-10 minutes for changes to propagate
  - Clear your browser cache and cookies

- **Different port?** 
  - If Vite starts on a different port, add that specific redirect URI to Google Cloud Console
  - Check the terminal output when running `npm run dev` to see the actual port

- **Production deployment?** 
  - Make sure your production environment uses the original Firebase configuration
  - Consider using different Firebase projects for development and production