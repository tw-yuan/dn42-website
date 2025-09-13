import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 禁用需要伺服器的功能
  experimental: {
    // 確保與 Cloudflare Pages 相容
  }
};

export default nextConfig;
