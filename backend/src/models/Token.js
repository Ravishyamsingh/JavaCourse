import mongoose from "mongoose";

// OAuth Token Schema for secure token management
const tokenSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    index: true 
  },
  accessToken: { 
    type: String, 
    required: true,
    select: false // Never return in queries by default
  },
  refreshToken: { 
    type: String, 
    required: true,
    select: false,
    unique: true,
    sparse: true
  },
  tokenType: { 
    type: String, 
    enum: ['Bearer', 'JWT'], 
    default: 'Bearer' 
  },
  scope: [{ 
    type: String 
  }],
  expiresAt: { 
    type: Date, 
    required: true,
    index: { expireAfterSeconds: 0 } // Auto-delete expired tokens
  },
  refreshExpiresAt: { 
    type: Date, 
    required: true 
  },
  provider: { 
    type: String, 
    enum: ['google', 'local'], 
    required: true 
  },
  providerTokenId: { 
    type: String, 
    sparse: true 
  },
  ipAddress: { 
    type: String 
  },
  userAgent: { 
    type: String 
  },
  isRevoked: { 
    type: Boolean, 
    default: false,
    index: true 
  },
  revokedAt: { 
    type: Date 
  },
  revokedReason: { 
    type: String,
    enum: ['user_logout', 'security_breach', 'token_refresh', 'admin_revoke']
  },
  lastUsed: { 
    type: Date, 
    default: Date.now 
  }
}, { 
  timestamps: true,
  collection: 'oauth_tokens'
});

// Compound indexes for performance
tokenSchema.index({ userId: 1, isRevoked: 1 });
tokenSchema.index({ refreshToken: 1, isRevoked: 1 });
tokenSchema.index({ expiresAt: 1, isRevoked: 1 });

// Instance methods
tokenSchema.methods.isExpired = function() {
  return new Date() > this.expiresAt;
};

tokenSchema.methods.isRefreshExpired = function() {
  return new Date() > this.refreshExpiresAt;
};

tokenSchema.methods.revoke = function(reason = 'user_logout') {
  this.isRevoked = true;
  this.revokedAt = new Date();
  this.revokedReason = reason;
  return this.save();
};

// Static methods
tokenSchema.statics.revokeAllUserTokens = function(userId, reason = 'security_breach') {
  return this.updateMany(
    { userId, isRevoked: false },
    { 
      isRevoked: true, 
      revokedAt: new Date(), 
      revokedReason: reason 
    }
  );
};

tokenSchema.statics.cleanupExpiredTokens = function() {
  return this.deleteMany({
    $or: [
      { expiresAt: { $lt: new Date() } },
      { refreshExpiresAt: { $lt: new Date() } }
    ]
  });
};

export const Token = mongoose.model("Token", tokenSchema);