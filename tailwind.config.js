module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'landing-tot': "url('/src/assets/images/landings/tot.png')",
       'landing-forgive': "url('/src/assets/images/landings/forgive.jpg')",
       'landing-lynk': "url('/src/assets/images/landings/lynk.jpg')",
       'landing-manic': "url('/src/assets/images/landings/manic.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
