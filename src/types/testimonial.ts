export interface Testimonial {
  id: string
  quote: string
  authorName: string
  authorTitle?: string
  authorImage?: { url: string; alt: string }
  kitchenId?: string
  publishedAt: string
  featured?: boolean
}
