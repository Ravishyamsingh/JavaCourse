# Deployment Instructions

## Backend Deployment

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database (local or cloud instance)
- Google OAuth credentials
- PM2 (for production deployment)

### Environment Variables
Create a `.env` file in the `backend/` directory with the following variables:

```env
# Server Configuration
PORT=3000
NODE_ENV=production

# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=7d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=https://yourdomain.com/auth/google/callback

# Frontend URL
FRONTEND_URL=https://yourdomain.com

# Security
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

### Deployment Options

#### 1. Traditional Server with PM2
1. Clone the repository to your server
2. Navigate to the `backend/` directory
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install PM2 globally:
   ```bash
   npm install -g pm2
   ```
5. Start the application with PM2:
   ```bash
   npm run pm2:start
   ```

#### 2. Heroku Deployment
1. Create a new Heroku app
2. Connect your GitHub repository
3. Set environment variables in Heroku dashboard
4. Enable automatic deploys from the main branch

#### 3. DigitalOcean App Platform
1. Create a new app
2. Link your GitHub repository
3. Configure environment variables
4. Set build command: `npm install`
5. Set run command: `npm run prod`

## Frontend Deployment

### Prerequisites
- Node.js (v16 or higher)
- pnpm package manager

### Environment Variables
Create a `.env` file in the `workspace/shadcn-ui/` directory with the following variables:

```env
VITE_API_URL=https://your-backend-domain.com
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

### Build Process
1. Navigate to the `workspace/shadcn-ui/` directory
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Build the project:
   ```bash
   pnpm build
   ```
4. The built files will be in the `dist/` directory

### Deployment Options

#### 1. Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

#### 2. Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set environment variables in Netlify dashboard
3. Configure build settings:
   - Build Command: `pnpm build`
   - Publish Directory: `dist`

#### 3. Traditional Server Deployment
1. Build the project:
   ```bash
   pnpm build
   ```
2. Serve the `dist/` folder using a web server like Nginx or Apache

### Nginx Configuration Example
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        root /path/to/your/dist/folder;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
    
    # Proxy API requests to backend
    location /api/ {
        proxy_pass http://localhost:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Deployment Checklist

### Pre-deployment
- [ ] Verify all environment variables are set correctly
- [ ] Test the application locally in production mode
- [ ] Ensure all secrets are properly secured
- [ ] Verify database connections
- [ ] Test Google OAuth integration
- [ ] Check API endpoints are working correctly

### Backend Deployment
- [ ] Server environment is set up
- [ ] MongoDB is accessible
- [ ] Environment variables are configured
- [ ] Application starts without errors
- [ ] API endpoints are accessible
- [ ] Authentication is working
- [ ] Logging is configured

### Frontend Deployment
- [ ] Build process completes successfully
- [ ] All assets are loaded correctly
- [ ] API calls reach the backend
- [ ] Google OAuth works in production
- [ ] Responsive design works on all devices
- [ ] Performance is acceptable

### Post-deployment
- [ ] Test all user flows
- [ ] Monitor application logs
- [ ] Set up error tracking
- [ ] Configure SSL certificates
- [ ] Set up monitoring and alerts
- [ ] Test backup and recovery procedures