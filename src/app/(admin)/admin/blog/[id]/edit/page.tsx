import Link from 'next/link'
import { getBlogForEdit } from '@/actions/blog.actions'
import { BlogEditor } from '@/components/admin/BlogEditor'

export const dynamic = 'force-dynamic'

export default async function EditBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const { blog, error } = await getBlogForEdit(id)

  if (!blog) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center space-y-4 text-slate-700">
        <p className="text-lg font-semibold">Couldn&apos;t open this article</p>
        <p className="text-sm text-slate-500">{error}</p>
        <Link href="/admin/blog" className="text-sm font-medium text-amber-700 hover:underline">← Back to Blog Posts</Link>
      </div>
    )
  }

  return <BlogEditor key={blog.id} initial={blog} />
}
