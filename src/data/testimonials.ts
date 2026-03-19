import type { Testimonial } from '@/types/testimonial'

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Atelier Kitchens didn\'t just design us a kitchen — they redesigned how we live. The Alba we installed eighteen months ago has become the axis of our home. Every guest asks about it.',
    authorName: 'Markéta Horáková',
    authorTitle: 'Architect, Prague',
    kitchenId: 'k-alba',
    publishedAt: '2024-02-14',
    featured: true,
  },
  {
    id: 'test-2',
    quote: 'I\'ve worked with some of the finest kitchen makers in Europe. Atelier stands apart. The quality of their material selection and the precision of their installation is simply at a different level.',
    authorName: 'Jan Müller',
    authorTitle: 'Interior Designer, Vienna',
    publishedAt: '2024-01-30',
    featured: true,
  },
  {
    id: 'test-3',
    quote: 'The Onyx kitchen in our Vinohrady apartment is the most admired thing we own. We\'ve had it three years and it still looks like the day it was installed. The craftsmanship is remarkable.',
    authorName: 'Sophie & Tomáš Novotný',
    authorTitle: 'Prague',
    kitchenId: 'k-onyx',
    publishedAt: '2023-11-20',
    featured: true,
  },
  {
    id: 'test-4',
    quote: 'From our first showroom visit to the final installation, the Atelier team treated our project with genuine care. The Sienna kitchen they created for our farmhouse in South Moravia is beyond what we imagined.',
    authorName: 'Petra Dvořáčková',
    authorTitle: 'South Moravia',
    kitchenId: 'k-sienna',
    publishedAt: '2024-03-01',
    featured: false,
  },
]
