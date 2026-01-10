import type { NextConfig } from 'next'

type ExtendedNextConfig = NextConfig & {
  eslint?: {
    ignoreDuringBuilds?: boolean
  }
  typescript?: (NextConfig['typescript'] & {
    ignoreBuildErrors?: boolean
  })
}

const nextConfig: ExtendedNextConfig = {
  // === REACT ===
  reactStrictMode: true,

  // === ESLINT ===
  // Next.js le supporte, mais tes types TS ne le voient pas
  eslint: {
    ignoreDuringBuilds: true,
  },

  // === TYPESCRIPT ===
  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: true,
  },

  // === IMAGES ===
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // === EXPERIMENTAL (Fonctionnalités bêta) ===
  experimental: {
    typedRoutes: true,
    typedEnv: true,
  },

  // === SÉCURITÉ ===
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ]
  },
}

export default nextConfig
