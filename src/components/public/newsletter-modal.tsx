'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'

export function NewsletterModal() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const newsletters = formData.getAll('newsletter') as string[]
    
    const data = {
      type: 'newsletter',
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      designation: formData.get('designation'),
      newsletters,
      consent: formData.get('consent') === 'yes',
      sourceUrl: window.location.href,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      
      if (res.ok) {
        toast.success(result.message || 'Successfully subscribed to newsletters.')
        ;(e.target as HTMLFormElement).reset()
        // Close modal if desired:
        const modal = document.getElementById('newsletter-modal')
        if (modal) {
          modal.hidden = true
          document.body.classList.remove("modal-open")
        }
      } else {
        toast.error(result.error || 'Failed to subscribe.')
      }
    } catch (error) {
      console.error(error)
      toast.error('An unexpected error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="modal" id="newsletter-modal" hidden>
      <div className="modal-backdrop" data-close></div>
      <div className="modal-card" role="dialog" aria-modal="true" aria-labelledby="nl-title" data-lenis-prevent>
        <button className="modal-x" data-close type="button" aria-label="Close" disabled={isSubmitting}>&times;</button>
        <span className="eyebrow">Newsletters</span>
        <h3 id="nl-title">Subscribe to TAG Group Insights</h3>
        <p className="modal-lead">Sharp, regular reading for decision-makers — across tax, transfer pricing, startups, key rulings, geopolitics and regulatory change. Choose what you'd like to receive.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="grid g-2" style={{ gap: '14px' }}>
            <div><label>Full name <span className="req">*</span><input type="text" name="name" required disabled={isSubmitting} /></label></div>
            <div><label>Email <span className="req">*</span><input type="email" name="email" required disabled={isSubmitting} /></label></div>
            <div><label>Company<input type="text" name="company" disabled={isSubmitting} /></label></div>
            <div><label>Designation<input type="text" name="designation" disabled={isSubmitting} /></label></div>
          </div>
          <fieldset className="nl-choices" disabled={isSubmitting}>
            <legend>Which newsletters?</legend>
            <label className="nl-c"><input type="checkbox" name="newsletter" value="Tax &amp; TP Fortnightly" /><span><strong>Tax &amp; TP Fortnightly</strong><em>Fortnightly</em></span></label>
            <label className="nl-c"><input type="checkbox" name="newsletter" value="Startup Fortnightly" /><span><strong>Startup Fortnightly</strong><em>Fortnightly</em></span></label>
            <label className="nl-c"><input type="checkbox" name="newsletter" value="Case Law Weekly" /><span><strong>Case Law Weekly</strong><em>Weekly</em></span></label>
            <label className="nl-c"><input type="checkbox" name="newsletter" value="The Weekly Brief" /><span><strong>The Weekly Brief</strong><em>Weekly</em></span></label>
          </fieldset>
          <label className="nl-consent"><input type="checkbox" name="consent" value="yes" required disabled={isSubmitting} /> <span>I'd like to receive these newsletters from TAG Group and consent to my details being used for that purpose. I can unsubscribe at any time.</span></label>
          <button className="btn btn-primary" type="submit" disabled={isSubmitting} style={{ marginTop: '18px', width: '100%', justifyContent: 'center' }}>
            {isSubmitting ? 'Subscribing...' : (
              <>
                Subscribe 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </>
            )}
          </button>
          <p className="nl-note">No spam. Unsubscribe any time.</p>
        </form>
      </div>
    </div>
  )
}

