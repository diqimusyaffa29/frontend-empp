/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["mdbcdn.b-cdn.net"],
    unoptimized: true,
  },
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || "",
  // basePath:'/dist',
  trailingSlash: true,
};

export default nextConfig;
