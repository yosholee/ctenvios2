import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.1.10.70"],
  images: {
    // Default Next quality is 75; keep allowlist tight for /_next/image.
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },
  async headers(): Promise<
    { source: string; headers: { key: string; value: string }[] }[]
  > {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
