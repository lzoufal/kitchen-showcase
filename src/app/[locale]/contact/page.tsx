import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { ContactForm } from '@/components/forms/ContactForm'
import { SITE } from '@/lib/constants/site'
import { Mail, Phone, MapPin } from 'lucide-react'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'contact' })
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  }
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'contact' })

  return (
    <div className="pt-24">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left — info */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              <Divider className="mb-6" />
              <p className="font-jost text-xs tracking-widest uppercase text-greige mb-3">{t('label')}</p>
              <h1 className="font-cormorant text-5xl lg:text-6xl font-light text-stone-950 mb-8">
                {t('heading')}
              </h1>
              <p className="font-jost text-sm font-light leading-relaxed text-stone-700 mb-10">
                {t('intro')}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="space-y-5">
              <div className="flex items-start gap-4">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-jost text-xs tracking-widest uppercase text-greige mb-1">{t('emailLabel')}</p>
                  <a href={`mailto:${SITE.contact.email}`} className="font-jost text-sm text-stone-950 hover:text-gold transition-colors">
                    {SITE.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-jost text-xs tracking-widest uppercase text-greige mb-1">{t('phoneLabel')}</p>
                  <a href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`} className="font-jost text-sm text-stone-950 hover:text-gold transition-colors">
                    {SITE.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="font-jost text-xs tracking-widest uppercase text-greige mb-1">{t('showroomsLabel')}</p>
                  <p className="font-jost text-sm text-stone-700">{t('showroomsValue')}</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right — form */}
          <AnimatedSection delay={0.15} className="lg:col-span-3">
            <ContactForm />
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
