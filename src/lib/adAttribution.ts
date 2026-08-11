const STORAGE_KEY = 'eurotech_ad_attribution'
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000

const AD_KEYS = [
  'gclid',
  'gbraid',
  'wbraid',
  'dclid',
  'gclsrc',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'utm_id',
  'fbclid',
  'msclkid',
  'ttclid',
  'li_fat_id',
] as const

export type AdAttribution = {
  gclid: string
  gbraid: string
  wbraid: string
  dclid: string
  gclsrc: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_term: string
  utm_content: string
  utm_id: string
  fbclid: string
  msclkid: string
  ttclid: string
  li_fat_id: string
  landingPage: string
  landingPath: string
  referrer: string
  capturedAt: string
}

const emptyAttribution = (): AdAttribution => ({
  gclid: '',
  gbraid: '',
  wbraid: '',
  dclid: '',
  gclsrc: '',
  utm_source: '',
  utm_medium: '',
  utm_campaign: '',
  utm_term: '',
  utm_content: '',
  utm_id: '',
  fbclid: '',
  msclkid: '',
  ttclid: '',
  li_fat_id: '',
  landingPage: '',
  landingPath: '',
  referrer: '',
  capturedAt: '',
})

function readStored(): AdAttribution | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as AdAttribution
    if (!parsed.capturedAt) return null
    if (Date.now() - new Date(parsed.capturedAt).getTime() > MAX_AGE_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return { ...emptyAttribution(), ...parsed }
  } catch {
    return null
  }
}

function paramsFromUrl(): Partial<AdAttribution> {
  const params = new URLSearchParams(window.location.search)
  const next: Partial<AdAttribution> = {}
  for (const key of AD_KEYS) {
    const value = params.get(key)?.trim()
    if (value) next[key] = value
  }
  return next
}

function hasClickId(data: Partial<AdAttribution>) {
  return Boolean(
    data.gclid ||
      data.gbraid ||
      data.wbraid ||
      data.dclid ||
      data.fbclid ||
      data.msclkid ||
      data.ttclid ||
      data.li_fat_id ||
      data.utm_source,
  )
}

/** Capture ad params from the URL and keep them for later form submits. */
export function captureAdAttribution() {
  if (typeof window === 'undefined') return

  const fromUrl = paramsFromUrl()
  const stored = readStored()
  const now = new Date().toISOString()

  if (!hasClickId(fromUrl) && stored) return

  if (!hasClickId(fromUrl) && !stored) {
    const firstVisit: AdAttribution = {
      ...emptyAttribution(),
      landingPage: window.location.href.split('?')[0],
      landingPath: window.location.pathname,
      referrer: document.referrer || '',
      capturedAt: now,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(firstVisit))
    return
  }

  const next: AdAttribution = {
    ...(stored || emptyAttribution()),
    ...fromUrl,
    landingPage: window.location.href,
    landingPath: window.location.pathname,
    referrer: document.referrer || stored?.referrer || '',
    capturedAt: now,
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
}

export function getAdAttribution(): AdAttribution {
  if (typeof window === 'undefined') return emptyAttribution()
  return readStored() || emptyAttribution()
}

export function getAdAttributionPayload() {
  const ads = getAdAttribution()
  return {
    ...ads,
    pageUrl: window.location.href,
    pagePath: window.location.pathname,
  }
}