
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Vishal Tayal</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/vishal.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />VT</div>
      <div>
        <span className="eyebrow">Partner — UAE Desk</span>
        <h1>Vishal Tayal</h1>
        <p>UAE Desk · India–UAE Tax, VAT &amp; Structuring &middot; UAE</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">India GST</span><span className="chip">UAE VAT</span><span className="chip">Structuring</span><span className="chip">Litigation</span><span className="chip">ICAI faculty</span></div>
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
            <a className="btn btn-primary" href="mailto:vishal@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Vishal</a><a className="btn btn-ghost" href="https://www.linkedin.com/in/vishal-tayal-aa702835/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1"/></svg> External profile</a>
            <a className="btn btn-ghost" href="/assets/profiles/vishal.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Vishal is a Partner at TAG Group advising on indirect tax across India and the UAE — GST, legacy service tax and UAE VAT — combining advisory and implementation experience with regular professional training. As Director of Taxepolis International FZCO, he supports the group's UAE presence, with work spanning transaction structuring, litigation, tax-impact reviews and the design of tax processes, controls and compliance frameworks.</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>India + UAE</em></div><div className="lbl">Jurisdictional coverage</div></div><div className="stat"><div className="val"><em>ICAI</em></div><div className="lbl">Professional faculty</div></div><div className="stat"><div className="val"><em>SME → F100</em></div><div className="lbl">Client spectrum</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>India indirect tax</h4><ul className="check-list"><li>India GST and legacy service tax</li><li>Tax-efficient transaction structuring</li><li>Diagnostic reviews, litigation and compliance controls</li></ul></div><div className="xp-col"><h4>UAE VAT</h4><ul className="check-list"><li>UAE VAT advisory and implementation</li><li>Cross-border India–UAE structuring</li><li>Tax process, controls and compliance design</li></ul></div><div className="xp-col"><h4>Training & sector</h4><ul className="check-list"><li>Regular faculty for ICAI members and students</li><li>Clients from SMEs to Fortune 100 global organisations</li><li>Sector exposure across infrastructure, engineering, hospitality and transport</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Current</div><div className="tl-body"><strong>Partner, TAG Group (UAE) & Director, Taxepolis International FZCO</strong><p>Leads India–UAE indirect-tax mandates and the group's UAE presence.</p></div></div><div className="tl-item"><div className="tl-period">Practice</div><div className="tl-body"><strong>Indirect-tax advisory & implementation</strong><p>Advised multinational and Indian groups; regular professional trainer.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>Chartered Accountant (ICAI)</li><li>ICAI faculty on GST</li><li>Director, Taxepolis International FZCO (UAE)</li><li>India & UAE exposure</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Infrastructure</span><span className="chip">Engineering</span><span className="chip">Hospitality</span><span className="chip">Transport & logistics</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Vishal</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:vishal@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> vishal@taggroup.in</a>
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
