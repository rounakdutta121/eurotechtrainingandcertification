import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CONTACT, NAV_ITEMS, TRAINING_LINKS } from '../data/services'
import {
  PL_ADDRESS,
  PL_PHONE_DISPLAY,
  PL_PHONE_HREF,
} from '../data/plumbingTrainingContent'
import { PageMotion } from './PageMotion'
import { FloatingActions } from './FloatingActions'

export function Layout() {
  const [open, setOpen] = useState(false)
  const [trainingsOpen, setTrainingsOpen] = useState(false)
  const [desktopTrainingsOpen, setDesktopTrainingsOpen] = useState(false)
  const desktopDropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isPlumbing = location.pathname === '/plumbing-training'
  const pagePhone = isPlumbing ? PL_PHONE_DISPLAY : CONTACT.phone
  const pagePhoneHref = isPlumbing ? PL_PHONE_HREF : CONTACT.phoneHref
  const pageAddress = isPlumbing ? PL_ADDRESS : CONTACT.address
  const close = () => {
    setOpen(false)
    setTrainingsOpen(false)
  }

  const trainingActive = TRAINING_LINKS.some((link) => link.to === location.pathname)

  useEffect(() => {
    setOpen(false)
    setTrainingsOpen(false)
    setDesktopTrainingsOpen(false)
  }, [location.pathname])

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
          <Link to="/" className="brand" onClick={close}>
            <img src={CONTACT.logo} alt="Eurotech logo" width={48} height={48} />
            <div className="brand-text">
              <strong>Eurotech</strong>
              <span>Training & Certification</span>
            </div>
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
                          to={child.to}
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
                  to={item.to}
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
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
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
                      to={child.to}
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
                to={item.to}
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
        <Outlet />
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
                <Link to="/">Home</Link>
                <Link to="/about">About Us</Link>
                <Link to="/ce-mark">CE Mark</Link>
                {TRAINING_LINKS.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="footer-col-title">Trainings</div>
              <div className="footer-links">
                <Link to="/robotic-welding-course">Robotic Welding Course</Link>
                <Link to="/welding-training-courses">Welding Training Courses</Link>
                <Link to="/plumbing-training">Plumbing Training</Link>
                <Link to="/ce-mark">CE Mark Certification</Link>
              </div>
            </div>
          </div>
          <div className="footer-meta">
            <span>
              © {new Date().getFullYear()} Eurotech Assessment And Certification
              Services PVT LTD. All Rights Reserved.
            </span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
      <FloatingActions />
    </>
  )
}
