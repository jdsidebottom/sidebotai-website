/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#508cbc',
        secondary: '#ff6b35',
        dark: '#000000',
        light: '#ffffff',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(80, 140, 188, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(80, 140, 188, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
