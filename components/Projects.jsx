import { ArrowIcon } from './Icons'

export default function Projects({ projects }) {
  return (
    <section className="section" id="progetti">
      <div className="container">
        <h2 className="section-heading">Progetti</h2>
        <p className="section-sub">Esempi concreti di come lavoro: e-commerce di prodotto e piattaforme con back-end reale.</p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card" key={p._id}>
              <div className="project-name">{p.name}</div>
              <div className="project-tag">{p.tag}</div>
              {p.online && <div className="project-badge"><span className="pulse-dot" />Sito online</div>}
              <ul className="project-list">
                {(p.points || []).map((point, i) => <li key={i}>{point}</li>)}
              </ul>
              <div className="chip-row">
                {(p.chips || []).map((c, i) => <span className="chip" key={i}>{c}</span>)}
              </div>
              {p.url && (
                <a className="project-link" href={p.url} target="_blank" rel="noopener noreferrer">
                  Visita il sito <ArrowIcon />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
