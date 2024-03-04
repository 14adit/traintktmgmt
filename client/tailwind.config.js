/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainSvg': "url('/src/endless-constellation.svg')"
    }
  },
  plugins: [],
 }
}