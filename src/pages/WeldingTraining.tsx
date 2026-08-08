import { Link } from 'react-router-dom'
import { CrossLinks } from '../components/CrossLinks'
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

      <section className="hero-cover service-hero welding" aria-label="Welding training">
        <div className="hero-cover-media" aria-hidden="true" />
        <div className="hero-cover-inner">
          <div className="hero-cover-copy">
            <p className="kicker">Educational partner · Est. 2008</p>
            <h1>Professional welder training</h1>
            <p className="hero-copy">
              Exclusive International Partner of American Welding Society (AWS)
              Miami, USA. Global training standards for high-demand careers.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#programs">
                Our Certifications
              </a>
              <a className="btn btn-secondary" href="#enquire">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        <div className="hero-rail" aria-label="Partner highlights">
          <div>
            <strong>AWS</strong>
            <span>Miami, USA Partner</span>
          </div>
          <div>
            <strong>15+</strong>
            <span>Global Offices</span>
          </div>
          <div>
            <strong>ASNT</strong>
            <span>Level II Center</span>
          </div>
          <div>
            <strong>Est. 2008</strong>
            <span>Legacy of Excellence</span>
          </div>
        </div>
      </section>

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
          <aside className="why-stage-side">
            <div className="cred-rail">
              {cities.map((city) => (
                <div className="cred-block" key={city}>
                  <strong>{city}</strong>
                  <span>Global footprint</span>
                </div>
              ))}
            </div>
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
            <ol className="why-steps">
              <li>
                <strong>Address</strong>
                <span>
                  Plot No: 146, JLPL Industrial Area, Sector 82 Mohali
                  Punjab-160062
                </span>
              </li>
              <li>
                <strong>Phone</strong>
                <span>
                  <a href="tel:+919316744482">+91-9316744482</a>
                </span>
              </li>
              <li>
                <strong>Email</strong>
                <span>
                  <a href="mailto:trg@eurotechworld.net">trg@eurotechworld.net</a>
                </span>
              </li>
              <li>
                <strong>Also</strong>
                <span>
                  <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> ·{' '}
                  <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                </span>
              </li>
            </ol>
          </div>
          <aside className="why-stage-side">
            <div className="visit-panel">
              <span className="visit-tag">Accredited</span>
              <h3>
                CE Marking · Electrical Testing · Social Audit · Welder
                Qualification
              </h3>
              <p>
                Bridge training and global placement with AWS-aligned standards.
              </p>
              <a className="btn btn-primary" href="#enquire">
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
