/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef7e8',
          100: '#fef0d1',
          200: '#fce0a3',
          300: '#f9cf75',
          400: '#f7bf47',
          500: '#f5ae19',  // Couleur selle/cuir
          600: '#c48b14',
          700: '#93680f',
          800: '#62460a',
          900: '#312305',
        },
        secondary: {
          50: '#eef5ff',
          100: '#d9e8ff',
          200: '#bcd2ff',
          300: '#9ebbff',
          400: '#81a5ff',
          500: '#3b6eff',  // Bleu équestre
          600: '#2f58cc',
          700: '#234299',
          800: '#172c66',
          900: '#0c1633',
        },
        nature: {
          green: '#2c5f2d',
          grass: '#5e8c5a',
          forest: '#1a3b2e',
          earth: '#8b5a2b',
          sand: '#e6d5b8',
        },
        equestrian: {
          saddle: '#8b5a2b',
          bridle: '#4a2c15',
          hoof: '#2c2c2c',
          mane: '#c97e5a',
        },
        neutral: {
          dark: '#2c2c2c',
          medium: '#8b8b8b',
          light: '#f5f5dc',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-up': 'scaleUp 0.4s ease-out',
        'gallop': 'gallop 0.3s ease-in-out infinite',
        'horse-bounce': 'horseBounce 2s ease-in-out infinite',
        'sway': 'sway 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        gallop: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' },
        },
        horseBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/hero-bg.jpg')",
        'grass-pattern': "url('/assets/images/grass-texture.png')",
        'wood-pattern': "url('/assets/images/wood-texture.png')",
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'medium': '0 20px 35px -10px rgba(0, 0, 0, 0.1)',
        'equestrian': '0 15px 30px -12px rgba(139, 90, 43, 0.2)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
