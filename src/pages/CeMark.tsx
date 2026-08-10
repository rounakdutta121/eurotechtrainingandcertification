import { useEffect, useState } from 'react'
import { ProofBar } from '../components/ProofBar'
import { ServiceEnquire } from '../components/ServiceEnquire'
import { Seo } from '../components/Seo'
import { CONTACT } from '../data/services'
import {
  CE_CATEGORIES,
  CE_CLIENTS,
  CE_COST_FACTORS,
  CE_DELIVERABLES,
  CE_EXPORT_SUPPORT,
  CE_FAQS,
  CE_HERO_POINTS,
  CE_INTRO_HELPS,
  CE_NOTIFIED_BODIES,
  CE_PROCESS,
  CE_SERVICES,
  CE_WHY,
  type CeCategory,
} from '../data/ceMarkContent'

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
    <div className="ce-cta-row">
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

export function CeMark() {
  const [selectedCategory, setSelectedCategory] = useState<CeCategory | null>(
    null,
  )
  const [showAllCategories, setShowAllCategories] = useState(false)
  const [isMobileCategories, setIsMobileCategories] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)')
    const sync = () => {
      setIsMobileCategories(media.matches)
      if (!media.matches) setShowAllCategories(false)
    }
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  const visibleCategories =
    isMobileCategories && !showAllCategories
      ? CE_CATEGORIES.slice(0, 3)
      : CE_CATEGORIES

  return (
    <div className="ce-page">
      <Seo
        title="CE Certification and CE Marking Services in India | Eurotech"
        description="Prepare your product for the European market with clear CE marking support — regulatory assessment, NABL testing, technical documentation and Notified Body coordination."
      />

      <section
        className="hero-split service-hero ce"
        aria-label="CE Certification and CE Marking Services"
      >
        <div className="hero-split-inner">
          <div className="hero-split-copy">
            <p className="kicker">CE Marking · European Market Access</p>
            <h1>
              CE Certification and <em>CE Marking</em> Services in India
            </h1>
            <p className="hero-lead">
              Prepare Your Product for the European Market with a Clear
              Compliance Pathway
            </p>
            <p className="hero-copy">
              Eurotech supports Indian manufacturers and exporters through the
              complete CE marking process—from identifying applicable EU
              legislation and standards to product testing, technical
              documentation, conformity assessment and European Notified Body
              coordination.
            </p>
            <p className="hero-copy">
              Understand what your product requires before investing in testing
              or certification.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#enquire">
                Get a CE Marking Quote
              </a>
              <a className="btn btn-outline" href={CONTACT.phoneHref}>
                Speak to a CE Specialist
              </a>
            </div>
            <ul className="check-list ce-hero-points-list">
              {CE_HERO_POINTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="hero-split-visual">
            <div
              className="hero-split-frame"
              style={{ backgroundImage: "url('/images/ce-hero-hope.png')" }}
              role="img"
              aria-label="European market and CE marking context"
            />
          </div>
        </div>
      </section>

      <div className="ce-trust-band">
        <p className="ce-trust-label">
          Certification, Testing and Compliance Support Since 2008
        </p>
        <ProofBar
          label="Trust highlights"
          items={[
            {
              icon: 'people',
              title: '5,000+ Clients',
              subtitle: 'Across multiple industries',
            },
            {
              icon: 'shield',
              title: 'NABL Laboratory',
              subtitle: 'Scope of NABL TC-6601',
            },
            {
              icon: 'globe',
              title: 'Notified Body Network',
              subtitle: 'European coordination',
            },
            {
              icon: 'pin',
              title: '9 Offices · 5 Countries',
              subtitle: 'India and global markets',
            },
          ]}
        />
      </div>

      <section className="why-stage" id="introduction">
        <div className="why-stage-grid">
          <div className="why-stage-main">
            <span className="section-label">Introduction</span>
            <h2>Need CE Certification for Your Product?</h2>
            <p>
              CE marking requirements are different for every product. The
              correct process depends on your product category, intended use,
              design, risk level and applicable European legislation.
            </p>
            <p>
              Some products allow the manufacturer to complete the conformity
              assessment independently. Other products require testing or
              assessment by an authorised European Notified Body.
            </p>
            <p>
              <strong>Eurotech helps you determine:</strong>
            </p>
            <ul className="check-list">
              {CE_INTRO_HELPS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Our CE certification services are designed for manufacturers,
              exporters, importers and businesses preparing products for the
              European market.
            </p>
            <SectionCta label="Get a CE Marking Quote" />
          </div>
          <aside className="why-panel">
            <div
              className="why-panel-photo"
              style={{
                backgroundImage: "url('/images/ce-international-fill.png')",
              }}
              role="img"
              aria-label="International compliance and European market readiness"
            />
            <div className="visit-panel">
              <span className="visit-tag">Next step</span>
              <h3>Start with a product review</h3>
              <p>
                Confirm the correct regulatory pathway before testing or
                documentation investment.
              </p>
              <a className="btn btn-primary why-panel-cta" href="#enquire">
                Get a CE Marking Quote
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="content-stage" id="services">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Services</span>
            <h2>End-to-End CE Marking Certification Support</h2>
          </div>
          <div className="ce-card-grid">
            {CE_SERVICES.map((service, index) => (
              <article className="ce-card" key={service.title}>
                <span className="ce-card-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                {'items' in service && service.items ? (
                  <details className="ce-card-details">
                    <summary>View details</summary>
                    <ul>
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </article>
            ))}
          </div>
          <SectionCta
            label="Discuss My Product with a CE Specialist"
            href={CONTACT.phoneHref}
          />
        </div>
      </section>

      <section className="content-stage ink ce-export-stage" id="export">
        <div className="shell ce-export-split">
          <div className="ce-export-copy">
            <span className="section-label">Export Support</span>
            <h2>CE Certification for Export to Europe</h2>
            <p>
              Products manufactured in India may require CE marking when they
              are placed on the EU or EEA market. The manufacturing country does
              not remove the manufacturer’s responsibility to comply with
              applicable European product legislation.
            </p>
            <p>
              Avoid unnecessary testing or incomplete documentation by confirming
              the correct regulatory pathway at the beginning of your project.
            </p>
            <div className="ce-cta-row ce-cta-row-start">
              <a className="btn btn-primary" href="#enquire">
                Prepare My Product for European Export
              </a>
            </div>
          </div>
          <div className="ce-export-panel">
            <p className="ce-export-panel-label">
              Eurotech supports exporters with:
            </p>
            <ul className="ce-export-grid">
              {CE_EXPORT_SUPPORT.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="content-stage" id="categories">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Product Categories</span>
            <h2>CE Compliance Support Across Product Categories</h2>
          </div>

          {selectedCategory ? (
            <div className="industry-detail ce-category-detail">
              <button
                type="button"
                className="industry-back"
                onClick={() => setSelectedCategory(null)}
              >
                ← Back to categories
              </button>
              <div
                className="ce-category-detail-hero"
                style={{ backgroundImage: `url('${selectedCategory.image}')` }}
                role="img"
                aria-label={selectedCategory.title}
              />
              <div className="industry-detail-head">
                <h3>{selectedCategory.title}</h3>
                <p>{selectedCategory.detail}</p>
              </div>
              <div className="industry-detail-grid">
                <div className="industry-panel">
                  <h4>Key products</h4>
                  <ul>
                    {selectedCategory.products.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="industry-panel">
                  <h4>Applicable directives</h4>
                  <ul>
                    {selectedCategory.directives.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="industry-panel">
                <h4>How Eurotech supports you</h4>
                <ul>
                  {selectedCategory.services.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="industry-detail-cta">
                <p>
                  Share your product details and we will map the likely CE
                  pathway, testing needs and quotation for this category.
                </p>
                <a className="btn btn-primary" href="#enquire">
                  Check My Product Category
                </a>
              </div>
            </div>
          ) : (
            <>
              <div className="ce-category-grid">
                {visibleCategories.map((item) => (
                  <button
                    type="button"
                    className="ce-category-card"
                    key={item.id}
                    onClick={() => setSelectedCategory(item)}
                  >
                    <div
                      className="ce-category-card-media"
                      style={{ backgroundImage: `url('${item.image}')` }}
                      aria-hidden="true"
                    />
                    <div className="ce-category-card-body">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <span className="go">Learn more →</span>
                    </div>
                  </button>
                ))}
              </div>
              {isMobileCategories && CE_CATEGORIES.length > 3 ? (
                <div className="ce-category-more">
                  <button
                    type="button"
                    className="btn btn-dark"
                    onClick={() => setShowAllCategories((open) => !open)}
                  >
                    {showAllCategories ? 'Show less' : 'Show all'}
                  </button>
                </div>
              ) : null}
              <SectionCta label="Check My Product Category" />
            </>
          )}
        </div>
      </section>

      <section className="content-stage ink" id="process">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Process</span>
            <h2>How the CE Certification Process Works</h2>
          </div>
          <div className="ce-card-grid ce-process-grid">
            {CE_PROCESS.map((step, index) => (
              <article className="ce-card ce-card-ink" key={step.title}>
                <span className="ce-card-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <SectionCta label="Start My CE Marking Assessment" />
        </div>
      </section>

      <section className="content-stage" id="deliverables">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Deliverables</span>
            <h2>What You May Receive</h2>
            <p>
              The exact deliverables will depend on the product, regulatory
              route and agreed project scope.
            </p>
          </div>
          <p className="ce-deliverables-lead">Your project may include:</p>
          <ul className="ce-deliverables-grid">
            {CE_DELIVERABLES.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-stage alt" id="why-eurotech">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Why Eurotech?</span>
            <h2>Why Manufacturers Choose Eurotech</h2>
          </div>
          <div className="ce-card-grid">
            {CE_WHY.map((item, index) => (
              <article className="ce-card" key={item.title}>
                <span className="ce-card-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <SectionCta
            label="Speak to a CE Specialist"
            href={CONTACT.phoneHref}
          />
        </div>
      </section>

      <section className="content-stage ink ce-nb-stage" id="notified-bodies">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Notified Body Network</span>
            <h2>European Conformity-Assessment Support</h2>
            <p>
              Depending on the product and applicable regulatory scope, Eurotech
              works with relevant European conformity-assessment partners,
              including:
            </p>
          </div>
          <div className="ce-nb-grid">
            {CE_NOTIFIED_BODIES.map((item, index) => {
              const [name, detail] = item.split(' — ')
              return (
                <article className="ce-nb-card" key={item}>
                  <span className="ce-nb-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3>{name}</h3>
                  <p>{detail ?? item}</p>
                </article>
              )
            })}
          </div>
          <p className="ce-nb-note">
            Notified Body involvement is determined by the applicable European
            legislation and the authorised scope of the selected body.
          </p>
          <SectionCta label="Check Whether My Product Needs a Notified Body" />
        </div>
      </section>

      <section className="content-stage alt" id="clients">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">Client Experience</span>
            <h2>Supporting Manufacturers Through CE Compliance</h2>
          </div>
          <div className="ce-card-grid ce-client-grid">
            {CE_CLIENTS.map((client, index) => (
              <article className="ce-card" key={client.name}>
                <span className="ce-card-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{client.name}</h3>
                <p>{client.text}</p>
              </article>
            ))}
          </div>
          <p className="ce-note">
            Only publish client information and testimonials after confirming
            approval for website and advertising use.
          </p>
        </div>
      </section>

      <section className="content-stage ink ce-cost-stage" id="cost">
        <div className="shell ce-cost-split">
          <div className="ce-cost-copy">
            <span className="section-label">Cost and Quotation</span>
            <h2>CE Certification Cost in India</h2>
            <p>
              CE certification costs vary because every product has different
              technical and regulatory requirements.
            </p>
            <p>
              A fixed price cannot accurately represent every CE conformity
              project. Eurotech provides a product-specific quotation after
              reviewing the basic technical information.
            </p>
            <div className="ce-cta-row ce-cta-row-start">
              <a className="btn btn-primary" href="#enquire">
                Get a CE Marking Quote
              </a>
              <a className="btn btn-outline" href={CONTACT.phoneHref}>
                Speak to a CE Specialist
              </a>
            </div>
          </div>
          <div className="ce-cost-panel">
            <p className="ce-cost-panel-label">The final cost may depend on:</p>
            <ol className="ce-cost-list">
              {CE_COST_FACTORS.map((item, index) => (
                <li key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="content-stage alt" id="faqs">
        <div className="shell">
          <div className="stage-head">
            <span className="section-label">FAQs</span>
            <h2>CE Marking Questions</h2>
          </div>
          <div className="faq-list">
            {CE_FAQS.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceEnquire
        defaultService="CE Mark Certification"
        heading="Tell Us About Your Product"
        description="Share your product details and receive a clear understanding of the likely compliance pathway, timeline and cost."
        title="Get a CE Marking Quote"
        subtitle="Use the form below — our team will respond within one business day."
        responseNote="Our team will respond within one business day."
        steps={[
          'Share your product and contact details',
          'We review the likely compliance pathway',
          'Receive timeline guidance and a product-specific quotation',
        ]}
      />
    </div>
  )
}
