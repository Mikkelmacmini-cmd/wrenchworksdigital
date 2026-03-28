'use client'

const categories = [
  'Mobile-First Websites',
  'Local SEO',
  'Google Maps Domination',
  'Review Automation',
  'Google Business Profile',
  'Conversion Optimization',
  'Bay-Filling Systems',
  'Digital Presence',
]

export default function Marquee() {
  const track = categories.map((item, i) => (
    <span key={i} className="flex items-center gap-10 shrink-0">
      <span className="text-mono whitespace-nowrap" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
        {item}
      </span>
      <span className="glow-dot shrink-0" style={{ width: '4px', height: '4px' }} />
    </span>
  ))

  return (
    <div className="w-full overflow-hidden py-5 relative" style={{ borderTop: '1px solid var(--grid-line)', borderBottom: '1px solid var(--grid-line)' }}>
      {/* Accent glow lines on borders */}
      <div className="glow-line absolute top-0 left-0 right-0" />
      <div className="glow-line absolute bottom-0 left-0 right-0" />
      <div className="marquee-track flex items-center gap-10 w-max">
        {track}
        {track}
      </div>
    </div>
  )
}
