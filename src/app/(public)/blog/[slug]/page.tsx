import React from 'react';
import { getBlogBySlug } from '@/actions/blog.actions';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);
  if (!blog) return { title: 'Not Found' };

  return {
    title: `${blog.title} | TAG Advisors LLP`,
    description: blog.content?.replace(/<[^>]+>/g, '').substring(0, 160),
  };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const readingTime = Math.max(1, Math.ceil((blog.content?.replace(/<[^>]+>/g, '').length || 0) / 1000));

  return (
    <article>
      {/* Hero */}
      <div style={{ background: 'var(--bg-alt)', borderBottom: '1px solid var(--border)', padding: 'clamp(40px,6vw,80px) 20px 0' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <span>›</span>
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Insights & Media</Link>
            <span>›</span>
            <span style={{ color: 'var(--text)' }}>{blog.category || 'General'}</span>
          </nav>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', flexWrap: 'wrap' }}>
            {blog.category && (
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '11.5px',
                  fontWeight: 700,
                  letterSpacing: '0.7px',
                  textTransform: 'uppercase',
                  background: 'var(--primary)',
                  color: '#fff',
                  padding: '3px 10px',
                  borderRadius: '4px',
                }}
              >
                {blog.category}
              </span>
            )}
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {new Date(blog.created_at).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{readingTime} min read</span>
          </div>

          {/* Title */}
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--text-dark)', marginBottom: '32px' }}>
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Cover image */}
      {blog.image_url && (
        <div style={{ maxWidth: '900px', margin: '-1px auto 0', padding: '0 20px' }}>
          <div style={{ borderRadius: '0 0 14px 14px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,.12)' }}>
            <img
              src={blog.image_url}
              alt={blog.title}
              style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '480px', objectFit: 'cover' }}
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(36px,5vw,64px) 20px clamp(48px,6vw,96px)' }}>
        <div
          className="cms-content"
          dangerouslySetInnerHTML={{ __html: blog.content || '' }}
        />

        {/* Footer */}
        <div style={{ marginTop: '56px', paddingTop: '32px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--primary)',
              textDecoration: 'none',
            }}
          >
            ← Back to Insights
          </Link>
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://tagadvisors.in/blog/${blog.slug || ''}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 500 }}
            >
              Share on LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
