module.exports = {
  // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: '#0C2A60',
        yellow: '#F4AF41',
        red: '#EB562B',
        blue: '#31AEF2',
        lightgrey: '#F7F8FA',
        grey: '#E7EBF4',
        darkgrey: '#A7B2C6',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      fontSize: {
        'tiny': '12px',
        'sm': '13px',
        'base': '15px',
        'lg': '17px',
        'xl': '20px',
      },
      width: {
        'almost-100': 'calc(100vw - 40px)',
      },
      spacing: {
        '100-px': '100px'
      },
      screens: {
        xl: '1320px',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
