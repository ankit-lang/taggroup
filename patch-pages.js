const fs = require('fs');

const updateIntlBus = () => {
  let content = fs.readFileSync('src/app/(public)/services/international-business/page.tsx', 'utf8');
  content = content.replace(`import React from 'react';`, `import React from 'react';\nimport { useI18n } from '@/lib/i18n';`);
  content = content.replace(`export default function Page() {`, `export default function Page() {\n  const { t } = useI18n();`);

  // Hero
  content = content.replace(`>Home<`, `>{t('services.intlBus.breadcrumb.home')}<`);
  content = content.replace(`>Services<`, `>{t('services.intlBus.breadcrumb.services')}<`);
  content = content.replace(`<span>International Business</span>`, `<span>{t('services.intlBus.hero.title')}</span>`);
  content = content.replace(`<span className="eyebrow">Cross-border & outbound</span>`, `<span className="eyebrow">{t('services.intlBus.hero.eyebrow')}</span>`);
  content = content.replace(`<h1>International Business</h1>`, `<h1>{t('services.intlBus.hero.title')}</h1>`);
  content = content.replace(`<p>Support for Indian businesses investing abroad and multinational groups operating across jurisdictions, through TAG's international network.</p>`, `<p>{t('services.intlBus.hero.desc')}</p>`);

  // Nav
  content = content.replace(`<h5>On this page</h5>`, `<h5>{t('services.intlBus.nav.on_this_page')}</h5>`);
  content = content.replace(`>Service proposition<`, `>{t('services.intlBus.nav.proposition')}<`).replace(`>Service proposition<`, `>{t('services.intlBus.nav.proposition')}<`);
  content = content.replace(`>When it's needed<`, `>{t('services.intlBus.nav.situations')}<`).replace(`>When it's needed<`, `>{t('services.intlBus.nav.situations')}<`);
  content = content.replace(`>Who it's for<`, `>{t('services.intlBus.nav.who')}<`).replace(`>Who it's for<`, `>{t('services.intlBus.nav.who')}<`);
  content = content.replace(`>Scope of assistance<`, `>{t('services.intlBus.nav.scope')}<`).replace(`>Scope of assistance<`, `>{t('services.intlBus.nav.scope')}<`);
  content = content.replace(`>Our approach<`, `>{t('services.intlBus.nav.approach')}<`).replace(`>Our approach<`, `>{t('services.intlBus.nav.approach')}<`);
  content = content.replace(`>Typical deliverables<`, `>{t('services.intlBus.nav.deliverables')}<`).replace(`>Typical deliverables<`, `>{t('services.intlBus.nav.deliverables')}<`);
  content = content.replace(`>Industries<`, `>{t('services.intlBus.nav.industries')}<`).replace(`>Industries<`, `>{t('services.intlBus.nav.industries')}<`);
  content = content.replace(`>Experience<`, `>{t('services.intlBus.nav.experience')}<`).replace(`>Experience<`, `>{t('services.intlBus.nav.experience')}<`);
  content = content.replace(`>Connected services<`, `>{t('services.intlBus.nav.connected')}<`).replace(`>Connected services<`, `>{t('services.intlBus.nav.connected')}<`);
  content = content.replace(`>Enquire<`, `>{t('services.intlBus.nav.enquire')}<`).replace(`>Enquire<`, `>{t('services.intlBus.nav.enquire')}<`);

  content = content.replace(`<h5>Lead partners</h5>`, `<h5>{t('services.intlBus.nav.lead_partners')}</h5>`);
  content = content.replace(`<p className="lead-note">Speak directly with the partners who lead this practice.</p>`, `<p className="lead-note">{t('services.intlBus.nav.lead_note')}</p>`);
  
  content = content.replace(`<strong>Gaurav Sharma</strong><span>Managing Partner</span>`, `<strong>{t('services.intlBus.partners.gaurav.name')}</strong><span>{t('services.intlBus.partners.gaurav.title')}</span>`);
  content = content.replace(`<strong>Sumit Goyal</strong><span>Partner</span>`, `<strong>{t('services.intlBus.partners.sumit.name')}</strong><span>{t('services.intlBus.partners.sumit.title')}</span>`);
  content = content.replace(`<strong>MR Pradip</strong><span>Associate Partner</span>`, `<strong>{t('services.intlBus.partners.pradip.name')}</strong><span>{t('services.intlBus.partners.pradip.title')}</span>`);
  content = content.replace(`<strong>Awen Lee</strong><span>International Desk — Singapore</span>`, `<strong>{t('services.intlBus.partners.awen.name')}</strong><span>{t('services.intlBus.partners.awen.title')}</span>`);
  
  content = content.replace(` Enquire</a>`, ` {t('services.intlBus.nav.enquire_btn')}</a>`);
  content = content.replace(`<h5>Service portfolio</h5>`, `<h5>{t('services.intlBus.nav.portfolio')}</h5>`);
  content = content.replace(`<p className="lead-note">Download a one-page summary of this portfolio.</p>`, `<p className="lead-note">{t('services.intlBus.nav.download_note')}</p>`);
  content = content.replace(` Download portfolio (PDF)</a>`, ` {t('services.intlBus.nav.download_btn')}</a>`);

  content = content.replace(`<strong>International Business</strong><span>Cross-border & outbound</span>`, `<strong>{t('services.intlBus.hero.title')}</strong><span>{t('services.intlBus.hero.eyebrow')}</span>`);

  content = content.replace(`Service proposition</h2>`, `{t('services.intlBus.prop.title')}</h2>`);
  content = content.replace(`Operating across borders multiplies tax, regulatory and operational complexity. TAG helps Indian businesses expand outbound and helps multinational groups coordinate across jurisdictions — combining India-side capability with an international network of local partners and associates.</p>`, `{t('services.intlBus.prop.desc')}</p>`);

  content = content.replace(`Business situations that trigger the need</h2>`, `{t('services.intlBus.sit.title')}</h2>`);
  content = content.replace(`<li>An Indian business is investing or expanding abroad</li>`, `<li>{t('services.intlBus.sit.l1')}</li>`);
  content = content.replace(`<li>A multinational group needs coordinated multi-country compliance</li>`, `<li>{t('services.intlBus.sit.l2')}</li>`);
  content = content.replace(`<li>Overseas entity and operating structures need evaluation</li>`, `<li>{t('services.intlBus.sit.l3')}</li>`);
  content = content.replace(`<li>Cross-border transactions need tax and regulatory coordination</li>`, `<li>{t('services.intlBus.sit.l4')}</li>`);
  content = content.replace(`<li>You need local professional introductions in a new market</li>`, `<li>{t('services.intlBus.sit.l5')}</li>`);
  content = content.replace(`<li>Intercompany arrangements span several countries</li>`, `<li>{t('services.intlBus.sit.l6')}</li>`);

  content = content.replace(`Who this service is for</h2>`, `{t('services.intlBus.who.title')}</h2>`);
  content = content.replace(`<li>Indian businesses expanding internationally</li>`, `<li>{t('services.intlBus.who.l1')}</li>`);
  content = content.replace(`<li>Multinational groups operating across jurisdictions</li>`, `<li>{t('services.intlBus.who.l2')}</li>`);
  content = content.replace(`<li>Overseas advisory firms seeking an India-side partner</li>`, `<li>{t('services.intlBus.who.l3')}</li>`);
  content = content.replace(`<li>Groups needing ongoing multi-country compliance coordination</li>`, `<li>{t('services.intlBus.who.l4')}</li>`);

  content = content.replace(`Detailed scope of assistance</h2>`, `{t('services.intlBus.scope.title')}</h2>`);
  content = content.replace(`Core international services</h4>`, `{t('services.intlBus.scope.h1')}</h4>`);
  content = content.replace(`<li>Overseas market-entry assessment</li>`, `<li>{t('services.intlBus.scope.h1_l1')}</li>`);
  content = content.replace(`<li>Entity and operating-structure evaluation</li>`, `<li>{t('services.intlBus.scope.h1_l2')}</li>`);
  content = content.replace(`<li>Tax and regulatory coordination</li>`, `<li>{t('services.intlBus.scope.h1_l3')}</li>`);
  content = content.replace(`<li>Accounting and corporate compliance</li>`, `<li>{t('services.intlBus.scope.h1_l4')}</li>`);
  content = content.replace(`<li>Transfer pricing and intercompany arrangements</li>`, `<li>{t('services.intlBus.scope.h1_l5')}</li>`);
  content = content.replace(`<li>Payroll and employment support</li>`, `<li>{t('services.intlBus.scope.h1_l6')}</li>`);
  content = content.replace(`<li>Banking and remittance coordination</li>`, `<li>{t('services.intlBus.scope.h1_l7')}</li>`);
  content = content.replace(`<li>Cross-border transaction support</li>`, `<li>{t('services.intlBus.scope.h1_l8')}</li>`);
  content = content.replace(`<li>International finance and reporting</li>`, `<li>{t('services.intlBus.scope.h1_l9')}</li>`);
  content = content.replace(`<li>Local professional and commercial introductions</li>`, `<li>{t('services.intlBus.scope.h1_l10')}</li>`);
  content = content.replace(`<li>Ongoing multi-country compliance coordination</li>`, `<li>{t('services.intlBus.scope.h1_l11')}</li>`);

  content = content.replace(`Engagement approach &amp; phases</h2>`, `{t('services.intlBus.approach.title')}</h2>`);
  content = content.replace(`<h4>Assess</h4><p>Evaluate market, entity and structure options for the target jurisdiction.</p>`, `<h4>{t('services.intlBus.approach.p1_t')}</h4><p>{t('services.intlBus.approach.p1_d')}</p>`);
  content = content.replace(`<h4>Coordinate</h4><p>Align tax, regulatory, accounting and TP requirements across countries.</p>`, `<h4>{t('services.intlBus.approach.p2_t')}</h4><p>{t('services.intlBus.approach.p2_d')}</p>`);
  content = content.replace(`<h4>Establish</h4><p>Support setup, banking, payroll and local introductions.</p>`, `<h4>{t('services.intlBus.approach.p3_t')}</h4><p>{t('services.intlBus.approach.p3_d')}</p>`);
  content = content.replace(`<h4>Sustain</h4><p>Provide ongoing multi-country compliance coordination.</p>`, `<h4>{t('services.intlBus.approach.p4_t')}</h4><p>{t('services.intlBus.approach.p4_d')}</p>`);

  content = content.replace(`Typical deliverables</h2>`, `{t('services.intlBus.deliv.title')}</h2>`);
  content = content.replace(`<span>Overseas market-entry assessments</span>`, `<span>{t('services.intlBus.deliv.l1')}</span>`);
  content = content.replace(`<span>Entity & structure evaluations</span>`, `<span>{t('services.intlBus.deliv.l2')}</span>`);
  content = content.replace(`<span>Cross-border tax & regulatory coordination</span>`, `<span>{t('services.intlBus.deliv.l3')}</span>`);
  content = content.replace(`<span>Multi-country compliance calendars</span>`, `<span>{t('services.intlBus.deliv.l4')}</span>`);
  content = content.replace(`<span>Intercompany and TP arrangements</span>`, `<span>{t('services.intlBus.deliv.l5')}</span>`);
  content = content.replace(`<span>Local partner introductions</span>`, `<span>{t('services.intlBus.deliv.l6')}</span>`);

  content = content.replace(`Relevant industries</h2>`, `{t('services.intlBus.ind.title')}</h2>`);
  content = content.replace(`<span className="chip">Infrastructure</span>`, `<span className="chip">{t('services.intlBus.ind.l1')}</span>`);
  content = content.replace(`<span className="chip">Renewable energy</span>`, `<span className="chip">{t('services.intlBus.ind.l2')}</span>`);
  content = content.replace(`<span className="chip">Engineering & EPC</span>`, `<span className="chip">{t('services.intlBus.ind.l3')}</span>`);
  content = content.replace(`<span className="chip">Automotive</span>`, `<span className="chip">{t('services.intlBus.ind.l4')}</span>`);
  content = content.replace(`<span className="chip">Manufacturing</span>`, `<span className="chip">{t('services.intlBus.ind.l5')}</span>`);
  content = content.replace(`<span className="chip">Technology & IT/ITeS</span>`, `<span className="chip">{t('services.intlBus.ind.l6')}</span>`);
  content = content.replace(`<span className="chip">Logistics</span>`, `<span className="chip">{t('services.intlBus.ind.l7')}</span>`);
  content = content.replace(`<span className="chip">Real estate</span>`, `<span className="chip">{t('services.intlBus.ind.l8')}</span>`);
  content = content.replace(`<span className="chip">Hospitality</span>`, `<span className="chip">{t('services.intlBus.ind.l9')}</span>`);
  content = content.replace(`<span className="chip">Healthcare & pharma</span>`, `<span className="chip">{t('services.intlBus.ind.l10')}</span>`);
  content = content.replace(`<span className="chip">FMCG & retail</span>`, `<span className="chip">{t('services.intlBus.ind.l11')}</span>`);
  content = content.replace(`<span className="chip">Oil & gas</span>`, `<span className="chip">{t('services.intlBus.ind.l12')}</span>`);
  content = content.replace(`<span className="chip">Aviation</span>`, `<span className="chip">{t('services.intlBus.ind.l13')}</span>`);
  content = content.replace(`<span className="chip">Start-ups & e-commerce</span>`, `<span className="chip">{t('services.intlBus.ind.l14')}</span>`);

  content = content.replace(`Selected experience &amp; credentials</h2>`, `{t('services.intlBus.cred.title')}</h2>`);
  content = content.replace(`Delivered through TAG Group's international network across the UAE, Singapore, Malaysia and Mauritius, coordinated from India and connected to trusted local professionals in each market. See the International Business section for territory-specific contacts.</div>`, `{t('services.intlBus.cred.callout')}</div>`);
  content = content.replace(`Selected clients</p>`, `{t('services.intlBus.cred.clients')}</p>`);

  content = content.replace(`Connected services</h2>`, `{t('services.intlBus.conn.title')}</h2>`);
  content = content.replace(`India Entry: One-Stop Business Establishment</strong><span>Related capability</span>`, `{t('services.intlBus.conn.c1')}</strong><span>{t('services.intlBus.conn.rel')}</span>`);
  content = content.replace(`Global Transfer Pricing</strong><span>Related capability</span>`, `{t('services.intlBus.conn.c2')}</strong><span>{t('services.intlBus.conn.rel')}</span>`);
  content = content.replace(`Tax & Cross-Border Advisory</strong><span>Related capability</span>`, `{t('services.intlBus.conn.c3')}</strong><span>{t('services.intlBus.conn.rel')}</span>`);
  content = content.replace(`Corporate, Legal, FEMA & Regulatory</strong><span>Related capability</span>`, `{t('services.intlBus.conn.c4')}</strong><span>{t('services.intlBus.conn.rel')}</span>`);

  content = content.replace(`<h2>Discuss International Business with our team</h2>`, `<h2>{t('services.intlBus.cta.title')}</h2>`);
  content = content.replace(`<p>Tell us your situation and we'll map the right scope, team and approach for your business.</p>`, `<p>{t('services.intlBus.cta.desc')}</p>`);
  content = content.replace(` Enquire — info@taggroup.in</a>`, ` {t('services.intlBus.cta.btn1')}</a>`);
  content = content.replace(`Contact page</a>`, `{t('services.intlBus.cta.btn2')}</a>`);

  fs.writeFileSync('src/app/(public)/services/international-business/page.tsx', content);
};

updateIntlBus();

