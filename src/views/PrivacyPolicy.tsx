'use client'

import Link from 'next/link'
import { Seo } from '../components/Seo'
import { CONTACT } from '../data/services'

const updatedOn = '10 August 2026'

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy | Eurotech Training & Certification"
        description="How Eurotech Assessment and Certification Services Pvt. Ltd. collects, uses, and protects personal information submitted through this website."
      />

      <section className="content-stage legal-stage">
        <div className="shell legal-shell">
          <div className="stage-head">
            <span className="section-label">Legal</span>
            <h1>Privacy Policy</h1>
            <p>
              This Privacy Policy explains how Eurotech Assessment and
              Certification Services Pvt. Ltd. (“Eurotech”, “we”, “us”, or “our”)
              collects, uses, shares, and protects personal information when you
              use this website and related enquiry forms.
            </p>
          </div>

          <div className="legal-meta">
            <span>Last updated: {updatedOn}</span>
            <span>Applies to all pages on this website</span>
          </div>

          <div className="legal-body">
            <section>
              <h2>1. Who we are</h2>
              <p>
                Eurotech Assessment and Certification Services Pvt. Ltd. provides
                vocational training and certification services, including robotic
                welding, welding, plumbing training, and CE Mark certification
                support. Our registered operating address is:
              </p>
              <p>{CONTACT.address}</p>
              <p>
                Contact:{' '}
                <a href={CONTACT.emailHref}>{CONTACT.email}</a> ·{' '}
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </p>
            </section>

            <section>
              <h2>2. Information we collect</h2>
              <p>We may collect the following information when you interact with this website:</p>
              <ul>
                <li>
                  <strong>Enquiry details</strong> you submit through forms,
                  such as name, email address, phone number, location, selected
                  service/program, and message content.
                </li>
                <li>
                  <strong>Communication details</strong> when you contact us by
                  phone, email, or WhatsApp, including the content of that
                  conversation where relevant to your enquiry.
                </li>
                <li>
                  <strong>Technical data</strong> such as browser type, device
                  information, pages visited, referring URL, and approximate
                  timestamps, which may be collected automatically by hosting or
                  analytics tools used to operate and improve the site.
                </li>
              </ul>
              <p>
                We do not knowingly ask for sensitive personal data through the
                public enquiry forms. Please avoid submitting government ID
                numbers, financial credentials, or health information in the
                message field.
              </p>
            </section>

            <section>
              <h2>3. How we use your information</h2>
              <p>We use personal information to:</p>
              <ul>
                <li>Respond to your enquiry and provide counselling or quotes</li>
                <li>Share program, batch, fee, and admission information</li>
                <li>Schedule calls, visits, or follow-ups you requested</li>
                <li>Improve our website, forms, and service communications</li>
                <li>Maintain records needed for business operations and compliance</li>
                <li>Protect against spam, fraud, or misuse of our systems</li>
              </ul>
              <p>
                We process enquiry data based on your request to be contacted and
                our legitimate interest in operating training and certification
                services.
              </p>
            </section>

            <section>
              <h2>4. How forms are processed</h2>
              <p>
                When you submit an enquiry form on this website, the details you
                enter are sent securely to our lead-handling workflow so our team
                can contact you. Those details may include your name, email,
                phone, location, selected service, message, and submission time.
              </p>
              <p>
                Please ensure the information you provide is accurate. If you
                submit someone else’s details, you confirm you have permission to
                share them with us for follow-up.
              </p>
            </section>

            <section>
              <h2>5. Sharing of information</h2>
              <p>We may share personal information with:</p>
              <ul>
                <li>
                  <strong>Internal teams</strong> involved in admissions,
                  counselling, training operations, and certification support
                </li>
                <li>
                  <strong>Service providers</strong> that help us run the
                  website, forms, hosting, messaging, or CRM/workflow tools,
                  strictly for providing those services to us
                </li>
                <li>
                  <strong>Partners or notified bodies</strong> only when needed
                  to fulfil a service you requested (for example, certification
                  pathways), and only to the extent required
                </li>
                <li>
                  <strong>Authorities</strong> when required by applicable law,
                  regulation, legal process, or to protect our rights and users
                </li>
              </ul>
              <p>
                We do not sell your personal information. We do not share enquiry
                details with unrelated third parties for their own marketing.
              </p>
            </section>

            <section>
              <h2>6. Cookies and similar technologies</h2>
              <p>
                This website may use essential cookies or similar technologies
                required for basic site function, security, and performance. If
                analytics or advertising tools are added later, they may collect
                usage data to help us understand site performance. You can
                control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2>7. Data retention</h2>
              <p>
                We retain enquiry and contact records for as long as needed to
                respond to your request, manage admissions follow-up, maintain
                business records, resolve disputes, and meet legal or accounting
                requirements. When information is no longer needed, we take
                reasonable steps to delete or anonymise it.
              </p>
            </section>

            <section>
              <h2>8. Data security</h2>
              <p>
                We use reasonable technical and organisational measures to
                protect personal information against unauthorised access, loss,
                misuse, or alteration. No method of transmission or storage is
                completely secure, so we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2>9. Your choices and rights</h2>
              <p>Subject to applicable law, you may request to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Withdraw consent for further marketing follow-ups</li>
                <li>Ask us to delete enquiry data where we no longer need it</li>
              </ul>
              <p>
                To make a request, email{' '}
                <a href={CONTACT.emailHref}>{CONTACT.email}</a> or call{' '}
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>. We may need to
                verify your identity before acting on a request.
              </p>
            </section>

            <section>
              <h2>10. Children’s privacy</h2>
              <p>
                Our training and certification services are directed to adults
                and career seekers. We do not knowingly collect personal
                information from children through this website. If you believe a
                child has submitted information, contact us so we can delete it.
              </p>
            </section>

            <section>
              <h2>11. Third-party links</h2>
              <p>
                This website may link to third-party sites or resources. Their
                privacy practices are governed by their own policies. We are not
                responsible for the content or privacy practices of those
                external sites.
              </p>
            </section>

            <section>
              <h2>12. Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The “Last
                updated” date at the top of this page will change when we do.
                Continued use of the website after an update means you
                acknowledge the revised policy.
              </p>
            </section>

            <section>
              <h2>13. Contact us</h2>
              <p>
                For privacy questions, requests, or complaints, contact:
              </p>
              <p>
                <strong>Eurotech Assessment and Certification Services Pvt. Ltd.</strong>
                <br />
                {CONTACT.address}
                <br />
                Email: <a href={CONTACT.emailHref}>{CONTACT.email}</a>
                <br />
                Phone: <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </p>
              <p>
                You can also return to the{' '}
                <Link href="/">home page</Link> or{' '}
                <Link href="/#enquire">submit an enquiry</Link>.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
