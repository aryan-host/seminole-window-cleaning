import Image from 'next/image'
import { Phone, ShieldCheck, Sparkles, ThumbsUp } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const trustPoints = [
  { icon: ShieldCheck, label: 'Fully Insured' },
  { icon: Sparkles, label: 'Sparkling Results' },
  { icon: ThumbsUp, label: 'Satisfaction Guarantee' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-24 lg:px-8">
        <div className="max-w-xl">
          <p className="inline-flex items-center rounded-full border border-border bg-accent px-3 py-1 text-sm font-semibold text-accent-foreground">
            Locally owned &middot; Serving {siteConfig.serviceAreaLabel}
          </p>
          <h1 className="mt-5 text-pretty text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Professional Exterior Cleaning in Seminole County
          </h1>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            Helping homeowners and businesses keep their windows, siding, driveways, and solar
            panels looking their best.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get a Free Estimate
            </a>
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <Phone className="size-5" aria-hidden="true" />
              Call {siteConfig.phone}
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <Icon className="size-5 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-navy/10">
            <Image
              src="/hero-home.png"
              alt="A clean Florida home with sparkling clear windows"
              width={900}
              height={700}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
