// Contenuti di partenza: il sito funziona anche senza CMS collegato.
export const fallback = {
  settings: {
    brandName: 'Apex Code',
    brandMark: 'AC',
    heroEyebrow: 'Sviluppo web su misura',
    heroTitle: 'Siti e piattaforme che il tuo business usa ogni giorno.',
    heroSub: 'Dal primo schizzo al sito online: progetto, sviluppo e automazioni, senza complicazioni.',
    bioText: 'Creo siti web e platform che crescono con il tuo business. Specializzato in e-commerce, automazioni intelligenti e integrazioni avanzate.',
    email: 'marcolinigiacomo77@gmail.com',
    timelineNote: 'Di solito completiamo un progetto in 2–3 settimane.',
  },
  projects: [
    {
      _id: 'dinal3d', name: 'DINAL3D', tag: 'E-commerce per stampa 3D multicolore', online: true,
      points: [
        'Sito con editor visuale click-to-edit per aggiornare i contenuti in autonomia',
        'SEO ottimizzato per essere trovato su Google',
        'Scheda prodotto dedicata alle statuette personalizzate',
      ],
      chips: ['HTML', 'SEO', 'GitHub Pages'],
      url: 'https://marcolinigiacomo77-ops.github.io/Dinal3D/',
    },
    {
      _id: 'convivio', name: 'Convivio', tag: 'Piattaforma per studenti in cerca di casa e coinquilini', online: true,
      points: [
        'Registrazione e accesso rapido, anche con account Google',
        'Dashboard per seguire le iscrizioni in tempo reale',
        'Tracciamento delle campagne promozionali con QR code dedicati',
      ],
      chips: ['HTML/JS', 'Google OAuth', 'Firestore'],
      url: 'https://marcolinigiacomo77-ops.github.io/convivio/',
    },
  ],
  audiences: [
    {
      _id: 'a1', title: 'E-commerce', tag: 'Powered by Shopify',
      items: [
        { label: 'Commercianti', icon: 'shop' },
        { label: 'Produttori e artigiani', icon: 'box' },
        { label: 'Negozi fisici', icon: 'store' },
        { label: 'Enologi e cantine', icon: 'wine' },
      ],
    },
    {
      _id: 'a2', title: 'Servizi su misura', tag: 'Piattaforma custom',
      items: [
        { label: 'Palestre e personal trainer', icon: 'gym' },
        { label: 'Studi medici', icon: 'medical' },
        { label: 'Parrucchieri e barbieri', icon: 'scissors' },
        { label: 'Coach e consulenti', icon: 'idea' },
      ],
    },
    {
      _id: 'a3', title: 'Portfolio & vetrina', tag: 'GitHub Pages',
      items: [
        { label: 'Fotografi e artisti', icon: 'camera' },
        { label: 'Musicisti e DJ', icon: 'music' },
        { label: 'Ristoranti e locali', icon: 'restaurant' },
        { label: 'Hotel e agriturismi', icon: 'hotel' },
      ],
    },
  ],
  tools: [
    { _id: 't1', name: 'Shopify', logoFile: '/shopify.png', desc: 'E-commerce pronto a vendere, gestibile in autonomia.' },
    { _id: 't2', name: 'GitHub', logoFile: '/github.png', desc: 'Siti e piattaforme su misura, veloci e senza costi fissi.' },
  ],
}
