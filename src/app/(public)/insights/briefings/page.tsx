import Link from 'next/link'
import { getPublishedBriefings } from '@/actions/briefing.actions'
import { formatBriefingDate } from '@/lib/briefing/schema'

export const revalidate = 300

export const metadata = {
  title: 'TAG Daily Briefing',
  description: 'Daily boardroom brief on Income Tax, GST, transactions, growth capital and global trade from TAG Advisors.',
}

export default async function BriefingsIndexPage() {
  const briefings = await getPublishedBriefings()

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/insights.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/insights">Insights</Link> / <span>Daily Briefing</span>
          </div>
          <span className="eyebrow">Boardroom Brief</span>
          <h1>TAG Daily Briefing</h1>
          <p>The day’s material developments in Income Tax, GST, transactions, growth capital and global trade, with what they mean and what to do next.</p>
          <div className="hero-actions">
            <a className="btn btn-white" href="#" data-newsletter>Subscribe</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {briefings.length === 0 ? (
            <p className="lead">No briefings published yet.</p>
          ) : (
            <div className="grid g-3">
              {briefings.map(b => (
                <div className="insight-card" key={b.id}>
                  <span className="ic-tag">{b.ref}</span>
                  <h3 style={{ margin: '10px 0 8px' }}>{formatBriefingDate(b.briefing_date)}</h3>
                  <p style={{ flex: 1 }}>{b.content.executive_summary[0]}</p>
                  <div className="ic-meta">{b.content.topics.join(' · ')}</div>
                  <Link className="link-arrow" href={`/insights/briefings/${b.slug}`}>
                    Read briefing <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
