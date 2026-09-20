'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { createBlogPost } from '@/actions/blog.actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RichTextEditor } from '@/components/admin/RichTextEditor'
import { ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'

const CATEGORIES = [
  'Direct Tax', 'Indirect Tax', 'International Tax', 'M&A', 'Startup Ecosystem', 'Regulatory Updates', 'Geopolitics', 'General'
]

export default function NewBlogPost() {
  const router = useRouter()
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [category, setCategory] = React.useState('Direct Tax')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  async function handleSubmit(status: 'draft' | 'published') {
    if (!title || !content) {
      setError('Title and content are required.')
      return
    }

    setIsSubmitting(true)
    setError(null)

    const formData = new FormData()
    formData.append('title', title)
    formData.append('content', content)
    formData.append('category', category)
    formData.append('status', status)

    const res = await createBlogPost(formData)
    
    if (res.success) {
      router.push('/admin/blog')
    } else {
      setError(res.error || 'Failed to create post.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/admin/blog"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Create New Insight</h1>
      </div>

      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-md text-sm">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Post Title</label>
          <Input 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            placeholder="e.g. Understanding International Tax Laws" 
            className="text-lg py-6"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <select 
            value={category} 
            onChange={e => setCategory(e.target.value)}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Content</label>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <div className="flex gap-4 pt-6">
          <Button onClick={() => handleSubmit('published')} disabled={isSubmitting} className="px-8">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Publish Now
          </Button>
          <Button onClick={() => handleSubmit('draft')} variant="secondary" disabled={isSubmitting}>
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  )
}
