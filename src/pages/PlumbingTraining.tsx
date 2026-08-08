import { CrossLinks } from '../components/CrossLinks'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'

const courses = [
  {
    badge: 'Basic',
    title: 'Plumbing Basic Course',
    duration: '15 Working Days',
    price: '₹15,000',
    eligibility: 'Minimum 10th (preferably)',
    features: [
      'Core Plumbing Principles',
      'Basic Pipe Fitting & Joining',
      'Tool Identification & Usage',
      'IEB London (UK) Certification',
    ],
  },
  {
    badge: 'Most Popular',
    title: 'Plumbing Foundation Course',
    duration: '30 Working Days',
    price: '₹25,000',
    eligibility: 'Minimum 10th (preferably)',
    features: [
      'Everything in Basic',
      'Advanced Fixture Installation',
      'Drainage System Layouts',
      'IEB London (UK) Certification',
    ],
    popular: true,
  },
  {
    badge: 'Advanced',
    title: 'Hi-Tech Plumbing Course',
    duration: '40 Working Days',
    price: '₹35,000',
    eligibility: 'Minimum 10th (preferably)',
    features: [
      'Everything in Foundation',
      'Modern Sensor Fittings',
      'High-Pressure Systems',
      'IEB London (UK) Certification',
    ],
  },
  {
    badge: 'Engineering',
    title: 'Plumbing Design & Drafting',
    duration: '40 Working Days',
    price: '₹35,000',
    eligibility: 'Minimum Diploma (preferably) with AutoCAD knowledge',
    features: [
      'AutoCAD Drafting for MEP',
      'System Sizing & Calculations',
      'Blueprint Generation',
      'IEB London (UK) Certification',
    ],
  },
]

export function PlumbingTraining() {
  return (
    <>
      <Seo
        title="Eurotech Plumbing Training Institute | Mohali"
        description="Professional plumbing training institute in Mohali with IEB UK certification. Basic to Hi-Tech courses, design drafting, and fire plumbing modules."
      />

      <section className="hero-cover service-hero plumbing" aria-label="Plumbing training">
        <div className="hero-cover-media" aria-hidden="true" />
        <div className="hero-cover-inner">
          <div className="hero-cover-copy">
            <p className="kicker">
              Professional plumbing training institute — IEB UK certified
            </p>
            <h1>Build your career in the plumbing industry</h1>
            <p className="hero-copy">
              Hands-on, industry-focused plumbing training designed to make you
              job-ready. Enroll today and secure your future.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#courses">
                Explore Our Courses
              </a>
              <a className="btn btn-secondary" href="#enquire">
                Contact Institute
              </a>
            </div>
          </div>
        </div>
        <div className="hero-rail" aria-label="Training highlights">
          <div>
            <strong>100%</strong>
            <span>Job-Ready Focus</span>
          </div>
          <div>
            <strong>90%</strong>
            <span>Practical Training</span>
          </div>
          <div>
            <strong>IEB UK</strong>
            <span>Certification Path</span>
          </div>
          <div>
            <strong>Mohali</strong>
            <span>Live Site Simulation</span>
          </div>
        </div>
      </section>

      <section className="why-stage">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">About the institute</span>
            <h2>Skills for the modern industry</h2>
            <p>
              <strong>Eurotech Assessment & Certification Services Pvt. Ltd.</strong>{' '}
              is a trusted vocational training institute specializing in
              skill-based education. We place a strong focus on practical
              learning and industry requirements to bridge the gap between
              academic knowledge and real-world application.
            </p>
            <ol className="why-steps">
              <li>
                <strong>01</strong>
                <span>Expert-led training modules</span>
              </li>
              <li>
                <strong>02</strong>
                <span>State-of-the-art learning facilities in Mohali</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Dedicated career building support</span>
              </li>
              <li>
                <strong>04</strong>
                <span>90% practical training with small batch sizes</span>
              </li>
              <li>
                <strong>05</strong>
                <span>IEB London (UK) accreditation pathways</span>
              </li>
            </ol>
          </div>
          <aside className="why-stage-side">
            <div className="cred-rail">
              <div className="cred-block">
                <strong>Experienced trainers</strong>
                <span>Industry veterans with on-site plumbing experience</span>
              </div>
              <div className="cred-block">
                <strong>Modern tools</strong>
                <span>Latest plumbing tools used in the global industry</span>
              </div>
              <div className="cred-block">
                <strong>Site simulation</strong>
                <span>Environments that mimic real construction sites</span>
              </div>
            </div>
            <div className="visit-panel">
              <span className="visit-tag">Campus</span>
              <h3>Plot No 146, Sector 82, Mohali</h3>
              <p>JLPL Industrial area, Punjab 140308</p>
              <p>
                <a href="tel:+919120884044">+91-9120884044</a>
                <br />
                <a href="mailto:eurotechplumbingtraining@gmail.com">
                  eurotechplumbingtraining@gmail.com
                </a>
              </p>
              <a className="btn btn-primary" href="#enquire">
                Contact us
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage alt" id="courses">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Courses & pricing</span>
            <h2>Choose your level</h2>
            <p>
              Flexible pricing depending on your certification needs. Switch
              between courses anytime.
            </p>
          </div>
          <div className="detail-grid four">
            {courses.map((course) => (
              <article
                className={`detail-card${course.popular ? ' popular' : ''}`}
                key={course.title}
              >
                <span className="badge">{course.badge}</span>
                <h3>{course.title}</h3>
                <p className="muted">{course.duration}</p>
                <div className="price">
                  {course.price}
                  <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-body)' }}>
                    {' '}
                    / person
                  </span>
                </div>
                <p className="muted">Eligibility: {course.eligibility}</p>
                <ul>
                  {course.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <a className="btn btn-dark btn-block" href="#enquire" style={{ marginTop: '1rem' }}>
                  Enquire Now
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage ink">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Specialized module</span>
            <h2>Fire plumbing course</h2>
            <p>
              30 working days. Master the critical systems required for
              commercial and residential fire safety compliance.
            </p>
          </div>
          <div className="benefit-slabs">
            <article className="benefit-slab">
              <span className="slab-num">01</span>
              <h3>Fire Fighting Systems</h3>
              <p>Wet & Dry Riser systems for commercial and residential projects.</p>
            </article>
            <article className="benefit-slab">
              <span className="slab-num">02</span>
              <h3>Sprinkler Installation</h3>
              <p>Sprinkler system installation practices for modern infrastructure.</p>
            </article>
            <article className="benefit-slab">
              <span className="slab-num">03</span>
              <h3>Fire Pump Basics</h3>
              <p>Core pump knowledge required for reliable fire safety systems.</p>
            </article>
            <article className="benefit-slab">
              <span className="slab-num">04</span>
              <h3>Hydrant Layout</h3>
              <p>Hydrant system layout with applied safety standards.</p>
            </article>
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a className="btn btn-primary" href="#enquire">
              Contact Us For Pricing
            </a>
          </div>
        </div>
      </section>

      <ServiceEnquire
        defaultService="Plumbing Training"
        title="Send message"
        subtitle="Tell us which course level you want — Basic, Foundation, Hi-Tech, Design, or Fire."
      />
      <CrossLinks currentPath="/plumbing-training" />
    </>
  )
}
