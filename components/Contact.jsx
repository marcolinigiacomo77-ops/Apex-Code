'use client'
import { useState } from 'react'
import { ChevronIcon, ClockIcon } from './Icons'

const BUDGET = ['Meno di 500€', '500€ – 1.500€', '1.500€ – 3.000€', 'Oltre 3.000€', 'Non so, vorrei una consulenza']
const TIPO = ['E-commerce', 'Sito vetrina / Portfolio', 'Piattaforma su misura', 'Non so ancora, vorrei un consiglio']
const PER_CHI = {
  'E-commerce': ['Commerciante', 'Produttore / Artigiano', 'Negozio fisico', 'Enologo / Cantina'],
  'Servizi su misura': ['Palestra / Personal trainer', 'Studio medico', 'Parrucchiere / Barbiere', 'Coach / Consulente'],
  'Portfolio & vetrina': ['Fotografo / Artista', 'Musicista / DJ', 'Ristorante / Locale', 'Hotel / Agriturismo'],
}

export default function Contact({ settings }) {
  const [status, setStatus] = useState('')
  const [ok, setOk] = useState(false)

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.target
    const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY

    if (!key) {
      setOk(false)
      setStatus('Il modulo sarà collegato a breve. Nel frattempo scrivimi a ' + settings.email + '.')
      return
    }

    setOk(false)
    setStatus('Invio in corso...')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ access_key: key, ...Object.fromEntries(new FormData(form)) }),
      })
      const data = await res.json()
      if (data.success) {
        setOk(true)
        setStatus('Messaggio inviato, grazie! Ti risponderò presto.')
        form.reset()
      } else {
        setStatus('Qualcosa è andato storto. Riprova o scrivimi via email.')
      }
    } catch {
      setStatus('Qualcosa è andato storto. Riprova o scrivimi via email.')
    }
  }

  return (
    <section className="section" id="contatti">
      <div className="container">
        <h2 className="section-heading">Parliamone</h2>
        <p className="section-sub">Raccontami il tuo progetto: ti rispondo il prima possibile.</p>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="name" placeholder="Il tuo nome" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="La tua email" required />
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="budget">Budget indicativo</label>
              <div className="select-wrap">
                <select id="budget" name="budget" required defaultValue="">
                  <option value="" disabled>Seleziona...</option>
                  {BUDGET.map((v) => <option key={v}>{v}</option>)}
                </select>
                <ChevronIcon />
              </div>
            </div>
            <div className="field">
              <label htmlFor="tipo-sito">Che tipo di sito ti serve</label>
              <div className="select-wrap">
                <select id="tipo-sito" name="tipo_sito" required defaultValue="">
                  <option value="" disabled>Seleziona...</option>
                  {TIPO.map((v) => <option key={v}>{v}</option>)}
                </select>
                <ChevronIcon />
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="per-chi-select">Per chi è il sito</label>
            <div className="select-wrap">
              <select id="per-chi-select" name="per_chi" required defaultValue="">
                <option value="" disabled>Seleziona...</option>
                {Object.entries(PER_CHI).map(([group, items]) => (
                  <optgroup label={group} key={group}>
                    {items.map((v) => <option key={v}>{v}</option>)}
                  </optgroup>
                ))}
                <option>Altro</option>
              </select>
              <ChevronIcon />
            </div>
          </div>

          <div className="field">
            <label htmlFor="messaggio">Descrizione del progetto</label>
            <textarea id="messaggio" name="message" placeholder="Raccontami il tuo progetto, gli obiettivi e cosa ti serve..." required />
          </div>

          <button type="submit" className="btn btn-primary">Invia messaggio</button>
          <p className={'form-status' + (ok ? ' ok' : '')} role="status" aria-live="polite">{status}</p>
        </form>

        <div className="timeline-note">
          <ClockIcon />
          <span>{settings.timelineNote}</span>
        </div>
      </div>
    </section>
  )
}
