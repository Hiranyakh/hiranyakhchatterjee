-- Supabase schema for Freedom Score + reusable event registration.
-- Run this in Supabase SQL Editor.

create extension if not exists pgcrypto;

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  assessment_id text unique,
  event_type text not null default 'one_to_one',
  event_name text,
  name text not null,
  email text not null,
  phone text,
  age integer,
  gender text,
  profession text,
  city text,
  state text,
  country text,
  goal text,
  payment_required boolean not null default false,
  payment_status text not null default 'not_required',
  razorpay_order_id text,
  razorpay_payment_id text,
  cal_booking_id text,
  booking_status text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  status text not null default 'registered',
  answers jsonb,
  freedom_result jsonb,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists registrations_email_idx on public.registrations (lower(email));
create index if not exists registrations_event_type_idx on public.registrations (event_type);
create index if not exists registrations_created_at_idx on public.registrations (created_at desc);
create index if not exists registrations_utm_campaign_idx on public.registrations (utm_campaign);

create or replace function public.set_registrations_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists registrations_updated_at on public.registrations;
create trigger registrations_updated_at
before update on public.registrations
for each row execute function public.set_registrations_updated_at();

-- The service-role key is used only by server-side Next.js routes.
-- Do not expose it to the browser.
