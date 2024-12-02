/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,js,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'success-dark': '#121212',
        'success-red': '#f90c0c',
        'success-yellow': '#ffca00'
      },
      fontFamily: {
        coalition: ['Coalition', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
