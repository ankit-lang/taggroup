import { getPublicationBySlug, getPublications } from '@/actions/publication.actions'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const publication = await getPublicationBySlug(resolvedParams.slug)
  if (!publication) return { title: 'Publication Not Found' }

  return {
    title: publication.meta_title || publication.title,
    description: publication.meta_description || publication.content.substring(0, 160).replace(/<[^>]*>?/gm, ''),
    keywords: publication.meta_keywords || 'TAG, Publications, Reports, Tax, Finance',
  }
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const publication = await getPublicationBySlug(resolvedParams.slug)

  if (!publication) {
    notFound()
  }

  // Fetch some latest publications for the "More insights" sidebar
  const recentPubs = await getPublications({ search: '', category: 'All', sort: 'desc' })
  const moreInsights = recentPubs.filter(p => p.id !== publication.id).slice(0, 3)

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{"backgroundImage":"url('/assets/img/hero/insights.svg')"}}></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/publications">Publications</Link> / <span>{publication.category || 'General'}</span>
          </div>
          <span className="eyebrow">{publication.category || 'General'}</span>
          <h1 style={{"maxWidth":"24ch"}}>{publication.title}</h1>
          <p>
            {new Date(publication.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            {/* You can add author fetching here if you expand the schema */}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              {publication.pdf_url && (
                <div className="side-card">
                  <h5>Download</h5>
                  <p className="lead-note">Read this article offline or share it.</p>
                  <a className="btn btn-primary" href={publication.pdf_url} target="_blank" rel="noopener noreferrer" style={{"width":"100%","justifyContent":"center"}}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3H6v18h12V7zM14 3v4h4M9 13h6M9 17h6"/></svg> 
                    Download PDF
                  </a>
                </div>
              )}
              
              <div className="side-card" style={{"marginTop": publication.pdf_url ? "18px" : "0"}}>
                <h5>Author</h5>
                <a className="pmini" href="/people/gaurav">
                  <span className="pmini-av">GS</span>
                  <span className="pmini-info">
                    <strong>Gaurav Sharma</strong>
                    <span>Managing Partner</span>
                  </span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </a>
              </div>

              <div className="side-card" style={{"marginTop":"18px"}}>
                <h5>More insights</h5>
                {moreInsights.length > 0 ? (
                  moreInsights.map(pub => (
                    <Link key={pub.id} className="pmini" href={`/publications/${pub.slug}`}>
                      <span className="pmini-av">{pub.title.substring(0, 2).toUpperCase()}</span>
                      <span className="pmini-info">
                        <strong>{pub.title.length > 40 ? pub.title.substring(0, 40) + '...' : pub.title}</strong>
                        <span>{pub.category || 'General'}</span>
                      </span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </Link>
                  ))
                ) : (
                  <>
                    <a className="pmini" href="/insights/uae-corporate-tax-indian-groups">
                      <span className="pmini-av">VT</span>
                      <span className="pmini-info">
                        <strong>UAE Corporate Tax: what Indian groups must…</strong>
                        <span>International Tax</span>
                      </span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </a>
                    <a className="pmini" href="/insights/india-entry-2026-structure">
                      <span className="pmini-av">GS</span>
                      <span className="pmini-info">
                        <strong>India entry in 2026: choosing the right st…</strong>
                        <span>India Entry</span>
                      </span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </a>
                    <a className="pmini" href="/insights/building-a-gcc-from-india">
                      <span className="pmini-av">KV</span>
                      <span className="pmini-info">
                        <strong>Setting up a Global Capability Centre from…</strong>
                        <span>Global Capability Centre</span>
                      </span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </a>
                  </>
                )}
              </div>
            </aside>

            <div>
              {publication.image_url && (
                <div style={{"marginBottom":"32px"}}>
                  <figure className="photo r219" style={{ backgroundImage: `url('/assets/img/plates/advisory.svg')` }}>
                    <img src={publication.image_url} alt={publication.title} loading="lazy" />
                  </figure>
                </div>
              )}

              <div className="article-body">
                <div dangerouslySetInnerHTML={{ __html: publication.content.replace(/\n/g, '<br/>') }} />
              </div>

              <div className="excl-note" style={{"marginTop":"26px"}}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h0"/></svg>
                <span>TAG Group publishes full editions and analyses here; the layout supports read-online and PDF download.</span>
              </div>

              <div className="cta-band" style={{"marginTop":"34px"}}>
                <h2>Want this kind of analysis regularly?</h2>
                <p>Subscribe to TAG Group Insights, or talk to the author about your situation.</p>
                <div className="hero-actions">
                  <a className="btn btn-white" href="#" data-newsletter>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg> Subscribe
                  </a>
                  <a className="btn btn-light" href="mailto:info@taggroup.in">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
