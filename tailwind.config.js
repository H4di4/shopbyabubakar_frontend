/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        blue: '#b0dcf9',
        darkText: '#292929',

      },
      lineHeight: {
        'extra': '3rem',
        'heading': '3rem',
        'custom': '1.85',
      },
    },
  },
  plugins: [],
}

