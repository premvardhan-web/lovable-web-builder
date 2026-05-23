# APM Roadmap

A fully functional responsive web application built with TanStack Start, React, and Tailwind CSS.

## Deploy to Vercel

Click the button below to deploy this app to Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo-name)

> **Note:** After deploying, you must add your environment variables in the Vercel dashboard (Project Settings → Environment Variables). See the [Environment Variables](#environment-variables) section below.

## Local Development

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

## Building for Vercel

```bash
# This builds the app and prepares the .vercel/output directory
npm run build:vercel
```

## Environment Variables

This project uses Supabase for authentication and data storage. You need to set these environment variables in Vercel:

| Variable | Description |
|----------|-------------|
| `VITE_SUPABASE_URL` | Your Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Your Supabase publishable (anon) key |
| `SUPABASE_URL` | Same as `VITE_SUPABASE_URL` |
| `SUPABASE_PUBLISHABLE_KEY` | Same as `VITE_SUPABASE_PUBLISHABLE_KEY` |

You can find these values in your project's `.env` file or in the Lovable Cloud settings.

## Project Structure

- `src/routes/` — Application routes (TanStack Router file-based routing)
- `src/components/ui/` — shadcn/ui components
- `src/integrations/supabase/` — Supabase clients and auth middleware
- `scripts/` — Build scripts for deployment targets

## Tech Stack

- **Framework:** TanStack Start (React + Vite)
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui
- **Backend:** Lovable Cloud (Supabase)
- **Auth:** Supabase Auth (Email + Google OAuth)
