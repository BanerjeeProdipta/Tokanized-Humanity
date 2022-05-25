
module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        secondary: '#0891b2'
      },
      borderWidth: {
        DEFAULT: '1px',
      },
      borderColor: {
        DEFAULT: ' rgb(107 114 128 / 0.15)',
      },
    },
    animation: {
      slider: 'slider 20s ease-in-out infinite',
    },
    keyframes: {
      slider: {
        '0%': { transform: 'translateX(0)' },
        '50%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0)' },
      },
    },
  },
  plugins: []
}
