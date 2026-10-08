"use client";
import React from 'react';
import { useI18n } from '@/lib/i18n';

export default function Page() {
  const { t } = useI18n();

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/life.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">{t('leadership_page.breadcrumb.home')}</a> / <span>{t('leadership_page.breadcrumb.leadership')}</span></div>
          <span className="eyebrow">{t('leadership_page.hero.eyebrow')}</span>
          <h1>{t('leadership_page.hero.title')}</h1>
          <p>{t('leadership_page.hero.desc')}</p>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="person-feature reveal">
            <a className="pf-photo avatar" href="/people/gaurav"><img src="/assets/photos/people/gaurav.jpg" alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><span className="initials">GS</span></a>
            <div className="pf-body">
              <span className="p-role">{t('leadership_page.people.gaurav.role')}</span>
              <h2>{t('leadership_page.people.gaurav.name')}</h2>
              <p className="p-title">{t('leadership_page.people.gaurav.title')}</p>
              <p className="pf-lead">{t('leadership_page.people.gaurav.desc')}</p>
              <div className="p-tags">
                <span>{t('leadership_page.people.gaurav.tags[0]')}</span>
                <span>{t('leadership_page.people.gaurav.tags[1]')}</span>
                <span>{t('leadership_page.people.gaurav.tags[2]')}</span>
                <span>{t('leadership_page.people.gaurav.tags[3]')}</span>
                <span>{t('leadership_page.people.gaurav.tags[4]')}</span>
                <span>{t('leadership_page.people.gaurav.tags[5]')}</span>
              </div>
              <div className="p-meta">
                <a href="mailto:gaurav@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> gaurav@taggroup.in</a>
                <span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-3z" /></svg> +91 88607 16777</span>
              </div>
              <div className="hero-actions" style={{ marginTop: "6px" }}>
                <a className="btn btn-primary" href="/people/gaurav">{t('leadership_page.actions.view_full')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                <a className="btn btn-ghost" href="/assets/profiles/gaurav.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> {t('leadership_page.actions.download')}</a>
              </div>
            </div>
          </div>
          
          <div className="group-label"><h3>{t('leadership_page.sections.partners')}</h3></div>
          <div className="people-grid cols-5">
            {[
              { id: 'k-vishnu', key: 'vishnu', initials: 'KV' },
              { id: 'sumit', key: 'sumit', initials: 'SG' },
              { id: 'mr-pradip', key: 'pradip', initials: 'MR' },
              { id: 'ishita', key: 'ishita', initials: 'IS' },
              { id: 'naresh', key: 'naresh', initials: 'NG' },
              { id: 'jai', key: 'jai', initials: 'JP' },
              { id: 'karuna', key: 'karuna', initials: 'KS' },
              { id: 'manuj', key: 'manuj', initials: 'MS' },
              { id: 'sushil', key: 'sushil', initials: 'SS' },
              { id: 'amit', key: 'amit', initials: 'AS' }
            ].map(p => (
              <a key={p.id} className="person reveal" href={`/people/${p.id}`}>
                <div className="avatar">
                  <img src={`/assets/photos/people/${p.id}.jpg`} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <span className="initials">{p.initials}</span>
                </div>
                <div className="p-body">
                  <span className="p-role">{t(`leadership_page.people.${p.key}.role`)}</span>
                  <h3>{t(`leadership_page.people.${p.key}.name`)}</h3>
                  <p className="p-title">{t(`leadership_page.people.${p.key}.title`)}</p>
                  <span className="link-arrow">{t('leadership_page.actions.view_profile')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </a>
            ))}
          </div>
          
          <div className="group-label"><h3>{t('leadership_page.sections.international')}</h3></div>
          <div className="people-grid cols-4">
            {[
              { id: 'vishal', key: 'vishal', initials: 'VT' },
              { id: 'awen', key: 'awen', initials: 'AL' },
              { id: 'hasina', key: 'hasina', initials: 'HB' }
            ].map(p => (
              <a key={p.id} className="person reveal" href={`/people/${p.id}`}>
                <div className="avatar">
                  <img src={`/assets/photos/people/${p.id}.jpg`} alt="" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
                  <span className="initials">{p.initials}</span>
                </div>
                <div className="p-body">
                  <span className="p-role">{t(`leadership_page.people.${p.key}.role`)}</span>
                  <h3>{t(`leadership_page.people.${p.key}.name`)}</h3>
                  <p className="p-title">{t(`leadership_page.people.${p.key}.title`)}</p>
                  <span className="link-arrow">{t('leadership_page.actions.view_profile')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
                </div>
              </a>
            ))}
            <a className="person person-soon reveal" href="/desks/united-states">
              <div className="avatar"><span className="initials">US</span></div>
              <div className="p-body">
                <span className="p-role">{t('leadership_page.people.us.role')}</span>
                <h3>{t('leadership_page.people.us.name')}</h3>
                <p className="p-title">{t('leadership_page.people.us.title')}</p>
                <span className="link-arrow">{t('leadership_page.actions.about_us')} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            </a>
          </div>
        </div>
      </section>
      
      <section className="section section-alt">
        <div className="container">
          <div className="cta-band">
            <h2>{t('leadership_page.cta.title')}</h2>
            <p>{t('leadership_page.cta.desc')}</p>
            <div className="hero-actions">
              <a className="btn btn-white" href="mailto:info@taggroup.in"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> info@taggroup.in</a>
              <a className="btn btn-light" href="/contact">{t('leadership_page.cta.btn')}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
