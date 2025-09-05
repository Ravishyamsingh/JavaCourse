# Project Deployment Plan

## 1. .gitignore File

Create a comprehensive .gitignore file for the root directory with the following content:

```gitignore
# General
node_modules/
dist/
build/
out/
*.log
.env
.env.local
.env.production
.env.development
.env.test
.env.*.local
logs/
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
Desktop.ini

# IDE files
.vscode/
.idea/
*.swp
*.swo
*~

# Vite
.vite/
.vite_opt_cache/

# Backend specific
backend/node_modules/
backend/dist/
backend/build/
backend/logs/
backend/*.log
backend/.env
backend/.env.local
backend/.env.production
backend/.env.development
backend/.env.test

# Frontend specific
workspace/shadcn-ui/node_modules/
workspace/shadcn-ui/dist/
workspace/shadcn-ui/build/
workspace/shadcn-ui/out/
workspace/shadcn-ui/.vite/
workspace/shadcn-ui/.env
workspace/shadcn-ui/.env.local
workspace/shadcn-ui/.env.production
workspace/shadcn-ui/.env.development
workspace/shadcn-ui/.env.test

# Build outputs
build/

# Coverage
coverage/
*.coverage
*.lcov

# Temporary files
.tmp
*.tmp
temp/
```

## 2. Project Structure Organization

The project has the following structure:
- Root directory with documentation files
- `backend/` directory containing the Node.js backend
- `workspace/shadcn-ui/` directory containing the React frontend
- `build/` directory with compiled frontend assets

## 3. README.md Content

Create a comprehensive README.md for the entire project:

```markdown
# Java Course Website

A comprehensive Java learning platform with course content, quizzes, and CMS functionality.

## Project Structure

- `backend/` - Node.js backend API with MongoDB
- `workspace/shadcn-ui/` - React frontend with TypeScript and shadcn/ui components
- `build/` - Compiled frontend assets

## Technology Stack

### Frontend
- React 18 with TypeScript
- Vite build tool
- shadcn/ui components with Tailwind CSS
- React Router for navigation
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Passport.js for authentication
- Google OAuth 2.0 integration
- JWT for session management

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB database
- Google OAuth credentials (for Google Sign-in)

### Backend Setup
1. Navigate to the `backend/` directory
2. Run `npm install` to install dependencies
3. Create a `.env` file based on `.env.sample`
4. Run `npm start` to start the development server

### Frontend Setup
1. Navigate to the `workspace/shadcn-ui/` directory
2. Run `pnpm install` to install dependencies
3. Create a `.env` file based on `.env.example`
4. Run `pnpm dev` to start the development server

## Deployment

### Backend Deployment
- Use PM2 for process management
- Configure environment variables for production
- Set up MongoDB connection for production

### Frontend Deployment
- Build the project with `pnpm build`
- Serve the `dist/` folder using a web server like Nginx

## Environment Variables

### Backend (.env)
- PORT - Server port (default: 3000)
- MONGODB_URI - MongoDB connection string
- JWT_SECRET - Secret for JWT token signing
- GOOGLE_CLIENT_ID - Google OAuth client ID
- GOOGLE_CLIENT_SECRET - Google OAuth client secret
- GOOGLE_CALLBACK_URL - Google OAuth callback URL
- FRONTEND_URL - URL of the frontend application

### Frontend (.env)
- VITE_API_URL - Backend API URL
- VITE_GOOGLE_CLIENT_ID - Google OAuth client ID

## Scripts

### Backend
- `npm start` - Start development server with nodemon
- `npm run prod` - Start production server
- `npm run pm2:start` - Start with PM2
- `npm run pm2:stop` - Stop PM2 process
- `npm run pm2:restart` - Restart PM2 process
- `npm run create-admin` - Create admin user

### Frontend
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
```

## 4. Environment Variable Templates

### Backend Environment Template (.env.sample)
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/javacourse

# JWT
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRE=7d

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

# Frontend URL
FRONTEND_URL=http://localhost:5173

# Security
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

### Frontend Environment Template (.env.example)
```env
VITE_API_URL=http://localhost:3000
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## 5. Deployment Instructions

### GitHub Repository Setup
1. Create a new repository on GitHub
2. Initialize git in the project root:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

### Backend Deployment Options
1. **Heroku**:
   - Create a new Heroku app
   - Connect to GitHub repository
   - Set environment variables in Heroku dashboard
   - Enable automatic deploys

2. **DigitalOcean App Platform**:
   - Create a new app
   - Link GitHub repository
   - Configure environment variables
   - Set build command: `npm install`
   - Set run command: `npm run prod`

3. **Traditional Server with PM2**:
   - Clone repository to server
   - Install dependencies: `npm install`
   - Set environment variables
   - Start with PM2: `npm run pm2:start`

### Frontend Deployment Options
1. **Vercel**:
   - Connect GitHub repository
   - Set environment variables
   - Configure build settings:
     - Build Command: `pnpm build`
     - Output Directory: `dist`
     - Install Command: `pnpm install`

2. **Netlify**:
   - Connect GitHub repository
   - Set environment variables
   - Configure build settings:
     - Build Command: `pnpm build`
     - Publish Directory: `dist`

3. **Traditional Server**:
   - Build the project: `pnpm build`
   - Serve the `dist/` folder using Nginx or Apache

## 6. Deployment Checklist

- [ ] Create comprehensive .gitignore file
- [ ] Update README.md with project information
- [ ] Verify environment variable templates
- [ ] Test local build process for both frontend and backend
- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Set up deployment platform (Vercel/Netlify for frontend, Heroku/DigitalOcean for backend)
- [ ] Configure environment variables on deployment platform
- [ ] Test deployed application
- [ ] Set up domain names if needed
- [ ] Configure SSL certificates
- [ ] Set up monitoring and logging