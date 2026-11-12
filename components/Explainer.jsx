export default function Explainer() {
  return (
    <section style={{ width: '100%', margin: '60px 0' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          background: '#050714',
        }}
      >
        <iframe
          src="/apex-code-explainer.html"
          title="Apex Code — video spiegazione"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          allow="autoplay"
        />
      </div>
    </section>
  )
}
