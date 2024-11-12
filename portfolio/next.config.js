/** @type {import('next').NextConfig} */

import test from 'node:test';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable Image Optimization API for static export
    },
    trailingSlash: true,
};

// export default nextConfig;

// const nextConfig = {
//     output: 'export',
//     images: {
//         unoptimized: true, // Disable Image Optimization API for static export
//     },
//     trailingSlash: true,
//     webpack: (config) => {
//         config.module.rules.push({
//             test: /|.scss$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 {
//                     loader: 'saas-loader',
//                     options:{
//                         api: 'modern',
//                     }
//                 }
//             ]
//         })
//         return config;
//     }
// };

export default nextConfig;

// const nextConfig = {
//     output: 'export',
//     images: {
//       unoptimized: true,
//     },
//     webpack: (config) => {
//       config.module.rules.push({
//         test: /\.scss$/,
//         use: [
//           'style-loader',
//           'css-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               api: 'modern', // Specify the modern API for Dart Sass
//             },
//           },
//         ],
//       });
//       return config;
//     },
//   };
  
//   export default nextConfig;
  



  