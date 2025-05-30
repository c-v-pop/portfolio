/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#1E1E1E',          // VSCode Dark background - near black with subtle warmth
        'primary': '#569CD6',          // VSCode blue for keywords, links, buttons
        'secondary': '#D7BA7D',        // VSCode gold/yellow for strings or highlights
        'support-200': '#264F78',      // Darker blue, subtle backgrounds or card backgrounds
        'support': '#007ACC',          // VSCode bright blue - used for active UI elements
        'secondary-bg': '#252526',     // Slightly lighter dark for secondary cards/backgrounds
        'text-main': '#D4D4D4',        // VSCode editor default text color (off-white)
        'text-muted': '#858585',       // Gray for comments or muted text
      },
    },
  },
  plugins: [],
}
