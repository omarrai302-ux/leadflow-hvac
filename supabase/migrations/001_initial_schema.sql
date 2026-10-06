-- LeadFlow HVAC — initial schema
-- Run in Supabase SQL Editor or via Supabase CLI

create extension if not exists "pgcrypto";

-- Lead status enum
create type public.lead_status as enum (
  'new',
  'contacted',
  'qualified',
  'booked',
  'completed',
  'lost'
);

-- HVAC businesses (tenants)
create table public.businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  phone text,
  created_at timestamptz not null default now()
);

-- Demo seed: ComfortPro HVAC
insert into public.businesses (id, name, slug, phone)
values (
  '00000000-0000-4000-8000-000000000001',
  'ComfortPro HVAC',
  'comfortpro-hvac',
  '(555) 847-2900'
)
on conflict (id) do nothing;

-- Leads
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses (id) on delete cascade,
  name text not null,
  phone text not null,
  email text not null,
  service text not null,
  zip_code text not null,
  appointment_date date,
  message text,
  status public.lead_status not null default 'new',
  created_at timestamptz not null default now()
);

create index leads_business_id_idx on public.leads (business_id);
create index leads_status_idx on public.leads (status);
create index leads_created_at_idx on public.leads (created_at desc);

-- Link auth users to a business (dashboard access)
create table public.business_users (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  role text not null default 'owner',
  created_at timestamptz not null default now(),
  unique (user_id)
);

alter table public.businesses enable row level security;
alter table public.leads enable row level security;
alter table public.business_users enable row level security;

-- Anyone can submit a lead for a known business (public quote form)
create policy "Public can insert leads"
  on public.leads
  for insert
  to anon, authenticated
  with check (
    business_id in (select id from public.businesses)
  );

-- Business members can read/update their leads
create policy "Members can select own business leads"
  on public.leads
  for select
  to authenticated
  using (
    business_id in (
      select business_id from public.business_users where user_id = auth.uid()
    )
  );

create policy "Members can update own business leads"
  on public.leads
  for update
  to authenticated
  using (
    business_id in (
      select business_id from public.business_users where user_id = auth.uid()
    )
  )
  with check (
    business_id in (
      select business_id from public.business_users where user_id = auth.uid()
    )
  );

create policy "Members can read own business"
  on public.businesses
  for select
  to authenticated
  using (
    id in (
      select business_id from public.business_users where user_id = auth.uid()
    )
  );

create policy "Users can read own membership"
  on public.business_users
  for select
  to authenticated
  using (user_id = auth.uid());

-- After creating a Supabase Auth user, link them to the demo business:
-- insert into public.business_users (business_id, user_id, role)
-- values ('00000000-0000-4000-8000-000000000001', '<auth-user-uuid>', 'owner');
