const colors = require('material-ui-colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { ...colors }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
