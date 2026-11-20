import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus, Pencil, Trash2, RotateCcw } from 'lucide-react'
import { deleteBlogPost, restoreBlogPost, deleteBlogPermanently } from '@/actions/blog.actions'
import { requireAdminPage, hasRole } from '@/lib/auth/admin'
import { StatusBadge } from '@/components/admin/BlogEditor'
import { blogStatus, formatIst, type BlogStatus } from '@/lib/blog-schedule'

export const dynamic = 'force-dynamic'

type Filter = 'all' | BlogStatus | 'trash'
const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'published', label: 'Published' },
  { key: 'scheduled', label: 'Scheduled' },
  { key: 'draft', label: 'Drafts' },
  { key: 'trash', label: 'Trash' },
]

export default async function AdminBlogList({ searchParams }: { searchParams: Promise<{ status?: string }> }) {
  const { status: filterParam } = await searchParams
  const filter = FILTERS.some(f => f.key === filterParam) ? (filterParam as Filter) : 'all'

  const admin = await requireAdminPage('editor')
  const isSuper = hasRole(admin, 'super_admin')
  const supabase = await createClient()
  const { data } = await supabase.from('blogs').select('*').order('created_at', { ascending: false })

  const now = new Date()
  const all = (data || []) as any[]
  const trashed = all.filter((b: any) => b.deleted_at)
  const rows = all
    .filter((b: any) => !b.deleted_at)
    .map((b: any) => ({ ...b, _status: blogStatus(b, now) as BlogStatus, _date: b.published_at || b.created_at }))
    // Scheduled first (soonest on top), then everything else newest first.
    .sort((a: any, b: any) => {
      if (a._status === 'scheduled' && b._status === 'scheduled') return +new Date(a._date) - +new Date(b._date)
      if (a._status === 'scheduled') return -1
      if (b._status === 'scheduled') return 1
      return +new Date(b._date) - +new Date(a._date)
    })
  const counts = Object.fromEntries(FILTERS.map(f => [f.key, f.key === 'all' ? rows.length : f.key === 'trash' ? trashed.length : rows.filter((r: any) => r._status === f.key).length]))
  const visible = filter === 'all' ? rows : filter === 'trash' ? trashed : rows.filter((r: any) => r._status === filter)

  return (
    <div className="space-y-6 text-slate-900">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Blog Posts</h1>
        <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
          <Link href="/admin/blog/new"><Plus className="mr-2 h-4 w-4" /> New Post</Link>
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map(f => (
          <Link
            key={f.key}
            href={f.key === 'all' ? '/admin/blog' : `/admin/blog?status=${f.key}`}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium ${filter === f.key ? 'border-amber-500 bg-amber-500 text-white' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
          >
            {f.label} <span className="opacity-70">({counts[f.key]})</span>
          </Link>
        ))}
      </div>

      <div className="border border-slate-200 bg-white rounded-md shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="border-slate-200">
              <TableHead className="text-slate-500 font-semibold">Title</TableHead>
              <TableHead className="text-slate-500 font-semibold">Status</TableHead>
              <TableHead className="text-slate-500 font-semibold">Publication date (IST)</TableHead>
              <TableHead className="text-right text-slate-500 font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visible.length > 0 ? (
              visible.map((blog: any) => filter === 'trash' ? (
                <TableRow key={blog.id} className="border-slate-200 hover:bg-slate-50">
                  <TableCell className="font-medium text-slate-500">
                    {blog.title}
                    <div className="text-xs font-normal text-slate-400">/blog/{blog.slug}</div>
                  </TableCell>
                  <TableCell><span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-700">In trash</span></TableCell>
                  <TableCell className="text-slate-500 text-sm">
                    Deleted {formatIst(blog.deleted_at, { withTime: true })}
                    {blog.deleted_by && <div className="text-xs text-slate-400">by {blog.deleted_by}</div>}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <form action={restoreBlogPost.bind(null, blog.id) as any}>
                        <Button variant="outline" size="sm" type="submit" className="border-slate-200 text-slate-700"><RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Restore</Button>
                      </form>
                      {isSuper && (
                        <form action={deleteBlogPermanently.bind(null, blog.id) as any}>
                          <Button variant="destructive" size="sm" type="submit">Delete forever</Button>
                        </form>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow key={blog.id} className="border-slate-200 hover:bg-slate-50">
                  <TableCell className="font-medium text-slate-900">
                    <Link href={`/admin/blog/${blog.id}/edit`} className="hover:text-amber-700">{blog.title}</Link>
                    <div className="text-xs font-normal text-slate-400">/blog/{blog.slug}</div>
                  </TableCell>
                  <TableCell><StatusBadge status={blog._status} /></TableCell>
                  <TableCell className="text-slate-600">
                    {blog._status === 'scheduled' ? (
                      <span className="text-sky-700">Goes live {formatIst(blog._date, { withTime: true })}</span>
                    ) : blog._status === 'draft' ? (
                      <span className="text-slate-400">{blog.published_at ? `Planned: ${formatIst(blog.published_at, { withTime: true })}` : '—'}</span>
                    ) : (
                      formatIst(blog._date)
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="outline" size="sm" asChild className="border-slate-200 hover:bg-slate-100 text-slate-700">
                        <Link href={`/admin/blog/${blog.id}/edit`}><Pencil className="mr-1.5 h-3.5 w-3.5" /> Edit</Link>
                      </Button>
                      {blog._status === 'published' && (
                        <Button variant="outline" size="sm" asChild className="border-slate-200 hover:bg-slate-100 text-slate-700">
                          <Link href={`/blog/${blog.slug}`} target="_blank">View</Link>
                        </Button>
                      )}
                      <form action={deleteBlogPost.bind(null, blog.id) as any}>
                        <Button variant="outline" size="sm" type="submit" title="Move to trash (can be restored)" className="border-rose-200 text-rose-600 hover:bg-rose-50"><Trash2 className="mr-1.5 h-3.5 w-3.5" /> Delete</Button>
                      </form>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-12 bg-white text-slate-500 rounded-b-md">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <p>{filter === 'all' ? 'No blog posts found.' : filter === 'trash' ? 'Trash is empty.' : `No ${filter} posts.`}</p>
                    <Button asChild variant="outline" className="border-slate-200 text-slate-700">
                      <Link href="/admin/blog/new">Create a post</Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
