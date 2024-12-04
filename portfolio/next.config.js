/** @type {import('next').NextConfig} */

import test from 'node:test';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable Image Optimization API for static export
    },
    trailingSlash: true,
    basePath: '/portfolio',
};


export default nextConfig;


  