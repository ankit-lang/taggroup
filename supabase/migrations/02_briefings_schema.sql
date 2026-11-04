-- TAG Daily Briefing: storage + subscriber unsubscribe tokens
-- Run in the Supabase SQL editor (after 00/01).

CREATE TABLE IF NOT EXISTS public.briefings (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug          text NOT NULL UNIQUE,              -- YYYY-MM-DD
  ref           text NOT NULL,                     -- TAG/DB/2026/062
  briefing_date date NOT NULL,
  title         text NOT NULL,
  content       jsonb NOT NULL,                    -- see src/lib/briefing/schema.ts
  status        text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  source        text NOT NULL DEFAULT 'manual' CHECK (source IN ('ai', 'manual')),
  sent_at       timestamptz,
  sent_count    integer NOT NULL DEFAULT 0,
  created_at    timestamptz NOT NULL DEFAULT now(),
  updated_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS briefings_date_idx ON public.briefings (briefing_date DESC);

ALTER TABLE public.briefings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Published briefings are public" ON public.briefings;
CREATE POLICY "Published briefings are public"
  ON public.briefings FOR SELECT
  USING (status = 'published');

DROP POLICY IF EXISTS "Staff manage briefings" ON public.briefings;
CREATE POLICY "Staff manage briefings"
  ON public.briefings FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND lower(coalesce(profiles.role, '')) <> 'user'
    )
  );

DROP TRIGGER IF EXISTS on_briefings_updated ON public.briefings;
CREATE TRIGGER on_briefings_updated
  BEFORE UPDATE ON public.briefings
  FOR EACH ROW EXECUTE PROCEDURE public.handle_updated_at();

-- One-click unsubscribe link per subscriber
ALTER TABLE public.subscribers
  ADD COLUMN IF NOT EXISTS unsubscribe_token uuid NOT NULL DEFAULT gen_random_uuid();
CREATE UNIQUE INDEX IF NOT EXISTS subscribers_unsubscribe_token_idx
  ON public.subscribers (unsubscribe_token);
