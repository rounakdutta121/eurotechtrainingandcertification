import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.eurotechworld.net',
      },
    ],
  },
}

export default nextConfig
