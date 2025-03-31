/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./styles/**/*.css"],
    theme: {
    extend: {
      colors: {
        'main-bg': '#0A192F',
        'primary': '#64FFDA',
        'secondary': '#112240',
        'support-200': '#8892B0',
        'support': '#CCD6F6',
        'secondary-bg': '#112440',
      },
    },
  },
  plugins: [],
}
