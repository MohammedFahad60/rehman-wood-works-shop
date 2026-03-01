import type { NextConfig } from "next";

/**
 * Corrected Next.js Configuration
 * Removed outputFileTracingRoot to fix the Vercel pathing error.
 */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Note: For production, it's safer to specify 'global-wood-works.odoo.com'
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // REMOVED: outputFileTracingRoot which was causing the lstat ENOENT error
  
  typescript: {
    // Keeping this true as per your preference to skip build-blocking errors
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure that the 'orchids-visual-edits' package is listed in your package.json
  // otherwise, the build will fail when trying to resolve the loaderPath.
  experimental: {
    turbo: {
      rules: {
        "*.{jsx,tsx}": ["orchids-visual-edits/loader.js"],
      },
    },
  },
};

export default nextConfig;