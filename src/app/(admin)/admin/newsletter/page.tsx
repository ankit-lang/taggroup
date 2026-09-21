'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RichTextEditor } from '@/components/admin/RichTextEditor'
import { dispatchNewsletter } from '@/actions/newsletter.actions'
import { Loader2, Send, Image as ImageIcon } from 'lucide-react'

export default function AdminNewsletter() {
  const [subject, setSubject] = React.useState('')
  const [content, setContent] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [result, setResult] = React.useState<{ success?: boolean, error?: string, message?: string } | null>(null)
  const [imageUrl, setImageUrl] = React.useState('')
  const [uploadingImage, setUploadingImage] = React.useState(false)

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

  async function handleDispatch(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const formData = new FormData()
    formData.append('subject', subject)
    formData.append('content', content)
    if (imageUrl) formData.append('image_url', imageUrl)

    const res = await dispatchNewsletter(formData)
    setResult(res)
    setIsSubmitting(false)

    if (res.success) {
      setSubject('')
      setContent('')
      setImageUrl('')
    }
  }

  return (
    <div className="space-y-6 max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight">Newsletter Dispatch</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Composer */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Draft New Campaign</CardTitle>
              <CardDescription>Compose an email to send to all active subscribers.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleDispatch} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject Line</label>
                  <Input 
                    value={subject} 
                    onChange={e => setSubject(e.target.value)} 
                    placeholder="e.g. Q3 Financial Insights from TAG Advisors" 
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Header Image</label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-6 flex flex-col items-center justify-center bg-black/20">
                    {imageUrl ? (
                      <div className="relative w-full max-w-md">
                        <img src={imageUrl} alt="Header" className="w-full h-auto rounded-md" />
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
                        <p className="text-sm text-muted-foreground mb-4">Upload a header image via Cloudinary</p>
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
                  <label className="text-sm font-medium">Email Content</label>
                  <RichTextEditor content={content} onChange={setContent} />
                </div>

                {result && (
                  <div className={`p-4 rounded-md text-sm ${result.success ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-destructive'}`}>
                    {result.success ? result.message : result.error}
                  </div>
                )}

                <Button type="submit" disabled={isSubmitting || !subject || !content} className="w-full md:w-auto">
                  {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                  Dispatch to Subscribers
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Info/Stats sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscriber Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary mb-2">
                {/* Note: This would normally be fetched via Server Component or API route. Keeping static visually for now as per instructions */}
                Active list loaded
              </div>
              <p className="text-sm text-muted-foreground">
                All emails will be dispatched via the configured Nodemailer SMTP service. 
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
