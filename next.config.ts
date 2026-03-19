import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  // output: 'export' is only for production (GitHub Pages).
  // In dev mode, the full server runs so the proxy middleware can route locales.
  ...(process.env.NODE_ENV === 'production' ? { output: 'export', trailingSlash: true } : {}),
  // NEXT_BASE_PATH is set in CI to the GitHub Pages subdirectory (e.g. /kitchen-showcase)
  basePath: process.env.NEXT_BASE_PATH ?? '',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.ctfassets.net' },
    ],
  },
}

export default withNextIntl(nextConfig)
