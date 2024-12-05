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
      backgroundImage: {
        heroBg: 'url("/src/assets/bg-images/bg-hero.png")',
        sliderBg: 'url("/src/assets/bg-images/bg-slider.png")',
      },
      fontFamily: {
        coalition: ['Coalition', 'sans-serif'],
        'source-sans-pro': ['Source Sans Pro', 'sans-serif'],
      },
      animation: {
        'left-to-right': 'left-to-right 1s ease-out forwards',
      },
      keyframes: {
        'left-to-right': {
          '0%': { 'width': '0%', 'right': '100%' },
          '100%': { 'width': '100%', 'right': '0%' }
        },
      }
    },
  },
  plugins: [],
}
