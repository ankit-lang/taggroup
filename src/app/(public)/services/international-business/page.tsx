
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/global.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('services.intlBus.breadcrumb.home')}</a> / <a href="/services">{t('services.intlBus.breadcrumb.services')}</a> / <span>{t('services.intlBus.hero.title')}</span></div>
          <span className="eyebrow">{t('services.intlBus.hero.eyebrow')}</span>
          <h1>{t('services.intlBus.hero.title')}</h1>
          <p>{t('services.intlBus.hero.desc')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <h5>{t('services.intlBus.nav.on_this_page')}</h5>
              <a href="#proposition">{t('services.intlBus.nav.proposition')}</a><a href="#situations">{t('services.intlBus.nav.situations')}</a><a href="#who">{t('services.intlBus.nav.who')}</a><a href="#scope">{t('services.intlBus.nav.scope')}</a><a href="#approach">{t('services.intlBus.nav.approach')}</a><a href="#deliverables">{t('services.intlBus.nav.deliverables')}</a><a href="#industries">{t('services.intlBus.nav.industries')}</a><a href="#credentials">{t('services.intlBus.nav.experience')}</a><a href="#connected">{t('services.intlBus.nav.connected')}</a><a href="#cta">{t('services.intlBus.nav.enquire')}</a>
              <div className="side-card" style={{ "marginTop": "26px" }}>
                <h5>{t('services.intlBus.nav.lead_partners')}</h5>
                <p className="lead-note">{t('services.intlBus.nav.lead_note')}</p>

                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />GS</span>
                  <span className="pmini-info"><strong>{t('services.intlBus.partners.gaurav.name')}</strong><span>{t('services.intlBus.partners.gaurav.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/sumit">
                  <span className="pmini-av"><img src="/assets/photos/people/sumit.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />SG</span>
                  <span className="pmini-info"><strong>{t('services.intlBus.partners.sumit.name')}</strong><span>{t('services.intlBus.partners.sumit.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="pmini" href="/people/mr-pradip">
                  <span className="pmini-av"><img src="/assets/photos/people/mr-pradip.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />MR</span>
                  <span className="pmini-info"><strong>{t('services.intlBus.partners.pradip.name')}</strong><span>{t('services.intlBus.partners.pradip.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a><span className="pmini-sep">Specialists</span>
                <a className="pmini" href="/people/awen">
                  <span className="pmini-av"><img src="/assets/photos/people/awen.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />AL</span>
                  <span className="pmini-info"><strong>{t('services.intlBus.partners.awen.name')}</strong><span>{t('services.intlBus.partners.awen.title')}</span></span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </a>
                <a className="btn btn-primary" href="/contact?service=International%20Business" style={{ "width": "100%", "justifyContent": "center", "marginTop": "12px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.intlBus.nav.enquire_btn')}</a>
              </div>
              <div className="side-card" style={{ "marginTop": "18px" }}>
                <h5>{t('services.intlBus.nav.portfolio')}</h5>
                <p className="lead-note">{t('services.intlBus.nav.download_note')}</p>
                <a className="btn btn-ghost" href="/assets/service-pdfs/international-business.pdf" download style={{ "width": "100%", "justifyContent": "flex-start" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('services.intlBus.nav.download_btn')}</a>
              </div>
            </aside>
            <nav className="jump-chips" aria-label="On this page"><a href="#proposition">{t('services.intlBus.nav.proposition')}</a><a href="#situations">{t('services.intlBus.nav.situations')}</a><a href="#who">{t('services.intlBus.nav.who')}</a><a href="#scope">{t('services.intlBus.nav.scope')}</a><a href="#approach">{t('services.intlBus.nav.approach')}</a><a href="#deliverables">{t('services.intlBus.nav.deliverables')}</a><a href="#industries">{t('services.intlBus.nav.industries')}</a><a href="#credentials">{t('services.intlBus.nav.experience')}</a><a href="#connected">{t('services.intlBus.nav.connected')}</a><a href="#cta">{t('services.intlBus.nav.enquire')}</a></nav>
            <div>
              <div style={{ "marginBottom": "34px" }}><figure className="photo r219 " style={{ "backgroundImage": "url('/assets/img/plates/city-singapore.svg')" }}><img src="/assets/photos/services/international-business.jpg" alt="International Business" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t('services.intlBus.hero.title')}</strong><span>{t('services.intlBus.hero.eyebrow')}</span></figcaption></figure></div>
              <section className="svc-block" id="proposition">
                <h2><span className="n">1</span>{t('services.intlBus.prop.title')}</h2>
                <p className="lead" style={{ "color": "var(--charcoal-700)" }}>{t('services.intlBus.prop.desc')}</p>

              </section>

              <section className="svc-block" id="situations">
                <h2><span className="n">2</span>{t('services.intlBus.sit.title')}</h2>
                <ul className="check-list"><li>{t('services.intlBus.sit.l1')}</li><li>{t('services.intlBus.sit.l2')}</li><li>{t('services.intlBus.sit.l3')}</li><li>{t('services.intlBus.sit.l4')}</li><li>{t('services.intlBus.sit.l5')}</li><li>{t('services.intlBus.sit.l6')}</li></ul>
              </section>

              <section className="svc-block" id="who">
                <h2><span className="n">3</span>{t('services.intlBus.who.title')}</h2>
                <ul className="check-list two"><li>{t('services.intlBus.who.l1')}</li><li>{t('services.intlBus.who.l2')}</li><li>{t('services.intlBus.who.l3')}</li><li>{t('services.intlBus.who.l4')}</li></ul>
              </section>

              <section className="svc-block" id="scope">
                <h2><span className="n">4</span>{t('services.intlBus.scope.title')}</h2>
                <div style={{ "marginBottom": "22px" }}><h4 style={{ "color": "var(--accent)", "marginBottom": "12px" }}>{t('services.intlBus.scope.h1')}</h4><ul className="check-list two"><li>{t('services.intlBus.scope.h1_l1')}</li><li>{t('services.intlBus.scope.h1_l2')}</li><li>{t('services.intlBus.scope.h1_l3')}</li><li>{t('services.intlBus.scope.h1_l4')}</li><li>{t('services.intlBus.scope.h1_l5')}</li><li>{t('services.intlBus.scope.h1_l6')}</li><li>{t('services.intlBus.scope.h1_l7')}</li><li>{t('services.intlBus.scope.h1_l8')}</li><li>{t('services.intlBus.scope.h1_l9')}</li><li>{t('services.intlBus.scope.h1_l10')}</li><li>{t('services.intlBus.scope.h1_l11')}</li></ul></div>
              </section>

              <section className="svc-block" id="approach">
                <h2><span className="n">5</span>{t('services.intlBus.approach.title')}</h2>
                <div className="phase-grid"><div className="phase"><div className="pn">01</div><h4>{t('services.intlBus.approach.p1_t')}</h4><p>{t('services.intlBus.approach.p1_d')}</p></div><div className="phase"><div className="pn">02</div><h4>{t('services.intlBus.approach.p2_t')}</h4><p>{t('services.intlBus.approach.p2_d')}</p></div><div className="phase"><div className="pn">03</div><h4>{t('services.intlBus.approach.p3_t')}</h4><p>{t('services.intlBus.approach.p3_d')}</p></div><div className="phase"><div className="pn">04</div><h4>{t('services.intlBus.approach.p4_t')}</h4><p>{t('services.intlBus.approach.p4_d')}</p></div></div>
              </section>

              <section className="svc-block" id="deliverables">
                <h2><span className="n">6</span>{t('services.intlBus.deliv.title')}</h2>
                <div className="deliverables"><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.intlBus.deliv.l1')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.intlBus.deliv.l2')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.intlBus.deliv.l3')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.intlBus.deliv.l4')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.intlBus.deliv.l5')}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t('services.intlBus.deliv.l6')}</span></div></div>
              </section>

              <section className="svc-block" id="industries">
                <h2><span className="n">7</span>{t('services.intlBus.ind.title')}</h2>
                <div className="chips"><span className="chip">{t('services.intlBus.ind.l1')}</span><span className="chip">{t('services.intlBus.ind.l2')}</span><span className="chip">{t('services.intlBus.ind.l3')}</span><span className="chip">{t('services.intlBus.ind.l4')}</span><span className="chip">{t('services.intlBus.ind.l5')}</span><span className="chip">{t('services.intlBus.ind.l6')}</span><span className="chip">{t('services.intlBus.ind.l7')}</span><span className="chip">{t('services.intlBus.ind.l8')}</span><span className="chip">{t('services.intlBus.ind.l9')}</span><span className="chip">{t('services.intlBus.ind.l10')}</span><span className="chip">{t('services.intlBus.ind.l11')}</span><span className="chip">{t('services.intlBus.ind.l12')}</span><span className="chip">{t('services.intlBus.ind.l13')}</span><span className="chip">{t('services.intlBus.ind.l14')}</span></div>
              </section>

              <section className="svc-block" id="credentials">
                <h2><span className="n">8</span>{t('services.intlBus.cred.title')}</h2>
                <div className="callout">{t('services.intlBus.cred.callout')}</div>
                <div className="logo-band" style={{ "padding": "34px 0 0" }}>
                  <p className="eyebrow">{t('services.intlBus.cred.clients')}</p>
                  <div className="logo-marquee" aria-label="Selected clients"><div className="logo-track"><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div></div>
                </div>
              </section>


              <section className="svc-block" id="connected">
                <h2><span className="n">9</span>{t('services.intlBus.conn.title')}</h2>
                <div className="connected"><a href="/india-entry"><strong>{t('services.intlBus.conn.c1')}</strong><span>{t('services.intlBus.conn.rel')}</span></a><a href="/global-transfer-pricing"><strong>{t('services.intlBus.conn.c2')}</strong><span>{t('services.intlBus.conn.rel')}</span></a><a href="/tax-cross-border"><strong>{t('services.intlBus.conn.c3')}</strong><span>{t('services.intlBus.conn.rel')}</span></a><a href="/corporate-legal-fema"><strong>{t('services.intlBus.conn.c4')}</strong><span>{t('services.intlBus.conn.rel')}</span></a></div>
              </section>

              <section className="svc-block" id="cta">
                <div className="cta-band">
                  <h2>{t('services.intlBus.cta.title')}</h2>
                  <p>{t('services.intlBus.cta.desc')}</p>
                  <div className="hero-actions">
                    <a className="btn btn-white" href="/contact?service=International%20Business"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> {t('services.intlBus.cta.btn1')}</a>
                    <a className="btn btn-light" href="/contact">{t('services.intlBus.cta.btn2')}</a>
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
