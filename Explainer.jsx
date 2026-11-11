export default function Explainer() {
  return (
    <section
      style={{
        maxWidth: '900px',
        margin: '60px auto',
        padding: '0 20px',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        }}
      >
        <iframe
          src="/apex-code-explainer.html"
          title="Apex Code — video spiegazione"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: 0,
          }}
          allow="autoplay"
        />
      </div>
    </section>
  )
}
