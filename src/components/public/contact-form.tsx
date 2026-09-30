'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useSearchParams } from 'next/navigation';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const [defaultService, setDefaultService] = useState('');

  useEffect(() => {
    const s = searchParams.get('service');
    if (s) {
      // Decode and set as default if it matches any option, otherwise leave empty
      setDefaultService(decodeURIComponent(s));
    }
  }, [searchParams]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      type: 'enquiry',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('message'),
      sourceUrl: window.location.href,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      
      if (res.ok) {
        toast.success(result.message || 'Your inquiry has been received.');
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || 'Failed to submit inquiry.');
      }
    } catch (error) {
      console.error(error);
      toast.error('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid g-2" style={{ gap: '16px' }}>
        <div><label>Full name <span className="req">*</span><input type="text" name="name" required disabled={isSubmitting} /></label></div>
        <div><label>Company<input type="text" name="company" disabled={isSubmitting} /></label></div>
        <div><label>Email <span className="req">*</span><input type="email" name="email" required disabled={isSubmitting} /></label></div>
        <div><label>Phone<input type="tel" name="phone" disabled={isSubmitting} /></label></div>
      </div>
      <label style={{ marginTop: '16px', display: 'block' }}>Area of interest
        <select name="service" disabled={isSubmitting} value={defaultService} onChange={(e) => setDefaultService(e.target.value)}>
          <option value="">Select a service…</option>
          <option value="Tax & Cross-Border Advisory">Tax & Cross-Border Advisory</option>
          <option value="Global Transfer Pricing">Global Transfer Pricing</option>
          <option value="Global Capability Centre">Global Capability Centre</option>
          <option value="CFO & Finance Transformation">CFO & Finance Transformation</option>
          <option value="Risk, Internal Audit & Controls">Risk, Internal Audit & Controls</option>
          <option value="Deals, Valuation & Transaction Support">Deals, Valuation & Transaction Support</option>
          <option value="Corporate, Legal, FEMA & Regulatory">Corporate, Legal, FEMA & Regulatory</option>
          <option value="India Entry: One-Stop Business Establishment">India Entry: One-Stop Business Establishment</option>
          <option value="Human Capital & HR Advisory">Human Capital & HR Advisory</option>
          <option value="International Business">International Business</option>
          <option value="India entry / setup">India entry / setup</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label style={{ marginTop: '16px', display: 'block' }}>How can we help?
        <textarea name="message" rows={5} disabled={isSubmitting}></textarea>
      </label>
      <button className="btn btn-primary" type="submit" style={{ marginTop: '20px', minWidth: '160px', justifyContent: 'center' }} disabled={isSubmitting}>
        {isSubmitting ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             Sending...
          </span>
        ) : (
          <>
            Send enquiry <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </>
        )}
      </button>
      
      <p style={{ fontSize: '.84rem', color: 'var(--text-muted)', marginTop: '14px' }}>We treat every enquiry in confidence and usually respond within one business day.</p>
    </form>
  );
}
