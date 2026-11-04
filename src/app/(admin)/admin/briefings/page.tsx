import { listBriefings } from '@/actions/briefing.actions'
import BriefingsClient from './briefings-client'

// "Publish & send" e-mails every subscriber from a server action on this page.
export const maxDuration = 300 // Vercel Hobby plan maximum
export const dynamic = 'force-dynamic'

export default async function AdminBriefingsPage() {
  const briefings = await listBriefings()
  return <BriefingsClient initial={briefings} />
}
