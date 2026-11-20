'use client'

import * as React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { ArrowLeft, Loader2, Image as ImageIcon, FileText, CalendarClock, ExternalLink } from 'lucide-react'

import { createBlogPost, updateBlogPost } from '@/actions/blog.actions'
import { ensureAuthCookie } from '@/lib/supabase/client'
import { blogStatus, formatIst, fromIstInputValue, slugify, toIstInputValue, type BlogStatus } from '@/lib/blog-schedule'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RichTextEditor } from '@/components/admin/RichTextEditor'

const CATEGORIES = [
  'Direct Tax', 'Indirect Tax', 'International Tax', 'M&A', 'Startup Ecosystem', 'Regulatory Updates', 'Geopolitics', 'General'
]

export type EditableBlog = {
  id: string
  title: string
  slug: string
  content: string
  category: string | null
  image_url: string | null
  excerpt?: string | null
  seo_title?: string | null
  meta_description?: string | null
  tags?: string[] | null
  status: string
  published_at?: string | null
}

const STATUS_STYLE: Record<BlogStatus, string> = {
  draft: 'bg-slate-100 text-slate-700 border-slate-200',
  scheduled: 'bg-sky-50 text-sky-700 border-sky-200',
  published: 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

export function StatusBadge({ status }: { status: BlogStatus }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize ${STATUS_STYLE[status]}`}>
      {status}
    </span>
  )
}

const label = 'text-sm font-semibold text-slate-700'
const field = 'bg-white border-slate-200 text-slate-900 shadow-sm focus-visible:ring-amber-500'
const textarea = 'w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500'

export function BlogEditor({ initial }: { initial?: EditableBlog }) {
  const router = useRouter()
  const isEdit = !!initial
  const [saved, setSaved] = React.useState(initial) // last saved version (edit mode)

  const [title, setTitle] = React.useState(initial?.title ?? '')
  const [slug, setSlug] = React.useState(initial?.slug ?? '')
  const [slugTouched, setSlugTouched] = React.useState(isEdit)
  const [content, setContent] = React.useState(initial?.content ?? '')
  const [category, setCategory] = React.useState(initial?.category || 'Direct Tax')
  const [imageUrl, setImageUrl] = React.useState(initial?.image_url ?? '')
  const [excerpt, setExcerpt] = React.useState(initial?.excerpt ?? '')
  const [seoTitle, setSeoTitle] = React.useState(initial?.seo_title ?? '')
  const [metaDescription, setMetaDescription] = React.useState(initial?.meta_description ?? '')
  const [tags, setTags] = React.useState((initial?.tags ?? []).join(', '))

  // Edit mode shows the article's existing date (saving keeps it); new articles default to "now".
  const [mode, setMode] = React.useState<'now' | 'schedule'>(initial?.published_at ? 'schedule' : 'now')
  const [scheduleAt, setScheduleAt] = React.useState(toIstInputValue(initial?.published_at))

  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [uploadingImage, setUploadingImage] = React.useState(false)
  const [extractingPdf, setExtractingPdf] = React.useState(false)

  const effectiveSlug = slugTouched ? slugify(slug) : slugify(title)
  const savedStatus = saved ? blogStatus(saved) : null
  const scheduledIso = mode === 'schedule' ? fromIstInputValue(scheduleAt) : null
  const isFuture = !!scheduledIso && new Date(scheduledIso) > new Date()
  const slugChanged = isEdit && saved?.slug && effectiveSlug && effectiveSlug !== saved.slug

  const primaryLabel = mode === 'schedule' && isFuture
    ? (isEdit ? 'Save & schedule' : 'Schedule article')
    : isEdit
      ? (savedStatus === 'published' ? 'Update article' : 'Publish article')
      : 'Publish article'

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      setUploadingImage(true)
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      if (!cloudName || !uploadPreset) throw new Error('Cloudinary environment variables are missing.')
      const formData = new FormData()
      formData.append('file', file)
      formData.append('upload_preset', uploadPreset)
      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, { method: 'POST', body: formData })
      const data = await res.json()
      if (!data.secure_url) throw new Error(data.error?.message || 'Failed to upload image')
      setImageUrl(data.secure_url)
    } catch (err: any) {
      console.error(err)
      toast.error(err.message || 'Image upload failed')
    } finally {
      setUploadingImage(false)
      e.target.value = ''
    }
  }

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      setExtractingPdf(true)
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      if (!cloudName || !uploadPreset) throw new Error('Cloudinary env missing')

      // 1. Upload the PDF so readers can download it.
      const uploadFormData = new FormData()
      uploadFormData.append('file', file)
      uploadFormData.append('upload_preset', uploadPreset)
      const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, { method: 'POST', body: uploadFormData })
      const cloudData = await cloudRes.json()
      if (!cloudData.secure_url) throw new Error('Failed to upload PDF to Cloudinary')

      // 2. Extract its text.
      const extractFormData = new FormData()
      extractFormData.append('file', file)
      const response = await fetch('/api/extract-pdf', { method: 'POST', body: extractFormData })
      const res = await response.json()
      if (!response.ok) throw new Error(res.error || 'Failed to extract text from PDF')
      if (res.isScanned) toast.warning(res.warning || 'This PDF appears to be a scanned image with no readable text layer.')

      // 3. Append to the article.
      const downloadButtonHtml = `<p><a href="${cloudData.secure_url}" target="_blank">Download Attached PDF</a></p>`
      let newTextHtml = ''
      if (res.success && res.text) {
        newTextHtml = res.text
          .split(/\n\s*\n/)
          .filter((p: string) => p.trim().length > 0)
          .map((p: string) => `<p>${p.trim().replace(/\n/g, '<br/>')}</p>`)
          .join('')
      }
      if (!title) setTitle(file.name.replace(/\.pdf$/i, ''))
      setContent((prev) => prev + downloadButtonHtml + newTextHtml)
    } catch (err: any) {
      toast.error(err.message || 'An error occurred during PDF extraction')
    } finally {
      setExtractingPdf(false)
      e.target.value = ''
    }
  }

  async function handleSubmit(intent: 'publish' | 'draft') {
    if (!title.trim() || !content || content === '<p></p>') {
      setError('Title and content are required.')
      return
    }
    if (mode === 'schedule' && !scheduledIso) {
      setError('Pick a publishing date and time, or choose "Publish immediately".')
      return
    }

    setIsSubmitting(true)
    setError(null)

    const formData = new FormData()
    formData.append('title', title.trim())
    formData.append('slug', effectiveSlug)
    formData.append('content', content)
    formData.append('category', category)
    if (imageUrl) formData.append('image_url', imageUrl)
    formData.append('excerpt', excerpt)
    formData.append('seo_title', seoTitle)
    formData.append('meta_description', metaDescription)
    formData.append('tags', tags)
    formData.append('intent', intent)
    formData.append('publish_mode', mode)
    if (mode === 'schedule') formData.append('published_at', scheduleAt)

    await ensureAuthCookie().catch(() => null)
    const res = isEdit ? await updateBlogPost(initial!.id, formData) : await createBlogPost(formData)
    setIsSubmitting(false)

    if (!res.success) {
      setError(res.error)
      toast.error(res.error)
      return
    }

    const when = res.data.status === 'scheduled' ? ` Goes live ${formatIst(res.data.published_at, { withTime: true })}.` : ''
    toast.success(res.message + when)

    if (isEdit) {
      // Stay on the page with the saved values.
      const next = { ...saved!, slug: res.data.slug, status: res.data.status === 'draft' ? 'draft' : 'published', published_at: res.data.published_at }
      setSaved(next)
      setSlug(res.data.slug)
      if (res.data.published_at) {
        setMode('schedule')
        setScheduleAt(toIstInputValue(res.data.published_at))
      }
      router.refresh()
    } else {
      router.push('/admin/blog')
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 text-slate-900 pb-20">
      <div className="flex items-center gap-4 flex-wrap">
        <Button variant="outline" size="icon" asChild className="border-slate-200">
          <Link href="/admin/blog"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">{isEdit ? 'Edit Article' : 'Create New Insight'}</h1>
        {savedStatus && <StatusBadge status={savedStatus} />}
        {isEdit && savedStatus === 'published' && saved?.slug && (
          <Link href={`/blog/${saved.slug}`} target="_blank" className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-amber-700 hover:underline">
            View live <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>

      {error && (
        <div className="bg-rose-50 text-rose-600 border border-rose-200 p-4 rounded-md text-sm shadow-sm whitespace-pre-wrap">{error}</div>
      )}

      <div className="space-y-6">
        <div className="space-y-2">
          <label className={label}>Post Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Understanding International Tax Laws" className={`text-lg py-6 ${field}`} />
        </div>

        <div className="space-y-2">
          <label className={label}>URL (slug)</label>
          <div className="flex items-center rounded-md border border-slate-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-amber-500">
            <span className="pl-3 text-sm text-slate-500 select-none">/blog/</span>
            <input
              value={slugTouched ? slug : effectiveSlug}
              onChange={(e) => { setSlugTouched(true); setSlug(e.target.value) }}
              onBlur={() => setSlug(slugify(slug))}
              placeholder="auto-generated-from-title"
              className="flex-1 bg-transparent px-1 py-2.5 text-sm text-slate-900 outline-none"
            />
          </div>
          {slugChanged ? (
            <p className="text-xs text-amber-700">The URL will change from /blog/{saved!.slug}. The old link will automatically redirect to the new one.</p>
          ) : (
            <p className="text-xs text-slate-500">{isEdit ? 'Changing this creates a redirect from the old URL.' : 'Generated from the title — edit if you want a shorter link.'}</p>
          )}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className={label}>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="flex h-11 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500">
              {[...new Set([...CATEGORIES, category])].map((cat) => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <label className={label}>Tags <span className="font-normal text-slate-400">(comma-separated)</span></label>
            <Input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="e.g. GST, Transfer Pricing, Budget 2026" className={`h-11 ${field}`} />
          </div>
        </div>

        <div className="space-y-2">
          <label className={label}>Cover Image</label>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 transition-colors hover:bg-slate-100">
            {imageUrl ? (
              <div className="relative w-full max-w-md shadow-sm border border-slate-200 rounded-md overflow-hidden bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt="Cover" className="w-full h-auto object-cover" />
                <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2 shadow-sm" onClick={() => setImageUrl('')}>Remove</Button>
              </div>
            ) : (
              <>
                <ImageIcon className="h-10 w-10 text-slate-400 mb-4" />
                <p className="text-sm text-slate-500 mb-4 font-medium">Upload a cover image via Cloudinary</p>
                <div className="relative">
                  <Input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploadingImage} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                  <Button type="button" disabled={uploadingImage} variant="outline" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50">
                    {uploadingImage ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...</> : 'Select Image'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className={label}>Excerpt / short description</label>
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={3} maxLength={400} placeholder="Shown on the blog listing cards. Leave empty to use the first lines of the article." className={textarea} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className={label}>Content</label>
            <div className="relative inline-block">
              <Input type="file" accept="application/pdf" onChange={handlePdfUpload} disabled={extractingPdf} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
              <Button type="button" disabled={extractingPdf} variant="outline" size="sm" className="h-8 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-colors">
                {extractingPdf ? <><Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" /> Extracting PDF...</> : <><FileText className="mr-2 h-3.5 w-3.5" /> Auto-Fill from PDF</>}
              </Button>
            </div>
          </div>
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        {/* SEO */}
        <div className="rounded-lg border border-slate-200 bg-white p-5 space-y-4 shadow-sm">
          <div>
            <h2 className="text-base font-semibold">Search engine (SEO)</h2>
            <p className="text-xs text-slate-500">Optional. Defaults to the post title and the first lines of the article.</p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between"><label className={label}>SEO title</label><span className={`text-xs ${seoTitle.length > 60 ? 'text-amber-600' : 'text-slate-400'}`}>{seoTitle.length}/60</span></div>
            <Input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder={title || 'Title shown in Google results'} className={field} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between"><label className={label}>Meta description</label><span className={`text-xs ${metaDescription.length > 160 ? 'text-amber-600' : 'text-slate-400'}`}>{metaDescription.length}/160</span></div>
            <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={2} placeholder="One or two sentences summarising the article for search results." className={textarea} />
          </div>
        </div>

        {/* Publishing */}
        <div className="rounded-lg border border-slate-200 bg-white p-5 space-y-4 shadow-sm">
          <div className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-amber-600" />
            <h2 className="text-base font-semibold">Publishing</h2>
            <span className="text-xs text-slate-500">Times are India Standard Time (IST)</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 ${mode === 'now' ? 'border-amber-400 bg-amber-50' : 'border-slate-200'}`}>
              <input type="radio" name="publish_mode" checked={mode === 'now'} onChange={() => setMode('now')} className="mt-1 accent-amber-600" />
              <span>
                <span className="block text-sm font-semibold">Publish immediately</span>
                <span className="block text-xs text-slate-500">
                  {isEdit && savedStatus === 'published' ? 'Keeps the current publication date.' : 'Goes live as soon as you save, dated now.'}
                </span>
              </span>
            </label>
            <label className={`flex cursor-pointer items-start gap-3 rounded-md border p-3 ${mode === 'schedule' ? 'border-amber-400 bg-amber-50' : 'border-slate-200'}`}>
              <input type="radio" name="publish_mode" checked={mode === 'schedule'} onChange={() => setMode('schedule')} className="mt-1 accent-amber-600" />
              <span>
                <span className="block text-sm font-semibold">Set publication date</span>
                <span className="block text-xs text-slate-500">Future date → scheduled. Past date → live now, shown with that date.</span>
              </span>
            </label>
          </div>

          {mode === 'schedule' && (
            <div className="space-y-2">
              <input
                type="datetime-local"
                value={scheduleAt}
                onChange={(e) => setScheduleAt(e.target.value)}
                className="h-11 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {scheduledIso && (
                <p className={`text-xs ${isFuture ? 'text-sky-700' : 'text-emerald-700'}`}>
                  {isFuture
                    ? `Scheduled: will appear on the website automatically on ${formatIst(scheduledIso, { withTime: true })}.`
                    : `Past date: will be live immediately and shown as published on ${formatIst(scheduledIso, { month: 'long' })}.`}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-200">
          <Button onClick={() => handleSubmit('publish')} disabled={isSubmitting} className="px-8 bg-amber-500 hover:bg-amber-600 text-white shadow-sm">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {primaryLabel}
          </Button>
          <Button onClick={() => handleSubmit('draft')} variant="outline" disabled={isSubmitting} className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50">
            {isEdit && savedStatus !== 'draft' ? 'Unpublish (move to draft)' : 'Save as draft'}
          </Button>
        </div>
      </div>
    </div>
  )
}
