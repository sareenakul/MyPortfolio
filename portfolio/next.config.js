/** @type {import('next').NextConfig} */

import test from 'node:test';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    basePath: '/MyPortfolio/portfolio/public',
};


export default nextConfig;


  