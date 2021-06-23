module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      outline: {
        blue: '2px solid #0000ff',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
