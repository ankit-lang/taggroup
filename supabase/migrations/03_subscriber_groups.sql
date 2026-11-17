-- Subscriber groups (categories) + admin permissions to manage subscribers.
-- Run in the Supabase SQL editor. Safe to run more than once.

-- Make sure the columns used by the app exist.
ALTER TABLE public.subscribers ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'active';
ALTER TABLE public.subscribers ADD COLUMN IF NOT EXISTS created_at timestamptz NOT NULL DEFAULT now();
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'subscribers' AND column_name = 'categories'
  ) THEN
    ALTER TABLE public.subscribers ADD COLUMN categories text[] NOT NULL DEFAULT '{}';
  END IF;
END $$;

-- Lower-case e-mails so the same person can't be added twice with different casing.
UPDATE public.subscribers s SET email = lower(trim(s.email))
 WHERE s.email <> lower(trim(s.email))
   AND NOT EXISTS (SELECT 1 FROM public.subscribers d WHERE d.id <> s.id AND d.email = lower(trim(s.email)));

-- Tag existing subscribers with "English" if they have no language group yet
-- (they signed up before language tagging existed; default site language is English).
DO $$
DECLARE coltype text;
BEGIN
  SELECT data_type INTO coltype FROM information_schema.columns
  WHERE table_schema = 'public' AND table_name = 'subscribers' AND column_name = 'categories';

  IF coltype = 'ARRAY' THEN
    UPDATE public.subscribers
       SET categories = array_append(coalesce(categories, '{}'), 'English')
     WHERE NOT (coalesce(categories, '{}') && ARRAY['English', 'Korean']);
  ELSIF coltype = 'jsonb' THEN
    UPDATE public.subscribers
       SET categories = coalesce(categories, '[]'::jsonb) || '["English"]'::jsonb
     WHERE NOT (coalesce(categories, '[]'::jsonb) ?| ARRAY['English', 'Korean']);
  ELSIF coltype = 'json' THEN
    UPDATE public.subscribers
       SET categories = (coalesce(categories::jsonb, '[]'::jsonb) || '["English"]'::jsonb)::json
     WHERE NOT (coalesce(categories::jsonb, '[]'::jsonb) ?| ARRAY['English', 'Korean']);
  END IF;
END $$;

-- Staff (any logged-in profile whose role is not 'user') can read and manage subscribers.

DROP POLICY IF EXISTS "Staff read subscribers" ON public.subscribers;
CREATE POLICY "Staff read subscribers" ON public.subscribers FOR SELECT
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'));

DROP POLICY IF EXISTS "Staff insert subscribers" ON public.subscribers;
CREATE POLICY "Staff insert subscribers" ON public.subscribers FOR INSERT
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'));

DROP POLICY IF EXISTS "Staff update subscribers" ON public.subscribers;
CREATE POLICY "Staff update subscribers" ON public.subscribers FOR UPDATE
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'));

-- Note: existing policies that let the public website insert/update sign-ups are left untouched.
