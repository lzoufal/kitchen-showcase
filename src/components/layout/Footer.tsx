import { Link } from '@/i18n/navigation'
import { Instagram } from 'lucide-react'
import { SITE } from '@/lib/constants/site'
import { getTranslations, getLocale } from 'next-intl/server'

const NAV_LINKS_KEYS = [
  { labelKey: 'collections' as const, href: '/collections' },
  { labelKey: 'kitchens' as const, href: '/kitchens' },
  { labelKey: 'about' as const, href: '/about' },
  { labelKey: 'showrooms' as const, href: '/showrooms' },
  { labelKey: 'journal' as const, href: '/journal' },
]

export async function Footer() {
  const currentYear = new Date().getFullYear()
  const locale = await getLocale()
  const tNav = await getTranslations('nav')
  const tFooter = await getTranslations('footer')

  return (
    <footer className="bg-stone-950 text-cream">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" locale={locale} className="font-cormorant text-2xl font-medium tracking-wide text-cream">
              {SITE.name}
            </Link>
            <p className="mt-4 font-jost text-sm font-light leading-relaxed text-greige max-w-xs">
              {SITE.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={SITE.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-greige hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-jost text-xs tracking-widest uppercase text-greige mb-5">{tFooter('explore')}</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS_KEYS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  locale={locale}
                  className="font-jost text-sm font-light text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {tNav(link.labelKey)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-jost text-xs tracking-widest uppercase text-greige mb-5">{tFooter('contact')}</p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SITE.contact.email}`}
                className="font-jost text-sm font-light text-cream/70 hover:text-cream transition-colors duration-300"
              >
                {SITE.contact.email}
              </a>
              <a
                href={`tel:${SITE.contact.phone.replace(/\s/g, '')}`}
                className="font-jost text-sm font-light text-cream/70 hover:text-cream transition-colors duration-300"
              >
                {SITE.contact.phone}
              </a>
              <Link
                href="/showrooms"
                locale={locale}
                className="font-jost text-sm font-light text-cream/70 hover:text-cream transition-colors duration-300"
              >
                {tFooter('findShowroom')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-jost text-xs font-light text-greige">
            © {currentYear} {SITE.name}. {tFooter('allRightsReserved')}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" locale={locale} className="font-jost text-xs text-greige hover:text-cream transition-colors duration-300">
              {tFooter('privacyPolicy')}
            </Link>
            <Link href="/contact" locale={locale} className="font-jost text-xs text-greige hover:text-cream transition-colors duration-300">
              {tFooter('cookiePolicy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
