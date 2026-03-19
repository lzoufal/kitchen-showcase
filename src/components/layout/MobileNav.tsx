'use client'

import { useState } from 'react'
import { Link } from '@/i18n/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '@/lib/constants/site'
import { cn } from '@/lib/utils/cn'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'

export function MobileNav() {
  const [open, setOpen] = useState(false)
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const navLinks = [
    { labelKey: 'kitchens' as const, href: '/kitchens' },
    { labelKey: 'about' as const, href: '/about' },
    { labelKey: 'showrooms' as const, href: '/showrooms' },
  ]

  const switchLocale = (newLocale: 'cs' | 'en') => {
    router.replace(pathname, { locale: newLocale })
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden p-2 -mr-2 text-stone-700 hover:text-stone-950 transition-colors"
        aria-label="Open menu"
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-stone-950/50 z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-80 bg-cream z-50 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-cream-200">
                <span className="font-cormorant text-lg font-medium tracking-wide text-stone-950">
                  {SITE.name}
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 -mr-2 text-stone-700 hover:text-stone-950 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col px-8 py-10 gap-6 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      locale={locale}
                      onClick={() => setOpen(false)}
                      className="font-jost text-xs font-medium tracking-widest uppercase text-stone-700 hover:text-gold transition-colors duration-300"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="px-8 py-6 border-t border-cream-200 space-y-4">
                <div className="flex items-center gap-2 font-jost text-xs font-medium tracking-widest">
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
                  locale={locale}
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-3 px-6 bg-stone-950 text-cream font-jost text-xs tracking-widest uppercase hover:bg-stone-800 transition-colors duration-300"
                >
                  {tCommon('bookConsultation')}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
