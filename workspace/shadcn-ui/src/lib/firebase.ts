import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDAqIdHfwbia5lkXtElnbQFlYYUl5kfR64",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "login-a906f.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "login-a906f",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "login-a906f.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "21858022853",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:21858022853:web:9fb083f12229b660eec7ac",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-K98GLJ10C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Configure Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.addScope('email');
googleProvider.addScope('profile');

// For development, we'll use a different approach
export const isDevelopment = import.meta.env.DEV;

// Configuration constants
export const CONFIG = {
  maxLoginAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes
  minPasswordLength: 6,
  enableRateLimiting: true
};