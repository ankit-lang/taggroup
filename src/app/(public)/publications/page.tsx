import { getPublications } from '@/actions/publication.actions'
import { Calendar, Download } from 'lucide-react'
import Link from 'next/link'
import { NewsletterSubscribe } from '@/components/public/newsletter-subscribe'

export const metadata = {
  title: 'Publications & Reports | TAG Advisors',
  description: 'In-depth analysis, comprehensive budget reports, and strategic insights from TAG Advisors.',
}

export default async function PublicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; category?: string }>
}) {
  const resolvedParams = await searchParams
  const search = resolvedParams?.search || ''
  const category = resolvedParams?.category || 'All'

  const publications = await getPublications({ search, category })

  const CATEGORIES = ['All', 'Direct Tax', 'Indirect Tax', 'International Tax', 'M&A', 'Startup Ecosystem', 'Regulatory Updates', 'Geopolitics', 'General']

  return (
    <>
      {/* Hero */}
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/insights.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb"><Link href="/">Home</Link> / <span>Publications</span></div>
          <span className="eyebrow">Research & Analysis</span>
          <h1>Publications & Reports.</h1>
          <p>In-depth analysis, comprehensive budget reports, and strategic insights from the TAG team.</p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="section">
        <div className="container">

          {/* Category filter bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {CATEGORIES.map(cat => (
                <Link
                  key={cat}
                  href={`/publications?category=${cat}${search ? `&search=${search}` : ''}`}
                  scroll={false}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '40px',
                    fontSize: '.83rem',
                    fontWeight: '600',
                    border: '1px solid',
                    borderColor: category === cat ? 'var(--accent)' : 'var(--border)',
                    backgroundColor: category === cat ? 'var(--accent)' : 'transparent',
                    color: category === cat ? '#fff' : 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {cat}
                </Link>
              ))}
            </div>

            {/* Search */}
            <form action="/publications" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input type="hidden" name="category" value={category} />
              <input
                name="search"
                defaultValue={search}
                placeholder="Search publications..."
                style={{
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border)',
                  fontSize: '.88rem',
                  outline: 'none',
                  width: '220px',
                  backgroundColor: 'var(--bg-alt)',
                }}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '8px 18px', fontSize: '.86rem' }}>Search</button>
            </form>
          </div>

          {/* Grid */}
          {publications.length > 0 ? (
            <div className="grid g-4">
              {publications.map((pub: any) => (
                <div key={pub.id} className="card" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  {pub.image_url && (
                    <div style={{ marginBottom: '16px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: 'var(--bg-alt)', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img
                        src={pub.image_url}
                        alt={pub.title}
                        style={{ maxWidth: '80%', maxHeight: '80%', objectFit: 'contain' }}
                      />
                    </div>
                  )}

                  <span className="kicker" style={{ color: 'var(--accent)', fontSize: '.72rem', letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: '650' }}>
                    {pub.category || 'General'}
                  </span>

                  <h3 style={{ marginTop: '8px', fontSize: '1rem', lineHeight: '1.4', flex: 1 }}>
                    <Link href={`/publications/${pub.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {pub.title}
                    </Link>
                  </h3>

                  <p style={{ marginTop: '10px', fontSize: '.88rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {pub.content?.replace(/<[^>]*>?/gm, '')}
                  </p>

                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '.80rem', color: 'var(--text-muted)' }}>
                      <Calendar style={{ width: '13px', height: '13px' }} />
                      {new Date(pub.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>

                    {pub.pdf_url ? (
                      <a href={pub.pdf_url} target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Download style={{ width: '13px', height: '13px' }} /> Download
                      </a>
                    ) : (
                      <Link href={`/publications/${pub.slug}`} className="link-arrow" style={{ fontSize: '.82rem' }}>
                        Read
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              <p style={{ fontSize: '1.1rem', marginBottom: '16px' }}>No publications found.</p>
              <Link href="/publications" className="btn btn-primary">Clear Filters</Link>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section section-dark">
        <div className="container">
          <div className="center measure mx-auto">
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Stay informed</span>
            <h2>Subscribe to TAG Publications</h2>
            <p className="lead" style={{ marginTop: '12px', color: 'rgba(255,255,255,.72)' }}>
              Get comprehensive reports and strategic analysis delivered straight to your inbox.
            </p>
          </div>
          <div style={{ marginTop: '32px', maxWidth: '480px', margin: '32px auto 0' }}>
            <NewsletterSubscribe />
          </div>
        </div>
      </section>
    </>
  )
}


