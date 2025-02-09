/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "voxa.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    })
    return config
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ]
  },
  // Enable more detailed logging
  onError: (error) => {
    console.error("Next.js build error:", error)
  },
  // Enable more detailed logging for API routes
  experimental: {
    logging: {
      level: "verbose",
    },
  },
}

module.exports = nextConfig

