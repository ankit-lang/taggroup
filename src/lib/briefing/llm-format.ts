import { BriefingSchema, type Briefing } from './schema'

/**
 * Text to paste at the END of the client's prompt in any LLM (ChatGPT, Gemini,
 * Claude…). It makes the model return the briefing as JSON that the website
 * and e-mail templates can render. Shown with a "Copy" button in /admin/briefings.
 */
export const LLM_FORMAT_INSTRUCTIONS = `
---
OUTPUT FORMAT (mandatory): Return ONLY one JSON object, inside a single \`\`\`json code block, with no other text. Use exactly this structure:

{
  "date": "YYYY-MM-DD",
  "ref": "TAG/DB/2026/063",
  "topics": ["Income Tax", "GST", "Transactions", "Growth Capital", "Global Trade"],
  "executive_summary": ["One-sentence point 1", "Point 2", "Point 3", "Point 4"],
  "items": [
    {
      "section": "Tax & Regulatory",
      "subsection": "INCOME TAX",
      "category": "Reassessment",
      "title": "Headline of the item",
      "body": "Main factual paragraph: case name and number, court/authority, date, amounts, holding.",
      "why_it_matters": "Why It Matters paragraph (without the label).",
      "action_point": "TAG Action Point paragraph (without the label).",
      "source_label": "Supreme Court order",
      "source_url": "https://full-link-to-the-primary-source"
    }
  ],
  "key_considerations": "Closing Key Business Considerations paragraph."
}

Rules:
- "items" are in display order; repeat the same "section" (and "subsection") for items that belong together.
- "section" is one of: "Tax & Regulatory", "Capital Markets Regulation", "M&A, Transactions & Investment", "Startups & Growth Capital", "Geopolitics & Global Trade" (or another short heading if needed).
- "subsection" is "INCOME TAX" or "GST & INDIRECT TAX" for tax items, otherwise null.
- "source_url" must be the real primary-source link; use null if you do not have one. Never invent URLs.
- Plain text only inside strings (no markdown, no HTML).
`.trim()

/**
 * Extracts and validates briefing JSON from raw LLM output: accepts a bare
 * object, a ```json fenced block, or text with the object embedded in it.
 */
export function parseLlmBriefing(raw: string): { ok: true; briefing: Briefing } | { ok: false; error: string } {
  const text = raw.trim()
  if (!text) return { ok: false, error: 'Nothing pasted.' }

  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i)
  let candidate = fenced ? fenced[1] : text
  const start = candidate.indexOf('{')
  const end = candidate.lastIndexOf('}')
  if (start === -1 || end <= start) {
    return {
      ok: false,
      error: 'No JSON found. Make sure the output-format instructions were added to the end of the prompt, and paste the whole LLM reply.',
    }
  }
  candidate = candidate
    .slice(start, end + 1)
    .replace(/,\s*([}\]])/g, '$1') // tolerate trailing commas some LLMs emit

  let json: unknown
  try {
    json = JSON.parse(candidate)
  } catch (e) {
    return { ok: false, error: `The pasted output is not valid JSON: ${e instanceof Error ? e.message : String(e)}` }
  }

  // Normalise a few common LLM slips before validating.
  if (json && typeof json === 'object') {
    const o = json as Record<string, unknown>
    if (typeof o.topics === 'string') o.topics = o.topics.split(/\s*[·|,]\s*/).filter(Boolean)
    if (Array.isArray(o.items)) {
      for (const it of o.items as Record<string, unknown>[]) {
        if (it.subsection === undefined || it.subsection === '') it.subsection = null
        if (it.source_url === undefined || it.source_url === '') it.source_url = null
      }
    }
  }

  const parsed = BriefingSchema.safeParse(json)
  if (!parsed.success) {
    return {
      ok: false,
      error: 'The JSON is missing fields:\n' + parsed.error.issues.map(i => `• ${i.path.join('.') || '(root)'}: ${i.message}`).join('\n'),
    }
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(parsed.data.date)) {
    return { ok: false, error: `"date" must be YYYY-MM-DD (got "${parsed.data.date}").` }
  }
  return { ok: true, briefing: parsed.data }
}
