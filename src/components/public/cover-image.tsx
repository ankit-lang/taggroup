'use client'

/** Cover image that hides itself if the URL is broken. Client component because of onError. */
export function CoverImage({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '480px', objectFit: 'cover' }}
      onError={(e) => (e.currentTarget.style.display = 'none')}
    />
  )
}
