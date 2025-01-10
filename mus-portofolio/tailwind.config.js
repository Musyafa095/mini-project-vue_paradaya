/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        primary: '#1E90FF',
        secondary: '#4B0082'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
  },
},
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ['night', 'nord']
  }
}

