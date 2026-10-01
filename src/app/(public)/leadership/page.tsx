
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/life.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <span>Leadership</span></div>
          <span className="eyebrow">Leadership &amp; partners</span>
          <h1>Integrated professional expertise across every capability.</h1>
          <p>Core partners are supported by specialist associates and an international network for mandates that cross functional or jurisdictional boundaries. Select any leader to view their full profile and experience.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">

          <div className="person-feature reveal">
            <a className="pf-photo avatar" href="/people/gaurav"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">GS</span></a>
            <div className="pf-body">
              <span className="p-role">Managing Partner</span>
              <h2>Gaurav Sharma</h2>
              <p className="p-title">Direct & International Tax · Structuring & CFO Advisory</p>
              <p className="pf-lead">Gaurav is the Managing Partner of TAG Group and the driving force behind its tax, cross-border and CFO practice. Over 14+ years he has moved from Big Four advisory into senior in-house leadership — heading tax for the APAC region and finance for South-East Asia at European infrastructure and energy multinationals — before founding TAG Group's integrated advisory platform.</p>
              <div className="p-tags"><span>International tax</span><span>Transfer pricing</span><span>Cross-border</span><span>Fractional CFO</span><span>M&A</span><span>Board advisory</span></div>
              <div className="p-meta"><a href="mailto:gaurav@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> gaurav@taggroup.in</a><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-3z" /></svg> +91 88607 16777</span></div>
              <div className="hero-actions" style={{ "marginTop": "6px" }}>
                <a className="btn btn-primary" href="/people/gaurav">View full profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                <a className="btn btn-ghost" href="/assets/profiles/gaurav.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> Download profile</a>
              </div>
            </div>
          </div><div className="group-label"><h3>Partners &amp; practice leads</h3></div><div className="people-grid cols-5">
            <a className="person reveal" href="/people/k-vishnu">
              <div className="avatar"><img src="/assets/photos/people/k-vishnu.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">KV</span></div>
              <div className="p-body">
                <span className="p-role">Partner</span>
                <h3>K. Vishnu Sharma</h3>
                <p className="p-title">Audit, Assurance & Finance Transformation</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/sumit">
              <div className="avatar"><img src="/assets/photos/people/sumit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">SG</span></div>
              <div className="p-body">
                <span className="p-role">Partner</span>
                <h3>Sumit Goyal</h3>
                <p className="p-title">Indirect Tax</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/mr-pradip">
              <div className="avatar"><img src="/assets/photos/people/mr-pradip.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">MR</span></div>
              <div className="p-body">
                <span className="p-role">Associate Partner</span>
                <h3>MR Pradip</h3>
                <p className="p-title">Legal, Regulatory & Dispute Resolution</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/ishita">
              <div className="avatar"><img src="/assets/photos/people/ishita.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">IS</span></div>
              <div className="p-body">
                <span className="p-role">Partner</span>
                <h3>Ishita Sharma</h3>
                <p className="p-title">Human Resources & Organisation Capability</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/naresh">
              <div className="avatar"><img src="/assets/photos/people/naresh.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">NG</span></div>
              <div className="p-body">
                <span className="p-role">Partner</span>
                <h3>Naresh Kumar Goel</h3>
                <p className="p-title">Audit & Assurance</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/jai">
              <div className="avatar"><img src="/assets/photos/people/jai.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">JP</span></div>
              <div className="p-body">
                <span className="p-role">Partner</span>
                <h3>Jai Prakash</h3>
                <p className="p-title">Indirect Tax</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/karuna">
              <div className="avatar"><img src="/assets/photos/people/karuna.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">KS</span></div>
              <div className="p-body">
                <span className="p-role">Partner</span>
                <h3>Karuna Sharma</h3>
                <p className="p-title">Legal, Regulatory & Foreign Exchange Regulations</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/manuj">
              <div className="avatar"><img src="/assets/photos/people/manuj.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">MS</span></div>
              <div className="p-body">
                <span className="p-role">Associate Partner</span>
                <h3>Manuj Singhal</h3>
                <p className="p-title">Valuation</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/sushil">
              <div className="avatar"><img src="/assets/photos/people/sushil.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">SS</span></div>
              <div className="p-body">
                <span className="p-role">Associate Partner</span>
                <h3>Sushil Sharma</h3>
                <p className="p-title">IT Infrastructure, Systems & Security</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/amit">
              <div className="avatar"><img src="/assets/photos/people/amit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">AS</span></div>
              <div className="p-body">
                <span className="p-role">Strategic Associate</span>
                <h3>Amit Sood</h3>
                <p className="p-title">Real Estate & Workforce Solutions</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a></div><div className="group-label"><h3>International desks</h3></div><div className="people-grid cols-4">
            <a className="person reveal" href="/people/vishal">
              <div className="avatar"><img src="/assets/photos/people/vishal.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">VT</span></div>
              <div className="p-body">
                <span className="p-role">Partner — UAE Desk</span>
                <h3>Vishal Tayal</h3>
                <p className="p-title">UAE Desk · India–UAE Tax, VAT &amp; Structuring</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/awen">
              <div className="avatar"><img src="/assets/photos/people/awen.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">AL</span></div>
              <div className="p-body">
                <span className="p-role">International Desk — Singapore</span>
                <h3>Awen Lee</h3>
                <p className="p-title">Corporate Services · Accounting & Compliance</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person reveal" href="/people/hasina">
              <div className="avatar"><img src="/assets/photos/people/hasina.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">HB</span></div>
              <div className="p-body">
                <span className="p-role">International Desk — Mauritius</span>
                <h3>Hasina Bahemia</h3>
                <p className="p-title">Corporate Administration & Governance</p>
                <span className="link-arrow">View profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
            <a className="person person-soon reveal" href="/desks/united-states">
              <div className="avatar"><span className="initials">US</span></div>
              <div className="p-body"><span className="p-role">International Desk — United States</span><h3>Coming soon</h3>
                <p className="p-title">Cross-border tax, entity and finance support for US–India groups</p>
                <span className="link-arrow">About the US desk <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span></div>
            </a></div>
        </div>
      </section>
      <section className="section section-alt"><div className="container"><div className="cta-band">
        <h2>Speak with the right partner for your issue.</h2>
        <p>Tell us what you're working on and we'll connect you with the relevant capability.</p>
        <div className="hero-actions"><a className="btn btn-white" href="mailto:info@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> info@taggroup.in</a><a className="btn btn-light" href="/contact">Contact page</a></div>
      </div></div></section>
    </>
  );
}
