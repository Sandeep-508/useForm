/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        schoolbell: '"Schoolbell", serif',
        luckiestGuy: '"Luckiest Guy", serif',
        leagueSpartan: '"League Spartan", sans-serif',
        Poppins: '"Poppins", sans-serif',
      },
      boxShadow: {
        box: "5px 3px 5px 5px #00000030",
      }
    },
  },
  plugins: [],
}