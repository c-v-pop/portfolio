/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.php", "styles/index.css"],
  theme: {
    extend: {
      colors: {
        'main-bg': '#000000',
        'primary': '#fca311',
        'secondary': '#14213d',
        'support-200': '#ffffff',
        'support': '#e5e5e5',
      },
    },
  },
  plugins: [],
}
