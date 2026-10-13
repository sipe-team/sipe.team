-- Dedicated tables: existing project data is not modified.
create table if not exists public.activity_forms (
  id uuid primary key,
  document jsonb not null,
  updated_at timestamptz not null default now()
);
create table if not exists public.activity_form_responses (
  id uuid primary key,
  form_id uuid not null references public.activity_forms(id),
  document jsonb not null,
  created_at timestamptz not null default now()
);
create index if not exists activity_form_responses_form_id_idx on public.activity_form_responses(form_id);
create table if not exists public.activity_team_plans (
  id uuid primary key,
  form_id uuid not null references public.activity_forms(id),
  document jsonb not null,
  share_id uuid unique,
  created_at timestamptz not null default now()
);
create index if not exists activity_team_plans_form_id_idx on public.activity_team_plans(form_id);
alter table public.activity_forms enable row level security;
alter table public.activity_form_responses enable row level security;
alter table public.activity_team_plans enable row level security;
-- Access is only through server routes, which validate admin identity or public form state.
revoke all on public.activity_forms, public.activity_form_responses, public.activity_team_plans from anon, authenticated;
grant select, insert, update on public.activity_forms, public.activity_form_responses, public.activity_team_plans to service_role;
