import Anthropic from '@anthropic-ai/sdk'
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod'
import { Briefing, BriefingSchema, formatBriefingDate } from './schema'
import { CLIENT_PROMPT } from './prompt'

const MODEL = process.env.BRIEFING_MODEL || 'claude-opus-5-5'

/**
 * Generates a briefing in two steps:
 *  1. Research + write: the client's prompt runs as-is with live web search,
 *     so the content matches what they produce by hand today.
 *  2. Structure: the draft is converted into the BriefingSchema JSON that
 *     drives the website page and the e-mail. No new facts are added here.
 */
export async function generateBriefing({ date, ref }: { date: string; ref: string }): Promise<Briefing> {
  const client = new Anthropic() // reads ANTHROPIC_API_KEY

  const prompt = CLIENT_PROMPT.replaceAll('{{DATE}}', formatBriefingDate(date)).replaceAll('{{REF}}', ref)

  // ── Step 1: research and draft ──────────────────────────────────────────
  const messages: Anthropic.Beta.BetaMessageParam[] = [{ role: 'user', content: prompt }]
  let draft: Anthropic.Beta.BetaMessage | null = null

  // A server-tool turn can stop with `pause_turn`; send it back to continue.
  for (let attempt = 0; attempt < 5; attempt++) {
    draft = await client.beta.messages
      .stream({
        model: MODEL,
        max_tokens: 64000,
        output_config: { effort: 'high' },
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default',
        tools: [
          { type: 'web_search_20260209', name: 'web_search', max_uses: 25 },
          { type: 'web_fetch_20260209', name: 'web_fetch', max_uses: 15 },
        ],
        messages,
      })
      .finalMessage()

    if (draft.stop_reason !== 'pause_turn') break
    messages.push({ role: 'assistant', content: draft.content })
  }

  if (!draft) throw new Error('Briefing generation returned no response')
  if (draft.stop_reason === 'refusal') throw new Error('The model declined to generate the briefing')
  if (draft.stop_reason === 'max_tokens') throw new Error('Briefing draft was cut off (max_tokens)')

  // Keep the text plus the URLs the model actually consulted, so step 2 can attach real sources.
  const draftText = draft.content
    .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === 'text')
    .map(b => {
      const cites = (b.citations ?? [])
        .map(c => ('url' in c && c.url ? ` [source: ${c.url}]` : ''))
        .join('')
      return b.text + cites
    })
    .join('')
    .trim()

  if (!draftText) throw new Error('Briefing draft was empty')

  // ── Step 2: convert to structured JSON ──────────────────────────────────
  const structured = await client.messages.parse({
    model: MODEL,
    max_tokens: 32000,
    output_config: { effort: 'low', format: zodOutputFormat(BriefingSchema) },
    messages: [
      {
        role: 'user',
        content: `Convert the briefing below into the required JSON structure.
Copy wording faithfully; do not add, drop or change facts. Use date "${date}" and ref "${ref}".
For each item, set source_url to the primary-source URL given or cited for that item; use null if none is given.

<briefing>
${draftText}
</briefing>`,
      },
    ],
  })

  if (structured.stop_reason === 'refusal') throw new Error('The model declined to structure the briefing')
  const parsed = structured.parsed_output
  if (!parsed) throw new Error(`Could not structure the briefing (stop_reason: ${structured.stop_reason})`)

  return { ...parsed, date, ref }
}
