
"use client";
import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container container-wide">
          <div className="footer-top">
            <div className="footer-about">
              <Link className="logo" href="/">
                <img className="logo-img" src="/assets/img/tag-logo-gold.png" alt="TAG Group logo" />
              </Link>
              <p>Comprehensive tax, cross-border, CFO and assurance-support advisory for businesses in India and across borders.</p>
              <div className="pill-row">
                <span className="chip">India</span><span className="chip">UAE</span><span className="chip">Singapore</span><span className="chip">Mauritius</span>
              </div>
            </div>
            <div>
              <h5>Services</h5>
              <ul className="footer-links"><li><Link href="/services/tax-cross-border">Tax & Cross-Border Advisory</Link></li><li><Link href="/services/global-transfer-pricing">Global Transfer Pricing</Link></li><li><Link href="/services/global-capability-centre">Global Capability Centre</Link></li><li><Link href="/services/cfo-finance-transformation">CFO & Finance Transformation</Link></li><li><Link href="/services/risk-internal-audit">Risk, Internal Audit & Controls</Link></li><li><Link href="/services/deals-valuation">Deals, Valuation & Transaction Support</Link></li><li><Link href="/services">View all services</Link></li></ul>
            </div>
            <div>
              <h5>Firm</h5>
              <ul className="footer-links">
                <li><Link href="/about">About TAG</Link></li>
                <li><Link href="/leadership">Leadership</Link></li>
                <li><Link href="/international">Global</Link></li>
                <li><Link href="/insights">Insights &amp; Media</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h5>Offices</h5>
              <div className="footer-office"><strong>Gurgaon (Corporate)</strong>1808, Tower B, Emaar Digital Greens, Golf Course Extn, Sector 61, Gurgaon, Haryana 122098 (C/O TAMS)</div>
              <div className="footer-office"><strong>Gurugram</strong>745-P, Sector 15, Gurugram, Haryana 122001, India</div>
              <div className="footer-office"><strong>New Delhi</strong>FF-104, Pearl Omaxe Tower, Netaji Subhash Place, Pitampura, New Delhi 110034</div>
              <div className="footer-office"><strong>UAE (Sharjah)</strong>Office 10, Level 1, Sharjah Media City, Sharjah, UAE</div>
              <div className="footer-office"><a href="mailto:info@taggroup.in">info@taggroup.in</a></div>
            </div>
          </div>
          <p className="footer-disclaimer"><strong>Disclaimer &amp; non-solicitation:</strong> This website is not intended to be, and shall not be construed as, any form of advertisement, solicitation, invitation or inducement of any sort. The information provided here is for general informational purposes only and does not constitute professional, legal, tax or financial advice, nor does it create any professional or client relationship. By accessing this website, the user acknowledges that they are seeking information about TAG Group of their own accord and that there has been no solicitation, invitation or inducement of any kind. TAG Group accepts no liability for any action taken by any person relying on information on this website; users should obtain appropriate professional advice before acting on any content herein.</p>
          <div className="footer-bottom">
            <span>&copy; <span data-year>2026</span> TAG Group. All rights reserved.</span>
            <span>Tax &middot; Cross-Border &middot; CFO &middot; Assurance Support</span>
          </div>
        </div>
      </footer>
    </>
  );
}
