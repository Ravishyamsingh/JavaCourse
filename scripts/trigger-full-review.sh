#!/bin/bash
# Manual CodeRabbit review trigger for all files

echo "🔍 Triggering comprehensive CodeRabbit review..."

# Create a comprehensive commit with all changes
git add .
git status

# Count files to be reviewed
file_count=$(git diff --cached --name-only | wc -l)
echo "📊 Files staged for review: $file_count"

if [ $file_count -gt 100 ]; then
    echo "⚠️  Large changeset detected. Consider splitting into smaller PRs."
    echo "Run ./scripts/create-coderabbit-prs.sh for optimal review coverage."
fi

# Create comprehensive commit
git commit -m "chore: Comprehensive codebase update for CodeRabbit review

This commit includes all current changes for complete AI code review:

Backend Changes:
- API controllers and routes
- Services and utilities  
- Security middleware
- Database models

Frontend Changes:
- React components and pages
- Context providers
- Services and utilities
- TypeScript configurations

Configuration Changes:
- Build configurations
- Environment settings
- CodeRabbit settings

Request comprehensive review of:
- Code quality and best practices
- Security vulnerabilities  
- Performance optimizations
- Type safety improvements
- Error handling patterns
"

# Push to trigger CodeRabbit
git push

echo "✅ Comprehensive review triggered!"
echo "🔗 Check your GitHub PR for CodeRabbit analysis"