# ImmoCheck Schweiz

Swiss real estate seller lead generation platform built with Next.js 14, TypeScript, Tailwind CSS, and the App Router.

## Features

- Landing page (`/`) for product positioning
- Lead capture form (`/lead`) with API submission flow
- Lead submission API route (`/api/leads`)
- Admin dashboard (`/admin`) with core KPI cards and lead overview
- Mobile-first, dark elegant UI

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Project Structure

```text
src/
  app/
    api/leads/route.ts
    admin/page.tsx
    lead/page.tsx
    page.tsx
    layout.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  lib/
```
