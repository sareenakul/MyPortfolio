/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable Image Optimization API for static export
    },
    trailingSlash: true,
};

export default nextConfig;



  