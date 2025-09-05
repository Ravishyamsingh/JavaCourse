import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Token } from '../models/Token.js';

class TokenManager {
  constructor() {
    this.JWT_SECRET = process.env.JWT_SECRET;
    this.ACCESS_TOKEN_EXPIRY = '15m';
    this.REFRESH_TOKEN_EXPIRY = '7d';
  }

  // Generate secure access token
  generateAccessToken(payload) {
    return jwt.sign(payload, this.JWT_SECRET, {
      expiresIn: this.ACCESS_TOKEN_EXPIRY,
      issuer: 'java-course-api',
      audience: 'java-course-client'
    });
  }

  // Generate secure refresh token
  generateRefreshToken() {
    return crypto.randomBytes(64).toString('hex');
  }

  // Create token pair with database storage
  async createTokenPair(userId, provider = 'local', scope = [], req = {}) {
    try {
      // Revoke existing tokens for security
      await Token.revokeAllUserTokens(userId, 'token_refresh');

      const accessToken = this.generateAccessToken({ 
        _id: userId, 
        type: 'access',
        scope 
      });
      
      const refreshToken = this.generateRefreshToken();
      
      const accessExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
      const refreshExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

      const tokenDoc = new Token({
        userId,
        accessToken: this.hashToken(accessToken),
        refreshToken: this.hashToken(refreshToken),
        tokenType: 'Bearer',
        scope,
        expiresAt: accessExpiry,
        refreshExpiresAt: refreshExpiry,
        provider,
        ipAddress: req.ip || req.connection?.remoteAddress,
        userAgent: req.get?.('User-Agent') || req.headers?.['user-agent']
      });

      await tokenDoc.save();

      return {
        accessToken,
        refreshToken,
        expiresIn: 900, // 15 minutes in seconds
        tokenType: 'Bearer'
      };
    } catch (error) {
      console.error('Token creation error:', error);
      throw new Error('Failed to create authentication tokens');
    }
  }

  // Verify access token
  async verifyAccessToken(token) {
    try {
      const decoded = jwt.verify(token, this.JWT_SECRET);
      const hashedToken = this.hashToken(token);
      
      const tokenDoc = await Token.findOne({
        userId: decoded._id,
        accessToken: hashedToken,
        isRevoked: false
      });

      if (!tokenDoc || tokenDoc.isExpired()) {
        throw new Error('Token expired or invalid');
      }

      // Update last used timestamp
      tokenDoc.lastUsed = new Date();
      await tokenDoc.save();

      return decoded;
    } catch (error) {
      throw new Error('Invalid access token');
    }
  }

  // Refresh token pair
  async refreshTokenPair(refreshToken, req = {}) {
    try {
      const hashedRefreshToken = this.hashToken(refreshToken);
      
      const tokenDoc = await Token.findOne({
        refreshToken: hashedRefreshToken,
        isRevoked: false
      }).populate('userId');

      if (!tokenDoc || tokenDoc.isRefreshExpired()) {
        throw new Error('Refresh token expired or invalid');
      }

      // Create new token pair
      const newTokens = await this.createTokenPair(
        tokenDoc.userId._id,
        tokenDoc.provider,
        tokenDoc.scope,
        req
      );

      return newTokens;
    } catch (error) {
      console.error('Token refresh error:', error);
      throw new Error('Failed to refresh tokens');
    }
  }

  // Revoke token
  async revokeToken(token, reason = 'user_logout') {
    try {
      const hashedToken = this.hashToken(token);
      
      const tokenDoc = await Token.findOne({
        $or: [
          { accessToken: hashedToken },
          { refreshToken: hashedToken }
        ],
        isRevoked: false
      });

      if (tokenDoc) {
        await tokenDoc.revoke(reason);
      }

      return true;
    } catch (error) {
      console.error('Token revocation error:', error);
      return false;
    }
  }

  // Revoke all user tokens
  async revokeAllUserTokens(userId, reason = 'security_breach') {
    try {
      await Token.revokeAllUserTokens(userId, reason);
      return true;
    } catch (error) {
      console.error('Bulk token revocation error:', error);
      return false;
    }
  }

  // Hash token for secure storage
  hashToken(token) {
    return crypto.createHash('sha256').update(token).digest('hex');
  }

  // Cleanup expired tokens (run as cron job)
  async cleanupExpiredTokens() {
    try {
      const result = await Token.cleanupExpiredTokens();
      console.log(`Cleaned up ${result.deletedCount} expired tokens`);
      return result.deletedCount;
    } catch (error) {
      console.error('Token cleanup error:', error);
      return 0;
    }
  }

  // Get user active sessions
  async getUserActiveSessions(userId) {
    try {
      const sessions = await Token.find({
        userId,
        isRevoked: false,
        expiresAt: { $gt: new Date() }
      }).select('ipAddress userAgent lastUsed createdAt provider');

      return sessions;
    } catch (error) {
      console.error('Get sessions error:', error);
      return [];
    }
  }

  // Validate token structure
  validateTokenStructure(token) {
    if (!token || typeof token !== 'string') {
      return false;
    }

    // JWT structure validation
    const parts = token.split('.');
    if (parts.length !== 3) {
      return false;
    }

    try {
      // Validate base64 encoding
      JSON.parse(Buffer.from(parts[0], 'base64').toString());
      JSON.parse(Buffer.from(parts[1], 'base64').toString());
      return true;
    } catch {
      return false;
    }
  }
}

export const tokenManager = new TokenManager();
export default tokenManager;