
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Karuna Sharma</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/karuna.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KS</div>
      <div>
        <span className="eyebrow">Partner</span>
        <h1>Karuna Sharma</h1>
        <p>Legal, Regulatory & Foreign Exchange Regulations &middot; India</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">Legal & regulatory</span><span className="chip">FEMA</span><span className="chip">Corporate law</span></div>
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
            <a className="btn btn-primary" href="mailto:karuna@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Karuna</a>
            <a className="btn btn-ghost" href="/assets/profiles/karuna.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Karuna is a Partner within TAG Group's specialist legal and regulatory network, advising on corporate, regulatory and foreign-exchange (FEMA) matters. (Detailed credentials to be added.)</p>
          
          <div className="excl-note" style={{"marginTop":"18px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h0"/></svg><span>This profile is provisional; verified credentials and experience will be added before external circulation.</span></div>
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>Legal & regulatory</h4><ul className="check-list"><li>Corporate and regulatory advisory</li><li>FEMA and foreign-exchange matters</li><li>Documentation and compliance support</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Current</div><div className="tl-body"><strong>Partner, TAG Group — Legal & Regulatory</strong><p>Advises on corporate, regulatory and FEMA matters.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>Legal & regulatory practice</li><li>FEMA and corporate law</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Corporate</span><span className="chip">Cross-border</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Karuna</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:karuna@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> karuna@taggroup.in</a>
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
