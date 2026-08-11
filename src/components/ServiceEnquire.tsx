import { LeadForm } from './LeadForm'
import type { ServiceOption } from '../data/services'

type ServiceEnquireProps = {
  defaultService?: ServiceOption | string
  title?: string
  subtitle?: string
  heading?: string
  description?: string
  responseNote?: string
  steps?: readonly string[]
  serviceLabel?: string
  serviceOptions?: readonly string[]
  submitLabel?: string
  privacyNote?: string
  experienceLabel?: string
  experienceOptions?: readonly string[]
}

const DEFAULT_STEPS = [
  'Share your details — service is pre-selected',
  'Our admissions team calls you back',
  'Confirm batch, fees, and joining steps',
] as const

export function ServiceEnquire({
  defaultService = '',
  title = 'Start your enquiry',
  subtitle = 'Name, contact, service, and a short message — that is all we need.',
  heading = 'Tell us what you need',
  description = 'Fill one short form. Our team will call you with the right program, batch timing, and next steps.',
  responseNote,
  steps = DEFAULT_STEPS,
  serviceLabel,
  serviceOptions,
  submitLabel,
  privacyNote,
  experienceLabel,
  experienceOptions,
}: ServiceEnquireProps) {
  return (
    <section className="enquire-stage" id="enquire-section">
      <div className="enquire-stage-inner">
        <div className="enquire-copy">
          <span className="section-label">Enquire</span>
          <h2>{heading}</h2>
          <p>{description}</p>
          <ul className="enquire-flow">
            {steps.map((step, index) => (
              <li key={step}>
                <em>{index + 1}</em>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          {responseNote ? (
            <p className="ce-response-note enquire-response-note">
              {responseNote}
            </p>
          ) : null}
        </div>
        <LeadForm
          defaultService={defaultService}
          title={title}
          subtitle={subtitle}
          serviceLabel={serviceLabel}
          serviceOptions={serviceOptions}
          submitLabel={submitLabel}
          privacyNote={privacyNote}
          experienceLabel={experienceLabel}
          experienceOptions={experienceOptions}
        />
      </div>
    </section>
  )
}
