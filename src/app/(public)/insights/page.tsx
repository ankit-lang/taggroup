import React from 'react';
import { getPublications } from '@/actions/publication.actions';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Page() {
  const publications = await getPublications({ search: '', category: 'All' }) || [];

  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/insights.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <span>Insights &amp; Media</span></div>
          <span className="eyebrow">Insights &amp; Media</span>
          <h1>Ideas, updates and news from TAG Group.</h1>
          <p>Read our latest thinking, subscribe to newsletters built for decision-makers, and follow where TAG Group appears in the media — all in one place.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="tabbar" data-tabs>
            <button data-tab="tab-insights" className="active">Insights</button>
            <button data-tab="tab-media">Media</button>
          </div>

          <div className="tabpanel active" id="tab-insights">
            <div style={{ "margin": "34px 0 8px" }}><h2 style={{ "fontSize": "1.5rem" }}>Latest articles &amp; editions</h2>
              <p className="lead" style={{ "marginTop": "6px" }}>Read a summary, open the full piece, or download it as a PDF.</p></div>
            <div className="grid g-3" style={{ "marginTop": "20px" }}>
              {publications.map((pub: any) => (
                <div className="insight-card reveal" key={pub.id}>
                  <figure className="photo r169 ic-thumb" style={{ "backgroundImage": pub.image_url ? `url('${pub.image_url}')` : "url('/assets/img/plates/office.svg')" }}>
                    {pub.image_url && <img src={pub.image_url} alt={pub.title} loading="lazy" />}
                  </figure>
                  <span className="ic-tag">{pub.category || 'General'}</span>
                  <div className="ic-meta">
                    {new Date(pub.created_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })} &middot; TAG Group
                  </div>
                  <h3>{pub.title}</h3>
                  {/* Using a substring or a meta_description if it exists. Fallback to a slice of content. */}
                  <p>{pub.meta_description || pub.content?.substring(0, 120) + '...'}</p>
                  <div className="ic-actions">
                    <a className="link-arrow" href={`/publications/${pub.slug}`}>Read <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  </div>
                </div>
              ))}

              <div className="insight-card reveal">
                <figure className="photo r169 ic-thumb" style={{ "backgroundImage": "url('/assets/img/plates/advisory.svg')" }}><img src="/assets/photos/insights/global-tp-defensible-file.jpg" alt="Building a defensible multi-country transfer-pricing file" loading="lazy" /></figure>
                <span className="ic-tag">Transfer Pricing</span>
                <div className="ic-meta">May 2026 &middot; Gaurav Sharma</div>
                <h3>Building a defensible multi-country transfer-pricing file</h3>
                <p>How to align FAR analysis, benchmarking and documentation across jurisdictions so your file stands up to more than one tax administration — not just the one that asks first.</p>
                <div className="ic-actions">
                  <a className="link-arrow" href="/insights/global-tp-defensible-file">Read <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a className="link-arrow" href="/assets/insight-pdfs/global-tp-defensible-file.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> PDF</a>
                </div>
              </div>
              <div className="insight-card reveal">
                <figure className="photo r169 ic-thumb" style={{ "backgroundImage": "url('/assets/img/plates/city-uae.svg')" }}><img src="/assets/photos/insights/uae-corporate-tax-indian-groups.jpg" alt="UAE Corporate Tax: what Indian groups must plan for" loading="lazy" /></figure>
                <span className="ic-tag">International Tax</span>
                <div className="ic-meta">April 2026 &middot; Vishal Tayal</div>
                <h3>UAE Corporate Tax: what Indian groups must plan for</h3>
                <p>The essentials of the UAE's Corporate Tax and VAT regime, and how India–UAE groups should structure — free zone or mainland, substance, and the interaction with Indian tax.</p>
                <div className="ic-actions">
                  <a className="link-arrow" href="/insights/uae-corporate-tax-indian-groups">Read <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a className="link-arrow" href="/assets/insight-pdfs/uae-corporate-tax-indian-groups.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> PDF</a>
                </div>
              </div>
              <div className="insight-card reveal">
                <figure className="photo r169 ic-thumb" style={{ "backgroundImage": "url('/assets/img/plates/city-india.svg')" }}><img src="/assets/photos/insights/india-entry-2026-structure.jpg" alt="India entry in 2026: choosing the right structure" loading="lazy" /></figure>
                <span className="ic-tag">India Entry</span>
                <div className="ic-meta">March 2026 &middot; Gaurav Sharma</div>
                <h3>India entry in 2026: choosing the right structure</h3>
                <p>Subsidiary, LLP, branch, liaison or project office? A practical walk-through of the trade-offs on tax, compliance, repatriation and speed — and how to avoid re-structuring later.</p>
                <div className="ic-actions">
                  <a className="link-arrow" href="/insights/india-entry-2026-structure">Read <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a className="link-arrow" href="/assets/insight-pdfs/india-entry-2026-structure.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> PDF</a>
                </div>
              </div>
              <div className="insight-card reveal">
                <figure className="photo r169 ic-thumb" style={{ "backgroundImage": "url('/assets/img/plates/office.svg')" }}><img src="/assets/photos/insights/building-a-gcc-from-india.jpg" alt="Setting up a Global Capability Centre from India" loading="lazy" /></figure>
                <span className="ic-tag">Global Capability Centre</span>
                <div className="ic-meta">February 2026 &middot; K. Vishnu Sharma</div>
                <h3>Setting up a Global Capability Centre from India</h3>
                <p>Why global groups and advisory firms are moving transfer pricing and finance & accounting to India-based delivery — and how to do it without losing control or quality.</p>
                <div className="ic-actions">
                  <a className="link-arrow" href="/insights/building-a-gcc-from-india">Read <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a className="link-arrow" href="/assets/insight-pdfs/building-a-gcc-from-india.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> PDF</a>
                </div>
              </div>
            </div>

            <div style={{ "margin": "52px 0 8px" }}><h2 style={{ "fontSize": "1.5rem" }}>Subscribe to our newsletters</h2>
              <p className="lead" style={{ "marginTop": "6px" }}>Two fortnightly and two weekly newsletters — pick the cadence that suits you.</p></div>
            <div className="grid g-4" style={{ "marginTop": "20px" }}>
              <div className="card reveal" style={{ "display": "flex", "flexDirection": "column" }}>
                <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg></div>
                <span className="ic-tag">Fortnightly</span>
                <h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>Tax &amp; TP Fortnightly</h3>
                <p style={{ "flex": "1" }}>A consolidated read across GST, Transfer Pricing, International Tax and Corporate Tax — the fortnight's key changes, rulings and what they mean for you.</p>
                <a className="btn btn-ghost" href="#" data-newsletter style={{ "marginTop": "6px" }}>Subscribe <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="card reveal" style={{ "display": "flex", "flexDirection": "column" }}>
                <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1-2 5-2 5s4-.5 5-2M9 11a11 11 0 016-7c4 0 4 4 4 4a11 11 0 01-7 6l-4-3zM14 8h.01" /></svg></div>
                <span className="ic-tag">Fortnightly</span>
                <h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>Startup Fortnightly</h3>
                <p style={{ "flex": "1" }}>Funding, regulatory and tax developments for founders and investors — curated for India's startup ecosystem.</p>
                <a className="btn btn-ghost" href="#" data-newsletter style={{ "marginTop": "6px" }}>Subscribe <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="card reveal" style={{ "display": "flex", "flexDirection": "column" }}>
                <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 006 0L10 7M19 7l-2.5 6a3 3 0 006 0L20 7M8 5l4-1 4 1" /></svg></div>
                <span className="ic-tag">Weekly</span>
                <h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>Case Law Weekly</h3>
                <p style={{ "flex": "1" }}>The week's most important rulings across direct tax, GST and transfer pricing — decoded, with practical takeaways.</p>
                <a className="btn btn-ghost" href="#" data-newsletter style={{ "marginTop": "6px" }}>Subscribe <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="card reveal" style={{ "display": "flex", "flexDirection": "column" }}>
                <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></svg></div>
                <span className="ic-tag">Weekly</span>
                <h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>The Weekly Brief</h3>
                <p style={{ "flex": "1" }}>A crisp weekly round-up of daily briefs across tax, geopolitics, regulatory and MCA updates — everything on one page.</p>
                <a className="btn btn-ghost" href="#" data-newsletter style={{ "marginTop": "6px" }}>Subscribe <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div></div>
            <div className="center" style={{ "marginTop": "30px" }}><a className="btn btn-primary" href="#" data-newsletter>Subscribe to all <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
          </div>

          <div className="tabpanel" id="tab-media">
            <div style={{ "margin": "34px 0 20px" }}><h2 style={{ "fontSize": "1.5rem" }}>TAG Group in the media</h2>
              <p className="lead" style={{ "marginTop": "6px" }}>Press, speaking, publications and recognition. Media enquiries: <a href="mailto:info@taggroup.in" style={{ "color": "var(--accent)" }}>info@taggroup.in</a>.</p></div>

            <div className="grid g-2">
              <div className="card reveal"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg></div><h3>In the press</h3><p>Commentary and quotes in business and professional media on tax, TP and cross-border developments.</p><div className="deliverables" style={{ "marginTop": "8px" }}><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Press mentions &amp; expert commentary</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Op-eds and bylined columns</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Rapid reactions to Budget &amp; policy changes</span></div></div></div>
              <div className="card reveal"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></svg></div><h3>Speaking &amp; events</h3><p>Our partners speak at ICAI programmes, industry forums and client roundtables.</p><div className="deliverables" style={{ "marginTop": "8px" }}><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>ICAI faculty sessions (GST &amp; International Tax)</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Webinars &amp; industry panels</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Client &amp; corporate roundtables</span></div></div></div>
              <div className="card reveal"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg></div><h3>Publications &amp; thought leadership</h3><p>In-depth notes, guides and analyses authored by the team.</p><div className="deliverables" style={{ "marginTop": "8px" }}><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Technical guides &amp; explainers</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Transfer-pricing &amp; international-tax notes</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>India-entry and GCC playbooks</span></div></div></div>
              <div className="card reveal"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.8l6.5-.9z" /></svg></div><h3>Recognition</h3><p>Milestones, memberships and recognition across the group.</p><div className="deliverables" style={{ "marginTop": "8px" }}><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Professional memberships &amp; certifications</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Network affiliations</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>Recognition — to be updated</span></div></div></div>
            </div>
            <div className="excl-note" style={{ "marginTop": "26px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h0" /></svg><span>This section is being populated with live coverage. To feature TAG Group or request an interview, contact <a href="mailto:info@taggroup.in">info@taggroup.in</a>.</span></div>
          </div>
        </div>
      </section>
      <section className="section section-alt"><div className="container"><div className="cta-band">
        <h2>Get our best thinking in your inbox</h2>
        <p>Subscribe to TAG Group Insights, or reach out for media &amp; speaking enquiries.</p>
        <div className="hero-actions"><a className="btn btn-white" href="#" data-newsletter><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Subscribe</a><a className="btn btn-light" href="mailto:info@taggroup.in?subject=Media%20enquiry">Media enquiries</a></div>
      </div></div></section>
    </>
  );
}
