import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/serwis/:path+", destination: "/serwis", permanent: true },
    ];
  },
};

export default nextConfig;
