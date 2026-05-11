/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eco-green': '#2E7D32',
        'eco-light': '#E8F5E9',
        'eco-dark': '#1B5E20',
        'earth-brown': '#8D6E63',
        'earth-light': '#D7CCC8',
        'earth-dark': '#5D4037'
      }
    },
  },
  plugins: [],
}