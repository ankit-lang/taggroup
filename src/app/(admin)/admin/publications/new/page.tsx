'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createPublication } from '@/actions/publication.actions'
import { Image as ImageIcon, Loader2 } from 'lucide-react'

export default function NewPublicationPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [uploadingImage, setUploadingImage] = useState(false)

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    try {
      setUploadingImage(true)
      const formData = new FormData()
      formData.append('file', file)
      
      // Cloudinary configuration from env
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

  async function handleSubmit(formData: FormData) {
    try {
      setLoading(true)
      setError('')
      
      if (imageUrl) {
        formData.append('image_url', imageUrl)
      }

      const res = await createPublication(formData)
      if (res.success) {
        router.push('/admin/publications')
      } else {
        setError(res.error || 'Failed to create publication')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">New Publication</h1>
      
      {error && (
        <div className="bg-destructive/10 text-destructive p-4 rounded-md mb-6">
          {error}
        </div>
      )}

      <form action={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Title</label>
          <Input name="title" required placeholder="Publication Title" />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <select name="category" className="w-full h-10 px-3 rounded-md border bg-background text-sm">
            <option value="Direct Tax">Direct Tax</option>
            <option value="Indirect Tax">Indirect Tax</option>
            <option value="International Tax">International Tax</option>
            <option value="M&A">M&A</option>
            <option value="Startup Ecosystem">Startup Ecosystem</option>
            <option value="Regulatory Updates">Regulatory Updates</option>
            <option value="Geopolitics">Geopolitics</option>
            <option value="General">General</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Cover Image</label>
          <div className="border-2 border-dashed border-white/20 rounded-lg p-6 flex flex-col items-center justify-center bg-black/20">
            {imageUrl ? (
              <div className="relative w-full max-w-md">
                <img src={imageUrl} alt="Cover" className="w-full h-auto rounded-md" />
                <Button 
                  type="button" 
                  variant="destructive" 
                  size="sm" 
                  className="absolute top-2 right-2"
                  onClick={() => setImageUrl('')}
                >
                  Remove
                </Button>
              </div>
            ) : (
              <>
                <ImageIcon className="h-10 w-10 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground mb-4">Upload a cover image via Cloudinary</p>
                <div className="relative">
                  <Input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    disabled={uploadingImage}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <Button type="button" disabled={uploadingImage} variant="secondary">
                    {uploadingImage ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...</> : 'Select Image'}
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Content</label>
          <Textarea name="content" required placeholder="Write the publication content here..." className="min-h-[300px]" />
        </div>

        <div className="space-y-6 pt-6 border-t border-white/10">
          <h2 className="text-xl font-bold">SEO Meta Data</h2>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Meta Title</label>
            <Input name="meta_title" placeholder="SEO Title (defaults to publication title)" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Meta Description</label>
            <Textarea name="meta_description" placeholder="Brief description for search engines" className="h-20" />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Meta Keywords</label>
            <Input name="meta_keywords" placeholder="budget, tax, finance (comma separated)" />
          </div>
        </div>

        <div className="pt-6">
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? 'Publishing...' : 'Publish Publication'}
          </Button>
        </div>
      </form>
    </div>
  )
}
