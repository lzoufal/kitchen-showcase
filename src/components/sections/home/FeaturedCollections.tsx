import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import type { Collection } from '@/types/collection'

interface FeaturedCollectionsProps {
  collections: Collection[]
}

export function FeaturedCollections({ collections }: FeaturedCollectionsProps) {
  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-16">
          <Divider className="mb-6" />
          <p className="font-jost text-xs tracking-widest uppercase text-greige mb-3">Our Collections</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-950">
            Three Visions,
            <span className="italic"> One Standard</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-cream-200">
          {collections.map((collection, i) => (
            <AnimatedSection key={collection.id} delay={i * 0.1}>
              <Link href={`/collections/${collection.slug}`} className="group block relative aspect-[4/5] overflow-hidden bg-stone-900">
                <Image
                  src={collection.heroImage.url}
                  alt={collection.heroImage.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="font-jost text-xs tracking-widest uppercase text-gold mb-2">{collection.tagline}</p>
                  <h3 className="font-cormorant text-3xl font-light text-cream">{collection.name}</h3>
                  <div className="mt-4 h-px w-0 bg-gold transition-all duration-500 group-hover:w-12" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
