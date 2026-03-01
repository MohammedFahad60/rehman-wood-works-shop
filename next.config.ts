import type { NextConfig } from "next";

/**
 * Corrected Next.js Configuration
 * Includes Video Headers and fixes for Vercel deployment.
 */
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
  
  // Headers to ensure Vercel serves .mp4 files correctly
  async headers() {
    return [
      {
        // This applies to all files in your public/videos folder
        source: "/videos/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Content-Type",
            value: "video/mp4",
          },
        ],
      },
    ];
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.{jsx,tsx}": ["orchids-visual-edits/loader.js"],
      },
    },
  },
};

export default nextConfig;