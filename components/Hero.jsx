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
        <div className="hero-visual" aria-hidden="true">
          <div className="browser-mock">
            <div className="browser-bar">
              <span className="b-dot" /><span className="b-dot" /><span className="b-dot" />
              <div className="browser-url"><span className="lock-dot" />iltuosito.it</div>
            </div>
            <div className="browser-body">
              <div className="mock-nav">
                <div className="mock-logo" />
                <div className="mock-navlinks"><span /><span /><span /></div>
              </div>
              <div className="mock-hero-lines">
                <div className="line lg" /><div className="line accent" /><div className="line sm" /><div className="mock-btn" />
              </div>
              <div className="mock-hero-visual" />
            </div>
            <div className="online-badge"><span className="pulse-dot" />Online</div>
          </div>
        </div>
      </div>
    </header>
  )
}
