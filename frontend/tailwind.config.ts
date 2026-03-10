/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#0F172A',
          gold: '#B89650',
          silver: '#F8FAFC',
          accent: '#F1F5F9',
          muted: '#64748B',
        },
      },
      keyframes: {
        'slow-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        'scroll-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite alternate',
        'scroll-line': 'scroll-line 2s cubic-bezier(.17,.67,.83,.67) infinite',
      },
    },
  },
  plugins: [],
}
