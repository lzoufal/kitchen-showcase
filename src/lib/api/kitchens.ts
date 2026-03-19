import type { Kitchen } from '@/types/kitchen'
import { kitchensData } from '@/data/kitchens'

// FUTURE: replace return statements with Sanity GROQ queries
// import { sanityClient } from '@/lib/sanity/client'

export async function getAllKitchens(): Promise<Kitchen[]> {
  return kitchensData
}

export async function getKitchenBySlug(slug: string): Promise<Kitchen | null> {
  return kitchensData.find((k) => k.slug === slug) ?? null
}

export async function getFeaturedKitchens(limit = 4): Promise<Kitchen[]> {
  return kitchensData.filter((k) => k.isFeatured).slice(0, limit)
}

export async function getKitchensByCollection(collectionId: string): Promise<Kitchen[]> {
  return kitchensData.filter((k) => k.collectionId === collectionId)
}

export async function getRelatedKitchens(kitchen: Kitchen, limit = 3): Promise<Kitchen[]> {
  return kitchensData
    .filter((k) => k.id !== kitchen.id && (k.collectionId === kitchen.collectionId || k.style === kitchen.style))
    .slice(0, limit)
}
