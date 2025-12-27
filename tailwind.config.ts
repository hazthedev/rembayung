import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Rembayung Brand Colors
        primary: {
          DEFAULT: '#D97B3A', // Rembayung Orange/Gold
          50: '#FEF5EF',
          100: '#FDE8DD',
          200: '#FBD1B7',
          300: '#F8B686',
          400: '#D97B3A',
          500: '#C15A2E',
          600: '#9B4A25',
          700: '#793C1F',
          800: '#623119',
          900: '#4F2716',
        },
        secondary: {
          DEFAULT: '#B85A3A', // Warm Terracotta
          50: '#FDF2ED',
          100: '#FAE5DA',
          200: '#F4D0BB',
          300: '#EDB592',
          400: '#B85A3A',
          500: '#9D4C31',
          600: '#7E3E27',
          700: '#66321F',
          800: '#532919',
          900: '#442215',
        },
        forest: {
          DEFAULT: '#2C5F4D', // Deep Forest Green
          50: '#EBF6F2',
          100: '#D4EBE2',
          200: '#B2D8CB',
          300: '#8DC3B0',
          400: '#2C5F4D',
          500: '#244E3F',
          600: '#1D4133',
          700: '#173428',
          800: '#112A1F',
          900: '#0C2116',
        },
        cream: {
          DEFAULT: '#F4EDE3', // Warm Cream
          50: '#FEFCFA',
          100: '#FCF9F5',
          200: '#F8F1E8',
          300: '#F3E7D8',
          400: '#F4EDE3',
          500: '#E9DCC9',
          600: '#DACCAB',
          700: '#CABE8E',
          800: '#B4AD77',
          900: '#9FA063',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        '2xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '3xl': '0 35px 40px -15px rgba(0, 0, 0, 0.15), 0 15px 15px -5px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config