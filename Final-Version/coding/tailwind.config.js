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
    screens: {
      "vs":'320px',
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

