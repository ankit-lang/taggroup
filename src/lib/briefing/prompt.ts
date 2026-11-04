/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CLIENT PROMPT — paste the prompt Gaurav sent here, verbatim.
 * ─────────────────────────────────────────────────────────────────────────
 *
 * It is sent to Claude as-is (with live web search enabled), exactly as the
 * client runs it today. `{{DATE}}` and `{{REF}}` are replaced at run time;
 * leave them out if the client's prompt doesn't need them.
 *
 * The text below is a STAND-IN reverse-engineered from the 2 and 3 Nov 2026
 * briefings so the pipeline works end-to-end until the real prompt is pasted.
 */
export const CLIENT_PROMPT = `
Prepare today's "TAG Daily Briefing" (Boardroom Brief) for {{DATE}}, reference {{REF}}, for the clients of TAG Advisors, an Indian tax, regulatory and transaction advisory firm.

Research developments from the last 24–48 hours using authoritative sources (Supreme Court and High Court judgments, ITAT/GSTAT orders, CBDT/CBIC notifications, circulars and instructions, GSTN advisories, SEBI/RBI circulars, stock-exchange filings, Reuters and reputable business press). Every fact must be verifiable; do not invent cases, numbers or dates. Give the primary source URL for each item.

Structure:
1. Executive Summary — 4 one-sentence points.
2. Seven numbered items across these sections (skip a section if nothing material happened, but keep 6–8 items):
   - Tax & Regulatory (sub-headings INCOME TAX and GST & INDIRECT TAX; optionally Capital Markets Regulation)
   - M&A, Transactions & Investment
   - Startups & Growth Capital
   - Geopolitics & Global Trade
   Each item: a short category label, a headline, one factual paragraph (case name and number, court/authority, date, amounts, holding), "Why It Matters" (2 sentences), "TAG Action Point" (1–2 sentences of practical advice), and the source.
3. Key Business Considerations — one closing paragraph tying the day together.

Tone: precise, boardroom-level, Indian English spelling, amounts in ₹ with lakh/crore.
`.trim()
