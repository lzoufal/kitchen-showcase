import type { Metadata } from 'next'
import Image from 'next/image'
import { Link } from '@/i18n/navigation'
import { getAllCollections } from '@/lib/api/collections'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'collections' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function CollectionsPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const collections = await getAllCollections()
  const t = await getTranslations({ locale, namespace: 'collections' })

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <AnimatedSection>
          <Divider className="mb-6" />
          <p className="font-jost text-xs tracking-widest uppercase text-greige mb-3">{t('pageLabel')}</p>
          <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-stone-950">
            {t('pageHeading')}
          </h1>
        </AnimatedSection>
      </div>

      {/* Collections list */}
      <div className="space-y-0.5 bg-cream-200">
        {collections.map((collection, i) => (
          <AnimatedSection key={collection.id} delay={i * 0.1}>
            <Link href={`/collections/${collection.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 bg-cream">
                <div className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[560px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Image
                    src={collection.heroImage.url}
                    alt={collection.heroImage.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={`flex items-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="p-10 lg:p-16 xl:p-20">
                    <p className="font-jost text-xs tracking-widest uppercase text-gold mb-4">{collection.tagline}</p>
                    <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-950 mb-6">{collection.name}</h2>
                    <p className="font-jost text-sm font-light leading-relaxed text-stone-700 mb-8">{collection.description}</p>
                    <span className="font-jost text-xs font-medium tracking-widest uppercase text-stone-950 border-b border-stone-950 pb-0.5 group-hover:text-gold group-hover:border-gold transition-colors duration-300">
                      {t('exploreCollection')}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
