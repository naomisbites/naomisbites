create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  price integer not null,
  image_url text,
  is_available boolean not null default true,
  created_at timestamptz not null default now()
);

alter table products enable row level security;

create policy "Public can read products"
  on products for select
  using (is_available = true);

insert into products (name, slug, description, price, is_available) values
  (
    'Kue Nastar',
    'kue-nastar',
    'Kue nastar klasik dengan isian selai nanas asli yang harum dan manis. Teksturnya lembut dan meleleh di mulut.',
    75000,
    true
  ),
  (
    'Kue Putri Salju',
    'kue-putri-salju',
    'Kue putri salju bertabur gula halus yang lembut seperti salju. Aroma vanila yang khas membuat kue ini selalu jadi favorit.',
    70000,
    true
  );
