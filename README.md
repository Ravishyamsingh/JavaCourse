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
