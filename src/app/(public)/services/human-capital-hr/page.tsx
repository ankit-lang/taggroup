
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/life.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('services.hr.breadcrumb.home')}</a> / <a href="/services">{t('services.hr.breadcrumb.services')}</a> / <span>{t('services.hr.hero.title')}</span></div>
          <span className="eyebrow">{t('services.hr.hero.eyebrow')}</span>
          <h1>{t('services.hr.hero.title')}</h1>
          <p>{t('services.hr.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('services.hr.nav.on_this_page')}</h5>
              <a href="#proposition">{t('services.hr.nav.proposition')}</a><a href="#situations">{t('services.hr.nav.situations')}</a><a href="#who">{t('services.hr.nav.who')}</a><a href="#scope">{t('services.hr.nav.scope')}</a><a href="#approach">{t('services.hr.nav.approach')}</a><a href="#deliverables">{t('services.hr.nav.deliverables')}</a><a href="#industries">{t('services.hr.nav.industries')}</a><a href="#credentials">{t('services.hr.nav.experience')}</a><a href="#connected">{t('services.hr.nav.connected')}</a><a href="#cta">{t('services.hr.nav.enquire')}</a>
              <div className="side-card" style={{ "marginTop": "26px" }}>
                <h5>{t('services.hr.nav.lead_partners')}</h5>
                <p className="lead-note">{t('services.hr.nav.lead_note')}</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>{t('services.hr.partners.gaurav.name')}</strong><span>{t('services.hr.partners.gaurav.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/k-vishnu">
                  <span className="pmini-av"><img src="/assets/photos/people/k-vishnu.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />KV</span>
                  <span className="pmini-info"><strong>{t('services.hr.partners.vishnu.name')}</strong><span>{t('services.hr.partners.vishnu.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="btn btn-primary" href="/contact?service=Human%20Capital%20&%20HR%20Advisory" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.hr.nav.enquire_btn')}</a>
              </div>
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>{t('services.hr.nav.portfolio')}</h5>
                <p className="lead-note">{t('services.hr.nav.download_note')}</p>
                <a className="btn btn-ghost" href="/assets/service-pdfs/human-capital-hr.pdf" download style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.hr.nav.download_btn')}</a>
              </div>
            </aside>
            <nav className="jump-chips" aria-label="On this page"><a href="#proposition">{t('services.hr.nav.proposition')}</a><a href="#situations">{t('services.hr.nav.situations')}</a><a href="#who">{t('services.hr.nav.who')}</a><a href="#scope">{t('services.hr.nav.scope')}</a><a href="#approach">{t('services.hr.nav.approach')}</a><a href="#deliverables">{t('services.hr.nav.deliverables')}</a><a href="#industries">{t('services.hr.nav.industries')}</a><a href="#credentials">{t('services.hr.nav.experience')}</a><a href="#connected">{t('services.hr.nav.connected')}</a><a href="#cta">{t('services.hr.nav.enquire')}</a></nav>
            <div>
              <div style={{ "marginBottom": "34px" }}><figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/team.svg')" }}><img src="/assets/photos/services/human-capital-hr.jpg" alt="Human Capital & HR Advisory" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t('services.hr.hero.title')}</strong><span>{t('services.hr.hero.eyebrow')}</span></figcaption></figure></div>
              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>{t('services.hr.prop.title')}</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>{t('services.hr.prop.desc')}</p>

              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>{t('services.hr.sit.title')}</h2>
                <ul className="check-list"><li>{t('services.hr.sit.l1')}</li><li>{t('services.hr.sit.l2')}</li><li>{t('services.hr.sit.l3')}</li><li>{t('services.hr.sit.l4')}</li><li>{t('services.hr.sit.l5')}</li><li>{t('services.hr.sit.l6')}</li></ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.hr.who.title')}</h2>
                <ul className="check-list two"><li>{t('services.hr.who.l1')}</li><li>{t('services.hr.who.l2')}</li><li>{t('services.hr.who.l3')}</li><li>{t('services.hr.who.l4')}</li></ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.hr.scope.title')}</h2>
                <div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.hr.scope.h1')}</h4><ul className="check-list two"><li>{t('services.hr.scope.h1_l1')}</li><li>{t('services.hr.scope.h1_l2')}</li><li>{t('services.hr.scope.h1_l3')}</li><li>{t('services.hr.scope.h1_l4')}</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.hr.scope.h2')}</h4><ul className="check-list two"><li>{t('services.hr.scope.h2_l1')}</li><li>{t('services.hr.scope.h2_l2')}</li><li>{t('services.hr.scope.h2_l3')}</li><li>{t('services.hr.scope.h2_l4')}</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.hr.scope.h3')}</h4><ul className="check-list two"><li>{t('services.hr.scope.h3_l1')}</li><li>{t('services.hr.scope.h3_l2')}</li><li>{t('services.hr.scope.h3_l3')}</li><li>{t('services.hr.scope.h3_l4')}</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.hr.scope.h4')}</h4><ul className="check-list two"><li>{t('services.hr.scope.h4_l1')}</li><li>{t('services.hr.scope.h4_l2')}</li><li>{t('services.hr.scope.h4_l3')}</li><li>{t('services.hr.scope.h4_l4')}</li><li>{t('services.hr.scope.h4_l5')}</li><li>{t('services.hr.scope.h4_l6')}</li></ul></div><div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.hr.scope.h5')}</h4><ul className="check-list two"><li>{t('services.hr.scope.h5_l1')}</li><li>{t('services.hr.scope.h5_l2')}</li><li>{t('services.hr.scope.h5_l3')}</li></ul></div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>{t('services.hr.approach.title')}</h2>
                <div className="phase-grid"><div className="phase"><div className="pn">01</div><h4>{t('services.hr.approach.p1_t')}</h4><p>{t('services.hr.approach.p1_d')}</p></div><div className="phase"><div className="pn">02</div><h4>{t('services.hr.approach.p2_t')}</h4><p>{t('services.hr.approach.p2_d')}</p></div><div className="phase"><div className="pn">03</div><h4>{t('services.hr.approach.p3_t')}</h4><p>{t('services.hr.approach.p3_d')}</p></div><div className="phase"><div className="pn">04</div><h4>{t('services.hr.approach.p4_t')}</h4><p>{t('services.hr.approach.p4_d')}</p></div></div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>{t('services.hr.deliv.title')}</h2>
                <div className="deliverables"><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.hr.deliv.l1')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.hr.deliv.l2')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.hr.deliv.l3')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.hr.deliv.l4')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.hr.deliv.l5')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.hr.deliv.l6')}</span></div></div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>{t('services.hr.ind.title')}</h2>
                <div className="chips"><span className="chip">{t('services.hr.ind.l1')}</span><span className="chip">{t('services.hr.ind.l2')}</span><span className="chip">{t('services.hr.ind.l3')}</span><span className="chip">{t('services.hr.ind.l4')}</span><span className="chip">{t('services.hr.ind.l5')}</span><span className="chip">{t('services.hr.ind.l6')}</span><span className="chip">{t('services.hr.ind.l7')}</span><span className="chip">{t('services.hr.ind.l8')}</span><span className="chip">{t('services.hr.ind.l9')}</span><span className="chip">{t('services.hr.ind.l10')}</span><span className="chip">{t('services.hr.ind.l11')}</span><span className="chip">{t('services.hr.ind.l12')}</span><span className="chip">{t('services.hr.ind.l13')}</span><span className="chip">{t('services.hr.ind.l14')}</span></div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>{t('services.hr.cred.title')}</h2>
                <div className="callout">{t('services.hr.cred.callout')}</div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">{t('services.hr.cred.clients')}</p>
                  <div className="logo-marquee" aria-label="Selected clients"><div className="logo-track"><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div></div>
                </div>
              </section>


              <section className="svc-block" id="connected">
                <h2><span className="n">9</span>{t('services.hr.conn.title')}</h2>
                <div className="connected"><a href="/india-entry"><strong>{t('services.hr.conn.c1')}</strong><span>{t('services.hr.conn.rel')}</span></a><a href="/cfo-finance-transformation"><strong>{t('services.hr.conn.c2')}</strong><span>{t('services.hr.conn.rel')}</span></a><a href="/risk-internal-audit"><strong>{t('services.hr.conn.c3')}</strong><span>{t('services.hr.conn.rel')}</span></a></div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>{t('services.hr.cta.title')}</h2>
                  <p>{t('services.hr.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=Human%20Capital%20&%20HR%20Advisory"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.hr.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('services.hr.cta.btn2')}</a>
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
