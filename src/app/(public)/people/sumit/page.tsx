
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Sumit Goyal</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/sumit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SG</div>
      <div>
        <span className="eyebrow">Partner</span>
        <h1>Sumit Goyal</h1>
        <p>Indirect Tax &middot; Gurugram, India</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">GST</span><span className="chip">Departmental audits</span><span className="chip">Impact analysis</span><span className="chip">Forensic perspective</span></div>
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
            <a className="btn btn-primary" href="mailto:sumit@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Sumit</a>
            <a className="btn btn-ghost" href="/assets/profiles/sumit.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Sumit is a Partner at TAG Group specialising in indirect tax compliance and advisory. He has practical experience handling departmental audits, transaction-level tax impact analysis and client guidance on complex GST matters, with a strong grounding in diagnostic review, compliance execution and issue resolution.</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>GST</em></div><div className="lbl">Primary advisory focus</div></div><div className="stat"><div className="val"><em>Audit</em></div><div className="lbl">Departmental-audit support</div></div><div className="stat"><div className="val"><em>Forensic</em></div><div className="lbl">Fraud & controls perspective</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>GST advisory & compliance</h4><ul className="check-list"><li>GST compliance reviews and advisory</li><li>Registrations, reconciliations and refunds</li><li>Transaction and business-model impact analysis</li></ul></div><div className="xp-col"><h4>Audits & controversy</h4><ul className="check-list"><li>Departmental audits and tax-authority matters</li><li>Litigation support and representation</li><li>Compliance advisory for complex positions</li></ul></div><div className="xp-col"><h4>Controls & forensics</h4><ul className="check-list"><li>Forensic-accounting perspective on tax controls</li><li>Fraud detection and diagnostic review</li><li>Process and compliance strengthening</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Current</div><div className="tl-body"><strong>Partner, TAG Group — Indirect Tax</strong><p>Advises clients across indirect tax compliance, advisory and departmental audits.</p></div></div><div className="tl-item"><div className="tl-period">Prior</div><div className="tl-body"><strong>Specialist indirect-tax advisory practice</strong><p>Developed deep experience in GST diagnostics, compliance and issue resolution.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>Chartered Accountant (ICAI)</li><li>ICAI Certificate — Forensic Accounting & Fraud Detection</li><li>13+ years in indirect tax</li><li>Pursuing DISA & Concurrent Audit</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Manufacturing</span><span className="chip">Services</span><span className="chip">Infrastructure</span><span className="chip">Retail & FMCG</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Sumit</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:sumit@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> sumit@taggroup.in</a>
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
