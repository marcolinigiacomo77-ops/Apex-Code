import Explainer from './Explainer'

export default function Hero({ settings }) {
  return (
    <header className="hero">
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
        <div className="hero-visual">
          <Explainer />
        </div>
      </div>
    </header>
  )
}
