import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { getAllShowrooms } from '@/lib/api/showrooms'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Showrooms',
  description: 'Visit Atelier Kitchens in Prague or Bratislava. Private design consultations available by appointment.',
}

export default async function ShowroomsPage() {
  const showrooms = await getAllShowrooms()

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <AnimatedSection>
          <Divider className="mb-6" />
          <p className="font-jost text-xs tracking-widest uppercase text-greige mb-3">Visit Us</p>
          <h1 className="font-cormorant text-5xl lg:text-7xl font-light text-stone-950 mb-6">Showrooms</h1>
          <p className="font-jost text-sm font-light text-stone-700 max-w-xl leading-relaxed">
            Experience our kitchens in person. Both showrooms feature fully installed kitchen environments and dedicated design consultation spaces.
          </p>
        </AnimatedSection>
      </div>

      {/* Showrooms */}
      <div className="space-y-0.5 bg-cream-200">
        {showrooms.map((showroom, i) => (
          <AnimatedSection key={showroom.id} delay={i * 0.1}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 bg-cream`}>
              <div className={`relative aspect-[16/10] lg:aspect-auto lg:min-h-[500px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={showroom.heroImage.url}
                  alt={showroom.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {showroom.isHeadquarters && (
                  <div className="absolute top-4 left-4 bg-gold text-cream font-jost text-xs tracking-widest uppercase px-3 py-1">
                    Flagship
                  </div>
                )}
              </div>
              <div className={`flex items-center ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="p-10 lg:p-14 xl:p-16 w-full">
                  <h2 className="font-cormorant text-3xl lg:text-4xl font-medium text-stone-950 mb-2">{showroom.name}</h2>
                  <p className="font-jost text-sm text-greige mb-6">{showroom.city}, {showroom.country}</p>

                  {showroom.description && (
                    <p className="font-jost text-sm font-light leading-relaxed text-stone-700 mb-8">{showroom.description}</p>
                  )}

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin size={14} className="text-gold mt-0.5 shrink-0" />
                      <span className="font-jost text-sm font-light text-stone-700">{showroom.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone size={14} className="text-gold shrink-0" />
                      <a href={`tel:${showroom.phone.replace(/\s/g, '')}`} className="font-jost text-sm font-light text-stone-700 hover:text-gold transition-colors">
                        {showroom.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail size={14} className="text-gold shrink-0" />
                      <a href={`mailto:${showroom.email}`} className="font-jost text-sm font-light text-stone-700 hover:text-gold transition-colors">
                        {showroom.email}
                      </a>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={14} className="text-gold" />
                      <p className="font-jost text-xs tracking-widest uppercase text-greige">Opening Hours</p>
                    </div>
                    <div className="space-y-1.5 pl-5">
                      {showroom.hours.map((h) => (
                        <div key={h.days} className="flex justify-between gap-8">
                          <span className="font-jost text-xs font-light text-stone-700">{h.days}</span>
                          <span className="font-jost text-xs font-medium text-stone-950">{h.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button href="/contact" variant="primary">
                    Book a Visit
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
