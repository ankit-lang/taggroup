
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Sushil Sharma</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/sushil.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SS</div>
      <div>
        <span className="eyebrow">Associate Partner</span>
        <h1>Sushil Sharma</h1>
        <p>IT Infrastructure, Systems & Security &middot; Delhi NCR, India</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">Infrastructure</span><span className="chip">Networks & servers</span><span className="chip">Info-security</span><span className="chip">Cloud / virtualisation</span></div>
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
            <a className="btn btn-primary" href="mailto:sushil@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Sushil</a>
            <a className="btn btn-ghost" href="/assets/profiles/sushil.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Sushil is an Associate Partner at TAG Group leading technology infrastructure. With 20+ years managing enterprise IT infrastructure, security, networks, servers and implementation programmes, he connects business requirements with practical technology delivery — planning, procurement, deployment, vendor management, end-user support and operating controls.</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>20+ yrs</em></div><div className="lbl">Infrastructure experience</div></div><div className="stat"><div className="val"><em>End-to-end</em></div><div className="lbl">Planning to operations</div></div><div className="stat"><div className="val"><em>Enterprise</em></div><div className="lbl">Networks, security & cloud</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>Infrastructure & networks</h4><ul className="check-list"><li>Data-centre, server and network operations</li><li>Cloud, virtualisation and enterprise collaboration</li><li>Disaster recovery, backups and capacity planning</li></ul></div><div className="xp-col"><h4>Security & controls</h4><ul className="check-list"><li>Infrastructure and information-security policies</li><li>Firewall and endpoint-security environments</li><li>IT general controls and operating governance</li></ul></div><div className="xp-col"><h4>Delivery & vendors</h4><ul className="check-list"><li>Technology procurement and implementation</li><li>Vendor governance and SLAs</li><li>Business-systems and process improvement</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Current</div><div className="tl-body"><strong>Associate Partner, TAG Group — Technology Infrastructure</strong><p>Leads IT infrastructure planning and delivery for client setups and transformations.</p></div></div><div className="tl-item"><div className="tl-period">Prior</div><div className="tl-body"><strong>IT Infrastructure leadership — large engineering group</strong><p>Managed infrastructure, teams, DR, security and enterprise implementations.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>M.Sc. Computer Science</li><li>Certified Internal Auditor</li><li>ITIL V3 Foundation</li><li>VMware & Microsoft certified</li><li>20+ years' experience</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Engineering</span><span className="chip">Manufacturing</span><span className="chip">Corporate & shared services</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Sushil</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:sushil@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> sushil@taggroup.in</a>
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
