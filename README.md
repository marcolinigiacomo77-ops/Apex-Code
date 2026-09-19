# Apex Code — Next.js + Sanity CMS

Il tuo sito, ricostruito con lo **stesso identico design**, ma professionale:
Next.js per il frontend, Sanity come pannello per i contenuti.

---

## 1. Cosa ti serve (una volta sola)

- **Node.js 18 o superiore** → https://nodejs.org (scarica la versione LTS)
- Un editor di testo → **VS Code** (consigliato)

---

## 2. Far partire il sito (3 comandi)

Apri il terminale dentro la cartella del progetto e scrivi:

```bash
npm install     # installa tutto (la prima volta ci mette 1-2 minuti)
npm run dev     # avvia il sito
```

Poi apri il browser su **http://localhost:3000** → vedi il sito.

> Funziona SUBITO anche senza CMS: i contenuti di partenza sono già dentro `lib/fallback.js`.

---

## 3. Collegare il CMS (Sanity) — opzionale ma è il pezzo forte

1. Vai su https://sanity.io → registrati (gratis)
2. Crea un nuovo progetto, dataset `production`
3. Copia il **Project ID**
4. Nella cartella del progetto, rinomina `.env.local.example` in `.env.local` e incolla dentro il tuo Project ID
5. Riavvia con `npm run dev`
6. Apri **http://localhost:3000/studio** → è il tuo pannello di controllo

Da lì puoi aggiungere progetti, cambiare il titolo dell'hero, le categorie di clienti,
gli strumenti — **senza mai toccare il codice**. Il sito si aggiorna da solo entro 60 secondi.

---

## 4. Metterlo online (gratis)

1. Carica la cartella su GitHub
2. Vai su https://vercel.com → login con GitHub → "Import Project"
3. Incolla le variabili d'ambiente (le stesse di `.env.local`)
4. Click su **Deploy** → in 2 minuti il sito è online con dominio `.vercel.app`

Per usare un dominio tuo (es. `apexcode.it`): Vercel → Settings → Domains.

---

## 5. Come è organizzato

```
app/
  page.js        → la home: chiama i dati e monta le sezioni
  layout.js      → <head>, font, metadata SEO
  globals.css    → TUTTO il tuo CSS originale, intatto
  studio/        → il pannello CMS su /studio
components/      → una sezione = un file (Hero, Projects, Contact...)
lib/
  sanity.js      → prende i dati dal CMS
  fallback.js    → i contenuti di partenza se il CMS non c'è
sanity/schemas/  → definisce i campi che vedi nel pannello
public/          → logo Shopify e GitHub
```

**Per cambiare il design** → tocchi `app/globals.css`
**Per cambiare i testi** → il pannello `/studio` (o `lib/fallback.js`)
**Per cambiare la struttura** → i file in `components/`

---

## 6. Form contatti

Usa Web3Forms, già configurato con la tua access key dentro `.env.local.example`.
Le email arrivano direttamente al tuo indirizzo, senza server.
