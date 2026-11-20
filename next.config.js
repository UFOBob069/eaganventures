/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep compilation and file tracing scoped to this repository.
  turbopack: { root: __dirname },
  outputFileTracingRoot: __dirname,
  // Optimize images
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [],
  },
  // Disable React strict mode if it's causing issues
  reactStrictMode: false,
  // Add trailing slash to URLs
  trailingSlash: true,
  // Increase build output detail
  output: "standalone",
};

module.exports = nextConfig;
