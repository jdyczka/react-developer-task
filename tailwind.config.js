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
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
