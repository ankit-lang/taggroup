import { requireAdminPage } from '@/lib/auth/admin'

// Sending newsletters reaches every subscriber → Super Admins only.
export default async function NewsletterLayout({ children }: { children: React.ReactNode }) {
  await requireAdminPage('super_admin')
  return children
}
