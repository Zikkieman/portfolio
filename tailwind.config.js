/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["barlow", "sans-serif"],
        sans: ["Open Sans", "sans - serif"],
        poppins: ["Poppins", "sans-serif "],
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
};
