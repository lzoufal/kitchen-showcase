import type { Showroom } from '@/types/showroom'
import { showroomsData } from '@/data/showrooms'

export async function getAllShowrooms(): Promise<Showroom[]> {
  return showroomsData
}

export async function getShowroomBySlug(slug: string): Promise<Showroom | null> {
  return showroomsData.find((s) => s.slug === slug) ?? null
}
