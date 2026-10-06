# LeadFlow HVAC

Lead capture and lead management MVP for US HVAC companies. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Supabase.

## Quick start

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env.local` and fill in Supabase values.
3. Run the SQL migration in `supabase/migrations/001_initial_schema.sql` in the Supabase SQL Editor.
4. Create a Supabase Auth user (Email provider) and link them to the demo business (see migration file footer).
5. Start the dev server: `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000)

## Routes

| Route | Description |
|-------|-------------|
| `/` | LeadFlow marketing landing page |
| `/comfortpro` | Demo HVAC site with lead form |
| `/login` | Supabase authentication |
| `/dashboard` | Protected lead management (requires auth + `business_users` row) |

## Lead flow test

1. Visit `/comfortpro` and submit the quote form.
2. Sign in at `/login` with your linked Supabase user.
3. Open `/dashboard` — search, filter, open a lead, and update status.
