import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: { root: process.cwd() },
  async redirects() {
    return [
      { source: "/privacy", destination: "/#privacy", permanent: true },
      { source: "/privacy-policy", destination: "/#privacy", permanent: true },
      { source: "/support", destination: "/#support", permanent: true },
      { source: "/terms", destination: "/#terms", permanent: true },
      { source: "/content-policy", destination: "/#content-policy", permanent: true },
      { source: "/community-guidelines", destination: "/#content-policy", permanent: true },
      { source: "/eula", destination: "/#eula", permanent: true },
      { source: "/delete-account", destination: "/#delete-account", permanent: true }
    ];
  }
};

export default nextConfig;
