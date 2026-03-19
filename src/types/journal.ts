export type JournalCategory = 'design' | 'materials' | 'projects' | 'inspiration' | 'craftsmanship'

export interface JournalArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  category: JournalCategory
  heroImage: { url: string; alt: string }
  author: { name: string; imageUrl?: string }
  publishedAt: string
  readingTimeMinutes: number
  featured?: boolean
  seoTitle?: string
  seoDescription?: string
}
