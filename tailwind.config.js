module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '1/3': '38%',
      '3/4': '75%',
      'full': '100%',
     },
     borderWidth:{
      '1': '1px',
     },
     minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    //  textColor:{
    //   "main-red": '#980000',
    //   "main-blue": '#024181'
    //  },
    //  backgroundColor:{
    //    "main-blue": '#104C89',
    //    "main-red": '#AC2E2E',
    //    "main-red-bold": '#980000'
    //  }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
