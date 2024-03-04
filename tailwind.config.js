/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily:{
        "inter": ['Inter', 'sans-serif'],
      },
      colors: {
        dark:"#0D0D0D",
        light:"#fbfbfb",
        "dark-secondary":"#181818",
        "light-secondary":"#F6F6F6",
        "dark-hover":"#242424",
        "light-hover":"#E5E5E5",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}