import { defineType, defineField } from 'sanity'

/* ---------- IMPOSTAZIONI SITO (testi hero, bio, contatti) ---------- */
const siteSettings = defineType({
  name: 'siteSettings', title: 'Impostazioni sito', type: 'document',
  fields: [
    defineField({ name: 'brandName', title: 'Nome brand', type: 'string', initialValue: 'Apex Code' }),
    defineField({ name: 'brandMark', title: 'Sigla logo (2 lettere)', type: 'string', initialValue: 'AC' }),
    defineField({ name: 'heroEyebrow', title: 'Hero — etichetta piccola', type: 'string' }),
    defineField({ name: 'heroTitle', title: 'Hero — titolo', type: 'text', rows: 2 }),
    defineField({ name: 'heroSub', title: 'Hero — sottotitolo', type: 'text', rows: 2 }),
    defineField({ name: 'bioText', title: 'Chi sono — testo', type: 'text', rows: 3 }),
    defineField({ name: 'email', title: 'Email di contatto', type: 'string' }),
    defineField({ name: 'timelineNote', title: 'Nota tempi di consegna', type: 'string' }),
  ],
  preview: { select: { title: 'brandName' } },
})

/* ---------- PROGETTI ---------- */
const project = defineType({
  name: 'project', title: 'Progetti', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome progetto', type: 'string', validation: r => r.required() }),
    defineField({ name: 'tag', title: 'Descrizione breve', type: 'string' }),
    defineField({ name: 'online', title: 'Sito online?', type: 'boolean', initialValue: true }),
    defineField({ name: 'points', title: 'Punti elenco', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'chips', title: 'Tecnologie (chip)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'url', title: 'Link al sito', type: 'url' }),
    defineField({ name: 'cover', title: 'Immagine (opzionale)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'order', title: 'Ordine', type: 'number', initialValue: 0 }),
  ],
})

/* ---------- PER CHI (colonne pubblico) ---------- */
const audience = defineType({
  name: 'audience', title: 'Per chi creo siti', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titolo colonna', type: 'string' }),
    defineField({ name: 'tag', title: 'Etichetta (es. Powered by Shopify)', type: 'string' }),
    defineField({
      name: 'items', title: 'Voci', type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Testo', type: 'string' },
          {
            name: 'icon', title: 'Icona', type: 'string',
            options: { list: ['shop', 'box', 'store', 'wine', 'gym', 'medical', 'scissors', 'idea', 'camera', 'music', 'restaurant', 'hotel'] },
          },
        ],
      }],
    }),
    defineField({ name: 'order', title: 'Ordine', type: 'number', initialValue: 0 }),
  ],
})

/* ---------- STRUMENTI ---------- */
const tool = defineType({
  name: 'tool', title: 'Strumenti', type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome strumento', type: 'string' }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'desc', title: 'Descrizione', type: 'string' }),
    defineField({ name: 'order', title: 'Ordine', type: 'number', initialValue: 0 }),
  ],
})

export const schemaTypes = [siteSettings, project, audience, tool]
