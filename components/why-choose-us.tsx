import { CalendarCheck, Search, Sparkles, ThumbsUp } from 'lucide-react'
import { benefits } from '@/lib/site-config'

const icons = [CalendarCheck, Search, Sparkles, ThumbsUp]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-navy py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Why Choose Us</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-navy-foreground sm:text-4xl">
            Clear Views. Better Impressions.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-navy-muted">
            Professional service you can count on, backed by a commitment to quality on every job.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, i) => {
            const Icon = icons[i % icons.length]
            return (
              <div
                key={benefit.title}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-foreground">{benefit.title}</h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-navy-muted">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
