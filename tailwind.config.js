/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors:{
      primary: '#3454D1',
      secundary: '#4167ff',
      white: '#EFEFEF',
      black: '#070707',
      gray: '#dddddd',
      gold: '#aa6c39',
      red: '#8B0000',
      green: '#023020',
      lightGreen: '#00FF00',
      lightRed: '#FF0000',
      lightGold: '#FFD700',
      yellow: '#FFFF00'
    },
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'cursive'],
      },
    },
  },
  plugins: [],
}

