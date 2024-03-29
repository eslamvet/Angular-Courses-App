/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1480px',
      },
      animation: {
        zoomIn: 'zoomIn .25s ease-in-out',
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

