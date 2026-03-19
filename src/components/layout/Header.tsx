'use client'

import { Link } from '@/i18n/navigation'
import { useState, useEffect } from 'react'
import { Navigation } from './Navigation'
import { MobileNav } from './MobileNav'
import { SITE } from '@/lib/constants/site'
import { cn } from '@/lib/utils/cn'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const t = useTranslations('common')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const switchLocale = (newLocale: 'cs' | 'en') => {
    router.replace(pathname, { locale: newLocale })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-500',
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm border-b border-cream-200 py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <Link
          href="/"
          className={cn(
            'font-cormorant text-xl font-medium tracking-wide transition-colors duration-300',
            scrolled ? 'text-stone-950' : 'text-stone-950'
          )}
        >
          {SITE.name}
        </Link>

        <Navigation />

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 font-jost text-xs font-medium tracking-widest">
            <button
              onClick={() => switchLocale('cs')}
              className={locale === 'cs' ? 'text-gold' : 'text-greige hover:text-stone-950'}
            >
              CS
            </button>
            <span className="text-cream-200">|</span>
            <button
              onClick={() => switchLocale('en')}
              className={locale === 'en' ? 'text-gold' : 'text-greige hover:text-stone-950'}
            >
              EN
            </button>
          </div>
          <Link
            href="/contact"
            className="font-jost text-xs font-medium tracking-widest uppercase py-2.5 px-6 bg-stone-950 text-cream hover:bg-gold transition-colors duration-300"
          >
            {t('bookConsultation')}
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
