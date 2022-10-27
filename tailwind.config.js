/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mdMin': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'smMin': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
