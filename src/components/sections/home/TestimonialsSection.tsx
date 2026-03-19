import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { Divider } from '@/components/ui/Divider'
import type { Testimonial } from '@/types/testimonial'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-24 lg:py-32 bg-stone-950">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <AnimatedSection className="mb-16">
          <Divider variant="gold" className="mb-6" />
          <p className="font-jost text-xs tracking-widest uppercase text-gold mb-3">Testimonials</p>
          <h2 className="font-cormorant text-4xl lg:text-5xl font-light text-cream">
            What Our Clients Say
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-stone-800">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={testimonial.id} delay={i * 0.1} className="bg-stone-950 p-8 lg:p-10">
              <div className="font-cormorant text-4xl text-gold mb-6 leading-none">&ldquo;</div>
              <p className="font-cormorant text-xl font-light text-cream/90 leading-relaxed mb-8">
                {testimonial.quote}
              </p>
              <div className="mt-auto">
                <Divider variant="stone" className="mb-6" />
                <p className="font-jost text-sm font-medium text-cream">{testimonial.authorName}</p>
                {testimonial.authorTitle && (
                  <p className="font-jost text-xs text-greige mt-1">{testimonial.authorTitle}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
