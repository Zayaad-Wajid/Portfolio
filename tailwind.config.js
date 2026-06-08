/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#111827',
        carbon: '#18202b',
        mist: '#f5f7fb',
        mint: '#2dd4bf',
        signal: '#f59e0b',
        berry: '#e11d48',
      },
      boxShadow: {
        soft: '0 24px 70px rgba(17, 24, 39, 0.12)',
        crisp: '0 1px 0 rgba(255, 255, 255, 0.14) inset',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 34s linear infinite',
      },
    },
  },
  plugins: [],
};
