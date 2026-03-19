export interface Collection {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  heroImage: { url: string; alt: string }
  accentColor?: string
  kitchenIds: string[]
  order: number
  publishedAt: string
  seoTitle?: string
  seoDescription?: string
}
