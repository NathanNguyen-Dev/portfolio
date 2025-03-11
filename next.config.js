/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    unoptimized: true, // This will bypass the image optimization for local testing
  },
  // Suppress hydration warnings caused by browser extensions
  reactStrictMode: false,
  onDemandEntries: {
    // Keep the build page in memory for longer
    maxInactiveAge: 25 * 1000,
  }
};

module.exports = nextConfig; 