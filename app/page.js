import { getSiteData } from '../lib/sanity'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import Projects from '../components/Projects'
import Audience from '../components/Audience'
import Tools from '../components/Tools'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Effects from '../components/Effects'

export const revalidate = 60 // il sito si riaggiorna da solo ogni 60s quando cambi i contenuti nel CMS

export default async function Home() {
  const { settings, projects, audiences, tools } = await getSiteData()

  return (
    <>
      <Nav settings={settings} />
      <Hero settings={settings} />
      <Bio settings={settings} />
      <Projects projects={projects} />
      <Audience audiences={audiences} />
      <Tools tools={tools} />
      <Contact settings={settings} />
      <Footer settings={settings} />
      <Effects />
    </>
  )
}
