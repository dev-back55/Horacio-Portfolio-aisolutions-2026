/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#020817", 900: "#061426", 800: "#071C30", 700: "#0B2942" },
        cyan: { 300: "#67E8F9", 400: "#22D3EE", 500: "#06D6F5" }
      },
      boxShadow: {
        glow: "0 0 35px rgba(6, 214, 245, .18)"
      }
    },
  },
  plugins: [],
};
