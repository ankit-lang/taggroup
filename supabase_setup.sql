-- RUN THIS FILE IN YOUR SUPABASE SQL EDITOR --

-- Create Publications Table
CREATE TABLE public.publications (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text NOT NULL,
  category text,
  image_url text,
  meta_title text,
  meta_description text,
  meta_keywords text,
  status text DEFAULT 'published',
  author_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS
ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public profiles are viewable by everyone."
  ON public.publications FOR SELECT
  USING (status = 'published');

-- Allow admin full access
CREATE POLICY "Admins can do everything on publications"
  ON public.publications FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.role = 'admin'
    )
  );

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER on_publications_updated
  BEFORE UPDATE ON public.publications
  FOR EACH ROW
  EXECUTE PROCEDURE public.handle_updated_at();
