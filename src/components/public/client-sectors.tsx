import { CLIENT_SECTORS_ROW_1, CLIENT_SECTORS_ROW_2, type ClientSector } from '@/data/client-sectors'

/** Two auto-scrolling rows of client sector cards (replaces the old logo marquee). */
export function ClientSectors() {
  return (
    <div className="sector-rows" role="list" aria-label="Selected clients by sector">
      <SectorRow items={CLIENT_SECTORS_ROW_1} />
      <SectorRow items={CLIENT_SECTORS_ROW_2} reverse />
    </div>
  )
}

function SectorRow({ items, reverse }: { items: ClientSector[]; reverse?: boolean }) {
  if (!items.length) return null
  // The track holds the list twice so the scroll can loop seamlessly (-50%).
  // Repeat short lists so one copy is always wider than the screen.
  const copy = items.length < 8 ? [...items, ...items] : items
  return (
    <div className={`logo-marquee sector-marquee${reverse ? ' rev' : ''}`}>
      <div className="logo-track">
        {[...copy, ...copy].map((s, i) => (
          <div key={i} className="sector-card" role={i < items.length ? 'listitem' : undefined} aria-hidden={i >= items.length || undefined}>
            <span className="sector-bar" aria-hidden="true" />
            <strong>{s.title}</strong>
            <span className="sector-desc">{s.desc}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
