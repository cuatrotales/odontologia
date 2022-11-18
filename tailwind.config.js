/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {},
  },
  plugins: [],
};
