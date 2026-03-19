'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  interest: z.enum(['new-kitchen', 'renovation', 'consultation', 'other']),
  message: z.string().min(10, 'Please tell us a little more (at least 10 characters)'),
})

type FormData = z.infer<typeof schema>

const inputClass = 'w-full bg-transparent border-b border-cream-200 py-3 font-jost text-sm font-light text-stone-950 placeholder:text-greige focus:outline-none focus:border-gold transition-colors duration-300'
const labelClass = 'block font-jost text-xs tracking-widest uppercase text-greige mb-2'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: 'new-kitchen' },
  })

  const onSubmit = async (data: FormData) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <p className="font-cormorant text-3xl text-stone-950 mb-4">Thank you, we&apos;ll be in touch.</p>
        <p className="font-jost text-sm font-light text-stone-700">
          A member of our team will contact you within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name</label>
          <input id="name" {...register('name')} placeholder="Your name" className={inputClass} />
          {errors.name && <p className="font-jost text-xs text-red-700 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email Address</label>
          <input id="email" type="email" {...register('email')} placeholder="your@email.com" className={inputClass} />
          {errors.email && <p className="font-jost text-xs text-red-700 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
          <input id="phone" type="tel" {...register('phone')} placeholder="+420..." className={inputClass} />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>I&apos;m interested in</label>
          <select id="interest" {...register('interest')} className={cn(inputClass, 'cursor-pointer')}>
            <option value="new-kitchen">A new kitchen</option>
            <option value="renovation">Kitchen renovation</option>
            <option value="consultation">Design consultation</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Your Message</label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder="Tell us about your project, timeline, or any questions..."
          className={cn(inputClass, 'resize-none')}
        />
        {errors.message && <p className="font-jost text-xs text-red-700 mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
