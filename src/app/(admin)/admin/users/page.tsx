import { createClient } from '@/lib/supabase/server'
import { ExportButton } from '@/components/admin/export-button'
import { ContactStatusToggle } from '@/components/admin/contact-status-toggle'

export const metadata = {
  title: 'User Management | TAG Admin',
}

function StatusChip({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; label: string }> = {
    pending:  { bg: '#fff8e6', color: '#b45309', label: 'Pending' },
    read:     { bg: '#f0fdf4', color: '#15803d', label: 'Read' },
    replied:  { bg: '#eff6ff', color: '#1d4ed8', label: 'Replied' },
    closed:   { bg: '#f1f5f9', color: '#475569', label: 'Closed' },
  };
  const s = map[status?.toLowerCase()] ?? { bg: '#f1f5f9', color: '#475569', label: status };
  return (
    <span
      className="inline-flex items-center font-medium rounded"
      style={{
        background: s.bg,
        color: s.color,
        fontSize: '11px',
        padding: '2px 8px',
        letterSpacing: '0.2px',
        whiteSpace: 'nowrap',
      }}
    >
      {s.label}
    </span>
  );
}

function SectionBar({ title, count, children }: { title: string; count: number; children?: React.ReactNode }) {
  return (
    <div
      className="flex items-center justify-between"
      style={{
        height: '44px',
        padding: '0 16px',
        background: '#fff',
        borderBottom: '1px solid #e4e8ee',
        borderRadius: '6px 6px 0 0',
      }}
    >
      <div className="flex items-center gap-3">
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a2332' }}>{title}</span>
        <span
          className="font-medium rounded"
          style={{ fontSize: '11px', background: '#f0f2f5', color: '#5a6778', padding: '1px 7px' }}
        >
          {count}
        </span>
      </div>
      <div className="flex items-center gap-2">{children}</div>
    </div>
  );
}

export default async function UsersAdminPage() {
  const supabase = await createClient()

  const { data: contacts } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  const { data: subscribers } = await supabase
    .from('subscribers')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
      {/* Page Header */}
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: '16px' }}
      >
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#1a2332', lineHeight: 1.3 }}>
            User Management
          </h1>
          <p style={{ fontSize: '12px', color: '#7a8898', marginTop: '2px' }}>
            Review contact submissions and newsletter subscriber records.
          </p>
        </div>
      </div>

      {/* Two-column grid */}
      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'start' }}
      >
        {/* Contact Submissions */}
        <div
          className="rounded-md overflow-hidden"
          style={{ border: '1px solid #e4e8ee', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <SectionBar title="Contact Submissions" count={contacts?.length ?? 0}>
            <ExportButton
              data={contacts || []}
              filename="contacts"
              headers={[
                { label: 'Name', key: 'name' },
                { label: 'Email', key: 'email' },
                { label: 'Phone', key: 'phone' },
                { label: 'Company', key: 'company' },
                { label: 'Status', key: 'status' },
                { label: 'Message', key: 'message' },
                { label: 'Date', key: 'created_at' },
              ]}
            />
          </SectionBar>

          {contacts && contacts.length > 0 ? (
            <table className="w-full border-collapse" style={{ fontSize: '12.5px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e4e8ee' }}>
                  <th className="text-left font-semibold uppercase tracking-wider" style={{ padding: '8px 16px', color: '#9aa5b4', fontSize: '10.5px' }}>Name / Email</th>
                  <th className="text-left font-semibold uppercase tracking-wider" style={{ padding: '8px 16px', color: '#9aa5b4', fontSize: '10.5px' }}>Company</th>
                  <th className="text-left font-semibold uppercase tracking-wider" style={{ padding: '8px 16px', color: '#9aa5b4', fontSize: '10.5px' }}>Date</th>
                  <th className="text-left font-semibold uppercase tracking-wider" style={{ padding: '8px 16px', color: '#9aa5b4', fontSize: '10.5px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, i) => (
                  <tr
                    key={contact.id}
                    style={{
                      borderBottom: i < contacts.length - 1 ? '1px solid #f1f5f9' : 'none',
                      background: 'transparent',
                    }}
                    className="hover:bg-slate-50 transition-colors group"
                  >
                    <td style={{ padding: '10px 16px' }}>
                      <p className="font-semibold" style={{ color: '#1a2332', fontSize: '12.5px' }}>{contact.name}</p>
                      <p style={{ color: '#7a8898', fontSize: '11px', marginTop: '1px' }}>{contact.email}</p>
                    </td>
                    <td style={{ padding: '10px 16px', color: '#5a6778', fontSize: '12px' }}>
                      <div>{contact.company || '—'}</div>
                      {contact.phone && <div style={{ color: '#9aa5b4', fontSize: '11px', marginTop: '1px' }}>{contact.phone}</div>}
                    </td>
                    <td style={{ padding: '10px 16px', color: '#7a8898', fontSize: '12px', whiteSpace: 'nowrap' }}>
                      {new Date(contact.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '10px 16px' }}>
                      <div className="flex items-center gap-2">
                        <StatusChip status={contact.status || 'pending'} />
                        <ContactStatusToggle id={contact.id} initialStatus={contact.status} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* Message preview on expand — show last 3 */}
              {contacts.slice(0, 5).map((contact) => contact.message && (
                <tr key={`msg-${contact.id}`} style={{ background: '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                  <td colSpan={4} style={{ padding: '6px 16px 10px' }}>
                    <span className="font-semibold" style={{ fontSize: '10.5px', color: '#9aa5b4', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Message: </span>
                    <span style={{ fontSize: '12px', color: '#5a6778' }}>{contact.message}</span>
                  </td>
                </tr>
              ))}
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center" style={{ padding: '48px 16px', color: '#9aa5b4', fontSize: '13px' }}>
              No contact submissions found.
            </div>
          )}
        </div>

        {/* Newsletter Subscribers */}
        <div
          className="rounded-md overflow-hidden"
          style={{ border: '1px solid #e4e8ee', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          <SectionBar title="Newsletter Subscribers" count={subscribers?.length ?? 0}>
            <ExportButton
              data={subscribers || []}
              filename="subscribers"
              headers={[
                { label: 'Email', key: 'email' },
                { label: 'Categories', key: 'categories' },
                { label: 'Date Subscribed', key: 'created_at' },
              ]}
            />
          </SectionBar>

          {subscribers && subscribers.length > 0 ? (
            <table className="w-full border-collapse" style={{ fontSize: '12.5px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e4e8ee' }}>
                  <th className="text-left font-semibold uppercase tracking-wider" style={{ padding: '8px 16px', color: '#9aa5b4', fontSize: '10.5px' }}>Email</th>
                  <th className="text-left font-semibold uppercase tracking-wider" style={{ padding: '8px 16px', color: '#9aa5b4', fontSize: '10.5px' }}>Subscribed</th>
                  <th className="text-left font-semibold uppercase tracking-wider" style={{ padding: '8px 16px', color: '#9aa5b4', fontSize: '10.5px' }}>Categories</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub, i) => (
                  <tr
                    key={sub.id}
                    style={{ borderBottom: i < subscribers.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td style={{ padding: '10px 16px', color: '#1a2332', fontWeight: 500, fontSize: '12.5px' }}>
                      {sub.email}
                    </td>
                    <td style={{ padding: '10px 16px', color: '#7a8898', fontSize: '12px', whiteSpace: 'nowrap' }}>
                      {new Date(sub.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '10px 16px' }}>
                      <div className="flex flex-wrap gap-1">
                        {sub.categories && sub.categories.length > 0 ? (
                          sub.categories.map((cat: string) => (
                            <span
                              key={cat}
                              className="font-medium rounded"
                              style={{
                                fontSize: '10.5px',
                                background: '#eff6ff',
                                color: '#1d4ed8',
                                padding: '2px 7px',
                              }}
                            >
                              {cat}
                            </span>
                          ))
                        ) : (
                          <span
                            className="font-medium rounded"
                            style={{
                              fontSize: '10.5px',
                              background: '#f0f2f5',
                              color: '#5a6778',
                              padding: '2px 7px',
                            }}
                          >
                            All
                          </span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center" style={{ padding: '48px 16px', color: '#9aa5b4', fontSize: '13px' }}>
              No newsletter subscribers found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
