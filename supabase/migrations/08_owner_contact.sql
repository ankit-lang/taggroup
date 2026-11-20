-- Owners: contact@taggroup.in + rankit2883@gmail.com. Removes info@taggroup.in.
-- Run in the Supabase SQL editor (owner changes are blocked from the website). Safe to re-run.
--
-- BEFORE running: make sure contact@taggroup.in can sign in (set its password in
-- Admin → Users & Access while you are still logged in as info@), because
-- info@taggroup.in loses access as soon as this runs.

INSERT INTO public.admin_users (email, role, is_owner, active, added_by)
VALUES ('contact@taggroup.in', 'super_admin', true, true, 'owner (SQL)')
ON CONFLICT (email) DO UPDATE SET role = 'super_admin', is_owner = true, active = true;

UPDATE public.admin_users SET role = 'super_admin', is_owner = true, active = true
WHERE email = 'rankit2883@gmail.com';

DELETE FROM public.admin_users WHERE email = 'info@taggroup.in';

SELECT email, role, is_owner, active FROM public.admin_users ORDER BY is_owner DESC, email;
