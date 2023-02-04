/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.php", "styles/index.css"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#243C5A',
        'primary': '#34996c',
        'support-200': '#8892B0',
        'support': '#CCD6F6',
      },
    },
  },
  plugins: [],
}
