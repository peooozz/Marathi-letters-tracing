import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // Remove or comment out the outputFileTracingRoot - it's causing issues
  // outputFileTracingRoot: path.resolve(__dirname, '../../'),
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Remove turbopack config for production builds
  // Vercel doesn't need this configuration
};

export default nextConfig;
