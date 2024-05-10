/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF725E',
        secondary: '#383d45',
        main_bg: '#FF725E50',
      },

    },
  },
  plugins: [],
}