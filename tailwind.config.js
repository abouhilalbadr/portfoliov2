module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#141c3a',
      gray: '#E6ECF8',
      mainColor: '#1431AE',
			secondColor: '#141c3a',
    },
    container: {
      center: true,
      default: '1rem',
      sm: '2rem',
      lg: '3rem',
      xl: '4rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
