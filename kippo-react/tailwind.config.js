/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#10B981',
          dark: '#065F46',
          deep: '#054733'
        },
        ink: {
          DEFAULT: '#1F2937',
          soft: '#4B5563',
          muted: '#59616E'
        },
        line: '#ECEFF3',
        surface: '#F7F9FB',
        graylight: '#E5E7EB'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      borderRadius: {
        sm: '10px',
        DEFAULT: '14px',
        lg: '22px'
      },
      boxShadow: {
        sm: '0 1px 2px rgba(31,41,55,.04), 0 2px 8px rgba(31,41,55,.04)',
        md: '0 6px 24px rgba(31,41,55,.08)',
        lg: '0 18px 50px rgba(31,41,55,.12)'
      },
      transitionTimingFunction: {
        kippo: 'cubic-bezier(.22,.61,.36,1)'
      },
      maxWidth: {
        container: '1140px'
      },
      letterSpacing: {
        tightest: '-.03em'
      },
      keyframes: {
        'marquee-scroll': {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' }
        }
      },
      animation: {
        'marquee-scroll': 'marquee-scroll 38s linear infinite'
      }
    }
  },
  plugins: []
}