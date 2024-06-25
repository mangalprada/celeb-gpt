/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        whiteSmoke: '#F5F5EE',
        primaryText: '#27272A',
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
        h2: [
          '1.625rem',
          {
            fontWeight: '400',
            lineHeight: '1.3',
            letterSpacing: '0.6px',
          },
        ],
        h3: [
          '1.375rem',
          {
            fontWeight: '400',
            lineHeight: '1.59',
            letterSpacing: '0.5px',
          },
        ],
        h4: [
          '1.25rem',
          {
            fontWeight: '400',
            lineHeight: '1.6',
            letterSpacing: '0.5px',
          },
        ],
        h5: [
          '1.125rem',
          {
            fontWeight: '400',
            lineHeight: '1.56',
            letterSpacing: '0.4px',
          },
        ],
        h6: [
          '1rem',
          {
            fontWeight: '400',
            lineHeight: '1.56',
            letterSpacing: '0.4px',
          },
        ],
        h7: [
          '0.5625rem',
          {
            fontWeight: '400',
            lineHeight: '1.56',
            letterSpacing: '0.4px',
          },
        ],
      },
    },
  },
  plugins: [],
};
