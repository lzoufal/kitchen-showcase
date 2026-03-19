'use client'

// Fallback root page — only reached when the proxy middleware is not running.
// In dev mode the proxy should intercept first; in the static export this
// generates out/index.html that redirects visitors to the default locale.
// Uses Next.js router so basePath (/kitchen-showcase) is automatically prepended.
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()
  useEffect(() => {
    router.replace('/cs')
  }, [router])
  return null
}
