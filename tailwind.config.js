const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

// detail information refer to:  https://tailwindcss.com/docs/theme
module.exports = {
  purge: ['./src/**/*.{js.ts,jsx,tsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        // the following colours are used in global.css for theme
        emerald: colors.emerald,
        yellow: colors.yellow,
        fuchsia: colors.fuchsia,
        // these configuration are using for theme by global.css too
        primary: {
          dark: 'var(--primary-dark)',
          light: 'var(--primary-light)',
          medium: 'var(--primary-medium)',
        },
        secondary: {
          dark: 'var(--secondary-dark)',
          medium: 'var(--secondary-medium)',
          light: 'var(--secondary-light)',
        },
        background: 'var(--background)',
        surface: 'var(--surface)',
        error: 'var(--error)',
        'on-background': 'var(--on-background)',
        'on-surface': 'var(--on-surface)',
        'on-error': 'var(--on-error)',
        'on-primary': 'var(--on-primary)',
        'on-secondary': 'var(--on-secondary)',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-0.08em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Inter', ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  variants: {
    extend: {
      padding: ['last'],
      margin: ['responsive', 'hover', 'last'],
    },
  },
};
