/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["localhost", "voxa.com"], // Add any other domains you're loading images from
    },
  }
  
  module.exports = nextConfig
  
  