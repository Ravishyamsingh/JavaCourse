# Production Deployment Guide

## 🚀 **BEFORE UPLOADING TO GITHUB**

### ❌ **CRITICAL SECURITY STEPS - DO THESE FIRST!**

1. **Remove Sensitive Data from Repository**
   ```bash
   # Make sure .env files are not tracked
   git rm --cached backend/.env
   git rm --cached workspace/shadcn-ui/.env
   git commit -m "Remove sensitive environment files"
   ```

2. **Verify .gitignore is Working**
   ```bash
   # Check that .env files are ignored
   git status
   # You should NOT see .env files listed
   ```

3. **Generate New Production Secrets**
   ```bash
   # Generate new JWT secrets for production
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

## 🔧 **Production Environment Setup**

### **Backend Production Configuration**

1. **Update Environment Variables** (`.env` on production server):
   ```bash
   NODE_ENV=production
   PORT=5000
   
   # Production Database (MongoDB Atlas recommended)
   MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/javacourse
   
   # Production Frontend URL
   FRONTEND_URL=https://your-frontend-domain.com
   
   # New Production JWT Secrets (generate new ones!)
   JWT_ACCESS_SECRET=your-new-production-secret
   JWT_REFRESH_SECRET=your-new-production-refresh-secret
   
   # Production Google OAuth (create new app in Google Console)
   GOOGLE_CLIENT_ID=your-production-google-client-id
   GOOGLE_CLIENT_SECRET=your-production-google-client-secret
   GOOGLE_CALLBACK_URL=https://your-api-domain.com/api/auth/google/callback
   
   # Production CORS
   CORS_ORIGIN=https://your-frontend-domain.com
   ```

2. **Production Dependencies**
   ```bash
   cd backend
   npm ci --only=production
   ```

### **Frontend Production Configuration**

1. **Update Environment Variables** (`.env` on production):
   ```bash
   # Production API URL
   VITE_API_URL=https://your-api-domain.com/api
   
   # Production App URL
   VITE_APP_URL=https://your-frontend-domain.com
   
   # Production Google Client ID
   VITE_GOOGLE_CLIENT_ID=your-production-google-client-id
   ```

2. **Build for Production**
   ```bash
   cd workspace/shadcn-ui
   pnpm install
   pnpm build
   ```

## 🌐 **Deployment Platforms (Choose One)**

### **Option 1: Vercel (Frontend) + Railway (Backend)**

#### **Frontend - Vercel Deployment**
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

#### **Backend - Railway Deployment**
1. Connect repository to Railway
2. Set environment variables in Railway dashboard
3. Connect MongoDB Atlas database
4. Deploy automatically

### **Option 2: Netlify (Frontend) + Heroku (Backend)**

#### **Frontend - Netlify**
1. Connect GitHub repository
2. Set build command: `cd workspace/shadcn-ui && pnpm build`
3. Set publish directory: `workspace/shadcn-ui/dist`
4. Set environment variables

#### **Backend - Heroku**
1. Create new Heroku app
2. Connect GitHub repository
3. Set environment variables
4. Deploy from main branch

### **Option 3: Full VPS Deployment (DigitalOcean/AWS)**

#### **Server Setup**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 for process management
npm install -g pm2

# Install Nginx for reverse proxy
sudo apt install nginx

# Clone repository
git clone https://github.com/yourusername/javacourse.git
cd javacourse
```

#### **Backend Setup**
```bash
cd backend
npm install --production
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

#### **Frontend Setup**
```bash
cd workspace/shadcn-ui
npm install
npm run build
sudo cp -r dist/* /var/www/html/
```

#### **Nginx Configuration**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 🔒 **Security Checklist for Production**

- [ ] All `.env` files are in `.gitignore`
- [ ] New JWT secrets generated for production
- [ ] Google OAuth configured for production domains
- [ ] Database secured with authentication
- [ ] HTTPS enabled (SSL certificates)
- [ ] CORS configured for production domains only
- [ ] Rate limiting enabled
- [ ] Input validation enabled
- [ ] Security headers configured (helmet.js)

## 📊 **Post-Deployment Verification**

1. **Test Authentication**
   - User registration works
   - Login/logout functions
   - Google OAuth works

2. **Test Core Features**
   - Course content loads
   - API endpoints respond
   - Database operations work

3. **Test Security**
   - HTTPS redirects work
   - CORS policies are enforced
   - Rate limiting is active

## 🚨 **Emergency Rollback Plan**

If deployment fails:
1. Revert to previous Git commit
2. Restore database backup
3. Update DNS to point to backup server
4. Investigate issues in development environment

## 📞 **Support & Monitoring**

- Set up error tracking (Sentry)
- Configure uptime monitoring
- Set up log aggregation
- Plan backup strategies
