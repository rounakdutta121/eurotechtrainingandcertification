import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { CONTACT, NAV_LINKS } from '../data/services'

export function Layout() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="brand" onClick={close}>
            <img src={CONTACT.logo} alt="Eurotech logo" width={40} height={40} />
            <div className="brand-text">
              <strong>Eurotech</strong>
              <span>Training & Certification</span>
            </div>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-cta">
            <a className="header-phone" href={CONTACT.phoneHref}>
              {CONTACT.phone}
            </a>
            <a className="btn btn-primary header-enquire" href="#enquire">
              Start Enquiry
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
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
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
                {NAV_LINKS.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="footer-col-title">Services</div>
              <div className="footer-links">
                <Link to="/robotic-welding-course">Robotic Welding Course</Link>
                <Link to="/ce-mark">CE Mark Certification</Link>
                <Link to="/plumbing-training">Plumbing Training</Link>
                <Link to="/welding-training-courses">Welding Training Courses</Link>
              </div>
            </div>
          </div>
          <div className="footer-meta">
            © {new Date().getFullYear()} Eurotech Assessment And Certification
            Services PVT LTD. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  )
}
