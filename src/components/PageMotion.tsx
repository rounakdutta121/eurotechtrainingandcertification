import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SELECTOR = [
  '.site-main section',
  '.site-main .stage-head',
  '.site-main .section-label',
  '.site-main .kicker',
  '.site-main h1',
  '.site-main h2',
  '.site-main h3',
  '.site-main h4',
  '.site-main .hero-copy',
  '.site-main .hero-actions',
  '.site-main .hero-split-frame',
  '.site-main .hero-split-visual',
  '.site-main .proof-item',
  '.site-main .proof-bar > *',
  '.site-main .program-card',
  '.site-main .process-step',
  '.site-main .metric-tile',
  '.site-main .role-card',
  '.site-main .detail-card',
  '.site-main .benefit-slab',
  '.site-main .cred-block',
  '.site-main .why-panel',
  '.site-main .why-stage-side',
  '.site-main .why-stage-main > p',
  '.site-main .why-steps > li',
  '.site-main .dir-row',
  '.site-main .chip',
  '.site-main .settings-matrix article',
  '.site-main .settings-ribbon',
  '.site-main .settings-head',
  '.site-main .industry-detail',
  '.site-main .industry-panel',
  '.site-main .industry-detail-cta',
  '.site-main .visit-panel',
  '.site-main .why-panel-photo',
  '.site-main .lead-form',
  '.site-main .enquire-copy',
  '.site-main .enquire-flow > li',
  '.site-main .enquire-stage-inner > *',
  '.site-main .lead-form',
  '.site-main .lead-form .form-grid > *',
  '.site-main .flow-steps > li',
  '.site-main .btn',
  '.site-main .marquee',
  '.site-main .about-split-copy',
  '.site-main .about-split-media',
  '.site-main .about-values .benefit-slab',
  '.site-main .legal-body > section',
  '.site-main .legal-meta',
  '.site-main img',
].join(', ')

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function PageMotion() {
  const location = useLocation()

  useEffect(() => {
    const main = document.querySelector('.site-main')
    if (!(main instanceof HTMLElement)) return

    main.classList.remove('page-enter')
    void main.offsetWidth
    main.classList.add('page-enter')

    if (prefersReducedMotion()) return

    const nodes = Array.from(main.querySelectorAll<HTMLElement>(SELECTOR))
    const seen = new Set<HTMLElement>()
    const targets: HTMLElement[] = []

    for (const node of nodes) {
      if (seen.has(node)) continue
      if (node.closest('.nav-desktop, .nav-mobile, .site-header, .topbar')) continue
      seen.add(node)
      targets.push(node)
    }

    targets.forEach((el, index) => {
      el.classList.add('anim-ready')
      el.style.setProperty('--anim-delay', `${Math.min(index % 8, 7) * 55}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.classList.add('anim-in')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    for (const el of targets) {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.92) {
        requestAnimationFrame(() => el.classList.add('anim-in'))
      } else {
        observer.observe(el)
      }
    }

    return () => {
      observer.disconnect()
      for (const el of targets) {
        el.classList.remove('anim-ready', 'anim-in')
        el.style.removeProperty('--anim-delay')
      }
    }
  }, [location.pathname])

  return null
}
