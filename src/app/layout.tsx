import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Layout } from '../components/Layout'
import { ScrollToTop } from '../components/ScrollToTop'
import { WeldSplash } from '../components/WeldSplash'
import '../styles/global.css'

export const metadata: Metadata = {
  title: 'Eurotech Training & Certification',
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: {
      url: 'https://www.eurotechworld.net/wp-content/uploads/2019/08/cropped-Eurotechworld-logo.jpg',
      type: 'image/jpeg',
    },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <WeldSplash />
        <ScrollToTop />
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
