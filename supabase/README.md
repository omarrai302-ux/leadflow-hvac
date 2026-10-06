# Supabase setup

## 1. Create project

Create a project at [supabase.com](https://supabase.com). Note the **Project URL** and **anon** key.

## 2. Run migration

Open **SQL Editor** and paste/run `migrations/001_initial_schema.sql`.

This creates:

- `businesses` (includes ComfortPro demo row)
- `leads` (with `lead_status` enum)
- `business_users` (maps auth users to businesses)
- Row Level Security policies

## 3. Auth user

1. **Authentication → Users → Add user** (email + password).
2. Copy the new user's UUID.
3. Run:

```sql
insert into public.business_users (business_id, user_id, role)
values (
  '00000000-0000-4000-8000-000000000001',
  '<YOUR_AUTH_USER_UUID>',
  'owner'
);
```

## 4. Environment variables

Copy project root `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (Settings → API → service_role — **server only**)
- `NEXT_PUBLIC_DEMO_BUSINESS_ID` (default ComfortPro UUID in migration)

## 5. Email auth

Enable **Email** provider under Authentication → Providers. Disable email confirmation for local testing if desired.
