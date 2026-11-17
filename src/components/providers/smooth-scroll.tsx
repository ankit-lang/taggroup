"use client"

import { useEffect } from 'react'
import { ReactLenis, useLenis } from 'lenis/react'

/**
 * Lenis measures the page height by watching <html>, but <html> has a fixed
 * height here (`h-full`), so it never noticed the page growing — after
 * switching tabs (Insights → Media), lazy images loading, accordions opening —
 * and the mouse wheel stopped at the old height. Watch <body> instead and
 * recalculate whenever the content size changes.
 */
function ResizeOnContentChange() {
  const lenis = useLenis()

  useEffect(() => {
    if (!lenis) return
    let frame = 0
    const resize = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => lenis.resize())
    }
    const observer = new ResizeObserver(resize)
    observer.observe(document.body)
    // Images finishing loading (load events don't bubble, so listen in capture phase).
    document.addEventListener('load', resize, true)
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      document.removeEventListener('load', resize, true)
    }
  }, [lenis])

  return null
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <ResizeOnContentChange />
      {children}
    </ReactLenis>
  )
}
