export default function Footer({ settings }) {
  return (
    <footer>
      <div className="container">
        <p className="foot-name">{settings.brandName}</p>
        <p><a href={'mailto:' + settings.email}>{settings.email}</a></p>
        <p style={{ marginTop: 14 }}>© {new Date().getFullYear()} {settings.brandName}</p>
      </div>
    </footer>
  )
}
