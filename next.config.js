/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      { protocol: 'https', hostname: '**' },
    ],
  },
  async redirects() {
    return [
      // Jeffree collapsed into In Development
      { source: '/jeffree', destination: '/development', permanent: false },
      { source: '/shop', destination: '/store', permanent: false },
    ]
  },
}

module.exports = nextConfig
