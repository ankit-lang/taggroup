-- ════════════════════════════════════════════════════════════════════════════
-- Admin access control: staff allow-list, roles, owner protection, activity log,
-- article trash. Run in the Supabase SQL editor AFTER 05 and 06. Safe to re-run.
--
-- Roles:  super_admin — everything, incl. staff management
--         editor      — Blog, Publications, Daily Briefing
-- Owners: rows with is_owner = true are permanent Super Admins. Nobody can change
--         or remove them from the website — only here, in the SQL editor.
-- ════════════════════════════════════════════════════════════════════════════

-- 1. Staff allow-list ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.admin_users (
  email        text PRIMARY KEY CHECK (email = lower(email)),
  role         text NOT NULL CHECK (role IN ('super_admin', 'editor')),
  is_owner     boolean NOT NULL DEFAULT false,
  active       boolean NOT NULL DEFAULT true,
  display_name text,
  added_by     text,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- The owners (permanent Super Admins).
INSERT INTO public.admin_users (email, role, is_owner, active, added_by) VALUES
  ('contact@taggroup.in',  'super_admin', true, true, 'owner (SQL)'),
  ('rankit2883@gmail.com', 'super_admin', true, true, 'owner (SQL)')
ON CONFLICT (email) DO UPDATE SET role = 'super_admin', is_owner = true, active = true;

-- info@taggroup.in is not an admin (removes it if an earlier version of this file added it).
DELETE FROM public.admin_users WHERE email = 'info@taggroup.in';

-- 2. Role helpers (used by every policy below) ───────────────────────────────
-- The signed-in user's role, looked up by the e-mail in their verified login token.
-- Checked on every request, so revoking access takes effect immediately.
CREATE OR REPLACE FUNCTION public.admin_role() RETURNS text
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = '' AS $$
  SELECT a.role FROM public.admin_users a
  WHERE auth.uid() IS NOT NULL
    AND a.active
    AND a.email = lower(coalesce(auth.jwt() ->> 'email', ''))
$$;

CREATE OR REPLACE FUNCTION public.is_staff() RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = '' AS $$
  SELECT public.admin_role() IS NOT NULL
$$;

CREATE OR REPLACE FUNCTION public.is_super_admin() RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = '' AS $$
  SELECT coalesce(public.admin_role() = 'super_admin', false)
$$;

GRANT EXECUTE ON FUNCTION public.admin_role(), public.is_staff(), public.is_super_admin() TO anon, authenticated;

-- 3. Owner protection + e-mail normalisation ──────────────────────────────────
-- Website requests always carry a user id (auth.uid()); the SQL editor does not.
CREATE OR REPLACE FUNCTION public.protect_admin_users() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  IF auth.uid() IS NOT NULL THEN
    IF TG_OP IN ('UPDATE', 'DELETE') AND OLD.is_owner THEN
      RAISE EXCEPTION 'Owner accounts are protected and cannot be changed from the website.';
    END IF;
    IF TG_OP IN ('INSERT', 'UPDATE') AND NEW.is_owner THEN
      RAISE EXCEPTION 'Owner status can only be granted in the Supabase SQL editor.';
    END IF;
  END IF;
  IF TG_OP = 'DELETE' THEN RETURN OLD; END IF;
  NEW.email := lower(trim(NEW.email));
  NEW.updated_at := now();
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS protect_admin_users ON public.admin_users;
CREATE TRIGGER protect_admin_users BEFORE INSERT OR UPDATE OR DELETE ON public.admin_users
  FOR EACH ROW EXECUTE FUNCTION public.protect_admin_users();

DROP POLICY IF EXISTS "Read own or all (super admin)" ON public.admin_users;
CREATE POLICY "Read own or all (super admin)" ON public.admin_users FOR SELECT TO authenticated
  USING (public.is_super_admin() OR email = lower(coalesce(auth.jwt() ->> 'email', '')));
DROP POLICY IF EXISTS "Super admins add staff" ON public.admin_users;
CREATE POLICY "Super admins add staff" ON public.admin_users FOR INSERT TO authenticated
  WITH CHECK (public.is_super_admin());
DROP POLICY IF EXISTS "Super admins change staff" ON public.admin_users;
CREATE POLICY "Super admins change staff" ON public.admin_users FOR UPDATE TO authenticated
  USING (public.is_super_admin()) WITH CHECK (public.is_super_admin());
DROP POLICY IF EXISTS "Super admins remove staff" ON public.admin_users;
CREATE POLICY "Super admins remove staff" ON public.admin_users FOR DELETE TO authenticated
  USING (public.is_super_admin());

-- 4. Close the profiles.role hole ────────────────────────────────────────────
-- Users could previously set their own profiles.role to 'admin'. profiles.role is
-- now a read-only mirror of the allow-list ('admin' = active staff), kept in sync
-- automatically, so older policies that look at it stay safe too.
CREATE OR REPLACE FUNCTION public.lock_profile_role() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  IF coalesce(current_setting('app.role_sync', true), '') = 'on' THEN RETURN NEW; END IF;
  IF TG_OP = 'INSERT' THEN
    NEW.role := 'user';
  ELSIF NEW.role IS DISTINCT FROM OLD.role THEN
    NEW.role := OLD.role; -- silently ignore role changes from users
  END IF;
  RETURN NEW;
END $$;

DROP TRIGGER IF EXISTS lock_profile_role ON public.profiles;
CREATE TRIGGER lock_profile_role BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.lock_profile_role();

CREATE OR REPLACE FUNCTION public.sync_profile_roles() RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  PERFORM set_config('app.role_sync', 'on', true);
  UPDATE public.profiles p
     SET role = CASE WHEN EXISTS (
                  SELECT 1 FROM auth.users u JOIN public.admin_users a ON a.email = lower(u.email)
                  WHERE u.id = p.id AND a.active) THEN 'admin' ELSE 'user' END
   WHERE p.role IS DISTINCT FROM CASE WHEN EXISTS (
                  SELECT 1 FROM auth.users u JOIN public.admin_users a ON a.email = lower(u.email)
                  WHERE u.id = p.id AND a.active) THEN 'admin' ELSE 'user' END;
  PERFORM set_config('app.role_sync', 'off', true);
END $$;

CREATE OR REPLACE FUNCTION public.on_admin_users_changed() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  PERFORM public.sync_profile_roles();
  RETURN NULL;
END $$;

DROP TRIGGER IF EXISTS sync_profile_roles ON public.admin_users;
CREATE TRIGGER sync_profile_roles AFTER INSERT OR UPDATE OR DELETE ON public.admin_users
  FOR EACH STATEMENT EXECUTE FUNCTION public.on_admin_users_changed();

-- New sign-ups get role 'user' unless they're on the allow-list.
CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  PERFORM set_config('app.role_sync', 'on', true);
  INSERT INTO public.profiles (id, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data ->> 'full_name',
    NEW.raw_user_meta_data ->> 'avatar_url',
    CASE WHEN EXISTS (SELECT 1 FROM public.admin_users a WHERE a.email = lower(NEW.email) AND a.active)
         THEN 'admin' ELSE 'user' END
  )
  ON CONFLICT (id) DO NOTHING;
  PERFORM set_config('app.role_sync', 'off', true);
  RETURN NEW;
END $$;

SELECT public.sync_profile_roles(); -- demote anyone who gave themselves 'admin'

-- 5. Contact inquiries & subscribers: personal data → Super Admins only ──────
DROP POLICY IF EXISTS "Enable read access for authenticated users only" ON public.leads;
DROP POLICY IF EXISTS "Staff update leads" ON public.leads;
DROP POLICY IF EXISTS "Staff delete leads" ON public.leads;
DROP POLICY IF EXISTS "Super admins read leads" ON public.leads;
CREATE POLICY "Super admins read leads" ON public.leads FOR SELECT TO authenticated USING (public.is_super_admin());
DROP POLICY IF EXISTS "Super admins update leads" ON public.leads;
CREATE POLICY "Super admins update leads" ON public.leads FOR UPDATE TO authenticated USING (public.is_super_admin());
DROP POLICY IF EXISTS "Super admins delete leads" ON public.leads;
CREATE POLICY "Super admins delete leads" ON public.leads FOR DELETE TO authenticated USING (public.is_super_admin());

DROP POLICY IF EXISTS "Staff read subscribers" ON public.subscribers;
CREATE POLICY "Staff read subscribers" ON public.subscribers FOR SELECT TO authenticated USING (public.is_super_admin());
DROP POLICY IF EXISTS "Staff insert subscribers" ON public.subscribers;
CREATE POLICY "Staff insert subscribers" ON public.subscribers FOR INSERT TO authenticated WITH CHECK (public.is_super_admin());
DROP POLICY IF EXISTS "Staff update subscribers" ON public.subscribers;
CREATE POLICY "Staff update subscribers" ON public.subscribers FOR UPDATE TO authenticated USING (public.is_super_admin());

-- 6. Articles: trash + rebuilt policies ───────────────────────────────────────
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS deleted_at timestamptz;
ALTER TABLE public.blogs ADD COLUMN IF NOT EXISTS deleted_by text;

DO $$ DECLARE p record; BEGIN
  FOR p IN SELECT policyname FROM pg_policies WHERE schemaname = 'public' AND tablename = 'blogs' LOOP
    EXECUTE format('DROP POLICY %I ON public.blogs', p.policyname);
  END LOOP;
END $$;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors read live articles" ON public.blogs FOR SELECT TO anon, authenticated
  USING (status = 'published' AND deleted_at IS NULL AND coalesce(published_at, created_at) <= now());
CREATE POLICY "Staff read all articles" ON public.blogs FOR SELECT TO authenticated USING (public.is_staff());
CREATE POLICY "Staff create articles" ON public.blogs FOR INSERT TO authenticated WITH CHECK (public.is_staff());
CREATE POLICY "Staff edit and trash articles" ON public.blogs FOR UPDATE TO authenticated
  USING (public.is_staff()) WITH CHECK (public.is_staff());
CREATE POLICY "Super admins delete permanently" ON public.blogs FOR DELETE TO authenticated USING (public.is_super_admin());

DROP POLICY IF EXISTS "Staff manage blog redirects" ON public.blog_redirects;
CREATE POLICY "Staff manage blog redirects" ON public.blog_redirects FOR ALL TO authenticated
  USING (public.is_staff()) WITH CHECK (public.is_staff());

-- 7. Publications, briefings, newsletters ─────────────────────────────────────
DO $$ DECLARE p record; BEGIN
  IF to_regclass('public.publications') IS NOT NULL THEN
    FOR p IN SELECT policyname FROM pg_policies WHERE schemaname = 'public' AND tablename = 'publications' LOOP
      EXECUTE format('DROP POLICY %I ON public.publications', p.policyname);
    END LOOP;
    ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;
    CREATE POLICY "Visitors read published publications" ON public.publications FOR SELECT TO anon, authenticated USING (status = 'published');
    CREATE POLICY "Staff manage publications" ON public.publications FOR ALL TO authenticated USING (public.is_staff()) WITH CHECK (public.is_staff());
  END IF;

  IF to_regclass('public.newsletters') IS NOT NULL THEN
    FOR p IN SELECT policyname FROM pg_policies WHERE schemaname = 'public' AND tablename = 'newsletters' LOOP
      EXECUTE format('DROP POLICY %I ON public.newsletters', p.policyname);
    END LOOP;
    ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;
    CREATE POLICY "Super admins manage newsletters" ON public.newsletters FOR ALL TO authenticated USING (public.is_super_admin()) WITH CHECK (public.is_super_admin());
  END IF;
END $$;

DROP POLICY IF EXISTS "Staff manage briefings" ON public.briefings;
CREATE POLICY "Staff manage briefings" ON public.briefings FOR ALL TO authenticated
  USING (public.is_staff()) WITH CHECK (public.is_staff());

-- 8. Activity log (written by triggers — cannot be skipped by the website) ────
CREATE TABLE IF NOT EXISTS public.activity_log (
  id           bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  created_at   timestamptz NOT NULL DEFAULT now(),
  actor_email  text,
  action       text NOT NULL,
  entity_type  text NOT NULL,
  entity_id    text,
  entity_title text,
  details      jsonb
);
CREATE INDEX IF NOT EXISTS activity_log_created_idx ON public.activity_log (created_at DESC);
ALTER TABLE public.activity_log ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Super admins read activity" ON public.activity_log;
CREATE POLICY "Super admins read activity" ON public.activity_log FOR SELECT TO authenticated USING (public.is_super_admin());
-- (no insert/update/delete policies: only the triggers below can write)

CREATE OR REPLACE FUNCTION public.log_activity() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
DECLARE
  rec    jsonb := CASE WHEN TG_OP = 'DELETE' THEN to_jsonb(OLD) ELSE to_jsonb(NEW) END;
  before jsonb := CASE WHEN TG_OP = 'INSERT' THEN NULL ELSE to_jsonb(OLD) END;
  act    text;
  actor  text := coalesce(auth.jwt() ->> 'email', CASE WHEN auth.uid() IS NULL THEN 'system / SQL editor' END);
BEGIN
  IF TG_OP = 'INSERT' THEN act := 'created';
  ELSIF TG_OP = 'DELETE' THEN act := CASE WHEN TG_TABLE_NAME = 'blogs' THEN 'deleted permanently' ELSE 'deleted' END;
  ELSIF before ? 'deleted_at' AND (before ->> 'deleted_at') IS NULL AND (rec ->> 'deleted_at') IS NOT NULL THEN act := 'moved to trash';
  ELSIF before ? 'deleted_at' AND (before ->> 'deleted_at') IS NOT NULL AND (rec ->> 'deleted_at') IS NULL THEN act := 'restored';
  ELSIF (before ->> 'status') IS DISTINCT FROM (rec ->> 'status') THEN act := 'status: ' || coalesce(rec ->> 'status', '—');
  ELSIF TG_TABLE_NAME = 'admin_users' AND (before ->> 'active') IS DISTINCT FROM (rec ->> 'active') THEN
    act := CASE WHEN (rec ->> 'active')::boolean THEN 'access restored' ELSE 'access revoked' END;
  ELSIF TG_TABLE_NAME = 'admin_users' AND (before ->> 'role') IS DISTINCT FROM (rec ->> 'role') THEN act := 'role → ' || (rec ->> 'role');
  ELSE act := 'edited';
  END IF;

  INSERT INTO public.activity_log (actor_email, action, entity_type, entity_id, entity_title, details)
  VALUES (
    actor, act, TG_TABLE_NAME,
    coalesce(rec ->> 'id', rec ->> 'email'),
    coalesce(rec ->> 'title', rec ->> 'email', rec ->> 'slug'),
    CASE WHEN TG_TABLE_NAME = 'admin_users' THEN jsonb_build_object('role', rec ->> 'role', 'active', rec ->> 'active')
         ELSE jsonb_build_object('slug', rec ->> 'slug', 'status', rec ->> 'status') END
  );
  RETURN NULL;
END $$;

DO $$ DECLARE t text; BEGIN
  FOREACH t IN ARRAY ARRAY['blogs', 'publications', 'briefings', 'newsletters', 'admin_users'] LOOP
    IF to_regclass('public.' || t) IS NOT NULL THEN
      EXECUTE format('DROP TRIGGER IF EXISTS log_activity ON public.%I', t);
      EXECUTE format('CREATE TRIGGER log_activity AFTER INSERT OR UPDATE OR DELETE ON public.%I FOR EACH ROW EXECUTE FUNCTION public.log_activity()', t);
    END IF;
  END LOOP;
END $$;

NOTIFY pgrst, 'reload schema';
