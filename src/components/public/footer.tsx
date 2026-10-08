
"use client";
import React from 'react';
import Link from 'next/link';

import { useI18n } from '@/lib/i18n';

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
              <div className="footer-office"><a href="mailto:info@taggroup.in">info@taggroup.in</a></div>
            </div>
          </div>
          <p className="footer-disclaimer"><strong>{t('footer_extended.disclaimer.title')}</strong> {t('footer_extended.disclaimer.text')}</p>
          <div className="footer-bottom">
            <span>&copy; <span data-year>2026</span> {t('footer_extended.all_rights')}</span>
            <span>{t('footer_extended.bottom_tags')}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
