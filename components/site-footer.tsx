import Image from 'next/image'
import { Mail, MapPin, Phone, Share2, Star, ThumbsUp } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/site-config'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/seminole-logo.png"
              alt={`${siteConfig.name} logo`}
              width={300}
              height={165}
              className="h-24 w-auto"
            />
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-navy-muted">
              Locally owned and operated exterior cleaning for homes and businesses throughout
              {' '}
              {siteConfig.serviceAreaLabel}. Reliable, professional, and committed to quality.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.facebook}
                aria-label="Facebook"
                className="inline-flex size-10 items-center justify-center rounded-md bg-white/5 text-navy-foreground transition-colors hover:bg-primary"
              >
                <ThumbsUp className="size-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.instagram}
                aria-label="Instagram"
                className="inline-flex size-10 items-center justify-center rounded-md bg-white/5 text-navy-foreground transition-colors hover:bg-primary"
              >
                <Share2 className="size-5" aria-hidden="true" />
              </a>
              <a
                href={siteConfig.social.google}
                aria-label="Google reviews"
                className="inline-flex size-10 items-center justify-center rounded-md bg-white/5 text-navy-foreground transition-colors hover:bg-primary"
              >
                <Star className="size-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-navy-muted transition-colors hover:text-navy-foreground">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-navy-foreground">
              Get In Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href={siteConfig.phoneHref} className="flex items-center gap-2.5 text-navy-muted transition-colors hover:text-navy-foreground">
                  <Phone className="size-4 text-primary" aria-hidden="true" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.emailHref} className="flex items-center gap-2.5 break-all text-navy-muted transition-colors hover:text-navy-foreground">
                  <Mail className="size-4 text-primary" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-navy-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{siteConfig.serviceAreaLabel}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-navy-muted sm:flex-row">
          <p>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.serviceAreas.slice(0, 5).join(' · ')}</p>
        </div>
      </div>
    </footer>
  )
}
