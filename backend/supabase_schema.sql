-- Supabase SQL schema for Wholesale Portal

-- Enable UUID support if needed:
-- create extension if not exists "uuid-ossp";

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  password_hash text not null,
  company_name text not null,
  role text not null check (role in ('buyer', 'admin')),
  created_at timestamp with time zone default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  sku text unique,
  category text,
  description text,
  price numeric(12,2) not null default 0,
  inventory_quantity integer not null default 0,
  min_order_quantity integer not null default 1,
  tier_pricing jsonb not null default '[]',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  created_by uuid references users(id) on delete set null,
  status text not null default 'pending',
  total numeric(12,2) not null default 0,
  shipping_address text,
  items jsonb,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create index if not exists idx_orders_created_by on orders(created_by);
create index if not exists idx_products_sku on products(sku);
