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
          500: 'var(--color-primary)',
          900: 'var(--color-primary-text)',
        },
        secondary: {
          500: 'var(--color-secondary)',
        },
        nature: {
          green: 'var(--color-green)',
          forest: 'var(--color-forest)',
          earth: 'var(--color-earth)',
          sand: 'var(--color-sand)',
        },
        neutral: {
          dark: 'var(--color-text)',
          medium: 'var(--color-text-muted)',
          light: 'var(--color-bg)',
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
      },
      boxShadow: {
        'soft': '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
        'medium': '0 20px 35px -10px rgba(0, 0, 0, 0.1)',
        'equestrian': '0 15px 30px -12px var(--shadow-color)',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}
