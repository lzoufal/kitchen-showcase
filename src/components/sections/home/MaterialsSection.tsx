import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { getTranslations } from 'next-intl/server'

const materialKeys = [
  { key: 'stone' as const, color: 'bg-[#D6C5A8]', textColor: 'text-stone-800' },
  { key: 'wood' as const,  color: 'bg-[#8B6840]',  textColor: 'text-cream' },
  { key: 'lacquer' as const, color: 'bg-stone-950', textColor: 'text-cream' },
  { key: 'metal' as const, color: 'bg-[#B8965A]',  textColor: 'text-stone-950' },
]

export async function MaterialsSection() {
  const t = await getTranslations('home.materials')

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-16">
          <Divider className="mb-6" />
          <p className="font-jost text-xs tracking-widest uppercase text-greige mb-3">{t('label')}</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-950">
            {t('heading')}
            <span className="italic">{t('headingItalic')}</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-cream-200">
          {materialKeys.map((mat, i) => (
            <AnimatedSection key={mat.key} delay={i * 0.08}>
              <div className={`${mat.color} aspect-square flex flex-col justify-end p-6 lg:p-8`}>
                <h3 className={`font-cormorant text-2xl lg:text-3xl font-light ${mat.textColor} mb-3`}>
                  {t(`${mat.key}.name`)}
                </h3>
                <p className={`font-jost text-xs font-light leading-relaxed ${mat.textColor} opacity-80`}>
                  {t(`${mat.key}.description`)}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
