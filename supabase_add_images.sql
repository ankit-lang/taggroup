-- RUN THIS FILE IN YOUR SUPABASE SQL EDITOR --

-- Add image_url to blogs
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS image_url text;

-- Add image_url to newsletters
ALTER TABLE public.newsletters ADD COLUMN IF NOT EXISTS image_url text;
