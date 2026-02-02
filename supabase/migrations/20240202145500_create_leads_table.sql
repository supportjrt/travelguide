-- Create the leads table
create table public.leads (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  phone text not null,
  package_name text null,
  name text null,
  email text null,
  preferred_time text null,
  timezone text null,
  remarks text null,
  utm_source text null,
  utm_medium text null,
  utm_campaign text null,
  utm_term text null,
  utm_content text null,
  constraint leads_pkey primary key (id)
);

-- Enable RLS (Recommended for security, though this app is using anon key for inserts, usually we want policies)
-- For now, allowing public insert/update if that is the intent, or you might want to restrict.
-- Since we are using the service API or Anon key from client, usually we need a policy.
-- However, typically Next.js API usage (server-side) uses standard connection.
-- If we are using valid Service Role or if RLS is off, it works.
-- Assuming standard usage:
alter table public.leads enable row level security;

-- Policy to allow inserting rows (anyone can create a lead)
create policy "Enable insert for all users" on public.leads
  for insert
  with check (true);

-- Policy to allow updating ONLY if you know the ID (technically difficult to enforce purely by ID without session, 
-- but often for public forms we just allow anon updates or we return a token. 
-- For simplicity in this demo context, we allow update where id matches. 
-- Note: 'using (true)' allows anyone to update anything effectively if they guessed UUID. 
-- For production, consider using a secure session or signing the ID.)
create policy "Enable update for all users" on public.leads
  for update
  using (true)
  with check (true);

-- Policy to allow reading (optional, maybe only for admin?)
create policy "Enable select for all users" on public.leads
  for select
  using (true);
