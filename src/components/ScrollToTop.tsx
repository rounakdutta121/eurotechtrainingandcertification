'use client'

import { Suspense, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { captureAdAttribution } from '../lib/adAttribution'

function ScrollToTopInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const search = searchParams.toString()

  useEffect(() => {
    window.scrollTo(0, 0)
    captureAdAttribution()
  }, [pathname, search])

  return null
}

export function ScrollToTop() {
  return (
    <Suspense fallback={null}>
      <ScrollToTopInner />
    </Suspense>
  )
}
