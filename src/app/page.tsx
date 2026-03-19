import { HeroSection } from '@/components/sections/home/HeroSection'
import { FeaturedCollections } from '@/components/sections/home/FeaturedCollections'
import { PhilosophySection } from '@/components/sections/home/PhilosophySection'
import { FeaturedKitchens } from '@/components/sections/home/FeaturedKitchens'
import { MaterialsSection } from '@/components/sections/home/MaterialsSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { ConsultationCTA } from '@/components/sections/home/ConsultationCTA'
import { getAllCollections } from '@/lib/api/collections'
import { getFeaturedKitchens } from '@/lib/api/kitchens'
import { getFeaturedTestimonials } from '@/lib/api/testimonials'

export default async function HomePage() {
  const [collections, kitchens, testimonials] = await Promise.all([
    getAllCollections(),
    getFeaturedKitchens(4),
    getFeaturedTestimonials(3),
  ])

  return (
    <>
      <HeroSection />
      <FeaturedCollections collections={collections} />
      <PhilosophySection />
      <FeaturedKitchens kitchens={kitchens} />
      <MaterialsSection />
      <TestimonialsSection testimonials={testimonials} />
      <ConsultationCTA />
    </>
  )
}
