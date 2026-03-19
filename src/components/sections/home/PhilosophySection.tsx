import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { getTranslations } from 'next-intl/server'

export async function PhilosophySection() {
  const t = await getTranslations('home.philosophy')

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Image */}
      <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[600px] order-2 lg:order-1">
        <Image
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1400&q=80"
          alt={t('imageAlt')}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div className="bg-stone-950 flex items-center order-1 lg:order-2">
        <AnimatedSection className="px-10 lg:px-16 xl:px-24 py-16 lg:py-20" direction="left">
          <Divider variant="gold" className="mb-8" />
          <p className="font-jost text-xs tracking-widest uppercase text-gold mb-5">{t('label')}</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-cream leading-snug mb-8">
            {t('heading')}
          </h2>
          <p className="font-jost text-sm font-light leading-relaxed text-cream/70 mb-5">
            {t('body1')}
          </p>
          <p className="font-jost text-sm font-light leading-relaxed text-cream/70">
            {t('body2')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
