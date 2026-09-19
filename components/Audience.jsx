import { icons } from './Icons'

export default function Audience({ audiences }) {
  return (
    <section className="section" id="per-chi">
      <div className="container">
        <h2 className="section-heading">Per chi creo siti web</h2>
        <p className="section-sub">Che tu venda prodotti, offra servizi o voglia mostrare il tuo lavoro: c&apos;è una soluzione pensata per te.</p>

        <div className="audience-grid">
          {audiences.map((col) => (
            <div className="audience-col" key={col._id}>
              <div className="audience-col-title">{col.title}</div>
              <span className="audience-col-tag">{col.tag}</span>
              <div className="audience-list">
                {(col.items || []).map((item, i) => (
                  <div className="audience-row" key={i}>
                    <div className="audience-icon">{icons[item.icon] || icons.idea}</div>
                    <span className="audience-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
