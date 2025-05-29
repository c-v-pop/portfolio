/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./styles/**/*.css"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#0E1116',         // Deep charcoal blue for background
        'primary': '#38BDF8',         // Sky blue for highlights (more contrast)
        'secondary': '#FBBF24',       // Amber yellow for accents (calls to action)
        'support-200': '#60A5FA',     // Softer blue for cards or subtle elements
        'support': '#1D4ED8',         // Bold royal blue for buttons/links
        'secondary-bg': '#1F2937',    // Dark grey-blue for card backgrounds
        'text-main': '#F1F5F9',       // Light text
        'text-muted': '#94A3B8',      // Muted text for less emphasis
      },
    },
  },
  plugins: [],
}
