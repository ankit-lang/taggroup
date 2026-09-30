
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/leadership">Leadership</a> / <span>Manorath Rathi</span></div>
    <div className="prof-head">
      <div className="prof-av"><img src="/assets/photos/people/manorath.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />MR</div>
      <div>
        <span className="eyebrow">Associate Partner</span>
        <h1>Manorath Rathi</h1>
        <p>Legal, Regulatory & Dispute Resolution &middot; India</p>
        <div className="pill-row" style={{"marginTop":"14px"}}><span className="chip">Commercial litigation</span><span className="chip">Tax disputes</span><span className="chip">Insolvency</span><span className="chip">FEMA / AML</span></div>
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
            <a className="btn btn-primary" href="mailto:manorath@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Email Manorath</a>
            <a className="btn btn-ghost" href="/assets/profiles/manorath.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download profile (PDF)</a>
          </div>
        </div>
      </aside>
      <nav className="jump-chips" aria-label="On this page"><a href="#summary">Overview</a><a href="#expertise">Areas of expertise</a><a href="#experience">Experience</a><a href="#credentials">Credentials</a></nav>
      <div>
        <section className="svc-block" id="summary">
          <h2>Overview</h2>
          <p className="lead" style={{"color":"var(--charcoal-700)"}}>Manorath is an Associate Partner at TAG Group, dual-qualified in law and accountancy. He advises and appears in corporate and commercial disputes, tax litigation, insolvency matters, transaction structuring and white-collar regulatory proceedings. Training under a Senior Advocate of the Supreme Court together with a financial background allows him to address matters that combine legal strategy with commercial and tax complexity.</p>
          <div className="stats" style={{"marginTop":"8px"}}><div className="stat"><div className="val"><em>CA + LL.B.</em></div><div className="lbl">Dual professional qualification</div></div><div className="stat"><div className="val"><em>SC / HC</em></div><div className="lbl">Court exposure</div></div><div className="stat"><div className="val"><em>Tax + Legal</em></div><div className="lbl">Integrated advisory</div></div></div>
          
        </section>
        <section className="svc-block" id="expertise">
          <h2>Areas of expertise</h2>
          <div className="xp-grid"><div className="xp-col"><h4>Disputes & litigation</h4><ul className="check-list"><li>Corporate and commercial litigation</li><li>Tax disputes, structuring and transaction advice</li><li>Appears before tribunals, High Courts and the Supreme Court of India</li></ul></div><div className="xp-col"><h4>Insolvency & restructuring</h4><ul className="check-list"><li>Insolvency and restructuring law</li><li>Creditor and debtor-side strategy</li><li>Transaction and enforcement support</li></ul></div><div className="xp-col"><h4>Regulatory & white-collar</h4><ul className="check-list"><li>FEMA, anti-money-laundering and white-collar matters</li><li>Regulatory representation and advisory</li><li>Legal pleadings combined with accounting and tax analysis</li></ul></div></div>
        </section>
        <section className="svc-block" id="experience">
          <h2>Experience</h2>
          <div className="timeline"><div className="tl-item"><div className="tl-period">Current</div><div className="tl-body"><strong>Associate Partner, TAG Group — Legal & Regulatory</strong><p>Leads legal, regulatory and dispute-resolution mandates for multinational and technology-led businesses.</p></div></div><div className="tl-item"><div className="tl-period">Practice</div><div className="tl-body"><strong>Litigation counsel</strong><p>Trained under a Senior Advocate of the Supreme Court; advises and appears across commercial, tax and insolvency matters.</p></div></div></div>
        </section>
        <section className="svc-block" id="credentials">
          <h2>Credentials &amp; qualifications</h2>
          <ul className="check-list two"><li>LL.B., Campus Law Centre, University of Delhi</li><li>Chartered Accountant (ICAI)</li><li>B.Com. (Hons.)</li><li>Litigation counsel</li></ul>
          <h4 style={{"margin":"26px 0 12px","color":"var(--accent)"}}>Sector experience</h4>
          <div className="chips"><span className="chip">Technology</span><span className="chip">Manufacturing</span><span className="chip">Financial services</span><span className="chip">Multinational groups</span></div>
        </section>
        <section className="svc-block">
          <div className="cta-band">
            <h2>Work with Manorath</h2>
            <p>Reach out directly, or send a general enquiry and we'll connect you with the right team.</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:manorath@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> manorath@taggroup.in</a>
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
