
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Amit Sood</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/amit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />AS</div>
      <div>
        <span className="eyebrow">Strategic Associate</span>
        <h1>Amit Sood</h1>
        <p>Real Estate & Workforce Solutions &middot; Delhi NCR, India</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">Property search</span><span className="chip">Site coordination</span><span className="chip">Facility workforce</span></div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <h5>Profile</h5>
        <a href="#summary">Overview</a>
        <a href="#expertise">Areas of expertise</a>
        <a href="#experience">Experience</a>
        <a href="#credentials">Credentials</a>
        <div className="side-card" style={{"marginTop":"26px"}}>
          <h5>Get in touch</h5>
          <div className="side-actions">
            <a className="btn btn-primary" href="mailto:amit@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Amit</a>
            <a className="btn btn-ghost" href="/assets/profiles/amit.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Amit is a Strategic Associate at TAG Group supporting corporate real-estate requirements and blue-collar workforce deployment. His role centres on local market access, property identification, site coordination and transaction follow-through, giving clients a structured professional interface alongside on-ground execution support.</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>18+ yrs</em></div><div className="lbl">On-ground experience</div></div><div className="stat"><div className="val"><em>Delhi NCR</em></div><div className="lbl">Core market</div></div><div className="stat"><div className="val"><em>Property + people</em></div><div className="lbl">Integrated support</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>Property</h4><ul className="check-list"><li>Land, office, factory and warehouse searches</li><li>Lease and property-transaction coordination</li><li>Property management and tenant coordination</li></ul></div><div className="xp-col"><h4>Workforce & facility</h4><ul className="check-list"><li>Security personnel and support staff</li><li>Deployment and replacement coordination</li><li>Site-level workforce liaison and continuity</li></ul></div><div className="xp-col"><h4>Execution</h4><ul className="check-list"><li>Requirement definition and market sourcing</li><li>Site visits and local counterpart coordination</li><li>Documentation flow and follow-through</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Current</div><div className="tl-body"><strong>Strategic Associate, TAG Group — Real Estate & Workforce</strong><p>Coordinates property and workforce requirements for new-market entry and expansion.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>18+ years' sector experience</li><li>Delhi NCR market focus</li><li>Corporate property support</li><li>Workforce deployment coordination</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Manufacturing</span><span className="chip">Warehousing & logistics</span><span className="chip">Corporate offices</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Amit</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:amit@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> amit@taggroup.in</a>
              <a className="btn btn-light" href="/contact">Contact TAG Group</a>
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
