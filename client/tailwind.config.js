/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mainSvg': "url('/src/vanishing-stripes.svg')",
        'secondSvg': "url('/src/parabolic-rectangle.svg')"
    }
  },
  plugins: [],
 }
}