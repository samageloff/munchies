import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination:
  //         "https://work-test-web-2024-eze6j4scpq-lz.a.run.app/:path*",
  //     },
  //   ];
  // },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  env: {
    API_URL: process.env.API_URL,
  },
};

export default nextConfig;
