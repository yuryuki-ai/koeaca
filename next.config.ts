import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/koeaca",
  assetPrefix: "/koeaca/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
