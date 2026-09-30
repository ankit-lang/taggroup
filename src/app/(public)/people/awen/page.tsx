
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Awen Lee</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/awen.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />AL</div>
      <div>
        <span className="eyebrow">International Desk — Singapore</span>
        <h1>Awen Lee</h1>
        <p>Corporate Services · Accounting & Compliance &middot; Singapore</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">Singapore accounting</span><span className="chip">Corporate services</span><span className="chip">Payroll</span><span className="chip">Regulatory coordination</span></div>
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
            <a className="btn btn-primary" href="mailto:awen@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Awen</a><a className="btn btn-ghost" href="https://www.saconsultingsg.com/team-4-1" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 14a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1M14 10a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1"/></svg> External profile</a>
            <a className="btn btn-ghost" href="/assets/profiles/awen.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Awen is TAG Group's Singapore network partner and the coordinating contact for Malaysia. As Executive Director of S&A Consulting Singapore Pte. Ltd. and Grand Merge Capital Pte. Ltd., he supports accounting, company secretarial, payroll and corporate services, including practical engagement with Singapore authorities (IRAS, MOM, ACRA and CPF Board).</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>10+ yrs</em></div><div className="lbl">Professional experience</div></div><div className="stat"><div className="val"><em>Singapore</em></div><div className="lbl">Corporate & regulatory</div></div><div className="stat"><div className="val"><em>Malaysia</em></div><div className="lbl">Coordinating contact</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>Corporate services</h4><ul className="check-list"><li>Company incorporation and secretarial</li><li>Ongoing corporate compliance</li><li>Regulatory coordination with Singapore authorities</li></ul></div><div className="xp-col"><h4>Finance & payroll</h4><ul className="check-list"><li>Accounting setup and compliance</li><li>Payroll and employment administration</li><li>Support for investment managers and SMEs</li></ul></div><div className="xp-col"><h4>Coordination</h4><ul className="check-list"><li>Singapore market-entry support</li><li>Coordinating contact for Malaysia</li><li>Cross-border coordination with India</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Current</div><div className="tl-body"><strong>Executive Director, S&A Consulting Singapore</strong><p>10+ years across professional services and commerce; supports accounting and compliance for cross-border businesses.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>CPA Australia member</li><li>ISCA member</li><li>Singapore Chartered Tax Professional</li><li>BSc Commerce (Accounting)</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Corporate services</span><span className="chip">Investment management</span><span className="chip">SMEs</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Awen</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:awen@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> awen@taggroup.in</a>
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
