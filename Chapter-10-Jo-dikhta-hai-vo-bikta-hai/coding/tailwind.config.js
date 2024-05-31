/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
],
  theme: {
    extend: {
        scale: {
          '90': '0.9',
        },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

