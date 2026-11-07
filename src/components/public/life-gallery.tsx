'use client'

import React, { useCallback, useEffect, useState } from 'react'
import { LIFE_GALLERY } from '@/data/life-gallery'

type Open = { folder: number; album: number; photo: number } | null

/** Folder tabs → event albums → photo grid with a full-screen viewer. */
export function LifeGallery() {
  const [folderIdx, setFolderIdx] = useState(0)
  const [open, setOpen] = useState<Open>(null)

  const folder = LIFE_GALLERY[folderIdx]
  const photos = open ? LIFE_GALLERY[open.folder].albums[open.album].photos : []

  const step = useCallback(
    (d: number) => setOpen(o => (o ? { ...o, photo: (o.photo + d + photos.length) % photos.length } : o)),
    [photos.length]
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, step])

  if (!folder) return null
  const current = open ? photos[open.photo] : null
  const currentAlbum = open ? LIFE_GALLERY[open.folder].albums[open.album] : null

  return (
    <div className="lg-gallery">
      {LIFE_GALLERY.length > 0 && (
        <div className="lg-folders" role="tablist" aria-label="Gallery folders">
          {LIFE_GALLERY.map((f, i) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={i === folderIdx}
              className={`lg-folder ${i === folderIdx ? 'active' : ''}`}
              onClick={() => setFolderIdx(i)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              {f.name}
              <span className="lg-count">{f.albums.reduce((n, a) => n + a.photos.length, 0)}</span>
            </button>
          ))}
        </div>
      )}

      {folder.albums.map((album, ai) => (
        <section key={album.id} className="lg-album" aria-labelledby={`lg-${album.id}`}>
          <div className="lg-album-head">
            <h3 id={`lg-${album.id}`}>{album.title}</h3>
            <span>
              {album.date} · {folder.name} · {album.photos.length} photos
            </span>
          </div>
          <div className="lg-grid">
            {album.photos.map((p, pi) => (
              <button
                key={p.src}
                className="lg-item"
                onClick={() => setOpen({ folder: folderIdx, album: ai, photo: pi })}
                aria-label={`Open photo ${pi + 1} of ${album.photos.length}`}
              >
                <img src={p.src} alt={p.alt} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
      ))}

      {open && current && currentAlbum && (
        <div className="lg-viewer" role="dialog" aria-modal="true" aria-label={currentAlbum.title} onClick={() => setOpen(null)} data-lenis-prevent>
          <button className="lg-close" onClick={() => setOpen(null)} aria-label="Close">×</button>
          <button className="lg-nav lg-prev" onClick={e => { e.stopPropagation(); step(-1) }} aria-label="Previous photo">‹</button>
          <figure onClick={e => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              {currentAlbum.title} · {open.photo + 1} / {photos.length}
            </figcaption>
          </figure>
          <button className="lg-nav lg-next" onClick={e => { e.stopPropagation(); step(1) }} aria-label="Next photo">›</button>
        </div>
      )}
    </div>
  )
}
