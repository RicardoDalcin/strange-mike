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
        slate: {
          700: '#323D67',
        },
        neutral: {
          100: '#F5F5F5',
        },
        cyan: {
          200: '#7BEDE5',
          300: '#54F1E6',
        },
        indigo: {
          400: '#7775E2',
          500: '#6A67FB',
        },
      },
    },
  },
  plugins: [],
};
