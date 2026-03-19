'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils/cn'
import { NAV_LINKS } from '@/lib/constants/navigation'

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            'font-jost text-xs font-medium tracking-widest uppercase transition-colors duration-300',
            pathname === link.href || pathname.startsWith(link.href + '/')
              ? 'text-gold'
              : 'text-stone-700 hover:text-stone-950'
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
