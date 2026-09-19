export default function Nav({ settings }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="brand-mark">{settings.brandMark}</div>
          <span className="brand-name">{settings.brandName}</span>
        </div>
        <div className="nav-links">
          <a className="nav-only" href="#progetti">Progetti</a>
          <a className="nav-only" href="#per-chi">Per chi</a>
          <a className="nav-only" href="#strumenti">Strumenti</a>
          <a className="nav-only" href="#contatti">Contatti</a>
          <a className="btn btn-primary btn-small" href="#contatti">Scrivimi</a>
        </div>
      </div>
    </nav>
  )
}
