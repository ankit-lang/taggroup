
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="hero" data-slider>
  
      <div className="hero-slide s1">
        <div className="hero-media" style={{"backgroundImage":"url('/assets/img/hero/tp.svg')"}}>
          <img src="/assets/photos/hero/global-transfer-pricing.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="hero-content"><div className="container">
          <span className="hero-tag">{t("home.slide1_tag")}</span>
          <h1>{t("home.slide1_title_1")} <em>{t("home.slide1_title_2")}</em></h1>
          <p className="hero-sub">{t("home.slide1_sub")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/services/global-transfer-pricing">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            <a className="btn btn-light" href="/contact">{t("home.slide_btn2")}</a>
          </div>
        </div></div>
      </div>
      <div className="hero-slide s2">
        <div className="hero-media" style={{"backgroundImage":"url('/assets/img/hero/india.svg')"}}>
          <img src="/assets/photos/hero/india-entry.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="hero-content"><div className="container">
          <span className="hero-tag">{t("home.slide2_tag")}</span>
          <h1>{t("home.slide2_title_1")} <em>{t("home.slide2_title_2")}</em></h1>
          <p className="hero-sub">{t("home.slide2_sub")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/services/india-entry">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            <a className="btn btn-light" href="/contact">{t("home.slide_btn2")}</a>
          </div>
        </div></div>
      </div>
      <div className="hero-slide s3">
        <div className="hero-media" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}>
          <img src="/assets/photos/hero/life-at-tag.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="hero-content"><div className="container">
          <span className="hero-tag">{t("home.slide3_tag")}</span>
          <h1>{t("home.slide3_title_1")} <em>{t("home.slide3_title_2")}</em></h1>
          <p className="hero-sub">{t("home.slide3_sub")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/careers#life-at-tag">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            <a className="btn btn-light" href="/contact">{t("home.slide_btn2")}</a>
          </div>
        </div></div>
      </div>
      <div className="hero-slide s4">
        <div className="hero-media" style={{"backgroundImage":"url('/assets/img/hero/intltax.svg')"}}>
          <img src="/assets/photos/hero/international-tax.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="hero-content"><div className="container">
          <span className="hero-tag">{t("home.slide4_tag")}</span>
          <h1>{t("home.slide4_title_1")} <em>{t("home.slide4_title_2")}</em></h1>
          <p className="hero-sub">{t("home.slide4_sub")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/services/tax-cross-border">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            <a className="btn btn-light" href="/contact">{t("home.slide_btn2")}</a>
          </div>
        </div></div>
      </div>
      <div className="hero-slide s5">
        <div className="hero-media" style={{"backgroundImage":"url('/assets/img/hero/audit.svg')"}}>
          <img src="/assets/photos/hero/risk-controls.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="hero-content"><div className="container">
          <span className="hero-tag">{t("home.slide5_tag")}</span>
          <h1>{t("home.slide5_title_1")} <em>{t("home.slide5_title_2")}</em></h1>
          <p className="hero-sub">{t("home.slide5_sub")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/services/risk-internal-audit">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            <a className="btn btn-light" href="/contact">{t("home.slide_btn2")}</a>
          </div>
        </div></div>
      </div>
      <div className="hero-slide s6">
        <div className="hero-media" style={{"backgroundImage":"url('/assets/img/hero/cfo.svg')"}}>
          <img src="/assets/photos/hero/cfo-advisory.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="hero-content"><div className="container">
          <span className="hero-tag">{t("home.slide6_tag")}</span>
          <h1>{t("home.slide6_title_1")} <em>{t("home.slide6_title_2")}</em></h1>
          <p className="hero-sub">{t("home.slide6_sub")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/services/cfo-finance-transformation">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            <a className="btn btn-light" href="/contact">{t("home.slide_btn2")}</a>
          </div>
        </div></div>
      </div>
      <div className="hero-slide s7">
        <div className="hero-media" style={{"backgroundImage":"url('/assets/img/hero/insights.svg')"}}>
          <img src="/assets/photos/hero/insights-media.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="hero-content"><div className="container">
          <span className="hero-tag">{t("home.slide7_tag")}</span>
          <h1>{t("home.slide7_title_1")} <em>{t("home.slide7_title_2")}</em></h1>
          <p className="hero-sub">{t("home.slide7_sub")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/insights">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            <a className="btn btn-light" href="/contact">{t("home.slide_btn2")}</a>
          </div>
        </div></div>
      </div>
      <div className="hero-slide s8">
        <div className="hero-media" style={{"backgroundImage":"url('/assets/img/hero/global.svg')"}}>
          <img src="/assets/photos/hero/international-presence.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
        </div>
        <div className="hero-content"><div className="container">
          <span className="hero-tag">{t("home.slide8_tag")}</span>
          <h1>{t("home.slide8_title_1")} <em>{t("home.slide8_title_2")}</em></h1>
          <p className="hero-sub">{t("home.slide8_sub")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/international">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
            <a className="btn btn-light" href="/contact">{t("home.slide_btn2")}</a>
          </div>
        </div></div>
      </div>
  <div className="hero-controls"><div className="container">
    <div className="hero-dots" role="tablist" aria-label="Slides"></div>
    <div className="hero-arrows">
      <button data-prev aria-label="Previous slide"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg></button>
      <button data-pause aria-label="Pause"></button>
      <button data-next aria-label="Next slide"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg></button>
    </div>
  </div></div>
</section>


<section className="section">
  <div className="container">
    <div className="split">
      <div className="reveal">
        <span className="eyebrow">{t("home.who_eyebrow")}</span>
        <h2>{t("home.who_title")}</h2>
        <p className="lead">{t("home.who_lead")}</p>
        <p>{t("home.who_p")}</p>
        <a className="btn btn-primary" href="/about">{t("home.who_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
      <div className="reveal">
        <figure className="photo r43 photo-frame" style={{"backgroundImage":"url('/assets/img/plates/office.svg')"}}><img src="/assets/photos/home-office.jpg" alt="Inside a TAG Group office" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t("home.who_img_title")}</strong><span>{t("home.who_img_desc")}</span></figcaption></figure>
      </div>
    </div>
    <div className="factstrip reveal" style={{"marginTop":"clamp(44px,5vw,70px)"}}>
      <div className="fs"><div className="fs-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V5l7-2v18M19 21V9l-7-2M9 8h0M9 12h0M9 16h0M15 12h0M15 16h0"/></svg></div><b>{t("home.stat1_title")}</b><span>{t("home.stat1_desc")}</span></div>
      <div className="fs"><div className="fs-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/></svg></div><b>{t("home.stat2_title")}</b><span>{t("home.stat2_desc")}</span></div>
      <div className="fs"><div className="fs-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg></div><b>{t("home.stat3_title")}</b><span>{t("home.stat3_desc")}</span></div>
      <div className="fs"><div className="fs-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg></div><b>{t("home.stat4_title")}</b><span>{t("home.stat4_desc")}</span></div>
    </div>
  </div>
</section>


<section className="section section-alt">
  <div className="container">
    <div className="center measure mx-auto reveal">
      <span className="eyebrow">{t("home.what_eyebrow")}</span>
      <h2>{t("home.what_title")}</h2>
      <p className="lead">{t("home.what_lead")}</p>
    </div>
    <div className="grid g-3" style={{"marginTop":"48px"}}>
        <a className="card svc-card flagship reveal" href="/services/global-transfer-pricing">
          <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg></div>
          <span className="kicker">{t("header.services_dropdown.tp.desc")}</span>
          <h3>{t("header.services_dropdown.tp.title")}</h3>
          <span className="link-arrow">{t("home.learn_more")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
        <a className="card svc-card reveal" href="/services/global-capability-centre">
          <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/></svg></div>
          <span className="kicker">{t("header.services_dropdown.gcc.desc")}</span>
          <h3>{t("header.services_dropdown.gcc.title")}</h3>
          <span className="link-arrow">{t("home.learn_more")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
        <a className="card svc-card reveal" href="/services/tax-cross-border">
          <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 006 0L10 7M19 7l-2.5 6a3 3 0 006 0L20 7M8 5l4-1 4 1"/></svg></div>
          <span className="kicker">{t("header.services_dropdown.tax.desc")}</span>
          <h3>{t("header.services_dropdown.tax.title")}</h3>
          <span className="link-arrow">{t("home.learn_more")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
        <a className="card svc-card reveal" href="/services/cfo-finance-transformation">
          <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></div>
          <span className="kicker">{t("header.services_dropdown.cfo.desc")}</span>
          <h3>{t("header.services_dropdown.cfo.title")}</h3>
          <span className="link-arrow">{t("home.learn_more")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
        <a className="card svc-card reveal" href="/services/india-entry">
          <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V4M4 4h13l-2 4 2 4H4"/></svg></div>
          <span className="kicker">{t("header.services_dropdown.india.desc")}</span>
          <h3>{t("header.services_dropdown.india.title")}</h3>
          <span className="link-arrow">{t("home.learn_more")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a>
        <a className="card svc-card reveal" href="/services/risk-internal-audit">
          <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
          <span className="kicker">{t("header.services_dropdown.risk.desc")}</span>
          <h3>{t("header.services_dropdown.risk.title")}</h3>
          <span className="link-arrow">{t("home.learn_more")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </a></div>
    <div className="center" style={{"marginTop":"36px"}}>
      <a className="btn btn-ghost" href="/services">{t("home.what_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
  </div>
</section>


<section className="section section-dark band-visual">
  <div className="band-img" style={{"backgroundImage":"url('/assets/img/world-hero.svg')","opacity":".28"}}></div>
  <div className="container">
    <div className="center measure-lg mx-auto reveal" style={{"marginBottom":"44px"}}>
      <span className="eyebrow" style={{"justifyContent":"center"}}>{t("home.flag_eyebrow")}</span>
      <h2>{t("home.flag_title")}</h2>
      <p className="lead">{t("home.flag_desc")}</p>
    </div>
    <div className="grid g-3">
      <a className="flagbanner reveal" href="/services/global-transfer-pricing">
        <div className="fb-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg></div>
        <span className="kicker">{t("home.flag1_kicker")}</span>
        <h3>{t("home.flag1_title")}</h3>
        <p>{t("home.flag1_desc")}</p>
        <div className="chips">
          <span className="chip">{t("home.chip_nl")}</span><span className="chip">{t("home.chip_lu")}</span><span className="chip">{t("home.chip_sg")}</span><span className="chip">{t("home.chip_uae")}</span><span className="chip">{t("home.chip_au")}</span><span className="chip">{t("home.chip_in")}</span><span className="chip accent">{t("home.chip_others")}</span>
        </div>
        <span className="link-arrow">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>
      <a className="flagbanner reveal" href="/services/global-capability-centre">
        <div className="fb-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/></svg></div>
        <span className="kicker">{t("home.flag2_kicker")}</span>
        <h3>{t("home.flag2_title")}</h3>
        <p>{t("home.flag2_desc")}</p>
        <div className="chips">
          <span className="chip">{t("home.chip_bk")}</span><span className="chip">{t("home.chip_mc")}</span><span className="chip">{t("home.chip_mis")}</span><span className="chip accent">{t("home.chip_us_uae")}</span>
        </div>
        <span className="link-arrow">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>
      <a className="flagbanner reveal" href="/services/india-entry">
        <div className="fb-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 21V4M4 4h13l-2 4 2 4H4"/></svg></div>
        <span className="kicker">{t("home.flag3_kicker")}</span>
        <h3>{t("home.flag3_title")}</h3>
        <p>{t("home.flag3_desc")}</p>
        <div className="chips">
          <span className="chip">{t("home.chip_em")}</span><span className="chip">{t("home.chip_inc")}</span><span className="chip">{t("home.chip_sr")}</span><span className="chip accent">{t("home.chip_e2e")}</span>
        </div>
        <span className="link-arrow">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>
    </div>
  </div>
</section>


<section className="section logo-band">
  <div className="container container-wide">
    <div className="lb-head reveal">
      <span className="eyebrow" style={{"justifyContent":"center"}}>{t("about.cred_eyebrow")}</span>
      <h2>{t("home.cred_title")}</h2>
      <p className="lead">{t("home.cred_desc")}</p>
    </div>
    <div className="logo-rows" role="group" aria-label="Selected clients"><div className="logo-marquee"><div className="logo-track"><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div></div><div className="logo-marquee rev"><div className="logo-track"><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div></div></div>
    <p className="logo-note"><a className="link-arrow" href="/about#credentials">{t("home.cred_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></p>
  </div>
</section>


<section className="section">
  <div className="container">
    <div className="split-head reveal">
      <div><span className="eyebrow">{t("header.insights")}</span><h2>{t("home.insights_title")}</h2></div>
      <a className="btn btn-ghost" href="/insights">{t("home.insights_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
    </div>
    <div className="grid g-3" style={{"marginTop":"36px"}}>
      <a className="insight-card reveal" href="/insights/global-tp-defensible-file">
        <figure className="photo r169 ic-thumb" style={{"backgroundImage":"url('/assets/img/plates/advisory.svg')"}}><img src="/assets/photos/insights/global-tp-defensible-file.jpg" alt="Transfer pricing analysis" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure>
        <span className="ic-tag">{t("home.ic1_tag")}</span>
        <h3>{t("home.ic1_title")}</h3>
        <p>{t("home.ic1_desc")}</p>
        <span className="link-arrow">{t("home.ic_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>
      <a className="insight-card reveal" href="/insights/uae-corporate-tax-indian-groups">
        <figure className="photo r169 ic-thumb" style={{"backgroundImage":"url('/assets/img/plates/city-uae.svg')"}}><img src="/assets/photos/insights/uae-corporate-tax-indian-groups.jpg" alt="UAE skyline" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure>
        <span className="ic-tag">{t("home.ic2_tag")}</span>
        <h3>{t("home.ic2_title")}</h3>
        <p>{t("home.ic2_desc")}</p>
        <span className="link-arrow">{t("home.ic_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>
      <a className="insight-card reveal" href="/insights#media">
        <figure className="photo r169 ic-thumb" style={{"backgroundImage":"url('/assets/img/plates/article.svg')"}}><img src="/assets/photos/media/weekly-brief.jpg" alt="TAG Group in the media" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure>
        <span className="ic-tag">{t("home.ic3_tag")}</span>
        <h3>{t("home.ic3_title")}</h3>
        <p>{t("home.ic3_desc")}</p>
        <span className="link-arrow">{t("home.slide_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </a>
    </div>
  </div>
</section>


<section className="section section-dark band-visual">
  <div className="band-img" style={{"backgroundImage":"url('/assets/img/world-hero.svg')","opacity":".5"}}></div>
  <div className="container">
    <div className="split reverse">
      <div className="reveal">
        <div className="desk-tiles">
          <a className="desk-tile" href="/desks/uae"><span className="dt-flag">🇦🇪</span><span className="dt-txt"><b>{t("header.global_dropdown.uae.title")}</b><em>{t("home.desk1_loc")}</em></span><span className="dt-tag">{t("home.desk_tag")}</span></a>
          <a className="desk-tile" href="/desks/singapore-malaysia"><span className="dt-flag">🇸🇬</span><span className="dt-txt"><b>{t("header.global_dropdown.sg.title")}</b><em>{t("home.desk2_loc")}</em></span><span className="dt-tag">{t("home.desk_tag")}</span></a>
          <a className="desk-tile" href="/desks/mauritius"><span className="dt-flag">🇲🇺</span><span className="dt-txt"><b>{t("header.global_dropdown.mu.title")}</b><em>{t("home.desk3_loc")}</em></span><span className="dt-tag">{t("home.desk_tag")}</span></a>
          <a className="desk-tile soon" href="/desks/united-states"><span className="dt-flag">🇺🇸</span><span className="dt-txt"><b>{t("header.global_dropdown.us.title")}</b><em>{t("home.desk4_loc")}</em></span><span className="dt-tag">{t("home.desk_soon")}</span></a>
        </div>
      </div>
      <div className="reveal">
        <span className="eyebrow">{t("home.global_eyebrow")}</span>
        <h2>{t("home.global_title")}</h2>
        <p>{t("home.global_desc")}</p>
        <a className="btn btn-light" href="/international">{t("home.global_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      </div>
    </div>
  </div>
</section>


<section className="section section-alt">
  <div className="container">
    <div className="center measure mx-auto reveal">
      <span className="eyebrow" style={{"justifyContent":"center"}}>{t("home.ldr_eyebrow")}</span>
      <h2>{t("home.ldr_title")}</h2>
    </div>
    <div className="grid g-3" style={{"marginTop":"44px"}}>
      <div className="qcard reveal">
        <p>{t("home.ldr1_q")}</p>
        <div className="qmeta"><b>{t("home.ldr1_name")}</b><span>{t("home.ldr1_title")}</span></div>
      </div>
      <div className="qcard reveal">
        <p>{t("home.ldr2_q")}</p>
        <div className="qmeta"><b>{t("home.ldr2_name")}</b><span>{t("home.ldr2_title")}</span></div>
      </div>
      <div className="qcard reveal">
        <p>{t("home.ldr3_q")}</p>
        <div className="qmeta"><b>{t("home.ldr3_name")}</b><span>{t("home.ldr3_title")}</span></div>
      </div>
    </div>
  </div>
</section>


<section className="section">
  <div className="container"><div className="cta-band reveal">
    <span className="eyebrow" style={{"color":"#fff"}}>{t("home.cta_eyebrow")}</span>
    <h2>{t("home.cta_title")}</h2>
    <p>{t("home.cta_desc")}</p>
    <div className="hero-actions"><a className="btn btn-white" href="/contact">{t("home.cta_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="btn btn-light" href="/services">{t("home.cta_btn2")}</a></div>
  </div></div>
</section>
    </>
  );
}
