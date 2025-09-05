# Environment Variables Guide

## Backend Environment Variables (.env)

The backend uses a comprehensive set of environment variables for configuration. Copy the `.env.sample` file to `.env` and configure the following variables:

### Server Configuration
- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `LOG_LEVEL` - Logging level (info/debug/error)

### Database Configuration
- `MONGODB_URI` - MongoDB connection string
- Alternative MongoDB Atlas connection format provided in comments

### Frontend Configuration
- `FRONTEND_URL` - URL of the frontend application
- Multiple origin examples provided for different environments

### JWT Configuration
- `JWT_ACCESS_SECRET` - Secret for JWT access token signing
- `JWT_REFRESH_SECRET` - Secret for JWT refresh token signing
- `JWT_ACCESS_EXPIRY` - Access token expiry time
- `JWT_REFRESH_EXPIRY` - Refresh token expiry time
- `JWT_SECRET` - Legacy JWT secret for backward compatibility

### Google OAuth 2.0 Configuration
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth client secret
- `GOOGLE_CALLBACK_URL` - Google OAuth callback URL
- Instructions for setting up Google OAuth in Google Cloud Console

### Security Configuration
- `BCRYPT_SALT_ROUNDS` - Number of rounds for bcrypt hashing
- `SESSION_SECRET` - Secret for session management

### Rate Limiting
- `RATE_LIMIT_WINDOW_MS` - Rate limiting window in milliseconds
- `RATE_LIMIT_MAX_REQUESTS` - Maximum requests per window

### CORS Configuration
- `CORS_ORIGIN` - Allowed CORS origins (comma-separated for multiple)

### Email Configuration
- `EMAIL_SERVICE` - Email service provider
- `EMAIL_USER` - Email user
- `EMAIL_PASS` - Email password or app password
- `EMAIL_FROM` - Sender email address

### File Upload Configuration
- `MAX_FILE_SIZE` - Maximum file size for uploads
- `ALLOWED_FILE_TYPES` - Comma-separated list of allowed file types

### Cloudinary Configuration
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

### Redis Configuration
- `REDIS_URL` - Redis connection URL

### Monitoring and Analytics
- `SENTRY_DSN` - Sentry DSN for error tracking
- `ANALYTICS_TRACKING_ID` - Google Analytics tracking ID

### API Keys for Third-party Services
- `STRIPE_SECRET_KEY` - Stripe secret key
- `STRIPE_PUBLISHABLE_KEY` - Stripe publishable key

## Frontend Environment Variables (.env)

The frontend uses Vite's environment variable system. Copy the `.env.example` file to `.env` and configure the following variables:

### Firebase Configuration
- `VITE_FIREBASE_API_KEY` - Firebase API key
- `VITE_FIREBASE_AUTH_DOMAIN` - Firebase auth domain
- `VITE_FIREBASE_PROJECT_ID` - Firebase project ID
- `VITE_FIREBASE_STORAGE_BUCKET` - Firebase storage bucket
- `VITE_FIREBASE_MESSAGING_SENDER_ID` - Firebase messaging sender ID
- `VITE_FIREBASE_APP_ID` - Firebase app ID
- `VITE_FIREBASE_MEASUREMENT_ID` - Firebase measurement ID

### Application Configuration
- `VITE_APP_NAME` - Application name
- `VITE_APP_URL` - Application URL

### API Configuration
- `VITE_API_URL` - Backend API URL (recommended addition)
- `VITE_GOOGLE_CLIENT_ID` - Google OAuth client ID (recommended addition)

## Security Best Practices

1. Never commit actual environment variable files to version control
2. Use strong, random secrets for JWT and session management
3. Use different secrets for different environments
4. Rotate secrets regularly
5. Use environment-specific configuration values
6. Limit the scope of API keys and tokens
7. Use app passwords for email services instead of account passwords

## Deployment-Specific Configuration

### Development Environment
- Use localhost URLs
- Use development database instances
- Use test API keys
- Enable detailed logging

### Production Environment
- Use production domain URLs
- Use production database instances
- Use production API keys
- Enable appropriate logging levels
- Configure proper CORS origins
- Set up SSL/TLS certificates
- Configure monitoring and alerts

## Environment Variable Validation

Both frontend and backend should validate required environment variables at startup to prevent runtime errors. Check the respective configuration files in each component for validation logic.