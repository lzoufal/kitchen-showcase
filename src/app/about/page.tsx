import type { Metadata } from 'next'
import Image from 'next/image'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'About',
  description: 'The story of Atelier Kitchens — founded on a belief that the kitchen is the most important room in the home.',
}

const milestones = [
  { year: '2004', title: 'Founded in Prague', description: 'Atelier Kitchens began as a small joinery workshop in Vinohrady, Prague, with three craftsmen and a single design table.' },
  { year: '2010', title: 'First Showroom', description: 'Our Mánesova showroom opened, marking our transition from workshop to design atelier.' },
  { year: '2015', title: 'Nordic Pure Launch', description: 'The collection that defined Atelier\'s international reputation — minimalist, material-led, enduring.' },
  { year: '2019', title: 'Bratislava Studio', description: 'We expanded into Slovakia with a studio in the heart of Bratislava\'s Old Town.' },
  { year: '2024', title: 'Atelier Noir & Terra Viva', description: 'Two new collections launched simultaneously, completing our three-collection vision.' },
]

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=2000&q=80"
          alt="Atelier Kitchens workshop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-stone-950/50" />
        <div className="relative z-10 h-full flex items-end max-w-screen-2xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20 pt-24">
          <div>
            <Divider variant="gold" className="mb-6" />
            <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-cream">Our Story</h1>
          </div>
        </div>
      </div>

      {/* Mission statement */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <AnimatedSection className="max-w-3xl">
          <p className="font-cormorant text-3xl lg:text-4xl font-light text-stone-950 leading-snug mb-8">
            &ldquo;We believe the kitchen is not a room — it is a declaration of how you intend to live.&rdquo;
          </p>
          <p className="font-jost text-sm font-light leading-relaxed text-stone-700 mb-5">
            Atelier Kitchens was founded in 2004 by a small group of craftsmen who believed that the Central European kitchen deserved something different: not the catalogue-driven, modular solutions that dominated the market, but a genuinely bespoke process that began with listening and ended with precision.
          </p>
          <p className="font-jost text-sm font-light leading-relaxed text-stone-700">
            Twenty years later, that belief has not changed. We remain a relatively small atelier — by design. We work with a limited number of projects each year, which allows us to give each kitchen the attention it deserves. Our clients do not receive a product; they receive a portrait of their home.
          </p>
        </AnimatedSection>
      </div>

      {/* Split — craftsmanship */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-stone-950 flex items-center">
          <AnimatedSection className="px-10 lg:px-16 xl:px-20 py-16 lg:py-24" direction="right">
            <Divider variant="gold" className="mb-8" />
            <p className="font-jost text-xs tracking-widest uppercase text-gold mb-5">Craftsmanship</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-cream mb-8">
              Made by Hand,
              <span className="italic"> Finished by Time</span>
            </h2>
            <p className="font-jost text-sm font-light leading-relaxed text-cream/70 mb-5">
              Every Atelier kitchen is produced in our workshop outside Prague, where our team of twelve craftsmen has worked together for an average of eleven years. We use traditional joinery techniques — mortise and tenon joints, hand-fitted drawer boxes — alongside precision CNC machinery where it produces superior results.
            </p>
            <p className="font-jost text-sm font-light leading-relaxed text-cream/70">
              We guarantee our work for ten years. Most of our kitchens outlast that by several decades.
            </p>
          </AnimatedSection>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
            alt="Kitchen craftsmanship detail"
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
              Twenty Years of Making
            </h2>
          </AnimatedSection>

          <div className="relative border-l border-cream-200 ml-4 space-y-12">
            {milestones.map((m, i) => (
              <AnimatedSection key={m.year} delay={i * 0.08} className="pl-8 relative">
                <div className="absolute -left-2 top-1 w-4 h-4 bg-gold rounded-full" />
                <p className="font-jost text-xs tracking-widest uppercase text-gold mb-2">{m.year}</p>
                <h3 className="font-cormorant text-2xl font-medium text-stone-950 mb-2">{m.title}</h3>
                <p className="font-jost text-sm font-light text-stone-700 max-w-xl">{m.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 text-center max-w-screen-2xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <p className="font-cormorant text-2xl text-stone-700 mb-8">
            We would love to discuss your kitchen.
          </p>
          <Button href="/contact" size="lg">Book a Consultation</Button>
        </AnimatedSection>
      </div>
    </div>
  )
}
