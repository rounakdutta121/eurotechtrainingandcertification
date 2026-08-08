import { LeadForm } from './LeadForm'
import type { ServiceOption } from '../data/services'

type ServiceEnquireProps = {
  defaultService: ServiceOption
  title?: string
  subtitle?: string
}

export function ServiceEnquire({
  defaultService,
  title = 'Start your enquiry',
  subtitle = 'Name, contact, service, and a short message — that is all we need.',
}: ServiceEnquireProps) {
  return (
    <section className="enquire-stage" id="enquire-section">
      <div className="enquire-stage-inner">
        <div className="enquire-copy">
          <span className="section-label">Enquire</span>
          <h2>Tell us what you need</h2>
          <p>
            Fill one short form. Our team will call you with the right program,
            batch timing, and next steps.
          </p>
          <ul className="enquire-flow">
            <li>
              <em>1</em>
              <span>Share your details and preferred service</span>
            </li>
            <li>
              <em>2</em>
              <span>Our admissions team calls you back</span>
            </li>
            <li>
              <em>3</em>
              <span>Confirm batch, fees, and joining steps</span>
            </li>
          </ul>
        </div>
        <LeadForm
          defaultService={defaultService}
          title={title}
          subtitle={subtitle}
        />
      </div>
    </section>
  )
}
