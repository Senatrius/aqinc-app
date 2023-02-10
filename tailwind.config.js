/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '450px'
      },
      fontFamily: {
        josefin: ['var(--josefin)']
      }
    }
  },
  plugins: [
    createThemes({
      good: {
        cardStart: 'hsla(198, 58%, 49%, .125)',
        cardEnd: 'hsla(198, 58%, 49%, .25)',
        forecastStart: 'hsla(198, 58%, 49%, .0001)',
        forecastEnd: 'hsla(198, 58%, 49%, .5)',
        cardBorder: 'hsla(227, 35%, 80%, .25)',
        inputBorder: 'hsla(227, 35%, 80%, .75)',
        input: 'hsla(227, 35%, 80%, .15)',
        text: 'white',
        subtext: 'hsla(247, 100%, 95%, 1)'
      },
      moderate: {
        cardStart: 'hsla(176, 60%, 75%, .125)',
        cardEnd: 'hsla(176, 60%, 75%, .25)',
        forecastStart: 'hsla(176, 60%, 75%, .0001)',
        forecastEnd: 'hsla(176, 60%, 75%, .5)',
        cardBorder: 'hsla(198, 55%, 95%, .25)',
        inputBorder: 'hsla(198, 55%, 95%, .75)',
        input: 'hsla(198, 55%, 95%, .15)',
        text: 'white',
        subtext: 'hsla(198, 80%, 95%, 1)'
      },
      someUnhealthy: {
        cardStart: 'hsla(158, 50%, 68%, .125)',
        cardEnd: 'hsla(158, 50%, 68%, .25)',
        forecastStart: 'hsla(158, 50%, 68%, .0001)',
        forecastEnd: 'hsla(158, 50%, 68%, .5)',
        cardBorder: 'hsla(184, 32%, 92%, .25)',
        inputBorder: 'hsla(184, 32%, 92%, .75)',
        input: 'hsla(184, 32%, 92%, .15)',
        text: 'white',
        subtext: 'hsla(154, 82%, 87%, 1)'
      },
      unhealthy: {
        cardStart: 'hsla(83, 60%, 72%, .125)',
        cardEnd: 'hsla(83, 60%, 72%, .25)',
        forecastStart: 'hsla(83, 60%, 72%, .0001)',
        forecastEnd: 'hsla(83, 60%, 72%, .5)',
        cardBorder: 'hsla(58, 77%, 90%, .25)',
        inputBorder: 'hsla(58, 77%, 90%, .75)',
        input: 'hsla(58, 77%, 90%, .15)',
        text: 'white',
        subtext: 'hsla(60, 80%, 85%, 1)'
      },
      veryUnhealthy: {
        cardStart: 'hsla(68, 52%, 86%, .125)',
        cardEnd: 'hsla(68, 52%, 86%, .25)',
        forecastStart: 'hsla(68, 52%, 86%, .0001)',
        forecastEnd: 'hsla(68, 52%, 86%, .5)',
        cardBorder: 'hsla(43, 79%, 93%, .25)',
        inputBorder: 'hsla(43, 79%, 93%, .75)',
        input: 'hsla(43, 79%, 93%, .15)',
        text: 'white',
        subtext: 'hsla(65, 55%, 80%, 1)'
      },
      hazardous: {
        cardStart: 'hsla(42, 69%, 66%, .125)',
        cardEnd: 'hsla(42, 69%, 66%, .25)',
        forecastStart: 'hsla(42, 69%, 66%, .0001)',
        forecastEnd: 'hsla(42, 69%, 66%, .5)',
        cardBorder: 'hsla(10, 87%, 75%, .25)',
        inputBorder: 'hsla(10, 87%, 75%, .75)',
        input: 'hsla(10, 87%, 75%, .15)',
        text: 'white',
        subtext: 'hsla(15, 85%, 80%, 1)'
      }
    })
  ]
};
