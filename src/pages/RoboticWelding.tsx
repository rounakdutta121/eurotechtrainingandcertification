import { CrossLinks } from '../components/CrossLinks'
import { ProofBar } from '../components/ProofBar'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'
import { CONTACT } from '../data/services'

export function RoboticWelding() {
  return (
    <>
      <Seo
        title="Robotic Welding Training Course | Eurotech Certification Mohali"
        description="Learn robotic welding on live industrial robots at Eurotech Mohali. 200+ hours practical training, industry certificate, job-oriented skills."
      />

      <section className="hero-split service-hero robotic" aria-label="Robotic welding course">
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">Work on real welding robots — not just theory</p>
            <h1>
              Learn <em>robotic welding</em>. Get ready for industry jobs.
            </h1>
            <p className="hero-copy">
              Operate and program industrial welding robots used in automobile,
              manufacturing, and engineering — at Eurotech Mohali.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Start free counselling
              </a>
              <a className="btn btn-outline" href="#what-you-learn">
                See what you learn
              </a>
            </div>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/program-robotic.png')" }}
              role="img"
              aria-label="Robotic welding training"
            />
          </div>
        </div>
      </section>

      <ProofBar
        label="Course highlights"
        items={[
          { icon: 'clock', title: '200+ Hours', subtitle: 'Practical Training' },
          { icon: 'robot', title: 'Live Robot', subtitle: 'Lab Training' },
          { icon: 'badge', title: 'Eurotech', subtitle: 'Certification' },
          { icon: 'briefcase', title: 'Job Focus', subtitle: 'Industry Skills' },
        ]}
      />

      <section className="why-stage">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">About</span>
            <h2>Why learn robotic welding?</h2>
            <p>
              Today, many industries are replacing manual welding work with
              robotic welding systems. Workers who know robotic welding have
              better job opportunities, higher salaries, and more chances to work
              in modern industries. At Eurotech, you learn directly on real
              welding robots used in industries.
            </p>
            <ol className="why-steps">
              <li>
                <strong>01</strong>
                <span>Operate robot arms and learn robot movements</span>
              </li>
              <li>
                <strong>02</strong>
                <span>Create welding programs and practice real welding jobs</span>
              </li>
              <li>
                <strong>03</strong>
                <span>Safety first — emergency stop, safety area, daily checks</span>
              </li>
              <li>
                <strong>04</strong>
                <span>Master voltage, current, gas flow, wire feed and travel speed</span>
              </li>
            </ol>
          </div>
          <aside className="why-panel">
            <div className="cred-rail">
              <div className="cred-block">
                <span className="cred-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="8" width="12" height="10" rx="2" />
                    <path d="M12 4v4M9 13h.01M15 13h.01M8 18v2M16 18v2" />
                  </svg>
                </span>
                <strong>Live robots</strong>
                <span>Practice on actual industrial welding robots</span>
              </div>
              <div className="cred-block">
                <span className="cred-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                  </svg>
                </span>
                <strong>Safety first</strong>
                <span>Emergency stop, safety area, safe working methods</span>
              </div>
              <div className="cred-block">
                <span className="cred-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
                  </svg>
                </span>
                <strong>Settings</strong>
                <span>Voltage, current, gas flow, wire feed, travel speed</span>
              </div>
            </div>
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/robotic-mohali-fill.png')" }}
              role="img"
              aria-label="Hands-on robotic welding practice in Mohali lab"
            />
            <div className="visit-panel">
              <span className="visit-tag">Mohali Lab</span>
              <h3>Practical training in Mohali robot lab</h3>
              <p>{CONTACT.address}</p>
              <p>
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </p>
              <a className="btn btn-primary why-panel-cta" href="#enquire">
                Book your training slot <span aria-hidden="true">→</span>
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage" id="what-you-learn">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">What will you learn?</span>
            <h2>Practical training in Mohali robot lab</h2>
            <p>
              At our Mohali training center, every student gets hands-on practice
              on industrial robots. This practical exposure helps you become
              job-ready.
            </p>
          </div>

          <div className="process-rail">
            <article className="process-step">
              <span className="path-index">01</span>
              <h3>Robotic MIG/MAG Welding</h3>
              <p>Learn how robotic welding is done in industries.</p>
              <ul>
                <li>Wire Selection</li>
                <li>Gas Selection</li>
                <li>Torch Position</li>
                <li>Welding Path Setup</li>
                <li>Strong and Clean Welding Techniques</li>
              </ul>
            </article>
            <article className="process-step">
              <span className="path-index">02</span>
              <h3>Robot Operation &amp; Programming</h3>
              <p>Learn how to control and program welding robots.</p>
              <ul>
                <li>Robot Movement</li>
                <li>Teach Pendant Operation</li>
                <li>Simple Programming</li>
                <li>Path Creation</li>
                <li>Job Setup</li>
              </ul>
            </article>
            <article className="process-step">
              <span className="path-index">03</span>
              <h3>Safety &amp; Daily Maintenance</h3>
              <p>Learn how to keep machines running safely.</p>
              <ul>
                <li>Daily Inspection</li>
                <li>Safety Checks</li>
                <li>Basic Troubleshooting</li>
                <li>Fault Identification</li>
              </ul>
            </article>
            <article className="process-step">
              <span className="path-index">04</span>
              <h3>Welding Quality Inspection</h3>
              <p>Learn how to identify welding defects and improve weld quality.</p>
              <ul>
                <li>Porosity (Gas Holes)</li>
                <li>Weak Welds</li>
                <li>Excess Heat Problems</li>
                <li>Poor Weld Shape</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="settings-stage">
        <div className="shell">
          <div className="settings-head">
            <span className="section-label">Weld settings</span>
            <h2>Learn complete welding settings</h2>
            <p>
              We teach you how to adjust voltage, current, gas flow, wire feed
              speed and robot travel speed through practical work.
            </p>
          </div>

          <div className="settings-matrix" aria-label="Welding parameters">
            <article>
              <span>01</span>
              <h3>Voltage</h3>
              <p>Controls arc length and weld bead quality for strong, clean joints.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Current</h3>
              <p>Controls heat and penetration for proper weld fusion.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Gas Flow</h3>
              <p>Protects the weld from air and helps prevent porosity defects.</p>
            </article>
            <article>
              <span>04</span>
              <h3>Wire Feed Speed</h3>
              <p>Works with voltage and current to control weld deposition rate.</p>
            </article>
            <article>
              <span>05</span>
              <h3>Robot Travel Speed</h3>
              <p>Control how fast the torch moves along the weld path.</p>
            </article>
            <article>
              <span>06</span>
              <h3>Torch &amp; TCP Setup</h3>
              <p>Learn how robots position the welding torch accurately.</p>
            </article>
          </div>

          <div className="settings-ribbon">
            <p className="settings-ribbon-label">Defects &amp; quality checks you practice</p>
            <ul>
              <li>
                <strong>Porosity (Gas Holes)</strong>
                <span>Gas holes in the weld that weaken joint strength.</span>
              </li>
              <li>
                <strong>Weak Welds</strong>
                <span>Weld does not join properly due to incorrect settings.</span>
              </li>
              <li>
                <strong>Excess Heat Problems</strong>
                <span>Too much heat causes burn-through and distortion.</span>
              </li>
              <li>
                <strong>Poor Weld Shape</strong>
                <span>Bad bead shape from incorrect travel speed or settings.</span>
              </li>
              <li>
                <strong>Weld Quality Checking</strong>
                <span>Inspect welds and identify defects to improve quality.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="why-stage">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Who can join</span>
            <h2>Built for welders, students & industry pros</h2>
            <p>
              This course is suitable for welders, students, engineers and
              industry professionals who want to build a career in robotic
              welding.
            </p>
            <ol className="why-steps">
              <li>
                <strong>01</strong>
                <span>ITI Welders — upgrade into robotic welding jobs</span>
              </li>
              <li>
                <strong>02</strong>
                <span>
                  Diploma & Engineering Students — Mechanical, Electrical,
                  Production, Automobile, Electronics
                </span>
              </li>
              <li>
                <strong>03</strong>
                <span>Experienced Welders — move into higher-paying robotic roles</span>
              </li>
              <li>
                <strong>04</strong>
                <span>Industry Workers & Supervisors — modern robotic systems</span>
              </li>
            </ol>
          </div>
          <aside className="why-panel">
            <div className="cred-rail cred-rail-six">
              <div className="cred-block">
                <strong>Certificate</strong>
                <span>Eurotech Robotic Welding Operator & Programmer</span>
              </div>
              <div className="cred-block">
                <strong>Duration</strong>
                <span>200+ hours of guided practical robot lab training</span>
              </div>
              <div className="cred-block">
                <strong>Careers</strong>
                <span>Automobile, manufacturing, fabrication, automation</span>
              </div>
              <div className="cred-block">
                <strong>Eligibility</strong>
                <span>ITI welders, diploma &amp; engineering students, industry pros</span>
              </div>
              <div className="cred-block">
                <strong>Lab training</strong>
                <span>Practice on live industrial welding robots in Mohali</span>
              </div>
              <div className="cred-block">
                <strong>2026 Batch</strong>
                <span>Admissions open — limited practical seats</span>
              </div>
            </div>
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/robotic-lab-fill.png')" }}
              role="img"
              aria-label="Students training on robotic welding equipment"
            />
          </aside>
        </div>
      </section>

      <section className="content-stage">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">After the course</span>
            <h2>Job opportunities after training</h2>
            <p>
              Build a career in robotic welding with skills that modern
              industries need.
            </p>
          </div>
          <div className="role-grid">
            <article className="role-card">
              <span className="badge">Production Floor</span>
              <h3>Robotic Welding Operator</h3>
              <p>Operate welding robots and monitor production work.</p>
            </article>
            <article className="role-card">
              <span className="badge">Technical Support</span>
              <h3>Robotic Welding Technician</h3>
              <p>Set up welding robots and solve technical issues.</p>
            </article>
            <article className="role-card">
              <span className="badge">Programming Role</span>
              <h3>Robot Programmer</h3>
              <p>Create and modify welding programs for industrial robots.</p>
            </article>
            <article className="role-card">
              <span className="badge">Quality Control</span>
              <h3>Welding Quality Inspector</h3>
              <p>
                Check weld quality and ensure production standards are
                maintained.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ServiceEnquire
        defaultService="Robotic Welding"
        title="Admissions open for 2026 batch"
        subtitle="Become a Certified Robotic Welding Operator & Programmer."
      />
      <CrossLinks currentPath="/robotic-welding-course" />
    </>
  )
}
