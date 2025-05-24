/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./styles/**/*.css"],
    theme: {
    extend: {
      colors: {
      'main-bg': '#F4F9FF',       
      'primary': '#FF6B6B',        
      'secondary': '#FFE66D',      
      'support-200': '#4DABF7',    
      'support': '#1E3A8A',        
      'secondary-bg': '#D0E8FF',   
      },
    },
  },
  plugins: [],
}
