/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      opacity: {
        '70': '0.70',
      },
      colors: {
        'yellow': '#EBA842',
        'green': '#C8D7A0',
        'blue': '#7AC4D8'
      },
      backgroundImage: {
        'dole-gradient': 'linear-gradient(#E29612 0%, #C8D7A0 30%, #7AC4DB 86%)',
      }
    },
  },
  plugins: [],
}