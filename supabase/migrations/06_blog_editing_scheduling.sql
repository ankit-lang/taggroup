-- Blog editing + scheduled publishing.
-- Run in the Supabase SQL editor. Safe to run more than once.

-- 1. New article fields.
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS published_at     timestamptz;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS updated_at       timestamptz;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS excerpt          text;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS seo_title        text;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS meta_description text;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS tags             text[] NOT NULL DEFAULT '{}';

-- Existing articles keep their upload date as their publication date.
UPDATE public.blogs SET published_at = created_at WHERE published_at IS NULL;
ALTER TABLE public.blogs ALTER COLUMN published_at SET DEFAULT now();

CREATE INDEX IF NOT EXISTS blogs_status_published_at_idx ON public.blogs (status, published_at DESC);

-- 2. Scheduling. A scheduled article is stored as status 'published' with a
--    future published_at. It becomes visible automatically at that moment:
--    visitors (anon role) can only ever read rows whose date has arrived.
--    No cron job is needed, so it works even when nobody is logged in.
DROP POLICY IF EXISTS "Hide future-dated blogs from visitors" ON public.blogs;
CREATE POLICY "Hide future-dated blogs from visitors" ON public.blogs
  AS RESTRICTIVE FOR SELECT TO anon
  USING (published_at IS NULL OR published_at <= now());

-- 3. Staff (logged-in profile whose role is not 'user') can read and edit every article.
DROP POLICY IF EXISTS "Staff read blogs" ON public.blogs;
CREATE POLICY "Staff read blogs" ON public.blogs FOR SELECT TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'));

DROP POLICY IF EXISTS "Staff update blogs" ON public.blogs;
CREATE POLICY "Staff update blogs" ON public.blogs FOR UPDATE TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'));

-- 4. Old URLs → new URL when an article's slug is changed.
CREATE TABLE IF NOT EXISTS public.blog_redirects (
  old_slug   text PRIMARY KEY,
  blog_id    uuid NOT NULL REFERENCES public.blogs(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.blog_redirects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Anyone reads blog redirects" ON public.blog_redirects;
CREATE POLICY "Anyone reads blog redirects" ON public.blog_redirects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Staff manage blog redirects" ON public.blog_redirects;
CREATE POLICY "Staff manage blog redirects" ON public.blog_redirects FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'));

-- 5. Refresh the API schema cache so the new columns are visible immediately.
NOTIFY pgrst, 'reload schema';
