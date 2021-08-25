const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    mode: 'all',
    // preserveHtmlElements: false,
    enabled: true,
    content:['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx', './src/**/*.js', './src/**/*.svelte'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading1: ['Alegreya'],
        heading2: ['Caveat Brush' ],
        body: ['Source Sans Pro']
      },
      colors: {
        primary: '#EC4899',
        ascent: '#EC4899',
        secondary: '#f4f4f4',
        bgprimary: '#f4f4f4',
        bgsecondary: '#999999',
        shades: colors.coolGray,
        main: colors.fuchsia,
        lowprimary: '#FBCFE8',
        // ...
      },
    },
  },
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    ascent: 'var(--color-ascent)',
    bgprimary: 'var(--color-bgprimary)',
    bgsecondary: 'var(--color-bgsecondary)',
    shades: colors.coolGray,
    // ...
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
