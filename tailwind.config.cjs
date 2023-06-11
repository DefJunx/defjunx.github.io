/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(63, 81, 181)",
        secondary: "rgb(255, 152, 0)",
        background: "rgb(245, 245, 245)",
        accent: "rgb(0, 188, 212)",
        text: "rgb(51, 51, 51)"
      }
    }
  },
  plugins: []
};
