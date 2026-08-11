import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { captureAdAttribution } from '../lib/adAttribution'

export function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    captureAdAttribution()
  }, [pathname, search])

  return null
}
