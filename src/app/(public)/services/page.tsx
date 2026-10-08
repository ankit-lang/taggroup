
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/tp.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <span>{t("header.services")}</span></div>
          <span className="eyebrow">{t("services.hero_eyebrow")}</span>
          <h1>{t("services.hero_title")}</h1>
          <p>{t("services.hero_desc")}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid g-3">
            <a className="card svc-card reveal" href="/services/tax-cross-border">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 006 0L10 7M19 7l-2.5 6a3 3 0 006 0L20 7M8 5l4-1 4 1" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.tax.desc")}</span>
              <h3>{t("header.services_dropdown.tax.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card flagship reveal" href="/services/global-transfer-pricing">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.tp.desc")}</span>
              <h3>{t("header.services_dropdown.tp.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/global-capability-centre">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.gcc.desc")}</span>
              <h3>{t("header.services_dropdown.gcc.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/cfo-finance-transformation">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.cfo.desc")}</span>
              <h3>{t("header.services_dropdown.cfo.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/risk-internal-audit">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.risk.desc")}</span>
              <h3>{t("header.services_dropdown.risk.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/deals-valuation">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 11l3 3 5-6M4 7h16v12H4zM9 3h6v4H9z" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.deals.desc")}</span>
              <h3>{t("header.services_dropdown.deals.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/corporate-legal-fema">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4l6 6-3 3-6-6zM11 7L4 14l3 3 7-7M3 21h9" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.corp.desc")}</span>
              <h3>{t("header.services_dropdown.corp.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/india-entry">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V4M4 4h13l-2 4 2 4H4" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.india.desc")}</span>
              <h3>{t("header.services_dropdown.india.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/human-capital-hr">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.2A3 3 0 0118 12M20 20a5 5 0 00-3.5-4.8" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.hr.desc")}</span>
              <h3>{t("header.services_dropdown.hr.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/international-business">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg></div>
              <span className="kicker">{t("header.services_dropdown.intl.desc")}</span>
              <h3>{t("header.services_dropdown.intl.title")}</h3>
              <span className="link-arrow">{t("services.explore")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a></div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="center measure mx-auto"><span className="eyebrow" style={{ "justifyContent": "center" }}>{t("services.work_eyebrow")}</span><h2>{t("services.work_title")}</h2>
            <p className="lead">{t("services.work_desc")}</p></div>
          <div className="grid g-3" style={{ "marginTop": "44px" }}>
            <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></svg></div><div><h4>{t("services.feat1_title")}</h4><p>{t("services.feat1_desc")}</p></div></div>
            <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5" /></svg></div><div><h4>{t("services.feat2_title")}</h4><p>{t("services.feat2_desc")}</p></div></div>
            <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.2A3 3 0 0118 12M20 20a5 5 0 00-3.5-4.8" /></svg></div><div><h4>{t("services.feat3_title")}</h4><p>{t("services.feat3_desc")}</p></div></div>
          </div>
        </div>
      </section>
      <section className="section"><div className="container"><div className="cta-band">
        <h2>{t("services.cta_title")}</h2>
        <p>{t("services.cta_desc")}</p>
        <div className="hero-actions"><a className="btn btn-white" href="mailto:info@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> info@taggroup.in</a></div>
      </div></div></section>
    </>
  );
}
