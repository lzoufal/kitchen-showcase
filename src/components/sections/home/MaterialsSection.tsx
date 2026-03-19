import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'

const materials = [
  {
    name: 'Stone',
    description: 'Marble, travertine, granite, and limestone sourced across the Mediterranean and Central Europe. Each slab selected by hand.',
    color: 'bg-[#D6C5A8]',
    textColor: 'text-stone-800',
  },
  {
    name: 'Wood',
    description: 'European oak, walnut, and ash in natural, smoked, and limed finishes. Sustainably certified, aged to deepen over decades.',
    color: 'bg-[#8B6840]',
    textColor: 'text-cream',
  },
  {
    name: 'Lacquer',
    description: 'Bespoke colour mixing from a palette of over 800 tones. Applied in multiple coats, hand-polished to matte, satin, or high-gloss.',
    color: 'bg-stone-950',
    textColor: 'text-cream',
  },
  {
    name: 'Metal',
    description: 'Brass, bronze, stainless steel, and blackened iron. Hand-patinated or precision-brushed by our hardware specialists.',
    color: 'bg-[#B8965A]',
    textColor: 'text-stone-950',
  },
]

export function MaterialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-16">
          <Divider className="mb-6" />
          <p className="font-jost text-xs tracking-widest uppercase text-greige mb-3">Materials</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-950">
            The Language of
            <span className="italic"> Surface</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-cream-200">
          {materials.map((mat, i) => (
            <AnimatedSection key={mat.name} delay={i * 0.08}>
              <div className={`${mat.color} aspect-square flex flex-col justify-end p-6 lg:p-8`}>
                <h3 className={`font-cormorant text-2xl lg:text-3xl font-light ${mat.textColor} mb-3`}>
                  {mat.name}
                </h3>
                <p className={`font-jost text-xs font-light leading-relaxed ${mat.textColor} opacity-80`}>
                  {mat.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
