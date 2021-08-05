module.exports = {
  // mode:'jit',
  // purge: [".src/**/*.js", "./src/**/*.html"],
  purge: [
    './*/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false,
  theme: {
    screens: {
      lg: "1080px",
    },
    container: {
      center: true,
      lg: "1060",
      padding: {
        DEFAULT: "16px",
        lg: "10px",
      },
    },
    extend: {
      spacing: {
        '123':'66rem',
        '42':'42rem'
      }
    }
  }
};
