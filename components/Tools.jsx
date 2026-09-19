import { urlFor } from '../lib/sanity'

export default function Tools({ tools }) {
  return (
    <section className="section tools" id="strumenti">
      <div className="container">
        <h2 className="section-heading">Strumenti con cui lavoro</h2>
        <p className="section-sub">Due modi diversi di costruire, in base a cosa ti serve davvero.</p>

        <div className="tools-grid">
          {tools.map((t) => {
            const src = t.logo ? urlFor(t.logo).width(300).url() : t.logoFile
            return (
              <div className="tool-card" key={t._id}>
                <div className={'tool-chip' + (t.name?.toLowerCase() === 'github' ? ' github' : '')}>
                  {src && <img src={src} alt={t.name} />}
                </div>
                <p className="tool-desc">{t.desc}</p>
              </div>
            )
          })}
        </div>

        <p className="tools-tagline">Scegli tu la piattaforma: il progetto si adatta a come vuoi lavorare.</p>
      </div>
    </section>
  )
}
