/** @type {import('tailwindcss').Config} */
export default {
  //works
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,css}",
    "./public/**/*.html",
  ],
  // dont work
  // content: [
  //   './app/**/*.{js,ts,jsx,tsx,css}',
  //   './app/Components/**/*.{js,ts,jsx,tsx,scss}',
  //   "./public/**/*.{html,png,pdf,svg}",
  // ],
  // content: [
  //   "./app/**/*.{js,ts,jsx,tsx,mdx}", // All files in the 'app' folder
  //   "./components/**/*.{js,ts,jsx,tsx,mdx}", // All files in the 'components' folder
  //   "./pages/**/*.{js,ts,jsx,tsx,mdx}", // If you have a 'pages' folder
  //   "./public/**/*.html", // Any HTML files in 'public' (if applicable)
  // ],
  
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('tailwindcss'),
  ],
}