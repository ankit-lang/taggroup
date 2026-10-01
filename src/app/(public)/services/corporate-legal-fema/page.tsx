
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/audit.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <a href="/services">Services</a> / <span>Corporate, Legal, FEMA & Regulatory</span></div>
          <span className="eyebrow">Legal & regulatory</span>
          <h1>Corporate, Legal, FEMA & Regulatory</h1>
          <p>Corporate structuring, secretarial coordination, FEMA and cross-border regulatory advice, supported by a specialist legal network.</p>
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
                <a className="pmini" href="/people/mr-pradip">
                  <span className="pmini-av"><img src="/assets/photos/people/mr-pradip.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />MR</span>
                  <span className="pmini-info"><strong>MR Pradip</strong><span>Associate Partner</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="btn btn-primary" href="/contact?service=Corporate,%20Legal,%20FEMA%20&%20Regulatory" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Enquire</a>
              </div>
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>Service portfolio</h5>
                <p className="lead-note">Download a one-page summary of this portfolio.</p>
                <a className="btn btn-ghost" href="/assets/service-pdfs/corporate-legal-fema.pdf" download style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> Download portfolio (PDF)</a>
              </div>
            </aside>
            <nav className="jump-chips" aria-label="On this page"><a href="#proposition">Service proposition</a><a href="#situations">When it's needed</a><a href="#who">Who it's for</a><a href="#scope">Scope of assistance</a><a href="#approach">Our approach</a><a href="#deliverables">Typical deliverables</a><a href="#industries">Industries</a><a href="#credentials">Experience</a><a href="#connected">Connected services</a><a href="#cta">Enquire</a></nav>
            <div>
              <div style={{ "marginBottom": "34px" }}><figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/article.svg')" }}><img src="/assets/photos/services/corporate-legal-fema.jpg" alt="Corporate, Legal, FEMA & Regulatory" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>Corporate, Legal, FEMA & Regulatory</strong><span>Legal & regulatory</span></figcaption></figure></div>
              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>Service proposition</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>Corporate and cross-border activity generates a steady stream of legal and regulatory obligations. TAG coordinates entity structuring, governance, FEMA and RBI matters and commercial documentation — combining accounting, tax and legal analysis, with dispute and insolvency support through dual-qualified professionals.</p>
                <div className="excl-note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h0" /></svg><span>Legal services identify the relevant advocate or legal associate where professional rules require it.</span></div>
              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>Business situations that trigger the need</h2>
                <ul className="check-list"><li>You are incorporating, restructuring or reorganising entities</li><li>Foreign investment (FDI/ODI) or ECB needs structuring and filings</li><li>A FEMA position, health check or compounding matter needs resolution</li><li>Board and shareholder governance needs strengthening</li><li>Commercial agreements need drafting or review</li><li>A commercial, tax or insolvency dispute needs support</li></ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>Who this service is for</h2>
                <ul className="check-list two"><li>Groups managing multi-entity structures</li><li>Foreign investors and Indian outbound investors</li><li>Businesses with FEMA/RBI obligations</li><li>Boards and promoters needing governance and documentation</li></ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>Detailed scope of assistance</h2>
                <div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Corporate & secretarial</h4><ul className="check-list two"><li>Corporate and entity structuring</li><li>Company and LLP incorporation</li><li>Companies Act and LLP compliance</li><li>Board and shareholder governance</li><li>Corporate reorganisations, mergers and demergers</li><li>Secretarial compliance coordination</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Commercial & disputes</h4><ul className="check-list two"><li>Commercial agreements and documentation</li><li>Legal and regulatory due diligence</li><li>Commercial dispute support</li><li>Insolvency and restructuring support</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>FEMA & exchange control</h4><ul className="check-list two"><li>FEMA advisory</li><li>Foreign Direct Investment (FDI)</li><li>Overseas Investment and ODI</li><li>External Commercial Borrowings (ECB)</li><li>Branch, liaison and project offices</li><li>Cross-border payment and repatriation advisory</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Regulatory</h4><ul className="check-list two"><li>RBI filings and regulatory reporting</li><li>FEMA health checks</li><li>Regularisation and compounding</li><li>RBI and Enforcement Directorate representation support</li></ul></div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>Engagement approach &amp; phases</h2>
                <div className="phase-grid"><div className="phase"><div className="pn">01</div><h4>Structure</h4><p>Select the right entity, holding and governance structure.</p></div><div className="phase"><div className="pn">02</div><h4>Comply</h4><p>Set up and coordinate secretarial, FEMA and RBI compliance.</p></div><div className="phase"><div className="pn">03</div><h4>Document</h4><p>Prepare and review agreements and regulatory filings.</p></div><div className="phase"><div className="pn">04</div><h4>Represent</h4><p>Support disputes, compounding and regulatory representation.</p></div></div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>Typical deliverables</h2>
                <div className="deliverables"><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Entity and structuring advice</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Secretarial and Companies Act compliance</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>FDI/ODI/ECB structuring and filings</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>FEMA health-check reports</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Commercial agreements and reviews</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Regulatory representation support</span></div></div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>Relevant industries</h2>
                <div className="chips"><span className="chip">Infrastructure</span><span className="chip">Renewable energy</span><span className="chip">Engineering & EPC</span><span className="chip">Automotive</span><span className="chip">Manufacturing</span><span className="chip">Technology & IT/ITeS</span><span className="chip">Logistics</span><span className="chip">Real estate</span><span className="chip">Hospitality</span><span className="chip">Healthcare & pharma</span><span className="chip">FMCG & retail</span><span className="chip">Oil & gas</span><span className="chip">Aviation</span><span className="chip">Start-ups & e-commerce</span></div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>Selected experience &amp; credentials</h2>
                <div className="callout">Legal and regulatory work is supported by dual-qualified professionals (CA + LL.B.) with High Court and Supreme Court exposure, and a specialist legal network covering commercial disputes, insolvency, FEMA and white-collar matters.</div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">Selected clients</p>
                  <div className="logo-marquee" aria-label="Selected clients"><div className="logo-track"><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Egis"><span>Egis</span><img src="/assets/logos/egis.png" alt="Egis" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Egis"><span>Egis</span><img src="/assets/logos/egis.png" alt="Egis" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div></div>
                </div>
              </section>


              <section className="svc-block" id="connected">
                <h2><span className="n">9</span>Connected services</h2>
                <div className="connected"><a href="/tax-cross-border"><strong>Tax & Cross-Border Advisory</strong><span>Related capability</span></a><a href="/deals-valuation"><strong>Deals, Valuation & Transaction Support</strong><span>Related capability</span></a><a href="/india-entry"><strong>India Entry: One-Stop Business Establishment</strong><span>Related capability</span></a><a href="/international-business"><strong>International Business</strong><span>Related capability</span></a></div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>Discuss Corporate, Legal, FEMA & Regulatory with our team</h2>
                  <p>Tell us your situation and we'll map the right scope, team and approach for your business.</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Corporate,%20Legal,%20FEMA%20&%20Regulatory"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Enquire — info@taggroup.in</a>
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
