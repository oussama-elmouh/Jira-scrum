import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ✅ TYPESCRIPT : on garde seulement ce que Next accepte
  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: true,
  },

  // ✅ typedRoutes n'est plus dans experimental
  typedRoutes: true,

  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: process.env.NODE_ENV === 'development',
  },

  experimental: {
    typedEnv: true,
  },

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
