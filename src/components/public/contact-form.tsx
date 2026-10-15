'use client';

import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useSearchParams } from 'next/navigation';
import { useI18n } from '@/lib/i18n';

export function ContactForm() {
  const { t } = useI18n();
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
        toast.success(result.message || t('contact.form.success'));
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || t('contact.form.error'));
      }
    } catch (error) {
      console.error(error);
      toast.error(t('contact.form.unexpected_error'));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="grid g-2" style={{ gap: '16px' }}>
        <div><label>{t('contact.form.fullname')} <span className="req">*</span><input type="text" name="name" required disabled={isSubmitting} /></label></div>
        <div><label>{t('contact.form.company')}<input type="text" name="company" disabled={isSubmitting} /></label></div>
        <div><label>{t('contact.form.email')} <span className="req">*</span><input type="email" name="email" required disabled={isSubmitting} /></label></div>
        <div><label>{t('contact.form.phone')}<input type="tel" name="phone" disabled={isSubmitting} /></label></div>
      </div>
      <label style={{ marginTop: '16px', display: 'block' }}>{t('contact.form.area_of_interest')}
        <select name="service" disabled={isSubmitting} value={defaultService} onChange={(e) => setDefaultService(e.target.value)}>
          <option value="">{t('contact.form.select_service')}</option>
          <option value="Tax & Cross-Border Advisory">{t('header.services_dropdown.tax.title')}</option>
          <option value="Global Transfer Pricing">{t('header.services_dropdown.tp.title')}</option>
          <option value="Global Capability Centre">{t('header.services_dropdown.gcc.title')}</option>
          <option value="CFO & Finance Transformation">{t('header.services_dropdown.cfo.title')}</option>
          <option value="Risk, Internal Audit & Controls">{t('header.services_dropdown.risk.title')}</option>
          <option value="Deals, Valuation & Transaction Support">{t('header.services_dropdown.deals.title')}</option>
          <option value="Corporate, Legal, FEMA & Regulatory">{t('header.services_dropdown.corp.title')}</option>
          <option value="India Entry: One-Stop Business Establishment">{t('header.services_dropdown.india.title')}</option>
          <option value="Human Capital & HR Advisory">{t('header.services_dropdown.hr.title')}</option>
          <option value="International Business">{t('header.services_dropdown.intl.title')}</option>
          <option value="India entry / setup">{t('contact.form.services_india_entry')}</option>
          <option value="Other">{t('contact.form.services_other')}</option>
        </select>
      </label>
      <label style={{ marginTop: '16px', display: 'block' }}>{t('contact.form.how_can_we_help')}
        <textarea name="message" rows={5} disabled={isSubmitting}></textarea>
      </label>
      <button className="btn btn-primary" type="submit" style={{ marginTop: '20px', minWidth: '160px', justifyContent: 'center' }} disabled={isSubmitting}>
        {isSubmitting ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             {t('contact.form.sending')}
          </span>
        ) : (
          <>
            {t('contact.form.send_enquiry')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </>
        )}
      </button>
      
      <p style={{ fontSize: '.84rem', color: 'var(--text-muted)', marginTop: '14px' }}>{t('contact.form.confidence')}</p>
    </form>
  );
}
