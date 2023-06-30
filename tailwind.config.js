/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        MRegular: ["MDOS-Regular", 'Regular'],
        MLight: ["MDOS-Light", 'Regular'],
      },
    },
  },
  plugins: [require("daisyui"), require('@tailwindcss/aspect-ratio')],
  daisyui: {
    themes: ["light"]
  }
}

