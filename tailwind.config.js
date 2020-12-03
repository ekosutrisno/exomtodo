module.exports = {
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       colors:{
        'green-primary': '#3b8070',
        'green-secondary': '#00c58e',
        'green-light': '#00E0A1',
        'gray-primary': '#edf2f7',
       },
       fontFamily:{
        exo: [ 'Quicksand', 'system-ui', 'sans-serif']
       }
     },
   },
   variants: {
     ringOpacity:['hover','focus','group-hover'],
     extend:{}
   },
   plugins: [],
 }