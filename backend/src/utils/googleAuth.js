import { OAuth2Client } from 'google-auth-library';
import dotenv from "dotenv";

dotenv.config();

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * Verify Google OAuth token and extract user information
 * @param {string} token - Google OAuth token from frontend
 * @returns {Object} User information from Google
 */
export const verifyGoogleToken = async (token) => {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    
    return {
      googleId: payload.sub,
      email: payload.email,
      firstName: payload.given_name || '',
      lastName: payload.family_name || '',
      avatar: payload.picture || '',
      isEmailVerified: payload.email_verified || false
    };
  } catch (error) {
    console.error('Google token verification failed:', error);
    throw new Error('Invalid Google token');
  }
};

/**
 * Generate Google OAuth URL for server-side flow (alternative method)
 * @returns {string} Google OAuth authorization URL
 */
export const getGoogleAuthURL = () => {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  
  const options = {
    redirect_uri: `${process.env.BACKEND_URL || 'http://localhost:8000'}/auth/google/callback`,
    client_id: process.env.GOOGLE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  };

  const qs = new URLSearchParams(options);
  return `${rootUrl}?${qs.toString()}`;
};

/**
 * Exchange authorization code for tokens (server-side flow)
 * @param {string} code - Authorization code from Google
 * @returns {Object} User information
 */
export const getGoogleUserFromCode = async (code) => {
  try {
    // Exchange code for tokens
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    // Get user info
    const userInfoResponse = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokens.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokens.access_token}`,
        },
      }
    );

    const userInfo = await userInfoResponse.json();

    return {
      googleId: userInfo.id,
      email: userInfo.email,
      firstName: userInfo.given_name || '',
      lastName: userInfo.family_name || '',
      avatar: userInfo.picture || '',
      isEmailVerified: userInfo.verified_email || false
    };
  } catch (error) {
    console.error('Failed to get Google user from code:', error);
    throw new Error('Failed to authenticate with Google');
  }
};
