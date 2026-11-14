import Link from 'next/link'
import { NIRC_AI_GCC_ARTICLE as A } from '@/data/featured-publications'

export const metadata = {
  title: 'Is Cost-Plus Still Arm’s Length for India’s AI-Enabled GCCs? | TAG Group',
  description: A.teaser,
  keywords: 'transfer pricing, GCC, Global Capability Centre, cost plus, TNMM, DEMPE, AI, arm’s length, ICAI, NIRC',
}

const arrow = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
)

export default function Page() {
  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/insights.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/insights">Insights &amp; Media</Link> / <span>In the press</span>
          </div>
          <span className="eyebrow">Published in {A.publication} · {A.issue}</span>
          <h1 style={{ maxWidth: '26ch' }}>{A.title}</h1>
          <p>
            By {A.author} · {A.tag}
          </p>
          <div className="hero-actions">
            <a className="btn btn-white" href={A.url} target="_blank" rel="noopener noreferrer">
              Read the full article on NIRC {arrow}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <div className="side-card">
                <h5>Publication</h5>
                <p className="lead-note">
                  <strong>{A.publication}</strong>
                  <br />
                  {A.issue} edition, Northern India Regional Council of the Institute of Chartered Accountants of India.
                </p>
                <a className="btn btn-primary" href={A.url} target="_blank" rel="noopener noreferrer" style={{ width: '100%', justifyContent: 'center' }}>
                  Open in flipbook {arrow}
                </a>
              </div>
              <div className="side-card" style={{ marginTop: '18px' }}>
                <h5>Author</h5>
                <Link className="pmini" href={A.authorHref}>
                  <span className="pmini-av">GS</span>
                  <span className="pmini-info">
                    <strong>Gaurav Sharma</strong>
                    <span>Managing Partner</span>
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </Link>
              </div>
              <div className="side-card" style={{ marginTop: '18px' }}>
                <h5>Related services</h5>
                <Link className="link-arrow" href="/services/global-transfer-pricing">Global Transfer Pricing</Link>
                <br />
                <Link className="link-arrow" href="/services/global-capability-centre">Global Capability Centres</Link>
              </div>
            </aside>

            <div>
              <div className="article-body">
                <h2 style={{ fontSize: '1.4rem', marginBottom: '14px' }}>Synopsis</h2>
                <p>
                  For two decades, India’s Global Capability Centres — now more than 2,100 of them, employing well over two
                  million people — have been priced on a simple premise: the Indian entity follows instructions from
                  abroad, carries little risk, and earns a mark-up on its costs under the Transactional Net Margin Method.
                </p>
                <p>
                  Gaurav’s article argues that artificial intelligence is quietly breaking both halves of that premise. On
                  one side, automation in finance, banking, engineering and analytics means centres deliver the same output
                  with far fewer people, so the cost base that drives a cost-plus return shrinks. On the other, Indian teams
                  increasingly design the models, decide when automated outcomes need human review, and sit on the
                  committees that set direction — the kind of contribution a routine-service label does not capture.
                </p>
                <p>
                  Using a simple worked illustration, the article shows how a centre that automates and keeps its mark-up
                  unchanged can end up reporting materially lower profit in India for the same output. Whether that result
                  is wrong depends on the facts: who built the AI tools, who paid for them, and who controls and bears the
                  risk of them. The piece closes by applying the OECD Transfer Pricing Guidelines — control of risk, the
                  DEMPE functions for intangibles such as AI models, and when a profit split may be more appropriate than a
                  one-sided method.
                </p>

                <h2 style={{ fontSize: '1.4rem', margin: '30px 0 14px' }}>Questions the article raises</h2>
                <ul style={{ paddingLeft: '20px', lineHeight: 1.8, color: 'var(--charcoal-700)', marginBottom: '1.25em' }}>
                  <li>Does a cost-based return still reflect value when AI removes much of the cost?</li>
                  <li>Who actually performs, controls and funds the development of the AI tools a GCC relies on?</li>
                  <li>When does an Indian centre stop being a routine service provider and start making key decisions?</li>
                  <li>Is last year’s transfer-pricing study still an accurate picture of this year’s business?</li>
                </ul>

                <h2 style={{ fontSize: '1.4rem', margin: '30px 0 14px' }}>Why it matters</h2>
                <p>
                  GCCs are one of India’s largest sources of cross-border service income, and most of them rely on the same
                  cost-plus model. If AI changes what these centres do while their pricing stays the same, the gap shows up
                  in two places: Indian tax authorities may argue that India is being under-rewarded for valuable work, and
                  overseas authorities may question returns that no longer match the functions on the ground.
                </p>
                <p>
                  For multinational groups and GCC leaders, the practical message is to revisit functional analyses,
                  intercompany agreements and documentation now — mapping who develops, enhances, maintains, protects and
                  exploits AI capabilities — rather than defending an outdated characterisation in a future audit.
                </p>

                <div className="callout" style={{ margin: '30px 0' }}>
                  <strong>Read the full article</strong> in the {A.publication}, {A.issue} edition (page 20 of the flipbook).
                  <div className="hero-actions" style={{ marginTop: '12px' }}>
                    <a className="btn btn-primary" href={A.url} target="_blank" rel="noopener noreferrer">
                      Read on nirc.icai.org {arrow}
                    </a>
                  </div>
                </div>

                <h2 style={{ fontSize: '1.4rem', margin: '30px 0 14px' }}>About the author</h2>
                <p>
                  <strong>CA Gaurav Sharma</strong> is Managing Partner at TAG Group, with more than 14 years of experience
                  across international tax, transfer pricing, virtual CFO and finance-transformation work for Big 4 firms,
                  multinational groups and complex multi-entity businesses. He has trained over 800 Chartered Accountants
                  under ICAI’s GMCS programme, lectures at universities on international tax and global policy, and has
                  been published in the IFA International Tax Conference Journal and Taxmann, and quoted in the Bloomberg
                  Daily Tax Report. <Link href={A.authorHref} style={{ color: 'var(--accent)' }}>View full profile →</Link>
                </p>
              </div>

              <div className="cta-band" style={{ marginTop: '34px' }}>
                <h2>Is your GCC’s pricing keeping up with AI?</h2>
                <p>Talk to Gaurav about reviewing your functional analysis, intercompany agreements and transfer-pricing documentation.</p>
                <div className="hero-actions">
                  <a className="btn btn-white" href="mailto:gaurav@tagadvisors.in?subject=AI-enabled%20GCC%20transfer%20pricing">Email Gaurav</a>
                  <Link className="btn btn-light" href="/services/global-transfer-pricing">Transfer pricing services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
