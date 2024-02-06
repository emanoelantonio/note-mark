/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'variant': 'rgb(24, 28, 33)',
      }
    },
  },
  plugins: [],
}

