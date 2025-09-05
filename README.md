# Java Course Website

A comprehensive Java learning platform with modern full-stack architecture, user authentication, and course management system.

## 🚀 **Features**

- **Full-Stack Application:** React + TypeScript frontend, Node.js + Express backend
- **User Authentication:** Google OAuth + JWT with role-based access control
- **Course Management:** Interactive lessons, quizzes, and progress tracking
- **Modern UI:** shadcn/ui components with Tailwind CSS
- **Database:** MongoDB with cloud deployment ready
- **Security:** CORS, rate limiting, input validation, RBAC

## 🛠️ **Technology Stack**

### Frontend
- React 18 with TypeScript
- Vite build tool
- shadcn/ui + Tailwind CSS
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Passport.js for authentication
- Google OAuth 2.0 integration
- JWT for session management

## 📋 **Quick Setup**

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (free)
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ravishyamsingh/JavaCourse.git
   cd JavaCourse
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   cp .env.example .env
   # Configure your environment variables in .env
   npm start
   ```

3. **Frontend Setup**
   ```bash
   cd workspace/shadcn-ui
   npm install
   cp .env.example .env
   # Configure your environment variables in .env
   npm run dev
   ```

## 🌐 **Deployment**

### Database Setup
- Follow `MONGODB_DEPLOYMENT_GUIDE.md` for MongoDB Atlas setup

### Production Deployment
- See `PRODUCTION_DEPLOYMENT_GUIDE.md` for complete deployment instructions
- Supports Vercel, Netlify, Railway, Render, and other platforms

## 🔐 **Environment Variables**

### Backend (.env)
```bash
NODE_ENV=production
MONGO_URL=your_mongodb_atlas_connection_string
JWT_ACCESS_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Frontend (.env)
```bash
VITE_API_URL=your_backend_api_url
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## 📚 **Course Features**

- **Interactive Lessons:** Step-by-step Java programming tutorials
- **Code Examples:** Practical coding exercises and examples
- **Quizzes:** Knowledge assessment with instant feedback
- **Progress Tracking:** Monitor learning progress and achievements
- **User Roles:** Student, instructor, and admin access levels

## 🤝 **Contributing**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 **Author**

**Ravi Shyam Singh**
- GitHub: [@Ravishyamsingh](https://github.com/Ravishyamsingh)

---

⭐ **Star this repository if it helped you!**
