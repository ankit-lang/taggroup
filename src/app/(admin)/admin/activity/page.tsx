import { requireAdminPage } from '@/lib/auth/admin'
import { listActivity } from '@/actions/admin-users.actions'
import { formatIst } from '@/lib/blog-schedule'

export const metadata = { title: 'Activity Log | TAG Admin' }
export const dynamic = 'force-dynamic'

const TYPE_LABEL: Record<string, string> = {
  blogs: 'Article', publications: 'Publication', briefings: 'Daily briefing', newsletters: 'Newsletter', admin_users: 'Staff access', auth: 'Account',
}

function tone(action: string) {
  if (/delete|revoked|trash/.test(action)) return 'bg-rose-50 text-rose-700 border-rose-200'
  if (/password|login/.test(action)) return 'bg-amber-50 text-amber-800 border-amber-200'
  if (/created|restored|published|access restored|signed in/.test(action)) return 'bg-emerald-50 text-emerald-700 border-emerald-200'
  return 'bg-slate-50 text-slate-700 border-slate-200'
}

export default async function ActivityPage() {
  await requireAdminPage('super_admin')
  const { entries, error } = await listActivity()

  return (
    <div className="space-y-6 text-slate-900 max-w-5xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Activity Log</h1>
        <p className="text-sm text-slate-500 mt-1">Who created, edited, published, trashed or deleted content, and every change to staff access. Recorded automatically by the database. Times in IST.</p>
      </div>
      {error && <div className="p-3 rounded-md text-sm border bg-rose-50 border-rose-200 text-rose-600">{error}</div>}
      <div className="rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden">
        {entries.length === 0 ? (
          <p className="p-8 text-center text-sm text-slate-500">No activity recorded yet.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-left text-slate-500">
              <tr><th className="px-4 py-2.5 font-semibold">When</th><th className="px-4 py-2.5 font-semibold">Who</th><th className="px-4 py-2.5 font-semibold">Action</th><th className="px-4 py-2.5 font-semibold">Item</th></tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {entries.map(e => (
                <tr key={e.id}>
                  <td className="px-4 py-2.5 whitespace-nowrap text-slate-500">{formatIst(e.created_at, { withTime: true })}</td>
                  <td className="px-4 py-2.5">{e.actor_email || '—'}</td>
                  <td className="px-4 py-2.5"><span className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${tone(e.action)}`}>{e.action}</span></td>
                  <td className="px-4 py-2.5"><span className="text-slate-400">{TYPE_LABEL[e.entity_type] || e.entity_type}:</span> {e.entity_title || e.entity_id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
