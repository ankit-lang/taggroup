'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RichTextEditor } from '@/components/admin/RichTextEditor'
import { dispatchNewsletter, getSubscriberStats } from '@/actions/newsletter.actions'
import { Loader2, Send, Image as ImageIcon, Users } from 'lucide-react'

export default function AdminNewsletter() {
  const [subject, setSubject] = React.useState('')
  const [content, setContent] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [result, setResult] = React.useState<{ success?: boolean, error?: string, message?: string } | null>(null)
  const [imageUrl, setImageUrl] = React.useState('')
  const [uploadingImage, setUploadingImage] = React.useState(false)
  const [stats, setStats] = React.useState<{ count: number, recent: any[] } | null>(null)

  React.useEffect(() => {
    async function loadStats() {
      const data = await getSubscriberStats()
      setStats(data)
    }
    loadStats()
  }, [])

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
    <div className="space-y-6 max-w-5xl text-slate-900">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">Newsletter Dispatch</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Composer */}
        <div className="md:col-span-2">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100 pb-4">
              <CardTitle className="text-xl text-slate-900">Draft New Campaign</CardTitle>
              <CardDescription className="text-slate-500">Compose an email to send to all active subscribers.</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleDispatch} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Subject Line</label>
                  <Input 
                    value={subject} 
                    onChange={e => setSubject(e.target.value)} 
                    placeholder="e.g. Q3 Financial Insights from TAG Advisors" 
                    required
                    className="bg-white border-slate-200 text-slate-900 shadow-sm focus-visible:ring-amber-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Header Image</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center bg-slate-50 transition-colors hover:bg-slate-100">
                    {imageUrl ? (
                      <div className="relative w-full max-w-md shadow-sm border border-slate-200 rounded-md overflow-hidden bg-white">
                        <img src={imageUrl} alt="Header" className="w-full h-auto" />
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
                        <p className="text-sm text-slate-500 mb-4 font-medium">Upload a header image via Cloudinary</p>
                        <div className="relative">
                          <Input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageUpload} 
                            disabled={uploadingImage}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                          <Button type="button" disabled={uploadingImage} variant="outline" className="bg-white border-slate-200 text-slate-700 hover:bg-slate-50 shadow-sm">
                            {uploadingImage ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Uploading...</> : 'Select Image'}
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Content</label>
                  <RichTextEditor content={content} onChange={setContent} />
                </div>

                {result && (
                  <div className={`p-4 rounded-md text-sm border shadow-sm ${result.success ? 'bg-green-50 border-green-200 text-green-700' : 'bg-rose-50 border-rose-200 text-rose-600'}`}>
                    {result.success ? result.message : result.error}
                  </div>
                )}

                <div className="pt-4 border-t border-slate-100">
                  <Button type="submit" disabled={isSubmitting || !subject || !content} className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-white shadow-sm">
                    {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
                    Dispatch to Subscribers
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Info/Stats sidebar */}
        <div className="space-y-6">
          <Card className="bg-white border-slate-200 shadow-sm">
            <CardHeader className="border-b border-slate-100 pb-4">
              <CardTitle className="text-lg text-slate-900 flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-500" /> Audience
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              {stats === null ? (
                <div className="flex items-center text-slate-500"><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading stats...</div>
              ) : (
                <>
                  <div className="text-4xl font-bold text-slate-900 mb-1">
                    {stats.count.toLocaleString()}
                  </div>
                  <div className="text-sm font-medium text-amber-600 mb-6 uppercase tracking-wider">
                    Active Subscribers
                  </div>
                  
                  {stats.recent.length > 0 && (
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Recent Signups</p>
                      <ul className="space-y-2">
                        {stats.recent.map((sub, i) => (
                          <li key={i} className="text-sm text-slate-700 flex justify-between items-center bg-slate-50 px-3 py-2 rounded-md border border-slate-100">
                            <span className="truncate mr-2 max-w-[150px]" title={sub.email}>{sub.email}</span>
                            <span className="text-xs text-slate-400 whitespace-nowrap">{new Date(sub.created_at).toLocaleDateString()}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <p className="text-xs text-slate-500 leading-relaxed mt-6 bg-amber-50 p-3 rounded-md border border-amber-100">
                    Your campaign will be dynamically dispatched to all {stats.count} subscribers via Nodemailer.
                  </p>
                </>
              )}
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  )
}
