import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "heavypedal.myshopify.com",
      },
    ],
  },
};

export default nextConfig;
