import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getAllKitchens } from '@/lib/api/kitchens'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { Badge } from '@/components/ui/Badge'
import { getTranslations } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'kitchens' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function KitchensPage() {
  const kitchens = await getAllKitchens()
  const t = await getTranslations('kitchens')
  const tCommon = await getTranslations('common')

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

      {/* Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-cream-200">
          {kitchens.map((kitchen, i) => (
            <AnimatedSection key={kitchen.id} delay={i * 0.06}>
              <Link href={`/kitchens/${kitchen.slug}`} className="group block bg-cream">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={kitchen.images[0].url}
                    alt={kitchen.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {kitchen.isNew && <Badge>{tCommon('new')}</Badge>}
                    {kitchen.isFeatured && <Badge variant="dark">{tCommon('featured')}</Badge>}
                  </div>
                </div>
                <div className="p-6 border-t border-cream-200">
                  <p className="font-jost text-xs tracking-widest uppercase text-greige mb-1">
                    {kitchen.style.charAt(0).toUpperCase() + kitchen.style.slice(1)}
                  </p>
                  <h3 className="font-cormorant text-2xl font-medium text-stone-950">{kitchen.name}</h3>
                  <p className="font-jost text-sm font-light text-stone-700 mt-1 line-clamp-2">{kitchen.description}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
