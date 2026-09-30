import { createClient } from '@/lib/supabase/server'
import { Plus, Download, Mail, FileText, Inbox, AlertCircle, CheckCircle2, Activity, Database, MoreVertical } from 'lucide-react'
import Link from 'next/link'

function MetricCard({ title, value, icon: Icon, trend, trendUp, color, link }: any) {
  return (
    <div
      className="relative overflow-hidden rounded-md group"
      style={{ background: '#fff', border: '1px solid #e4e8ee', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p style={{ fontSize: '11.5px', color: '#7a8898', fontWeight: 500, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            {title}
          </p>
          <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#1a2332', lineHeight: 1 }}>{value}</h3>
          {trend && (
            <p style={{ fontSize: '11px', marginTop: '6px', color: trendUp ? '#15803d' : '#7a8898', fontWeight: 500 }}>
              {trend}
            </p>
          )}
        </div>
        <div
          className="flex items-center justify-center rounded"
          style={{ width: '36px', height: '36px', background: color || '#fff8e6', flexShrink: 0 }}
        >
          <Icon style={{ width: '18px', height: '18px', color: '#c9a84c' }} />
        </div>
      </div>
      {link && (
        <Link href={link} className="absolute inset-0 z-10">
          <span className="sr-only">View {title}</span>
        </Link>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    new:          { bg: '#eff6ff', color: '#1d4ed8' },
    'in-progress':{ bg: '#fff8e6', color: '#b45309' },
    closed:       { bg: '#f0fdf4', color: '#15803d' },
  };
  const s = map[status] ?? { bg: '#f1f5f9', color: '#475569' };
  return (
    <span
      className="font-medium rounded capitalize"
      style={{ fontSize: '11px', background: s.bg, color: s.color, padding: '2px 8px', whiteSpace: 'nowrap' }}
    >
      {status.replace('-', ' ')}
    </span>
  )
}

export default async function AdminDashboard() {
  const supabase = await createClient()

  const { count: blogCount } = await supabase.from('blogs').select('*', { count: 'exact', head: true });
  const { count: subCount } = await supabase.from('subscribers').select('*', { count: 'exact', head: true });
  const { count: leadCount } = await supabase.from('leads').select('*', { count: 'exact', head: true });

  const { data: recentLeads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);

  const leads = recentLeads || [];

  return (
    <div className="w-full max-w-[1280px] mx-auto">
      {/* Page title strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 style={{ fontSize: '18px', fontWeight: 700, color: '#1a2332', lineHeight: 1.3 }}>Overview Dashboard</h1>
          <p style={{ fontSize: '12px', color: '#7a8898', marginTop: '2px' }}>
            Manage client inquiries, editorial content, and audience growth.
          </p>
        </div>
        <div className="flex items-center gap-2">

          <Link
            href="/admin/blog/new"
            className="flex items-center gap-1.5 rounded font-medium transition-colors hover:opacity-90"
            style={{ padding: '6px 14px', background: '#c9a84c', color: '#fff', fontSize: '12.5px', textDecoration: 'none' }}
          >
            <Plus style={{ width: '13px', height: '13px' }} />
            New Blog Post
          </Link>
        </div>
      </div>

      {/* KPI row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard title="Total Inquiries" value={leadCount ?? 0} icon={Inbox} trend="View all →" trendUp link="/admin/inquiries" />
        <MetricCard title="Newsletter Subs" value={subCount ?? 0} icon={Mail} trend="+5 new this week" trendUp />
        <MetricCard title="Published Content" value={blogCount ?? 0} icon={FileText} trend="2 drafts pending" />
        <MetricCard title="Pending Actions" value={leads.length} icon={AlertCircle} trend={leads.length > 0 ? 'Requires attention' : 'All clear'} trendUp={leads.length === 0} />
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
        {/* Inquiries Table */}
        <div
          className="rounded-md overflow-hidden"
          style={{ border: '1px solid #e4e8ee', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
        >
          {/* Table header bar */}
          <div
            className="flex items-center justify-between"
            style={{ height: '44px', padding: '0 16px', borderBottom: '1px solid #e4e8ee' }}
          >
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a2332' }}>Recent Inquiries</span>
            <Link href="/admin/inquiries" style={{ fontSize: '12px', color: '#c9a84c', fontWeight: 500, textDecoration: 'none' }}>
              View all →
            </Link>
          </div>
          <div className="overflow-x-auto">
            {leads.length > 0 ? (
              <table className="w-full border-collapse min-w-[600px]" style={{ fontSize: '12.5px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e4e8ee' }}>
                  {['Contact', 'Service', 'Date', 'Status', ''].map((h) => (
                    <th
                      key={h}
                      className="text-left font-semibold uppercase tracking-wider"
                      style={{ padding: '8px 16px', color: '#9aa5b4', fontSize: '10.5px' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((lead: any, i: number) => (
                  <tr
                    key={lead.id}
                    className="group hover:bg-slate-50 transition-colors"
                    style={{ borderBottom: i < leads.length - 1 ? '1px solid #f1f5f9' : 'none' }}
                  >
                    <td style={{ padding: '10px 16px' }}>
                      <p className="font-semibold" style={{ color: '#1a2332' }}>{lead.name}</p>
                      <p style={{ color: '#9aa5b4', fontSize: '11px', marginTop: '1px' }}>{lead.email}</p>
                    </td>
                    <td style={{ padding: '10px 16px', color: '#5a6778' }}>
                      <p>{lead.service || 'General Inquiry'}</p>
                      <p style={{ fontSize: '11px', color: '#9aa5b4', textTransform: 'capitalize', marginTop: '1px' }}>{lead.type}</p>
                    </td>
                    <td style={{ padding: '10px 16px', color: '#7a8898', whiteSpace: 'nowrap' }}>
                      {new Date(lead.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td style={{ padding: '10px 16px' }}>
                      <StatusBadge status="new" />
                    </td>
                    <td style={{ padding: '10px 16px', textAlign: 'right' }}>
                      <button
                        className="rounded p-1 transition-all opacity-0 group-hover:opacity-100 hover:bg-amber-50"
                        style={{ color: '#9aa5b4' }}
                      >
                        <MoreVertical style={{ width: '14px', height: '14px' }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex flex-col items-center justify-center" style={{ padding: '48px 16px' }}>
              <div
                className="flex items-center justify-center rounded-full"
                style={{ width: '48px', height: '48px', background: '#f0f2f5', color: '#9aa5b4', marginBottom: '12px' }}
              >
                <Inbox style={{ width: '22px', height: '22px' }} />
              </div>
              <p style={{ fontSize: '13px', fontWeight: 600, color: '#1a2332', marginBottom: '4px' }}>No inquiries yet</p>
              <p style={{ fontSize: '12px', color: '#7a8898', textAlign: 'center', maxWidth: '280px' }}>
                When visitors submit contact forms or consultation requests, they will appear here.
              </p>
            </div>
          )}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {/* Activity Feed */}
          <div
            className="rounded-md overflow-hidden"
            style={{ border: '1px solid #e4e8ee', background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
          >
            <div
              style={{ height: '44px', padding: '0 16px', borderBottom: '1px solid #e4e8ee', display: 'flex', alignItems: 'center' }}
            >
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#1a2332' }}>System Activity</span>
            </div>
            <div style={{ padding: '16px' }}>
              <div style={{ borderLeft: '2px solid #e4e8ee', marginLeft: '8px', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { label: 'New inquiry received', sub: 'From UAE Desk page · 10 min ago', dot: '#c9a84c' },
                  { label: 'Newsletter sent', sub: '"Tax Updates Q3" to 1,204 subs · 2h ago', dot: '#60a5fa' },
                  { label: 'Draft blog created', sub: 'By Admin User · Yesterday', dot: '#34d399' },
                ].map((ev) => (
                  <div key={ev.label} className="relative">
                    <div
                      className="absolute rounded-full"
                      style={{ width: '8px', height: '8px', background: ev.dot, left: '-25px', top: '4px' }}
                    />
                    <p style={{ fontSize: '12.5px', fontWeight: 600, color: '#1a2332' }}>{ev.label}</p>
                    <p style={{ fontSize: '11px', color: '#9aa5b4', marginTop: '2px' }}>{ev.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* System Status */}
          <div
            className="rounded-md overflow-hidden relative"
            style={{ background: '#1a2332', border: '1px solid rgba(255,255,255,0.06)', padding: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.12)' }}
          >
            <div className="absolute top-0 right-0 p-4 pointer-events-none opacity-5">
              <Database style={{ width: '80px', height: '80px', color: '#fff' }} />
            </div>
            <p className="flex items-center gap-2" style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '14px' }}>
              <Activity style={{ width: '14px', height: '14px', color: '#34d399' }} />
              System Status
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
              {[
                { label: 'Database Connection', status: 'Healthy', ok: true },
                { label: 'Authentication', status: 'Online', ok: true },
                { label: 'Email Transport', status: 'Standby', ok: false },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                  <span>{item.label}</span>
                  <span className="flex items-center gap-1 font-medium" style={{ color: item.ok ? '#34d399' : '#fbbf24' }}>
                    <CheckCircle2 style={{ width: '12px', height: '12px' }} />
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
