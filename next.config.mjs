/** @type {import('next').NextConfig} */
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  eslint: {
    dirs: ['src'],
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
