module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    screens: {
      sm: '0px',
      ns: '769px',
      md: '1025px',
      lg: '1440px',
      xl: '1921px',
      xxl: '2500px',
    },

    colors: {
      common: {
        white: {
          DEFAULT: '#FFFFFF',
          200: '#EFF8FF',
          400: '#EFF8FF',
        },
      },

      blue: {
        DEFAULT: '#0F9AFE',
      },

      gray: {
        DEFAULT: '#6E7275',
        200: '#293145',
        light: '#DBDBDB',
      },
    },

    fontFamily: {
      primary: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      secondary: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },

    extend: {},
  },
  plugins: [],
};
