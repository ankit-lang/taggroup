
"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/insights.svg')"}}></div>
  <div className="container">
    <div className="breadcrumb"><a href="/index">Home</a> / <a href="/insights">Insights &amp; Media</a> / <span>{t('insights_articles.tags.uae')}</span></div>
    <span className="eyebrow">{t('insights_articles.tags.uae')}</span>
    <h1 style={{ maxWidth: "24ch" }}>{t('insights_articles.uae.title')}</h1>
    <p>{t('insights_articles.uae.meta')}</p>
  </div>
</section>
<section className="section">
  <div className="container">
    <div className="svc-layout">
      <aside className="svc-nav">
        <div className="side-card">
          <h5>{t('insights_articles.sidebar.download.title')}</h5>
          <p className="lead-note">{t('insights_articles.sidebar.download.note')}</p>
          <a className="btn btn-primary" href="/assets/insight-pdfs/uae-corporate-tax-indian-groups.pdf" download style={{"width":"100%","justifyContent":"center"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> {t('insights_articles.sidebar.download.btn')}</a>
        </div>
        <div className="side-card" style={{"marginTop":"18px"}}>
          <h5>{t('insights_articles.sidebar.author')}</h5>
          <a className="pmini" href="/people/vishal"><span className="pmini-av">VT</span><span className="pmini-info"><strong>Vishal Tayal</strong><span>Partner — UAE Desk</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
        <div className="side-card" style={{"marginTop":"18px"}}>
          <h5>{t('insights_articles.sidebar.more')}</h5>
          <a className="pmini" href="/global-tp-defensible-file"><span className="pmini-av">GS</span><span className="pmini-info"><strong>{t('insights_articles.tp.title')}</strong><span>{t('insights_articles.tags.tp')}</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="pmini" href="/india-entry-2026-structure"><span className="pmini-av">GS</span><span className="pmini-info"><strong>{t('insights_articles.india.title')}</strong><span>{t('insights_articles.tags.india')}</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="pmini" href="/building-a-gcc-from-india"><span className="pmini-av">KV</span><span className="pmini-info"><strong>{t('insights_articles.gcc.title')}</strong><span>{t('insights_articles.tags.gcc')}</span></span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
        </div>
      </aside>
      <div>
        <div style={{"marginBottom":"32px"}}><figure className="photo r219 " style={{"backgroundImage":"url('/assets/img/plates/city-uae.svg')"}}><img src="/assets/photos/insights/uae-corporate-tax-indian-groups.jpg" alt="UAE Corporate Tax: what Indian groups must plan for" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /></figure></div>
        
        <div className="article-body">
          <p>{t('insights_articles.uae.body[0]')}</p>
          <p>{t('insights_articles.uae.body[1]')}</p>
          <p>{t('insights_articles.uae.body[2]')}</p>
          <p>{t('insights_articles.uae.body[3]')}</p>
          <p>{t('insights_articles.uae.body[4]')}</p>
        </div>
        <div className="excl-note" style={{"marginTop":"26px"}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h0"/></svg><span>{t('insights_articles.excl_note')}</span></div>
        <div className="cta-band" style={{"marginTop":"34px"}}>
          <h2>{t('insights_articles.cta.title')}</h2>
          <p>{t('insights_articles.cta.desc')}</p>
          <div className="hero-actions">
            <a className="btn btn-white" href="#" data-newsletter><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> {t('insights_articles.cta.btn1')}</a>
            <a className="btn btn-light" href="mailto:vishal@taggroup.in">Email Vishal</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
