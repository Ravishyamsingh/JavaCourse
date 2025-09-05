import crypto from 'crypto';

/**
 * PKCE (Proof Key for Code Exchange) implementation for OAuth 2.0
 * Provides additional security for OAuth flows
 */
class PKCEManager {
  /**
   * Generate code verifier (43-128 characters)
   */
  generateCodeVerifier() {
    return crypto.randomBytes(32).toString('base64url');
  }

  /**
   * Generate code challenge from verifier using SHA256
   */
  generateCodeChallenge(verifier) {
    return crypto
      .createHash('sha256')
      .update(verifier)
      .digest('base64url');
  }

  /**
   * Create PKCE pair for OAuth flow
   */
  createPKCEPair() {
    const codeVerifier = this.generateCodeVerifier();
    const codeChallenge = this.generateCodeChallenge(codeVerifier);
    
    return {
      codeVerifier,
      codeChallenge,
      codeChallengeMethod: 'S256'
    };
  }

  /**
   * Verify code verifier against challenge
   */
  verifyCodeChallenge(verifier, challenge) {
    const computedChallenge = this.generateCodeChallenge(verifier);
    return computedChallenge === challenge;
  }

  /**
   * Generate state parameter for CSRF protection
   */
  generateState() {
    return crypto.randomBytes(16).toString('base64url');
  }

  /**
   * Generate nonce for OpenID Connect
   */
  generateNonce() {
    return crypto.randomBytes(16).toString('base64url');
  }
}

export const pkceManager = new PKCEManager();
export default pkceManager;