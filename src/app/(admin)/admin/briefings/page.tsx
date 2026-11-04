import { listBriefings } from '@/actions/briefing.actions'
import BriefingsClient from './briefings-client'

// AI generation (research with web search) runs inside a server action on this page.
export const maxDuration = 800
export const dynamic = 'force-dynamic'

export default async function AdminBriefingsPage() {
  const briefings = await listBriefings()
  return <BriefingsClient initial={briefings} />
}
