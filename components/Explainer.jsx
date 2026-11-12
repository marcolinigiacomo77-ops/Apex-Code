'use client'

import { useRef } from 'react'

export default function Explainer() {
  const boxRef = useRef(null)

  const openFullscreen = () => {
    const el = boxRef.current
    if (!el) return
    if (el.requestFullscreen) el.requestFullscreen()
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
  }

  return (
    <div style={{ width: '100%' }}>
      <div
        ref={boxRef}
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
        <button
          type="button"
          onClick={openFullscreen}
          style={{
            position: 'absolute',
            right: '12px',
            bottom: '12px',
            zIndex: 2,
            padding: '8px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.25)',
            background: 'rgba(5,7,20,0.75)',
            color: '#fff',
            fontSize: '13px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          ⛶ Schermo intero
        </button>
      </div>
    </div>
  )
}
