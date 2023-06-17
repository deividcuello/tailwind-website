/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors:{
      primary: '#3454D1',
      secundary: '#3454D1',
      white: '#EFEFEF',
      black: '#070707',
      gray: '#dddddd',
      gold: '#aa6c39',
      red: '#8B0000',
      green: '#023020',
      lightGreen: '#00FF00',
      lightRed: '#FF0000',
      lightGold: '#FFD700'
    },
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'cursive'],
      },
    },
  },
  plugins: [],
}

