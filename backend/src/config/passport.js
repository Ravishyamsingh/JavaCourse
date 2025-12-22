import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import config from '../config.js';
import { User } from '../models.js';
import { tokenManager } from '../utils/tokenManager.js';

// Google OAuth 2.0 Strategy Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL:
        config.GOOGLE_CALLBACK_URL || `${config.BACKEND_URL}/api/auth/google/callback`,
      scope: ['profile', 'email'],
      passReqToCallback: true
    },
    async (req, accessToken, refreshToken, profile, done) => {
      try {
        console.log('🔐 Google OAuth Profile:', {
          id: profile.id,
          email: profile.emails?.[0]?.value,
          name: profile.displayName,
          provider: profile.provider
        });

        // Check if user already exists with this Google ID
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
          // Update last login and profile info
          user.lastLogin = new Date();
          user.avatar = profile.photos?.[0]?.value || user.avatar;
          await user.save();

          console.log('✅ Existing Google user found:', user.email);
          return done(null, user);
        }

        // Check if user exists with same email but different provider
        const existingUser = await User.findOne({
          email: profile.emails?.[0]?.value,
          provider: { $ne: 'google' }
        });

        if (existingUser) {
          // Link the Google account to the existing local account
          console.log('🔗 Linking Google account to existing local account:', existingUser.email);
          
          existingUser.googleId = profile.id;
          existingUser.avatar = profile.photos?.[0]?.value || existingUser.avatar;
          existingUser.isEmailVerified = true; // Google verified the email
          existingUser.lastLogin = new Date();
          await existingUser.save();
          
          console.log('✅ Account linked successfully');
          return done(null, existingUser);
        }

        // Create new user from Google profile
        const names = profile.displayName?.split(' ') || [];
        const firstName = names[0] || 'Google';
        const lastName = names.slice(1).join(' ') || 'User';

        user = new User({
          firstName,
          lastName,
          email: profile.emails?.[0]?.value,
          googleId: profile.id,
          avatar: profile.photos?.[0]?.value,
          provider: 'google',
          isEmailVerified: true, // Google emails are pre-verified
          role: 'user', // Default role for new users
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
            language: 'en'
          }
        });

        await user.save();
        console.log('✅ New Google user created:', user.email);

        return done(null, user);
      } catch (error) {
        console.error('❌ Google OAuth error:', error);
        return done(error, null);
      }
    }
  )
);

// JWT Strategy for protecting routes
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromExtractors([
        // Extract from Authorization header
        ExtractJwt.fromAuthHeaderAsBearerToken(),
        // Extract from cookies
        (req) => {
          return req?.cookies?.accessToken;
        },
        // Extract from query parameter (for development/testing)
        ExtractJwt.fromUrlQueryParameter('token')
      ]),
      secretOrKey: config.JWT_ACCESS_SECRET,
      passReqToCallback: true
    },
    async (req, jwtPayload, done) => {
      try {
        console.log('🔍 JWT Verification - Payload:', {
          userId: jwtPayload._id,
          email: jwtPayload.email,
          role: jwtPayload.role,
          iat: jwtPayload.iat,
          exp: jwtPayload.exp
        });

        // Find user by ID
        const user = await User.findById(jwtPayload._id)
          .select('-password -security.passwordResetToken -security.passwordResetExpires')
          .lean();

        if (!user) {
          console.log('❌ User not found for JWT token');
          return done(null, false, { message: 'User not found' });
        }

        // Check if account is active
        if (!user.isActive) {
          console.log('❌ Account is deactivated');
          return done(null, false, { message: 'Account is deactivated' });
        }

        // Check if account is locked
        if (user.lockUntil && user.lockUntil > Date.now()) {
          console.log('❌ Account is locked');
          return done(null, false, { message: 'Account is temporarily locked' });
        }

        // Update last activity for admin users
        if (user.role === 'admin' || user.role === 'superadmin') {
          await User.findByIdAndUpdate(user._id, {
            'adminData.lastActivity': new Date()
          });
        }

        console.log('✅ JWT user authenticated:', user.email);
        return done(null, user);
      } catch (error) {
        console.error('❌ JWT Strategy error:', error);
        return done(error, false);
      }
    }
  )
);

// Serialize user for session (required by Passport)
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
      .select('-password')
      .lean();

    if (!user) {
      return done(null, false);
    }

    done(null, user);
  } catch (error) {
    console.error('❌ Deserialize user error:', error);
    done(error, null);
  }
});

export default passport;