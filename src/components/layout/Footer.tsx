import Link from 'next/link'
import { Instagram } from 'lucide-react'
import { SITE } from '@/lib/constants/site'
import { NAV_LINKS } from '@/lib/constants/navigation'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-950 text-cream">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-cormorant text-2xl font-medium tracking-wide text-cream">
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
            <p className="font-jost text-xs tracking-widest uppercase text-greige mb-5">Explore</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-jost text-sm font-light text-cream/70 hover:text-cream transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-jost text-xs tracking-widest uppercase text-greige mb-5">Contact</p>
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
                className="font-jost text-sm font-light text-cream/70 hover:text-cream transition-colors duration-300"
              >
                Find a showroom →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-jost text-xs font-light text-greige">
            © {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="font-jost text-xs text-greige hover:text-cream transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/contact" className="font-jost text-xs text-greige hover:text-cream transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
