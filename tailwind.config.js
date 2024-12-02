/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,js,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
      },
      fontFamily: {
        coalition: ['Coalition', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
