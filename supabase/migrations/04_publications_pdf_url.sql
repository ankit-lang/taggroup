-- Publications: columns the admin "New Publication" form saves.
-- Fixes: "Could not find the 'pdf_url' column of 'publications' in the schema cache".
-- Run in the Supabase SQL editor. Safe to run more than once.

ALTER TABLE public.publications ADD COLUMN IF NOT EXISTS pdf_url text;
ALTER TABLE public.publications ADD COLUMN IF NOT EXISTS image_url text;
ALTER TABLE public.publications ADD COLUMN IF NOT EXISTS meta_title text;
ALTER TABLE public.publications ADD COLUMN IF NOT EXISTS meta_description text;
ALTER TABLE public.publications ADD COLUMN IF NOT EXISTS meta_keywords text;

-- Tell the Supabase API to pick up the new columns immediately.
NOTIFY pgrst, 'reload schema';
