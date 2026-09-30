
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/global.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/international">International Desk</a> / <span>Singapore & Malaysia Desk</span></div>
    <span className="eyebrow">India ↔ Singapore &amp; Malaysia</span>
    <h1>🇸🇬 Singapore & Malaysia Desk</h1>
    <p>TAG Group's Singapore &amp; Malaysia Desk, delivered with S&amp;A Consulting Singapore, helps businesses set up and run entities across two of Asia's most important gateways — with accounting, corporate secretarial, payroll and regulatory coordination handled end to end.</p>
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
          <a className="pmini" href="/people/awen"><span className="pmini-av">AL</span><span className="pmini-info"><strong>Awen Lee</strong><span>International Desk — Singapore</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
          <a className="btn btn-primary" href="/contact?service=Singapore%20&%20Malaysia%20Desk" style={{"width":"100%","justifyContent":"center","marginTop":"12px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Enquire</a>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#why">Why this corridor</a><a href="#services">How we help</a></nav>
      <div>
        <div style={{"marginBottom":"34px"}}><figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/city-singapore.svg')"}}><img src="/assets/photos/desks/singapore-malaysia.jpg" alt="Singapore & Malaysia Desk — market view" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>Singapore & Malaysia Desk</strong><span>India ↔ Singapore &amp; Malaysia</span></figcaption></figure></div>
        <section className="svc-block" id="why">
          <h2>Why the Singapore & Malaysia corridor</h2>
          <ul className="check-list"><li>Singapore: Asia's premier holding, fund and treasury hub</li><li>Malaysia: a competitive base for operations and shared services</li><li>Robust legal systems and extensive treaty networks</li><li>Ideal for outbound Indian expansion into ASEAN</li></ul>
        </section>
        <section className="svc-block" id="services">
          <h2>How the desk helps</h2>
          <div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Entry &amp; corporate</h4><ul className="check-list two"><li>Company incorporation &amp; corporate secretarial</li><li>Holding &amp; fund-structure setup</li><li>Nominee, registered-office &amp; governance support</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Finance &amp; tax</h4><ul className="check-list two"><li>Accounting, compliance &amp; management accounts</li><li>GST / SST and corporate tax</li><li>Payroll and employment administration</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Regulatory coordination</h4><ul className="check-list two"><li>ACRA, IRAS, MOM and CPF Board (Singapore)</li><li>SSM and local authorities (Malaysia)</li><li>Cross-border coordination with India</li></ul></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Explore the Singapore & Malaysia Desk</h2>
            <p>Tell us your plans for this corridor and we'll map the right structure, tax position and setup.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="/contact?service=Singapore%20&%20Malaysia%20Desk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Enquire</a>
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
