/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable Image Optimization API for static export
    },
};

export default nextConfig;


// next.config.js
// const nextConfig = {
//     output: 'export',
// };
// export default nextConfig;
// module.exports = nextConfig;
  