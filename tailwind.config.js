module.exports = {
  content: ['index.html', './src/**/*.{js,ts,tsx}'],
  plugins: [],
  theme: {
    screens: {
      ns: '769px',
      md: '1025px',
      lg: '1441px',
      'lg-ns': '1281px',
      xl: '1920px',

      'max-md': { max: '1024px' },
      'max-xl': { max: '1920px' },
    },

    zIndex: {
      header: 100,
    },

    fontSize: {
      'sm-100': '14px',
      'sm-200': '16px',
      'sm-300': '18px',
      'sm-400': '20px',
      'md-100': '24px',
      'md-200': '26px',
      'lg-100': '32px',
      'lg-200': '40px',
      'lg-300': '48px',
      'lg-400': '50px',
    },

    fontFamily: {
      primary: ['Inter', 'Arial', 'Helvetica', 'sans-serif'],
      secondary: ['Sora', 'Arial', 'Helvetica', 'sans-serif'],
    },

    colors: {
      '@primary': {
        DEFAULT: '#0f9afe',
      },

      white: {
        DEFAULT: '#ffffff',
        200: '#EFF8FF',
      },

      gray: {
        DEFAULT: '#6e7275',
        '@light': '#dbdbdb',
        200: '#293145',
      },

      window: {
        '@dark': {
          color: '',
          text: '',
        },

        '@light': {
          'temp-color': '#EFF8FF',
          color: '#EFF8FF',
          text: '#6e7275',
        },
      },
    },

    extend: {},
  },
};
