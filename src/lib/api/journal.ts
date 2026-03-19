import type { JournalArticle } from '@/types/journal'
import { journalData } from '@/data/journal'

export async function getAllArticles(): Promise<JournalArticle[]> {
  return [...journalData].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getArticleBySlug(slug: string): Promise<JournalArticle | null> {
  return journalData.find((a) => a.slug === slug) ?? null
}

export async function getFeaturedArticles(limit = 3): Promise<JournalArticle[]> {
  return journalData.filter((a) => a.featured).slice(0, limit)
}
