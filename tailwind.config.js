module.exports = {
  content: ['index.html', './src/**/*.{js,ts,tsx}'],
  plugins: [],
  theme: {
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
          color: '#EFF8FF',
          text: '#6e7275',
        },
      },
    },

    extend: {},
  },
  plugins: [],
};
