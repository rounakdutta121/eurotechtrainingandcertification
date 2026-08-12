'use client'

import { type ChangeEvent, type FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { SERVICE_OPTIONS, type ServiceOption } from '../data/services'
import { getAdAttributionPayload } from '../lib/adAttribution'

const WEBHOOK =
  process.env.NEXT_PUBLIC_FORM_WEBHOOK ||
  'https://script.google.com/macros/s/AKfycbxhhZT3wY3MvFgo5erWH6DtwMzeaLwDTCDe44vxuHBIJYfUph1Mvoq89tzfXoUOi_iO/exec'

type LeadFormProps = {
  defaultService?: ServiceOption | string
  title?: string
  subtitle?: string
  serviceLabel?: string
  serviceOptions?: readonly string[]
  servicePlaceholder?: string
  submitLabel?: string
  privacyNote?: string
  experienceLabel?: string
  experienceOptions?: readonly string[]
}

type FormState = {
  name: string
  email: string
  phone: string
  service: string
  location: string
  message: string
  experience: string
}

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  location: '',
  message: '',
  experience: '',
}

export function LeadForm({
  defaultService = '',
  title = 'Enquire Now',
  subtitle = 'Share your details and our team will contact you shortly.',
  serviceLabel = 'Service *',
  serviceOptions = SERVICE_OPTIONS,
  servicePlaceholder = 'Select a course',
  submitLabel = 'Submit Enquiry',
  privacyNote,
  experienceLabel = 'Experience',
  experienceOptions,
}: LeadFormProps) {
  const router = useRouter()
  const [form, setForm] = useState<FormState>({
    ...initialState,
    service: defaultService,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'err'>('idle')

  useEffect(() => {
    setForm((prev) => ({ ...prev, service: defaultService || prev.service }))
  }, [defaultService])

  const onChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const payload = {
      ...form,
      timestamp: new Date().toISOString(),
      ...getAdAttributionPayload(),
    }

    try {
      const res = await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
        redirect: 'follow',
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('ok')
      setForm({ ...initialState, service: defaultService })
      router.push('/thank-you')
    } catch {
      setStatus('err')
    }
  }

  return (
    <div className="lead-form" id="enquire">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <form className="form-grid" onSubmit={onSubmit}>
        <div className="form-grid two">
          <div className="form-field">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              autoComplete="name"
              placeholder="Your full name"
            />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              autoComplete="email"
              placeholder="email@example.com"
            />
          </div>
        </div>
        <div className="form-grid two">
          <div className="form-field">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={onChange}
              required
              autoComplete="tel"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div className="form-field">
            <label htmlFor="location">Location *</label>
            <input
              id="location"
              name="location"
              value={form.location}
              onChange={onChange}
              required
              autoComplete="address-level2"
              placeholder="City / State"
            />
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="service">{serviceLabel}</label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={onChange}
            required
          >
            <option value="" disabled>
              {servicePlaceholder}
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        {experienceOptions?.length ? (
          <div className="form-field">
            <label htmlFor="experience">{experienceLabel}</label>
            <select
              id="experience"
              name="experience"
              value={form.experience}
              onChange={onChange}
              required
            >
              <option value="">Select your background</option>
              {experienceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ) : null}
        <div className="form-field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={onChange}
            required
            placeholder="Tell us about your training or certification needs"
          />
        </div>
        <button
          className="btn btn-primary btn-block"
          type="submit"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Submitting...' : submitLabel}
        </button>
        {privacyNote ? <p className="form-privacy">{privacyNote}</p> : null}
        {status === 'ok' && (
          <p className="form-status ok">Thank you. We have received your enquiry.</p>
        )}
        {status === 'err' && (
          <p className="form-status err">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  )
}
