import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAllCollections, getCollectionBySlug } from '@/lib/api/collections'
import { getKitchensByCollection } from '@/lib/api/kitchens'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  const locales = routing.locales
  const collections = await getAllCollections()
  return locales.flatMap((locale) => collections.map((c) => ({ locale, slug: c.slug })))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const collection = await getCollectionBySlug(slug)
  if (!collection) return {}
  return {
    title: collection.seoTitle ?? collection.name,
    description: collection.seoDescription ?? collection.description,
  }
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug, locale } = await params
  const [collection, kitchens] = await Promise.all([
    getCollectionBySlug(slug),
    getKitchensByCollection(
      (await getCollectionBySlug(slug))?.id ?? ''
    ),
  ])

  if (!collection) notFound()

  const t = await getTranslations({ locale, namespace: 'collections' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })

  return (
    <div>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[480px] flex items-end overflow-hidden">
        <Image
          src={collection.heroImage.url}
          alt={collection.heroImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20 w-full pt-24">
          <Divider variant="gold" className="mb-6" />
          <p className="font-jost text-xs tracking-widest uppercase text-gold mb-3">{collection.tagline}</p>
          <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-cream">{collection.name}</h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <AnimatedSection className="max-w-2xl">
          <p className="font-cormorant text-2xl font-light text-stone-700 leading-relaxed mb-6">
            {collection.description}
          </p>
          <p className="font-jost text-sm font-light leading-relaxed text-stone-700">
            {collection.longDescription}
          </p>
        </AnimatedSection>
      </div>

      {/* Kitchens in this collection */}
      <div className="bg-cream-100 py-16 lg:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-12">
            <Divider className="mb-6" />
            <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-stone-950">
              {t('detail.kitchensInCollection', { name: collection.name })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-cream-200">
            {kitchens.map((kitchen, i) => (
              <AnimatedSection key={kitchen.id} delay={i * 0.08}>
                <Link href={`/kitchens/${kitchen.slug}`} className="group block bg-cream">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={kitchen.images[0].url}
                      alt={kitchen.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {kitchen.isNew && (
                      <div className="absolute top-3 left-3"><Badge>{tCommon('new')}</Badge></div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-cormorant text-2xl font-medium text-stone-950">{kitchen.name}</h3>
                    <p className="font-jost text-sm font-light text-stone-700 mt-1 line-clamp-2">{kitchen.description}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 text-center">
        <AnimatedSection>
          <p className="font-cormorant text-2xl text-stone-700 mb-8">
            {t('detail.ctaText')}
          </p>
          <Button href="/contact" variant="primary" size="lg">
            {t('detail.ctaButton')}
          </Button>
        </AnimatedSection>
      </div>
    </div>
  )
}
