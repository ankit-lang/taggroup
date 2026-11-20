import { requireAdminPage, ROLE_LABEL } from '@/lib/auth/admin'
import { AccountSettings } from './account-settings'

export const metadata = { title: 'My Account | TAG Admin' }
export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const admin = await requireAdminPage('editor')
  return <AccountSettings email={admin.email} role={ROLE_LABEL[admin.role]} isOwner={admin.isOwner} />
}
