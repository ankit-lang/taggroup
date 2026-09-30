
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Ishita Sharma</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/ishita.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />IS</div>
      <div>
        <span className="eyebrow">Partner</span>
        <h1>Ishita Sharma</h1>
        <p>Human Resources & Organisation Capability &middot; Gurugram, India</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">Talent acquisition</span><span className="chip">L&D / LMS</span><span className="chip">HR operations</span><span className="chip">SAP HR</span><span className="chip">HR analytics</span></div>
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
            <a className="btn btn-primary" href="mailto:ishita@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Ishita</a>
            <a className="btn btn-ghost" href="/assets/profiles/ishita.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Ishita leads TAG Group's Human Capital & HR practice. Across 15+ years building and running the people function for a listed manufacturing enterprise, she has shaped how a large, dispersed organisation hires, learns and performs — owning learning strategy, talent acquisition, HR operations and analytics at PAN-India scale. She brings that operator's perspective to clients: HR systems that are measurable, compliant and built to scale, rather than policies on paper.</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>95%</em></div><div className="lbl">Mandatory-training compliance</div></div><div className="stat"><div className="val"><em>85%</em></div><div className="lbl">L&D plan adherence</div></div><div className="stat"><div className="val"><em>75%</em></div><div className="lbl">Open-role closure rate</div></div><div className="stat"><div className="val"><em>4.3/5</em></div><div className="lbl">Learner satisfaction</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>Learning & development</h4><ul className="check-list"><li>Learning strategy, TNI and capability programmes</li><li>Learning-management-system implementation and adoption</li><li>Effectiveness tracking via scorecards, surveys and dashboards</li></ul></div><div className="xp-col"><h4>Talent acquisition</h4><ul className="check-list"><li>Full-cycle recruitment and workforce planning</li><li>Leadership and critical-role hiring</li><li>Recruitment vendor governance and diversity pipelines</li></ul></div><div className="xp-col"><h4>HR operations & compliance</h4><ul className="check-list"><li>Payroll, PF and ESI compliance via SAP HR / SuccessFactors</li><li>HR policies, handbooks and process documentation</li><li>Statutory HR compliance and audit readiness</li></ul></div><div className="xp-col"><h4>Performance & analytics</h4><ul className="check-list"><li>Performance-management systems and competency frameworks</li><li>HR analytics and management dashboards (Power BI)</li><li>Employee engagement, rewards and recognition</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Recent</div><div className="tl-body"><strong>Learning & Development Lead — listed manufacturing enterprise</strong><p>Owned the enterprise learning agenda across India — strategy, capability programmes, compliance and the LMS rollout — lifting mandatory-training compliance to 95% and L&D plan adherence to 85%.</p></div></div><div className="tl-item"><div className="tl-period">Prior</div><div className="tl-body"><strong>Talent Acquisition Lead</strong><p>Ran workforce planning and hiring across four regional zones, closing ~75% of open roles and building proactive pipelines for critical positions.</p></div></div><div className="tl-item"><div className="tl-period">Prior</div><div className="tl-body"><strong>HR Operations</strong><p>Built the operating backbone — payroll, statutory compliance, MIS and process governance — on SAP HR / SuccessFactors.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>MBA, HR & Operations</li><li>B.Sc. (Hons.) Biotechnology</li><li>ISO Internal Auditor</li><li>15+ years' experience</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Manufacturing</span><span className="chip">Logistics</span><span className="chip">Corporate & shared services</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Ishita</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:ishita@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> ishita@taggroup.in</a>
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
