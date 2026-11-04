import { Briefing, groupItems } from '@/lib/briefing/schema'

/** Website rendering of a TAG Daily Briefing (same structure as the e-mail). */
export function BriefingArticle({ briefing }: { briefing: Briefing }) {
  const sections = groupItems(briefing.items)

  return (
    <article className="brf">
      <section className="brf-summary">
        <h2>Executive Summary</h2>
        <ol>
          {briefing.executive_summary.map((s, i) => (
            <li key={i}>
              <span className="brf-num">{i + 1}</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </section>

      {sections.map(section => (
        <section key={section.title} className="brf-section">
          <h2 className="brf-section-title">{section.title}</h2>
          {section.groups.map((group, gi) => (
            <div key={gi}>
              {group.subsection && <h4 className="brf-sub">{group.subsection}</h4>}
              {group.items.map(({ n, item }) => (
                <div className="brf-item" key={n} id={`item-${n}`}>
                  <div className="brf-meta">
                    {String(n).padStart(2, '0')} · {item.category}
                  </div>
                  <h3>{item.title}</h3>
                  {item.body.split(/\n{2,}/).map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  <p>
                    <strong>Why It Matters:</strong> {item.why_it_matters}
                  </p>
                  <div className="brf-action">
                    <strong>TAG Action Point:</strong> {item.action_point}
                  </div>
                  <p className="brf-source">
                    Source:{' '}
                    {item.source_url ? (
                      <a href={item.source_url} target="_blank" rel="noopener noreferrer">
                        {item.source_label} →
                      </a>
                    ) : (
                      <span>{item.source_label}</span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </section>
      ))}

      <section className="brf-key">
        <h3>Key Business Considerations</h3>
        {briefing.key_considerations.split(/\n{2,}/).map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <p className="brf-disclaimer">
        This briefing is prepared from publicly available information for general client knowledge and benefit. It does not
        constitute legal, tax, regulatory, investment or transaction advice. Facts and implications should be independently
        assessed against the circumstances of each matter before action is taken.
      </p>
    </article>
  )
}
