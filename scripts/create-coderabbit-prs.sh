#!/bin/bash
# Script to create multiple focused PRs for CodeRabbit review

# This script splits your codebase into logical chunks for thorough review

echo "🚀 Creating focused PRs for complete CodeRabbit coverage..."

# Backend API files
git checkout -b coderabbit-backend-api
git add "Java Course Website Design/backend/src/controllers/"
git add "Java Course Website Design/backend/src/routes/"  
git add "Java Course Website Design/backend/src/middleware/"
git commit -m "feat: Backend API controllers, routes, and middleware for CodeRabbit review"
git push -u origin coderabbit-backend-api

# Backend services and utilities
git checkout main
git checkout -b coderabbit-backend-services  
git add "Java Course Website Design/backend/src/services/"
git add "Java Course Website Design/backend/src/utils/"
git add "Java Course Website Design/backend/src/models/"
git commit -m "feat: Backend services, utilities, and models for CodeRabbit review"
git push -u origin coderabbit-backend-services

# Frontend components
git checkout main  
git checkout -b coderabbit-frontend-components
git add "Java Course Website Design/workspace/shadcn-ui/src/components/"
git commit -m "feat: Frontend React components for CodeRabbit review"  
git push -u origin coderabbit-frontend-components

# Frontend pages and routing
git checkout main
git checkout -b coderabbit-frontend-pages
git add "Java Course Website Design/workspace/shadcn-ui/src/pages/"
git add "Java Course Website Design/workspace/shadcn-ui/src/contexts/"
git commit -m "feat: Frontend pages and contexts for CodeRabbit review"
git push -u origin coderabbit-frontend-pages

# Frontend services and utilities  
git checkout main
git checkout -b coderabbit-frontend-services
git add "Java Course Website Design/workspace/shadcn-ui/src/services/"
git add "Java Course Website Design/workspace/shadcn-ui/src/utils/"
git add "Java Course Website Design/workspace/shadcn-ui/src/lib/"
git commit -m "feat: Frontend services and utilities for CodeRabbit review"
git push -u origin coderabbit-frontend-services

# Configuration and build files
git checkout main
git checkout -b coderabbit-config-build
git add "Java Course Website Design/backend/src/config/"
git add "Java Course Website Design/workspace/shadcn-ui/src/config/"
git add "**/package.json"
git add "**/*.config.*"
git add "**/tsconfig*.json"
git commit -m "feat: Configuration and build files for CodeRabbit review"
git push -u origin coderabbit-config-build

echo "✅ Created 5 focused branches for comprehensive CodeRabbit review"
echo "📋 Next steps:"
echo "1. Create PRs for each branch on GitHub"  
echo "2. CodeRabbit will review each PR thoroughly"
echo "3. Merge approved PRs back to main"