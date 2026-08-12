'use client'

import { CrossLinks } from '../components/CrossLinks'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'
import {
  RW_ADDRESS,
  RW_CAREERS,
  RW_CAUSE_AREAS,
  RW_CITIES,
  RW_CORPORATE_FOCUS,
  RW_CORPORATE_FOR,
  RW_CERT_POINTS,
  RW_DEFECTS,
  RW_EMAIL,
  RW_EMAIL_HREF,
  RW_EXPERIENCE_OPTIONS,
  RW_FACTS,
  RW_FAQS,
  RW_FINAL_SKILLS,
  RW_GALLERY,
  RW_HERO_POINTS,
  RW_INDUSTRIES,
  RW_INTRO_OUTCOMES,
  RW_JOIN_STEPS,
  RW_MAPS_HREF,
  RW_MODULES,
  RW_PARAMETERS,
  RW_PHONE,
  RW_PHONE_HREF,
  RW_PRACTICAL,
  RW_REGIONS,
  RW_SAFETY,
  RW_STATES,
  RW_TESTIMONIALS,
  RW_TRUST_LINE,
  RW_WHATSAPP_HREF,
  RW_WHO,
  RW_WHY,
} from '../data/roboticWeldingContent'

function SectionCta({
  href = '#enquire',
  label,
  secondaryHref,
  secondaryLabel,
}: {
  href?: string
  label: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <div className="weld-cta-row">
      <a className="btn btn-primary" href={href}>
        {label}
      </a>
      {secondaryHref && secondaryLabel ? (
        <a className="btn btn-outline" href={secondaryHref}>
          {secondaryLabel}
        </a>
      ) : null}
    </div>
  )
}

export function RoboticWelding() {
  return (
    <div className="weld-page rw-page">
      <Seo
        title="Robotic Welding Operator & Programmer Course | Eurotech Mohali"
        description="Learn to operate and program industrial welding robots with 200+ hours of live robot-lab training at Eurotech Mohali, Punjab."
      />

      <section className="hero-split service-hero robotic" aria-label="Robotic welding course">
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">
              Robotic Welding Operator &amp; Programmer Course in Mohali, Punjab
            </p>
            <h1>
              Manual Welding Se Automation Tak <em>Apna Career Badhao.</em>
            </h1>
            <p className="hero-copy">
              Learn to operate, program and troubleshoot industrial welding
              robots through more than 200 hours of hands-on training in
              Eurotech’s live robot lab.
            </p>
            <ul className="check-list weld-hero-list">
              {RW_HERO_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="hero-copy">
              For ITI welders, diploma and engineering students, experienced
              welders, production workers and industry professionals.
            </p>
            <p className="hero-copy">
              <strong>Open to candidates from:</strong> {RW_REGIONS}
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Get Fees &amp; Next Batch Details
              </a>
              <a className="btn btn-outline" href={RW_WHATSAPP_HREF} target="_blank" rel="noreferrer">
                Book a Free Counselling Call
              </a>
            </div>
            <p className="weld-trust-line">{RW_TRUST_LINE}</p>
            <p className="weld-hero-email">
              Phone: <a href={RW_PHONE_HREF}>{RW_PHONE}</a>
              <br />
              Email: <a href={RW_EMAIL_HREF}>{RW_EMAIL}</a>
            </p>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/program-robotic.png')" }}
              role="img"
              aria-label="Robotic welding training at Eurotech Mohali"
            />
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="facts">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Course Facts</span>
            <h2>Robotic Welding Course at a Glance</h2>
          </div>
          <div className="weld-fact-grid rw-fact-grid">
            {RW_FACTS.map((fact) => (
              <article className="weld-fact-card" key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
          <SectionCta label="Speak with a Training Advisor" href={RW_PHONE_HREF} />
        </div>
      </section>

      <section className="why-stage" id="introduction">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Course Introduction</span>
            <h2>Learn on Live Welding Robots—not Only Simulators</h2>
            <p>
              Robotic welding combines two important industrial skills: welding
              knowledge and robot programming.
            </p>
            <p>
              At Eurotech Mohali, candidates learn directly on industrial
              robotic welding equipment. Students practise robot movement,
              teach-pendant operation, welding-path creation, parameter setting,
              weld inspection and production troubleshooting.
            </p>
            <p>
              The programme takes candidates from basic robot safety and welding
              fundamentals to operating and programming a robotic welding cell.
            </p>
            <p>
              <strong>By the end of the programme, successful candidates should be able to:</strong>
            </p>
            <ul className="check-list">
              {RW_INTRO_OUTCOMES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <SectionCta label="Visit the Mohali Robot Lab" />
          </div>
          <aside className="why-panel">
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/robotic-lab-fill.png')" }}
              role="img"
              aria-label="Live robotic welding lab at Eurotech Mohali"
            />
            <div className="visit-panel">
              <span className="visit-tag">Mohali Robot Lab</span>
              <h3>Eurotech Training Centre</h3>
              <p>{RW_ADDRESS}</p>
              <a className="btn btn-primary why-panel-cta" href="#enquire">
                Get Fees &amp; Next Batch Details
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage ink" id="why-learn">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Why Learn Robotic Welding?</span>
            <h2>Move from Manual Welding to Modern Manufacturing</h2>
            <p>
              Automobile, manufacturing, fabrication and engineering companies
              use robotic welding for consistent and high-volume production.
              These industries require people who understand how to operate a
              robot and how welding settings affect the finished weld.
            </p>
          </div>
          <div className="rw-pathways">
            <article>
              <span>01</span>
              <h3>For manual welders</h3>
              <p>
                This programme provides a pathway towards automation-focused
                roles.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>For diploma and engineering students</h3>
              <p>
                It provides practical exposure to industrial robotics, welding
                and production systems.
              </p>
            </article>
          </div>
          <p className="weld-block-label rw-industry-label">
            Industries this training can support
          </p>
          <ul className="rw-industry-pills">
            {RW_INDUSTRIES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <SectionCta label="Start Your Robotic Welding Journey" />
        </div>
      </section>

      <section className="content-stage" id="modules">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Course Modules</span>
            <h2>What Will You Learn?</h2>
          </div>
          <div className="weld-course-list">
            {RW_MODULES.map((module, index) => (
              <details className="weld-course" key={module.id} open={index === 0}>
                <summary>
                  <span className="weld-course-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="weld-course-summary">
                    <h3>{module.title}</h3>
                    <p>{module.summary}</p>
                  </div>
                  <span className="weld-course-toggle" aria-hidden="true" />
                </summary>
                <div className="weld-course-body">
                  <p className="weld-course-covers-label">Topics include</p>
                  <ul className="check-list weld-two-col">
                    {module.topics.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
          <SectionCta label="Get the Complete Course Details" />
        </div>
      </section>

      <section className="content-stage ink" id="practical">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Practical Training</span>
            <h2>What Will You Practise in the Robot Lab?</h2>
            <p>
              Practical training is the main focus of this programme. Every
              activity is completed under trainer supervision and subject to
              workshop safety requirements.
            </p>
          </div>
          <ul className="rw-practice-grid">
            {RW_PRACTICAL.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
          <SectionCta label="Book a Robot Lab Visit" />
        </div>
      </section>

      <section className="content-stage" id="parameters">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Welding Parameters</span>
            <h2>Master the Settings Behind a Good Robotic Weld</h2>
            <p>
              A welding robot repeats the programme and settings it receives.
              Incorrect settings can repeatedly produce the same defect.
            </p>
          </div>
          <div className="weld-material-grid rw-param-grid">
            {RW_PARAMETERS.map((item, index) => (
              <article className="weld-material-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="safety">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Safety and Quality</span>
            <h2>Safety and Weld Quality Come First</h2>
            <p>
              Before operating a live industrial robot, every candidate learns
              the safety practices required around a robotic welding cell.
            </p>
          </div>
          <p className="weld-block-label rw-industry-label">Safety training includes</p>
          <ul className="rw-practice-grid">
            {RW_SAFETY.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="rw-quality-bands">
            <div>
              <p className="weld-block-label">Common weld problems</p>
              <ul className="rw-industry-pills">
                {RW_DEFECTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="weld-block-label">Students learn to determine the cause</p>
              <ul className="rw-industry-pills">
                {RW_CAUSE_AREAS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage" id="who">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Who Can Join?</span>
            <h2>Who Should Attend This Course?</h2>
          </div>
          <ul className="rw-who-grid">
            {RW_WHO.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="weld-eligibility">
            <div>
              <h3>Do I Need Previous Welding Experience?</h3>
              <p>
                Previous welding experience is helpful, especially for
                understanding weld quality and parameters. However, the Eurotech
                programme introduces the fundamentals required to begin robotic
                welding training.
              </p>
              <p>
                Candidates seeking a separate formal certification such as AWS
                CRAW must meet that certification body’s own education,
                experience, application and examination requirements.
              </p>
            </div>
            <a className="btn btn-primary" href="#enquire">
              Check Your Eligibility
            </a>
          </div>
        </div>
      </section>

      <section className="content-stage alt" id="north-india">
        <div className="shell">
          <div className="weld-overseas rw-region">
            <div className="weld-overseas-rail rw-region-rail">
              <span className="section-label">North India Service Area</span>
              <h2>Robotic Welding Training for Candidates Across North India</h2>
              <p>
                Eurotech’s robotic welding training centre is located in Mohali,
                Punjab, close to Chandigarh.
              </p>
              <p>{RW_CITIES}</p>
              <p>
                <strong>Training address:</strong> {RW_ADDRESS}
              </p>
              <SectionCta
                label="Get Directions"
                href={RW_MAPS_HREF}
                secondaryHref="#enquire"
                secondaryLabel="Plan Your Training Visit"
              />
            </div>
            <div className="rw-region-card">
              <p className="weld-block-label">The programme welcomes candidates from</p>
              <ul className="rw-region-places">
                {RW_STATES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage" id="careers">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Career Opportunities</span>
            <h2>Career Options After Robotic Welding Training</h2>
            <p>
              Employment, salary and selection depend on the candidate’s skills,
              education, experience and employer requirements.
            </p>
          </div>
          <div className="rw-career-grid">
            {RW_CAREERS.map((item) => (
              <article className="rw-career-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="certificate">
        <div className="shell">
          <div className="weld-cert">
            <div className="weld-cert-rail">
              <span className="section-label">Certification</span>
              <h2>Robotic Welding Operator and Programmer Certificate</h2>
              <p>
                Candidates who successfully complete the required training and
                assessment receive the Eurotech Robotic Welding Operator and
                Programmer Certificate.
              </p>
              <p className="weld-ink-note weld-note-start">
                An optional welding-operator approval aligned with EN ISO 14732
                may be available, subject to the selected assessment route. The
                Eurotech course certificate must not be presented as an AWS CRAW
                credential.
              </p>
              <SectionCta label="Ask About Certification" />
            </div>
            <div>
              <p className="weld-block-label">Before enrolment, Eurotech will explain</p>
              <ol className="weld-index-list weld-index-list-ink">
                {RW_CERT_POINTS.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage" id="why">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Why Choose Eurotech?</span>
            <h2>Why Choose Eurotech for Robotic Welding Training?</h2>
          </div>
          <ol className="weld-reason-list">
            {RW_WHY.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <SectionCta label="Get Admission Guidance" />
        </div>
      </section>

      <section className="content-stage alt" id="corporate">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Corporate Training</span>
            <h2>Robotic Welding Training for Companies</h2>
            <p>
              Eurotech can provide customised robotic welding training for
              organisations that operate or plan to introduce robotic welding
              systems. Delivery options may include public batches at Eurotech
              Mohali or customised company training, subject to equipment and
              programme requirements.
            </p>
          </div>
          <div className="rw-corporate">
            <div className="rw-corporate-panel">
              <p className="weld-block-label">Designed for</p>
              <ul className="rw-corporate-cards">
                {RW_CORPORATE_FOR.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rw-corporate-panel is-ink">
              <p className="weld-block-label">Training can focus on</p>
              <ul className="rw-corporate-cards">
                {RW_CORPORATE_FOCUS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <SectionCta label="Request Corporate Training" />
        </div>
      </section>

      <section className="content-stage ink" id="join">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">How to Join</span>
            <h2>Start Your Robotic Welding Training</h2>
          </div>
          <ol className="weld-timeline">
            {RW_JOIN_STEPS.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <SectionCta label="Get Fees & Next Batch Details" />
        </div>
      </section>

      <section className="content-stage" id="gallery">
        <div className="shell">
          <div className="weld-gallery-head">
            <div>
              <span className="section-label">Gallery</span>
              <h2>See Eurotech’s Robotic Welding Lab</h2>
              <p>
                A look at live robot practice, teach-pendant work, safety systems
                and trainer-guided sessions.
              </p>
            </div>
            <a className="btn btn-dark" href="#enquire">
              Book a Lab Visit
            </a>
          </div>
          <div className="weld-gallery-mosaic">
            {RW_GALLERY.map((item, index) => (
              <figure
                className={`weld-gallery-item${index === 0 ? ' is-feature' : ''}`}
                key={item.label}
              >
                <div
                  className="weld-gallery-media"
                  style={{ backgroundImage: `url('${item.image}')` }}
                  role="img"
                  aria-label={item.label}
                />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="testimonials">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Testimonials</span>
            <h2>What Our Trainees Say</h2>
          </div>
          <div className="weld-quote-stack">
            {RW_TESTIMONIALS.map((item) => (
              <blockquote key={item.name}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.meta}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage" id="faqs">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Frequently Asked Questions</span>
            <h2>Robotic Welding Course FAQs</h2>
          </div>
          <div className="faq-list">
            {RW_FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>
                  {item.q === 'How can I enrol?' ? (
                    <>
                      Call <a href={RW_PHONE_HREF}>{RW_PHONE}</a> or email{' '}
                      <a href={RW_EMAIL_HREF}>{RW_EMAIL}</a>.
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceEnquire
        defaultService="Robotic Welding"
        heading="Get Course Fees and Batch Details"
        description="Complete the form. Our training team will contact you with the course fee, duration, batch date and training-centre information."
        title="Robotic Welding Enquiry"
        subtitle="Share your details and we will guide you on fees, batch timing and the robot-lab schedule."
        serviceLabel="Course *"
        serviceOptions={['Robotic Welding']}
        experienceLabel="Experience *"
        experienceOptions={RW_EXPERIENCE_OPTIONS}
        submitLabel="Get Fees & Batch Details"
        privacyNote="Your information will only be used to contact you about Eurotech’s robotic welding training."
        steps={[
          'Share your details and experience level',
          'A training advisor contacts you',
          'Confirm fees, batch date and next steps',
        ]}
      />

      <section className="content-stage" id="final-cta">
        <div className="shell">
          <div className="rw-final">
            <div className="rw-final-copy">
              <span className="section-label">Start Today</span>
              <h2>North India Mein Robotic Welding Seekho.</h2>
              <p className="rw-final-lead">
                Become a Robotic Welding Operator and Programmer
              </p>
              <p>Get more than 200 hours of practical training in:</p>
              <ul className="check-list weld-two-col">
                {RW_FINAL_SKILLS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Training location:</strong> {RW_ADDRESS}
                <br />
                Phone: <a href={RW_PHONE_HREF}>{RW_PHONE}</a>
                <br />
                Email: <a href={RW_EMAIL_HREF}>{RW_EMAIL}</a>
              </p>
              <SectionCta
                label="Get Fees & Next Batch Details"
                secondaryHref={RW_PHONE_HREF}
                secondaryLabel="Call Eurotech Now"
              />
            </div>
            <div className="rw-region-card">
              <p className="weld-block-label">Open to candidates from</p>
              <ul className="rw-region-places">
                {RW_STATES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CrossLinks currentPath="/robotic-welding-course" />
    </div>
  )
}
