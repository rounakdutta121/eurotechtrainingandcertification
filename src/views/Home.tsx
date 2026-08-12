'use client'

import Link from 'next/link'
import { LeadForm } from '../components/LeadForm'
import { Seo } from '../components/Seo'
import { SERVICE_PAGES } from '../data/services'

export function Home() {
  return (
    <>
      <Seo
        title="Eurotech Training & Certification | Ads Hub"
        description="Eurotech Assessment and Certification Services — vocational training and certification in robotic welding, CE marking, plumbing, and AWS welding courses."
      />

      <section className="hero-split" aria-label="Eurotech introduction">
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">Training &amp; Certification</p>
            <h1>
              Practical training for real industry <em>careers</em>
            </h1>
            <p className="hero-copy">
              Skill training and globally recognized certification in welding,
              robotics, plumbing, and CE mark — from Mohali to world markets.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Start Enquiry <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-outline" href="#services">
                View Programs <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/home-hero.png')" }}
              role="img"
              aria-label="Eurotech trainees in workshop"
            />
          </div>
        </div>
      </section>

      <div className="proof-bar" aria-label="Key facts">
        <div className="proof-item">
          <div className="proof-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <path d="M3 10h18M8 3v4M16 3v4" />
            </svg>
          </div>
          <div>
            <strong>Since 2008</strong>
            <span>Trusted by thousands</span>
          </div>
        </div>
        <div className="proof-item">
          <div className="proof-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <div>
            <strong>AWS Partner</strong>
            <span>Industry training partner</span>
          </div>
        </div>
        <div className="proof-item">
          <div className="proof-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
            </svg>
          </div>
          <div>
            <strong>IEB UK Path</strong>
            <span>Global recognition</span>
          </div>
        </div>
        <div className="proof-item">
          <div className="proof-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <div>
            <strong>Mohali Center</strong>
            <span>State-of-the-art campus</span>
          </div>
        </div>
      </div>

      <section className="programs-stage" id="services">
        <div className="programs-stage-head">
          <span className="section-label">Programs</span>
          <h2>Choose the program that fits your goal</h2>
          <p>
            Four focused pathways. Each page explains what you learn, who it is
            for, and how to apply — in plain language.
          </p>
        </div>

        <div className="program-cards">
          {SERVICE_PAGES.map((page, index) => (
            <Link key={page.to} href={page.to} className="program-card">
              <div
                className="program-card-media"
                style={{ backgroundImage: `url('${page.image}')` }}
              >
                <span className="program-card-icon">0{index + 1}</span>
              </div>
              <h3>{page.title}</h3>
              <p>{page.blurb}</p>
              <span className="go">Open details →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="why-stage">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Why Eurotech</span>
            <h2>
              Simple process. <em>Strong outcomes.</em>
            </h2>
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

          <aside className="why-panel">
            <div className="cred-rail">
              <div className="cred-block">
                <span className="cred-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                </span>
                <strong>Est. 2008</strong>
                <span>Years of training delivery</span>
              </div>
              <div className="cred-block">
                <span className="cred-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </span>
                <strong>AWS Partner</strong>
                <span>Miami, USA member</span>
              </div>
              <div className="cred-block">
                <span className="cred-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
                  </svg>
                </span>
                <strong>Mohali Lab</strong>
                <span>Hands-on campus</span>
              </div>
            </div>
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/home-campus-fill.png')" }}
              role="img"
              aria-label="Eurotech Mohali training campus"
            />
            <a className="btn btn-primary why-panel-cta" href="#enquire">
              Book a callback <span aria-hidden="true">→</span>
            </a>
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
