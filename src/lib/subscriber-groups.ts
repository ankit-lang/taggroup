/**
 * Subscriber groups ("categories").
 *
 * Every subscriber has a `categories` list. It holds:
 *  - the newsletters they ticked when signing up (e.g. "Tax & TP Fortnightly"),
 *  - an automatic language group ("English" / "Korean") from the site language
 *    they signed up in,
 *  - any custom groups an admin adds them to (e.g. "Board Members").
 * Newsletters can then be sent to everyone or to one or more groups.
 */

export const LANGUAGE_GROUPS: Record<string, string> = {
  en: 'English',
  ko: 'Korean',
}

/** The newsletters visitors can tick in the sign-up form (stored under these exact names). */
export const NEWSLETTER_GROUPS = ['Tax & TP Fortnightly', 'Startup Fortnightly', 'Case Law Weekly', 'The Weekly Brief']

export function languageGroup(locale: string | undefined | null) {
  return LANGUAGE_GROUPS[locale || 'en'] || LANGUAGE_GROUPS.en
}

/** Cleans a group name: trims, collapses spaces, max 60 chars. */
export function normaliseGroup(name: string) {
  return name.replace(/\s+/g, ' ').trim().slice(0, 60)
}

/** The stored value may be a text[] or JSON; always return a clean string list. */
export function toGroupList(value: unknown): string[] {
  let arr: unknown = value
  if (typeof value === 'string') {
    try {
      arr = JSON.parse(value)
    } catch {
      arr = value.replace(/^\{|\}$/g, '').split(',')
    }
  }
  if (!Array.isArray(arr)) return []
  return [...new Set(arr.map(v => normaliseGroup(String(v).replace(/^"|"$/g, ''))).filter(Boolean))]
}

/** Union of two group lists without duplicates (case-insensitive). */
export function mergeGroups(existing: unknown, add: string[]) {
  const out = toGroupList(existing)
  for (const g of add.map(normaliseGroup).filter(Boolean)) {
    if (!out.some(e => e.toLowerCase() === g.toLowerCase())) out.push(g)
  }
  return out
}

export function hasGroup(list: unknown, group: string) {
  const g = group.toLowerCase()
  return toGroupList(list).some(e => e.toLowerCase() === g)
}

/** Parses a pasted list of emails (comma / semicolon / newline / "Name <email>"). */
export function parseEmailList(text: string) {
  const found = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) || []
  return [...new Set(found.map(e => e.toLowerCase()))]
}
