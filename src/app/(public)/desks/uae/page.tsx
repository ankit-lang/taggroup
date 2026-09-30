
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/global.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/international">International Desk</a> / <span>UAE Desk</span></div>
    <span className="eyebrow">India ↔ UAE</span>
    <h1>🇦🇪 UAE Desk</h1>
    <p>TAG Group's UAE Desk is your bridge across the India–UAE corridor. Through our local presence with Taxepolis International FZCO in Sharjah, we help Indian businesses establish and operate in the UAE, and UAE-based groups engage with India — with joined-up tax, structuring and compliance on both sides.</p>
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
          <a className="pmini" href="/people/vishal"><span className="pmini-av">VT</span><span className="pmini-info"><strong>Vishal Tayal</strong><span>Partner — UAE Desk</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <a className="btn btn-primary" href="/contact?service=UAE%20Desk" style={{"width":"100%","justifyContent":"center","marginTop":"12px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Enquire</a>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#why">Why this corridor</a><a href="#services">How we help</a></nav>
      <div>
        <div style={{"marginBottom":"34px"}}><figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/city-uae.svg')"}}><img src="/assets/photos/desks/uae.jpg" alt="UAE Desk — market view" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>UAE Desk</strong><span>India ↔ UAE</span></figcaption></figure></div>
        <section className="svc-block" id="why">
          <h2>Why the UAE corridor</h2>
          <ul className="check-list"><li>One of the world's most active trade &amp; investment corridors</li><li>0% / low-tax regimes, free zones and a fast-evolving Corporate Tax &amp; VAT landscape</li><li>A natural hub for holding, treasury and regional headquarters</li><li>Large Indian diaspora and business community</li></ul>
        </section>
        <section className="svc-block" id="services">
          <h2>How the desk helps</h2>
          <div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Entry &amp; structuring</h4><ul className="check-list two"><li>UAE mainland &amp; free-zone entity setup</li><li>Holding, treasury &amp; regional-HQ structuring</li><li>India–UAE cross-border transaction structuring</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Tax</h4><ul className="check-list two"><li>UAE VAT advisory &amp; implementation</li><li>UAE Corporate Tax readiness</li><li>India GST for India–UAE businesses</li><li>Withholding &amp; treaty positions</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Compliance &amp; operations</h4><ul className="check-list two"><li>Accounting, bookkeeping &amp; management reporting</li><li>Payroll &amp; employment coordination</li><li>Banking &amp; regulatory coordination</li><li>Ongoing compliance calendars</li></ul></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Explore the UAE Desk</h2>
            <p>Tell us your plans for this corridor and we'll map the right structure, tax position and setup.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="/contact?service=UAE%20Desk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Enquire</a>
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
