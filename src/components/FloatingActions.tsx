import { useEffect, useState } from 'react'
import { CONTACT } from '../data/services'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 420)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="float-actions" aria-label="Quick actions">
      <a
        className="float-btn float-whatsapp"
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M20.5 3.5A11 11 0 0 0 3.2 17.7L2 22l4.4-1.2A11 11 0 1 0 20.5 3.5zm-8.5 17a9 9 0 0 1-4.6-1.3l-.3-.2-2.6.7.7-2.5-.2-.3a9 9 0 1 1 7 3.6zm5-6.7c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1-.3.2-.6.1a7.3 7.3 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.3-.4c.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.4 2.4 0 0 0-.8 1.8 4.2 4.2 0 0 0 .9 2.2 9.6 9.6 0 0 0 3.7 3.5 12 12 0 0 0 1.4.5 3.3 3.3 0 0 0 1.5.1 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c-.1-.1-.3-.2-.6-.3z" />
        </svg>
      </a>

      <a
        className="float-btn float-call"
        href={CONTACT.phoneHref}
        aria-label={`Call ${CONTACT.phone}`}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
        </svg>
      </a>

      <button
        type="button"
        className={`float-btn float-top${showTop ? ' visible' : ''}`}
        onClick={scrollTop}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}
