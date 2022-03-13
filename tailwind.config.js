module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'landing-tot': "url('/src/assets/images/landings/tot.png')",
       'landing-forgive': "url('/src/assets/images/landings/forgive.jpg')",
       'landing-lynk': "url('/src/assets/images/landings/lynk.jpg')",
       'landing-manic': "url('/src/assets/images/landings/manic.jpeg')",
       'project-tot': "url('/src/assets/images/ToT/tot_project.png')",
       'project-forgive': "url('/src/assets/images/forgive/forgive_project_list.jpeg')",
       'project-lynk': "url('/src/assets/images/lynk/lynk_project.png')",
       'project-manic': "url('/src/assets/images/posters/manic/manic_project.png')",
      })
    },
    colors: {
      'footer-grey': '#C4C4C4',
      'footer-icon-grey': '#636363',
      'footer-icon-grey-hover': '#2C2828',
      'image-subtext': '#5A5A5A',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
