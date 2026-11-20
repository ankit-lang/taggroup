import { requireAdminPage } from '@/lib/auth/admin';
import { getSubscribersOverview } from '@/actions/subscriber.actions'
import SubscribersClient from './subscribers-client'

export const dynamic = 'force-dynamic'

export default async function AdminSubscribersPage() {
  await requireAdminPage('super_admin');
  const overview = await getSubscribersOverview()
  return <SubscribersClient initial={overview} />
}
