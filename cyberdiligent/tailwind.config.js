/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        'cyber-green': '#2dd69c',
        'cyber-blue': '#000080',
      },
    },
  },
  plugins: [],
}