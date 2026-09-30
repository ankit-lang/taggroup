
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/audit.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <a href="/services">Services</a> / <span>Risk, Internal Audit & Controls</span></div>
          <span className="eyebrow">Assurance support (non-statutory)</span>
          <h1>Risk, Internal Audit & Controls</h1>
          <p>Internal audit, controls and assurance support that strengthen governance without overlapping the statutory auditor.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>On this page</h5>
              <a href="#proposition">Service proposition</a><a href="#situations">When it's needed</a><a href="#who">Who it's for</a><a href="#scope">Scope of assistance</a><a href="#approach">Our approach</a><a href="#deliverables">Typical deliverables</a><a href="#industries">Industries</a><a href="#credentials">Experience</a><a href="#connected">Connected services</a><a href="#cta">Enquire</a>
              <div className="side-card" style={{ "marginTop": "26px" }}>
                <h5>Lead partners</h5>
                <p className="lead-note">Speak directly with the partners who lead this practice.</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>Gaurav Sharma</strong><span>Managing Partner</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/k-vishnu">
                  <span className="pmini-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</span>
                  <span className="pmini-info"><strong>K. Vishnu Sharma</strong><span>Partner</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/sumit">
                  <span className="pmini-av"><img src="/assets/photos/people/sumit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SG</span>
                  <span className="pmini-info"><strong>Sumit Goyal</strong><span>Partner</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="btn btn-primary" href="/contact?service=Risk,%20Internal%20Audit%20&%20Controls" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Enquire</a>
              </div>
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>Service portfolio</h5>
                <p className="lead-note">Download a one-page summary of this portfolio.</p>
                <a className="btn btn-ghost" href="/assets/service-pdfs/risk-internal-audit.pdf" download style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> Download portfolio (PDF)</a>
              </div>
            </aside>
            <nav className="jump-chips" aria-label="On this page"><a href="#proposition">Service proposition</a><a href="#situations">When it's needed</a><a href="#who">Who it's for</a><a href="#scope">Scope of assistance</a><a href="#approach">Our approach</a><a href="#deliverables">Typical deliverables</a><a href="#industries">Industries</a><a href="#credentials">Experience</a><a href="#connected">Connected services</a><a href="#cta">Enquire</a></nav>
            <div>
              <div style={{ "marginBottom": "34px" }}><figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/office.svg')" }}><img src="/assets/photos/services/risk-internal-audit.jpg" alt="Risk, Internal Audit & Controls" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>Risk, Internal Audit & Controls</strong><span>Assurance support (non-statutory)</span></figcaption></figure></div>
              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>Service proposition</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>Boards and CFOs need independent assurance that risks are understood and controls actually work. TAG delivers risk-based internal audit, controls design and testing, and forensic reviews — building practical frameworks that improve operations, not just tick boxes. Our scope is explicitly non-statutory.</p>
                <div className="excl-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h0" /></svg><span>This is assurance support, not statutory attestation. TAG does not perform statutory audits or issue certifications.</span></div>
              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>Business situations that trigger the need</h2>
                <ul className="check-list"><li>The board or audit committee wants independent assurance over key risks</li><li>Internal financial controls (IFC/ICFR) need design or testing</li><li>A process is leaking value, margin or cash</li><li>Fraud indicators or a specific incident need investigation</li><li>ERP or automated controls need review</li><li>Vendor, inventory or fixed-asset integrity is in question</li></ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>Who this service is for</h2>
                <ul className="check-list two"><li>Audit committees and boards</li><li>CFOs and finance leaders</li><li>Promoters seeking assurance over operations</li><li>Groups standardising controls across entities</li></ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>Detailed scope of assistance</h2>
                <div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Internal audit</h4><ul className="check-list two"><li>Risk-based internal audit</li><li>Operational and process reviews</li><li>Remediation monitoring</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Controls</h4><ul className="check-list two"><li>Internal Financial Controls (IFC)</li><li>ICFR and SOX advisory</li><li>Risk-control matrices</li><li>Control design and testing</li><li>SOPs, process manuals and delegation-of-authority frameworks</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Enterprise risk</h4><ul className="check-list two"><li>Enterprise risk management</li><li>Regulatory compliance reviews</li><li>IT general controls and ERP/automated controls</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Forensic & verification</h4><ul className="check-list two"><li>Fraud-risk assessment</li><li>Forensic and special-purpose reviews</li><li>Inventory and fixed-asset verification</li><li>Payables and transaction verification</li><li>Third-party and vendor-risk reviews</li></ul></div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>Engagement approach &amp; phases</h2>
                <div className="phase-grid"><div className="phase"><div className="pn">01</div><h4>Plan</h4><p>Build a risk-based audit plan aligned to the board's priorities.</p></div><div className="phase"><div className="pn">02</div><h4>Test</h4><p>Assess design and operating effectiveness of controls and processes.</p></div><div className="phase"><div className="pn">03</div><h4>Report</h4><p>Deliver clear, prioritised findings with practical recommendations.</p></div><div className="phase"><div className="pn">04</div><h4>Remediate</h4><p>Track remediation and re-test to confirm risks are closed.</p></div></div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>Typical deliverables</h2>
                <div className="deliverables"><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Risk-based internal audit reports</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Risk-control matrices and control libraries</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>IFC/ICFR design and testing documentation</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>SOPs and process manuals</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Forensic / special-purpose review reports</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Remediation trackers</span></div></div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>Relevant industries</h2>
                <div className="chips"><span className="chip">Infrastructure</span><span className="chip">Renewable energy</span><span className="chip">Engineering & EPC</span><span className="chip">Automotive</span><span className="chip">Manufacturing</span><span className="chip">Technology & IT/ITeS</span><span className="chip">Logistics</span><span className="chip">Real estate</span><span className="chip">Hospitality</span><span className="chip">Healthcare & pharma</span><span className="chip">FMCG & retail</span><span className="chip">Oil & gas</span><span className="chip">Aviation</span><span className="chip">Start-ups & e-commerce</span></div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>Selected experience &amp; credentials</h2>
                <div className="callout">Partners have governed 290 controls under Korean SOX and the Companies Act, coordinated statutory audits to clean outcomes, and hold ICAI certification in forensic accounting and fraud detection.</div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">Selected clients</p>
                  <div className="logo-marquee" aria-label="Selected clients"><div className="logo-track"><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Egis"><span>Egis</span><img src="/assets/logos/egis.png" alt="Egis" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Egis"><span>Egis</span><img src="/assets/logos/egis.png" alt="Egis" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div></div>
                </div>
              </section>


              <section className="svc-block" id="connected">
                <h2><span className="n">9</span>Connected services</h2>
                <div className="connected"><a href="/cfo-finance-transformation"><strong>CFO & Finance Transformation</strong><span>Related capability</span></a><a href="/corporate-legal-fema"><strong>Corporate, Legal, FEMA & Regulatory</strong><span>Related capability</span></a><a href="/tax-cross-border"><strong>Tax & Cross-Border Advisory</strong><span>Related capability</span></a></div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>Discuss Risk, Internal Audit & Controls with our team</h2>
                  <p>Tell us your situation and we'll map the right scope, team and approach for your business.</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Risk,%20Internal%20Audit%20&%20Controls"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Enquire — info@taggroup.in</a>
                    <a className="btn btn-light" href="/contact">Contact page</a>
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
