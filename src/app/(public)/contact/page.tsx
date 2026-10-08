
"use client";
import React from 'react';
import { ContactForm } from '@/components/public/contact-form';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/global.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('contact_page.home')}</a> / <span>{t('header.contact')}</span></div>
          <span className="eyebrow">{t('contact.title')}</span>
          <h1>{t('contact.subtitle')}</h1>
          <p>{t('contact_page.hero_desc')}<a href="mailto:info@taggroup.in" style={{ "color": "var(--emerald-300)" }}>info@taggroup.in</a>{t('contact_page.hero_desc2')}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="split top">
            <div>
              <span className="eyebrow">{t('contact_page.enquiry_kicker')}</span>
              <h2>{t('contact_page.enquiry_title')}</h2>
              <p className="lead" style={{ "color": "var(--charcoal-700)", "marginBottom": "26px" }}>{t('contact_page.enquiry_desc')}<a href="mailto:info@taggroup.in" style={{ "color": "var(--accent)" }}>info@taggroup.in</a>.</p>
              <React.Suspense fallback={<div>{t('contact_page.loading')}</div>}>
                <ContactForm />
              </React.Suspense>
            </div>
            <div>
              <span className="eyebrow">{t('contact_page.offices_kicker')}</span>
              <h2>{t('contact_page.offices_title')}</h2>
              <div style={{ "marginTop": "20px" }}><figure className="photo r169 " style={{ "backgroundImage": "url('/assets/img/plates/office.svg')" }}><img src="/assets/photos/contact-office.jpg" alt="TAG Group corporate office, Gurgaon" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t('contact_page.corp_office')}</strong><span>{t('contact_page.corp_desc')}</span></figcaption></figure></div>
              <div className="office-list">
                <div className="office-card"><span className="oc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span><div><h4>{t('footer_extended.offices.corporate')} <br/> <em>{t('contact_page.corp_office')}</em></h4><p>{t("footer_extended.offices.addr_corporate")}</p></div></div>
                <div className="office-card"><span className="oc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span><div><h4>{t('footer_extended.offices.head')} <br/> <em>{t('contact_page.head_office')}</em></h4><p>{t('footer_extended.offices.addr_head')}</p></div></div>
                <div className="office-card"><span className="oc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span><div><h4>{t('footer_extended.offices.delhi')}</h4><p>{t('footer_extended.offices.addr_delhi')}</p></div></div>
                <div className="office-card"><span className="oc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span><div><h4>{t('footer_extended.offices.uae')}</h4><p>{t('footer_extended.offices.addr_uae')}</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="center measure mx-auto"><span className="eyebrow" style={{ "justifyContent": "center" }}>{t('contact_page.key_contacts')}</span><h2>{t('contact_page.speak')}</h2></div>
          <div className="grid g-3" style={{ "marginTop": "40px" }}>
            <div className="card"><span className="kicker" style={{ "color": "var(--accent)", "fontSize": ".72rem", "letterSpacing": ".14em", "textTransform": "uppercase", "fontWeight": "650" }}>{t('contact_page.managing_partner')}</span><h3 style={{ "marginTop": "8px" }}>{t('footer_extended.people.gaurav.name')}</h3><p>{t('footer_extended.people.gaurav.title')}</p><p style={{ "fontSize": ".92rem" }}><a href="mailto:gaurav@taggroup.in" style={{ "color": "var(--accent)" }}>gaurav@taggroup.in</a><br />+91 88607 16777</p><a className="link-arrow" href="/people/gaurav" style={{ "fontSize": ".88rem" }}>{t('contact_page.full_profile')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
            <div className="card"><span className="kicker" style={{ "color": "var(--accent)", "fontSize": ".72rem", "letterSpacing": ".14em", "textTransform": "uppercase", "fontWeight": "650" }}>{t('contact_page.hr_partner')}</span><h3 style={{ "marginTop": "8px" }}>{t('footer_extended.people.ishita.name')}</h3><p>{t('footer_extended.people.ishita.title')}</p><p style={{ "fontSize": ".92rem" }}><a href="mailto:ishita@taggroup.in" style={{ "color": "var(--accent)" }}>ishita@taggroup.in</a></p><a className="link-arrow" href="/people/ishita" style={{ "fontSize": ".88rem" }}>{t('contact_page.full_profile')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
            <div className="card"><span className="kicker" style={{ "color": "var(--accent)", "fontSize": ".72rem", "letterSpacing": ".14em", "textTransform": "uppercase", "fontWeight": "650" }}>{t('contact_page.new_biz')}</span><h3 style={{ "marginTop": "8px" }}>{t('contact_page.general_enquiries')}</h3><p>{t('contact_page.new_biz_desc')}</p><p style={{ "fontSize": ".92rem" }}><a href="mailto:info@taggroup.in" style={{ "color": "var(--accent)" }}>info@taggroup.in</a></p><a className="link-arrow" href="/leadership" style={{ "fontSize": ".88rem" }}>{t('contact_page.see_all')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
          </div>
        </div>
      </section>
    </>
  );
}
