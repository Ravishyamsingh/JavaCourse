/**
 * Centralized Google Identity Services Type Definitions
 * This file provides consistent typing for Google OAuth across the application
 */

export interface GoogleCredentialResponse {
  credential: string;
  select_by?: string;
}

export interface GooglePromptNotification {
  isDisplayed(): boolean;
  isNotDisplayed(): boolean;
  getNotDisplayedReason(): string;
  isSkippedMoment(): boolean;
  getSkippedReason(): string;
}

export interface GoogleAccountsId {
  initialize(config: {
    client_id: string;
    callback: (response: GoogleCredentialResponse) => void;
    auto_select?: boolean;
    cancel_on_tap_outside?: boolean;
  }): void;
  prompt(callback?: (notification: GooglePromptNotification) => void): void;
  renderButton(element: HTMLElement, options: {
    theme?: 'outline' | 'filled_blue' | 'filled_black';
    size?: 'large' | 'medium' | 'small';
    width?: string | number;
    text?: 'signin_with' | 'signup_with' | 'continue_with' | 'signin';
    shape?: 'rectangular' | 'pill' | 'circle' | 'square';
  }): void;
  disableAutoSelect(): void;
}

export interface GoogleOAuth2 {
  initTokenClient(config: {
    client_id: string;
    scope: string;
    callback: (response: any) => void;
  }): {
    requestAccessToken(): void;
  };
}

export interface GoogleAccounts {
  id: GoogleAccountsId;
  oauth2?: GoogleOAuth2;
}

export interface GoogleIdentityServices {
  accounts: GoogleAccounts;
}

// Global window interface extension
declare global {
  interface Window {
    google?: GoogleIdentityServices;
    googleSignInCallback?: (response: GoogleCredentialResponse) => void;
  }
}

export {};