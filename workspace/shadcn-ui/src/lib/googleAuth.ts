// Google OAuth configuration
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

// Validate Google Client ID configuration
if (!GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID === 'your-google-client-id.apps.googleusercontent.com') {
  console.error('❌ Google Client ID not configured properly');
  console.log('📝 Please set VITE_GOOGLE_CLIENT_ID in .env file');
  console.log('🔧 Current value:', GOOGLE_CLIENT_ID);
}

// Initialize Google OAuth
export const initializeGoogleAuth = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Google Auth can only be initialized in browser'));
      return;
    }

    if (!GOOGLE_CLIENT_ID) {
      reject(new Error('Google Client ID not configured. Please set VITE_GOOGLE_CLIENT_ID in .env file.'));
      return;
    }

    // Check if Google Identity Services is already loaded
    if (window.google?.accounts?.id) {
      console.log('✅ Google Identity Services already loaded');
      resolve();
      return;
    }

    // Load Google Identity Services script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      // Initialize Google OAuth
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: () => {}, // This will be set per component
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      resolve();
    };
    
    script.onerror = () => {
      reject(new Error('Failed to load Google Identity Services'));
    };
    
    document.head.appendChild(script);
  });
};

// Prompt Google One Tap login
export const promptGoogleOneTap = (callback: (credentialResponse: GoogleCredentialResponse) => void): void => {
  if (!window.google?.accounts?.id) {
    console.error('Google Identity Services not loaded');
    return;
  }

  // Set callback for this specific login attempt
  window.google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: callback,
    auto_select: false,
  });

  window.google.accounts.id.prompt();
};

// Render Google Sign-In button
export const renderGoogleSignInButton = (
  element: HTMLElement,
  callback: (credentialResponse: GoogleCredentialResponse) => void,
  options?: {
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
    width?: number;
  }
): void => {
  if (!window.google?.accounts?.id) {
    console.error('Google Identity Services not loaded');
    return;
  }

  // Set callback
  window.google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: callback,
  });

  // Render button
  window.google.accounts.id.renderButton(element, {
    theme: options?.theme || 'outline',
    size: options?.size || 'large',
    text: options?.text || 'signin_with',
    shape: options?.shape || 'rectangular',
    width: options?.width || 300,
  });
};

// Google Sign-In with popup (alternative method)
export const signInWithGooglePopup = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (!window.google?.accounts?.oauth2) {
      reject(new Error('Google OAuth2 not loaded'));
      return;
    }

    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'email profile',
      callback: (response: any) => {
        if (response.access_token) {
          resolve(response.access_token);
        } else {
          reject(new Error('Failed to get Google access token'));
        }
      },
    });

    client.requestAccessToken();
  });
};

// Import centralized Google types
import type { GoogleCredentialResponse } from '@/types/google';
