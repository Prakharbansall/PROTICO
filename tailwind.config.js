// tailwind.config.js - Complete Production Configuration

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        plum: {
          50: '#F8F4F9',
          100: '#F3E8F7',
          200: '#E5D6EB',
          300: '#D1BFE0',
          400: '#9B6DB3',
          500: '#5D2E60',
          600: '#3E103F',
          700: '#2D0B30',
          800: '#1A0615',
          900: '#0F0615',
        },
        gold: {
          50: '#FFFEF5',
          100: '#FFFEF0',
          200: '#FFF8DC',
          300: '#FFF5CC',
          400: '#F4D03F',
          500: '#D4AF37',
          600: '#C4942A',
          700: '#A67C1F',
          800: '#7F5F14',
          900: '#5F450F',
        },
      },
      fontSize: {
        'display-xl': '4rem',
        'display-lg': '3.5rem',
        'display': '3rem',
        'heading-xl': '2rem',
        'heading-lg': '1.5rem',
        'heading': '1.25rem',
      },
      fontFamily: {
        // Using system fonts for performance, but can be replaced
        'sans': ['Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        'mono': ['Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(212, 175, 55, 0.3)',
        'glow-lg': '0 0 50px rgba(212, 175, 55, 0.5)',
        'glow-xl': '0 0 80px rgba(212, 175, 55, 0.6)',
        'depth': '0 20px 40px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideInUp': 'slideInUp 0.6s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.6s ease-out forwards',
        'slideInRight': 'slideInRight 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '20px',
        'xl': '40px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-radial-circle': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    // Ensure these classes are never removed
    'animate-fadeIn',
    'animate-slideInUp',
    'animate-slideInLeft',
    'animate-slideInRight',
    'text-gradient',
  ]
}