import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'
import { CONTACT } from '../data/services'
import {
  AWS_OPTIONS,
  AWS_WHO,
  AWS_WHY,
  CAREER_INDUSTRIES,
  CAREER_ROLES,
  CERTIFICATE_POINTS,
  GALLERY_ITEMS,
  JOIN_STEPS,
  PRACTICAL_ADVANCED,
  PRACTICAL_ITEMS,
  PRACTICE_MATERIALS,
  ROBOTIC_CAREERS,
  ROBOTIC_INCLUDE_GROUPS,
  ROBOTIC_WHO,
  TRADE_TEST_HELP,
  WELDING_COURSE_OPTIONS,
  WELDING_COURSES,
  WELDING_EMAIL,
  WELDING_EMAIL_HREF,
  WELDING_FACTS,
  WELDING_FAQS,
  WELDING_HERO_AUDIENCE,
  WELDING_INTRO_SKILLS,
  WELDING_TRUST_LINE,
  WHO_CAN_JOIN,
  WHY_EUROTECH_WELD,
  WPS_PATHWAYS,
  WPS_TOPICS,
} from '../data/weldingTrainingContent'

function SectionCta({
  href = '#enquire',
  label,
  secondaryHref,
  secondaryLabel,
  dark,
}: {
  href?: string
  label: string
  secondaryHref?: string
  secondaryLabel?: string
  dark?: boolean
}) {
  return (
    <div className="weld-cta-row">
      <a className={`btn ${dark ? 'btn-dark' : 'btn-primary'}`} href={href}>
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

export function WeldingTraining() {
  return (
    <div className="weld-page">
      <Seo
        title="Welding Seekho. Apna Career Strong Banao. | Eurotech Mohali"
        description="Practical welding training in Punjab — ARC, TIG, MIG/MAG, FCAW, structural and robotic welding with hands-on practice at Eurotech Mohali."
      />

      <section className="hero-split service-hero welding" aria-label="Welding training">
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">Practical Welding Training in Punjab</p>
            <h1>
              Welding Seekho. <em>Apna Career Strong Banao.</em>
            </h1>
            <p className="hero-copy">
              Learn ARC, TIG, MIG/MAG, Argon, FCAW and Robotic Welding through
              hands-on practice on welding machines and industrial equipment.
            </p>
            <p className="hero-copy">
              <strong>Training for:</strong>
            </p>
            <ul className="check-list weld-hero-list">
              {WELDING_HERO_AUDIENCE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="hero-copy">
              Practice on carbon steel, mild steel, stainless steel and
              aluminium.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Get Fees &amp; Next Batch Details
              </a>
              <a
                className="btn btn-outline"
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp for Course Details
              </a>
            </div>
            <p className="weld-trust-line">{WELDING_TRUST_LINE}</p>
            <p className="weld-hero-email">
              Official training email:{' '}
              <a href={WELDING_EMAIL_HREF}>{WELDING_EMAIL}</a>
            </p>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/program-welding.png')" }}
              role="img"
              aria-label="Practical welding training at Eurotech"
            />
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="facts">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Quick Training Facts</span>
            <h2>Welding Training at a Glance</h2>
          </div>
          <div className="weld-fact-grid">
            {WELDING_FACTS.map((fact) => (
              <article className="weld-fact-card" key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.text}</p>
              </article>
            ))}
          </div>
          <p className="weld-note">
            *The final duration depends on the selected process, existing skill
            level, required practical hours and assessment pathway.
          </p>
          <SectionCta
            label="Speak with a Training Advisor"
            href={CONTACT.phoneHref}
          />
        </div>
      </section>

      <section className="why-stage" id="introduction">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Introduction</span>
            <h2>Learn Welding Through Real Practice</h2>
            <p>
              Welding is a practical skill used in fabrication workshops,
              construction projects, manufacturing plants, automobile factories,
              structural-steel projects and engineering companies.
            </p>
            <p>
              At Eurotech, students learn by working with welding machines,
              materials and industrial equipment under trainer supervision.
              Training focuses on the practical skills expected in workshops and
              welding trade tests.
            </p>
            <p>
              <strong>Candidates learn how to:</strong>
            </p>
            <ul className="check-list">
              {WELDING_INTRO_SKILLS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Whether you are starting from zero, improving your existing
              welding skills or moving towards welding inspection and robotic
              automation, Eurotech offers a suitable training pathway.
            </p>
            <SectionCta label="Find the Right Welding Course" />
          </div>
          <aside className="why-panel">
            <div
              className="why-panel-photo"
              style={{
                backgroundImage: "url('/images/welding-about-fill.png')",
              }}
              role="img"
              aria-label="Hands-on welding workshop practice"
            />
            <div className="visit-panel">
              <span className="visit-tag">Train in Punjab</span>
              <h3>Eurotech Training Centre</h3>
              <p>{CONTACT.address}</p>
              <a className="btn btn-primary why-panel-cta" href="#enquire">
                Get Fees &amp; Next Batch Details
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage alt" id="courses">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Courses</span>
            <h2>Welding Courses Available at Eurotech</h2>
            <p>
              Choose one welding process, a combined programme or an advanced
              professional pathway.
            </p>
          </div>
          <div className="weld-course-list">
            {WELDING_COURSES.map((course, index) => (
              <details className="weld-course" key={course.id}>
                <summary>
                  <span className="weld-course-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="weld-course-summary">
                    <h3>{course.title}</h3>
                    <p>{course.summary}</p>
                    {course.duration ? (
                      <span className="weld-duration">
                        Typical duration: {course.duration}
                      </span>
                    ) : null}
                  </div>
                  <span className="weld-course-toggle" aria-hidden="true" />
                </summary>
                <div className="weld-course-body">
                  <p className="weld-course-covers-label">Training covers</p>
                  <ul className="check-list weld-two-col">
                    {course.covers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a className="btn btn-primary" href="#enquire">
                    {course.cta}
                  </a>
                </div>
              </details>
            ))}
          </div>
          <p className="weld-note">
            *All durations are indicative and must be confirmed for the selected
            batch.
          </p>
        </div>
      </section>

      <section className="content-stage ink" id="robotic">
        <div className="shell">
          <div className="weld-robotic">
            <div className="weld-robotic-rail">
              <span className="section-label">Robotic Welding</span>
              <h2>Robotic Welding Operator and Programmer Training</h2>
              <p className="weld-robotic-lead">
                Learn Welding and Industrial Robot Operation Together
              </p>
              <p>
                Modern automobile, manufacturing and engineering companies
                increasingly use robotic welding systems. These companies need
                people who understand both welding and robot operation.
              </p>
              <p>
                Eurotech provides hands-on Robotic Welding Operator and
                Programmer training at its Mohali training centre.
              </p>
              <SectionCta
                label="View Full Robotic Welding Course"
                href="/robotic-welding-course"
                secondaryHref="#enquire"
                secondaryLabel="Get Robotic Welding Fees"
              />
              <p className="weld-robotic-note">
                Successful candidates receive the certificate specified for
                their selected Eurotech programme. An optional welding-operator
                approval pathway aligned with EN ISO 14732 may be available,
                subject to the selected training and assessment.
              </p>
            </div>

            <div className="weld-robotic-main">
              <p className="weld-robotic-main-label">The programme includes</p>
              <div className="weld-robotic-groups">
                {ROBOTIC_INCLUDE_GROUPS.map((group) => (
                  <div className="weld-robotic-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul className="check-list">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="weld-robotic-paths">
                <div>
                  <h3>Who Should Join?</h3>
                  <ul className="check-list">
                    {ROBOTIC_WHO.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Career Pathways</h3>
                  <ul className="check-list">
                    {ROBOTIC_CAREERS.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage" id="aws">
        <div className="shell">
          <div className="weld-aws">
            <div className="weld-aws-rail">
              <span className="section-label">AWS Welding Training</span>
              <h2>AWS Welding and Inspection Training</h2>
              <p className="weld-section-lead">
                Professional Training for Welders, Inspectors and Industry
                Personnel
              </p>
              <p>
                Eurotech is an Educational Institution Member of the American
                Welding Society and offers AWS-related training pathways for
                eligible candidates and professionals.
              </p>
              <SectionCta
                label="View Full AWS Training Options"
                secondaryHref={CONTACT.phoneHref}
                secondaryLabel="Speak with an AWS Training Advisor"
              />
            </div>
            <div className="weld-aws-main">
              <p className="weld-block-label">Available training options</p>
              <ol className="weld-index-list">
                {AWS_OPTIONS.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              <div className="weld-aws-meta">
                <div>
                  <p className="weld-block-label">Who should explore</p>
                  <ul className="check-list">
                    {AWS_WHO.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="weld-block-label">Why it matters</p>
                  <p className="weld-aws-why">
                    AWS codes and credentials are widely referenced in
                    fabrication, structural welding, inspection and quality
                    roles. Training can strengthen understanding of:
                  </p>
                  <ul className="check-list">
                    {AWS_WHY.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="weld-clarify">
            <h3>Important membership clarification</h3>
            <p>
              Eurotech’s Educational Institution Membership demonstrates its
              institutional association with the American Welding Society. It
              does not mean that every Eurotech course or certificate is issued,
              accredited or endorsed by AWS.
            </p>
            <p>
              Where an official AWS credential applies, the applicable AWS
              programme, eligibility requirements, examination and certification
              route will be clearly identified before enrolment.
            </p>
          </div>
        </div>
      </section>

      <section className="content-stage alt" id="wps">
        <div className="shell">
          <div className="weld-wps">
            <div className="weld-wps-intro">
              <span className="section-label">WPS, PQR and Code Awareness</span>
              <h2>Understand the Instructions Behind a Good Weld</h2>
              <p>
                Professional welding requires more than operating a machine.
                Welders must also understand the instructions provided for each
                welding job.
              </p>
              <p className="weld-note weld-note-start">
                The exact depth of coverage depends on whether you select
                practical welder training, robotic welding, welding inspection
                or an AWS-related professional programme.
              </p>
            </div>
            <div className="weld-wps-topics">
              <p className="weld-block-label">Eurotech introduces candidates to</p>
              <ol className="weld-index-list">
                {WPS_TOPICS.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
              <p className="weld-block-label">Code awareness pathways</p>
              <ul className="weld-code-list">
                {WPS_PATHWAYS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage" id="practical">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Practical Training</span>
            <h2>What Will You Practise?</h2>
            <p>
              Depending on the selected course, candidates may practise core
              workshop skills — with advanced pathways for robotic and
              inspection training.
            </p>
          </div>
          <div className="weld-practice-board">
            <div className="weld-practice-core">
              <p className="weld-block-label">Core workshop practice</p>
              <ul className="weld-practice-grid">
                {PRACTICAL_ITEMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="weld-practice-advanced">
              <p className="weld-block-label">Advanced candidates may also practise</p>
              <ul className="check-list">
                {PRACTICAL_ADVANCED.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <SectionCta label="Enquire About Practical Training" />
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="materials">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Practice Materials</span>
            <h2>Practise on Common Industrial Materials</h2>
          </div>
          <div className="weld-material-grid">
            {PRACTICE_MATERIALS.map((item, index) => (
              <article className="weld-material-card" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className="weld-note">
            Actual materials, thicknesses, joints and practice hours depend on
            the selected course.
          </p>
        </div>
      </section>

      <section className="content-stage" id="who">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Who Can Join?</span>
            <h2>Choose Training According to Your Career Goal</h2>
          </div>
          <div className="weld-audience-list">
            {WHO_CAN_JOIN.map((item, index) => (
              <article className="weld-audience" key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="weld-eligibility">
            <div>
              <h3>Limited Education? You Can Still Learn.</h3>
              <p>
                Advanced academic qualifications are not required for selected
                practical welding programmes. Training is explained through
                simple Hindi and English, practical demonstrations and
                supervised workshop practice.
              </p>
              <p>
                Eligibility requirements may be different for advanced AWS and
                professional inspection programmes.
              </p>
            </div>
            <a className="btn btn-primary" href="#enquire">
              Ask If You Are Eligible
            </a>
          </div>
        </div>
      </section>

      <section className="content-stage alt" id="careers">
        <div className="shell">
          <div className="weld-careers">
            <header className="weld-careers-head">
              <span className="section-label">Career Opportunities</span>
              <h2>Where Can Welding Skills Be Used?</h2>
              <p>
                Training improves skills and employment readiness. Job
                selection, salary, visa approval and overseas placement depend
                on the candidate’s performance, experience and employer
                requirements.
              </p>
            </header>

            <div className="weld-careers-body">
              <div className="weld-careers-block">
                <h3>Industries</h3>
                <p className="weld-careers-flow">
                  {CAREER_INDUSTRIES.join(' · ')}
                </p>
              </div>

              <div className="weld-careers-block">
                <h3>Possible roles</h3>
                <ul className="weld-careers-roles">
                  {CAREER_ROLES.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-stage ink" id="overseas">
        <div className="shell">
          <div className="weld-overseas">
            <div className="weld-overseas-rail">
              <span className="section-label">Overseas and Trade-Test</span>
              <h2>Preparing for a Welding Job in India or Abroad?</h2>
              <p>
                Many employers assess welders through practical trade tests
                before selection.
              </p>
              <p>
                For advanced professionals, Eurotech also offers AWS-related
                training, welding inspection and robotic welding pathways.
              </p>
              <SectionCta label="Ask About Trade-Test Preparation" />
              <p className="weld-ink-note weld-note-start">
                Important: Eurotech provides training and trade-test
                preparation. Employment, employer selection, salary, visa
                approval and overseas placement are not guaranteed.
              </p>
            </div>
            <div className="weld-overseas-main">
              <p className="weld-block-label">Eurotech can help you prepare through</p>
              <ol className="weld-index-list weld-index-list-ink">
                {TRADE_TEST_HELP.map((item, index) => (
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
            <h2>Why Choose Eurotech for Welding Training?</h2>
          </div>
          <ol className="weld-reason-list">
            {WHY_EUROTECH_WELD.map((item, index) => (
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

      <section className="content-stage ink" id="join">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">How to Join</span>
            <h2>Start Your Welding Training in Five Steps</h2>
          </div>
          <ol className="weld-timeline">
            {JOIN_STEPS.map((step, index) => (
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
              <span className="section-label">Workshop Gallery</span>
              <h2>See the Training Before You Join</h2>
              <p>
                A look at practical welding, robotic cells and workshop learning
                at Eurotech.
              </p>
            </div>
            <a className="btn btn-primary" href="#enquire">
              Visit the Eurotech Training Centre
            </a>
          </div>
          <div className="weld-gallery-mosaic">
            {GALLERY_ITEMS.map((item, index) => (
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

      <section className="content-stage alt" id="testimonials">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Testimonials</span>
            <h2>What Our Trainees Say</h2>
          </div>
          <div className="weld-quote-stack">
            <blockquote>
              <p>
                “[Add a genuine testimonial about practical welding training.]”
              </p>
              <footer>
                <strong>[Student Name]</strong>
                <span>[Course] | [City]</span>
              </footer>
            </blockquote>
            <blockquote>
              <p>
                “[Add a genuine testimonial about robotic welding practice.]”
              </p>
              <footer>
                <strong>[Student Name]</strong>
                <span>[Course] | [City]</span>
              </footer>
            </blockquote>
            <blockquote>
              <p>
                “[Add a genuine testimonial about AWS or welding-inspection
                training.]”
              </p>
              <footer>
                <strong>[Professional Name]</strong>
                <span>[Programme] | [Company or City]</span>
              </footer>
            </blockquote>
          </div>
          <p className="weld-note">
            Use only genuine and verifiable testimonials with permission.
          </p>
        </div>
      </section>

      <section className="content-stage ink" id="certificate">
        <div className="shell">
          <div className="weld-cert">
            <div className="weld-cert-rail">
              <span className="section-label">Certificate</span>
              <h2>Training and Certification Pathways</h2>
              <p>The certificate depends on the programme selected.</p>
              <p className="weld-ink-note weld-note-start">
                A standard Eurotech welding course certificate must not be
                presented as an official AWS credential. Official AWS
                credentials require the applicable AWS eligibility, examination
                and certification process.
              </p>
              <SectionCta label="Ask About the Certificate" />
            </div>
            <div>
              <p className="weld-block-label">Before enrolment, Eurotech will explain</p>
              <ol className="weld-index-list weld-index-list-ink">
                {CERTIFICATE_POINTS.map((item, index) => (
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

      <section className="content-stage alt" id="faqs">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Frequently Asked Questions</span>
            <h2>Welding Training FAQs</h2>
          </div>
          <div className="faq-list">
            {WELDING_FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>
                  {item.q === 'Where is the training conducted?' ? (
                    <>
                      {item.a} Full address: {CONTACT.address}.
                    </>
                  ) : item.q === 'How can I enrol?' ? (
                    <>
                      Call{' '}
                      <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>, WhatsApp{' '}
                      <a href={CONTACT.whatsappHref}>{CONTACT.phone}</a> or email{' '}
                      <a href={WELDING_EMAIL_HREF}>{WELDING_EMAIL}</a>.
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
        description="Fill in your details. Our training team will help you select the right welding course."
        title="Welding Course Enquiry"
        subtitle="Share your details and we will guide you on fees, batch timing and the right course."
        serviceLabel="Course *"
        serviceOptions={WELDING_COURSE_OPTIONS}
        submitLabel="Get Fees & Batch Details"
        privacyNote="Your information will only be used to contact you about Eurotech training programmes."
        steps={[
          'Share your details and preferred course',
          'A training advisor contacts you',
          'Confirm fees, duration, batch and next steps',
        ]}
      />
    </div>
  )
}
