const fs = require('fs');
const path = require('path');

const filePath = '/home/ankit/Desktop/tag/src/app/(public)/contact/page.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// The converted HTML has:
// <form className="contact-form" action="mailto:info@taggroup.in" method="post" encType="text/plain" novalidate>
// ... inputs ...
// <button className="btn btn-primary" type="submit" style={{"marginTop":"20px"}}>Send enquiry ...</button>

// Replace the form tag and add state
const imports = `
"use client";
import React, { useState } from 'react';
import { submitContactForm } from '@/actions/contact.actions';
`;

content = content.replace(/"use client";\nimport React from 'react';/, imports);

const hookCode = `
export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    try {
      const res = await submitContactForm(formData);
      setResult(res);
      if (res.success) {
        event.target.reset();
      }
    } catch (err) {
      setResult({ success: false, error: 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
  }
`;

content = content.replace(/export default function Page\(\) \{/, hookCode);

// Replace <form ...> with <form onSubmit={handleSubmit} className="contact-form">
content = content.replace(/<form className="contact-form"[^>]*>/, '<form className="contact-form" onSubmit={handleSubmit}>');

// Update button
content = content.replace(/<button className="btn btn-primary" type="submit"(.*?)>Send enquiry(.*?)<\/button>/,
  `<button className="btn btn-primary" type="submit" disabled={isSubmitting}$1>
    {isSubmitting ? 'Sending...' : 'Send enquiry'}$2
  </button>
  {result && (
    <div style={{ marginTop: '16px', padding: '12px', borderRadius: '8px', fontSize: '14px', backgroundColor: result.success ? '#e6f4ea' : '#fce8e6', color: result.success ? '#137333' : '#c5221f' }}>
      {result.success ? result.message : result.error}
    </div>
  )}`
);

fs.writeFileSync(filePath, content);
console.log('Fixed contact form');
