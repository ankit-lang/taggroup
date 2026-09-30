
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/global.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/international">International Desk</a> / <span>US Desk</span></div>
    <span className="eyebrow">India ↔ United States</span>
    <h1>🇺🇸 US Desk<span className="badge badge-network" style={{"marginLeft":"8px"}}>Coming soon</span></h1>
    <p>TAG Group's US Desk is coming soon. In the meantime, our Global Capability Centre already delivers managed finance &amp; accounting for US-based businesses from India, and our tax and transfer-pricing teams support US–India cross-border matters.</p>
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
          <h5>Desk status</h5>
          <p className="lead-note">A dedicated contact for this desk is coming soon. Our GCC and tax teams support this corridor today.</p>
          <a className="btn btn-primary" href="/contact?service=US%20Desk" style={{"width":"100%","justifyContent":"center"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Enquire</a>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#why">Why this corridor</a><a href="#services">How we help</a></nav>
      <div>
        <div style={{"marginBottom":"34px"}}><figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/city-us.svg')"}}><img src="/assets/photos/desks/united-states.jpg" alt="US Desk — market view" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>US Desk</strong><span>India ↔ United States</span></figcaption></figure></div>
        <section className="svc-block" id="why">
          <h2>Why the US corridor</h2>
          <ul className="check-list"><li>The largest India-outbound and inbound corridor</li><li>Deep demand for India-based finance &amp; accounting delivery</li><li>Complex cross-border tax and transfer-pricing needs</li></ul>
        </section>
        <section className="svc-block" id="services">
          <h2>How the desk helps</h2>
          <div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Available now</h4><ul className="check-list two"><li>Finance &amp; accounting delivery via our Global Capability Centre</li><li>US–India transfer-pricing documentation &amp; analysis</li><li>Cross-border tax coordination</li></ul></div><div style={{"marginBottom":"22px"}}><h4 style={{"color":"var(--accent)","marginBottom":"12px"}}>Coming soon</h4><ul className="check-list two"><li>A dedicated US Desk with a named local contact</li><li>Expanded entry &amp; compliance support</li><li>On-ground coordination</li></ul></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Explore the US Desk</h2>
            <p>Tell us your plans for this corridor and we'll map the right structure, tax position and setup.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="/contact?service=US%20Desk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Enquire</a>
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
