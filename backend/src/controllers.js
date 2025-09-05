import { User, CourseModel } from "./models.js";
import { hashPassword, comparePassword, generateToken, validatePasswordStrength } from "./utils/auth.js";
import { verifyGoogleToken } from "./utils/googleAuth.js";
import { validateRequest, signupSchema, loginSchema, sanitizeInput } from "./utils/validation.js";

// Regular signup with email/password - Enhanced with validation
export const signup = async (req, res) => {
  try {
    console.log('📝 Signup attempt for:', req.body.email);

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

    // Generate JWT token using deprecated function (will be replaced with tokenManager)
    const token = generateToken({
      _id: newUser._id,
      email: newUser.email,
      role: newUser.role
    });

    console.log('✅ User registered successfully:', email);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      token,
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
    console.error('❌ Signup error:', error);
    
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
    console.log('🔐 Login attempt for:', req.body.email);

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
    let user = null;
    let validPassword = false;

    try {
      // Find user
      user = await User.findOne({ email });
      
      if (user) {
        // Check if account is locked
        if (user.isAccountLocked()) {
          await comparePassword(password, dummyHash); // Constant time operation
          return res.status(423).json({
            success: false,
            message: "Account is temporarily locked due to multiple failed login attempts",
            code: 'ACCOUNT_LOCKED'
          });
        }

        // Check if user signed up with Google
        if (user.provider === 'google' && !user.password) {
          await comparePassword(password, dummyHash); // Constant time operation
          return res.status(401).json({
            success: false,
            message: "Please sign in with Google",
            code: 'GOOGLE_AUTH_REQUIRED'
          });
        }

        // Check password
        validPassword = await comparePassword(password, user.password);
      } else {
        // Perform dummy password comparison to prevent timing attacks
        await comparePassword(password, dummyHash);
      }

      if (!user || !validPassword) {
        // Increment login attempts if user exists
        if (user) {
          await user.incLoginAttempts();
        }
        
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
          code: 'INVALID_CREDENTIALS'
        });
      }

      // Reset login attempts on successful login
      await user.resetLoginAttempts();
      
      // Update last login
      user.lastLogin = new Date();
      await user.save();

      // Generate token using deprecated function (will be replaced with tokenManager)
      const token = generateToken({
        _id: user._id,
        email: user.email,
        role: user.role
      });

      console.log('✅ Login successful for:', email);
      res.json({
        success: true,
        message: "Login successful",
        token: token,
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
      console.error('❌ Authentication error:', authError);
      return res.status(500).json({
        success: false,
        message: "Authentication failed",
        code: 'AUTH_ERROR'
      });
    }

  } catch (error) {
    console.error('❌ Login error:', error);
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
    console.log('🔍 Google auth attempt');
    const { token } = req.body;

    if (!token) {
      console.error('❌ Google auth failed: No token provided');
      return res.status(400).json({
        success: false,
        message: "Google token is required"
      });
    }

    console.log('🔑 Google token received, length:', token.length);

    // Verify Google token and get user info
    const googleUserInfo = await verifyGoogleToken(token);
    console.log('✅ Google token verified for:', googleUserInfo.email);
    
    // Check if user exists
    let user = await User.findOne({ email: googleUserInfo.email });

    if (user) {
      // User exists, update Google info if needed
      if (!user.googleId) {
        user.googleId = googleUserInfo.googleId;
        user.provider = 'google';
        user.avatar = googleUserInfo.avatar;
        user.isEmailVerified = googleUserInfo.isEmailVerified;
      }
      user.lastLogin = new Date();
      await user.save();
      console.log('🔄 Updated existing user with Google info');
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
      console.log('✅ Created new user from Google info');
    }

    // Admin role assignment is now handled through proper admin invitation system
    // No automatic role escalation based on email addresses

    // Generate JWT token
    const jwtToken = generateToken({
      _id: user._id,
      email: user.email,
      role: user.role
    });

    res.json({
      success: true,
      message: "Google authentication successful",
      token: jwtToken,
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
    console.error('❌ Google auth error:', error);
    res.status(401).json({
      success: false,
      message: error.message || "Google authentication failed"
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
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
    console.error('❌ Profile fetch error:', error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Course Controllers (existing)
export const getCourses = async (req, res) => {
  try {
    console.log("Getting courses from database...");
    const courseData = await CourseModel.find();
    console.log("Found courses:", courseData);
    console.log("Number of courses:", courseData.length);
    res.json(courseData);
  } catch (error) {
    console.error("Error getting courses:", error);
    res.status(500).json({ message: error.message });
  }
};