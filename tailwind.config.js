/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#1e212b',
        surface: '#262a36',
        'surface-hover': '#2e3341',
        accent: '#8b9dfa',
        'accent-light': '#b6c1fc',
        // dark text placed on top of accent-colored backgrounds
        'accent-ink': '#10153a',
        'text-primary': '#ecedf1',
        'text-secondary': '#d5d8e1',
        muted: '#9ca1b3',
        'card-border': '#343949',
        'field-border': '#474d61',
        navbar: '#181a22',
        'navbar-border': '#2a2e3b',
      },
      maxWidth: {
        container: '800px',
      },
    },
  },
  plugins: [],
}
