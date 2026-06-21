import type { Metadata, Viewport } from 'next'
import { Archivo, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
})

const sourceSans = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://seminolewindowcleaning.com'),
  title: {
    default: 'Seminole Window & Exterior Cleaning | Seminole County, FL',
    template: '%s | Seminole Window & Exterior Cleaning',
  },
  description:
    'Professional window cleaning, solar panel cleaning, pressure washing, and exterior soft washing for homes and businesses throughout Seminole County, Florida. Call 321-300-6696 for a free estimate.',
  keywords: [
    'window cleaning Seminole County',
    'pressure washing Sanford FL',
    'solar panel cleaning Lake Mary',
    'exterior soft wash Oviedo',
    'house washing Altamonte Springs',
    'window washing Longwood FL',
  ],
  authors: [{ name: 'Seminole Window & Exterior Cleaning' }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Seminole Window & Exterior Cleaning | Seminole County, FL',
    description:
      'Professional exterior cleaning for homes and businesses across Seminole County, Florida.',
    siteName: 'Seminole Window & Exterior Cleaning',
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'kByHHp2fybVbhx76MxJStRIado_gNcgUD6Y6axsFR5c',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${sourceSans.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
