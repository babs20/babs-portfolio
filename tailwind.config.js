const { url } = require('inspector');

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Roboto',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      zIndex: {
        '-10': -10,
      },
      boxShadow: {
        full: '0px 4px 16px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        primary: '#6B7385',
        error: '#BF190B',
      },
      animation: {
        'fall-down': 'fall 400ms forwards',
        'fold-up': 'up 300ms forwards',
      },
      keyframes: {
        fall: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0%)',
          },
        },
        up: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0%)',
            visibility: 'inherit',
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-20%)',
            visibility: 'invisible',
          },
        },
      },
      transitionProperty: {
        height: 'height',
      },
      screens: {
        xs: '420px',
      },
      backgroundImage: {
        wave: "url('./img/wave-2.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
