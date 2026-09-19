import './globals.css'

export const metadata = {
  title: 'Apex Code — Sviluppo Web',
  description: 'Apex Code — Sviluppo siti web e piattaforme su misura: e-commerce, automazioni e integrazioni. Scopri i progetti e scrivimi per il tuo.',
  verification: { google: 'J-X3AdvzSPHAQ_UyhkeGWkVyps66kmmPFVgw2CdMUds' },
},
 
export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
