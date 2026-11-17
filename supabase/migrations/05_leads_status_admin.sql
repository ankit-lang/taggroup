-- Contact Inquiries: status tracking + admin permissions on the leads table.
-- Run in the Supabase SQL editor. Safe to run more than once.

-- 1. Status column used by "Mark as Read" / "In Progress" / "Archive".
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'new';

-- 2. Staff (logged-in profile whose role is not 'user') can update and delete leads.
--    Without these policies, updates/deletes from the admin panel silently change nothing.
DROP POLICY IF EXISTS "Staff update leads" ON public.leads;
CREATE POLICY "Staff update leads" ON public.leads FOR UPDATE
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'));

DROP POLICY IF EXISTS "Staff delete leads" ON public.leads;
CREATE POLICY "Staff delete leads" ON public.leads FOR DELETE
  USING (EXISTS (SELECT 1 FROM public.profiles p WHERE p.id = auth.uid() AND lower(coalesce(p.role, '')) <> 'user'));

-- 3. Refresh the API schema cache so the new column is visible immediately.
NOTIFY pgrst, 'reload schema';
