/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./styles/**/*.css"],
    theme: {
    extend: {
      colors: {
      'main-bg': '#0D1B2A',        // Deep navy for high contrast
      'primary': '#00C9A7',        // Vibrant aqua green for accents
      'secondary': '#1B263B',      // Muted navy for contrast areas
      'support-200': '#A8B2D1',    // Soft slate for subtle text
      'support': '#F1F3F8',        // Near white for main text
      'secondary-bg': '#11243B',   // Slightly lighter than main-bg for cards/sections
      },
    },
  },
  plugins: [],
}
