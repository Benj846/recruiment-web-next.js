module.exports = {
  purge: ['./src/**/*.js', './src/**/*.html'],
  darkMode: false,
  theme: {
    screens: {
      lg: '1080px',
    },
    container: {
      center: true,
      lg: '1060',
      padding: {
        DEFAULT: '16px',
        lg: '10px',
      },
    },
  },
  variants: {
    extend: {},
  },
};
