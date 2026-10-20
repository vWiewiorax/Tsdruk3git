import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/serwis", destination: "/", permanent: true },
      { source: "/serwis/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
