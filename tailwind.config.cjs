/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "cus-btn":"#ffd803",
      "cus-primary":"#fffffe",
      "cus-secondary":"#e3f6f5",
      }

    },
  },
  plugins: [],
}
