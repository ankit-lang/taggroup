-- Fix "Database error creating new user".
-- The live profiles table has only (id, role, created_at); the sign-up trigger from 07 also
-- wrote full_name / avatar_url, which don't exist, so every new login failed.
-- This version writes only id + role, and can never block a login from being created.
-- Run in the Supabase SQL editor. Safe to re-run.

CREATE OR REPLACE FUNCTION public.handle_new_user() RETURNS trigger
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $$
BEGIN
  BEGIN
    PERFORM set_config('app.role_sync', 'on', true);
    INSERT INTO public.profiles (id, role)
    VALUES (
      NEW.id,
      CASE WHEN EXISTS (SELECT 1 FROM public.admin_users a WHERE a.email = lower(NEW.email) AND a.active)
           THEN 'admin' ELSE 'user' END
    )
    ON CONFLICT (id) DO NOTHING;
    PERFORM set_config('app.role_sync', 'off', true);
  EXCEPTION WHEN others THEN
    -- Profiles are only a mirror of admin_users; never fail the login creation because of them.
    RAISE WARNING 'handle_new_user: profile not created for %: %', NEW.id, SQLERRM;
  END;
  RETURN NEW;
END $$;
