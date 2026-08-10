import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { CONTACT, NAV_ITEMS, TRAINING_LINKS } from '../data/services'
import { PageMotion } from './PageMotion'
import { FloatingActions } from './FloatingActions'

export function Layout() {
  const [open, setOpen] = useState(false)
  const [trainingsOpen, setTrainingsOpen] = useState(false)
  const [desktopTrainingsOpen, setDesktopTrainingsOpen] = useState(false)
  const desktopDropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()
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

      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-contact">
            <a href={CONTACT.phoneHref}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
              </svg>
              {CONTACT.phone}
            </a>
            <a href={CONTACT.emailHref}>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
              </svg>
              {CONTACT.email}
            </a>
            <span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5z" />
              </svg>
              {CONTACT.addressShort}
            </span>
          </div>
        </div>
      </div>

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
          <a href={CONTACT.phoneHref} onClick={close}>
            Call {CONTACT.phone}
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
              <p>{CONTACT.address}</p>
              <p>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                <br />
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </p>
            </div>

            <div>
              <div className="footer-col-title">Pages</div>
              <div className="footer-links">
                <Link to="/">Home</Link>
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
