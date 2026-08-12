'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CONTACT, NAV_ITEMS, TRAINING_LINKS } from '../data/services'
import {
  PL_ADDRESS,
  PL_PHONE_DISPLAY,
  PL_PHONE_HREF,
} from '../data/plumbingTrainingContent'
import { NavLink } from './NavLink'
import { PageMotion } from './PageMotion'
import { FloatingActions } from './FloatingActions'

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [trainingsOpen, setTrainingsOpen] = useState(false)
  const [desktopTrainingsOpen, setDesktopTrainingsOpen] = useState(false)
  const desktopDropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isPlumbing = pathname === '/plumbing-training'
  const pagePhone = isPlumbing ? PL_PHONE_DISPLAY : CONTACT.phone
  const pagePhoneHref = isPlumbing ? PL_PHONE_HREF : CONTACT.phoneHref
  const pageAddress = isPlumbing ? PL_ADDRESS : CONTACT.address
  const close = () => {
    setOpen(false)
    setTrainingsOpen(false)
  }

  const trainingActive = TRAINING_LINKS.some((link) => link.to === pathname)

  useEffect(() => {
    setOpen(false)
    setTrainingsOpen(false)
    setDesktopTrainingsOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!desktopTrainingsOpen) return

    const onPointerDown = (event: MouseEvent) => {
      if (!desktopDropdownRef.current?.contains(event.target as Node)) {
        setDesktopTrainingsOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDesktopTrainingsOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [desktopTrainingsOpen])

  return (
    <>
      <svg className="hero-clip-defs" width="0" height="0" aria-hidden="true">
        <defs>
          <clipPath id="heroCurve" clipPathUnits="objectBoundingBox">
            <path d="M0.18,0 C0.06,0 0,0.08 0,0.22 L0,0.78 C0,0.92 0.06,1 0.18,1 L1,1 L1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <header className="site-header">
        <div className="header-inner">
          <Link href="/" className="brand" onClick={close}>
            <img src={CONTACT.logo} alt="Eurotech logo" width={160} height={48} />
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {NAV_ITEMS.map((item) =>
              'children' in item && item.children ? (
                <div
                  key={item.label}
                  className={`nav-dropdown${desktopTrainingsOpen ? ' open' : ''}${trainingActive ? ' active' : ''}`}
                  ref={desktopDropdownRef}
                  onMouseEnter={() => setDesktopTrainingsOpen(true)}
                  onMouseLeave={() => setDesktopTrainingsOpen(false)}
                >
                  <button
                    type="button"
                    className={`nav-dropdown-trigger${trainingActive ? ' active' : ''}`}
                    aria-expanded={desktopTrainingsOpen}
                    aria-haspopup="true"
                    onClick={() => setDesktopTrainingsOpen((v) => !v)}
                  >
                    {item.label}
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </button>
                  <div className="nav-dropdown-menu" role="menu">
                    <div className="nav-dropdown-menu-inner">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.to}
                          href={child.to}
                          role="menuitem"
                          className={({ isActive }) => (isActive ? 'active' : undefined)}
                          onClick={() => setDesktopTrainingsOpen(false)}
                        >
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.to}
                  href={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <div className="header-cta">
            <a className="btn btn-primary" href="#enquire">
              Enquire Now <span aria-hidden="true">→</span>
            </a>
          </div>

          <button
            className={`menu-btn${open ? ' is-open' : ''}`}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="menu-btn-icon" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <nav
          id="mobile-nav"
          className={`nav-mobile${open ? ' open' : ''}`}
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) =>
            'children' in item && item.children ? (
              <div key={item.label} className={`nav-mobile-group${trainingsOpen ? ' open' : ''}`}>
                <button
                  type="button"
                  className={`nav-mobile-trigger${trainingActive ? ' active' : ''}`}
                  aria-expanded={trainingsOpen}
                  onClick={() => setTrainingsOpen((v) => !v)}
                >
                  {item.label}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>
                <div className="nav-mobile-submenu">
                  {item.children.map((child) => (
                    <NavLink
                      key={child.to}
                      href={child.to}
                      className={({ isActive }) => (isActive ? 'active' : undefined)}
                      onClick={close}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.to}
                href={item.to}
                end={item.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={close}
              >
                {item.label}
              </NavLink>
            ),
          )}
          <a href="#enquire" onClick={close}>
            Enquire Now
          </a>
          <a href={pagePhoneHref} onClick={close}>
            Call {pagePhone}
          </a>
        </nav>
      </header>

      <main className="site-main">
        {children}
        <PageMotion />
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <strong>Eurotech</strong>
              <p>
                Eurotech Assessment and Certification Services Pvt. Ltd. —
                practical vocational training and certification since 2008.
              </p>
              <p>{pageAddress}</p>
              <p>
                <a href={pagePhoneHref}>{pagePhone}</a>
                <br />
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </p>
            </div>

            <div>
              <div className="footer-col-title">Pages</div>
              <div className="footer-links">
                <Link href="/">Home</Link>
                <Link href="/about">About Us</Link>
                <Link href="/ce-mark">CE Mark</Link>
                {TRAINING_LINKS.map((link) => (
                  <Link key={link.to} href={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="footer-col-title">Trainings</div>
              <div className="footer-links">
                <Link href="/robotic-welding-course">Robotic Welding Course</Link>
                <Link href="/welding-training-courses">Welding Training Courses</Link>
                <Link href="/plumbing-training">Plumbing Training</Link>
                <Link href="/ce-mark">CE Mark Certification</Link>
              </div>
            </div>
          </div>
          <div className="footer-meta">
            <span>
              © {new Date().getFullYear()} Eurotech Assessment And Certification
              Services PVT LTD. All Rights Reserved.
            </span>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
      <FloatingActions />
    </>
  )
}
