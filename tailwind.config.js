/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        text : "#353535",
        heading : "#3c6e71",
        secondary : "#284b63",
        primary : "#d9d9d9",
        secondaryText : "#ffffff"
      }
    },
  },
  plugins: [],
}

