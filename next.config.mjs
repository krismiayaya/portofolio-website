/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep preview and production caches separate so `next build` cannot
  // invalidate chunks while `next dev` is running.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

export default nextConfig;
