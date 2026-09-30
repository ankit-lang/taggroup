const fs = require('fs');
const path = require('path');

const filePath = '/home/ankit/Desktop/tag/src/app/(public)/insights/page.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

const imports = `
"use client";
import React, { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
`;

content = content.replace(/"use client";\nimport React from 'react';/, imports);

const hookCode = `
export default function Page() {
  const [publications, setPublications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPublications() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from('publications')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });
      
      if (data) {
        setPublications(data);
      }
      setIsLoading(false);
    }
    loadPublications();
  }, []);
`;

content = content.replace(/export default function Page\(\) \{/, hookCode);

// We need to replace the grid of .insight-card elements with a map
const gridStart = '<div className="grid g-3" style={{"marginTop":"20px"}}>';
const gridEnd = '</div></div>\n\n      <div style={{"margin":"52px 0 8px"}}>'; // This is the end of the grid based on the file content

// Find the grid content and replace it
const startIdx = content.indexOf(gridStart) + gridStart.length;
const endIdx = content.indexOf(gridEnd);

const replacement = `
        {isLoading ? (
          <div style={{ padding: '20px', textAlign: 'center' }}>Loading publications...</div>
        ) : publications.length > 0 ? (
          publications.map((pub) => (
            <div key={pub.id} className="insight-card reveal">
              <figure className="photo r169 ic-thumb" style={{backgroundImage: \`url('\${pub.image_url || 'assets/img/plates/advisory.svg'}')\`}}>
                <img src={pub.image_url || 'assets/img/plates/advisory.svg'} alt={pub.title} loading="lazy" onError={(e) => e.currentTarget.remove()} />
              </figure>
              <span className="ic-tag">{pub.category || 'Insight'}</span>
              <div className="ic-meta">{new Date(pub.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
              <h3>{pub.title}</h3>
              <p>{pub.meta_description || pub.content?.substring(0, 150) + '...'}</p>
              <div className="ic-actions">
                <a className="link-arrow" href={\`/insights/\${pub.slug}\`}>Read <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
              </div>
            </div>
          ))
        ) : (
          <div style={{ padding: '20px', textAlign: 'center' }}>No publications found.</div>
        )}
      `;

content = content.substring(0, startIdx) + replacement + content.substring(endIdx);

fs.writeFileSync(filePath, content);
console.log('Fixed insights page');
