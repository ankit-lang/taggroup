'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { createBlogPost } from '@/actions/blog.actions'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RichTextEditor } from '@/components/admin/RichTextEditor'
import { ArrowLeft, Loader2, Image as ImageIcon, FileText } from 'lucide-react'
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
  
  const [imageUrl, setImageUrl] = React.useState('')
  const [uploadingImage, setUploadingImage] = React.useState(false)
  const [extractingPdf, setExtractingPdf] = React.useState(false)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploadingImage(true)
      const formData = new FormData()
      formData.append('file', file)
      
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET

      if (!cloudName || !uploadPreset) {
        throw new Error('Cloudinary environment variables are missing.')
      }

      formData.append('upload_preset', uploadPreset)

      const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: formData
      })

      const data = await res.json()
      if (data.secure_url) {
        setImageUrl(data.secure_url)
      } else {
        throw new Error(data.error?.message || 'Failed to upload image')
      }
    } catch (err: any) {
      console.error(err)
      alert(err.message || 'Image upload failed')
    } finally {
      setUploadingImage(false)
    }
  }

  const handlePdfUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setExtractingPdf(true)
      
      // 1. Upload PDF to Cloudinary
      const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
      const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      if (!cloudName || !uploadPreset) throw new Error('Cloudinary env missing')

      const uploadFormData = new FormData()
      uploadFormData.append('file', file)
      uploadFormData.append('upload_preset', uploadPreset)

      const cloudRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
        method: 'POST',
        body: uploadFormData
      })
      const cloudData = await cloudRes.json()
      
      if (!cloudData.secure_url) {
        throw new Error('Failed to upload PDF to Cloudinary')
      }
      
      const pdfUrl = cloudData.secure_url

      // 2. Extract Text via our unpdf API
      const extractFormData = new FormData()
      extractFormData.append('file', file)
      
      const response = await fetch('/api/extract-pdf', {
        method: 'POST',
        body: extractFormData,
      })
      
      const res = await response.json()
      
      if (!response.ok) {
        throw new Error(res.error || 'Failed to extract text from PDF')
      }

      if (res.isScanned) {
        alert(res.warning || 'This PDF appears to be a scanned image with no readable text layer.')
      }

      // 3. Construct HTML block
      const downloadButtonHtml = `<p><a href="${pdfUrl}" target="_blank">Download Attached PDF</a></p>`
      
      let newTextHtml = ''
      if (res.success && res.text) {
        // Split text by double newlines into distinct paragraphs, then replace single newlines with br
        const paragraphs = res.text
          .split(/\n\s*\n/)
          .filter((p: string) => p.trim().length > 0)
        
        newTextHtml = paragraphs.map((p: string) => `<p>${p.trim().replace(/\n/g, '<br/>')}</p>`).join('')
      }

      if (!title) {
        setTitle(file.name.replace('.pdf', ''))
      }
      
      setContent(prev => prev + downloadButtonHtml + newTextHtml)
      
    } catch (err: any) {
      alert(err.message || 'An error occurred during PDF extraction')
    } finally {
      setExtractingPdf(false)
      e.target.value = ''
    }
  }

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
    if (imageUrl) formData.append('image_url', imageUrl)

    const res = await createBlogPost(formData)
    
    if (res.success) {
      router.push('/admin/blog')
    } else {
      setError(res.error || 'Failed to create post.')
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 text-slate-900 pb-20">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild className="border-slate-200">
          <Link href="/admin/blog"><ArrowLeft className="h-4 w-4" /></Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Create New Insight</h1>
      </div>

      {error && (
        <div className="bg-rose-50 text-rose-600 border border-rose-200 p-4 rounded-md text-sm shadow-sm">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Post Title</label>
          <Input 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
            placeholder="e.g. Understanding International Tax Laws" 
            className="text-lg py-6 bg-white border-slate-200 text-slate-900 shadow-sm focus-visible:ring-amber-500"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Category</label>
          <select 
            value={category} 
            onChange={e => setCategory(e.target.value)}
            className="flex h-11 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">Cover Image</label>
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 transition-colors hover:bg-slate-100">
            {imageUrl ? (
              <div className="relative w-full max-w-md shadow-sm border border-slate-200 rounded-md overflow-hidden bg-white">
                <img src={imageUrl} alt="Cover" className="w-full h-auto object-cover" />
                <Button 
                  type="button" 
                  variant="destructive" 
                  size="sm" 
                  className="absolute top-2 right-2 shadow-sm"
                  onClick={() => setImageUrl('')}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <>
                <ImageIcon className="h-10 w-10 text-slate-400 mb-4" />
                <p className="text-sm text-slate-500 mb-4 font-medium">Upload a cover image via Cloudinary</p>
                <div className="relative">
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    disabled={uploadingImage}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Button type="button" disabled={uploadingImage} variant="outline" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50">
                    {uploadingImage ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...</> : 'Select Image'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-slate-700">Content</label>
            
            {/* Auto-Extract PDF Feature */}
            <div className="relative inline-block">
              <Input 
                type="file" 
                accept="application/pdf" 
                onChange={handlePdfUpload} 
                disabled={extractingPdf}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <Button type="button" disabled={extractingPdf} variant="outline" size="sm" className="h-8 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-colors">
                {extractingPdf ? <><Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" /> Extracting PDF...</> : <><FileText className="mr-2 h-3.5 w-3.5" /> Auto-Fill from PDF</>}
              </Button>
            </div>
          </div>
          
          <RichTextEditor content={content} onChange={setContent} />
        </div>

        <div className="flex gap-4 pt-6 border-t border-slate-200">
          <Button onClick={() => handleSubmit('published')} disabled={isSubmitting} className="px-8 bg-amber-500 hover:bg-amber-600 text-white shadow-sm">
            {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Publish Insight
          </Button>
          <Button onClick={() => handleSubmit('draft')} variant="outline" disabled={isSubmitting} className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  )
}
