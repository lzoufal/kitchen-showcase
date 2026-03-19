export type KitchenStyle = 'modern' | 'classic' | 'transitional' | 'industrial' | 'scandinavian'
export type KitchenFinish = 'matte' | 'gloss' | 'satin' | 'natural'
export type PriceRange = 'premium' | 'luxury' | 'ultra-luxury'
export type Currency = 'EUR' | 'CZK'

export interface Material {
  id: string
  name: string
  finish: KitchenFinish
  colorHex?: string
  imageUrl?: string
  description?: string
}

export interface KitchenDimension {
  label: string
  value: string
}

export interface KitchenImage {
  url: string
  alt: string
  width: number
  height: number
  isPrimary?: boolean
}

export interface Kitchen {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  collectionId: string
  style: KitchenStyle
  priceRange: PriceRange
  startingPrice?: number
  currency?: Currency
  images: KitchenImage[]
  materials: Material[]
  dimensions: KitchenDimension[]
  features: string[]
  isNew?: boolean
  isFeatured?: boolean
  publishedAt: string
  seoTitle?: string
  seoDescription?: string
}
