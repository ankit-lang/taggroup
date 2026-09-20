'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RichTextEditor } from '@/components/admin/RichTextEditor'
import { dispatchNewsletter } from '@/actions/newsletter.actions'
import { Loader2, Send } from 'lucide-react'

export default function AdminNewsletter() {
  const [subject, setSubject] = React.useState('')
  const [content, setContent] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [result, setResult] = React.useState<{ success?: boolean, error?: string, message?: string } | null>(null)

  async function handleDispatch(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const formData = new FormData()
    formData.append('subject', subject)
    formData.append('content', content)

    const res = await dispatchNewsletter(formData)
    setResult(res)
    setIsSubmitting(false)

    if (res.success) {
      setSubject('')
      setContent('')
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
