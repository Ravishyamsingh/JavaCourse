import mongoose from "mongoose";

// Role enumeration for hierarchical permissions
const USER_ROLES = {
  GUEST: 'guest',
  USER: 'user',
  ADMIN: 'admin',
  SUPER_ADMIN: 'superadmin'
};

// User Schema for Authentication with Role-Based Access Control
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: false }, // Optional for Google OAuth users
  googleId: { type: String, unique: true, sparse: true }, // For Google OAuth
  avatar: { type: String }, // Profile picture URL
  provider: { type: String, enum: ['local', 'google'], default: 'local' }, // Authentication provider
  role: {
    type: String,
    enum: Object.values(USER_ROLES),
    default: USER_ROLES.USER
  }, // Role-based access control
  isEmailVerified: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true }, // Account status
  lastLogin: { type: Date },
  loginAttempts: { type: Number, default: 0 }, // Failed login tracking
  lockUntil: { type: Date }, // Account lock timestamp
  // Profile data
  profile: {
    bio: { type: String, maxlength: 500 },
    phone: { type: String },
    dateOfBirth: { type: Date },
    gender: { type: String, enum: ['male', 'female', 'other', 'prefer_not_to_say'] },
    location: {
      country: String,
      city: String,
      timezone: String
    },
    socialLinks: {
      linkedin: String,
      github: String,
      twitter: String,
      website: String
    }
  },
  // Course progress tracking
  progress: {
    completedLessons: [{ type: String }],
    completedQuizzes: [{ type: String }],
    achievements: [{ type: String }],
    certificatesEarned: [{ type: String }],
    totalScore: { type: Number, default: 0 },
    enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
    studyStreak: { type: Number, default: 0 },
    totalStudyTime: { type: Number, default: 0 }, // stored in hours to match UI calculations
    lastCompletedLessonId: { type: String },
    lastCompletedAt: { type: Date },
    lastSyncedAt: { type: Date }
  },
  // Security and session management
  security: {
    twoFactorEnabled: { type: Boolean, default: false },
    twoFactorSecret: String,
    backupCodes: [String],
    passwordResetToken: String,
    passwordResetExpires: Date,
    emailVerificationToken: String,
    emailVerificationExpires: Date
  },
  // Preferences and settings
  preferences: {
    theme: { type: String, enum: ['light', 'dark', 'system'], default: 'system' },
    notifications: {
      email: { type: Boolean, default: true },
      push: { type: Boolean, default: true },
      sms: { type: Boolean, default: false },
      courseUpdates: { type: Boolean, default: true },
      achievements: { type: Boolean, default: true },
      marketing: { type: Boolean, default: false }
    },
    language: { type: String, default: 'en' },
    privacy: {
      profileVisibility: { type: String, enum: ['public', 'private', 'friends'], default: 'public' },
      showProgress: { type: Boolean, default: true },
      showAchievements: { type: Boolean, default: true }
    }
  },
  // Admin/SuperAdmin specific fields
  adminData: {
    permissions: [{
      resource: { type: String, required: true },
      actions: [{ type: String, required: true }],
      conditions: mongoose.Schema.Types.Mixed
    }],
    lastActivity: Date,
    managedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    systemLogs: [{
      action: String,
      resource: String,
      timestamp: { type: Date, default: Date.now },
      details: mongoose.Schema.Types.Mixed
    }]
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtual for full name
userSchema.virtual('fullName').get(function() {
  return `${this.firstName} ${this.lastName}`;
});

// Virtual for account lock status
userSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

// Index for performance
userSchema.index({ role: 1 });
userSchema.index({ 'progress.enrolledCourses': 1 });
userSchema.index({ createdAt: -1 });
userSchema.index({ lastLogin: -1 });

// Pre-save middleware for password hashing
userSchema.pre('save', async function(next) {
  // Add any pre-save logic here
  next();
});

// Instance methods
userSchema.methods = {
  // Check if account is locked
  isAccountLocked() {
    return this.isLocked;
  },

  // Increment login attempts
  incLoginAttempts() {
    if (this.loginAttempts >= 5) {
      this.lockUntil = Date.now() + 2 * 60 * 60 * 1000; // 2 hours
    }
    this.loginAttempts += 1;
    return this.save();
  },

  // Reset login attempts
  resetLoginAttempts() {
    this.loginAttempts = 0;
    this.lockUntil = undefined;
    return this.save();
  },

  // Check role hierarchy
  hasRole(requiredRole) {
    const roleHierarchy = {
      [USER_ROLES.GUEST]: 0,
      [USER_ROLES.USER]: 1,
      [USER_ROLES.ADMIN]: 2,
      [USER_ROLES.SUPER_ADMIN]: 3
    };

    return roleHierarchy[this.role] >= roleHierarchy[requiredRole];
  },

  // Check specific permission
  hasPermission(resource, action) {
    if (this.role === USER_ROLES.SUPER_ADMIN) return true;
    if (this.role === USER_ROLES.ADMIN) {
      // Admins have most permissions except super admin functions
      const adminPermissions = ['read', 'write', 'update', 'delete'];
      return adminPermissions.includes(action);
    }

    // Check custom permissions for admin users
    if (this.adminData && this.adminData.permissions) {
      return this.adminData.permissions.some(perm =>
        perm.resource === resource && perm.actions.includes(action)
      );
    }

    return false;
  }
};

// Static methods
userSchema.statics = {
  // Find user by email or googleId
  async findByEmailOrGoogleId(identifier) {
    return this.findOne({
      $or: [
        { email: identifier },
        { googleId: identifier }
      ]
    });
  },

  // Get users by role
  async getUsersByRole(role) {
    return this.find({ role, isActive: true });
  },

  // Get active users count
  async getActiveUsersCount() {
    return this.countDocuments({ isActive: true });
  }
};

const User = mongoose.model("User", userSchema);

// Course Schema (existing)
const courseSchema = new mongoose.Schema({
  name: String,
  price: Number,
  courses: String,
});

const CourseModel = mongoose.model("Courses", courseSchema, "Courses");

export { User, CourseModel };