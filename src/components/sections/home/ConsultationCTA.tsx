import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Button } from '@/components/ui/Button'
import { Divider } from '@/components/ui/Divider'
import { getTranslations } from 'next-intl/server'

export async function ConsultationCTA() {
  const t = await getTranslations('home.cta')

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1800&q=80"
        alt="Luxury kitchen — book a consultation"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-stone-950/65" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
        <AnimatedSection>
          <Divider variant="gold" className="mx-auto mb-8" />
          <p className="font-jost text-xs tracking-widest uppercase text-gold mb-5">{t('label')}</p>
          <h2 className="font-cormorant text-4xl md:text-6xl font-light text-cream mb-6">
            {t('heading')}
          </h2>
          <p className="font-jost text-sm font-light text-cream/75 mb-10 max-w-lg mx-auto leading-relaxed">
            {t('body')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="secondary" size="lg">
              {t('bookConsultation')}
            </Button>
            <Button href="/showrooms" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-stone-950">
              {t('findShowroom')}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
