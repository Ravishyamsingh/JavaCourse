# Java Course Learning Platform

<p align="center">
  <strong>A modern full-stack platform for learning Java, generating AI quizzes, tracking progress, and managing content from one clean dashboard.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?logo=react&logoColor=000" alt="Frontend Badge" />
  <img src="https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-339933?logo=node.js&logoColor=fff" alt="Backend Badge" />
  <img src="https://img.shields.io/badge/AI-Gemini%20Powered-F4B400?logo=google&logoColor=000" alt="AI Badge" />
  <img src="https://img.shields.io/badge/Language-TypeScript-3178C6?logo=typescript&logoColor=fff" alt="TypeScript Badge" />
  <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript Badge" />
  <img src="https://img.shields.io/badge/Library-React-61DAFB?logo=react&logoColor=000" alt="React Badge" />
  <img src="https://img.shields.io/badge/Framework-Express-000000?logo=express&logoColor=fff" alt="Express Badge" />
  <img src="https://img.shields.io/badge/Container-Docker-2496ED?logo=docker&logoColor=fff" alt="Docker Badge" />
  <img src="https://img.shields.io/badge/Styling-Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff" alt="Tailwind Badge" />
  <img src="https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=fff" alt="MongoDB Badge" />
  <img src="https://img.shields.io/badge/License-ISC-3DA639" alt="License Badge" />
</p>

## Overview

This project is built for students, instructors, and admins who need a simple, structured, and professional learning experience. It combines guided lessons, AI-based quiz generation, a dashboard for progress tracking, and an admin panel for content control.

## Developer

Built and maintained by **Ravi Shyam Singh**.

## Key Features

- Clean landing page with a strong first impression
- Simple home page for course navigation and learning access
- Dashboard for progress tracking and user activity
- AI-powered quiz generation for faster practice
- Admin panel for managing users and content
- Role-based learning workflow for a structured experience

## Tech Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS, shadcn/ui
- Backend: Node.js, Express, MongoDB
- AI & Tools: Gemini API, Monaco Editor, React Query, Axios

## Screenshots

All screenshots are stored in `docs/readme-images/`.

| Page | Preview |
| --- | --- |
| Landing Page | ![Landing Page](./docs/readme-images/landing-page.png) |
| Home Page | ![Home Page](./docs/readme-images/home-page.png) |
| Dashboard | ![Dashboard](./docs/readme-images/dashboard.png) |
| AI Powered Quiz Generation | ![AI Powered Quiz Generation](./docs/readme-images/quiz-generation.png) |
| Admin Panel | ![Admin Panel](./docs/readme-images/admin-panel.png) |

## File Structure

- `backend/` - API, authentication, reports, admin services, and database logic
- `workspace/shadcn-ui/` - Frontend application and user interface
- `docs/readme-images/` - Screenshot assets used in this README

## Configuration

Use the environment sample files in the project root to configure the app before running it. The backend expects settings for Gemini, MongoDB, Redis, OAuth, JWT, email, and security.

## Quick Start

```bash
cd backend
npm install

cd ../workspace/shadcn-ui
pnpm install
```

## Run Locally

- Backend: `npm run dev` inside `backend/`
- Frontend: `pnpm dev` inside `workspace/shadcn-ui/`

## Useful Scripts

### Backend

- `npm run dev` - Start the backend in development mode
- `npm run prod` - Start the backend in production mode
- `npm run create-admin` - Create an admin user
- `npm run init-db` - Initialize the database
- `npm run verify-config` - Validate configuration

### Frontend

- `pnpm dev` - Start the frontend in development mode
- `pnpm build` - Build the frontend for production
- `pnpm lint` - Run lint checks

## Notes

- Keep secrets out of version control.
- Place screenshot files in `docs/readme-images/` using the same names referenced above.