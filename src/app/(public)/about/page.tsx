
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/life.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <span>{t("header.about")}</span></div>
    <span className="eyebrow">{t("about.hero_eyebrow")}</span>
    <h1>{t("about.hero_title")}</h1>
    <p>{t("about.hero_desc")}</p>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="split">
      <div>
        <span className="eyebrow">{t("about.story_eyebrow")}</span>
        <h2>{t("about.story_title")}</h2>
        <p>{t("about.story_p1")}</p>
        <p>{t("about.story_p2")}</p>
      </div>
      <div>
        <figure className="photo r43 " style={{"backgroundImage":"url('/assets/img/plates/meeting.svg')"}}><img src="/assets/photos/about-boardroom.jpg" alt="TAG Group partners in discussion" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure>
        <div className="stats" style={{"marginTop":"32px"}}>
          <div className="stat"><div className="val">5</div><div className="lbl">{t("about.stat_practice")}</div></div>
          <div className="stat"><div className="val">10</div><div className="lbl">{t("about.stat_service")}</div></div>
          <div className="stat"><div className="val">4</div><div className="lbl">{t("about.stat_offices")}</div></div>
          <div className="stat"><div className="val">4+</div><div className="lbl">{t("about.stat_intl")}</div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section section-alt">
  <div className="container">
    <div className="center measure mx-auto"><span className="eyebrow">{t("about.org_eyebrow")}</span><h2>{t("about.org_title")}</h2></div>
    <div className="grid g-3" style={{"marginTop":"44px"}}>
      <div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 006 0L10 7M19 7l-2.5 6a3 3 0 006 0L20 7M8 5l4-1 4 1"/></svg></div><h3>{t("about.org_tax_title")}</h3><p>{t("about.org_tax_desc")}</p></div>
      <div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/></svg></div><h3>{t("about.org_adv_title")}</h3><p>{t("about.org_adv_desc")}</p></div>
      <div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div><h3>{t("about.org_assur_title")}</h3><p>{t("about.org_assur_desc")}</p></div>
      <div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg></div><h3>{t("about.org_cfo_title")}</h3><p>{t("about.org_cfo_desc")}</p></div>
      <div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></svg></div><h3>{t("about.org_train_title")}</h3><p>{t("about.org_train_desc")}</p></div>
      <div className="card"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18"/></svg></div><h3>{t("about.org_intl_title")}</h3><p>{t("about.org_intl_desc")}</p></div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container">
    <div className="center measure mx-auto"><span className="eyebrow">{t("about.why_eyebrow")}</span><h2>{t("about.why_title")}</h2>
    <p className="lead">{t("about.why_desc")}</p></div>
    <div className="grid g-4" style={{"marginTop":"44px"}}>
      <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M17 6.2A3 3 0 0118 12M20 20a5 5 0 00-3.5-4.8"/></svg></div><div><h4>{t("about.diff_lead_title")}</h4><p>{t("about.diff_lead_desc")}</p></div></div>
      <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/></svg></div><div><h4>{t("about.diff_syn_title")}</h4><p>{t("about.diff_syn_desc")}</p></div></div>
      <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg></div><div><h4>{t("about.diff_del_title")}</h4><p>{t("about.diff_del_desc")}</p></div></div>
      <div className="feature"><div className="fx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17l9 5 9-5"/></svg></div><div><h4>{t("about.diff_win_title")}</h4><p>{t("about.diff_win_desc")}</p></div></div>
    </div>
  </div>
</section>


<section className="section section-alt">
  <div className="container">
    <div className="center measure mx-auto"><span className="eyebrow">{t("about.ind_eyebrow")}</span><h2>{t("about.ind_title")}</h2>
    <p className="lead">{t("about.ind_desc")}</p></div>
    <div className="chips center" style={{"justifyContent":"center","marginTop":"36px"}}>
      {["aviation", "automation", "automotive", "education", "retail", "logistics", "fmcg", "construction", "telecom", "hospitality", "real_estate", "pharma", "healthcare", "oil_gas", "tech", "infra", "renewables"].map(k => (
        <span key={k} className="chip">{t(`about.industries.${k}`)}</span>
      ))}
    </div>
  </div>
</section>

<section className="section-sm">
  <div className="container container-wide">
    <figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/team.svg')"}}><img src="/assets/photos/about-team.jpg" alt="The TAG Group team" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>{t("about.team_title")}</strong><span>{t("about.team_desc")}</span></figcaption></figure>
  </div>
</section>

<section className="section" id="credentials">
  <div className="container container-wide">
    <div className="center measure mx-auto">
      <span className="eyebrow" style={{"justifyContent":"center"}}>{t("about.cred_eyebrow")}</span>
      <h2>{t("about.cred_title")}</h2>
      <p className="lead">{t("about.cred_desc")}</p>
    </div>
    <div className="logo-grid"><div className="logo-item" title="kindlife"><span>kindlife</span><img src="/assets/logos/kindlife.png" alt="kindlife" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Unitech"><span>Unitech</span><img src="/assets/logos/unitech.png" alt="Unitech" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Biz2Credit"><span>Biz2Credit</span><img src="/assets/logos/biz2credit.png" alt="Biz2Credit" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Samsung"><span>Samsung</span><img src="/assets/logos/samsung.png" alt="Samsung" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Provana"><span>Provana</span><img src="/assets/logos/provana.png" alt="Provana" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Brookfield"><span>Brookfield</span><img src="/assets/logos/brookfield.png" alt="Brookfield" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Rosenberger"><span>Rosenberger</span><img src="/assets/logos/rosenberger.png" alt="Rosenberger" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Bainbridge Navigation"><span>Bainbridge Navigation</span><img src="/assets/logos/bainbridge.png" alt="Bainbridge Navigation" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Triggerise"><span>Triggerise</span><img src="/assets/logos/triggerise.png" alt="Triggerise" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Diagast"><span>Diagast</span><img src="/assets/logos/diagast.png" alt="Diagast" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="ORA Tobacco FZE"><span>ORA Tobacco FZE</span><img src="/assets/logos/ora-tobacco.png" alt="ORA Tobacco FZE" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="EthosData"><span>EthosData</span><img src="/assets/logos/ethosdata.png" alt="EthosData" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Pesto"><span>Pesto</span><img src="/assets/logos/pesto.png" alt="Pesto" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Addverb"><span>Addverb</span><img src="/assets/logos/addverb.png" alt="Addverb" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="Chazey Partners"><span>Chazey Partners</span><img src="/assets/logos/chazey-partners.png" alt="Chazey Partners" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div><div className="logo-item" title="BotLab Dynamics"><span>BotLab Dynamics</span><img src="/assets/logos/botlab-dynamics.png" alt="BotLab Dynamics" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} onLoad={(e) => (e.currentTarget.style.opacity = '1')} /></div></div>
    <p className="logo-note">{t("about.cred_note")}</p>
  </div>
</section>

<section className="section section-alt">
  <div className="container">
    <div className="split">
      <div>
        <span className="eyebrow">{t("about.net_eyebrow")}</span>
        <h2>{t("about.net_title")}</h2>
        <p>{t("about.net_desc")}</p>
      </div>
      <div>
        <div className="chips">
          <span className="chip accent">{t("about.networks.sa")}</span>
          <span className="chip accent">{t("about.networks.taxepolis")}</span>
          <span className="chip accent">{t("about.networks.fideco")}</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section">
  <div className="container"><div className="cta-band">
    <h2>{t("about.cta_title")}</h2>
    <p>{t("about.cta_desc")}</p>
    <div className="hero-actions"><a className="btn btn-white" href="/leadership">{t("about.cta_btn1")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="btn btn-light" href="/contact">{t("about.cta_btn2")}</a></div>
  </div></div>
</section>
    </>
  );
}
