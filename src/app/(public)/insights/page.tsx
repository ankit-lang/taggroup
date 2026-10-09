import React from 'react';
import { getPublications } from '@/actions/publication.actions';
import { getLocale } from '@/lib/get-locale';
import { locales } from '@/data/locales';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Page() {
  const publications = await getPublications({ search: '', category: 'All' }) || [];
  const locale = await getLocale();
  const t = (path: string) => path.split('.').reduce((obj: any, key: string) => obj?.[key], locales[locale as keyof typeof locales]) || path;

  return (
    <>
      <section className="page-hero has-art"><div className="ph-art" aria-hidden="true" style={{ "backgroundImage": "url('/assets/img/hero/insights.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><a href="/index">Home</a> / <span>{t("header.insights")}</span></div>
          <span className="eyebrow">{t("header.insights")}</span>
          <h1>{t("insights.hero_title")}</h1>
          <p>{t("insights.hero_desc")}</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="tabbar" data-tabs>
            <button data-tab="tab-insights" className="active">{t("insights.tab_insights")}</button>
            <button data-tab="tab-media">{t("insights.tab_media")}</button>
          </div>

          <div className="tabpanel active" id="tab-insights">
            <div style={{ "margin": "34px 0 8px" }}><h2 style={{ "fontSize": "1.5rem" }}>{t("insights.latest_title")}</h2>
              <p className="lead" style={{ "marginTop": "6px" }}>{t("insights.latest_desc")}</p></div>
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
                    <a className="link-arrow" href={`/publications/${pub.slug}`}>{t("insights.read")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  </div>
                </div>
              ))}

              <div className="insight-card reveal">
                <figure className="photo r169 ic-thumb" style={{ "backgroundImage": "url('/assets/img/plates/advisory.svg')" }}><img src="/assets/photos/insights/global-tp-defensible-file.jpg" alt="Building a defensible multi-country transfer-pricing file" loading="lazy" /></figure>
                <span className="ic-tag">{t("insights.cards.tp_tag")}</span>
                <div className="ic-meta">{t("insights.cards.tp_meta")}</div>
                <h3>{t("insights.cards.tp_title")}</h3>
                <p>{t("insights.cards.tp_desc")}</p>
                <div className="ic-actions">
                  <a className="link-arrow" href="/insights/global-tp-defensible-file">{t("insights.read")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a className="link-arrow" href="/assets/insight-pdfs/global-tp-defensible-file.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> PDF</a>
                </div>
              </div>
              <div className="insight-card reveal">
                <figure className="photo r169 ic-thumb" style={{ "backgroundImage": "url('/assets/img/plates/city-uae.svg')" }}><img src="/assets/photos/insights/uae-corporate-tax-indian-groups.jpg" alt="UAE Corporate Tax: what Indian groups must plan for" loading="lazy" /></figure>
                <span className="ic-tag">{t("insights.cards.uae_tag")}</span>
                <div className="ic-meta">{t("insights.cards.uae_meta")}</div>
                <h3>{t("insights.cards.uae_title")}</h3>
                <p>{t("insights.cards.uae_desc")}</p>
                <div className="ic-actions">
                  <a className="link-arrow" href="/insights/uae-corporate-tax-indian-groups">{t("insights.read")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a className="link-arrow" href="/assets/insight-pdfs/uae-corporate-tax-indian-groups.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> PDF</a>
                </div>
              </div>
              <div className="insight-card reveal">
                <figure className="photo r169 ic-thumb" style={{ "backgroundImage": "url('/assets/img/plates/city-india.svg')" }}><img src="/assets/photos/insights/india-entry-2026-structure.jpg" alt="India entry in 2026: choosing the right structure" loading="lazy" /></figure>
                <span className="ic-tag">{t("insights.cards.india_tag")}</span>
                <div className="ic-meta">{t("insights.cards.india_meta")}</div>
                <h3>{t("insights.cards.india_title")}</h3>
                <p>{t("insights.cards.india_desc")}</p>
                <div className="ic-actions">
                  <a className="link-arrow" href="/insights/india-entry-2026-structure">{t("insights.read")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a className="link-arrow" href="/assets/insight-pdfs/india-entry-2026-structure.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> PDF</a>
                </div>
              </div>
              <div className="insight-card reveal">
                <figure className="photo r169 ic-thumb" style={{ "backgroundImage": "url('/assets/img/plates/office.svg')" }}><img src="/assets/photos/insights/building-a-gcc-from-india.jpg" alt="Setting up a Global Capability Centre from India" loading="lazy" /></figure>
                <span className="ic-tag">{t("insights.cards.gcc_tag")}</span>
                <div className="ic-meta">{t("insights.cards.gcc_meta")}</div>
                <h3>{t("insights.cards.gcc_title")}</h3>
                <p>{t("insights.cards.gcc_desc")}</p>
                <div className="ic-actions">
                  <a className="link-arrow" href="/insights/building-a-gcc-from-india">{t("insights.read")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
                  <a className="link-arrow" href="/assets/insight-pdfs/building-a-gcc-from-india.pdf" download><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg> PDF</a>
                </div>
              </div>
            </div>

            <div style={{ "margin": "52px 0 8px" }}><h2 style={{ "fontSize": "1.5rem" }}>{t("insights.sub_title")}</h2>
              <p className="lead" style={{ "marginTop": "6px" }}>{t("insights.sub_desc")}</p></div>
            <div className="grid g-4" style={{ "marginTop": "20px" }}>
              <div className="card reveal" style={{ "display": "flex", "flexDirection": "column" }}>
                <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg></div>
                <span className="ic-tag">{t("insights.freq_fort")}</span>
                <h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>{t("insights.newsletters.n1_title")}</h3>
                <p style={{ "flex": "1" }}>{t("insights.newsletters.n1_desc")}</p>
                <a className="btn btn-ghost" href="#" data-newsletter style={{ "marginTop": "6px" }}>{t("insights.subscribe_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="card reveal" style={{ "display": "flex", "flexDirection": "column" }}>
                <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 15c-1.5 1-2 5-2 5s4-.5 5-2M9 11a11 11 0 016-7c4 0 4 4 4 4a11 11 0 01-7 6l-4-3zM14 8h.01" /></svg></div>
                <span className="ic-tag">{t("insights.freq_fort")}</span>
                <h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>{t("insights.newsletters.n2_title")}</h3>
                <p style={{ "flex": "1" }}>{t("insights.newsletters.n2_desc")}</p>
                <a className="btn btn-ghost" href="#" data-newsletter style={{ "marginTop": "6px" }}>{t("insights.subscribe_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="card reveal" style={{ "display": "flex", "flexDirection": "column" }}>
                <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 006 0L10 7M19 7l-2.5 6a3 3 0 006 0L20 7M8 5l4-1 4 1" /></svg></div>
                <span className="ic-tag">{t("insights.freq_week")}</span>
                <h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>{t("insights.newsletters.n3_title")}</h3>
                <p style={{ "flex": "1" }}>{t("insights.newsletters.n3_desc")}</p>
                <a className="btn btn-ghost" href="#" data-newsletter style={{ "marginTop": "6px" }}>{t("insights.subscribe_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="card reveal" style={{ "display": "flex", "flexDirection": "column" }}>
                <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" /></svg></div>
                <span className="ic-tag">{t("insights.freq_week")}</span>
                <h3 style={{ "margin": "6px 0 10px", "fontSize": "1.15rem" }}>{t("insights.newsletters.n4_title")}</h3>
                <p style={{ "flex": "1" }}>{t("insights.newsletters.n4_desc")}</p>
                <a className="btn btn-ghost" href="#" data-newsletter style={{ "marginTop": "6px" }}>{t("insights.subscribe_btn")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div></div>
            <div className="center" style={{ "marginTop": "30px" }}><a className="btn btn-primary" href="#" data-newsletter>{t("insights.sub_all")} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a></div>
          </div>

          <div className="tabpanel" id="tab-media">
            <div style={{ "margin": "34px 0 20px" }}><h2 style={{ "fontSize": "1.5rem" }}>{t("insights.media_title")}</h2>
              <p className="lead" style={{ "marginTop": "6px" }}>{t("insights.media_desc")} <a href="mailto:info@taggroup.in" style={{ "color": "var(--accent)" }}>info@taggroup.in</a>.</p></div>

            <div className="grid g-2">
              <div className="card reveal"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" /></svg></div><h3>{t("insights.press_title")}</h3><p>{t("insights.media_cards.press_desc")}</p><div className="deliverables" style={{ "marginTop": "8px" }}><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.press_l1")}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.press_l2")}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.press_l3")}</span></div></div></div>
              <div className="card reveal"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" /></svg></div><h3>{t("insights.speak_title")}</h3><p>{t("insights.media_cards.speak_desc")}</p><div className="deliverables" style={{ "marginTop": "8px" }}><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.speak_l1")}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.speak_l2")}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.speak_l3")}</span></div></div></div>
              <div className="card reveal"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6" /></svg></div><h3>{t("insights.pub_title")}</h3><p>{t("insights.media_cards.pub_desc")}</p><div className="deliverables" style={{ "marginTop": "8px" }}><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.pub_l1")}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.pub_l2")}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.pub_l3")}</span></div></div></div>
              <div className="card reveal"><div className="card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 18l-5.8 3 1.1-6.5L2.6 9.8l6.5-.9z" /></svg></div><h3>{t("insights.rec_title")}</h3><p>{t("insights.media_cards.rec_desc")}</p><div className="deliverables" style={{ "marginTop": "8px" }}><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.rec_l1")}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.rec_l2")}</span></div><div className="deliverable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg><span>{t("insights.media_cards.rec_l3")}</span></div></div></div>
            </div>
            <div className="excl-note" style={{ "marginTop": "26px" }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h0" /></svg><span>{t("insights.excl_note")} <a href="mailto:info@taggroup.in">info@taggroup.in</a>.</span></div>
          </div>
        </div>
      </section>
      <section className="section section-alt"><div className="container"><div className="cta-band">
        <h2>{t("insights.cta_title")}</h2>
        <p>{t("insights.cta_desc")}</p>
        <div className="hero-actions"><a className="btn btn-white" href="#" data-newsletter><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> Subscribe</a><a className="btn btn-light" href="mailto:info@taggroup.in?subject=Media%20enquiry">{t("insights.cta_media")}</a></div>
      </div></div></section>
    </>
  );
}
