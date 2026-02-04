import { User, CourseModel } from "./models.js";
import { hashPassword, comparePassword, validatePasswordStrength } from "./utils/auth.js";
import { tokenManager } from "./utils/tokenManager.js";
import { verifyGoogleToken } from "./utils/googleAuth.js";
import { validateRequest, signupSchema, loginSchema, sanitizeInput } from "./utils/validation.js";
import { logger } from './utils/monitoring.js';
import { getLoggableEmail } from './utils/sanitization.js';

// Regular signup with email/password - Enhanced with validation
export const signup = async (req, res) => {
  try {
    logger.info('Signup attempt', { email: getLoggableEmail(req.body.email) });

    // Sanitize and validate input
    const sanitizedBody = sanitizeInput(req.body);
    const { error } = signupSchema.validate(sanitizedBody);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        code: 'VALIDATION_ERROR',
        errors: error.details.map(detail => ({
          field: detail.path.join('.'),
          message: detail.message
        }))
      });
    }

    const { firstName, lastName, email, password } = sanitizedBody;

    // Additional password strength validation
    const passwordValidation = validatePasswordStrength(password);
    if (!passwordValidation.isValid) {
      return res.status(400).json({
        success: false,
        message: "Password does not meet security requirements",
        code: 'WEAK_PASSWORD',
        errors: passwordValidation.errors
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
        code: 'EMAIL_EXISTS'
      });
    }

    // Hash password with enhanced security
    const hashedPassword = await hashPassword(password);

    // Create new user with enhanced defaults
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      provider: 'local',
      role: 'user', // Default role
      isEmailVerified: false,
      isActive: true,
      profile: {
        bio: '',
        socialLinks: {}
      },
      preferences: {
        theme: 'system',
        notifications: {
          email: true,
          push: true,
          sms: false,
          courseUpdates: true,
          achievements: true,
          marketing: false
        },
        language: 'en',
        privacy: {
          profileVisibility: 'public',
          showProgress: true,
          showAchievements: true
        }
      },
      progress: {
        completedLessons: [],
        completedQuizzes: [],
        achievements: [],
        certificatesEarned: [],
        totalScore: 0,
        enrolledCourses: [],
        studyStreak: 0,
        totalStudyTime: 0
      }
    });

    await newUser.save();

    // Issue initial token pair so the new user is authenticated immediately
    const { accessToken, refreshToken, expiresIn, tokenType } = await tokenManager.createTokenPair(
      newUser._id,
      'local',
      [`role:${newUser.role}`],
      req
    );

    logger.info('User registered successfully', { email: getLoggableEmail(email) });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      accessToken,
      refreshToken,
      expiresIn,
      tokenType,
      token: accessToken,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        avatar: newUser.avatar,
        role: newUser.role,
        provider: newUser.provider,
        isEmailVerified: newUser.isEmailVerified
      }
    });

  } catch (error) {
    logger.error('Signup error', { message: error.message, stack: error.stack });
    
    // Handle specific MongoDB errors
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
        code: 'DUPLICATE_EMAIL'
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Internal server error",
      code: 'INTERNAL_ERROR'
    });
  }
};

// Regular login with email/password - Fixed timing attack vulnerability
export const login = async (req, res) => {
  try {
    logger.info('Login attempt', { email: getLoggableEmail(req.body.email) });

    // Sanitize and validate input
    const sanitizedBody = sanitizeInput(req.body);
    const { error } = loginSchema.validate(sanitizedBody);
    if (error) {
      return res.status(400).json({
        success: false,
        message: error.details[0].message,
        code: 'VALIDATION_ERROR'
      });
    }

    const { email, password } = sanitizedBody;

    // Always perform password hashing to prevent timing attacks
    const dummyHash = '$2b$12$dummyhashtopreventtimingattacksanduserenum';

    try {
      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
        // Perform dummy password comparison to prevent timing attacks
        await comparePassword(password, dummyHash);

        return res.status(404).json({
          success: false,
          message: "User not found. Please register first.",
          code: 'USER_NOT_FOUND'
        });
      }

      // Check if account is locked
      const isLocked = user.lockUntil && user.lockUntil > new Date();
      if (isLocked) {
        await comparePassword(password, dummyHash); // Constant time operation
        const minutesRemaining = Math.ceil((user.lockUntil - new Date()) / 1000 / 60);
        return res.status(423).json({
          success: false,
          message: `Account is temporarily locked. Please try again in ${minutesRemaining} minutes.`,
          code: 'ACCOUNT_LOCKED',
          lockUntil: user.lockUntil
        });
      }

      // Check if user has a password set
      // If no password is set, user must use Google Sign-In or set a password first
      if (!user.password) {
        await comparePassword(password, dummyHash); // Constant time operation
        return res.status(401).json({
          success: false,
          message: "This account was created with Google Sign-In. To login with email and password, please use 'Forgot Password' to set a password first, or use 'Continue with Google'.",
          code: 'PASSWORD_NOT_SET',
          action: 'SET_PASSWORD'
        });
      }

      // Verify password
      const validPassword = await comparePassword(password, user.password);

      if (!validPassword) {
        await user.incLoginAttempts();
        return res.status(401).json({
          success: false,
          message: "Invalid email or password.",
          code: 'INVALID_CREDENTIALS'
        });
      }

      // Password is valid - reset login attempts
      await user.resetLoginAttempts();
      
      // Update last login timestamp
      user.lastLogin = new Date();
      await user.save();

      // Generate tokens
      const { accessToken, refreshToken, expiresIn, tokenType } = await tokenManager.createTokenPair(
        user._id,
        'local',
        [`role:${user.role}`],
        req
      );

      logger.info('Login successful', { email: getLoggableEmail(email), userId: user._id });
      
      res.json({
        success: true,
        message: "Login successful",
        accessToken,
        refreshToken,
        expiresIn,
        tokenType,
        token: accessToken,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          avatar: user.avatar,
          role: user.role,
          provider: user.provider,
          isEmailVerified: user.isEmailVerified,
          isActive: user.isActive,
          progress: user.progress
        }
      });

    } catch (authError) {
      logger.error('Authentication error', { message: authError.message, stack: authError.stack });
      return res.status(500).json({
        success: false,
        message: "Authentication failed",
        code: 'AUTH_ERROR'
      });
    }

  } catch (error) {
    logger.error('Login error', { message: error.message, stack: error.stack });
    res.status(500).json({
      success: false,
      message: "Internal server error",
      code: 'INTERNAL_ERROR'
    });
  }
};

// Google OAuth login/signup
export const googleAuth = async (req, res) => {
  try {
    logger.info('Google auth attempt');
    const { token } = req.body;

    if (!token) {
      logger.error('Google auth failed: No token provided');
      return res.status(400).json({
        success: false,
        message: "Google token is required"
      });
    }

    logger.info('Google token received', { tokenLength: token.length });

    // Verify Google token and get user info
    const googleUserInfo = await verifyGoogleToken(token);
    logger.info('Google token verified', { email: getLoggableEmail(googleUserInfo.email) });
    
    // Check if user exists
    let user = await User.findOne({ email: googleUserInfo.email });

    if (user) {
      // User exists, update Google info if needed
      if (!user.googleId) {
        user.googleId = googleUserInfo.googleId;
        // Only update provider if user doesn't have a password (pure Google user)
        if (!user.password) {
          user.provider = 'google';
        }
        user.avatar = googleUserInfo.avatar;
        user.isEmailVerified = googleUserInfo.isEmailVerified;
      }
      user.lastLogin = new Date();
      await user.save();
      logger.info('Updated existing user with Google info', { email: getLoggableEmail(user.email) });
    } else {
      // Create new user from Google info
      user = new User({
        firstName: googleUserInfo.firstName,
        lastName: googleUserInfo.lastName,
        email: googleUserInfo.email,
        googleId: googleUserInfo.googleId,
        avatar: googleUserInfo.avatar,
        provider: 'google',
        role: 'user', // Default role for new users
        isEmailVerified: googleUserInfo.isEmailVerified,
        isActive: true,
        lastLogin: new Date(),
        profile: {
          bio: '',
          socialLinks: {}
        },
        preferences: {
          theme: 'system',
          notifications: {
            email: true,
            push: true,
            sms: false,
            courseUpdates: true,
            achievements: true,
            marketing: false
          },
          language: 'en',
          privacy: {
            profileVisibility: 'public',
            showProgress: true,
            showAchievements: true
          }
        },
        progress: {
          completedLessons: [],
          completedQuizzes: [],
          achievements: [],
          certificatesEarned: [],
          totalScore: 0,
          enrolledCourses: [],
          studyStreak: 0,
          totalStudyTime: 0
        }
      });
      await user.save();
      logger.info('Created new user from Google info', { email: getLoggableEmail(user.email) });
    }

    // Admin role assignment is now handled through proper admin invitation system
    // No automatic role escalation based on email addresses

    // Issue token pair for Google-authenticated session
    const { accessToken, refreshToken, expiresIn, tokenType } = await tokenManager.createTokenPair(
      user._id,
      'google',
      [`role:${user.role}`],
      req
    );

    res.json({
      success: true,
      message: "Google authentication successful",
      accessToken,
      refreshToken,
      expiresIn,
      tokenType,
      token: accessToken,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
        provider: user.provider,
        isEmailVerified: user.isEmailVerified,
        progress: user.progress
      }
    });
  } catch (error) {
    logger.error('Google auth error', { message: error.message, stack: error.stack });
    res.status(401).json({
      success: false,
      message: error.message || "Google authentication failed"
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    
    // Handle case where user is not found (e.g., deleted account)
    if (!user) {
      logger.warn('Profile fetch failed: User not found', { userId: req.user._id?.toString() });
      return res.status(404).json({
        success: false,
        message: "User not found",
        code: 'USER_NOT_FOUND'
      });
    }
    
    res.json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        provider: user.provider,
        progress: user.progress,
        preferences: user.preferences,
        isEmailVerified: user.isEmailVerified,
        lastLogin: user.lastLogin,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    logger.error('Profile fetch error', { message: error.message, stack: error.stack });
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Course Controllers (existing)
export const getCourses = async (req, res) => {
  try {
    logger.info('Getting courses from database');
    const courseData = await CourseModel.find();
    logger.info('Found courses', { count: courseData.length });
    res.json(courseData);
  } catch (error) {
    logger.error('Error getting courses', { message: error.message, stack: error.stack });
    res.status(500).json({ message: error.message });
  }
};