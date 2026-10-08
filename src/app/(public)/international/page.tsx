
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/global.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <span>{t("intl.breadcrumb")}</span></div>
          <span className="eyebrow">{t("intl.hero_eyebrow")}</span>
          <h1>{t("intl.hero_title")}</h1>
          <p>{t("intl.hero_desc")}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="center measure mx-auto"><span className="eyebrow" style={{ "justifyContent": "center" }}>{t("intl.desks_eyebrow")}</span><h2>{t("intl.desks_title")}</h2>
            <p className="lead">{t("intl.desks_desc")}</p></div>
          <div className="map-grid" style={{ "marginTop": "40px" }}>
            <a className="territory reveal" href="/desks/uae">
              <div className="flagbox">🇦🇪</div>
              <span className="badge badge-local">{t("intl.badge_active")}</span>
              <h3>{t("header.global_dropdown.uae.title")}</h3>
              <p className="t-person">Vishal Tayal</p>
              <span className="link-arrow">{t("intl.explore_desk")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="territory reveal" href="/desks/singapore-malaysia">
              <div className="flagbox">🇸🇬</div>
              <span className="badge badge-local">{t("intl.badge_active")}</span>
              <h3>{t("header.global_dropdown.sg.title")}</h3>
              <p className="t-person">Awen Lee</p>
              <span className="link-arrow">{t("intl.explore_desk")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="territory reveal" href="/desks/mauritius">
              <div className="flagbox">🇲🇺</div>
              <span className="badge badge-local">{t("intl.badge_active")}</span>
              <h3>{t("header.global_dropdown.mu.title")}</h3>
              <p className="t-person">Hasina Bahemia</p>
              <span className="link-arrow">{t("intl.explore_desk")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="territory reveal" href="/desks/united-states">
              <div className="flagbox">🇺🇸</div>
              <span className="badge badge-network">{t("intl.badge_soon")}</span>
              <h3>{t("header.global_dropdown.us.title")}</h3>
              <p className="t-person">Coming soon</p>
              <span className="link-arrow">{t("intl.explore_desk")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a></div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">{t("intl.works_eyebrow")}</span>
              <h2>{t("intl.works_title")}</h2>
              <p>{t("intl.works_desc")}</p>
              <a className="btn btn-primary" href="/services/international-business">{t("intl.works_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
            </div>
            <div>
              <div className="grid" style={{ "gap": "14px" }}>
                <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg></div><div><h4>{t("intl.feat1_title")}</h4><p>{t("intl.feat1_desc")}</p></div></div>
                <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 006 0L10 7M19 7l-2.5 6a3 3 0 006 0L20 7M8 5l4-1 4 1" /></svg></div><div><h4>{t("intl.feat2_title")}</h4><p>{t("intl.feat2_desc")}</p></div></div>
                <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg></div><div><h4>{t("intl.feat3_title")}</h4><p>{t("intl.feat3_desc")}</p></div></div>
                <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg></div><div><h4>{t("intl.feat4_title")}</h4><p>{t("intl.feat4_desc")}</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section"><div className="container"><div className="cta-band">
        <h2>{t("intl.cta_title")}</h2>
        <p>{t("intl.cta_desc")}</p>
        <div className="hero-actions"><a className="btn btn-white" href="/services/international-business">{t("intl.cta_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a><a className="btn btn-light" href="mailto:info@taggroup.in">info@taggroup.in</a></div>
      </div></div></section>
    </>
  );
}
