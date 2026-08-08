import { useEffect } from 'react'

type SeoProps = {
  title: string
  description: string
}

export function Seo({ title, description }: SeoProps) {
  useEffect(() => {
    document.title = title

    const ensureMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    ensureMeta('robots', 'noindex, nofollow')
    ensureMeta('description', description)
  }, [title, description])

  return null
}
