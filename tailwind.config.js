module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '519px'},
      // => @media (max-width: 500px) { ... }

      'tab': {'min': '520px', 'max': '699px'},
      // => @media (max-width: 700px) { ... }

      'med': {'min': '700px', 'max': '900px'},
      // => @media (min-width: 700px) { ... }

      'lg': '901px',
      // => @media (min-width: 1021px) { ... }
    },
  },
  plugins: [],
}