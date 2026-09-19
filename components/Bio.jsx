export default function Bio({ settings }) {
  return (
    <section className="section bio" id="chi-sono">
      <div className="container">
        <div className="bio-row">
          <div className="bio-rule" />
          <div>
            <div className="bio-label">Chi sono</div>
            <p className="bio-text">{settings.bioText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
