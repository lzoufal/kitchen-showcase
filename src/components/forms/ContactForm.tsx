'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'
import { useTranslations } from 'next-intl'

const inputClass = 'w-full bg-transparent border-b border-cream-200 py-3 font-jost text-sm font-light text-stone-950 placeholder:text-greige focus:outline-none focus:border-gold transition-colors duration-300'
const labelClass = 'block font-jost text-xs tracking-widest uppercase text-greige mb-2'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const t = useTranslations('contact.form')

  const schema = z.object({
    name: z.string().min(2, t('nameError')),
    email: z.string().email(t('emailError')),
    phone: z.string().optional(),
    interest: z.enum(['new-kitchen', 'renovation', 'consultation', 'other']),
    message: z.string().min(10, t('messageError')),
  })

  type FormData = z.infer<typeof schema>

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interest: 'new-kitchen' },
  })

  const onSubmit = async (_data: FormData) => {
    // Static export mockup: log only
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <p className="font-cormorant text-3xl text-stone-950 mb-4">{t('successHeading')}</p>
        <p className="font-jost text-sm font-light text-stone-700">
          {t('successBody')}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" className={labelClass}>{t('fullName')}</label>
          <input id="name" {...register('name')} placeholder={t('namePlaceholder')} className={inputClass} />
          {errors.name && <p className="font-jost text-xs text-red-700 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{t('emailAddress')}</label>
          <input id="email" type="email" {...register('email')} placeholder="your@email.com" className={inputClass} />
          {errors.email && <p className="font-jost text-xs text-red-700 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label htmlFor="phone" className={labelClass}>{t('phone')}</label>
          <input id="phone" type="tel" {...register('phone')} placeholder={t('phonePlaceholder')} className={inputClass} />
        </div>
        <div>
          <label htmlFor="interest" className={labelClass}>{t('interest')}</label>
          <select id="interest" {...register('interest')} className={cn(inputClass, 'cursor-pointer')}>
            <option value="new-kitchen">{t('interestNewKitchen')}</option>
            <option value="renovation">{t('interestRenovation')}</option>
            <option value="consultation">{t('interestConsultation')}</option>
            <option value="other">{t('interestOther')}</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>{t('message')}</label>
        <textarea
          id="message"
          {...register('message')}
          rows={5}
          placeholder={t('messagePlaceholder')}
          className={cn(inputClass, 'resize-none')}
        />
        {errors.message && <p className="font-jost text-xs text-red-700 mt-1">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg">
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>
    </form>
  )
}
