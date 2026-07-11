/** @type {import('next').NextConfig} */
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/f1982/planet-of-images/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy-Report-Only',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://utteranc.es; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com; img-src 'self' data: blob: https://raw.githubusercontent.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; frame-src https://utteranc.es; object-src 'none'; base-uri 'self'; form-action 'self'",
          },
          { key: 'Strict-Transport-Security', value: 'max-age=31536000' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    })
    return config
  },
}

if (process.env.NODE_ENV === 'development') {
  await initOpenNextCloudflareForDev()
}

export default nextConfig
