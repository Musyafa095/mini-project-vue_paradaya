/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors:{
        primary: '#f59e0b',
        secondary: '#b22222'
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
    themes: []
  }
}

