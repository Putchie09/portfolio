/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        background: '#34384f',
        accent: '#9b6bff',
        'text-primary': '#ffffff',
        'text-secondary': '#F8F8F8',
        'card-bg': '#404560',
        'card-border': '#575E83',
        'navbar-scrolled': 'rgba(40, 43, 62, 0.85)',
      },
      maxWidth: {
        container: '1232px',
      },
    },
  },
  plugins: [],
}
