import { requireAdminPage } from '@/lib/auth/admin'
import { listStaff } from '@/actions/admin-users.actions'
import { StaffManager } from './staff-manager'

export const metadata = { title: 'Users & Access | TAG Admin' }
export const dynamic = 'force-dynamic'

export default async function UsersAccessPage() {
  const admin = await requireAdminPage('super_admin')
  const { staff, error } = await listStaff()
  return <StaffManager staff={staff} me={admin.email} meIsOwner={admin.isOwner} error={error} />
}
