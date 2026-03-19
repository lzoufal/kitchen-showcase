'use client'

import { Link } from '@/i18n/navigation'
import { usePathname } from '@/i18n/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils/cn'

export function Navigation() {
  const pathname = usePathname() // already locale-stripped
  const locale = useLocale()
  const t = useTranslations('nav')

  const navLinks = [
    { labelKey: 'kitchens' as const, href: '/kitchens' },
    { labelKey: 'about' as const, href: '/about' },
    { labelKey: 'showrooms' as const, href: '/showrooms' },
  ]

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          locale={locale}
          className={cn(
            'font-jost text-xs font-medium tracking-widest uppercase transition-colors duration-300',
            pathname === link.href || pathname.startsWith(link.href + '/')
              ? 'text-gold'
              : 'text-stone-700 hover:text-stone-950'
          )}
        >
          {t(link.labelKey)}
        </Link>
      ))}
    </nav>
  )
}
