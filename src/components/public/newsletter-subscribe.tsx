'use client'

import * as React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2, Mail } from 'lucide-react'
import { subscribeNewsletter } from '@/actions/newsletter.actions'

const CATEGORIES = [
  'Direct Tax', 'Indirect Tax', 'International Tax', 'M&A', 'Startup Ecosystem', 'Regulatory Updates', 'Geopolitics'
]

export function NewsletterSubscribe() {
  const [email, setEmail] = React.useState('')
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [result, setResult] = React.useState<{ success?: boolean; message?: string } | null>(null)

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('email', email)
      formData.append('categories', JSON.stringify(selectedCategories))
      
      const res = await subscribeNewsletter(formData)
      setResult(res)
      if (res.success) {
        setEmail('')
        setSelectedCategories([])
      }
    } catch (error: any) {
      setResult({ success: false, message: error?.message || 'An unexpected error occurred.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="glass-card shadow-xl border-white/10 w-full max-w-2xl mx-auto">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-3xl font-bold">Subscribe to TAG Insights</CardTitle>
        <CardDescription className="text-lg">
          Stay updated with the latest in tax, M&A, startups, and regulatory updates.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubscribe} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="bg-background/50 h-14 text-lg"
            />
            <Button type="submit" disabled={isSubmitting || !email} className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
              {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Subscribe'}
            </Button>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-sm font-medium mb-4 text-muted-foreground">Select your areas of interest:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {CATEGORIES.map(cat => (
                <div key={cat} className="flex items-center space-x-2">
                  <input 
                    type="checkbox"
                    id={`cat-${cat}`} 
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary"
                  />
                  <label 
                    htmlFor={`cat-${cat}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                  >
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {result && (
            <div className={`p-4 rounded-md text-sm text-center ${result.success ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-destructive'}`}>
              {result.message}
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
