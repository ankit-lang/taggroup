import React from 'react';
import { getBlogs } from '@/actions/blog.actions';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | TAG Advisors LLP',
  description: 'Latest news, updates, and thoughts from the TAG team.',
};

export default async function BlogPage() {
  const blogs = await getBlogs({ search: '', category: 'All' });

  return (
    <>
      <section className="page-hero has-art">
        <div className="ph-art" aria-hidden="true" style={{ backgroundImage: "url('/assets/img/hero/insights.svg')" }}></div>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <span>Blog</span>
          </div>
          <span className="eyebrow">Blog</span>
          <h1>Latest Updates & News.</h1>
          <p>Read our latest announcements, team updates, and thoughts on industry trends.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {blogs.length > 0 ? (
            <div className="grid g-3">
              {blogs.map((blog: any) => (
                <div className="insight-card" key={blog.id}>
                  <figure className="photo r169 ic-thumb" style={{ backgroundImage: blog.image_url ? `url('${blog.image_url}')` : "url('/assets/img/plates/office.svg')" }}>
                    {blog.image_url && <img src={blog.image_url} alt={blog.title} loading="lazy" />}
                  </figure>
                  <span className="ic-tag">{blog.category || 'General'}</span>
                  <div className="ic-meta">
                    {new Date(blog.created_at).toLocaleDateString(undefined, { month: 'short', year: 'numeric', day: 'numeric' })} &middot; TAG Group
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.content?.substring(0, 120)}...</p>
                  <div className="ic-actions">
                    <Link className="link-arrow" href={`/blog/${blog.slug}`}>
                      Read <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--text-muted)' }}>
              <p>No blog posts published yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
