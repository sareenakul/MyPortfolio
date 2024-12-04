// /** @type {import('tailwindcss').Config} */
// export default {
//   //works
//   // content: [
//   //   "./components/**/*.{js,ts,jsx,tsx,mdx}",
//   //   "./app/**/*.{js,ts,jsx,tsx,mdx}",
//   //   "./public/**/*.html",
//   // ],
//   // dont work
//   // content: [
//   //   './app/**/*.{js,ts,jsx,tsx}',
//   //   './app/Components/**/*.{js,ts,jsx,tsx}',
//   //   "./public/**/*.html",
//   // ],
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}", // All files in the 'app' folder
//     "./components/**/*.{js,ts,jsx,tsx,mdx}", // All files in the 'components' folder
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If you have a 'pages' folder
//     "./public/**/*.html", // Any HTML files in 'public' (if applicable)
//   ],
  
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [
//     require('tailwindcss'),
//   ],
// }


module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

