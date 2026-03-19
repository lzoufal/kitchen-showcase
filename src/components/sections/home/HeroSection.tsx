import { Button } from '@/components/ui/Button'
import { Divider } from '@/components/ui/Divider'
import { TypedHeading } from '@/components/ui/TypedHeading'
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-cream pt-24">
      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-12 py-10 lg:py-14">
        <div className="max-w-2xl">
          <Divider variant="gold" className="mb-8" />
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-stone-950 leading-tight mb-8">
            <TypedHeading />
          </h1>
          <p className="font-jost text-base font-light leading-relaxed text-stone-700 mb-10 max-w-lg">
            Industrial-grade kitchens built to exacting tolerances. Three collections in brushed steel, matte black and raw concrete. Zero compromise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/collections" variant="primary" size="lg">
              Explore Collections
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-12 z-10 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-stone-950/20" />
        <span className="font-jost text-xs tracking-widest uppercase text-stone-950/40 [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  )
}
