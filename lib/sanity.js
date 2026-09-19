import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { fallback } from './fallback'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Se Sanity non è ancora configurato, il sito funziona lo stesso con i dati di fallback.
export const hasSanity = Boolean(projectId && projectId !== 'placeholder')

export const client = hasSanity
  ? createClient({ projectId, dataset, apiVersion: '2024-01-01', useCdn: true })
  : null

const builder = client ? imageUrlBuilder(client) : null
export const urlFor = (source) => (builder ? builder.image(source) : { url: () => '' })

const QUERY = `{
  "settings": *[_type == "siteSettings"][0],
  "projects": *[_type == "project"] | order(order asc),
  "audiences": *[_type == "audience"] | order(order asc),
  "tools": *[_type == "tool"] | order(order asc)
}`

export async function getSiteData() {
  if (!hasSanity) return fallback
  try {
    const data = await client.fetch(QUERY, {}, { next: { revalidate: 60 } })
    return {
      settings: { ...fallback.settings, ...(data.settings || {}) },
      projects: data.projects?.length ? data.projects : fallback.projects,
      audiences: data.audiences?.length ? data.audiences : fallback.audiences,
      tools: data.tools?.length ? data.tools : fallback.tools,
    }
  } catch (e) {
    console.warn('Sanity non raggiungibile, uso i dati locali:', e.message)
    return fallback
  }
}
