import { Link } from 'react-router-dom'
import { CrossLinks } from '../components/CrossLinks'
import { ProofBar } from '../components/ProofBar'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'
import { CONTACT } from '../data/services'

const programs = [
  {
    title: 'AWS Welder Training',
    tag: 'Global Certification',
    meta: 'AWS Affiliated · Global Reach',
    points: [
      'Ferrous & Non-Ferrous materials',
      'AWS CWI Course conduct',
      'International Partner standards',
      'Placement for qualified welders',
    ],
  },
  {
    title: 'Robotic Welding',
    tag: 'Automation Hub',
    meta: '200+ Hours · Engineers/ITI',
    points: [
      'Torch & TCP Calibration',
      'Teach Pendant Programming',
      'Automation Workflows',
      'Fault Diagnostics',
    ],
    link: '/robotic-welding-course',
  },
  {
    title: 'NDT Level-II',
    tag: 'ASNT Aligned',
    meta: 'Multi-Cert · ITI/Diploma',
    points: [
      'Visual Testing (VT)',
      'Ultrasonic Testing (UT)',
      'Magnetic Particle (MT)',
      'Liquid Penetrant (PT)',
    ],
  },
  {
    title: 'Corporate Welding Training',
    tag: 'Onsite & Certification',
    meta: 'Onsite · Certified Trainers',
    points: [
      'Customized modules per requirements',
      'ISO, AWS, ASME aligned',
      '20+ years experienced trainers',
      'Welders, Operators & Supervisors',
    ],
  },
]

const destinations = [
  'QA/QC Inspector',
  'AWS Welder',
  'Robotic Programmer',
  'NDT Technician',
  'Offshore Engineer',
  'Social Auditor',
]

const cities = [
  'Delhi & NCR',
  'Mumbai & Ahmedabad',
  'Chennai & Cochin',
  'Coimbatore & Tirupur',
  'Lucknow & Haridwar',
  'International (USA/UK)',
]

export function WeldingTraining() {
  return (
    <>
      <Seo
        title="Eurotech Mohali | Professional Skill Training Center"
        description="Professional welder training at Eurotech Mohali. Exclusive international partner of American Welding Society (AWS) Miami, USA. AWS, robotic welding, NDT Level-II."
      />

      <section className="hero-split service-hero welding" aria-label="Welding training">
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">Educational partner · Est. 2008</p>
            <h1>
              Professional <em>welder training</em>
            </h1>
            <p className="hero-copy">
              Exclusive International Partner of American Welding Society (AWS)
              Miami, USA. Global training standards for high-demand careers.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Start free counselling
              </a>
              <a className="btn btn-outline" href="#programs">
                Compare programs
              </a>
            </div>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/program-welding.png')" }}
              role="img"
              aria-label="Welding training"
            />
          </div>
        </div>
      </section>

      <ProofBar
        label="Partner highlights"
        items={[
          { icon: 'shield', title: 'AWS', subtitle: 'Miami, USA Partner' },
          { icon: 'globe', title: '15+', subtitle: 'Global Offices' },
          { icon: 'badge', title: 'ASNT', subtitle: 'Level II Center' },
          { icon: 'calendar', title: 'Est. 2008', subtitle: 'Legacy of Excellence' },
        ]}
      />

      <section className="why-stage">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">About</span>
            <h2>Eurotech Assessment & Certification</h2>
            <p>
              Eurotech (EACS) started operations in 2008 in Panchkula and has
              since expanded to a global scale. We provide accredited services
              including Welder Training, NDT/DT, CE Marking, and Social Audits.
            </p>
            <ol className="why-steps">
              <li>
                <strong>01</strong>
                <span>
                  Exclusive Educational Company Member and International partner
                  of AWS Miami, USA
                </span>
              </li>
              <li>
                <strong>02</strong>
                <span>AWS CWI courses and AWS-affiliated qualified welders</span>
              </li>
              <li>
                <strong>03</strong>
                <span>
                  Offices across USA, UK, Canada, Middle East, Nigeria, and Ghana
                </span>
              </li>
              <li>
                <strong>04</strong>
                <span>Nationwide presence in 10+ Indian cities</span>
              </li>
            </ol>
          </div>
          <aside className="why-panel">
            <div className="cred-rail">
              {cities.map((city) => (
                <div className="cred-block" key={city}>
                  <strong>{city}</strong>
                  <span>Global footprint</span>
                </div>
              ))}
            </div>
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/welding-about-fill.png')" }}
              role="img"
              aria-label="Welding professionals training for global certification careers"
            />
          </aside>
        </div>
      </section>

      <section className="content-stage" id="programs">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Training programs</span>
            <h2>Professional training programs</h2>
            <p>
              Select a course to view detailed modules and global certifications.
            </p>
          </div>
          <div className="process-rail">
            {programs.map((program, index) => (
              <article className="process-step" key={program.title}>
                <span className="path-index">0{index + 1}</span>
                <span className="badge">{program.tag}</span>
                <h3>{program.title}</h3>
                <p>{program.meta}</p>
                <ul>
                  {program.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                {program.link ? (
                  <Link to={program.link} className="go" style={{ display: 'inline-block', marginTop: '0.75rem' }}>
                    View curriculum →
                  </Link>
                ) : (
                  <a href="#enquire" className="go" style={{ display: 'inline-block', marginTop: '0.75rem' }}>
                    View details →
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage alt">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Careers</span>
            <h2>Global career destinations</h2>
          </div>
          <div className="chip-row">
            {destinations.map((role) => (
              <span className="chip" key={role}>
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Corporate solutions</span>
            <h2>Corporate & industrial solutions</h2>
            <p>
              Corporate houses and employers globally are invited to collaborate
              for welder training and to recruit qualified personnel from our
              AWS-affiliated talent pool.
            </p>
          </div>
          <div className="dir-list">
            <a href="#enquire" className="dir-row">
              <span className="dir-num">01</span>
              <h3>Welder Qualification Certification</h3>
              <p>Qualify welders to global procedure standards.</p>
              <span className="go">Enquire →</span>
            </a>
            <a href="#enquire" className="dir-row">
              <span className="dir-num">02</span>
              <h3>NDT/DT Professional Training</h3>
              <p>Build inspection capability for production teams.</p>
              <span className="go">Enquire →</span>
            </a>
            <a href="#enquire" className="dir-row">
              <span className="dir-num">03</span>
              <h3>Electrical Testing Services</h3>
              <p>Support compliance and electrical safety checks.</p>
              <span className="go">Enquire →</span>
            </a>
            <a href="#enquire" className="dir-row">
              <span className="dir-num">04</span>
              <h3>CE Marking Certification</h3>
              <p>European market access advisory and documentation.</p>
              <span className="go">Enquire →</span>
            </a>
          </div>
        </div>
      </section>

      <section className="why-stage">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Start</span>
            <h2>Start your global career</h2>
            <p>AWS Membership & Certified Training Services since 2008.</p>
            <ol className="why-steps why-steps-icons">
              <li>
                <strong aria-label="Address">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </strong>
                <span>
                  Plot No: 146, JLPL Industrial Area, Sector 82 Mohali
                  Punjab-160062
                </span>
              </li>
              <li>
                <strong aria-label="Phone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.2a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 1.9z" />
                  </svg>
                </strong>
                <span>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                </span>
              </li>
              <li>
                <strong aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 7 9-7" />
                  </svg>
                </strong>
                <span>
                  <a href="mailto:trg@eurotechworld.net">trg@eurotechworld.net</a>
                </span>
              </li>
              <li>
                <strong aria-label="Also contact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9S14.5 18.2 12 21c-2.5-2.8-3.8-5.8-3.8-9S9.5 5.8 12 3z" />
                  </svg>
                </strong>
                <span>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> ·{' '}
                  <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                </span>
              </li>
            </ol>
          </div>
          <aside className="why-panel">
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/welding-career-fill.png')" }}
              role="img"
              aria-label="Certified welder starting a global career opportunity"
            />
            <div className="visit-panel">
              <span className="visit-tag">Accredited</span>
              <h3>
                CE Marking · Electrical Testing · Social Audit · Welder
                Qualification
              </h3>
              <p>
                Bridge training and global placement with AWS-aligned standards.
              </p>
              <a className="btn btn-primary why-panel-cta" href="#enquire">
                Submit interest
              </a>
            </div>
          </aside>
        </div>
      </section>

      <ServiceEnquire
        defaultService="Welding Training Courses"
        title="Submit interest"
        subtitle="AWS Welder Qualification, Robotic Welding, NDT Level-II, Corporate Welding and more."
      />
      <CrossLinks currentPath="/welding-training-courses" />
    </>
  )
}
