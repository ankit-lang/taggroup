
const fs = require('fs');

const updateDeals = () => {
  let content = fs.readFileSync('src/app/(public)/services/deals-valuation/page.tsx', 'utf8');
  content = content.replace(`import React from 'react';`, `import React from 'react';\nimport { useI18n } from '@/lib/i18n';`);
  content = content.replace(`export default function Page() {`, `export default function Page() {\n  const { t } = useI18n();`);

  content = content.replace(`>Home<`, `>{t('services.deals.breadcrumb.home')}<`);
  content = content.replace(`>Services<`, `>{t('services.deals.breadcrumb.services')}<`);
  content = content.replace(`<span>Deals, Valuation & Transaction Support</span>`, `<span>{t('services.deals.hero.title')}</span>`);
  content = content.replace(`<span className="eyebrow">Transaction advisory</span>`, `<span className="eyebrow">{t('services.deals.hero.eyebrow')}</span>`);
  content = content.replace(`<h1>Deals, Valuation & Transaction Support</h1>`, `<h1>{t('services.deals.hero.title')}</h1>`);
  content = content.replace(`<p>M&A, due diligence, valuation and transaction support across the deal lifecycle — without regulated capital-market intermediation.</p>`, `<p>{t('services.deals.hero.desc')}</p>`);

  content = content.replace(`<h5>On this page</h5>`, `<h5>{t('services.deals.nav.on_this_page')}</h5>`);
  content = content.replace(`>Service proposition<`, `>{t('services.deals.nav.proposition')}<`).replace(`>Service proposition<`, `>{t('services.deals.nav.proposition')}<`);
  content = content.replace(`>When it's needed<`, `>{t('services.deals.nav.situations')}<`).replace(`>When it's needed<`, `>{t('services.deals.nav.situations')}<`);
  content = content.replace(`>Who it's for<`, `>{t('services.deals.nav.who')}<`).replace(`>Who it's for<`, `>{t('services.deals.nav.who')}<`);
  content = content.replace(`>Scope of assistance<`, `>{t('services.deals.nav.scope')}<`).replace(`>Scope of assistance<`, `>{t('services.deals.nav.scope')}<`);
  content = content.replace(`>Our approach<`, `>{t('services.deals.nav.approach')}<`).replace(`>Our approach<`, `>{t('services.deals.nav.approach')}<`);
  content = content.replace(`>Typical deliverables<`, `>{t('services.deals.nav.deliverables')}<`).replace(`>Typical deliverables<`, `>{t('services.deals.nav.deliverables')}<`);
  content = content.replace(`>Industries<`, `>{t('services.deals.nav.industries')}<`).replace(`>Industries<`, `>{t('services.deals.nav.industries')}<`);
  content = content.replace(`>Experience<`, `>{t('services.deals.nav.experience')}<`).replace(`>Experience<`, `>{t('services.deals.nav.experience')}<`);
  content = content.replace(`>Connected services<`, `>{t('services.deals.nav.connected')}<`).replace(`>Connected services<`, `>{t('services.deals.nav.connected')}<`);
  content = content.replace(`>Enquire<`, `>{t('services.deals.nav.enquire')}<`).replace(`>Enquire<`, `>{t('services.deals.nav.enquire')}<`);

  content = content.replace(`<h5>Lead partners</h5>`, `<h5>{t('services.deals.nav.lead_partners')}</h5>`);
  content = content.replace(`<p className="lead-note">Speak directly with the partners who lead this practice.</p>`, `<p className="lead-note">{t('services.deals.nav.lead_note')}</p>`);
  
  content = content.replace(`<strong>Gaurav Sharma</strong><span>Managing Partner</span>`, `<strong>{t('services.deals.partners.gaurav.name')}</strong><span>{t('services.deals.partners.gaurav.title')}</span>`);
  content = content.replace(`<strong>K. Vishnu Sharma</strong><span>Partner</span>`, `<strong>{t('services.deals.partners.vishnu.name')}</strong><span>{t('services.deals.partners.vishnu.title')}</span>`);
  content = content.replace(`<strong>Manuj Singhal</strong><span>Associate Partner</span>`, `<strong>{t('services.deals.partners.manuj.name')}</strong><span>{t('services.deals.partners.manuj.title')}</span>`);
  
  content = content.replace(` Enquire</a>`, ` {t('services.deals.nav.enquire_btn')}</a>`);
  content = content.replace(`<h5>Service portfolio</h5>`, `<h5>{t('services.deals.nav.portfolio')}</h5>`);
  content = content.replace(`<p className="lead-note">Download a one-page summary of this portfolio.</p>`, `<p className="lead-note">{t('services.deals.nav.download_note')}</p>`);
  content = content.replace(` Download portfolio (PDF)</a>`, ` {t('services.deals.nav.download_btn')}</a>`);

  content = content.replace(`<strong>Deals, Valuation & Transaction Support</strong><span>Transaction advisory</span>`, `<strong>{t('services.deals.hero.title')}</strong><span>{t('services.deals.hero.eyebrow')}</span>`);

  content = content.replace(`Service proposition</h2>`, `{t('services.deals.prop.title')}</h2>`);
  content = content.replace(`Transactions succeed or fail on preparation and discipline. TAG supports buy-side and sell-side transactions with structuring, diligence, valuation and project management — bringing tax, finance and legal-coordination expertise to the table so decisions are made on clear information.</p>`, `{t('services.deals.prop.desc')}</p>`);

  content = content.replace(`Business situations that trigger the need</h2>`, `{t('services.deals.sit.title')}</h2>`);
  content = content.replace(`<li>You are acquiring, divesting or merging a business</li>`, `<li>{t('services.deals.sit.l1')}</li>`);
  content = content.replace(`<li>A transaction needs financial and tax due diligence</li>`, `<li>{t('services.deals.sit.l2')}</li>`);
  content = content.replace(`<li>An equity, ESOP or complex-security valuation is required</li>`, `<li>{t('services.deals.sit.l3')}</li>`);
  content = content.replace(`<li>A restructuring or JV needs structuring and documentation</li>`, `<li>{t('services.deals.sit.l4')}</li>`);
  content = content.replace(`<li>You are preparing finance and processes for an IPO</li>`, `<li>{t('services.deals.sit.l5')}</li>`);
  content = content.replace(`<li>A deal needs data-room and project management discipline</li>`, `<li>{t('services.deals.sit.l6')}</li>`);

  content = content.replace(`Who this service is for</h2>`, `{t('services.deals.who.title')}</h2>`);
  content = content.replace(`<li>Acquirers, sellers and merging parties</li>`, `<li>{t('services.deals.who.l1')}</li>`);
  content = content.replace(`<li>Founders and promoters in a transaction</li>`, `<li>{t('services.deals.who.l2')}</li>`);
  content = content.replace(`<li>Investee companies preparing for diligence</li>`, `<li>{t('services.deals.who.l3')}</li>`);
  content = content.replace(`<li>Boards evaluating restructuring or JV options</li>`, `<li>{t('services.deals.who.l4')}</li>`);

  content = content.replace(`Detailed scope of assistance</h2>`, `{t('services.deals.scope.title')}</h2>`);
  content = content.replace(`Transaction advisory</h4>`, `{t('services.deals.scope.h1')}</h4>`);
  content = content.replace(`<li>M&A strategy and transaction advisory</li>`, `<li>{t('services.deals.scope.h1_l1')}</li>`);
  content = content.replace(`<li>Transaction structuring and restructuring</li>`, `<li>{t('services.deals.scope.h1_l2')}</li>`);
  content = content.replace(`<li>Buy-side and sell-side transaction support</li>`, `<li>{t('services.deals.scope.h1_l3')}</li>`);
  content = content.replace(`<li>Deal negotiation support</li>`, `<li>{t('services.deals.scope.h1_l4')}</li>`);
  content = content.replace(`<li>Transaction documentation review</li>`, `<li>{t('services.deals.scope.h1_l5')}</li>`);
  content = content.replace(`Diligence</h4>`, `{t('services.deals.scope.h2')}</h4>`);
  content = content.replace(`<li>Financial and tax due diligence</li>`, `<li>{t('services.deals.scope.h2_l1')}</li>`);
  content = content.replace(`<li>Legal and secretarial due diligence coordination</li>`, `<li>{t('services.deals.scope.h2_l2')}</li>`);
  content = content.replace(`<li>Data-room and transaction-project management</li>`, `<li>{t('services.deals.scope.h2_l3')}</li>`);
  content = content.replace(`Valuation</h4>`, `{t('services.deals.scope.h3')}</h4>`);
  content = content.replace(`<li>Business and equity valuation</li>`, `<li>{t('services.deals.scope.h3_l1')}</li>`);
  content = content.replace(`<li>Intangible and complex-security valuation</li>`, `<li>{t('services.deals.scope.h3_l2')}</li>`);
  content = content.replace(`<li>Financial modelling and scenario analysis</li>`, `<li>{t('services.deals.scope.h3_l3')}</li>`);
  content = content.replace(`<li>ESOP structuring and valuation</li>`, `<li>{t('services.deals.scope.h3_l4')}</li>`);
  content = content.replace(`Structuring & integration</h4>`, `{t('services.deals.scope.h4')}</h4>`);
  content = content.replace(`<li>Corporate restructuring</li>`, `<li>{t('services.deals.scope.h4_l1')}</li>`);
  content = content.replace(`<li>Joint ventures and shareholder arrangements</li>`, `<li>{t('services.deals.scope.h4_l2')}</li>`);
  content = content.replace(`<li>Post-deal integration</li>`, `<li>{t('services.deals.scope.h4_l3')}</li>`);
  content = content.replace(`<li>IPO readiness and finance-process preparedness</li>`, `<li>{t('services.deals.scope.h4_l4')}</li>`);

  content = content.replace(`Engagement approach &amp; phases</h2>`, `{t('services.deals.approach.title')}</h2>`);
  content = content.replace(`<h4>Prepare</h4><p>Define objectives, structure and the information needed to transact.</p>`, `<h4>{t('services.deals.approach.p1_t')}</h4><p>{t('services.deals.approach.p1_d')}</p>`);
  content = content.replace(`<h4>Diligence & value</h4><p>Run diligence and valuation to surface risks and support pricing.</p>`, `<h4>{t('services.deals.approach.p2_t')}</h4><p>{t('services.deals.approach.p2_d')}</p>`);
  content = content.replace(`<h4>Execute</h4><p>Support negotiation, documentation review and closing discipline.</p>`, `<h4>{t('services.deals.approach.p3_t')}</h4><p>{t('services.deals.approach.p3_d')}</p>`);
  content = content.replace(`<h4>Integrate</h4><p>Support post-deal finance integration and value capture.</p>`, `<h4>{t('services.deals.approach.p4_t')}</h4><p>{t('services.deals.approach.p4_d')}</p>`);

  content = content.replace(`Typical deliverables</h2>`, `{t('services.deals.deliv.title')}</h2>`);
  content = content.replace(`<span>Due diligence reports (financial & tax)</span>`, `<span>{t('services.deals.deliv.l1')}</span>`);
  content = content.replace(`<span>Valuation reports and models</span>`, `<span>{t('services.deals.deliv.l2')}</span>`);
  content = content.replace(`<span>Deal structuring notes</span>`, `<span>{t('services.deals.deliv.l3')}</span>`);
  content = content.replace(`<span>Data-room and transaction management</span>`, `<span>{t('services.deals.deliv.l4')}</span>`);
  content = content.replace(`<span>Restructuring and JV documentation support</span>`, `<span>{t('services.deals.deliv.l5')}</span>`);
  content = content.replace(`<span>IPO-readiness assessments</span>`, `<span>{t('services.deals.deliv.l6')}</span>`);

  content = content.replace(`Relevant industries</h2>`, `{t('services.deals.ind.title')}</h2>`);
  content = content.replace(`<span className="chip">Infrastructure</span>`, `<span className="chip">{t('services.deals.ind.l1')}</span>`);
  content = content.replace(`<span className="chip">Renewable energy</span>`, `<span className="chip">{t('services.deals.ind.l2')}</span>`);
  content = content.replace(`<span className="chip">Engineering & EPC</span>`, `<span className="chip">{t('services.deals.ind.l3')}</span>`);
  content = content.replace(`<span className="chip">Automotive</span>`, `<span className="chip">{t('services.deals.ind.l4')}</span>`);
  content = content.replace(`<span className="chip">Manufacturing</span>`, `<span className="chip">{t('services.deals.ind.l5')}</span>`);
  content = content.replace(`<span className="chip">Technology & IT/ITeS</span>`, `<span className="chip">{t('services.deals.ind.l6')}</span>`);
  content = content.replace(`<span className="chip">Logistics</span>`, `<span className="chip">{t('services.deals.ind.l7')}</span>`);
  content = content.replace(`<span className="chip">Real estate</span>`, `<span className="chip">{t('services.deals.ind.l8')}</span>`);
  content = content.replace(`<span className="chip">Hospitality</span>`, `<span className="chip">{t('services.deals.ind.l9')}</span>`);
  content = content.replace(`<span className="chip">Healthcare & pharma</span>`, `<span className="chip">{t('services.deals.ind.l10')}</span>`);
  content = content.replace(`<span className="chip">FMCG & retail</span>`, `<span className="chip">{t('services.deals.ind.l11')}</span>`);
  content = content.replace(`<span className="chip">Oil & gas</span>`, `<span className="chip">{t('services.deals.ind.l12')}</span>`);
  content = content.replace(`<span className="chip">Aviation</span>`, `<span className="chip">{t('services.deals.ind.l13')}</span>`);
  content = content.replace(`<span className="chip">Start-ups & e-commerce</span>`, `<span className="chip">{t('services.deals.ind.l14')}</span>`);

  content = content.replace(`Selected experience &amp; credentials</h2>`, `{t('services.deals.cred.title')}</h2>`);
  content = content.replace(`Valuation is led by a CFA, FRM and Registered Valuer with 15+ years across business, intangible and complex-security valuation for global clients. Transaction experience spans 6+ acquisitions, 4+ divestitures and 3+ mergers, and support for QIP, bond issuance and acquisition due diligence.</div>`, `{t('services.deals.cred.callout')}</div>`);
  content = content.replace(`Selected clients</p>`, `{t('services.deals.cred.clients')}</p>`);

  content = content.replace(`Connected services</h2>`, `{t('services.deals.conn.title')}</h2>`);
  content = content.replace(`CFO & Finance Transformation</strong><span>Related capability</span>`, `{t('services.deals.conn.c1')}</strong><span>{t('services.deals.conn.rel')}</span>`);
  content = content.replace(`Tax & Cross-Border Advisory</strong><span>Related capability</span>`, `{t('services.deals.conn.c2')}</strong><span>{t('services.deals.conn.rel')}</span>`);
  content = content.replace(`Corporate, Legal, FEMA & Regulatory</strong><span>Related capability</span>`, `{t('services.deals.conn.c3')}</strong><span>{t('services.deals.conn.rel')}</span>`);
  content = content.replace(`Global Transfer Pricing</strong><span>Related capability</span>`, `{t('services.deals.conn.c4')}</strong><span>{t('services.deals.conn.rel')}</span>`);

  content = content.replace(`<h2>Discuss Deals, Valuation & Transaction Support with our team</h2>`, `<h2>{t('services.deals.cta.title')}</h2>`);
  content = content.replace(`<p>Tell us your situation and we'll map the right scope, team and approach for your business.</p>`, `<p>{t('services.deals.cta.desc')}</p>`);
  content = content.replace(` Enquire — info@taggroup.in</a>`, ` {t('services.deals.cta.btn1')}</a>`);
  content = content.replace(`Contact page</a>`, `{t('services.deals.cta.btn2')}</a>`);

  fs.writeFileSync('src/app/(public)/services/deals-valuation/page.tsx', content);
};

const updateHr = () => {
  let content = fs.readFileSync('src/app/(public)/services/human-capital-hr/page.tsx', 'utf8');
  content = content.replace(`import React from 'react';`, `import React from 'react';\nimport { useI18n } from '@/lib/i18n';`);
  content = content.replace(`export default function Page() {`, `export default function Page() {\n  const { t } = useI18n();`);

  content = content.replace(`>Home<`, `>{t('services.hr.breadcrumb.home')}<`);
  content = content.replace(`>Services<`, `>{t('services.hr.breadcrumb.services')}<`);
  content = content.replace(`<span>Human Capital & HR Advisory</span>`, `<span>{t('services.hr.hero.title')}</span>`);
  content = content.replace(`<span className="eyebrow">People & organisation</span>`, `<span className="eyebrow">{t('services.hr.hero.eyebrow')}</span>`);
  content = content.replace(`<h1>Human Capital & HR Advisory</h1>`, `<h1>{t('services.hr.hero.title')}</h1>`);
  content = content.replace(`<p>HR strategy, talent acquisition, learning and HR operations — building measurable people systems that scale.</p>`, `<p>{t('services.hr.hero.desc')}</p>`);

  content = content.replace(`<h5>On this page</h5>`, `<h5>{t('services.hr.nav.on_this_page')}</h5>`);
  content = content.replace(`>Service proposition<`, `>{t('services.hr.nav.proposition')}<`).replace(`>Service proposition<`, `>{t('services.hr.nav.proposition')}<`);
  content = content.replace(`>When it's needed<`, `>{t('services.hr.nav.situations')}<`).replace(`>When it's needed<`, `>{t('services.hr.nav.situations')}<`);
  content = content.replace(`>Who it's for<`, `>{t('services.hr.nav.who')}<`).replace(`>Who it's for<`, `>{t('services.hr.nav.who')}<`);
  content = content.replace(`>Scope of assistance<`, `>{t('services.hr.nav.scope')}<`).replace(`>Scope of assistance<`, `>{t('services.hr.nav.scope')}<`);
  content = content.replace(`>Our approach<`, `>{t('services.hr.nav.approach')}<`).replace(`>Our approach<`, `>{t('services.hr.nav.approach')}<`);
  content = content.replace(`>Typical deliverables<`, `>{t('services.hr.nav.deliverables')}<`).replace(`>Typical deliverables<`, `>{t('services.hr.nav.deliverables')}<`);
  content = content.replace(`>Industries<`, `>{t('services.hr.nav.industries')}<`).replace(`>Industries<`, `>{t('services.hr.nav.industries')}<`);
  content = content.replace(`>Experience<`, `>{t('services.hr.nav.experience')}<`).replace(`>Experience<`, `>{t('services.hr.nav.experience')}<`);
  content = content.replace(`>Connected services<`, `>{t('services.hr.nav.connected')}<`).replace(`>Connected services<`, `>{t('services.hr.nav.connected')}<`);
  content = content.replace(`>Enquire<`, `>{t('services.hr.nav.enquire')}<`).replace(`>Enquire<`, `>{t('services.hr.nav.enquire')}<`);

  content = content.replace(`<h5>Lead partners</h5>`, `<h5>{t('services.hr.nav.lead_partners')}</h5>`);
  content = content.replace(`<p className="lead-note">Speak directly with the partners who lead this practice.</p>`, `<p className="lead-note">{t('services.hr.nav.lead_note')}</p>`);
  
  content = content.replace(`<strong>Gaurav Sharma</strong><span>Managing Partner</span>`, `<strong>{t('services.hr.partners.gaurav.name')}</strong><span>{t('services.hr.partners.gaurav.title')}</span>`);
  content = content.replace(`<strong>K. Vishnu Sharma</strong><span>Partner</span>`, `<strong>{t('services.hr.partners.vishnu.name')}</strong><span>{t('services.hr.partners.vishnu.title')}</span>`);
  
  content = content.replace(` Enquire</a>`, ` {t('services.hr.nav.enquire_btn')}</a>`);
  content = content.replace(`<h5>Service portfolio</h5>`, `<h5>{t('services.hr.nav.portfolio')}</h5>`);
  content = content.replace(`<p className="lead-note">Download a one-page summary of this portfolio.</p>`, `<p className="lead-note">{t('services.hr.nav.download_note')}</p>`);
  content = content.replace(` Download portfolio (PDF)</a>`, ` {t('services.hr.nav.download_btn')}</a>`);

  content = content.replace(`<strong>Human Capital & HR Advisory</strong><span>People & organisation</span>`, `<strong>{t('services.hr.hero.title')}</strong><span>{t('services.hr.hero.eyebrow')}</span>`);

  content = content.replace(`Service proposition</h2>`, `{t('services.hr.prop.title')}</h2>`);
  content = content.replace(`People decisions determine whether a business can execute. TAG's HR advisory covers the full employee lifecycle — from organisation design and recruitment to learning, performance and HR operations — with a focus on measurable systems and disciplined delivery.</p>`, `{t('services.hr.prop.desc')}</p>`);

  content = content.replace(`Business situations that trigger the need</h2>`, `{t('services.hr.sit.title')}</h2>`);
  content = content.replace(`<li>You are building or scaling a team and need recruitment capacity</li>`, `<li>{t('services.hr.sit.l1')}</li>`);
  content = content.replace(`<li>HR policies, operations or payroll governance need structure</li>`, `<li>{t('services.hr.sit.l2')}</li>`);
  content = content.replace(`<li>A learning and capability programme needs designing</li>`, `<li>{t('services.hr.sit.l3')}</li>`);
  content = content.replace(`<li>Performance management needs a credible framework</li>`, `<li>{t('services.hr.sit.l4')}</li>`);
  content = content.replace(`<li>An acquisition requires HR due diligence and integration</li>`, `<li>{t('services.hr.sit.l5')}</li>`);
  content = content.replace(`<li>You need HR analytics and dashboards for leadership review</li>`, `<li>{t('services.hr.sit.l6')}</li>`);

  content = content.replace(`Who this service is for</h2>`, `{t('services.hr.who.title')}</h2>`);
  content = content.replace(`<li>Founders and leaders building teams</li>`, `<li>{t('services.hr.who.l1')}</li>`);
  content = content.replace(`<li>Businesses formalising the HR function</li>`, `<li>{t('services.hr.who.l2')}</li>`);
  content = content.replace(`<li>Groups integrating people post-acquisition</li>`, `<li>{t('services.hr.who.l3')}</li>`);
  content = content.replace(`<li>Organisations investing in capability and performance</li>`, `<li>{t('services.hr.who.l4')}</li>`);

  content = content.replace(`Detailed scope of assistance</h2>`, `{t('services.hr.scope.title')}</h2>`);
  content = content.replace(`Strategy & design</h4>`, `{t('services.hr.scope.h1')}</h4>`);
  content = content.replace(`<li>HR strategy and operating model</li>`, `<li>{t('services.hr.scope.h1_l1')}</li>`);
  content = content.replace(`<li>Organisation design</li>`, `<li>{t('services.hr.scope.h1_l2')}</li>`);
  content = content.replace(`<li>Workforce planning</li>`, `<li>{t('services.hr.scope.h1_l3')}</li>`);
  content = content.replace(`<li>Change-management support</li>`, `<li>{t('services.hr.scope.h1_l4')}</li>`);
  content = content.replace(`Talent acquisition</h4>`, `{t('services.hr.scope.h2')}</h4>`);
  content = content.replace(`<li>Talent acquisition and recruitment</li>`, `<li>{t('services.hr.scope.h2_l1')}</li>`);
  content = content.replace(`<li>Recruitment-process outsourcing</li>`, `<li>{t('services.hr.scope.h2_l2')}</li>`);
  content = content.replace(`<li>Leadership and critical-role hiring</li>`, `<li>{t('services.hr.scope.h2_l3')}</li>`);
  content = content.replace(`<li>Blue-collar and facility workforce solutions</li>`, `<li>{t('services.hr.scope.h2_l4')}</li>`);
  content = content.replace(`HR operations</h4>`, `{t('services.hr.scope.h3')}</h4>`);
  content = content.replace(`<li>HR policies and employee handbooks</li>`, `<li>{t('services.hr.scope.h3_l1')}</li>`);
  content = content.replace(`<li>HR operations and payroll governance</li>`, `<li>{t('services.hr.scope.h3_l2')}</li>`);
  content = content.replace(`<li>Statutory HR compliance</li>`, `<li>{t('services.hr.scope.h3_l3')}</li>`);
  content = content.replace(`<li>HR due diligence and post-acquisition integration</li>`, `<li>{t('services.hr.scope.h3_l4')}</li>`);
  content = content.replace(`Performance & learning</h4>`, `{t('services.hr.scope.h4')}</h4>`);
  content = content.replace(`<li>Performance-management systems</li>`, `<li>{t('services.hr.scope.h4_l1')}</li>`);
  content = content.replace(`<li>Competency frameworks</li>`, `<li>{t('services.hr.scope.h4_l2')}</li>`);
  content = content.replace(`<li>Learning-needs assessment</li>`, `<li>{t('services.hr.scope.h4_l3')}</li>`);
  content = content.replace(`<li>Learning and development programmes</li>`, `<li>{t('services.hr.scope.h4_l4')}</li>`);
  content = content.replace(`<li>Learning-management-system implementation</li>`, `<li>{t('services.hr.scope.h4_l5')}</li>`);
  content = content.replace(`<li>Leadership development</li>`, `<li>{t('services.hr.scope.h4_l6')}</li>`);
  content = content.replace(`Engagement & analytics</h4>`, `{t('services.hr.scope.h5')}</h4>`);
  content = content.replace(`<li>Employee engagement</li>`, `<li>{t('services.hr.scope.h5_l1')}</li>`);
  content = content.replace(`<li>Rewards and recognition frameworks</li>`, `<li>{t('services.hr.scope.h5_l2')}</li>`);
  content = content.replace(`<li>HR analytics and dashboards</li>`, `<li>{t('services.hr.scope.h5_l3')}</li>`);

  content = content.replace(`Engagement approach &amp; phases</h2>`, `{t('services.hr.approach.title')}</h2>`);
  content = content.replace(`<h4>Diagnose</h4><p>Assess HR maturity, gaps and priorities against business goals.</p>`, `<h4>{t('services.hr.approach.p1_t')}</h4><p>{t('services.hr.approach.p1_d')}</p>`);
  content = content.replace(`<h4>Design</h4><p>Build the operating model, policies, frameworks and plans.</p>`, `<h4>{t('services.hr.approach.p2_t')}</h4><p>{t('services.hr.approach.p2_d')}</p>`);
  content = content.replace(`<h4>Deliver</h4><p>Run recruitment, learning and operations to defined service levels.</p>`, `<h4>{t('services.hr.approach.p3_t')}</h4><p>{t('services.hr.approach.p3_d')}</p>`);
  content = content.replace(`<h4>Measure</h4><p>Track adherence, compliance and outcomes through dashboards.</p>`, `<h4>{t('services.hr.approach.p4_t')}</h4><p>{t('services.hr.approach.p4_d')}</p>`);

  content = content.replace(`Typical deliverables</h2>`, `{t('services.hr.deliv.title')}</h2>`);
  content = content.replace(`<span>HR operating model and policies</span>`, `<span>{t('services.hr.deliv.l1')}</span>`);
  content = content.replace(`<span>Recruitment delivery and pipelines</span>`, `<span>{t('services.hr.deliv.l2')}</span>`);
  content = content.replace(`<span>Learning frameworks and LMS rollout</span>`, `<span>{t('services.hr.deliv.l3')}</span>`);
  content = content.replace(`<span>Performance and competency frameworks</span>`, `<span>{t('services.hr.deliv.l4')}</span>`);
  content = content.replace(`<span>HR analytics dashboards</span>`, `<span>{t('services.hr.deliv.l5')}</span>`);
  content = content.replace(`<span>HR due-diligence and integration support</span>`, `<span>{t('services.hr.deliv.l6')}</span>`);

  content = content.replace(`Relevant industries</h2>`, `{t('services.hr.ind.title')}</h2>`);
  content = content.replace(`<span className="chip">Infrastructure</span>`, `<span className="chip">{t('services.hr.ind.l1')}</span>`);
  content = content.replace(`<span className="chip">Renewable energy</span>`, `<span className="chip">{t('services.hr.ind.l2')}</span>`);
  content = content.replace(`<span className="chip">Engineering & EPC</span>`, `<span className="chip">{t('services.hr.ind.l3')}</span>`);
  content = content.replace(`<span className="chip">Automotive</span>`, `<span className="chip">{t('services.hr.ind.l4')}</span>`);
  content = content.replace(`<span className="chip">Manufacturing</span>`, `<span className="chip">{t('services.hr.ind.l5')}</span>`);
  content = content.replace(`<span className="chip">Technology & IT/ITeS</span>`, `<span className="chip">{t('services.hr.ind.l6')}</span>`);
  content = content.replace(`<span className="chip">Logistics</span>`, `<span className="chip">{t('services.hr.ind.l7')}</span>`);
  content = content.replace(`<span className="chip">Real estate</span>`, `<span className="chip">{t('services.hr.ind.l8')}</span>`);
  content = content.replace(`<span className="chip">Hospitality</span>`, `<span className="chip">{t('services.hr.ind.l9')}</span>`);
  content = content.replace(`<span className="chip">Healthcare & pharma</span>`, `<span className="chip">{t('services.hr.ind.l10')}</span>`);
  content = content.replace(`<span className="chip">FMCG & retail</span>`, `<span className="chip">{t('services.hr.ind.l11')}</span>`);
  content = content.replace(`<span className="chip">Oil & gas</span>`, `<span className="chip">{t('services.hr.ind.l12')}</span>`);
  content = content.replace(`<span className="chip">Aviation</span>`, `<span className="chip">{t('services.hr.ind.l13')}</span>`);
  content = content.replace(`<span className="chip">Start-ups & e-commerce</span>`, `<span className="chip">{t('services.hr.ind.l14')}</span>`);

  content = content.replace(`Selected experience &amp; credentials</h2>`, `{t('services.hr.cred.title')}</h2>`);
  content = content.replace(`Led by an HR partner with 15+ years in a listed manufacturing environment — PAN-India learning governance, full-cycle recruitment across four zones, SAP HR/SuccessFactors payroll and compliance, and reported outcomes including 95% mandatory-training compliance and 75% open-role closure.</div>`, `{t('services.hr.cred.callout')}</div>`);
  content = content.replace(`Selected clients</p>`, `{t('services.hr.cred.clients')}</p>`);

  content = content.replace(`Connected services</h2>`, `{t('services.hr.conn.title')}</h2>`);
  content = content.replace(`India Entry: One-Stop Business Establishment</strong><span>Related capability</span>`, `{t('services.hr.conn.c1')}</strong><span>{t('services.hr.conn.rel')}</span>`);
  content = content.replace(`CFO & Finance Transformation</strong><span>Related capability</span>`, `{t('services.hr.conn.c2')}</strong><span>{t('services.hr.conn.rel')}</span>`);
  content = content.replace(`Risk, Internal Audit & Controls</strong><span>Related capability</span>`, `{t('services.hr.conn.c3')}</strong><span>{t('services.hr.conn.rel')}</span>`);

  content = content.replace(`<h2>Discuss Human Capital & HR Advisory with our team</h2>`, `<h2>{t('services.hr.cta.title')}</h2>`);
  content = content.replace(`<p>Tell us your situation and we'll map the right scope, team and approach for your business.</p>`, `<p>{t('services.hr.cta.desc')}</p>`);
  content = content.replace(` Enquire — info@taggroup.in</a>`, ` {t('services.hr.cta.btn1')}</a>`);
  content = content.replace(`Contact page</a>`, `{t('services.hr.cta.btn2')}</a>`);

  fs.writeFileSync('src/app/(public)/services/human-capital-hr/page.tsx', content);
};

const updateRisk = () => {
  let content = fs.readFileSync('src/app/(public)/services/risk-internal-audit/page.tsx', 'utf8');
  content = content.replace(`import React from 'react';`, `import React from 'react';\nimport { useI18n } from '@/lib/i18n';`);
  content = content.replace(`export default function Page() {`, `export default function Page() {\n  const { t } = useI18n();`);

  content = content.replace(`>Home<`, `>{t('services.risk.breadcrumb.home')}<`);
  content = content.replace(`>Services<`, `>{t('services.risk.breadcrumb.services')}<`);
  content = content.replace(`<span>Risk, Internal Audit & Controls</span>`, `<span>{t('services.risk.hero.title')}</span>`);
  content = content.replace(`<span className="eyebrow">Assurance support (non-statutory)</span>`, `<span className="eyebrow">{t('services.risk.hero.eyebrow')}</span>`);
  content = content.replace(`<h1>Risk, Internal Audit & Controls</h1>`, `<h1>{t('services.risk.hero.title')}</h1>`);
  content = content.replace(`<p>Internal audit, controls and assurance support that strengthen governance without overlapping the statutory auditor.</p>`, `<p>{t('services.risk.hero.desc')}</p>`);

  content = content.replace(`<h5>On this page</h5>`, `<h5>{t('services.risk.nav.on_this_page')}</h5>`);
  content = content.replace(`>Service proposition<`, `>{t('services.risk.nav.proposition')}<`).replace(`>Service proposition<`, `>{t('services.risk.nav.proposition')}<`);
  content = content.replace(`>When it's needed<`, `>{t('services.risk.nav.situations')}<`).replace(`>When it's needed<`, `>{t('services.risk.nav.situations')}<`);
  content = content.replace(`>Who it's for<`, `>{t('services.risk.nav.who')}<`).replace(`>Who it's for<`, `>{t('services.risk.nav.who')}<`);
  content = content.replace(`>Scope of assistance<`, `>{t('services.risk.nav.scope')}<`).replace(`>Scope of assistance<`, `>{t('services.risk.nav.scope')}<`);
  content = content.replace(`>Our approach<`, `>{t('services.risk.nav.approach')}<`).replace(`>Our approach<`, `>{t('services.risk.nav.approach')}<`);
  content = content.replace(`>Typical deliverables<`, `>{t('services.risk.nav.deliverables')}<`).replace(`>Typical deliverables<`, `>{t('services.risk.nav.deliverables')}<`);
  content = content.replace(`>Industries<`, `>{t('services.risk.nav.industries')}<`).replace(`>Industries<`, `>{t('services.risk.nav.industries')}<`);
  content = content.replace(`>Experience<`, `>{t('services.risk.nav.experience')}<`).replace(`>Experience<`, `>{t('services.risk.nav.experience')}<`);
  content = content.replace(`>Connected services<`, `>{t('services.risk.nav.connected')}<`).replace(`>Connected services<`, `>{t('services.risk.nav.connected')}<`);
  content = content.replace(`>Enquire<`, `>{t('services.risk.nav.enquire')}<`).replace(`>Enquire<`, `>{t('services.risk.nav.enquire')}<`);

  content = content.replace(`<h5>Lead partners</h5>`, `<h5>{t('services.risk.nav.lead_partners')}</h5>`);
  content = content.replace(`<p className="lead-note">Speak directly with the partners who lead this practice.</p>`, `<p className="lead-note">{t('services.risk.nav.lead_note')}</p>`);
  
  content = content.replace(`<strong>Gaurav Sharma</strong><span>Managing Partner</span>`, `<strong>{t('services.risk.partners.gaurav.name')}</strong><span>{t('services.risk.partners.gaurav.title')}</span>`);
  content = content.replace(`<strong>K. Vishnu Sharma</strong><span>Partner</span>`, `<strong>{t('services.risk.partners.vishnu.name')}</strong><span>{t('services.risk.partners.vishnu.title')}</span>`);
  content = content.replace(`<strong>Sumit Goyal</strong><span>Partner</span>`, `<strong>{t('services.risk.partners.sumit.name')}</strong><span>{t('services.risk.partners.sumit.title')}</span>`);
  
  content = content.replace(` Enquire</a>`, ` {t('services.risk.nav.enquire_btn')}</a>`);
  content = content.replace(`<h5>Service portfolio</h5>`, `<h5>{t('services.risk.nav.portfolio')}</h5>`);
  content = content.replace(`<p className="lead-note">Download a one-page summary of this portfolio.</p>`, `<p className="lead-note">{t('services.risk.nav.download_note')}</p>`);
  content = content.replace(` Download portfolio (PDF)</a>`, ` {t('services.risk.nav.download_btn')}</a>`);

  content = content.replace(`<strong>Risk, Internal Audit & Controls</strong><span>Assurance support (non-statutory)</span>`, `<strong>{t('services.risk.hero.title')}</strong><span>{t('services.risk.hero.eyebrow')}</span>`);

  content = content.replace(`Service proposition</h2>`, `{t('services.risk.prop.title')}</h2>`);
  content = content.replace(`Boards and CFOs need independent assurance that risks are understood and controls actually work. TAG delivers risk-based internal audit, controls design and testing, and forensic reviews — building practical frameworks that improve operations, not just tick boxes. Our scope is explicitly non-statutory.</p>`, `{t('services.risk.prop.desc')}</p>`);
  content = content.replace(`<span>This is assurance support, not statutory attestation. TAG does not perform statutory audits or issue certifications.</span>`, `<span>{t('services.risk.prop.excl')}</span>`);

  content = content.replace(`Business situations that trigger the need</h2>`, `{t('services.risk.sit.title')}</h2>`);
  content = content.replace(`<li>The board or audit committee wants independent assurance over key risks</li>`, `<li>{t('services.risk.sit.l1')}</li>`);
  content = content.replace(`<li>Internal financial controls (IFC/ICFR) need design or testing</li>`, `<li>{t('services.risk.sit.l2')}</li>`);
  content = content.replace(`<li>A process is leaking value, margin or cash</li>`, `<li>{t('services.risk.sit.l3')}</li>`);
  content = content.replace(`<li>Fraud indicators or a specific incident need investigation</li>`, `<li>{t('services.risk.sit.l4')}</li>`);
  content = content.replace(`<li>ERP or automated controls need review</li>`, `<li>{t('services.risk.sit.l5')}</li>`);
  content = content.replace(`<li>Vendor, inventory or fixed-asset integrity is in question</li>`, `<li>{t('services.risk.sit.l6')}</li>`);

  content = content.replace(`Who this service is for</h2>`, `{t('services.risk.who.title')}</h2>`);
  content = content.replace(`<li>Audit committees and boards</li>`, `<li>{t('services.risk.who.l1')}</li>`);
  content = content.replace(`<li>CFOs and finance leaders</li>`, `<li>{t('services.risk.who.l2')}</li>`);
  content = content.replace(`<li>Promoters seeking assurance over operations</li>`, `<li>{t('services.risk.who.l3')}</li>`);
  content = content.replace(`<li>Groups standardising controls across entities</li>`, `<li>{t('services.risk.who.l4')}</li>`);

  content = content.replace(`Detailed scope of assistance</h2>`, `{t('services.risk.scope.title')}</h2>`);
  content = content.replace(`Internal audit</h4>`, `{t('services.risk.scope.h1')}</h4>`);
  content = content.replace(`<li>Risk-based internal audit</li>`, `<li>{t('services.risk.scope.h1_l1')}</li>`);
  content = content.replace(`<li>Operational and process reviews</li>`, `<li>{t('services.risk.scope.h1_l2')}</li>`);
  content = content.replace(`<li>Remediation monitoring</li>`, `<li>{t('services.risk.scope.h1_l3')}</li>`);
  content = content.replace(`Controls</h4>`, `{t('services.risk.scope.h2')}</h4>`);
  content = content.replace(`<li>Internal Financial Controls (IFC)</li>`, `<li>{t('services.risk.scope.h2_l1')}</li>`);
  content = content.replace(`<li>ICFR and SOX advisory</li>`, `<li>{t('services.risk.scope.h2_l2')}</li>`);
  content = content.replace(`<li>Risk-control matrices</li>`, `<li>{t('services.risk.scope.h2_l3')}</li>`);
  content = content.replace(`<li>Control design and testing</li>`, `<li>{t('services.risk.scope.h2_l4')}</li>`);
  content = content.replace(`<li>SOPs, process manuals and delegation-of-authority frameworks</li>`, `<li>{t('services.risk.scope.h2_l5')}</li>`);
  content = content.replace(`Enterprise risk</h4>`, `{t('services.risk.scope.h3')}</h4>`);
  content = content.replace(`<li>Enterprise risk management</li>`, `<li>{t('services.risk.scope.h3_l1')}</li>`);
  content = content.replace(`<li>Regulatory compliance reviews</li>`, `<li>{t('services.risk.scope.h3_l2')}</li>`);
  content = content.replace(`<li>IT general controls and ERP/automated controls</li>`, `<li>{t('services.risk.scope.h3_l3')}</li>`);
  content = content.replace(`Forensic & verification</h4>`, `{t('services.risk.scope.h4')}</h4>`);
  content = content.replace(`<li>Fraud-risk assessment</li>`, `<li>{t('services.risk.scope.h4_l1')}</li>`);
  content = content.replace(`<li>Forensic and special-purpose reviews</li>`, `<li>{t('services.risk.scope.h4_l2')}</li>`);
  content = content.replace(`<li>Inventory and fixed-asset verification</li>`, `<li>{t('services.risk.scope.h4_l3')}</li>`);
  content = content.replace(`<li>Payables and transaction verification</li>`, `<li>{t('services.risk.scope.h4_l4')}</li>`);
  content = content.replace(`<li>Third-party and vendor-risk reviews</li>`, `<li>{t('services.risk.scope.h4_l5')}</li>`);

  content = content.replace(`Engagement approach &amp; phases</h2>`, `{t('services.risk.approach.title')}</h2>`);
  content = content.replace(`<h4>Plan</h4><p>Build a risk-based audit plan aligned to the board's priorities.</p>`, `<h4>{t('services.risk.approach.p1_t')}</h4><p>{t('services.risk.approach.p1_d')}</p>`);
  content = content.replace(`<h4>Test</h4><p>Assess design and operating effectiveness of controls and processes.</p>`, `<h4>{t('services.risk.approach.p2_t')}</h4><p>{t('services.risk.approach.p2_d')}</p>`);
  content = content.replace(`<h4>Report</h4><p>Deliver clear, prioritised findings with practical recommendations.</p>`, `<h4>{t('services.risk.approach.p3_t')}</h4><p>{t('services.risk.approach.p3_d')}</p>`);
  content = content.replace(`<h4>Remediate</h4><p>Track remediation and re-test to confirm risks are closed.</p>`, `<h4>{t('services.risk.approach.p4_t')}</h4><p>{t('services.risk.approach.p4_d')}</p>`);

  content = content.replace(`Typical deliverables</h2>`, `{t('services.risk.deliv.title')}</h2>`);
  content = content.replace(`<span>Risk-based internal audit reports</span>`, `<span>{t('services.risk.deliv.l1')}</span>`);
  content = content.replace(`<span>Risk-control matrices and control libraries</span>`, `<span>{t('services.risk.deliv.l2')}</span>`);
  content = content.replace(`<span>IFC/ICFR design and testing documentation</span>`, `<span>{t('services.risk.deliv.l3')}</span>`);
  content = content.replace(`<span>SOPs and process manuals</span>`, `<span>{t('services.risk.deliv.l4')}</span>`);
  content = content.replace(`<span>Forensic / special-purpose review reports</span>`, `<span>{t('services.risk.deliv.l5')}</span>`);
  content = content.replace(`<span>Remediation trackers</span>`, `<span>{t('services.risk.deliv.l6')}</span>`);

  content = content.replace(`Relevant industries</h2>`, `{t('services.risk.ind.title')}</h2>`);
  content = content.replace(`<span className="chip">Infrastructure</span>`, `<span className="chip">{t('services.risk.ind.l1')}</span>`);
  content = content.replace(`<span className="chip">Renewable energy</span>`, `<span className="chip">{t('services.risk.ind.l2')}</span>`);
  content = content.replace(`<span className="chip">Engineering & EPC</span>`, `<span className="chip">{t('services.risk.ind.l3')}</span>`);
  content = content.replace(`<span className="chip">Automotive</span>`, `<span className="chip">{t('services.risk.ind.l4')}</span>`);
  content = content.replace(`<span className="chip">Manufacturing</span>`, `<span className="chip">{t('services.risk.ind.l5')}</span>`);
  content = content.replace(`<span className="chip">Technology & IT/ITeS</span>`, `<span className="chip">{t('services.risk.ind.l6')}</span>`);
  content = content.replace(`<span className="chip">Logistics</span>`, `<span className="chip">{t('services.risk.ind.l7')}</span>`);
  content = content.replace(`<span className="chip">Real estate</span>`, `<span className="chip">{t('services.risk.ind.l8')}</span>`);
  content = content.replace(`<span className="chip">Hospitality</span>`, `<span className="chip">{t('services.risk.ind.l9')}</span>`);
  content = content.replace(`<span className="chip">Healthcare & pharma</span>`, `<span className="chip">{t('services.risk.ind.l10')}</span>`);
  content = content.replace(`<span className="chip">FMCG & retail</span>`, `<span className="chip">{t('services.risk.ind.l11')}</span>`);
  content = content.replace(`<span className="chip">Oil & gas</span>`, `<span className="chip">{t('services.risk.ind.l12')}</span>`);
  content = content.replace(`<span className="chip">Aviation</span>`, `<span className="chip">{t('services.risk.ind.l13')}</span>`);
  content = content.replace(`<span className="chip">Start-ups & e-commerce</span>`, `<span className="chip">{t('services.risk.ind.l14')}</span>`);

  content = content.replace(`Selected experience &amp; credentials</h2>`, `{t('services.risk.cred.title')}</h2>`);
  content = content.replace(`Partners have governed 290 controls under Korean SOX and the Companies Act, coordinated statutory audits to clean outcomes, and hold ICAI certification in forensic accounting and fraud detection.</div>`, `{t('services.risk.cred.callout')}</div>`);
  content = content.replace(`Selected clients</p>`, `{t('services.risk.cred.clients')}</p>`);

  content = content.replace(`Connected services</h2>`, `{t('services.risk.conn.title')}</h2>`);
  content = content.replace(`CFO & Finance Transformation</strong><span>Related capability</span>`, `{t('services.risk.conn.c1')}</strong><span>{t('services.risk.conn.rel')}</span>`);
  content = content.replace(`Corporate, Legal, FEMA & Regulatory</strong><span>Related capability</span>`, `{t('services.risk.conn.c2')}</strong><span>{t('services.risk.conn.rel')}</span>`);
  content = content.replace(`Tax & Cross-Border Advisory</strong><span>Related capability</span>`, `{t('services.risk.conn.c3')}</strong><span>{t('services.risk.conn.rel')}</span>`);

  content = content.replace(`<h2>Discuss Risk, Internal Audit & Controls with our team</h2>`, `<h2>{t('services.risk.cta.title')}</h2>`);
  content = content.replace(`<p>Tell us your situation and we'll map the right scope, team and approach for your business.</p>`, `<p>{t('services.risk.cta.desc')}</p>`);
  content = content.replace(` Enquire — info@taggroup.in</a>`, ` {t('services.risk.cta.btn1')}</a>`);
  content = content.replace(`Contact page</a>`, `{t('services.risk.cta.btn2')}</a>`);

  fs.writeFileSync('src/app/(public)/services/risk-internal-audit/page.tsx', content);
};

updateDeals();
updateHr();
updateRisk();
