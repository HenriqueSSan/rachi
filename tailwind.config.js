module.exports = {
  content: ['index.html', './src/**/*.{js,ts,tsx}'],
  plugins: [],
  theme: {
    screens: {
      ns: '769px',
      md: '1025px',

      'max-md': { max: '1024px' },
    },

    zIndex: {
      header: 100,
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
