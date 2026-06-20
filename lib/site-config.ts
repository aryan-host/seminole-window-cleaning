// -----------------------------------------------------------------------------
// Central content config — edit business details, services, and copy here.
// -----------------------------------------------------------------------------

export const siteConfig = {
  name: 'Seminole Window & Exterior Cleaning',
  shortName: 'Seminole Window Cleaning',
  phone: '321-300-6696',
  phoneHref: 'tel:+13213006696',
  email: 'contact@seminolewindowcleaning.com',
  emailHref: 'mailto:contact@seminolewindowcleaning.com',
  website: 'seminolewindowcleaning.com',
  serviceAreaLabel: 'Seminole County, Florida',
  serviceAreas: [
    'Sanford',
    'Lake Mary',
    'Altamonte Springs',
    'Longwood',
    'Oviedo',
    'And surrounding areas throughout Seminole County',
  ],
  // Update these once real accounts are live.
  social: {
    instagram: '#',
    facebook: '#',
    google: '#',
  },
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export type Service = {
  id: string
  title: string
  description: string
  image: string
  bullets: string[]
}

export const services: Service[] = [
  {
    id: 'window-cleaning',
    title: 'Window Cleaning',
    description:
      'Streak-free interior and exterior window cleaning that brings back the natural light and the view you fell in love with. We use purified, water-fed pole systems to safely reach upper-story glass.',
    image: '/service-window.png',
    bullets: ['Interior & exterior glass', 'Screens & tracks', 'Hard water stain removal'],
  },
  {
    id: 'solar-panel-cleaning',
    title: 'Solar Panel Cleaning',
    description:
      'Dirty panels can quietly cut your energy production. Our gentle, deionized-water cleaning removes dust, pollen, and grime so your system performs the way it was designed to.',
    image: '/service-solar.png',
    bullets: ['Boosts energy output', 'Safe, low-pressure method', 'No harsh chemicals'],
  },
  {
    id: 'pressure-washing',
    title: 'Pressure Washing',
    description:
      'Driveways, walkways, patios, and pool decks lose years of built-up dirt, mold, and stains in a single visit. We dial in the right pressure for each surface to clean without damage.',
    image: '/service-pressure.png',
    bullets: ['Driveways & walkways', 'Patios & pool decks', 'Oil & rust treatment'],
  },
  {
    id: 'exterior-soft-washing',
    title: 'Exterior Soft Washing',
    description:
      'A low-pressure soft wash safely lifts algae, mildew, and dirt from siding, stucco, and roofs. It is the manufacturer-recommended way to clean delicate exterior surfaces.',
    image: '/service-softwash.png',
    bullets: ['Siding & stucco', 'Roof treatment', 'Algae & mildew removal'],
  },
]

export type Benefit = {
  title: string
  description: string
}

export const benefits: Benefit[] = [
  {
    title: 'Reliable Service',
    description:
      'We show up when we say we will and communicate every step of the way. Punctual, professional, and locally owned.',
  },
  {
    title: 'Attention to Detail',
    description:
      'From window tracks to roof lines, we treat the small things that make the biggest difference in the final result.',
  },
  {
    title: 'Professional Results',
    description:
      'Proper equipment, purified water, and proven techniques deliver a clean that lasts longer and looks better.',
  },
  {
    title: 'Customer Satisfaction',
    description:
      'Your property is treated like our own, and you only pay when you are completely happy with the results.',
  },
]

export type GalleryItem = {
  id: string
  title: string
  image: string
}

// Replace these placeholders with real before/after project photos.
export const galleryItems: GalleryItem[] = [
  { id: 'g1', title: 'Two-story window cleaning — Lake Mary', image: '/hero-home.png' },
  { id: 'g2', title: 'Crystal-clear residential glass', image: '/service-window.png' },
  { id: 'g3', title: 'Solar panel restoration — Oviedo', image: '/service-solar.png' },
  { id: 'g4', title: 'Driveway pressure washing — Sanford', image: '/service-pressure.png' },
  { id: 'g5', title: 'Exterior soft wash — Longwood', image: '/service-softwash.png' },
  { id: 'g6', title: 'Whole-home exterior refresh', image: '/hero-home.png' },
]

export type Testimonial = {
  name: string
  location: string
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Jennifer M.',
    location: 'Lake Mary, FL',
    quote:
      'My windows have never looked this good. Michael was on time, professional, and the difference was night and day. I have already booked them for a quarterly cleaning.',
  },
  {
    name: 'David R.',
    location: 'Sanford, FL',
    quote:
      'They pressure washed our driveway and soft washed the house. It looks like a brand new home. Fair pricing and great communication from start to finish.',
  },
  {
    name: 'Sandra K.',
    location: 'Oviedo, FL',
    quote:
      'Our solar production noticeably improved after they cleaned the panels. Honest, friendly, and clearly took pride in the work. Highly recommend.',
  },
]

export type Faq = {
  question: string
  answer: string
}

export const faqs: Faq[] = [
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve Sanford, Lake Mary, Altamonte Springs, Longwood, Oviedo, and surrounding communities throughout Seminole County, Florida.',
  },
  {
    question: 'How do I get a free estimate?',
    answer:
      'Just call us at 321-300-6696 or fill out the contact form on this page. We will review the details and get back to you quickly with a no-obligation quote.',
  },
  {
    question: 'Are you insured?',
    answer:
      'Yes. Seminole Window & Exterior Cleaning is fully insured, so your home and property are protected for every job we perform.',
  },
  {
    question: 'How often should I have my windows cleaned?',
    answer:
      'For most homes, we recommend a professional cleaning every three to six months. Homes near construction, heavy landscaping, or salt air may benefit from more frequent service.',
  },
  {
    question: 'Will pressure washing damage my surfaces?',
    answer:
      'No. We match the cleaning method to each surface. Delicate materials like siding, stucco, and roofs receive a gentle low-pressure soft wash, while durable surfaces like concrete get a proper pressure wash.',
  },
  {
    question: 'When do I pay?',
    answer:
      'You only pay once the work is complete and you are happy with the results. Your satisfaction comes first, every time.',
  },
]
