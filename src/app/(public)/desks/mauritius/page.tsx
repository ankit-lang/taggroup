
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/global.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/international">International Desk</a> / <span>Mauritius Desk</span></div>
    <span className="eyebrow">India ↔ Mauritius</span>
    <h1>🇲🇺 Mauritius Desk</h1>
    <p>TAG Group's Mauritius Desk, delivered with Fideco Global Business Services, supports company establishment, administration and governance in a leading international financial centre — with substance, AML/CFT and accounting handled by an experienced on-ground team led by Hasina Bahemia (CAMS).</p>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>On this page</h5>
        <a href="#why">Why this corridor</a>
        <a href="#services">How we help</a>
        
        <div className="side-card">
          <h5>Desk lead</h5>
          <a className="pmini" href="/people/hasina"><span className="pmini-av">HB</span><span className="pmini-info"><strong>Hasina Bahemia</strong><span>International Desk — Mauritius</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <a className="btn btn-primary" href="/contact?service=Mauritius%20Desk" style={{"width":"100%","justifyContent":"center","marginTop":"12px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Enquire</a>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#why">Why this corridor</a><a href="#services">How we help</a></nav>
      <div>
        <div style={{"marginBottom":"34px"}}><figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/city-mauritius.svg')"}}><img src="/assets/photos/desks/mauritius.jpg" alt="Mauritius Desk — market view" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>Mauritius Desk</strong><span>India ↔ Mauritius</span></figcaption></figure></div>
        <section className="svc-block" id="why">
          <h2>Why the Mauritius corridor</h2>
          <ul className="check-list"><li>A well-regulated international financial centre</li><li>Established route for structuring investment into Africa &amp; Asia</li><li>Strong governance, substance and administration ecosystem</li><li>Extensive double-taxation treaty network</li></ul>
        </section>
        <section className="svc-block" id="services">
          <h2>How the desk helps</h2>
          <div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Establishment &amp; administration</h4><ul className="check-list two"><li>Global Business Company (GBC) setup</li><li>Corporate administration &amp; company secretarial</li><li>Substance &amp; governance support</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Compliance</h4><ul className="check-list two"><li>AML/CFT compliance &amp; client onboarding</li><li>Accounting &amp; tax coordination</li><li>Regulatory filings &amp; ongoing administration</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Coordination</h4><ul className="check-list two"><li>Cross-border structuring coordination</li><li>Business-related relocation assistance</li><li>Coordination with India delivery</li></ul></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Explore the Mauritius Desk</h2>
            <p>Tell us your plans for this corridor and we'll map the right structure, tax position and setup.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="/contact?service=Mauritius%20Desk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Enquire</a>
              <a className="btn btn-light" href="/international">All desks</a>
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
