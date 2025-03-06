import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    // Add support for .glb files
    config.module.rules.push({
      test: /\.glb$/,
      type: 'asset/resource',
    })
    
    return config
  },
};

export default nextConfig;
