import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAqIdHfwbia5lkXtElnbQFlYYUl5kfR64",
  authDomain: "login-a906f.firebaseapp.com",
  projectId: "login-a906f",
  storageBucket: "login-a906f.appspot.com",   
  messagingSenderId: "21858022853",
  appId: "1:21858022853:web:9fb083f12229b660eec7ac",
  measurementId: "G-K98GLJ10C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Configuration constants
export const CONFIG = {
  maxLoginAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes
  minPasswordLength: 6,
  enableRateLimiting: true
};