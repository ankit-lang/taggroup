
"use client";
import React, { useState } from 'react';

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Do we need transfer pricing support if our intercompany transactions are small?",
      a: "Most jurisdictions apply the arm's length principle to every related-party transaction, while documentation and filing obligations depend on local thresholds. A health check confirms what applies to you and keeps the effort proportionate."
    },
    {
      q: "How often should benchmarking be refreshed?",
      a: "Financial data should be updated annually, with a fresh comparable search typically every few years — or sooner when the business, the transaction or the market changes materially."
    },
    {
      q: "What is the difference between a TP policy and an intercompany agreement?",
      a: "The policy sets the method and pricing logic for the group; the agreement is the legal contract between two entities that puts that logic into effect. Both should match how the entities actually operate."
    },
    {
      q: "Can you work behind our firm's brand?",
      a: "Yes. We provide confidential, white-label delivery for tax, legal and consulting firms, integrating with your templates, review process and client timelines."
    },
    {
      q: "Which jurisdictions do you cover?",
      a: "We prepare documentation for India, the UAE, the Netherlands, Luxembourg, Singapore, Australia and many others from our India-based hub, coordinating with local advisers where local sign-off is required."
    }
  ];

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/tp.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <a href="/services">Services</a> / <span>Global Transfer Pricing</span></div>
          <span className="eyebrow">Service Portfolio · Flagship capability</span>
          <h1>Global Transfer Pricing</h1>
          <p>The complete transfer pricing lifecycle — from first health check to audit defence — delivered from India for multinational groups and the advisory firms that serve them.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>On this page</h5>
              <a href="#proposition">Service proposition</a>
              <a href="#lifecycle">8 Core services</a>
              <a href="#situations">When it's needed</a>
              <a href="#who">Who it's for</a>
              <a href="#scope">Scope of assistance</a>
              <a href="#jurisdictions">Jurisdictional focus</a>
              <a href="#approach">Our approach</a>
              <a href="#engagement">Engagement options</a>
              <a href="#tools">Databases &amp; tools</a>
              <a href="#deliverables">Typical deliverables</a>
              <a href="#credentials">Experience &amp; credentials</a>
              <a href="#faqs">FAQs</a>
              <a href="#pdf-portfolio">PDF Portfolio</a>
              <a href="#contacts">Key contacts</a>
              <a href="#cta">Enquire</a>

              <div className="side-card" style={{ "marginTop": "26px" }}>
                <h5>Lead partners</h5>
                <p className="lead-note">Speak directly with the partners who lead this practice.</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="Gaurav Sharma" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>Gaurav Sharma</strong><span>Managing Partner</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/k-vishnu">
                  <span className="pmini-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="K. Vishnu Sharma" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</span>
                  <span className="pmini-info"><strong>K. Vishnu Sharma</strong><span>Partner</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="btn btn-primary" href="/contact?service=Global%20Transfer%20Pricing" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Enquire</a>
              </div>
              
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>Service portfolio PDF</h5>
                <p className="lead-note">Download or view the official 4-page portfolio document.</p>
                <a className="btn btn-ghost" href="/assets/service-pdfs/global-transfer-pricing.pdf" download style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> Download PDF</a>
                <a href="#pdf-portfolio" style={{ display: 'inline-block', marginTop: '10px', fontSize: '0.84rem', color: 'var(--accent)', textDecoration: 'underline' }}>View embedded PDF below</a>
              </div>
            </aside>
            
            <nav className="jump-chips" aria-label="On this page">
              <a href="#proposition">Service proposition</a>
              <a href="#lifecycle">8 Core services</a>
              <a href="#situations">When it's needed</a>
              <a href="#who">Who it's for</a>
              <a href="#scope">Scope of assistance</a>
              <a href="#jurisdictions">Jurisdictional focus</a>
              <a href="#approach">Our approach</a>
              <a href="#engagement">Engagement options</a>
              <a href="#tools">Databases &amp; tools</a>
              <a href="#deliverables">Typical deliverables</a>
              <a href="#credentials">Experience &amp; credentials</a>
              <a href="#faqs">FAQs</a>
              <a href="#pdf-portfolio">PDF Portfolio</a>
              <a href="#contacts">Key contacts</a>
              <a href="#cta">Enquire</a>
            </nav>
            
            <div>
              <div style={{ "marginBottom": "34px" }}>
                <figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/advisory.svg')" }}>
                  <img src="/assets/photos/services/global-transfer-pricing.jpg" alt="Global Transfer Pricing" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <figcaption className="ph-cap"><strong>Global Transfer Pricing</strong><span>Flagship capability</span></figcaption>
                </figure>
              </div>

              {/* Section 1: Service Proposition */}
              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>Service proposition</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>
                  Transfer pricing is no longer an annual documentation exercise. Tax administrations in India, the UAE, Europe and Asia now test the substance behind every intercompany price, and multinational groups need policies, agreements, analysis and files that tell one consistent story. TAG Group covers the full lifecycle in one team: we assess where you stand, design the policy, run the economics, document it in every jurisdiction, file what is due, and stand behind the work when it is examined. Delivery runs from our India-based Centre of Excellence with partner-led review, common information requests and defined milestones — direct to corporate groups, co-sourced with in-house teams, or as confidential white-label support for overseas tax, legal and consulting firms.
                </p>
                <div className="excl-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h0" /></svg>
                  <span>APA and MAP remain excluded, and TAG does not issue Form 3CEB certification; documentation and technical support are provided. Delivery is coordinated with local advisers where required, with a defined review process and secure information handling.</span>
                </div>
              </section>

              {/* Section 2: One Lifecycle - Eight Services */}
              <section className="svc-block" id="lifecycle">
                <h2><span className="n">2</span>One lifecycle — eight services</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '18px', marginTop: '20px' }}>
                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>01</div>
                    <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>TP Health Check &amp; Impact Assessment</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Map intercompany flows, profile each entity, test current pricing at a high level and size the exposure — with a prioritised roadmap.
                    </p>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>02</div>
                    <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>Policy Design &amp; Structuring</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Group TP policy, pricing models, SOPs and governance, aligned to the value chain and the commercial plan.
                    </p>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>03</div>
                    <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>Functional &amp; Economic Analysis</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      FAR analysis, choice of the most appropriate method, tested-party selection and arm's length ranges from global databases.
                    </p>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>04</div>
                    <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>Intercompany Agreements</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Drafting and refreshing agreements so that contracts, conduct and pricing say the same thing.
                    </p>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>05</div>
                    <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>Documentation</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Master File, Local File and multi-country files to a common standard, adapted to each jurisdiction.
                    </p>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>06</div>
                    <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>Compliance &amp; Filings</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Accountant's-report documentation, Master File and CbCR forms in India, the UAE TP disclosure, and CbCR notifications and reports.
                    </p>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>07</div>
                    <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>Financial Transactions &amp; Intangibles</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Loans, guarantees, cash pooling, royalties and IP — with valuation support from our Valuation practice.
                    </p>
                  </div>

                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: 'var(--accent)', fontWeight: 600, marginBottom: '6px' }}>08</div>
                    <h4 style={{ fontSize: '1.02rem', marginBottom: '8px', color: 'var(--heading)' }}>Audit Defence &amp; Dispute Support</h4>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                      Pre-audit readiness, responses to TP queries and assessments, and support through APA and appeal processes.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3: Business Situations */}
              <section className="svc-block" id="situations">
                <h2><span className="n">3</span>Business situations that trigger the need</h2>
                <ul className="check-list">
                  <li>You have intercompany transactions but no written TP policy or agreements</li>
                  <li>A new jurisdiction, restructuring, financing or IP transfer changes how value moves in the group</li>
                  <li>UAE Corporate Tax has brought your UAE entities into the transfer pricing net</li>
                  <li>Documentation, disclosures and CbCR must be produced consistently across several countries</li>
                  <li>A tax administration has opened a TP query, audit or assessment</li>
                  <li>An advisory firm needs reliable, confidential TP delivery capacity without adding headcount</li>
                  <li>In-house tax teams that need surge capacity, deputation or a second review</li>
                </ul>
              </section>

              {/* Section 4: Who this service is for */}
              <section className="svc-block" id="who">
                <h2><span className="n">4</span>Who this service is for</h2>
                <ul className="check-list two">
                  <li>Multinational groups with entities in India, the UAE, Europe, Asia or Australia</li>
                  <li>Indian groups with outbound subsidiaries and cross-border service, IP or financing flows</li>
                  <li>Overseas tax, legal and consulting firms seeking an India-based delivery partner</li>
                </ul>
              </section>

              {/* Section 5: Detailed scope of assistance */}
              <section className="svc-block" id="scope">
                <h2><span className="n">5</span>Detailed scope of assistance</h2>
                
                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Planning &amp; policy</h4>
                  <ul className="check-list two">
                    <li>TP health check and risk exposure assessment</li>
                    <li>Group TP policy, pricing models and SOPs</li>
                    <li>Cross-border transaction structuring and business restructurings</li>
                    <li>Intercompany agreements — drafting, review and annual refresh</li>
                    <li>Year-end true-ups and pricing adjustments</li>
                  </ul>
                </div>

                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Analysis &amp; benchmarking</h4>
                  <ul className="check-list two">
                    <li>Functional, asset and risk (FAR) analysis</li>
                    <li>Most appropriate method and tested-party selection</li>
                    <li>Comparable searches, screening and arm's length ranges</li>
                    <li>Royalty, interest-rate and guarantee-fee benchmarking</li>
                    <li>Remuneration benchmarking for connected persons</li>
                  </ul>
                </div>

                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Documentation &amp; compliance</h4>
                  <ul className="check-list two">
                    <li>Master File and Local File, contemporaneous and audit-ready</li>
                    <li>Multi-country documentation coordinated from one hub</li>
                    <li>India: accountant's-report documentation, Master File and CbCR forms</li>
                    <li>UAE: TP disclosure form, Local / Master File and CbCR</li>
                    <li>Deputation and second-review support for in-house teams</li>
                  </ul>
                </div>

                <div style={{ "marginBottom": "22px" }}>
                  <h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>Controversy &amp; specialist areas</h4>
                  <ul className="check-list two">
                    <li>Pre-audit health check and documentation alignment</li>
                    <li>Responses to TP queries, audits and assessments</li>
                    <li>Support with unilateral and bilateral APA applications</li>
                    <li>Support through appeals, working with our tax practice</li>
                    <li>Financial transactions, intangibles and TP-related valuations</li>
                  </ul>
                </div>
              </section>

              {/* Section 6: Jurisdictional focus */}
              <section className="svc-block" id="jurisdictions">
                <h2><span className="n">6</span>Jurisdictional focus</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '18px', marginTop: '20px' }}>
                  <div style={{ background: 'var(--mist-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '14px', fontSize: '1.08rem', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>India</h4>
                    <ul className="check-list">
                      <li>Accountant's report (Form 3CEB) documentation support</li>
                      <li>Master File (Form 3CEAA) and CbCR (Forms 3CEAC / 3CEAD)</li>
                      <li>Safe-harbour evaluation and TP assessments</li>
                    </ul>
                  </div>

                  <div style={{ background: 'var(--mist-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '14px', fontSize: '1.08rem', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>UAE</h4>
                    <ul className="check-list">
                      <li>Arm's length compliance under UAE Corporate Tax</li>
                      <li>TP disclosure form, Local File and Master File</li>
                      <li>Connected-person remuneration — via our UAE Desk</li>
                    </ul>
                  </div>

                  <div style={{ background: 'var(--mist-50)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px' }}>
                    <h4 style={{ color: 'var(--accent)', marginBottom: '14px', fontSize: '1.08rem', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>Europe, Asia &amp; Australia</h4>
                    <ul className="check-list">
                      <li>Netherlands, Luxembourg, Singapore and Australia files</li>
                      <li>OECD-aligned Local and Master Files</li>
                      <li>Coordination with local advisers where required</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 7: Engagement approach */}
              <section className="svc-block" id="approach">
                <h2><span className="n">7</span>Engagement approach &amp; phases</h2>
                <div className="phase-grid">
                  <div className="phase">
                    <div className="pn">01</div>
                    <h4>Diagnose</h4>
                    <p>Map transactions and entities; assess the current position and the exposure.</p>
                  </div>
                  <div className="phase">
                    <div className="pn">02</div>
                    <h4>Design</h4>
                    <p>Set or refine the policy, method and agreements that the analysis will support.</p>
                  </div>
                  <div className="phase">
                    <div className="pn">03</div>
                    <h4>Analyse</h4>
                    <p>Run FAR, benchmarking and financial analysis to establish arm's length outcomes.</p>
                  </div>
                  <div className="phase">
                    <div className="pn">04</div>
                    <h4>Document &amp; file</h4>
                    <p>Prepare files and disclosures to a common standard, on the local calendar.</p>
                  </div>
                  <div className="phase">
                    <div className="pn">05</div>
                    <h4>Implement</h4>
                    <p>Embed pricing in systems, SOPs and year-end adjustments; train finance teams.</p>
                  </div>
                  <div className="phase">
                    <div className="pn">06</div>
                    <h4>Defend</h4>
                    <p>Stand behind the work through queries, audits, APAs and appeals.</p>
                  </div>
                </div>
              </section>

              {/* Section 8: Engagement models */}
              <section className="svc-block" id="engagement">
                <h2><span className="n">8</span>Engagement models</h2>
                <div className="phase-grid">
                  <div className="phase">
                    <div className="pn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l4-4 5 3 3-2 8 5M11 11l2 2M14 9l2 2M6 8v8M22 9v8" /></svg>
                    </div>
                    <h4>Direct engagements</h4>
                    <p>Direct engagements with corporate groups managing multi-country transfer pricing.</p>
                  </div>
                  <div className="phase">
                    <div className="pn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l4-4 5 3 3-2 8 5M11 11l2 2M14 9l2 2M6 8v8M22 9v8" /></svg>
                    </div>
                    <h4>Co-sourced delivery</h4>
                    <p>Co-sourced delivery alongside in-house tax teams, including deputation.</p>
                  </div>
                  <div className="phase">
                    <div className="pn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l4-4 5 3 3-2 8 5M11 11l2 2M14 9l2 2M6 8v8M22 9v8" /></svg>
                    </div>
                    <h4>White-label support</h4>
                    <p>Confidential white-label support for overseas tax, legal and consulting firms.</p>
                  </div>
                  <div className="phase">
                    <div className="pn">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12l4-4 5 3 3-2 8 5M11 11l2 2M14 9l2 2M6 8v8M22 9v8" /></svg>
                    </div>
                    <h4>Annual TP retainers</h4>
                    <p>Annual retainers covering policy, documentation, filings and year-round queries.</p>
                  </div>
                </div>
              </section>

              {/* Section 9: Databases & Tools */}
              <section className="svc-block" id="tools">
                <h2><span className="n">9</span>Databases &amp; tools</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>We utilize tier-one global financial, benchmarking and transaction databases for economic analysis:</p>
                <div className="chips">
                  <span className="chip accent">TP Catalyst</span>
                  <span className="chip accent">Orbis</span>
                  <span className="chip accent">S&amp;P Capital IQ</span>
                  <span className="chip accent">RoyaltyStat / RoyaltyRange</span>
                  <span className="chip accent">Loan Connector</span>
                  <span className="chip accent">Refinitiv Eikon</span>
                  <span className="chip accent">Prowess &amp; Capitaline</span>
                </div>
              </section>

              {/* Section 10: Typical deliverables */}
              <section className="svc-block" id="deliverables">
                <h2><span className="n">10</span>Typical deliverables</h2>
                <div className="deliverables">
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>TP health-check report and roadmap</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Group TP policy, pricing models and SOPs</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Intercompany agreements</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Benchmarking studies and economic analysis</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Master File, Local File and multi-country files</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Statutory TP forms, disclosures and CbCR</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Audit-response and APA submissions</span></div>
                  <div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Management training and year-end true-up memos</span></div>
                </div>
              </section>

              {/* Section 11: Selected experience & credentials */}
              <section className="svc-block" id="credentials">
                <h2><span className="n">11</span>Selected experience &amp; credentials</h2>
                <div className="callout">
                  TAG Group has transfer pricing experience across the Netherlands, Luxembourg, Singapore, UAE, Australia, India and many others. Our partners have led transfer pricing and international tax at Big Four firms and headed tax for multinational groups across India and Asia-Pacific — serving multinational groups directly and acting as the back-end delivery partner for overseas advisory firms.
                </div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">Selected clients</p>
                  <div className="logo-marquee" aria-label="Selected clients">
                    <div className="logo-track">
                      <div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                      <div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 12: Frequently Asked Questions */}
              <section className="svc-block" id="faqs">
                <h2><span className="n">12</span>Frequently asked questions</h2>
                <div style={{ display: 'grid', gap: '14px', marginTop: '20px' }}>
                  {faqs.map((faq, idx) => (
                    <div 
                      key={idx} 
                      style={{ 
                        background: '#fff', 
                        border: '1px solid var(--border)', 
                        borderRadius: 'var(--radius)', 
                        overflow: 'hidden',
                        transition: 'all 0.2s ease' 
                      }}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '18px 22px',
                          background: 'none',
                          border: 'none',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer',
                          fontSize: '0.98rem',
                          fontWeight: 600,
                          color: 'var(--heading)'
                        }}
                      >
                        <span>{faq.q}</span>
                        <svg 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          style={{ 
                            width: '18px', 
                            height: '18px', 
                            transform: openFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            flexShrink: 0,
                            marginLeft: '12px',
                            color: 'var(--accent)'
                          }}
                        >
                          <path d="M6 9l6 6 6-6"/>
                        </svg>
                      </button>
                      {openFaq === idx && (
                        <div style={{ padding: '0 22px 20px', color: 'var(--charcoal-700)', fontSize: '0.93rem', lineHeight: 1.6, borderTop: '1px solid var(--mist-100)', paddingTop: '14px' }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 13: Embedded PDF Portfolio Viewer */}
              <section className="svc-block" id="pdf-portfolio">
                <h2><span className="n">13</span>Service portfolio document</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '18px' }}>
                  View or download the official 4-page Global Transfer Pricing portfolio overview document below.
                </p>
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-sm)',
                  background: '#fff'
                }}>
                  <div style={{
                    padding: '16px 20px',
                    background: 'var(--mist-50)',
                    borderBottom: '1px solid var(--border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
                        <path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/>
                      </svg>
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.95rem', color: 'var(--heading)' }}>Global Transfer Pricing Portfolio.pdf</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>4 Pages · Official Service Portfolio Document</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                      <a 
                        className="btn btn-ghost" 
                        href="/assets/service-pdfs/global-transfer-pricing.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ padding: '8px 14px', fontSize: '0.86rem' }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginRight: 6 }}>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Open full screen
                      </a>
                      <a 
                        className="btn btn-primary" 
                        href="/assets/service-pdfs/global-transfer-pricing.pdf" 
                        download
                        style={{ padding: '8px 16px', fontSize: '0.86rem' }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16, marginRight: 6 }}>
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                        Download PDF
                      </a>
                    </div>
                  </div>
                  <div style={{ width: '100%', height: '750px', background: '#eef2f5' }}>
                    <iframe
                      src="/assets/service-pdfs/global-transfer-pricing.pdf"
                      title="Global Transfer Pricing Service Portfolio PDF"
                      style={{ width: '100%', height: '100%', border: 'none' }}
                    />
                  </div>
                </div>
              </section>

              {/* Section 14: Key Contacts */}
              <section className="svc-block" id="contacts">
                <h2><span className="n">14</span>Key contacts</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px', marginTop: '20px' }}>
                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--mist-100)', overflow: 'hidden', flexShrink: 0 }}>
                      <img src="/assets/photos/people/gaurav.jpg" alt="Gaurav Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.02rem', color: 'var(--heading)' }}>Gaurav Sharma</h4>
                      <p style={{ margin: '2px 0 6px', fontSize: '0.84rem', color: 'var(--accent)', fontWeight: 500 }}>Managing Partner</p>
                      <a href="mailto:gaurav@taggroup.in" style={{ fontSize: '0.86rem', color: 'var(--charcoal-700)', display: 'block' }}>gaurav@taggroup.in</a>
                      <a href="tel:+918860716777" style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>+91 88607 16777</a>
                    </div>
                  </div>
                  <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '22px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'var(--mist-100)', overflow: 'hidden', flexShrink: 0 }}>
                      <img src="/assets/photos/people/k-vishnu.jpg" alt="K. Vishnu Sharma" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => (e.currentTarget.style.display = 'none')} />
                    </div>
                    <div>
                      <h4 style={{ margin: 0, fontSize: '1.02rem', color: 'var(--heading)' }}>K. Vishnu Sharma</h4>
                      <p style={{ margin: '2px 0 6px', fontSize: '0.84rem', color: 'var(--accent)', fontWeight: 500 }}>Partner — Accounting &amp; Finance</p>
                      <a href="mailto:k.vishnu@taggroup.in" style={{ fontSize: '0.86rem', color: 'var(--charcoal-700)', display: 'block' }}>k.vishnu@taggroup.in</a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 15: Connected Services */}
              <section className="svc-block" id="connected">
                <h2><span className="n">15</span>Connected services</h2>
                <div className="connected">
                  <a href="/services/tax-cross-border"><strong>Tax &amp; Cross-Border Advisory</strong><span>Related capability</span></a>
                  <a href="/services/international-business"><strong>International Business</strong><span>Related capability</span></a>
                  <a href="/services/deals-valuation"><strong>Deals, Valuation &amp; Transaction Support</strong><span>Related capability</span></a>
                </div>
              </section>

              {/* Section 16: CTA */}
              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>Discuss Global Transfer Pricing with our team</h2>
                  <p>Tell us your situation and we'll map the right scope, team and approach for your business.</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Global%20Transfer%20Pricing"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Enquire — contact@taggroup.in</a>
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

