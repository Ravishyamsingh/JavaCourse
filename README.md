# Java Learning Platform

A full-stack Java learning platform with structured lessons, AI-generated quizzes, a browser-based code compiler, progress tracking, and admin tools.

## What it includes

- Interactive Java course content
- Gemini-powered quiz generation
- In-browser code execution
- Student progress and analytics
- Authentication, roles, and proctoring

## Project Structure

- `backend/` - Express API, auth, reports, and admin services
- `workspace/shadcn-ui/` - Vite frontend with the learning UI

## Getting Started

Install dependencies for the backend and frontend, then configure the required environment variables.

```bash
cd backend
npm install

cd ../workspace/shadcn-ui
pnpm install
```

## Common Scripts

- `backend`: `npm run dev` to start the API in development
- `workspace/shadcn-ui`: `pnpm dev` to start the frontend
- root: `npm run build` to build the frontend

## Notes

- Copy the sample environment file before running locally.
- Keep secrets out of version control.