'use client'

import { CrossLinks } from '../components/CrossLinks'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'
import {
  PL_ADDRESS,
  PL_CAREER_INDUSTRIES,
  PL_CAREER_ROLES,
  PL_CERT_EXTRA,
  PL_CERT_POINTS,
  PL_COURSE_OPTIONS,
  PL_COURSES,
  PL_FACTS,
  PL_FAQS,
  PL_FINAL_SKILLS,
  PL_FIXTURES,
  PL_HERO_COVERS,
  PL_HERO_FOR,
  PL_JOIN_STEPS,
  PL_MAPS_HREF,
  PL_MATERIALS,
  PL_OVERSEAS_BRINGS,
  PL_OVERSEAS_FOCUS,
  PL_OVERSEAS_FOR,
  PL_OVERSEAS_OUTCOMES,
  PL_OVERSEAS_TASKS,
  PL_PHONE,
  PL_PHONE_HREF,
  PL_PRACTICAL,
  PL_STATES,
  PL_TERMS,
  PL_TRADE_TEST,
  PL_TRUST_LINE,
  PL_WHATSAPP_HREF,
  PL_WHO,
  PL_WHY,
} from '../data/plumbingTrainingContent'

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
        <a
          className="btn btn-outline"
          href={secondaryHref}
          {...(secondaryHref.startsWith('http')
            ? { target: '_blank', rel: 'noreferrer' }
            : {})}
        >
          {secondaryLabel}
        </a>
      ) : null}
    </div>
  )
}

export function PlumbingTraining() {
  return (
    <div className="weld-page pl-page">
      <Seo
        title="Professional Plumbing Training for India and Abroad | Eurotech Mohali"
        description="90% practical plumbing training in Mohali — pipework, sanitary installation, trade-test preparation and a verifiable Eurotech certificate."
      />

      <section className="hero-split service-hero plumbing" aria-label="Plumbing training">
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">Professional Plumbing Training in Mohali, Punjab</p>
            <h1>
              Professional Plumbing Training for Careers in{' '}
              <em>India and Abroad</em>
            </h1>
            <p className="hero-copy">
              Learn professional plumbing through 90% practical training with
              real tools, pipes, fittings, sanitary fixtures and site-based
              activities.
            </p>
            <p className="hero-copy">
              Develop the skills commonly required for residential, commercial,
              industrial and overseas plumbing work.
            </p>
            <div className="pl-hero-lists">
              <div>
                <p className="pl-hero-list-label">Training includes</p>
                <ul className="check-list weld-hero-list">
                  {PL_HERO_COVERS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="pl-hero-list-label">Suitable for</p>
                <ul className="check-list weld-hero-list">
                  {PL_HERO_FOR.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Get Fees &amp; Next Batch Details
              </a>
              <a className="btn btn-outline" href={PL_PHONE_HREF}>
                Call {PL_PHONE}
              </a>
            </div>
            <p className="weld-trust-line">{PL_TRUST_LINE}</p>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/plumbing-campus-fill.png')" }}
              role="img"
              aria-label="Professional plumbing training at Eurotech Mohali"
            />
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="facts">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Quick Course Facts</span>
            <h2>Professional Plumbing Training at a Glance</h2>
          </div>
          <div className="weld-fact-grid">
            {PL_FACTS.map((fact) => (
              <article className="weld-fact-card" key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
          <SectionCta label="Speak with a Training Advisor" href={PL_PHONE_HREF} />
        </div>
      </section>

      <section className="why-stage" id="overseas">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Overseas Career Positioning</span>
            <h2>Planning to Build a Plumbing Career Abroad?</h2>
            <p>
              Overseas employers usually look for more than a basic course
              certificate. They may assess whether a candidate can complete
              plumbing tasks correctly, safely and within the required time.
            </p>
            <p className="pl-hero-list-label">Candidates may be asked to demonstrate</p>
            <ol className="pl-task-grid">
              {PL_OVERSEAS_TASKS.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
            <p>
              Eurotech’s professional training programme focuses on these
              practical abilities. The objective is to help candidates present:
            </p>
            <ul className="check-list weld-two-col">
              {PL_OVERSEAS_OUTCOMES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="weld-note weld-note-start">
              Training and certification can strengthen a candidate’s profile.
              Employment, work permits, visas, licensing and qualification
              recognition remain subject to employer and destination-country
              requirements.
            </p>
            <SectionCta label="Discuss Your Overseas Career Goal" />
          </div>
          <aside className="why-panel">
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/plumbing-overseas-fill.png')" }}
              role="img"
              aria-label="Practical plumbing workshop training at Eurotech Mohali"
            />
            <div className="visit-panel">
              <span className="visit-tag">Mohali Training Centre</span>
              <h3>Eurotech Plumbing Institute</h3>
              <p>{PL_ADDRESS}</p>
              <p>
                <a href={PL_PHONE_HREF}>{PL_PHONE}</a>
              </p>
              <a className="btn btn-primary why-panel-cta" href="#enquire">
                Discuss Your Overseas Career Goal
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage ink" id="overseas-programme">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">
              Professional Overseas Plumbing Programme
            </span>
            <h2>Professional Plumbing Programme for Overseas Career Preparation</h2>
            <p>
              This advanced pathway is designed for candidates willing to invest
              in more complete practical training before applying for overseas
              opportunities.
            </p>
          </div>
          <p className="weld-block-label rw-industry-label">
            The programme brings together
          </p>
          <ul className="pl-chip-row">
            {PL_OVERSEAS_BRINGS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="weld-block-label rw-industry-label">Programme focus</p>
          <div className="weld-material-grid rw-param-grid">
            {PL_OVERSEAS_FOCUS.map((item, index) => (
              <article className="weld-material-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="weld-eligibility">
            <div>
              <h3>Recommended for</h3>
              <ul className="check-list">
                {PL_OVERSEAS_FOR.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                <strong>Duration:</strong> Confirm with the training team
                <br />
                <strong>Fee:</strong> Contact Eurotech for current
                professional-programme pricing
                <br />
                <strong>Certification:</strong> Eurotech professional training
                certificate after successful completion and assessment
              </p>
            </div>
          </div>
          <SectionCta
            label="Get Overseas Programme Pricing"
            secondaryHref={PL_WHATSAPP_HREF}
            secondaryLabel="Book a Counselling Call"
          />
        </div>
      </section>

      <section className="content-stage" id="courses">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Course Options</span>
            <h2>Choose the Right Plumbing Course</h2>
          </div>
          <div className="weld-course-list">
            {PL_COURSES.map((course, index) => (
              <details className="weld-course" key={course.id} open={index === 0}>
                <summary>
                  <span className="weld-course-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="weld-course-summary">
                    <h3>{course.title}</h3>
                    <p>{course.summary}</p>
                    <span className="weld-duration">
                      Duration: {course.duration} · Fee: {course.fee}
                    </span>
                  </div>
                  <span className="weld-course-toggle" aria-hidden="true" />
                </summary>
                <div className="weld-course-body">
                  <p>
                    Eligibility: {course.eligibility}
                    {course.extra ? `. ${course.extra}.` : '.'}
                  </p>
                  <p className="weld-course-covers-label">You will learn</p>
                  <ul className="check-list weld-two-col">
                    {course.learn.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    <strong>Best for:</strong> {course.bestFor}
                  </p>
                  <a className="btn btn-primary" href="#enquire">
                    {course.cta}
                  </a>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="practical">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Practical Training</span>
            <h2>What Will You Practise?</h2>
            <p>
              Depending on the selected programme, candidates may practise the
              skills below. All practical activities are completed under trainer
              supervision and subject to workshop safety requirements.
            </p>
          </div>
          <ul className="rw-practice-grid">
            {PL_PRACTICAL.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item}
              </li>
            ))}
          </ul>
          <SectionCta label="Ask About Practical Training" />
        </div>
      </section>

      <section className="content-stage" id="materials">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">
              Internationally Used Plumbing Materials
            </span>
            <h2>Train with Common Plumbing Materials</h2>
            <p>
              The course teaches candidates to select appropriate tools,
              fittings and joining methods for each material.
            </p>
          </div>
          <div className="pl-material-grid">
            {PL_MATERIALS.map((item, index) => (
              <article className="pl-material-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="weld-note">
            Training on these materials supports practical skill development,
            but exact site practices and approved materials can differ by
            country, employer and project.
          </p>
        </div>
      </section>

      <section className="content-stage alt" id="fixtures">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Professional Fixture Installation</span>
            <h2>Learn Residential and Commercial Plumbing Installation</h2>
            <p>
              Students learn installation, alignment, connection, checking and
              basic fault correction.
            </p>
          </div>
          <ul className="pl-fixture-grid">
            {PL_FIXTURES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-stage ink" id="trade-test">
        <div className="shell">
          <div className="weld-cert">
            <div className="weld-cert-rail">
              <span className="section-label">Trade-Test Preparation</span>
              <h2>Prepare for Employer Plumbing Trade Tests</h2>
              <p>
                Overseas recruiters and employers may conduct practical
                assessments before selecting candidates. Eurotech can help
                candidates practise the tasks commonly asked in those
                assessments.
              </p>
              <p className="weld-ink-note weld-note-start">
                Trade-test practice helps candidates understand assessment
                conditions. It does not guarantee employer selection.
              </p>
              <SectionCta label="Ask About Trade-Test Preparation" />
            </div>
            <ol className="weld-index-list weld-index-list-ink">
              {PL_TRADE_TEST.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="content-stage" id="terminology">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">
              Professional English and Site Terminology
            </span>
            <h2>Understand Common Plumbing Terms Used on International Sites</h2>
            <p>
              Candidates preparing for overseas work may need to understand
              site instructions given in English. This is technical terminology
              support, not a spoken-English or immigration course.
            </p>
          </div>
          <ul className="pl-chip-row">
            {PL_TERMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-stage ink" id="certificate">
        <div className="shell">
          <div className="weld-cert">
            <div className="weld-cert-rail">
              <span className="section-label">Certification</span>
              <h2>Receive a Verifiable Professional Training Certificate</h2>
              <p>
                Candidates who successfully complete the applicable training and
                assessment receive a Eurotech course certificate. This provides
                documented evidence that the candidate completed professional
                plumbing training.
              </p>
              <p className="weld-ink-note weld-note-start">
                The Eurotech certificate remains a record of the training
                completed. Acceptance for employment, licensing, immigration or
                professional registration is decided by destination-country
                authorities, employers and other relevant organisations.
                Candidates should check the requirements for their intended
                country and occupation before paying an agent, applying for a
                visa or accepting employment.
              </p>
              <SectionCta label="Ask About Certificate Verification" />
            </div>
            <div>
              <p className="weld-block-label">
                Certificate documentation should identify
              </p>
              <ol className="weld-index-list weld-index-list-ink">
                {PL_CERT_POINTS.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              <div className="pl-require-panel">
                <p className="weld-block-label">
                  Some countries or employers may require
                </p>
                <ul className="rw-industry-pills">
                  {PL_CERT_EXTRA.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage" id="who">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Who Should Join?</span>
            <h2>Is This Plumbing Training Right for You?</h2>
          </div>
          <ul className="rw-who-grid">
            {PL_WHO.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="weld-eligibility">
            <div>
              <h3>No Previous Experience?</h3>
              <p>
                The Basic Course starts with tools, materials, safety and
                fundamental plumbing tasks.
              </p>
              <p>
                Candidates planning an overseas career should consider the
                Foundation, Hi-Tech or Professional Overseas Plumbing Programme
                for broader practical coverage.
              </p>
            </div>
            <a className="btn btn-primary" href="#enquire">
              Check Your Eligibility
            </a>
          </div>
        </div>
      </section>

      <section className="content-stage alt" id="careers">
        <div className="shell">
          <div className="weld-careers">
            <header className="weld-careers-head">
              <span className="section-label">Career Opportunities</span>
              <h2>Plumbing Career Pathways</h2>
              <p>
                Employment, salary and progression depend on practical ability,
                experience, destination-country requirements and employer
                selection.
              </p>
            </header>
            <div className="weld-careers-body">
              <div className="weld-careers-block">
                <h3>Used in</h3>
                <p className="weld-careers-flow">
                  {PL_CAREER_INDUSTRIES.join(' · ')}
                </p>
              </div>
              <div className="weld-careers-block">
                <h3>Possible roles</h3>
                <ul className="weld-careers-roles">
                  {PL_CAREER_ROLES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="why">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Why Choose Eurotech?</span>
            <h2>Why Choose Eurotech for Professional Plumbing Training?</h2>
          </div>
          <ol className="weld-reason-list">
            {PL_WHY.map((item, index) => (
              <li key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <SectionCta label="Get Professional Course Guidance" />
        </div>
      </section>

      <section className="content-stage alt" id="north-india">
        <div className="shell">
          <div className="weld-overseas rw-region">
            <div className="weld-overseas-rail rw-region-rail">
              <span className="section-label">North India Service Area</span>
              <h2>Professional Plumbing Training in Mohali</h2>
              <p>
                Eurotech’s plumbing training centre is located in Mohali,
                Punjab, close to Chandigarh.
              </p>
              <p>
                Candidates travelling to Mohali should confirm their course,
                batch date and schedule before booking travel.
              </p>
              <p>
                <strong>Address:</strong> {PL_ADDRESS}
                <br />
                <strong>Phone:</strong>{' '}
                <a href={PL_PHONE_HREF}>{PL_PHONE}</a>
              </p>
              <div className="weld-cta-row">
                <a
                  className="btn btn-primary"
                  href={PL_MAPS_HREF}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
                <a className="btn btn-outline" href="#enquire">
                  Plan Your Training Visit
                </a>
              </div>
            </div>
            <div className="rw-region-card">
              <p className="weld-block-label">
                The programmes welcome candidates from
              </p>
              <ul className="rw-region-places">
                {PL_STATES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="join">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">How to Join</span>
            <h2>Start Your Professional Plumbing Training</h2>
          </div>
          <ol className="weld-timeline">
            {PL_JOIN_STEPS.map((step, index) => (
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

      <section className="content-stage alt" id="faqs">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Frequently Asked Questions</span>
            <h2>Plumbing Training FAQs</h2>
          </div>
          <div className="faq-list">
            {PL_FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>
                  {item.q === 'How can I enrol?' ? (
                    <>
                      Call <a href={PL_PHONE_HREF}>{PL_PHONE}</a> or complete
                      the enquiry form.
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
        defaultService="Not Sure—Need Guidance"
        heading="Get Course Fees and Batch Details"
        description="Fill in your details. Our training team will help you select the right plumbing course."
        title="Plumbing Course Enquiry"
        subtitle="Share your details and we will guide you on fees, batch timing and the right programme."
        serviceLabel="Course *"
        serviceOptions={PL_COURSE_OPTIONS}
        submitLabel="Get Fees & Batch Details"
        privacyNote="Your information will only be used to contact you about Eurotech plumbing training programmes."
        steps={[
          'Share your details and preferred course',
          'A training advisor contacts you',
          'Confirm fees, duration, batch and next steps',
        ]}
      />

      <section className="content-stage" id="final-cta">
        <div className="shell">
          <div className="rw-final">
            <div className="rw-final-copy">
              <span className="section-label">Start Today</span>
              <h2>Invest in Professional Plumbing Skills for India and Abroad</h2>
              <p>Develop practical skills in:</p>
              <ul className="check-list weld-two-col">
                {PL_FINAL_SKILLS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>
                Receive clear training documentation and a verifiable Eurotech
                certificate after successfully completing the applicable course
                and assessment.
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href={PL_PHONE_HREF}>{PL_PHONE}</a>
                <br />
                <strong>Address:</strong> {PL_ADDRESS}
              </p>
              <div className="weld-cta-row">
                <a className="btn btn-primary" href="#enquire">
                  Get Professional Course Details
                </a>
                <a className="btn btn-outline" href={PL_PHONE_HREF}>
                  Call {PL_PHONE}
                </a>
                <a
                  className="btn btn-dark"
                  href={PL_WHATSAPP_HREF}
                  target="_blank"
                  rel="noreferrer"
                >
                  Book Career Counselling
                </a>
              </div>
            </div>
            <div className="rw-region-card">
              <p className="weld-block-label">Train in Mohali</p>
              <ul className="rw-region-places">
                {PL_STATES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CrossLinks currentPath="/plumbing-training" />
    </div>
  )
}
