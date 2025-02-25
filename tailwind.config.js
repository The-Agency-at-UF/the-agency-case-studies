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
        doleOrange: 'ED9612',
        doleGreen: 'C8D7A0',
        doleBlue: '7AC4D8',
      }
    },
  },
  plugins: [],
}