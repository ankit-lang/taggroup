'use client'

import React, { useState } from 'react'
import { toast } from 'sonner'

import { useI18n } from '@/lib/i18n'

export function NewsletterModal() {
  const { t } = useI18n()
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
        <span className="eyebrow">{t('newsletter.title')}</span>
        <h3 id="nl-title">{t('newsletter.heading')}</h3>
        <p className="modal-lead">{t('newsletter.desc')}</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="grid g-2" style={{ gap: '14px' }}>
            <div><label>{t('newsletter.fields.name')} <span className="req">*</span><input type="text" name="name" required disabled={isSubmitting} /></label></div>
            <div><label>{t('newsletter.fields.email')} <span className="req">*</span><input type="email" name="email" required disabled={isSubmitting} /></label></div>
            <div><label>{t('newsletter.fields.company')}<input type="text" name="company" disabled={isSubmitting} /></label></div>
            <div><label>{t('newsletter.fields.designation')}<input type="text" name="designation" disabled={isSubmitting} /></label></div>
          </div>
          <fieldset className="nl-choices" disabled={isSubmitting}>
            <legend>{t('newsletter.which')}</legend>
            <label className="nl-c"><input type="checkbox" name="newsletter" value="Tax &amp; TP Fortnightly" /><span><strong>{t('newsletter.choices.tax')}</strong><em>{t('newsletter.choices.tax_f')}</em></span></label>
            <label className="nl-c"><input type="checkbox" name="newsletter" value="Startup Fortnightly" /><span><strong>{t('newsletter.choices.startup')}</strong><em>{t('newsletter.choices.startup_f')}</em></span></label>
            <label className="nl-c"><input type="checkbox" name="newsletter" value="Case Law Weekly" /><span><strong>{t('newsletter.choices.case')}</strong><em>{t('newsletter.choices.case_f')}</em></span></label>
            <label className="nl-c"><input type="checkbox" name="newsletter" value="The Weekly Brief" /><span><strong>{t('newsletter.choices.brief')}</strong><em>{t('newsletter.choices.brief_f')}</em></span></label>
          </fieldset>
          <label className="nl-consent"><input type="checkbox" name="consent" value="yes" required disabled={isSubmitting} /> <span>{t('newsletter.consent')}</span></label>
          <button className="btn btn-primary" type="submit" disabled={isSubmitting} style={{ marginTop: '18px', width: '100%', justifyContent: 'center' }}>
            {isSubmitting ? t('newsletter.subscribing') : (
              <>
                {t('newsletter.subscribe')} 
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </>
            )}
          </button>
          <p className="nl-note">{t('newsletter.note')}</p>
        </form>
      </div>
    </div>
  )
}

