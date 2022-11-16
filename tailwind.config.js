const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        text: ['var(--font-source-sans-pro)', ...fontFamily.sans],
      },
      colors: {
        gray: {
          50: '#EBEBEB',
          100: '#CACACA',
          200: '#BFBFBF',
          900: '#131313',
        },
        orange: {
          400: '#EB734D',
          500: '#EE723C',
        },
        slate: {
          800: '#1C1E27',
          900: '#191B24',
        },
      },
    },
  },
  plugins: [],
};
