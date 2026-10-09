
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/global.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">{t("breadcrumb.home")}</a> / <a href="/international">{t("intl.breadcrumb")}</a> / <span>{t("desks.us.title_short")}</span></div>
    <span className="eyebrow">{t("desks.us.eyebrow")}</span>
    <h1>{t("desks.us.title")}<span className="badge badge-network" style={{"marginLeft":"8px"}}>{t("desks.us.badge_coming_soon")}</span></h1>
    <p>{t("desks.us.hero_desc")}</p>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>{t("desks.us.nav_page")}</h5>
        <a href="#why">{t("desks.us.nav_why")}</a>
        <a href="#services">{t("desks.us.nav_services")}</a>
        
        <div className="side-card">
          <h5>{t("desks.us.desk_lead")}</h5>
          <p className="lead-note">{t("desks.us.lead_note")}</p>
          <a className="btn btn-primary" href="/contact?service=US%20Desk" style={{"width":"100%","justifyContent":"center"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t("desks.us.btn_enquire")}</a>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#why">{t("desks.us.nav_why")}</a><a href="#services">{t("desks.us.nav_services")}</a></nav>
      <div>
        <div style={{"marginBottom":"34px"}}><figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/city-us.svg')"}}><img src="/assets/photos/desks/united-states.jpg" alt="US Desk — market view" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t("desks.us.title_short")}</strong><span>{t("desks.us.eyebrow")}</span></figcaption></figure></div>
        <section className="svc-block" id="why">
          <h2>{t("desks.us.why_title")}</h2>
          <ul className="check-list"><li>{t("desks.us.why_l1")}</li><li>{t("desks.us.why_l2")}</li><li>{t("desks.us.why_l3")}</li></ul>
        </section>
        <section className="svc-block" id="services">
          <h2>{t("desks.us.services_title")}</h2>
          <div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.us.svc1_title")}</h4><ul className="check-list two"><li>{t("desks.us.svc1_l1")}</li><li>{t("desks.us.svc1_l2")}</li><li>{t("desks.us.svc1_l3")}</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>{t("desks.us.svc2_title")}</h4><ul className="check-list two"><li>{t("desks.us.svc2_l1")}</li><li>{t("desks.us.svc2_l2")}</li><li>{t("desks.us.svc2_l3")}</li></ul></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>{t("desks.us.cta_title")}</h2>
            <p>{t("desks.us.cta_desc")}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="/contact?service=US%20Desk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t("desks.us.btn_enquire")}</a>
              <a className="btn btn-light" href="/international">{t("desks.us.cta_btn_all")}</a>
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
