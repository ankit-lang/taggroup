import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Plus } from 'lucide-react'
import { deleteBlogPost } from '@/actions/blog.actions'

export default async function AdminBlogList() {
  const supabase = await createClient()
  const { data: blogs } = await supabase.from('blogs').select('*').order('created_at', { ascending: false })

  return (
    <div className="space-y-6 text-slate-900">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Blog Posts</h1>
        <Button asChild className="bg-amber-500 hover:bg-amber-600 text-white">
          <Link href="/admin/blog/new"><Plus className="mr-2 h-4 w-4" /> New Post</Link>
        </Button>
      </div>

      <div className="border border-slate-200 bg-white rounded-md shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="border-slate-200">
              <TableHead className="text-slate-500 font-semibold">Title</TableHead>
              <TableHead className="text-slate-500 font-semibold">Status</TableHead>
              <TableHead className="text-slate-500 font-semibold">Date</TableHead>
              <TableHead className="text-right text-slate-500 font-semibold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs && blogs.length > 0 ? (
              blogs.map((blog: any) => (
                <TableRow key={blog.id} className="border-slate-200 hover:bg-slate-50">
                  <TableCell className="font-medium text-slate-900">{blog.title}</TableCell>
                  <TableCell className="capitalize text-slate-600">{blog.status}</TableCell>
                  <TableCell className="text-slate-600">{new Date(blog.created_at).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right flex items-center justify-end gap-2">
                    <Button variant="outline" size="sm" asChild className="border-slate-200 hover:bg-slate-100 text-slate-700">
                      <Link href={`/insights/${blog.slug}`} target="_blank">View</Link>
                    </Button>
                    <form action={deleteBlogPost.bind(null, blog.id) as any}>
                      <Button variant="destructive" size="sm" type="submit">Delete</Button>
                    </form>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-12 bg-white text-slate-500 rounded-b-md">
                  <div className="flex flex-col items-center justify-center space-y-3">
                    <p>No blog posts found.</p>
                    <Button asChild variant="outline" className="border-slate-200 text-slate-700">
                      <Link href="/admin/blog/new">Create your first post</Link>
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
