import type { Collection } from '@/types/collection'
import { collectionsData } from '@/data/collections'

export async function getAllCollections(): Promise<Collection[]> {
  return [...collectionsData].sort((a, b) => a.order - b.order)
}

export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
  return collectionsData.find((c) => c.slug === slug) ?? null
}
