const colors = require('tailwindcss/colors');

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
        // the following colurs are used in global.css for theme
        emerald: colors.emerald,
        yellow: colors.yellow,
        fuchsia: colors.fuchsia,
        // these configuration are using for theme by global.css too
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
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
        as: ['Inter', 'sans-serif'],
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'], // default font
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
