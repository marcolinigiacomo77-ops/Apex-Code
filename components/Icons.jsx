const s = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const icons = {
  shop: <svg {...s}><path d="M6 8h12l-1.2 11a1 1 0 0 1-1 .9H8.2a1 1 0 0 1-1-.9L6 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>,
  box: <svg {...s}><path d="M3.5 8.5 12 4l8.5 4.5L12 13 3.5 8.5z"/><path d="M3.5 8.5v7L12 20l8.5-4.5v-7"/><path d="M12 13v7"/></svg>,
  store: <svg {...s}><path d="M4 10.5 5.5 4h13L20 10.5"/><path d="M4.5 10.5h15V20h-15z"/><path d="M9.5 20v-5.5h5V20"/></svg>,
  wine: <svg {...s}><path d="M7.5 3.5h9l-1 6.2a4 4 0 0 1-7 0l-1-6.2z"/><path d="M12 13.5V19"/><path d="M9 20.5h6"/></svg>,
  gym: <svg {...s}><path d="M4.5 9.5v5"/><path d="M19.5 9.5v5"/><path d="M7.5 7.5v9"/><path d="M16.5 7.5v9"/><path d="M7.5 12h9"/></svg>,
  medical: <svg {...s}><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8.5v7"/><path d="M8.5 12h7"/></svg>,
  scissors: <svg {...s}><circle cx="6.5" cy="6.5" r="2"/><circle cx="6.5" cy="17.5" r="2"/><path d="M8.2 8 19 19"/><path d="M8.2 16 19 5"/></svg>,
  idea: <svg {...s}><path d="M9 18.5h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.8 10.6c.6.5 1 1.3 1 2.1h5.6c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3z"/></svg>,
  camera: <svg {...s}><rect x="3" y="7" width="18" height="12.5" rx="2.2"/><path d="M8 7 9.3 4.3h5.4L16 7"/><circle cx="12" cy="13" r="3.3"/></svg>,
  music: <svg {...s}><circle cx="7" cy="18" r="2.4"/><circle cx="17" cy="16" r="2.4"/><path d="M9.4 18V5.5L19.4 3.5V16"/></svg>,
  restaurant: <svg {...s}><path d="M6.5 3.5v6.5a1.8 1.8 0 0 0 3.6 0V3.5"/><path d="M8.3 10v10.5"/><path d="M16.5 3.5c-1.4 0-2.6 1.9-2.6 4.5s1.2 4.5 2.6 4.5"/><path d="M16.5 3.5v17"/></svg>,
  hotel: <svg {...s}><path d="M3.5 19V9.5a1.8 1.8 0 0 1 1.8-1.8h3.4a1.8 1.8 0 0 1 1.8 1.8v2"/><path d="M10.5 11.5h8a1.8 1.8 0 0 1 1.8 1.8V19"/><path d="M3.5 19h17"/><circle cx="7.2" cy="9.5" r="1.2"/></svg>,
}

export const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
)

export const ChevronIcon = () => (
  <svg className="select-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

export const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
  </svg>
)
