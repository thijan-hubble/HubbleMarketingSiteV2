# Hubble - Supply Chain Management Platform

## Overview
A boutique software development portfolio/landing site focused on supply chain digital solutions. Built as a full-stack TypeScript application.

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS, Radix UI, Wouter (routing), TanStack React Query, Framer Motion
- **Backend**: Express.js, TypeScript, Drizzle ORM, Neon (serverless PostgreSQL)
- **Auth**: Passport.js (local strategy)
- **Build**: Vite (client), esbuild (server)

## Project Structure
```
client/          - React frontend (pages, components, hooks)
server/          - Express backend (routes, storage, vite dev server config)
shared/          - Shared types and schemas (Drizzle + Zod)
```

## Key Files
- `server/index.ts` - Express app entry point, serves on port 5000
- `server/routes.ts` - API routes (contact form submission)
- `server/storage.ts` - Data storage layer
- `server/vite.ts` - Vite dev server integration & static file serving
- `client/src/App.tsx` - React app entry point with routing

## Scripts
- `npm run dev` - Development server (Vite HMR + Express)
- `npm run build` - Production build (Vite + esbuild)
- `npm start` - Production server
- `npm run db:push` - Push Drizzle schema to database

## Environment
- App runs on port 5000 (required by Replit)
- Development uses Vite middleware for HMR
- Production serves static files from `dist/public`
