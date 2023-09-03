/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'background': '#033055',
      'highlight': '##FE5F55',
      'altwhite': '#FAF6F2',

      'accent': {
        '1': '#BDD5EA',
        '2': '#355672',
        '3': '#011B30',
      },

    },
    extend: {},
  },
  plugins: [],
}