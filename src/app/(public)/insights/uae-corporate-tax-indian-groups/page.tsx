
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/insights.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/insights">Insights &amp; Media</a> / <span>International Tax</span></div>
    <span className="eyebrow">International Tax</span>
    <h1 style={{"maxWidth":"24ch"}}>UAE Corporate Tax: what Indian groups must plan for</h1>
    <p>April 2026 &middot; by Vishal Tayal, Partner — UAE Desk</p>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <div className="side-card">
          <h5>Download</h5>
          <p className="lead-note">Read this article offline or share it.</p>
          <a className="btn btn-primary" href="/assets/insight-pdfs/uae-corporate-tax-indian-groups.pdf" download style={{"width":"100%","justifyContent":"center"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> Download PDF</a>
        </div>
        <div className="side-card" style={{"marginTop":"18px"}}>
          <h5>Author</h5>
          <a className="pmini" href="/people/vishal"><span className="pmini-av">VT</span><span className="pmini-info"><strong>Vishal Tayal</strong><span>Partner — UAE Desk</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div className="side-card" style={{"marginTop":"18px"}}>
          <h5>More insights</h5>
          <a className="pmini" href="/global-tp-defensible-file"><span className="pmini-av">GS</span><span className="pmini-info"><strong>Building a defensible multi-country transf…</strong><span>Transfer Pricing</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="pmini" href="/india-entry-2026-structure"><span className="pmini-av">GS</span><span className="pmini-info"><strong>India entry in 2026: choosing the right st…</strong><span>India Entry</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="pmini" href="/building-a-gcc-from-india"><span className="pmini-av">KV</span><span className="pmini-info"><strong>Setting up a Global Capability Centre from…</strong><span>Global Capability Centre</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </aside>
      <div>
        <div style={{"marginBottom":"32px"}}><figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/city-uae.svg')"}}><img src="/assets/photos/insights/uae-corporate-tax-indian-groups.jpg" alt="UAE Corporate Tax: what Indian groups must plan for" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure></div>
        <div className="article-body"><p>The UAE's Corporate Tax regime has changed the calculus for Indian groups using the UAE as a hub. The headline rate is modest, but the detail — qualifying free-zone income, substance requirements and the treatment of intra-group flows — decides the effective outcome.</p><p>The first question is free zone versus mainland. Qualifying free-zone persons can access a 0% rate on qualifying income, but the conditions around adequate substance and non-qualifying revenue thresholds must be met and evidenced, not assumed.</p><p>The second is the India side. Dividend, interest and service flows between India and the UAE interact with withholding, treaty positions and India's own anti-avoidance rules. A structure that is efficient in isolation can be inefficient — or exposed — once both sides are read together.</p><p>Substance is now the connective tissue: people, premises and decision-making in the right place. Documentation of that substance is as important as the structure itself.</p><p>TAG Group's UAE Desk, led by Vishal Tayal through Taxepolis International FZCO, plans these positions on both sides of the corridor — VAT, Corporate Tax, India GST and structuring — as one coordinated exercise.</p></div>
        <div className="excl-note" style={{"marginTop":"26px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h0"/></svg><span>This is a sample article. TAG Group will publish full editions and analyses here; the layout supports read-online and PDF download.</span></div>
        <div className="cta-band" style={{"marginTop":"34px"}}>
          <h2>Want this kind of analysis regularly?</h2>
          <p>Subscribe to TAG Group Insights, or talk to the author about your situation.</p>
          <div className="hero-actions">
            <a className="btn btn-white" href="#" data-newsletter><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Subscribe</a>
            <a className="btn btn-light" href="mailto:vishal@taggroup.in">Email Vishal</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
