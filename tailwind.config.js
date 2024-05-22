/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      height: {
        custom: 'calc(100% - 160px)',
      },
      boxShadow: {
        '3xl': '14px 17px 40px 4px',
        'bottom-nav': '0px 0px 15px -3px rgba(0,0,0,0.1)',
        CTA: '10px 10px 0px -3px #49b3cb',
      },
      borderRadius: {
        primary: '20px',
      },
      colors: {
        primary: 'var(--primary)',
        medium: '#78C8DA',
        secondary: '#025e73',
        light: '#BDE6EF',
        dark: '#062329',

        main: {
          50: '#e8f6f9',
          100: '#d2ecf2',
          200: '#a4d9e5',
          300: '#77c6d8',
          400: '#49b3cb',
          500: '#1ca0be',
          600: '#1990ab',
          700: '#168098',
          800: '#116072',
          900: '#0b404c',
        },
      },

      backgroundImage: {
        hero: "url('/backgrounds/hero.webp')",
        auth: "url('/backgrounds/auth.webp')",
      },
      animation: {
        pulse: 'pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-fast': 'spin .6s linear infinite',
      },
    },
  },
};
