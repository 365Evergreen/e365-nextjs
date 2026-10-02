import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Generates /blog/example/index.html rather than /blog/example.html.
  // This generally produces cleaner static hosting behaviour.
  trailingSlash: true,

  // Next.js image optimisation requires a running Next.js server.
  // Static export projects must use unoptimised images or a custom loader.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;