# GitHub Deployment Guide

This guide provides step-by-step instructions for deploying your Java Course Website project to GitHub and setting up continuous deployment.

## Prerequisites

1. GitHub account
2. Git installed on your local machine
3. Project code ready for deployment
4. Environment variables configured locally

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in to your account
2. Click the "+" icon in the top right corner and select "New repository"
3. Enter a repository name (e.g., "java-course-website")
4. Add a description (optional)
5. Choose to make the repository public or private
6. Do NOT initialize the repository with a README, .gitignore, or license
7. Click "Create repository"

## Step 2: Initialize Git in Your Local Project

1. Open a terminal in your project root directory
2. Initialize Git:
   ```bash
   git init
   ```
3. Add all files to Git:
   ```bash
   git add .
   ```
4. Commit the files:
   ```bash
   git commit -m "Initial commit"
   ```
5. Rename the default branch to main (if needed):
   ```bash
   git branch -M main
   ```
6. Add the remote origin:
   ```bash
   git remote add origin https://github.com/yourusername/your-repo-name.git
   ```
7. Push the code to GitHub:
   ```bash
   git push -u origin main
   ```

## Step 3: Verify Repository Contents

After pushing, verify that your repository contains:
- All source code files
- Documentation files (README.md, etc.)
- Configuration files (.gitignore, environment templates)
- No sensitive files or credentials

## Step 4: Configure GitHub Settings

### Repository Settings
1. Go to your repository on GitHub
2. Click "Settings" tab
3. In the "General" section:
   - Update repository description
   - Set repository visibility (public/private)
   - Manage collaboration access if needed

### Webhooks & Integrations
1. In Settings, click "Webhooks & Services"
2. Add webhooks for continuous integration if needed
3. Configure GitHub Apps for additional integrations

## Step 5: Set Up GitHub Actions (Optional but Recommended)

Create CI/CD pipelines for automated testing and deployment.

### Backend CI/CD Workflow
Create `.github/workflows/backend.yml`:

```yaml
name: Backend CI/CD

on:
  push:
    branches: [ main ]
    paths:
      - 'backend/**'
  pull_request:
    branches: [ main ]
    paths:
      - 'backend/**'

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x]
    
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
    - name: Install dependencies
      run: |
        cd backend
        npm ci
    - name: Run tests
      run: |
        cd backend
        npm test
      env:
        MONGODB_URI: ${{ secrets.MONGODB_URI }}
        JWT_SECRET: ${{ secrets.JWT_SECRET }}

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    - name: Deploy to Heroku
      uses: akhileshns/heroku-deploy@v3.12.12
      with:
        heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
        heroku_app_name: ${{ secrets.HEROKU_APP_NAME }}
        heroku_email: ${{ secrets.HEROKU_EMAIL }}
        appdir: backend
```

### Frontend CI/CD Workflow
Create `.github/workflows/frontend.yml`:

```yaml
name: Frontend CI/CD

on:
  push:
    branches: [ main ]
    paths:
      - 'workspace/shadcn-ui/**'
  pull_request:
    branches: [ main ]
    paths:
      - 'workspace/shadcn-ui/**'

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'pnpm'
        cache-dependency-path: 'workspace/shadcn-ui/pnpm-lock.yaml'
    
    - name: Install pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
    
    - name: Install dependencies
      run: |
        cd workspace/shadcn-ui
        pnpm install
    
    - name: Run linting
      run: |
        cd workspace/shadcn-ui
        pnpm lint
    
    - name: Run build
      run: |
        cd workspace/shadcn-ui
        pnpm build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'pnpm'
        cache-dependency-path: 'workspace/shadcn-ui/pnpm-lock.yaml'
    
    - name: Install pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
    
    - name: Install dependencies
      run: |
        cd workspace/shadcn-ui
        pnpm install
    
    - name: Build
      run: |
        cd workspace/shadcn-ui
        pnpm build
      env:
        VITE_API_URL: ${{ secrets.VITE_API_URL }}
        VITE_GOOGLE_CLIENT_ID: ${{ secrets.VITE_GOOGLE_CLIENT_ID }}
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        github-token: ${{ secrets.GITHUB_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
        working-directory: workspace/shadcn-ui
```

## Step 6: Configure GitHub Secrets

For secure deployment, configure secrets in your GitHub repository:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Secrets and variables" then "Actions"
4. Click "New repository secret"
5. Add the following secrets:

### Backend Secrets
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - Your JWT secret
- `GOOGLE_CLIENT_ID` - Your Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Your Google OAuth client secret
- `HEROKU_API_KEY` - Your Heroku API key (for Heroku deployment)
- `HEROKU_APP_NAME` - Your Heroku app name
- `HEROKU_EMAIL` - Your Heroku email

### Frontend Secrets
- `VITE_API_URL` - Your backend API URL
- `VITE_GOOGLE_CLIENT_ID` - Your Google OAuth client ID
- `VERCEL_TOKEN` - Your Vercel token (for Vercel deployment)
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

## Step 7: Set Up Branch Protection Rules

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Branches" in the left sidebar
4. Click "Add rule"
5. Set the branch name pattern (e.g., "main")
6. Enable the following options:
   - Require pull request reviews before merging
   - Require status checks to pass before merging
   - Require branches to be up to date before merging
   - Include administrators (optional)
7. Click "Create"

## Step 8: Configure GitHub Pages (Optional)

If you want to host documentation or a simple frontend on GitHub Pages:

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Select source:
   - Branch: main
   - Folder: /docs (or root if using root directory)
5. Click "Save"
6. Your site will be available at `https://username.github.io/repository-name`

## Step 9: Set Up GitHub Issues and Project Board

1. Go to your repository on GitHub
2. Click "Issues" tab
3. Create labels for different types of issues (bug, enhancement, documentation, etc.)
4. Click "Projects" tab
5. Click "New project"
6. Select "Basic kanban" template
7. Name your project (e.g., "Java Course Website Development")
8. Add issues to the project board for tracking progress

## Step 10: Configure GitHub Wiki (Optional)

1. Go to your repository on GitHub
2. Click "Wiki" tab
3. Click "Create the first page"
4. Add documentation pages for:
   - Getting Started Guide
   - API Documentation
   - Deployment Guide
   - Troubleshooting
   - Contributing Guidelines

## Best Practices for GitHub Deployment

### Commit Messages
- Use clear, descriptive commit messages
- Follow conventional commit format:
  - `feat: Add new feature`
  - `fix: Resolve bug issue`
  - `docs: Update documentation`
  - `refactor: Improve code structure`
  - `test: Add test cases`

### Branching Strategy
- Use `main` for production-ready code
- Create feature branches for new development
- Use pull requests for code review
- Delete merged branches

### Release Management
1. Create GitHub releases for major versions
2. Tag commits with version numbers
3. Include release notes with each release
4. Attach binaries or assets if needed

### Security
- Never commit sensitive information
- Use GitHub's secret scanning
- Enable two-factor authentication
- Regularly review repository access permissions

## Troubleshooting Common Issues

### Push Rejected
- Ensure you have proper permissions
- Check if branch protection rules are preventing push
- Verify your remote URL is correct

### Large Files
- Use Git LFS for large files
- Remove large files from history if accidentally committed
- Consider hosting large assets separately

### Merge Conflicts
- Pull latest changes before pushing
- Resolve conflicts locally
- Test after resolving conflicts

### CI/CD Failures
- Check workflow syntax
- Verify secrets are configured correctly
- Review logs for specific error messages

## Next Steps After GitHub Deployment

1. Set up continuous deployment to your hosting platforms
2. Configure monitoring and alerting
3. Set up automated backups
4. Implement security scanning
5. Configure performance monitoring
6. Set up user analytics
7. Create documentation for your team
8. Establish contribution guidelines