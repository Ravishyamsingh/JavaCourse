# Vercel Deployment Guide

This guide will help you deploy your Java Course Website to Vercel with Firebase authentication.

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Firebase Project**: Ensure your Firebase project is properly configured
3. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, etc.)

## Step 1: Environment Variables Setup

### Local Development
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Firebase configuration values in `.env`:
   ```env
   VITE_FIREBASE_API_KEY=your_actual_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

### Vercel Environment Variables
1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

   | Variable Name | Value | Environment |
   |---------------|-------|-------------|
   | `VITE_FIREBASE_API_KEY` | Your Firebase API Key | Production, Preview, Development |
   | `VITE_FIREBASE_AUTH_DOMAIN` | your-project.firebaseapp.com | Production, Preview, Development |
   | `VITE_FIREBASE_PROJECT_ID` | Your Firebase Project ID | Production, Preview, Development |
   | `VITE_FIREBASE_STORAGE_BUCKET` | your-project.appspot.com | Production, Preview, Development |
   | `VITE_FIREBASE_MESSAGING_SENDER_ID` | Your Messaging Sender ID | Production, Preview, Development |
   | `VITE_FIREBASE_APP_ID` | Your Firebase App ID | Production, Preview, Development |
   | `VITE_FIREBASE_MEASUREMENT_ID` | Your Measurement ID | Production, Preview, Development |

## Step 2: Firebase Configuration

### Authentication Setup
1. Go to Firebase Console → Authentication → Sign-in method
2. Enable **Email/Password** authentication
3. Enable **Google** authentication:
   - Add your Vercel domain to authorized domains
   - Configure OAuth consent screen

### Authorized Domains
Add your Vercel domains to Firebase:
1. Go to Firebase Console → Authentication → Settings → Authorized domains
2. Add:
   - `your-app.vercel.app` (your production domain)
   - `*.vercel.app` (for preview deployments)

## Step 3: Deploy to Vercel

### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link your project
```

### Option 2: Git Integration
1. Connect your Git repository to Vercel
2. Import your project
3. Vercel will automatically detect it's a Vite project
4. Deploy!

## Step 4: Post-Deployment Configuration

### Domain Configuration
1. Update Firebase authorized domains with your custom domain (if using one)
2. Update CORS settings if needed

### Testing
1. Test Google authentication
2. Test email/password authentication
3. Verify all protected routes work correctly

## Troubleshooting

### Common Issues

#### 1. Firebase Configuration Errors
**Error**: "Missing required Firebase environment variables"
**Solution**: Ensure all environment variables are set in Vercel dashboard

#### 2. Authentication Popup Blocked
**Error**: "Popup was blocked"
**Solution**: 
- Add your domain to Firebase authorized domains
- Ensure popup blockers are disabled during testing

#### 3. CORS Issues
**Error**: Cross-origin request blocked
**Solution**: 
- Verify Firebase authorized domains include your Vercel domain
- Check Firebase security rules

#### 4. Build Failures
**Error**: Build fails on Vercel
**Solution**:
- Check that all dependencies are in `package.json`
- Verify environment variables are set
- Check build logs for specific errors

### Environment Variable Validation
The app includes built-in validation for required environment variables. If any are missing, you'll see a clear error message in the console.

## Security Considerations

### Environment Variables
- ✅ Firebase config is now in environment variables
- ✅ `.env` file is gitignored
- ✅ Production secrets are secure in Vercel

### Firebase Security
- Configure Firebase Security Rules
- Set up proper authentication flows
- Monitor authentication usage

### Best Practices
1. Use different Firebase projects for development/production
2. Regularly rotate API keys
3. Monitor Firebase usage and quotas
4. Set up proper error logging

## Performance Optimization

### Vercel Configuration
The `vercel.json` file includes:
- Static asset caching (1 year)
- SPA routing configuration
- Build optimization settings

### Firebase Optimization
- Enable Firebase Analytics (optional)
- Configure proper indexing
- Monitor performance metrics

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check browser console for errors
3. Verify Firebase configuration
4. Test locally first

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)