/** @type {import('tailwindcss').Config} */

import animatePlugin from 'tailwindcss-animate';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        seagramgradientStart: "rgb(200, 215, 160, 0.2)", // #C8D7A0 with 20% opacity
        seagramgradientEnd: "#000000", // Black
      },
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"], // Replace "Montserrat" with your desired font
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
      },
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
  plugins: [
    animatePlugin,
  ],
}