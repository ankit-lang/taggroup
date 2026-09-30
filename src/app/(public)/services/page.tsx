
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/tp.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <span>Services</span></div>
          <span className="eyebrow">Services overview</span>
          <h1>Ten service portfolios, built around real business situations.</h1>
          <p>TAG Group is presented through four principal capabilities — tax and cross-border advisory; CFO, finance transformation and controllership; risk, controls and management consulting; and India entry and international business — supported by a global capability centre, transaction advisory, valuation, legal and regulatory, HR, technology and workforce solutions.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="grid g-3">
            <a className="card svc-card reveal" href="/services/tax-cross-border">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 006 0L10 7M19 7l-2.5 6a3 3 0 006 0L20 7M8 5l4-1 4 1" /></svg></div>
              <span className="kicker">Corporate, international and indirect tax</span>
              <h3>Tax & Cross-Border Advisory</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card flagship reveal" href="/services/global-transfer-pricing">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></svg></div>
              <span className="kicker">Documentation delivered from India</span>
              <h3>Global Transfer Pricing</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/global-capability-centre">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5" /></svg></div>
              <span className="kicker">TP & Finance/Accounting delivery hub</span>
              <h3>Global Capability Centre</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/cfo-finance-transformation">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg></div>
              <span className="kicker">Virtual CFO, controllership, reporting</span>
              <h3>CFO & Finance Transformation</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/risk-internal-audit">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg></div>
              <span className="kicker">Internal audit, ICFR, SOX, forensics</span>
              <h3>Risk, Internal Audit & Controls</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/deals-valuation">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 11l3 3 5-6M4 7h16v12H4zM9 3h6v4H9z" /></svg></div>
              <span className="kicker">M&A, due diligence, valuation</span>
              <h3>Deals, Valuation & Transaction Support</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/corporate-legal-fema">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 4l6 6-3 3-6-6zM11 7L4 14l3 3 7-7M3 21h9" /></svg></div>
              <span className="kicker">Entity, secretarial, FEMA, disputes</span>
              <h3>Corporate, Legal, FEMA & Regulatory</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/india-entry">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V4M4 4h13l-2 4 2 4H4" /></svg></div>
              <span className="kicker">Setup, finance, HR, IT, premises</span>
              <h3>India Entry: One-Stop Business Establishment</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/human-capital-hr">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.2A3 3 0 0118 12M20 20a5 5 0 00-3.5-4.8" /></svg></div>
              <span className="kicker">Recruitment, L&D, HR operations</span>
              <h3>Human Capital & HR Advisory</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a>
            <a className="card svc-card reveal" href="/services/international-business">
              <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></svg></div>
              <span className="kicker">Outbound expansion & cross-border</span>
              <h3>International Business</h3>
              <span className="link-arrow">Explore <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </a></div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="center measure mx-auto"><span className="eyebrow" style={{ "justifyContent": "center" }}>How our pages work</span><h2>Depth, not generic claims</h2>
            <p className="lead">Each service page is structured the same way — so you can quickly see whether we fit your situation, and reach the concerned partner directly.</p></div>
          <div className="grid g-3" style={{ "marginTop": "44px" }}>
            <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></svg></div><div><h4>Proposition &amp; triggers</h4><p>What the service does and the situations that create the need.</p></div></div>
            <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5" /></svg></div><div><h4>Scope &amp; approach</h4><p>Detailed scope of assistance and our engagement phases.</p></div></div>
            <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.2A3 3 0 0118 12M20 20a5 5 0 00-3.5-4.8" /></svg></div><div><h4>The partner to call</h4><p>Every page names the concerned partner, with a direct line to them.</p></div></div>
          </div>
        </div>
      </section>
      <section className="section"><div className="container"><div className="cta-band">
        <h2>Not sure which portfolio fits?</h2>
        <p>Describe your situation and we'll point you to the right capability and team.</p>
        <div className="hero-actions"><a className="btn btn-white" href="mailto:info@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> info@taggroup.in</a></div>
      </div></div></section>
    </>
  );
}
