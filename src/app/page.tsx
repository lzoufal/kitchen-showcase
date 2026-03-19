'use client'

// Fallback root page — only reached when the proxy middleware is not running.
// In dev mode the proxy should intercept first; in the static export this
// generates out/index.html that redirects visitors to the default locale.
import { useEffect } from 'react'

export default function RootPage() {
  useEffect(() => {
    window.location.replace('/cs')
  }, [])
  return null
}
