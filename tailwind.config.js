/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'cyber-green': '#00FF41',
          'cyber-black': '#0B0C10',
          'matrix-bg': '#001100'
        },
        fontFamily: {
          'mono': ['Courier New', 'monospace']
        },
        animation: {
          'matrix-flow': 'matrix 10s linear infinite'
        },
        keyframes: {
          matrix: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(100%)' }
          }
        }
      },
    },
    plugins: [],
  }