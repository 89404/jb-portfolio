/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#000000', // True black
          light: '#1a1a1a',   // Slightly lighter black for hover states
          dark: '#000000'     // Keep true black for darkest elements
        },
        accent: {
          DEFAULT: '#ff0033',
          light: '#ff4d4d',
          dark: '#b30000',
        }
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} 