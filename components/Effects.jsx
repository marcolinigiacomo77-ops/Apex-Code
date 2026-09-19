'use client'
import { useEffect } from 'react'

// Scroll reveal + spotlight che segue il cursore sulle card
export default function Effects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el))

    const cards = document.querySelectorAll('.project-card, .tool-card')
    const move = (e) => {
      const card = e.currentTarget
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width) * 100 + '%')
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height) * 100 + '%')
    }
    cards.forEach((c) => c.addEventListener('mousemove', move))

    return () => {
      observer.disconnect()
      cards.forEach((c) => c.removeEventListener('mousemove', move))
    }
  }, [])

  return null
}
