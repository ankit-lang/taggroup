
"use client";
import React from 'react';
import Link from 'next/link';

import { useI18n } from '@/lib/i18n';

const LINKEDIN_URL = 'https://www.linkedin.com/company/tagadvisorsllp/'
const LinkedInIcon = () => (<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"/></svg>)

export function Footer() {
  const { t } = useI18n();
  return (
    <>
      <footer className="site-footer">
        <div className="container container-wide">
          <div className="footer-top">
            <div className="footer-about">
              <Link className="logo" href="/">
                <img className="logo-img" src="/assets/img/tag-logo-gold.png" alt="TAG Group logo" />
              </Link>
              <p>{t('footer_extended.about_text')}</p>
              <div className="pill-row">
                <span className="chip">{t('footer_extended.countries.in')}</span><span className="chip">{t('footer_extended.countries.uae')}</span><span className="chip">{t('footer_extended.countries.sg')}</span><span className="chip">{t('footer_extended.countries.mu')}</span>
              </div>
              <a className="footer-linkedin" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon /> {t('footer_extended.follow_linkedin')}
              </a>
            </div>
            <div>
              <h5>{t('footer_extended.headings.services')}</h5>
              <ul className="footer-links"><li><Link href="/services/tax-cross-border">{t('footer_extended.services_links.tax')}</Link></li><li><Link href="/services/global-transfer-pricing">{t('footer_extended.services_links.tp')}</Link></li><li><Link href="/services/global-capability-centre">{t('footer_extended.services_links.gcc')}</Link></li><li><Link href="/services/cfo-finance-transformation">{t('footer_extended.services_links.cfo')}</Link></li><li><Link href="/services/risk-internal-audit">{t('footer_extended.services_links.risk')}</Link></li><li><Link href="/services/deals-valuation">{t('footer_extended.services_links.deals')}</Link></li><li><Link href="/services">{t('footer_extended.services_links.all')}</Link></li></ul>
            </div>
            <div>
              <h5>{t('footer_extended.headings.firm')}</h5>
              <ul className="footer-links">
                <li><Link href="/about">{t('footer_extended.firm_links.about')}</Link></li>
                <li><Link href="/leadership">{t('footer_extended.firm_links.leadership')}</Link></li>
                <li><Link href="/international">{t('footer_extended.firm_links.global')}</Link></li>
                <li><Link href="/insights">{t('footer_extended.firm_links.insights')}</Link></li>
                <li><Link href="/careers">{t('footer_extended.firm_links.careers')}</Link></li>
                <li><Link href="/contact">{t('footer_extended.firm_links.contact')}</Link></li>
              </ul>
            </div>
            <div>
              <h5>{t('footer_extended.headings.offices')}</h5>
              <div className="footer-office"><strong>{t('footer_extended.offices.corporate')}</strong>{t("footer_extended.offices.addr_corporate")}</div>
              <div className="footer-office"><strong>{t('footer_extended.offices.head')}</strong>{t("footer_extended.offices.addr_head")}</div>
              <div className="footer-office"><strong>{t('footer_extended.offices.delhi')}</strong>{t("footer_extended.offices.addr_delhi")}</div>
              <div className="footer-office"><strong>{t('footer_extended.offices.uae')}</strong>{t("footer_extended.offices.addr_uae")}</div>
              <div className="footer-office"><a href="mailto:contact@taggroup.in">contact@taggroup.in</a></div>
            </div>
          </div>
          <p className="footer-disclaimer"><strong>{t('footer_extended.disclaimer.title')}</strong> {t('footer_extended.disclaimer.text')}</p>
          <div className="footer-bottom">
            <span>&copy; <span data-year>2026</span> {t('footer_extended.all_rights')}</span>
            <span className="footer-bottom-right">
              <span>{t('footer_extended.bottom_tags')}</span>
              <a className="footer-linkedin-mini" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="TAG Advisors on LinkedIn" title="TAG Advisors on LinkedIn">
                <LinkedInIcon />
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
