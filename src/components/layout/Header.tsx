'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Navigation } from './Navigation'
import { MobileNav } from './MobileNav'
import { SITE } from '@/lib/constants/site'
import { cn } from '@/lib/utils/cn'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          <Link
            href="/contact"
            className="font-jost text-xs font-medium tracking-widest uppercase py-2.5 px-6 bg-stone-950 text-cream hover:bg-gold transition-colors duration-300"
          >
            Book Consultation
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
