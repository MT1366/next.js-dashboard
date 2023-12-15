/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponents: true, // Enable Server Components
    serverActions: true, // Enable Server Actions
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
