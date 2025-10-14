import { withPayload } from "@payloadcms/next/withPayload";
import redirects from "./redirect.js";
import type { NextConfig } from "next";
import { RemotePattern } from "next/dist/shared/lib/image-config.js";

const NEXT_PUBLIC_SERVER_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.__NEXT_PRIVATE_ORIGIN || "http://localhost:3000";

const patterns = [NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map(
  (item) => {
    const url = new URL(item);

    return {
      hostname: url.hostname,
      protocol: url.protocol.replace(":", ""),
    } as RemotePattern;
  },
);

const nextConfig: NextConfig = {
  /* config options here */
  typedRoutes: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      ...patterns,
    ],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      ".cjs": [".cts", ".cjs"],
      ".js": [".ts", ".tsx", ".js", ".jsx"],
      ".mjs": [".mts", ".mjs"],
    };

    return webpackConfig;
  },
  reactStrictMode: true,
  redirects,
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
