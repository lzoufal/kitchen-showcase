import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Divider } from '@/components/ui/Divider'
import { SITE } from '@/lib/constants/site'

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=2000&q=85"
        alt="Luxury kitchen interior"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-2xl">
          <Divider variant="gold" className="mb-8" />
          <p className="font-jost text-xs font-medium tracking-widest uppercase text-gold mb-5">
            {SITE.tagline}
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl lg:text-8xl font-light text-cream leading-tight mb-8">
            Precision Engineered.<br />Stainless by Design.
          </h1>
          <p className="font-jost text-base font-light leading-relaxed text-cream/80 mb-10 max-w-lg">
            Industrial-grade kitchens built to exacting tolerances. Three collections in brushed steel, matte black and raw concrete. Zero compromise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/collections" variant="secondary" size="lg">
              Explore Collections
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-stone-950">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-12 z-10 hidden lg:flex flex-col items-center gap-2">
        <div className="w-px h-16 bg-cream/30" />
        <span className="font-jost text-xs tracking-widest uppercase text-cream/50 [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  )
}
