import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
        protocol: "https",
        hostname: "dw3w9kaznebzgaz3.public.blob.vercel-storage.com",
        pathname: '/**/**',
      },
    ]
  }
};

export default nextConfig;
