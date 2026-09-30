
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>K. Vishnu Sharma</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</div>
      <div>
        <span className="eyebrow">Partner</span>
        <h1>K. Vishnu Sharma</h1>
        <p>Audit, Assurance & Finance Transformation &middot; Gurugram, India</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">Controllership</span><span className="chip">Close & consolidation</span><span className="chip">ICFR / SOX</span><span className="chip">Ind AS / IFRS</span><span className="chip">ERP (SAP S/4HANA)</span></div>
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
            <a className="btn btn-primary" href="mailto:k.vishnu@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email K.</a>
            <a className="btn btn-ghost" href="/assets/profiles/k-vishnu.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>K. Vishnu Sharma is a Partner at TAG Group leading assurance support and finance transformation. He brings senior controllership experience from large listed and multinational organisations — including leading British companies and Fortune 100 global technology groups — spanning financial reporting, close governance, audit coordination, ICFR/SOX programmes, ERP implementation and accounting operations. His advisory relevance is strongest where clients need CFO-level oversight, disciplined reporting, audit readiness and practical process improvement.</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>2 days</em></div><div className="lbl">SG&A close-cycle reduction</div></div><div className="stat"><div className="val"><em>50%</em></div><div className="lbl">Reduction in manual journals</div></div><div className="stat"><div className="val"><em>290</em></div><div className="lbl">Controls governed (SOX / Companies Act)</div></div><div className="stat"><div className="val"><em>100+</em></div><div className="lbl">Subsidiaries consolidated</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>Close, consolidation & reporting</h4><ul className="check-list"><li>Monthly, quarterly and annual close ownership</li><li>Consolidation and management reporting across 100+ subsidiaries</li><li>Ind AS, IFRS, US GAAP and UK GAAP reporting</li></ul></div><div className="xp-col"><h4>Controls & audit</h4><ul className="check-list"><li>SOX, ICFR and finance control frameworks</li><li>Statutory and external audit management to clean outcomes</li><li>Governed 290 controls under SOX and the Companies Act</li></ul></div><div className="xp-col"><h4>Transformation & automation</h4><ul className="check-list"><li>SAP S/4HANA implementation and finance-close automation</li><li>68 automation and digital-transformation projects delivered</li><li>Shared-service (FSSC/BPO) governance</li></ul></div><div className="xp-col"><h4>Finance operations</h4><ul className="check-list"><li>AP, AR, payroll, general ledger, fixed assets and treasury</li><li>Budgeting, forecasting and KPI monitoring</li><li>Finance-team structuring and capability building</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Recent</div><div className="tl-body"><strong>Financial Planning & Reporting — a British multinational</strong><p>Owned month-end close and corporate reporting; led controls testing and audit readiness; cut SG&A close by 2 days and manual journals by 50%.</p></div></div><div className="tl-item"><div className="tl-period">Prior</div><div className="tl-body"><strong>Chief Manager — a Fortune 100 global electronics group</strong><p>Led financial and risk reporting, statutory audit coordination (100% clean), Ind AS financials and SOX/ICFR (290 controls); drove SAP HANA implementation.</p></div></div><div className="tl-item"><div className="tl-period">Prior</div><div className="tl-body"><strong>Manager, Finance — listed Indian manufacturer</strong><p>Finalised financial statements, implemented Ind AS 115 & 116, led statutory and tax audits and ERP rollout.</p></div></div><div className="tl-item"><div className="tl-period">Prior</div><div className="tl-body"><strong>Section Manager — listed Indian manufacturing group</strong><p>Group consolidation of 100+ subsidiaries and 50+ plants; supported QIP, bond issuance and acquisition due diligence.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>Chartered Accountant (ICAI), 2011</li><li>B.Com. (Hons.), Delhi University</li><li>14+ years' experience</li><li>SAP S/4HANA, Oracle & Hyperion</li><li>VBA-certified (automation & reporting)</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Telecom</span><span className="chip">Electronics & technology</span><span className="chip">Consumer durables</span><span className="chip">Automotive & manufacturing</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with K.</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:k.vishnu@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> k.vishnu@taggroup.in</a>
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
