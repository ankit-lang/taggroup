import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPublishedBriefing, getPublishedBriefings } from '@/actions/briefing.actions'
import { BriefingArticle } from '@/components/public/briefing-article'
import { formatBriefingDate } from '@/lib/briefing/schema'

export const revalidate = 300

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const row = await getPublishedBriefing(slug)
  if (!row) return { title: 'Briefing Not Found' }
  return {
    title: row.title,
    description: row.content.executive_summary.join(' ').slice(0, 160),
  }
}

export default async function BriefingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const row = await getPublishedBriefing(slug)
  if (!row) notFound()

  const archive = (await getPublishedBriefings(10)).filter(b => b.slug !== row.slug).slice(0, 6)
  const b = row.content

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/insights.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / <Link href="/insights/briefings">Daily Briefing</Link> / <span>{formatBriefingDate(b.date)}</span>
          </div>
          <span className="eyebrow">Boardroom Brief · {b.ref}</span>
          <h1 style={{ maxWidth: '24ch' }}>TAG Daily Briefing</h1>
          <p>
            {formatBriefingDate(b.date)} &nbsp;|&nbsp; {b.topics.join(' · ')}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="svc-layout">
            <aside className="svc-nav">
              <div className="side-card">
                <h5>Get it daily</h5>
                <p className="lead-note">The TAG Daily Briefing lands in your inbox every morning.</p>
                <a className="btn btn-primary" href="#" data-newsletter style={{ width: '100%', justifyContent: 'center' }}>
                  Subscribe
                </a>
              </div>

              {archive.length > 0 && (
                <div className="side-card" style={{ marginTop: '18px' }}>
                  <h5>Previous briefings</h5>
                  {archive.map(a => (
                    <Link key={a.id} className="pmini" href={`/insights/briefings/${a.slug}`}>
                      <span className="pmini-av">{a.briefing_date.slice(8, 10)}</span>
                      <span className="pmini-info">
                        <strong>{formatBriefingDate(a.briefing_date)}</strong>
                        <span>{a.ref}</span>
                      </span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                  ))}
                  <Link className="link-arrow" href="/insights/briefings" style={{ marginTop: '10px', display: 'inline-flex' }}>
                    All briefings
                  </Link>
                </div>
              )}
            </aside>

            <div>
              <BriefingArticle briefing={b} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
