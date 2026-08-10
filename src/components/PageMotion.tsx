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
  '.site-main .faq-item',
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

const CE_SELECTOR = [
  '.ce-page .kicker',
  '.ce-page .hero-lead',
  '.ce-page .hero-copy',
  '.ce-page .hero-actions',
  '.ce-page .ce-hero-points-list',
  '.ce-page .hero-split-visual',
  '.ce-page .ce-trust-label',
  '.ce-page .proof-item',
  '.ce-page .why-stage-main > *',
  '.ce-page .why-panel',
  '.ce-page .stage-head',
  '.ce-page .ce-card',
  '.ce-page .ce-category-card',
  '.ce-page .ce-category-detail > *',
  '.ce-page .ce-nb-card',
  '.ce-page .ce-export-copy > *',
  '.ce-page .ce-export-panel',
  '.ce-page .ce-export-grid li',
  '.ce-page .ce-cost-copy > *',
  '.ce-page .ce-cost-panel',
  '.ce-page .ce-cost-list li',
  '.ce-page .ce-deliverables-lead',
  '.ce-page .ce-deliverables-grid li',
  '.ce-page .ce-nb-note',
  '.ce-page .ce-note',
  '.ce-page .ce-cta-row',
  '.ce-page .ce-category-more',
  '.ce-page .faq-item',
  '.ce-page .enquire-copy > *',
  '.ce-page .enquire-flow > li',
  '.ce-page .lead-form',
].join(', ')

const WELD_SELECTOR = [
  '.weld-page .kicker',
  '.weld-page .hero-copy',
  '.weld-page .hero-actions',
  '.weld-page .weld-hero-list',
  '.weld-page .weld-trust-line',
  '.weld-page .weld-hero-email',
  '.weld-page .hero-split-visual',
  '.weld-page .why-stage-main > *',
  '.weld-page .why-panel',
  '.weld-page .stage-head',
  '.weld-page .weld-fact-card',
  '.weld-page .weld-course',
  '.weld-page .weld-robotic-rail > *',
  '.weld-page .weld-robotic-group',
  '.weld-page .weld-robotic-paths > *',
  '.weld-page .weld-aws-rail > *',
  '.weld-page .weld-index-list li',
  '.weld-page .weld-aws-meta > *',
  '.weld-page .weld-clarify',
  '.weld-page .weld-wps-intro > *',
  '.weld-page .weld-code-list li',
  '.weld-page .weld-practice-core',
  '.weld-page .weld-practice-advanced',
  '.weld-page .weld-material-card',
  '.weld-page .weld-audience',
  '.weld-page .weld-eligibility',
  '.weld-page .weld-careers-head > *',
  '.weld-page .weld-careers-block',
  '.weld-page .weld-careers-roles li',
  '.weld-page .weld-overseas-rail > *',
  '.weld-page .weld-reason-list li',
  '.weld-page .weld-timeline li',
  '.weld-page .weld-gallery-head > *',
  '.weld-page .weld-gallery-item',
  '.weld-page .weld-quote-stack blockquote',
  '.weld-page .weld-cert-rail > *',
  '.weld-page .weld-ink-note',
  '.weld-page .weld-note',
  '.weld-page .weld-cta-row',
  '.weld-page .faq-item',
  '.weld-page .enquire-copy > *',
  '.weld-page .enquire-flow > li',
  '.weld-page .lead-form',
].join(', ')

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function collectTargets(root: ParentNode, selector: string) {
  const seen = new Set<HTMLElement>()
  const targets: HTMLElement[] = []
  for (const node of root.querySelectorAll<HTMLElement>(selector)) {
    if (seen.has(node)) continue
    if (node.closest('.nav-desktop, .nav-mobile, .site-header, .topbar')) continue
    seen.add(node)
    targets.push(node)
  }
  return targets
}

function runReveal(targets: HTMLElement[]) {
  targets.forEach((el, index) => {
    el.classList.add('anim-ready')
    el.style.setProperty('--anim-delay', `${Math.min(index % 10, 9) * 45}ms`)
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
    { threshold: 0.08, rootMargin: '0px 0px -4% 0px' },
  )

  for (const el of targets) {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight * 0.94) {
      requestAnimationFrame(() => el.classList.add('anim-in'))
    } else {
      observer.observe(el)
    }
  }

  return observer
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

    const ceRoot = main.querySelector('.ce-page')
    const weldRoot = main.querySelector('.weld-page')
    const targets = ceRoot
      ? collectTargets(ceRoot, CE_SELECTOR)
      : weldRoot
        ? collectTargets(weldRoot, WELD_SELECTOR)
        : collectTargets(main, SELECTOR).filter(
            (node) => !node.closest('.ce-page, .weld-page'),
          )

    const observers: IntersectionObserver[] = [runReveal(targets)]

    const onRefresh = () => {
      if (!ceRoot) return
      const next = collectTargets(ceRoot, CE_SELECTOR).filter(
        (el) => !el.classList.contains('anim-in'),
      )
      if (!next.length) return
      observers.push(runReveal(next))
    }

    window.addEventListener('ce-page-motion-refresh', onRefresh)

    return () => {
      for (const observer of observers) observer.disconnect()
      window.removeEventListener('ce-page-motion-refresh', onRefresh)
      for (const el of targets) {
        el.classList.remove('anim-ready', 'anim-in')
        el.style.removeProperty('--anim-delay')
      }
    }
  }, [location.pathname])

  return null
}
