import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllArticles, getArticleBySlug } from '@/lib/api/journal'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/Button'
import { formatDate } from '@/lib/utils/formatters'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const articles = await getAllArticles()
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
  }
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params
  const article = await getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src={article.heroImage.url}
          alt={article.heroImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-950/50" />
        <div className="relative z-10 h-full flex items-end max-w-screen-2xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20 pt-24 w-full">
          <div className="max-w-2xl">
            <p className="font-jost text-xs tracking-widest uppercase text-gold mb-4">{article.category}</p>
            <h1 className="font-cormorant text-4xl lg:text-6xl font-light text-cream">{article.title}</h1>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-8 flex items-center gap-6 border-b border-cream-200">
        <p className="font-jost text-xs text-greige">{formatDate(article.publishedAt)}</p>
        <span className="text-cream-200">·</span>
        <p className="font-jost text-xs text-greige">{article.readingTimeMinutes} min read</p>
        <span className="text-cream-200">·</span>
        <p className="font-jost text-xs text-greige">{article.author.name}</p>
      </div>

      {/* Body */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <AnimatedSection className="max-w-2xl mx-auto">
          <p className="font-cormorant text-2xl font-light text-stone-700 leading-relaxed mb-8">
            {article.excerpt}
          </p>
          <Divider className="mb-8" />
          <div
            className="font-jost text-base font-light leading-relaxed text-stone-700 space-y-5 [&_p]:leading-loose"
            dangerouslySetInnerHTML={{ __html: article.body }}
          />
        </AnimatedSection>
      </div>

      {/* CTA */}
      <div className="bg-cream-100 py-16 text-center">
        <AnimatedSection>
          <p className="font-cormorant text-2xl text-stone-950 mb-6">
            Inspired by what you&apos;ve read?
          </p>
          <Button href="/contact" size="lg">Start Your Project</Button>
        </AnimatedSection>
      </div>
    </div>
  )
}
