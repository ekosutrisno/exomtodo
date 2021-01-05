const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors:{
        'green-primary': '#3b8070',
        'green-secondary': '#00c58e',
        'green-darkest': '#003C3C',
        'green-light': '#00E0A1',
        'gray-primary': '#edf2f7',
         cyan: colors.cyan
       },
       fontFamily:{
        exo: [ 'Quicksand', 'system-ui', 'sans-serif']
       },
       spacing: {
        98: '30rem',
        100: '32rem',
        102: '35rem',
      },
     },
   },
   variants: {
     ringOpacity:['hover','focus','group-hover'],
     extend:{}
   },
   plugins: [],
 }