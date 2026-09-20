'use client'

import * as React from 'react'
import { submitContactForm } from '@/actions/contact.actions'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [result, setResult] = React.useState<{ success?: boolean; error?: string; message?: string } | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    const formData = new FormData(event.currentTarget)
    try {
      const res = await submitContactForm(formData)
      setResult(res)
      if (res.success) {
        (event.target as HTMLFormElement).reset()
      }
    } catch (err) {
      setResult({ success: false, error: 'An unexpected error occurred.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-primary/5 py-20 text-center border-b">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our expert advisory team to discuss how we can accelerate your business growth.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Offices</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">Gurgaon Office (HQ)</h3>
                      <p className="text-muted-foreground">745-P, Sector 15<br/>Gurugram, Haryana 122001, India</p>
                      <p className="mt-2 text-sm"><strong>Gaurav Sharma:</strong> +91-88607-16777<br/>gaurav@tagadvisors.in</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">New Delhi Offices</h3>
                      <p className="text-muted-foreground">FF-104, Pearl Omaxe Tower, NSP, Pitampura, Delhi 110034<br/>206, Mercantile House, 15 K.G. Marg, Delhi-110001</p>
                      <p className="mt-2 text-sm"><strong>Sumit Goyal:</strong> +91-92100-648000</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <MapPin className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg">UAE Office</h3>
                      <p className="text-muted-foreground">Office No. 10, Level 1<br/>Sharjah Media City, Sharjah, UAE</p>
                      <p className="mt-2 text-sm"><strong>Contacts:</strong> +971-585-776-396</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="glass-card shadow-2xl border-white/10">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>Fill out the form below and we will get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Full Name <span className="text-destructive">*</span></label>
                      <Input id="name" name="name" placeholder="John Doe" required className="bg-background/50" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" className="bg-background/50" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                        <Input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" className="bg-background/50" />
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground -mt-4">* Please provide either an Email address or a Phone number.</p>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company (Optional)</label>
                      <Input id="company" name="company" placeholder="Acme Corp" className="bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Your Message <span className="text-destructive">*</span></label>
                      <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required className="bg-background/50" />
                    </div>
                    
                    {result && (
                      <div className={`p-4 rounded-md text-sm ${result.success ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-destructive'}`}>
                        {result.success ? result.message : result.error}
                      </div>
                    )}

                    <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
