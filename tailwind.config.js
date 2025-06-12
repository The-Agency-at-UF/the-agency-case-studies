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
        seagramgradientEnd: "#000000",
        yellow: '#EBA842',
        green: '#C8D7A0',
        blue: '#7AC4D8',
      },
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'dole-gradient': 'linear-gradient(#E29612 0%, #C8D7A0 30%, #7AC4DB 86%)',
      },
      opacity: {
        '70': '0.70',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideInFromLeft16: {
          "0%": { transform: "translateX(-4rem)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutToLeft16: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-4rem)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "fade-out": "fadeOut 0.7s ease-in forwards",
        "slide-in-from-left-16": "slideInFromLeft16 0.7s ease-out forwards",
        "slide-out-to-left-16": "slideOutToLeft16 0.7s ease-in forwards",
      },
    },
  },
  plugins: [
    animatePlugin,
  ],
};
