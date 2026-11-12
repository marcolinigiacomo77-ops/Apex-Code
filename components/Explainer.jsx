export default function Explainer() {
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          borderRadius: '14px',
          background: '#050714',
          boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
        }}
      >
        <iframe
          src="/apex-code-explainer.html"
          title="Apex Code — video spiegazione"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  )
}
