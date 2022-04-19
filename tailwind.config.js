module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '500px'},
      // => @media (min-width: 576px) { ... }

      'md': {'max': '7680px'},
      // => @media (min-width: 960px) { ... }

      'lg': '769px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
}