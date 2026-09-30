'use client'

import React from 'react'
import Link from 'next/link'

export function MobileActionBar() {
  return (
    <nav className="m-actions" aria-label="Quick actions">
      <a href="tel:+918860716777">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 3h4l2 5-2 1a12 12 0 006 6l1-2 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-3z" />
        </svg>
        <span>Call</span>
      </a>
      <a href="mailto:info@taggroup.in">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
        <span>Email</span>
      </a>
      <button type="button" data-newsletter>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 5h13v14H5a2 2 0 01-2-2V7M17 9h3v8a2 2 0 01-2 2M7 8h7M7 12h7M7 16h5" />
        </svg>
        <span>Newsletter</span>
      </button>
      <Link className="m-primary" href="/contact">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
        </svg>
        <span>Enquire</span>
      </Link>
    </nav>
  )
}
