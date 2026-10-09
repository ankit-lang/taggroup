
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/global.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t("breadcrumb.home")}</a> / <a href="/international">{t("intl.breadcrumb")}</a> / <span>{t("desks.uae.title_short")}</span></div>
    <span className="eyebrow">{t("desks.uae.eyebrow")}</span>
    <h1>{t("desks.uae.title")}</h1>
    <p>{t("desks.uae.hero_desc")}</p>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t("desks.uae.nav_page")}</h5>
        <a href="#why">{t("desks.uae.nav_why")}</a>
        <a href="#services">{t("desks.uae.nav_services")}</a>
        
        <div className="side-card">
          <h5>{t("desks.uae.desk_lead")}</h5>
          <a className="pmini" href="/people/vishal"><span className="pmini-av">VT</span><span className="pmini-info"><strong>Vishal Tayal</strong><span>{t("desks.uae.partner_title")}</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <a className="btn btn-primary" href="/contact?service=UAE%20Desk" style={{"width":"100%","justifyContent":"center","marginTop":"12px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>{t("desks.uae.btn_enquire")}</a>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#why">{t("desks.uae.nav_why")}</a><a href="#services">{t("desks.uae.nav_services")}</a></nav>
      <div>
        <div style={{"marginBottom":"34px"}}><figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/city-uae.svg')"}}><img src="/assets/photos/desks/uae.jpg" alt="UAE Desk — market view" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t("desks.uae.title_short")}</strong><span>{t("desks.uae.eyebrow")}</span></figcaption></figure></div>
        <section className="svc-block" id="why">
          <h2>{t("desks.uae.why_title")}</h2>
          <ul className="check-list"><li>{t("desks.uae.why_l1")}</li><li>{t("desks.uae.why_l2")}</li><li>{t("desks.uae.why_l3")}</li><li>{t("desks.uae.why_l4")}</li></ul>
        </section>
        <section className="svc-block" id="services">
          <h2>{t("desks.uae.services_title")}</h2>
          <div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.uae.svc1_title")}</h4><ul className="check-list two"><li>{t("desks.uae.svc1_l1")}</li><li>{t("desks.uae.svc1_l2")}</li><li>{t("desks.uae.svc1_l3")}</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.uae.svc2_title")}</h4><ul className="check-list two"><li>{t("desks.uae.svc2_l1")}</li><li>{t("desks.uae.svc2_l2")}</li><li>{t("desks.uae.svc2_l3")}</li><li>{t("desks.uae.svc2_l4")}</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.uae.svc3_title")}</h4><ul className="check-list two"><li>{t("desks.uae.svc3_l1")}</li><li>{t("desks.uae.svc3_l2")}</li><li>{t("desks.uae.svc3_l3")}</li><li>{t("desks.uae.svc3_l4")}</li></ul></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t("desks.uae.cta_title")}</h2>
            <p>{t("desks.uae.cta_desc")}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="/contact?service=UAE%20Desk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>{t("desks.uae.btn_enquire")}</a>
              <a className="btn btn-light" href="/international">{t("desks.uae.cta_btn_all")}</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
