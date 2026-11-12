import Explainer from './Explainer'

export default function Hero({ settings }) {
  return (
    <header className="hero">
      <style>{`
        @media (min-width: 901px) {
          .hero-grid { grid-template-columns: 0.8fr 1.2fr !important; gap: 32px !important; }
        }
        .hero-visual.hero-video { height: auto !important; display: block !important; }
      `}</style>
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">{settings.heroEyebrow}</div>
          <h1>{settings.heroTitle}</h1>
          <p className="hero-sub">{settings.heroSub}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contatti">Scrivimi</a>
            <a className="btn btn-ghost" href="#progetti">Guarda i progetti</a>
          </div>
        </div>
        <div className="hero-visual hero-video">
          <Explainer />
        </div>
      </div>
    </header>
  )
}
