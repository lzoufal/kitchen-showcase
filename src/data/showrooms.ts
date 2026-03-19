import type { Showroom } from '@/types/showroom'

export const showroomsData: Showroom[] = [
  {
    id: 'sr-prague',
    slug: 'prague',
    name: 'Prague Atelier',
    city: 'Prague',
    country: 'Czech Republic',
    address: 'Mánesova 12, 120 00 Praha 2 — Vinohrady',
    phone: '+420 220 111 222',
    email: 'prague@atelierkitchens.eu',
    hours: [
      { days: 'Monday – Friday', hours: '9:00 – 18:00' },
      { days: 'Saturday', hours: '10:00 – 16:00' },
      { days: 'Sunday', hours: 'By appointment' },
    ],
    coordinates: { lat: 50.0760, lng: 14.4390 },
    heroImage: {
      url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
      alt: 'Prague Atelier showroom interior',
    },
    description: 'Our flagship showroom occupies a beautifully restored Art Nouveau building in Vinohrady. Three fully installed kitchen environments are on display, including our latest collections. Private design consultations available by appointment.',
    isHeadquarters: true,
  },
  {
    id: 'sr-bratislava',
    slug: 'bratislava',
    name: 'Bratislava Studio',
    city: 'Bratislava',
    country: 'Slovakia',
    address: 'Laurinská 18, 811 01 Bratislava — Staré Mesto',
    phone: '+421 2 210 111 00',
    email: 'bratislava@atelierkitchens.eu',
    hours: [
      { days: 'Monday – Friday', hours: '9:00 – 17:30' },
      { days: 'Saturday', hours: '10:00 – 14:00' },
      { days: 'Sunday', hours: 'Closed' },
    ],
    coordinates: { lat: 48.1486, lng: 17.1077 },
    heroImage: {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      alt: 'Bratislava Studio showroom',
    },
    description: 'Our Bratislava studio is situated in the heart of the Old Town, steps from the historic Main Square. Two fully installed kitchen environments showcase the Nordic Pure and Terra Viva collections. Design consultations available Monday through Saturday.',
    isHeadquarters: false,
  },
]
