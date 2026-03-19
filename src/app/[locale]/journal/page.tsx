import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllArticles } from '@/lib/api/journal'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { formatDate } from '@/lib/utils/formatters'
import { getTranslations } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'journal' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function JournalPage() {
  const articles = await getAllArticles()
  const t = await getTranslations('journal')

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <AnimatedSection>
          <Divider className="mb-6" />
          <p className="font-jost text-xs tracking-widest uppercase text-greige mb-3">{t('label')}</p>
          <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-stone-950">{t('heading')}</h1>
        </AnimatedSection>
      </div>

      {/* Featured article */}
      {articles[0] && (
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mb-0.5">
          <AnimatedSection>
            <Link href={`/journal/${articles[0].slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 bg-cream border border-cream-200">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[480px] overflow-hidden">
                  <Image
                    src={articles[0].heroImage.url}
                    alt={articles[0].heroImage.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex items-center p-10 lg:p-14">
                  <div>
                    <p className="font-jost text-xs tracking-widest uppercase text-gold mb-3">{articles[0].category}</p>
                    <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-950 mb-4">{articles[0].title}</h2>
                    <p className="font-jost text-sm font-light text-stone-700 leading-relaxed mb-6">{articles[0].excerpt}</p>
                    <p className="font-jost text-xs text-greige">
                      {formatDate(articles[0].publishedAt)} · {articles[0].readingTimeMinutes} {t('minRead')}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      )}

      {/* Rest of articles */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-24 mt-0.5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-cream-200">
          {articles.slice(1).map((article, i) => (
            <AnimatedSection key={article.id} delay={i * 0.08}>
              <Link href={`/journal/${article.slug}`} className="group block bg-cream">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.heroImage.url}
                    alt={article.heroImage.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="font-jost text-xs tracking-widest uppercase text-gold mb-2">{article.category}</p>
                  <h3 className="font-cormorant text-2xl font-light text-stone-950 mb-2">{article.title}</h3>
                  <p className="font-jost text-sm font-light text-stone-700 line-clamp-2 mb-4">{article.excerpt}</p>
                  <p className="font-jost text-xs text-greige">{formatDate(article.publishedAt)}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
