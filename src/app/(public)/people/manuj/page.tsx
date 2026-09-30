
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Manuj Singhal</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/manuj.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />MS</div>
      <div>
        <span className="eyebrow">Associate Partner</span>
        <h1>Manuj Singhal</h1>
        <p>Valuation &middot; India & global engagements</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">Business valuation</span><span className="chip">Complex securities</span><span className="chip">Intangibles / PPA</span><span className="chip">ESOP valuation</span></div>
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
            <a className="btn btn-primary" href="mailto:manuj@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Manuj</a>
            <a className="btn btn-ghost" href="/assets/profiles/manuj.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Manuj is an Associate Partner at TAG Group leading valuation. He has 15+ years of experience across business valuation, complex securities, intangible assets and specialised financial analysis, serving large corporates, Big Four firms, US consulting firms and global companies, and has led sizeable analytics teams.</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>15+ yrs</em></div><div className="lbl">Valuation experience</div></div><div className="stat"><div className="val"><em>50+</em></div><div className="lbl">Team leadership</div></div><div className="stat"><div className="val"><em>CFA · FRM · RV</em></div><div className="lbl">Core credentials</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>Business & equity valuation</h4><ul className="check-list"><li>Enterprise and equity valuation across industries</li><li>Portfolio, transaction and financial-reporting valuations</li><li>Strategic models supported by industry analysis</li></ul></div><div className="xp-col"><h4>Complex instruments</h4><ul className="check-list"><li>Debt, convertibles and complex derivatives</li><li>Purchase price allocation (PPA) and intangibles</li><li>ESOP structuring and valuation</li></ul></div><div className="xp-col"><h4>Specialised analysis</h4><ul className="check-list"><li>Real-estate valuation, IBR and CECL analysis</li><li>Scenario and sensitivity modelling</li><li>Global client and adviser support</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Current</div><div className="tl-body"><strong>Associate Partner, TAG Group — Valuation</strong><p>Leads valuation mandates across transactions, financial reporting and ESOPs.</p></div></div><div className="tl-item"><div className="tl-period">Prior</div><div className="tl-body"><strong>Global consulting & analytics</strong><p>Delivered complex valuation for global clients; led teams of 50+ in an analytics-led environment.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>Chartered Financial Analyst (CFA)</li><li>Financial Risk Manager (FRM)</li><li>Registered Valuer (IBBI)</li><li>MBA Finance & B.Tech</li><li>15+ years' experience</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Financial services</span><span className="chip">Technology</span><span className="chip">Manufacturing</span><span className="chip">Real estate</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Manuj</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:manuj@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> manuj@taggroup.in</a>
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
