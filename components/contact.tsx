'use client'

import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { submitContact, type ContactState } from '@/app/actions'
import { services, siteConfig } from '@/lib/site-config'

const initialState: ContactState = { status: 'idle', message: '' }

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? 'Sending...' : 'Request My Free Estimate'}
    </button>
  )
}

const fieldClass =
  'w-full rounded-md border border-border bg-background px-3.5 py-2.5 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30'

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState)

  return (
    <section id="contact" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Info */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</p>
            <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get Your Free Estimate Today
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Tell us a little about your property and the service you need. We&apos;ll get back to
              you quickly with a no-obligation quote.
            </p>

            <dl className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Call or text</dt>
                  <dd>
                    <a href={siteConfig.phoneHref} className="text-lg font-semibold text-foreground hover:text-primary">
                      {siteConfig.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Email</dt>
                  <dd>
                    <a href={siteConfig.emailHref} className="text-lg font-semibold text-foreground hover:text-primary">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Service area</dt>
                  <dd className="text-lg font-semibold text-foreground">{siteConfig.serviceAreaLabel}</dd>
                  <dd className="mt-1 text-sm text-muted-foreground">
                    {siteConfig.serviceAreas.slice(0, 5).join(' · ')}
                  </dd>
                </div>
              </div>
            </dl>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            {state.status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="size-14 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-xl font-bold text-foreground">Request received</h3>
                <p className="mt-2 max-w-sm text-pretty text-muted-foreground">{state.message}</p>
              </div>
            ) : (
              <form action={formAction} className="grid gap-4" noValidate>
                {state.status === 'error' && (
                  <p role="alert" className="rounded-md bg-destructive/10 px-3 py-2 text-sm text-destructive">
                    {state.message}
                  </p>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input id="name" name="name" type="text" required autoComplete="name" className={fieldClass} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
                      Phone <span className="text-destructive">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" required autoComplete="tel" className={fieldClass} placeholder="(321) 000-0000" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input id="email" name="email" type="email" required autoComplete="email" className={fieldClass} placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="address" className="mb-1.5 block text-sm font-medium text-foreground">
                    Property address
                  </label>
                  <input id="address" name="address" type="text" autoComplete="street-address" className={fieldClass} placeholder="Street, City" />
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                    Service needed
                  </label>
                  <select id="service" name="service" className={fieldClass} defaultValue="">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Multiple Services">Multiple Services</option>
                    <option value="Not Sure">Not sure / Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={4} className={fieldClass} placeholder="Tell us about your project..." />
                </div>
                <SubmitButton />
                <p className="text-center text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about your estimate.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
