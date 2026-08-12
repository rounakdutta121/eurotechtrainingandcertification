'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { CONTACT } from '../data/services'

const PLUMBING_WHATSAPP = 'https://wa.me/919056742701'

export function FloatingActions() {
  const pathname = usePathname()
  const [showTop, setShowTop] = useState(false)
  const whatsappHref =
    pathname === '/plumbing-training' ? PLUMBING_WHATSAPP : CONTACT.whatsappHref

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
    <div className="float-island" aria-label="Quick actions">
      <a
        className="float-island-btn float-island-whatsapp"
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      <a className="float-island-btn float-island-enquire" href="#enquire">
        Enquire Now
      </a>

      <button
        type="button"
        className={`float-island-btn float-island-top${showTop ? ' visible' : ''}`}
        onClick={scrollTop}
        tabIndex={showTop ? 0 : -1}
      >
        Back to Top
      </button>
    </div>
  )
}
