import { Link } from 'react-router-dom'
import { LeadForm } from '../components/LeadForm'
import { Seo } from '../components/Seo'
import { CONTACT, SERVICE_PAGES } from '../data/services'

export function Home() {
  const [featured, ...rest] = SERVICE_PAGES

  return (
    <>
      <Seo
        title="Eurotech Training & Certification | Ads Hub"
        description="Eurotech Assessment and Certification Services — vocational training and certification in robotic welding, CE marking, plumbing, and AWS welding courses."
      />

      <section className="hero-cover" aria-label="Eurotech introduction">
        <div className="hero-cover-media" aria-hidden="true" />
        <div className="hero-cover-inner">
          <div className="hero-cover-copy">
            <p className="kicker">Training &amp; Certification</p>
            <h1>Practical training for real industry careers</h1>
            <p className="hero-copy">
              Skill training and globally recognized certification in welding,
              robotics, plumbing, and CE mark — from Mohali to world markets.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Start Enquiry
              </a>
              <a className="btn btn-secondary" href="#services">
                View Programs
              </a>
            </div>
          </div>
        </div>
        <div className="hero-rail" aria-label="Key facts">
          <div>
            <strong>Since 2008</strong>
            <span>Training &amp; certification</span>
          </div>
          <div>
            <strong>AWS Partner</strong>
            <span>Miami, USA member</span>
          </div>
          <div>
            <strong>IEB UK Path</strong>
            <span>Plumbing certification</span>
          </div>
          <div>
            <strong>Mohali Center</strong>
            <span>Hands-on labs</span>
          </div>
        </div>
      </section>

      <section className="programs-stage" id="services">
        <div className="programs-stage-head">
          <div>
            <span className="section-label">Programs</span>
            <h2>Choose the program that fits your goal</h2>
          </div>
          <p>
            Four focused pathways. Each page explains what you learn, who it is
            for, and how to apply — in plain language.
          </p>
        </div>

        <div className="program-mosaic">
          <Link to={featured.to} className="mosaic-feature">
            <div
              className="mosaic-media"
              style={{ backgroundImage: `url('${featured.image}')` }}
              aria-hidden="true"
            />
            <div className="mosaic-copy">
              <span className="path-index">01 / Featured</span>
              <h3>{featured.title}</h3>
              <p>{featured.blurb}</p>
              <span className="go">Open details →</span>
            </div>
          </Link>

          <div className="mosaic-stack">
            {rest.map((page, index) => (
              <Link key={page.to} to={page.to} className="mosaic-row">
                <div
                  className="mosaic-media"
                  style={{ backgroundImage: `url('${page.image}')` }}
                  aria-hidden="true"
                />
                <div className="mosaic-copy">
                  <span className="path-index">0{index + 2} / Program</span>
                  <h3>{page.title}</h3>
                  <p>{page.blurb}</p>
                  <span className="go">Open details →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="why-stage">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Why Eurotech</span>
            <h2>Simple process. Strong outcomes.</h2>
            <p>
              Eurotech Assessment and Certification Services helps candidates and
              companies build job-ready skills with structured training and
              recognized certification support.
            </p>

            <ol className="why-steps">
              <li>
                <strong>01</strong>
                <span>Exclusive educational partnership with AWS Miami, USA</span>
              </li>
              <li>
                <strong>02</strong>
                <span>IEB UK aligned plumbing certification pathways</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Live robotic welding lab training in Mohali</span>
              </li>
              <li>
                <strong>04</strong>
                <span>CE marking advisory for European market access</span>
              </li>
              <li>
                <strong>05</strong>
                <span>ASNT-aligned NDT and welding career tracks</span>
              </li>
            </ol>
          </div>

          <aside className="why-stage-side">
            <div className="cred-rail">
              <div className="cred-block">
                <strong>Est. 2008</strong>
                <span>Years of training &amp; certification delivery</span>
              </div>
              <div className="cred-block">
                <strong>AWS Partner</strong>
                <span>Educational Company Member, Miami, USA</span>
              </div>
              <div className="cred-block">
                <strong>Mohali Lab</strong>
                <span>Practical sessions with guided trainers</span>
              </div>
            </div>

            <div className="visit-panel">
              <span className="visit-tag">Campus</span>
              <h3>Visit our training center</h3>
              <p>{CONTACT.address}</p>
              <p>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                <br />
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </p>
              <a className="btn btn-primary" href="#enquire">
                Book a callback
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="enquire-stage" id="enquire-section">
        <div className="enquire-stage-inner">
          <div className="enquire-copy">
            <span className="section-label">Enquire</span>
            <h2>Tell us what you need</h2>
            <p>
              Fill one short form. Our team will call you with the right program,
              batch timing, and next steps.
            </p>
            <ul className="enquire-flow">
              <li>
                <em>1</em>
                <span>Share your details and preferred service</span>
              </li>
              <li>
                <em>2</em>
                <span>Our admissions team calls you back</span>
              </li>
              <li>
                <em>3</em>
                <span>Confirm batch, fees, and joining steps</span>
              </li>
            </ul>
          </div>
          <LeadForm
            title="Start your enquiry"
            subtitle="Name, contact, service, and a short message — that is all we need."
          />
        </div>
      </section>
    </>
  )
}
