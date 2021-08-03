module.exports = {
  purge: [
     './src/**/*.html',
     './src/**/*.js',
   ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        heading1: ['Alegreya'],
        heading2: ['Caveat Brush' ],
        body: ['Source Sans Pro']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
