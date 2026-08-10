import type { ReactNode } from 'react'

type ProofItem = {
  title: string
  subtitle: string
  icon: 'clock' | 'robot' | 'badge' | 'briefcase' | 'globe' | 'shield' | 'pin' | 'calendar' | 'safety' | 'legal' | 'people' | 'check'
}

const ICONS: Record<ProofItem['icon'], ReactNode> = {
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  robot: (
    <>
      <rect x="6" y="8" width="12" height="10" rx="2" />
      <path d="M12 4v4M9 13h.01M15 13h.01M8 18v2M16 18v2" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="10" r="5" />
      <path d="M8.5 14.5 7 21l5-2 5 2-1.5-6.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  safety: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    </>
  ),
  legal: (
    <>
      <path d="M12 3v18M5 8h14M7 8l-2 13h14l-2-13" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="16" cy="9" r="2.5" />
      <path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M13 19c.5-2 2-3.5 4.5-3.5 2 0 3.5 1 4 3.5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5 11 15l4.5-5" />
    </>
  ),
}

type ProofBarProps = {
  label: string
  items: ProofItem[]
}

export function ProofBar({ label, items }: ProofBarProps) {
  return (
    <div className="proof-bar" aria-label={label}>
      {items.map((item) => (
        <div className="proof-item" key={item.title}>
          <div className="proof-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {ICONS[item.icon]}
            </svg>
          </div>
          <div>
            <strong>{item.title}</strong>
            <span>{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
