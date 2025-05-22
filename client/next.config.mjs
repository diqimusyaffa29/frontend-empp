/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        domains: ['mdbcdn.b-cdn.net'],
        unoptimized: true,
    },
    assetPrefix:'/dist/',
    basePath:'/dist',
    trailingSlash: true
};

export default nextConfig;
