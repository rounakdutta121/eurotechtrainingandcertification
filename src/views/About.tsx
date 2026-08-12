'use client'

import Link from 'next/link'
import { ProofBar } from '../components/ProofBar'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'
import { CONTACT } from '../data/services'

const offices = [
  {
    country: 'India',
    city: 'Mohali / Chandigarh',
    tag: 'Head Office',
    address:
      'Plot No. 146, JLPL Industrial Area, Sector 82, Sahibzada Ajit Singh Nagar (Mohali), Punjab 160062, India',
  },
  {
    country: 'India',
    city: 'Delhi NCR',
    address:
      'Unit No. 4F-CS-67, Fourth Floor, Ansal Plaza, Sector-1, Vaishali, Ghaziabad, Uttar Pradesh 201010',
  },
  {
    country: 'India',
    city: 'Ahmedabad',
    address:
      '806-807, Pehel Lakeview, Near AUDA Garden, Vaishnodevi Circle Service Road, S.G. Highway, Ahmedabad, Gujarat 382735',
  },
  {
    country: 'India',
    city: 'Mumbai',
    address:
      'Wadhwa Atmosphere Ziva, C-3404, 34th Floor, Mulund Goregaon Link Road, Near Nahur Station, Mulund West, Mumbai 400080',
  },
  {
    country: 'India',
    city: 'Chennai',
    address:
      'No. 52/1, 1st Floor, Alandur Road (Opp. HDFC ATM), Saidapet, Chennai 600015',
  },
  {
    country: 'United Kingdom',
    city: 'London',
    address: '20-22 Wenlock Road, Hoxton, London N1 7GU, United Kingdom',
  },
  {
    country: 'United States',
    city: 'Newark, Delaware',
    address: '69 Omega Dr, Suite 270, Newark, Delaware 19713, USA',
  },
  {
    country: 'Canada',
    city: 'Greater Vancouver',
    address: '8449, 116A Street, Delta B4C 7N7, Greater Vancouver, Canada',
  },
  {
    country: 'Netherlands',
    city: 'Amsterdam',
    address: 'Keizersgracht 482, 1017 EG Amsterdam, The Netherlands',
  },
]

const values = [
  {
    title: 'Practical first',
    text: 'We prioritise hands-on labs and real equipment so learners leave job-ready, not theory-only.',
  },
  {
    title: 'Standards that travel',
    text: 'Our programs align with recognised pathways — AWS, IEB UK, ASNT-aligned NDT, and CE compliance routes.',
  },
  {
    title: 'Honest counselling',
    text: 'We map the right course, timeline, and certification path before you invest time or money.',
  },
  {
    title: 'Industry outcomes',
    text: 'From shop-floor skills to European market compliance, every program is built for real careers and trade.',
  },
]

export function About() {
  return (
    <>
      <Seo
        title="About Us | Eurotech Training & Certification"
        description="Learn about Eurotech Assessment and Certification Services — practical vocational training and globally recognised certification since 2008."
      />

      <section className="hero-split service-hero" aria-label="About Eurotech">
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">About Eurotech</p>
            <h1>
              Building careers through <em>training &amp; certification</em>
            </h1>
            <p className="hero-copy">
              Since 2008, Eurotech Assessment and Certification Services has
              helped learners and manufacturers gain practical skills and
              recognised credentials for India and global markets.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Talk to our team
              </a>
              <Link className="btn btn-outline" href="/">
                View programs
              </Link>
            </div>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/about-hero.png')" }}
              role="img"
              aria-label="Eurotech training campus exterior"
            />
          </div>
        </div>
      </section>

      <ProofBar
        label="About highlights"
        items={[
          { icon: 'calendar', title: 'Est. 2008', subtitle: 'Years of delivery' },
          { icon: 'shield', title: 'AWS Partner', subtitle: 'Miami, USA member' },
          { icon: 'globe', title: '15+ Offices', subtitle: 'Global footprint' },
          { icon: 'pin', title: 'Mohali Lab', subtitle: 'Hands-on campus' },
        ]}
      />

      <section className="why-stage">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Our story</span>
            <h2>Who we are</h2>
            <p>
              Eurotech Assessment and Certification Services Pvt. Ltd. started
              operations in 2008 and has grown into a trusted name for vocational
              training and certification. We combine practical lab training with
              pathways that industries recognise — so students, welders, and
              manufacturers can move forward with confidence.
            </p>
            <ol className="why-steps">
              <li>
                <strong>01</strong>
                <span>Hands-on training in welding, robotics, and plumbing</span>
              </li>
              <li>
                <strong>02</strong>
                <span>CE Mark certification support for European market access</span>
              </li>
              <li>
                <strong>03</strong>
                <span>AWS-affiliated and internationally aligned programs</span>
              </li>
              <li>
                <strong>04</strong>
                <span>Counselling that matches the right course to your goal</span>
              </li>
            </ol>
          </div>
          <aside className="why-panel">
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/about-campus.png')" }}
              role="img"
              aria-label="Eurotech practical training laboratory"
            />
            <div className="visit-panel">
              <span className="visit-tag">Visit us</span>
              <h3>{CONTACT.addressShort}</h3>
              <p>{CONTACT.address}</p>
              <p>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                <br />
                <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Locations</span>
            <h2>Our offices</h2>
            <p>
              Nine offices across five countries — head office in Mohali, plus
              teams in India, the UK, USA, Canada, and the Netherlands.
            </p>
          </div>
          <div className="process-rail about-offices">
            {offices.map((office, index) => (
              <article className="process-step" key={office.city}>
                <span className="path-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="badge">{office.country}</span>
                <h3>
                  {office.city}
                  {office.tag ? (
                    <span className="office-hq"> · {office.tag}</span>
                  ) : null}
                </h3>
                <p>{office.address}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage alt">
        <div className="shell about-split">
          <div className="about-split-copy">
            <span className="section-label">Global outlook</span>
            <h2>Local campus. International standards.</h2>
            <p>
              Our Mohali campus delivers practical training on equipment used in
              industry. Alongside that, we guide companies and professionals
              toward credentials and compliance that open doors beyond India —
              including AWS pathways, IEB UK routes, and CE Mark certification
              for European markets.
            </p>
            <ul className="check-list">
              <li>Robotic welding &amp; industrial robot programming</li>
              <li>AWS-aligned welder and NDT career tracks</li>
              <li>Plumbing training with IEB UK pathways</li>
              <li>CE Mark certification for EU market access</li>
            </ul>
            <div className="hero-actions" style={{ marginTop: '1.25rem' }}>
              <Link className="btn btn-primary" href="/ce-mark">
                Explore CE Mark
              </Link>
              <Link className="btn btn-outline" href="/robotic-welding-course">
                Explore trainings
              </Link>
            </div>
          </div>
          <div
            className="about-split-media"
            style={{ backgroundImage: "url('/images/about-global.png')" }}
            role="img"
            aria-label="Global certification and partnership setting"
          />
        </div>
      </section>

      <section className="content-stage">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">What we stand for</span>
            <h2>Our values</h2>
            <p>
              Clear principles that shape how we train, certify, and counsel
              every learner and client.
            </p>
          </div>
          <div className="benefit-slabs about-values">
            {values.map((item, index) => (
              <article className="benefit-slab" key={item.title}>
                <span className="slab-num">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ServiceEnquire
        defaultService="Welding Training Courses"
        title="Start a conversation"
        subtitle="Tell us what you want to learn or certify — our team will guide the next step."
      />
    </>
  )
}
