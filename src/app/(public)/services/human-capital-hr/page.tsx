
"use client";
import React from 'react';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/life.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <a href="/services">Services</a> / <span>Human Capital & HR Advisory</span></div>
          <span className="eyebrow">People & organisation</span>
          <h1>Human Capital & HR Advisory</h1>
          <p>HR strategy, talent acquisition, learning and HR operations — building measurable people systems that scale.</p>
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
                <a className="btn btn-primary" href="/contact?service=Human%20Capital%20&%20HR%20Advisory" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Enquire</a>
              </div>
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>Service portfolio</h5>
                <p className="lead-note">Download a one-page summary of this portfolio.</p>
                <a className="btn btn-ghost" href="/assets/service-pdfs/human-capital-hr.pdf" download style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> Download portfolio (PDF)</a>
              </div>
            </aside>
            <nav className="jump-chips" aria-label="On this page"><a href="#proposition">Service proposition</a><a href="#situations">When it's needed</a><a href="#who">Who it's for</a><a href="#scope">Scope of assistance</a><a href="#approach">Our approach</a><a href="#deliverables">Typical deliverables</a><a href="#industries">Industries</a><a href="#credentials">Experience</a><a href="#connected">Connected services</a><a href="#cta">Enquire</a></nav>
            <div>
              <div style={{ "marginBottom": "34px" }}><figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/team.svg')" }}><img src="/assets/photos/services/human-capital-hr.jpg" alt="Human Capital & HR Advisory" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>Human Capital & HR Advisory</strong><span>People & organisation</span></figcaption></figure></div>
              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>Service proposition</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>People decisions determine whether a business can execute. TAG's HR advisory covers the full employee lifecycle — from organisation design and recruitment to learning, performance and HR operations — with a focus on measurable systems and disciplined delivery.</p>

              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>Business situations that trigger the need</h2>
                <ul className="check-list"><li>You are building or scaling a team and need recruitment capacity</li><li>HR policies, operations or payroll governance need structure</li><li>A learning and capability programme needs designing</li><li>Performance management needs a credible framework</li><li>An acquisition requires HR due diligence and integration</li><li>You need HR analytics and dashboards for leadership review</li></ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>Who this service is for</h2>
                <ul className="check-list two"><li>Founders and leaders building teams</li><li>Businesses formalising the HR function</li><li>Groups integrating people post-acquisition</li><li>Organisations investing in capability and performance</li></ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>Detailed scope of assistance</h2>
                <div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Strategy & design</h4><ul className="check-list two"><li>HR strategy and operating model</li><li>Organisation design</li><li>Workforce planning</li><li>Change-management support</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Talent acquisition</h4><ul className="check-list two"><li>Talent acquisition and recruitment</li><li>Recruitment-process outsourcing</li><li>Leadership and critical-role hiring</li><li>Blue-collar and facility workforce solutions</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>HR operations</h4><ul className="check-list two"><li>HR policies and employee handbooks</li><li>HR operations and payroll governance</li><li>Statutory HR compliance</li><li>HR due diligence and post-acquisition integration</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Performance & learning</h4><ul className="check-list two"><li>Performance-management systems</li><li>Competency frameworks</li><li>Learning-needs assessment</li><li>Learning and development programmes</li><li>Learning-management-system implementation</li><li>Leadership development</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Engagement & analytics</h4><ul className="check-list two"><li>Employee engagement</li><li>Rewards and recognition frameworks</li><li>HR analytics and dashboards</li></ul></div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>Engagement approach &amp; phases</h2>
                <div className="phase-grid"><div className="phase"><div className="pn">01</div><h4>Diagnose</h4><p>Assess HR maturity, gaps and priorities against business goals.</p></div><div className="phase"><div className="pn">02</div><h4>Design</h4><p>Build the operating model, policies, frameworks and plans.</p></div><div className="phase"><div className="pn">03</div><h4>Deliver</h4><p>Run recruitment, learning and operations to defined service levels.</p></div><div className="phase"><div className="pn">04</div><h4>Measure</h4><p>Track adherence, compliance and outcomes through dashboards.</p></div></div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>Typical deliverables</h2>
                <div className="deliverables"><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>HR operating model and policies</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Recruitment delivery and pipelines</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Learning frameworks and LMS rollout</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Performance and competency frameworks</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>HR analytics dashboards</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>HR due-diligence and integration support</span></div></div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>Relevant industries</h2>
                <div className="chips"><span className="chip">Infrastructure</span><span className="chip">Renewable energy</span><span className="chip">Engineering & EPC</span><span className="chip">Automotive</span><span className="chip">Manufacturing</span><span className="chip">Technology & IT/ITeS</span><span className="chip">Logistics</span><span className="chip">Real estate</span><span className="chip">Hospitality</span><span className="chip">Healthcare & pharma</span><span className="chip">FMCG & retail</span><span className="chip">Oil & gas</span><span className="chip">Aviation</span><span className="chip">Start-ups & e-commerce</span></div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>Selected experience &amp; credentials</h2>
                <div className="callout">Led by an HR partner with 15+ years in a listed manufacturing environment — PAN-India learning governance, full-cycle recruitment across four zones, SAP HR/SuccessFactors payroll and compliance, and reported outcomes including 95% mandatory-training compliance and 75% open-role closure.</div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">Selected clients</p>
                  <div className="logo-marquee" aria-label="Selected clients"><div className="logo-track"><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Egis"><span>Egis</span><img src="/assets/logos/egis.png" alt="Egis" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Egis"><span>Egis</span><img src="/assets/logos/egis.png" alt="Egis" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div></div>
                </div>
              </section>


              <section className="svc-block" id="connected">
                <h2><span className="n">9</span>Connected services</h2>
                <div className="connected"><a href="/india-entry"><strong>India Entry: One-Stop Business Establishment</strong><span>Related capability</span></a><a href="/cfo-finance-transformation"><strong>CFO & Finance Transformation</strong><span>Related capability</span></a><a href="/risk-internal-audit"><strong>Risk, Internal Audit & Controls</strong><span>Related capability</span></a></div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>Discuss Human Capital & HR Advisory with our team</h2>
                  <p>Tell us your situation and we'll map the right scope, team and approach for your business.</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Human%20Capital%20&%20HR%20Advisory"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Enquire — info@taggroup.in</a>
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
