/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export to ./out (no Node server needed; host on any static host / cPanel).
  output: "export",
  // The default image optimizer needs a server; images are already pre-compressed WebP.
  images: { unoptimized: true },
  // Keep WordPress-style URLs (/about/) so existing links and search results still resolve.
  trailingSlash: true,
  // cacheComponents / partialPrefetching are server-rendering features and conflict with
  // `output: "export"` (e.g. the sitemap's force-static config), so they stay off.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
