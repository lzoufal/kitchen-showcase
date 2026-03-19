import type { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/Button'
import { getTranslations } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'about' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function AboutPage() {
  const t = await getTranslations('about')

  const milestones = [
    { year: '2026', key: 'founded' as const },
  ]

  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=2000&q=80"
          alt={t('heroAlt')}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-950/50" />
        <div className="relative z-10 h-full flex items-end max-w-screen-2xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20 pt-24">
          <div>
            <Divider variant="gold" className="mb-6" />
            <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-cream">{t('heroHeading')}</h1>
          </div>
        </div>
      </div>

      {/* Mission statement */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <AnimatedSection className="max-w-3xl">
          <p className="font-cormorant text-3xl lg:text-4xl font-light text-stone-950 leading-snug mb-8">
            {t('missionQuote')}
          </p>
          <p className="font-jost text-sm font-light leading-relaxed text-stone-700 mb-5">
            {t('missionBody1')}
          </p>
          <p className="font-jost text-sm font-light leading-relaxed text-stone-700">
            {t('missionBody2')}
          </p>
        </AnimatedSection>
      </div>

      {/* Split — craftsmanship */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-stone-950 flex items-center">
          <AnimatedSection className="px-10 lg:px-16 xl:px-20 py-16 lg:py-24" direction="right">
            <Divider variant="gold" className="mb-8" />
            <p className="font-jost text-xs tracking-widest uppercase text-gold mb-5">{t('craftsmanship.label')}</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-cream mb-8">
              {t('craftsmanship.heading')}
              <span className="italic">{t('craftsmanship.headingItalic')}</span>
            </h2>
            <p className="font-jost text-sm font-light leading-relaxed text-cream/70 mb-5">
              {t('craftsmanship.body1')}
            </p>
            <p className="font-jost text-sm font-light leading-relaxed text-cream/70">
              {t('craftsmanship.body2')}
            </p>
          </AnimatedSection>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
            alt={t('craftsmanship.imageAlt')}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="mb-14">
            <Divider className="mb-6" />
            <h2 className="font-cormorant text-4xl font-light text-stone-950">
              {t('timeline.heading')}
            </h2>
          </AnimatedSection>

          <div className="relative border-l border-cream-200 ml-4 space-y-12">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.08} className="pl-8 relative">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-gold rounded-full" />
                <p className="font-jost text-xs tracking-widest uppercase text-gold mb-2">{m.year}</p>
                <h3 className="font-cormorant text-2xl font-medium text-stone-950 mb-2">
                  {t(`timeline.milestones.${m.key}.title`)}
                </h3>
                <p className="font-jost text-sm font-light text-stone-700 max-w-xl">
                  {t(`timeline.milestones.${m.key}.description`)}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center max-w-screen-2xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-cormorant text-2xl text-stone-700 mb-8">
            {t('ctaText')}
          </p>
          <Button href="/contact" size="lg">{t('ctaButton')}</Button>
        </AnimatedSection>
      </div>
    </div>
  )
}
