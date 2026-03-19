import type { Showroom } from '@/types/showroom'

export const showroomsData: Showroom[] = [
  {
    id: 'sr-prague',
    slug: 'prague',
    name: 'Prague Atelier',
    city: 'Prague',
    country: 'Czech Republic',
    address: 'Adresa atelieru',
    phone: '+420 000 000 000',
    email: 'mail@mail.cz',
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    isHeadquarters: true,
  },
]
