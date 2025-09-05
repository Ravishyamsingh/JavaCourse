#!/bin/bash

# Pre-Deployment Security Checklist Script
# Run this script BEFORE uploading to GitHub

echo "🔒 PRE-DEPLOYMENT SECURITY CHECK"
echo "================================"

# Check if .env files exist (they shouldn't be in git)
echo "Checking for sensitive files..."

SENSITIVE_FILES_FOUND=false

if [ -f "backend/.env" ]; then
    echo "❌ CRITICAL: backend/.env file exists and may be tracked by Git!"
    echo "   Run: git rm --cached backend/.env"
    SENSITIVE_FILES_FOUND=true
fi

if [ -f "workspace/shadcn-ui/.env" ]; then
    echo "❌ CRITICAL: workspace/shadcn-ui/.env file exists and may be tracked by Git!"
    echo "   Run: git rm --cached workspace/shadcn-ui/.env"
    SENSITIVE_FILES_FOUND=true
fi

# Check if .env files are in .gitignore
echo ""
echo "Checking .gitignore configuration..."

if grep -q "\.env" .gitignore; then
    echo "✅ .env files are listed in .gitignore"
else
    echo "❌ CRITICAL: .env files are NOT in .gitignore!"
    echo "   Add the following to .gitignore:"
    echo "   .env"
    echo "   backend/.env"
    echo "   workspace/shadcn-ui/.env"
    SENSITIVE_FILES_FOUND=true
fi

# Check Git status for tracked sensitive files
echo ""
echo "Checking Git status for sensitive files..."

GIT_STATUS=$(git status --porcelain | grep -E "\.(env|key|pem|p12)$" || true)
if [ -n "$GIT_STATUS" ]; then
    echo "❌ CRITICAL: Sensitive files found in Git status:"
    echo "$GIT_STATUS"
    echo "   Remove these files from Git tracking!"
    SENSITIVE_FILES_FOUND=true
else
    echo "✅ No sensitive files found in Git status"
fi

# Check for hardcoded secrets in code
echo ""
echo "Scanning for potential hardcoded secrets..."

# Look for potential API keys, secrets, passwords
POTENTIAL_SECRETS=$(grep -r -E "(password|secret|key|token).*=.*['\"][a-zA-Z0-9]{20,}" --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" . 2>/dev/null | grep -v node_modules | head -5 || true)

if [ -n "$POTENTIAL_SECRETS" ]; then
    echo "⚠️  WARNING: Potential hardcoded secrets found:"
    echo "$POTENTIAL_SECRETS"
    echo "   Please review these and ensure they use environment variables"
else
    echo "✅ No obvious hardcoded secrets found"
fi

# Check for localhost URLs in production code
echo ""
echo "Checking for localhost URLs..."

LOCALHOST_REFS=$(grep -r "localhost" --include="*.js" --include="*.ts" --include="*.jsx" --include="*.tsx" . 2>/dev/null | grep -v node_modules | grep -v ".env.example" | head -5 || true)

if [ -n "$LOCALHOST_REFS" ]; then
    echo "⚠️  WARNING: localhost references found:"
    echo "$LOCALHOST_REFS"
    echo "   These should use environment variables for production"
else
    echo "✅ No localhost references found in code"
fi

echo ""
echo "================================"

if [ "$SENSITIVE_FILES_FOUND" = true ]; then
    echo "❌ DEPLOYMENT BLOCKED!"
    echo ""
    echo "🚨 CRITICAL SECURITY ISSUES FOUND!"
    echo "   You MUST fix these issues before deploying:"
    echo ""
    echo "   1. Remove .env files from Git tracking:"
    echo "      git rm --cached backend/.env"
    echo "      git rm --cached workspace/shadcn-ui/.env"
    echo ""
    echo "   2. Ensure .env files are in .gitignore"
    echo ""
    echo "   3. Generate new secrets for production"
    echo ""
    echo "   4. Commit the changes:"
    echo "      git commit -m 'Remove sensitive environment files'"
    echo ""
    echo "   5. Re-run this script to verify"
    echo ""
    exit 1
else
    echo "✅ SECURITY CHECK PASSED!"
    echo ""
    echo "Your project appears safe for deployment."
    echo ""
    echo "Next steps:"
    echo "1. Review the PRODUCTION_DEPLOYMENT_GUIDE.md"
    echo "2. Set up production environment variables"
    echo "3. Choose your deployment platform"
    echo "4. Deploy your application"
    echo ""
    echo "Remember:"
    echo "- Use NEW secrets for production"
    echo "- Configure production URLs"
    echo "- Set up production database"
    echo "- Enable HTTPS"
    echo ""
fi
