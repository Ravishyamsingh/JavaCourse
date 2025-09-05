# Project Structure Guidelines

## Current Structure Analysis

The project currently has the following structure:
```
JavaCourseWebsite/
├── backend/                 # Node.js backend application
├── workspace/shadcn-ui/     # React frontend application
├── build/                   # Compiled frontend assets
├── cover/                   # Image assets
├── .github/                 # GitHub specific files
├── .storage/                # Storage directory
├── Various documentation files (.md)
└── Configuration files
```

## Recommended Structure for Deployment

For better deployment and maintainability, we recommend the following structure:

```
JavaCourseWebsite/
├── .github/
│   └── workflows/           # GitHub Actions workflows
├── backend/                 # Node.js backend application
│   ├── src/                 # Source code
│   ├── tests/               # Test files
│   ├── scripts/             # Utility scripts
│   ├── logs/                # Application logs (gitignored)
│   ├── .env.sample          # Environment variable template
│   ├── .gitignore           # Backend specific gitignore
│   ├── package.json         # Backend dependencies
│   └── README.md            # Backend specific documentation
├── frontend/                # React frontend application (renamed from workspace/shadcn-ui)
│   ├── public/              # Static assets
│   ├── src/                 # Source code
│   ├── .env.example         # Environment variable template
│   ├── .gitignore           # Frontend specific gitignore
│   ├── package.json         # Frontend dependencies
│   └── README.md            # Frontend specific documentation
├── docs/                    # Project documentation
│   ├── architecture/        # Architecture documents
│   ├── deployment/          # Deployment guides
│   └── api/                 # API documentation
├── scripts/                 # Project level scripts
├── .gitignore               # Root level gitignore
├── README.md                # Main project documentation
├── LICENSE                  # Project license
└── package.json             # Root package.json (if needed for monorepo setup)
```

## Structure Benefits

1. **Clear Separation**: Clear separation between frontend and backend
2. **Consistent Naming**: Renamed `workspace/shadcn-ui` to `frontend` for clarity
3. **Documentation Organization**: Centralized documentation in `docs/` directory
4. **Script Management**: Centralized scripts directory for project-level operations
5. **Deployment Ready**: Structure optimized for various deployment platforms

## Migration Steps

1. Rename `workspace/shadcn-ui` to `frontend`
2. Move documentation files to `docs/` directory
3. Create project-level scripts directory
4. Update README.md with new structure information
5. Verify all relative paths in code still work
6. Update deployment documentation to reflect new structure

## Path References to Update

After restructuring, the following paths may need to be updated:
- Import paths in frontend code
- API endpoints in frontend code
- Database connection paths in backend code
- Script file paths
- Documentation references

## Deployment Considerations

1. **Frontend Deployment**: Can be deployed as a static site to Vercel, Netlify, or similar platforms
2. **Backend Deployment**: Can be deployed to Heroku, DigitalOcean App Platform, or traditional servers
3. **Environment Variables**: Each component should have its own environment variable files
4. **Build Process**: Frontend needs to be built before deployment
5. **Database**: MongoDB connection strings need to be configured for production