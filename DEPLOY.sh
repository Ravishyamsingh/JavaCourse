#!/bin/bash

# Java Course Website Deployment Script

echo "🚀 Java Course Website Deployment Preparation"
echo "=============================================="

# Check if git is installed
if ! command -v git &> /dev/null
then
    echo "❌ Git is not installed. Please install Git before proceeding."
    exit 1
fi

echo ""
echo "🔒 RUNNING SECURITY CHECK FIRST..."
echo "=================================="

# Run security check
if [ -f "check-security.sh" ]; then
    chmod +x check-security.sh
    ./check-security.sh
    SECURITY_EXIT_CODE=$?
    
    if [ $SECURITY_EXIT_CODE -ne 0 ]; then
        echo ""
        echo "❌ DEPLOYMENT STOPPED DUE TO SECURITY ISSUES!"
        echo "Please fix the security issues above before proceeding."
        exit 1
    fi
else
    echo "⚠️  Security check script not found. Proceeding with caution..."
fi

echo ""
echo "🔧 Git Repository Setup"
echo "======================="

# Initialize git repository if not already initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Java Course Website"
    git branch -M main
    echo "✅ Git repository initialized successfully."
else
    echo "✅ Git repository already exists."
fi

echo ""
echo "✅ Deployment Preparation Complete!"
echo "===================================="
echo ""
echo "🚨 IMPORTANT SECURITY REMINDER:"
echo "Before pushing to GitHub, ensure you have:"
echo "✓ Removed all .env files from Git tracking"
echo "✓ Added .env files to .gitignore"
echo "✓ Generated new secrets for production"
echo ""
echo "📝 Next steps:"
echo "1. Create a new repository on GitHub"
echo "2. Add the remote origin:"
echo "   git remote add origin https://github.com/yourusername/your-repo.git"
echo "3. Push the code to GitHub:"
echo "   git push -u origin main"
echo ""
echo "📚 For detailed deployment instructions, please refer to:"
echo "- PRODUCTION_DEPLOYMENT_GUIDE.md (🔴 READ THIS FIRST!)"
echo "- README.md"
echo ""
echo "🌐 Recommended deployment platforms:"
echo "- Frontend: Vercel, Netlify"
echo "- Backend: Railway, Render, Heroku"
echo "- Database: MongoDB Atlas"
echo ""
echo "⚠️  Remember to configure production environment variables!"