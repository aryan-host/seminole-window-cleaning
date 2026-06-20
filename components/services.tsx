import Image from 'next/image'
import { Check } from 'lucide-react'
import { services } from '@/lib/site-config'

export function Services() {
  return (
    <section id="services" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Complete Exterior Cleaning, Done Right
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From spotless windows to refreshed driveways, we handle the full exterior so your
            property always makes a great impression.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-4 grid gap-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <span className="inline-flex size-5 items-center justify-center rounded-full bg-accent text-primary">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Request this service &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
