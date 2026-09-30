
"use client";
import React from 'react';
import { ContactForm } from '@/components/public/contact-form';

export default function Page() {
  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/global.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <span>Contact</span></div>
          <span className="eyebrow">Get in touch</span>
          <h1>Bring us your toughest problem.</h1>
          <p>Tell us your situation and we'll map the right scope, team and approach. General enquiries reach us at <a href="mailto:info@taggroup.in" style={{ "color": "var(--emerald-300)" }}>info@taggroup.in</a> — we typically respond within one business day.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="split top">
            <div>
              <span className="eyebrow">Enquiry</span>
              <h2>Request a consultation</h2>
              <p className="lead" style={{ "color": "var(--charcoal-700)", "marginBottom": "26px" }}>Share a few details and the relevant partner will get back to you. Prefer email? Write to <a href="mailto:info@taggroup.in" style={{ "color": "var(--accent)" }}>info@taggroup.in</a>.</p>
              <React.Suspense fallback={<div>Loading form...</div>}>
                <ContactForm />
              </React.Suspense>
            </div>
            <div>
              <span className="eyebrow">Offices</span>
              <h2>Where to find us</h2>
              <div style={{ "marginTop": "20px" }}><figure className="photo r169 " style={{ "backgroundImage": "url('/assets/img/plates/office.svg')" }}><img src="/assets/photos/contact-office.jpg" alt="TAG Group corporate office, Gurgaon" loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} /><figcaption className="ph-cap"><strong>Corporate office</strong><span>Emaar Digital Greens, Gurgaon</span></figcaption></figure></div>
              <div className="office-list">
                <div className="office-card"><span className="oc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span><div><h4>Gurgaon <em>Corporate office</em></h4><p>1808, Tower B, Emaar Digital Greens, Golf Course Extn, Sector 61, Gurgaon, Haryana 122098 (C/O TAMS)</p></div></div>
                <div className="office-card"><span className="oc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span><div><h4>Gurugram</h4><p>745-P, Sector 15, Gurugram, Haryana 122001</p></div></div>
                <div className="office-card"><span className="oc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span><div><h4>New Delhi</h4><p>FF-104, 1st Floor, Pearl Omaxe Tower, Netaji Subhash Place, Pitampura, New Delhi 110034</p></div></div>
                <div className="office-card"><span className="oc-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg></span><div><h4>UAE — Sharjah</h4><p>Office No. 10, Level 1, Sharjah Media City, Sharjah, UAE</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-alt">
        <div className="container">
          <div className="center measure mx-auto"><span className="eyebrow" style={{ "justifyContent": "center" }}>Key contacts</span><h2>Speak to us directly</h2></div>
          <div className="grid g-3" style={{ "marginTop": "40px" }}>
            <div className="card"><span className="kicker" style={{ "color": "var(--accent)", "fontSize": ".72rem", "letterSpacing": ".14em", "textTransform": "uppercase", "fontWeight": "650" }}>Managing Partner</span><h3 style={{ "marginTop": "8px" }}>Gaurav Sharma</h3><p>Direct &amp; International Tax · CFO Advisory</p><p style={{ "fontSize": ".92rem" }}><a href="mailto:gaurav@taggroup.in" style={{ "color": "var(--accent)" }}>gaurav@taggroup.in</a><br />+91 88607 16777</p><a className="link-arrow" href="/people/gaurav" style={{ "fontSize": ".88rem" }}>Full profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
            <div className="card"><span className="kicker" style={{ "color": "var(--accent)", "fontSize": ".72rem", "letterSpacing": ".14em", "textTransform": "uppercase", "fontWeight": "650" }}>Partner — HR</span><h3 style={{ "marginTop": "8px" }}>Ishita Sharma</h3><p>Human Capital &amp; HR Advisory</p><p style={{ "fontSize": ".92rem" }}><a href="mailto:ishita@taggroup.in" style={{ "color": "var(--accent)" }}>ishita@taggroup.in</a></p><a className="link-arrow" href="/people/ishita" style={{ "fontSize": ".88rem" }}>Full profile <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
            <div className="card"><span className="kicker" style={{ "color": "var(--accent)", "fontSize": ".72rem", "letterSpacing": ".14em", "textTransform": "uppercase", "fontWeight": "650" }}>New business</span><h3 style={{ "marginTop": "8px" }}>General enquiries</h3><p>Fastest route for new engagements</p><p style={{ "fontSize": ".92rem" }}><a href="mailto:info@taggroup.in" style={{ "color": "var(--accent)" }}>info@taggroup.in</a></p><a className="link-arrow" href="/leadership" style={{ "fontSize": ".88rem" }}>See all partners <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
          </div>
        </div>
      </section>
    </>
  );
}
