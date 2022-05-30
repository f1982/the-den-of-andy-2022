const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

// detail information refer to:  https://tailwindcss.com/docs/theme
module.exports = {
  purge: ['./src/**/*.{js.ts,jsx,tsx}'],
  mode: 'jit',
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  theme: {
    container: {
      // https://github.com/tailwindlabs/tailwindcss/issues/1102
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1024px',
      },
    },
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
          medium: 'var(--primary)',
        },
        secondary: {
          dark: 'var(--secondary-dark)',
          medium: 'var(--secondary)',
          light: 'var(--secondary-light)',
        },
        background: 'var(--background)',
        surface: 'var(--surface)',
        warning: 'var(--warning)',
        error: 'var(--error)',
        'on-background': 'var(--on-background)',
        'on-surface': 'var(--on-surface)',
        'on-error': 'var(--on-error)',
        'on-warning': 'var(--on-warning)',
        'on-primary': 'var(--on-primary)',
        'on-secondary': 'var(--on-secondary)',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          // lg: '8rem',
          // '2xl': '16rem',
        },
      },
      // spacing: {
      //   28: '7rem',
      // },
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
        // h1
        '2xl': ['4.2rem', {
          lineHeight: '4.5rem',
        }],
        // h2
        xl: ['3.15rem', {
          lineHeight: '3.5rem',
        }],
        // h3
        lg: ['2.4rem', {
          lineHeight: '2.5rem',
        }],
        // h4
        md: ['1.7rem', {
          lineHeight: '2rem',
        }],
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