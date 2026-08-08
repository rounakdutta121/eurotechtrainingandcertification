import { CrossLinks } from '../components/CrossLinks'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'

const industries = [
  {
    title: 'Electrical & Electronics',
    detail: 'Consumer electronics, industrial controls, lighting equipment',
  },
  {
    title: 'Medical Devices',
    detail: 'Diagnostic tools, surgical instruments, implantables',
  },
  {
    title: 'Pressure Equipment',
    detail: 'Boilers, vessels, pressure accessories',
  },
  {
    title: 'Construction Products',
    detail: 'Building materials, doors, insulation',
  },
  {
    title: 'Machinery',
    detail: 'Industrial machines, automation systems, farming equipment',
  },
  {
    title: 'Personal Protective Equipment',
    detail: 'Protective gloves, helmets, respiratory devices',
  },
  {
    title: 'Toys & Leisure',
    detail: "Children's toys, sporting goods",
  },
  {
    title: 'Measuring Instruments',
    detail: 'Water/gas meters, weighing devices',
  },
  {
    title: 'Environmental & Energy',
    detail: 'Solar panels, monitoring instruments',
  },
]

export function CeMark() {
  return (
    <>
      <Seo
        title="CE Mark Certification | Eurotech"
        description="Get your products CE marked for European market compliance. NANDO approved notified body support across electrical, medical, machinery and more."
      />

      <div className="marquee" aria-hidden="true">
        <span>
          Beware: 90% of CE certificates issued in India are fake · Beware: 90%
          of CE certificates issued in India are fake · Beware: 90% of CE
          certificates issued in India are fake · Beware: 90% of CE certificates
          issued in India are fake ·{' '}
        </span>
      </div>

      <section className="hero-center service-hero ce" aria-label="CE Mark certification">
        <div className="hero-visual-media" aria-hidden="true" />
        <div className="hero-panel">
          <p className="kicker">
            European market compliance · NANDO approved notified body
          </p>
          <h1>Get your products CE marked</h1>
          <p className="hero-copy">
            Unlock the European market. Ensure your products meet stringent
            European safety, health, and environmental standards for seamless
            entry into over 30 countries across the EU and EEA.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#enquire">
              Get a Free Quote
            </a>
            <a className="btn btn-secondary" href="#why-ce">
              Why CE Matters
            </a>
          </div>
          <div className="hero-facts" aria-label="Key benefits">
            <div>
              <strong>30+</strong>
              <span>European Countries</span>
            </div>
            <div>
              <strong>Safety</strong>
              <span>Compliance</span>
            </div>
            <div>
              <strong>Trust</strong>
              <span>Consumer Confidence</span>
            </div>
            <div>
              <strong>Legal</strong>
              <span>Protection</span>
            </div>
          </div>
        </div>
      </section>

      <section className="why-stage" id="why-ce">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Why it matters</span>
            <h2>Why CE mark certification matters</h2>
            <p>
              CE marking is not just a regulatory requirement — it is your
              gateway to the European market and a symbol of quality and safety
              that consumers trust.
            </p>
            <ol className="why-steps">
              <li>
                <strong>01</strong>
                <span>
                  Mandatory for many products in the EEA (EU, Norway, Iceland,
                  Liechtenstein)
                </span>
              </li>
              <li>
                <strong>02</strong>
                <span>
                  Shows compliance with essential EU safety, health and
                  environmental requirements
                </span>
              </li>
              <li>
                <strong>03</strong>
                <span>Enables free movement across 30+ European countries</span>
              </li>
              <li>
                <strong>04</strong>
                <span>
                  Manufacturers self-declare conformity with high accountability
                </span>
              </li>
              <li>
                <strong>05</strong>
                <span>Builds consumer trust and eases customs clearance</span>
              </li>
            </ol>
          </div>
          <aside className="why-stage-side">
            <div className="cred-rail">
              <div className="cred-block">
                <strong>Streamlined trade</strong>
                <span>Smoother customs and fewer regulatory barriers</span>
              </div>
              <div className="cred-block">
                <strong>Important note</strong>
                <span>
                  Food and cosmetics may be exempt — we guide category-specific
                  needs
                </span>
              </div>
              <div className="cred-block">
                <strong>End-to-end</strong>
                <span>From assessment to declaration and marking guidance</span>
              </div>
            </div>
            <div className="visit-panel">
              <span className="visit-tag">Consultation</span>
              <h3>Ready to start your CE journey?</h3>
              <p>
                Our experts guide every step for compliance and European market
                access.
              </p>
              <a className="btn btn-primary" href="#enquire">
                Get Free Consultation
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Industries</span>
            <h2>Industries we serve</h2>
            <p>
              We specialize in CE Mark Certification across a broad range of
              industries.
            </p>
          </div>
          <div className="dir-list">
            {industries.map((item, index) => (
              <a href="#enquire" className="dir-row" key={item.title}>
                <span className="dir-num">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className="go">Learn more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="content-stage ink">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Benefits</span>
            <h2>Key benefits of CE mark certification</h2>
            <p>
              CE marking opens doors to the European market while ensuring your
              products meet the highest standards of safety and quality.
            </p>
          </div>
          <div className="benefit-slabs">
            <article className="benefit-slab">
              <span className="slab-num">01 / ACCESS</span>
              <h3>Market Access</h3>
              <p>
                Sell confidently within the EU, EEA, and additional countries
                recognizing CE marking.
              </p>
            </article>
            <article className="benefit-slab">
              <span className="slab-num">02 / SAFETY</span>
              <h3>Safety Assurance</h3>
              <p>
                Conformity demonstrates compliance with rigorous European safety
                directives.
              </p>
            </article>
            <article className="benefit-slab">
              <span className="slab-num">03 / TRUST</span>
              <h3>Consumer Confidence</h3>
              <p>
                Boost product credibility and trustworthiness in the European
                marketplace.
              </p>
            </article>
            <article className="benefit-slab">
              <span className="slab-num">04 / TRADE</span>
              <h3>Simplified Trade</h3>
              <p>
                Clear customs inspections and reduced regulatory barriers for
                smoother operations.
              </p>
            </article>
            <article className="benefit-slab">
              <span className="slab-num">05 / LEGAL</span>
              <h3>Legal Compliance</h3>
              <p>
                Avoid penalties and costly recalls through proper certification
                and documentation.
              </p>
            </article>
            <article className="benefit-slab">
              <span className="slab-num">06 / EDGE</span>
              <h3>Competitive Edge</h3>
              <p>
                Stand out in the market with certified quality and compliance
                standards.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content-stage alt">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Our services</span>
            <h2>Our CE certification services</h2>
            <p>
              Comprehensive support from initial assessment to final
              certification.
            </p>
          </div>
          <div className="process-rail">
            <article className="process-step">
              <span className="path-index">01</span>
              <h3>Directive & Regulatory Assessment</h3>
              <p>
                Identify applicable EU directives for your product category and
                market requirements.
              </p>
            </article>
            <article className="process-step">
              <span className="path-index">02</span>
              <h3>Technical Documentation Support</h3>
              <p>
                Help compile and maintain comprehensive technical files and
                compliance documentation.
              </p>
            </article>
            <article className="process-step">
              <span className="path-index">03</span>
              <h3>Product Testing & Evaluation</h3>
              <p>
                Coordinate necessary testing to verify compliance with European
                safety standards.
              </p>
            </article>
            <article className="process-step">
              <span className="path-index">04</span>
              <h3>Declaration of Conformity Assistance</h3>
              <p>
                Prepare legally compliant declarations that meet all regulatory
                requirements.
              </p>
            </article>
            <article className="process-step">
              <span className="path-index">05</span>
              <h3>CE Mark Affixation Guidance</h3>
              <p>
                Ensure proper marking on products and packaging according to EU
                regulations.
              </p>
            </article>
            <article className="process-step">
              <span className="path-index">06</span>
              <h3>End-to-End Advisory</h3>
              <p>
                Full support through the certification journey, tailored to your
                industry and products.
              </p>
            </article>
          </div>
        </div>
      </section>

      <ServiceEnquire
        defaultService="CE Mark Certification"
        title="Get a free quote"
        subtitle="Tell us your product category — we map requirements and next steps."
      />
      <CrossLinks currentPath="/ce-mark" />
    </>
  )
}
