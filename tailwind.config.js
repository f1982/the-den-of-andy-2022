const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

// detail information refer to:  https://tailwindcss.com/docs/theme
module.exports = {
  purge: ['./src/**/*.{js.ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 'accent-1': '#FAFAFA',
        // 'accent-2': '#EAEAEA',
        // 'accent-7': '#333',
        // success: '#0070f3',
        // cyan: '#79FFE1',
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
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--surface)',
        'th-foreground': 'var(--foreground)',
        background: 'var(--background)',
        surface: 'var(--surface)',
        error: 'var(--error)',
        'on-error': 'var(--on-error)',
        'on-primary': 'var(--on-primary)',
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
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // default font font-sans
        serif: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // default font
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
