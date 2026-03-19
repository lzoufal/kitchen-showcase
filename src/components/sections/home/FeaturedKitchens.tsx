import Image from 'next/image'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { formatPrice } from '@/lib/utils/formatters'
import type { Kitchen } from '@/types/kitchen'

interface FeaturedKitchensProps {
  kitchens: Kitchen[]
}

export function FeaturedKitchens({ kitchens }: FeaturedKitchensProps) {
  return (
    <section className="py-24 lg:py-32 bg-cream-100">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6">
          <div>
            <Divider className="mb-6" />
            <p className="font-jost text-xs tracking-widest uppercase text-greige mb-3">Featured</p>
            <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-stone-950">
              Selected Works
            </h2>
          </div>
          <Button href="/kitchens" variant="outline">
            View All Kitchens
          </Button>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-cream-200">
          {kitchens.map((kitchen, i) => (
            <AnimatedSection key={kitchen.id} delay={i * 0.08}>
              <Link href={`/kitchens/${kitchen.slug}`} className="group block relative bg-stone-900">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={kitchen.images[0].url}
                    alt={kitchen.images[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {kitchen.isNew && (
                    <div className="absolute top-4 left-4">
                      <Badge variant="gold">New</Badge>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="bg-cream p-6 border border-cream-200 border-t-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-jost text-xs tracking-widest uppercase text-greige mb-1">
                        {kitchen.style.charAt(0).toUpperCase() + kitchen.style.slice(1)}
                      </p>
                      <h3 className="font-cormorant text-2xl font-medium text-stone-950">{kitchen.name}</h3>
                      <p className="font-jost text-sm font-light text-stone-700 mt-1 line-clamp-2">{kitchen.description}</p>
                    </div>
                    {kitchen.startingPrice && kitchen.currency && (
                      <div className="text-right shrink-0">
                        <p className="font-jost text-xs text-greige">From</p>
                        <p className="font-cormorant text-xl font-medium text-stone-950">
                          {formatPrice(kitchen.startingPrice, kitchen.currency)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
