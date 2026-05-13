import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.fincasdeaconcagua.com.ar',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
