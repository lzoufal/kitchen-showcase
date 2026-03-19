import type { Testimonial } from '@/types/testimonial'
import { testimonialsData } from '@/data/testimonials'

export async function getAllTestimonials(): Promise<Testimonial[]> {
  return testimonialsData
}

export async function getFeaturedTestimonials(limit = 3): Promise<Testimonial[]> {
  return testimonialsData.filter((t) => t.featured).slice(0, limit)
}
