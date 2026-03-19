import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllKitchens, getKitchenBySlug, getRelatedKitchens } from '@/lib/api/kitchens'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { formatPrice } from '@/lib/utils/formatters'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const kitchens = await getAllKitchens()
  return kitchens.map((k) => ({ slug: k.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const kitchen = await getKitchenBySlug(slug)
  if (!kitchen) return {}
  return {
    title: kitchen.seoTitle ?? kitchen.name,
    description: kitchen.seoDescription ?? kitchen.description,
  }
}

export default async function KitchenDetailPage({ params }: Props) {
  const { slug } = await params
  const kitchen = await getKitchenBySlug(slug)
  if (!kitchen) notFound()

  const related = await getRelatedKitchens(kitchen, 3)
  const primaryImage = kitchen.images.find((img) => img.isPrimary) ?? kitchen.images[0]

  return (
    <div>
      {/* Hero image */}
      <div className="relative h-[75vh] min-h-[500px] overflow-hidden">
        <Image
          src={primaryImage.url}
          alt={primaryImage.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-stone-950/20" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 pb-14 lg:pb-20 w-full pt-24">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                {kitchen.isNew && <Badge variant="gold" className="mb-4">New</Badge>}
                <p className="font-jost text-xs tracking-widest uppercase text-gold mb-2">{kitchen.tagline}</p>
                <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-cream">{kitchen.name}</h1>
              </div>
              {kitchen.startingPrice && kitchen.currency && (
                <div className="text-left sm:text-right">
                  <p className="font-jost text-xs text-cream/60">Starting from</p>
                  <p className="font-cormorant text-3xl font-medium text-cream">
                    {formatPrice(kitchen.startingPrice, kitchen.currency)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Gallery */}
        {kitchen.images.length > 1 && (
          <div className="py-12 grid grid-cols-2 md:grid-cols-3 gap-2">
            {kitchen.images.slice(1).map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    className="object-cover hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* Description + Materials */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 py-16 lg:py-24">
          {/* Description */}
          <AnimatedSection className="lg:col-span-2">
            <Divider className="mb-8" />
            <h2 className="font-cormorant text-3xl font-light text-stone-950 mb-6">About {kitchen.name}</h2>
            <p className="font-jost text-sm font-light leading-relaxed text-stone-700">
              {kitchen.longDescription}
            </p>

            {kitchen.features.length > 0 && (
              <div className="mt-10">
                <p className="font-jost text-xs font-medium tracking-widest uppercase text-greige mb-5">Key Features</p>
                <ul className="space-y-3">
                  {kitchen.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-gold mt-2 shrink-0" />
                      <span className="font-jost text-sm font-light text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </AnimatedSection>

          {/* Specs */}
          <AnimatedSection delay={0.1}>
            <div className="bg-cream-100 p-8 border border-cream-200">
              {kitchen.dimensions.length > 0 && (
                <div className="mb-8">
                  <p className="font-jost text-xs font-medium tracking-widest uppercase text-greige mb-4">Dimensions</p>
                  <div className="space-y-3">
                    {kitchen.dimensions.map((dim) => (
                      <div key={dim.label} className="flex justify-between gap-4">
                        <span className="font-jost text-xs text-stone-700">{dim.label}</span>
                        <span className="font-jost text-xs font-medium text-stone-950 text-right">{dim.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {kitchen.materials.length > 0 && (
                <div>
                  <p className="font-jost text-xs font-medium tracking-widest uppercase text-greige mb-4">Available Materials</p>
                  <div className="space-y-3">
                    {kitchen.materials.map((mat) => (
                      <div key={mat.id} className="flex items-center gap-3">
                        {mat.colorHex && (
                          <div
                            className="w-6 h-6 rounded-sm border border-cream-200 shrink-0"
                            style={{ backgroundColor: mat.colorHex }}
                          />
                        )}
                        <div>
                          <p className="font-jost text-xs font-medium text-stone-950">{mat.name}</p>
                          {mat.description && (
                            <p className="font-jost text-xs text-greige">{mat.description}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-stone-950 py-20">
        <AnimatedSection className="max-w-screen-2xl mx-auto px-6 lg:px-12 text-center">
          <Divider variant="gold" className="mx-auto mb-8" />
          <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-cream mb-4">
            Interested in {kitchen.name}?
          </h2>
          <p className="font-jost text-sm font-light text-cream/70 mb-8 max-w-md mx-auto">
            Book a private consultation at one of our showrooms. Our designers will guide you through every option.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Request a Quote
          </Button>
        </AnimatedSection>
      </div>

      {/* Related kitchens */}
      {related.length > 0 && (
        <div className="py-16 lg:py-24 bg-cream">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
            <AnimatedSection className="mb-12">
              <Divider className="mb-6" />
              <h2 className="font-cormorant text-3xl font-light text-stone-950">You May Also Like</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-cream-200">
              {related.map((k, i) => (
                <AnimatedSection key={k.id} delay={i * 0.08}>
                  <Link href={`/kitchens/${k.slug}`} className="group block bg-cream">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={k.images[0].url}
                        alt={k.images[0].alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-cormorant text-xl font-medium text-stone-950">{k.name}</h3>
                      <p className="font-jost text-xs font-light text-stone-700 mt-1 line-clamp-1">{k.tagline}</p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
