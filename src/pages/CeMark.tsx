import { useState } from 'react'
import { ProofBar } from '../components/ProofBar'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'
import { CE_INDUSTRIES, type CeIndustry } from '../data/ceIndustries'

export function CeMark() {
  const [selectedIndustry, setSelectedIndustry] = useState<CeIndustry | null>(
    null,
  )

  return (
    <>
      <Seo
        title="CE Mark Certification | Eurotech"
        description="Get your products CE marked for European market compliance. NANDO approved notified body support across electrical, medical, machinery and more."
      />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>
            Beware: 90% of CE certificates issued in India are fake · Beware: 90%
            of CE certificates issued in India are fake · Beware: 90% of CE
            certificates issued in India are fake · Beware: 90% of CE certificates
            issued in India are fake ·{' '}
          </span>
          <span>
            Beware: 90% of CE certificates issued in India are fake · Beware: 90%
            of CE certificates issued in India are fake · Beware: 90% of CE
            certificates issued in India are fake · Beware: 90% of CE certificates
            issued in India are fake ·{' '}
          </span>
        </div>
      </div>

      <section className="hero-split service-hero ce" aria-label="CE Mark certification">
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">
              European market compliance · NANDO approved notified body
            </p>
            <h1>
              Get your products <em>CE marked</em>
            </h1>
            <p className="hero-copy">
              Meet European safety, health, and environmental standards for
              seamless entry into over 30 countries across the EU and EEA.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Get a free quote
              </a>
              <a className="btn btn-outline" href="#why-ce">
                Why CE matters
              </a>
            </div>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/ce-hero-hope.png')" }}
              role="img"
              aria-label="Zoomed European Union flag in a modern European market with people"
            />
          </div>
        </div>
      </section>

      <ProofBar
        label="Key benefits"
        items={[
          { icon: 'globe', title: '30+', subtitle: 'European Countries' },
          { icon: 'safety', title: 'Safety', subtitle: 'Compliance' },
          { icon: 'people', title: 'Trust', subtitle: 'Consumer Confidence' },
          { icon: 'legal', title: 'Legal', subtitle: 'Protection' },
        ]}
      />

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
          <aside className="why-panel">
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
            <div
              className="why-panel-photo"
              style={{ backgroundImage: "url('/images/ce-international-fill.png')" }}
              role="img"
              aria-label="Professionals ready for international European career opportunities"
            />
            <div className="visit-panel">
              <span className="visit-tag">Consultation</span>
              <h3>Ready to start your CE journey?</h3>
              <p>
                Our experts guide every step for compliance and European market
                access.
              </p>
              <a className="btn btn-primary why-panel-cta" href="#enquire">
                Get Free Consultation
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage" id="industries">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Industries</span>
            <h2>Industries we serve</h2>
            <p>
              We specialize in CE Mark Certification across a broad range of
              industries. Select an industry to see products, directives, and
              services.
            </p>
          </div>

          {selectedIndustry ? (
            <div className="industry-detail">
              <button
                type="button"
                className="industry-back"
                onClick={() => setSelectedIndustry(null)}
              >
                ← Back to industries
              </button>
              <div className="industry-detail-head">
                <h3>{selectedIndustry.title}</h3>
                <p>{selectedIndustry.detail}</p>
              </div>
              <div className="industry-detail-grid">
                <div className="industry-panel">
                  <h4>Key products</h4>
                  <ul>
                    {selectedIndustry.keyProducts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="industry-panel">
                  <h4>Applicable directives</h4>
                  <ul>
                    {selectedIndustry.directives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="industry-panel">
                <h4>Services provided</h4>
                <ul>
                  {selectedIndustry.services.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="industry-detail-cta">
                <p>
                  Contact us for tailored CE certification services for your{' '}
                  {selectedIndustry.title.toLowerCase()} products.
                </p>
                <a className="btn btn-primary" href="#enquire">
                  Get a free quote
                </a>
              </div>
            </div>
          ) : (
            <div className="dir-list">
              {CE_INDUSTRIES.map((item, index) => (
                <button
                  type="button"
                  className="dir-row"
                  key={item.id}
                  onClick={() => setSelectedIndustry(item)}
                >
                  <span className="dir-num">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <span className="go">Learn more →</span>
                </button>
              ))}
            </div>
          )}
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
    </>
  )
}
