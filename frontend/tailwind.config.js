/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whiteSmoke: '#F5F5EE',
        primaryText: '#1B2733',
        orange: {
          DEFAULT: '#ee5420',
          light: '#ee5420',
        },
      },
      fontSize: {
        base: [
          '1rem',
          {
            fontWeight: '400',
            lineHeight: '1.625',
            letterSpacing: '0.4px',
          },
        ],
        large: [
          '3rem',
          {
            fontWeight: '900',
            lineHeight: '1.3',
            letterSpacing: '0.6px',
          },
        ],
        extraLarge: [
          '6rem',
          {
            fontWeight: '900',
            lineHeight: '1.3',
            letterSpacing: '0.6px',
          },
        ],
        h2: [
          '1.625rem',
          {
            fontWeight: '400',
            lineHeight: '1.3',
            letterSpacing: '0.6px',
          },
        ],
        h3: [
          '1.25rem',
          {
            fontWeight: '400',
            lineHeight: '1.6',
            letterSpacing: '0.5px',
          },
        ],
      },
    },
  },
  plugins: [],
};
