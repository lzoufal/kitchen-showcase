import { HeroSection } from '@/components/sections/home/HeroSection'
import { PhilosophySection } from '@/components/sections/home/PhilosophySection'
import { FeaturedKitchens } from '@/components/sections/home/FeaturedKitchens'
import { MaterialsSection } from '@/components/sections/home/MaterialsSection'
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection'
import { ConsultationCTA } from '@/components/sections/home/ConsultationCTA'
import { getFeaturedKitchens } from '@/lib/api/kitchens'
import { getFeaturedTestimonials } from '@/lib/api/testimonials'
import { setRequestLocale } from 'next-intl/server'

type Props = { params: Promise<{ locale: string }> }

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale)
  const [kitchens, testimonials] = await Promise.all([
    getFeaturedKitchens(4),
    getFeaturedTestimonials(3),
  ])

  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <FeaturedKitchens kitchens={kitchens} />
      <MaterialsSection />
      <TestimonialsSection testimonials={testimonials} />
      <ConsultationCTA />
    </>
  )
}
