/** @type {import('tailwindcss').Config} */
const { createThemes } = require('tw-colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    createThemes({
      good: {
        cardStart: 'hsla(198, 58%, 69%, .125)',
        cardEnd: 'hsla(198, 58%, 69%, .25)',
        cardBorder: 'hsla(227, 35%, 80%, .25)',
        inputBorder: 'hsla(227, 35%, 80%, .75)',
        input: 'hsla(227, 35%, 80%, .15)',
        text: 'white',
        subtext: 'hsla(227, 75%, 80%, 1)'
      },
      moderate: {
        cardStart: 'hsla(176, 60%, 88%, .125)',
        cardEnd: 'hsla(176, 60%, 88%, .25)',
        cardBorder: 'hsla(198, 55%, 95%, .25)',
        inputBorder: 'hsla(198, 55%, 95%, .75)',
        input: 'hsla(198, 55%, 95%, .15)',
        text: 'white',
        subtext: 'hsla(198, 75%, 80%, 1)'
      },
      someUnhealthy: {
        cardStart: 'hsla(158, 50%, 80%, .125)',
        cardEnd: 'hsla(158, 50%, 80%, .25)',
        cardBorder: 'hsla(184, 32%, 92%, .25)',
        inputBorder: 'hsla(184, 32%, 92%, .75)',
        input: 'hsla(184, 32%, 92%, .15)',
        text: 'white',
        subtext: 'hsla(184, 75%, 80%, 1)'
      },
      unhealthy: {
        cardStart: 'hsla(83, 60%, 82%, .125)',
        cardEnd: 'hsla(83, 60%, 82%, .25)',
        cardBorder: 'hsla(58, 77%, 90%, .25)',
        inputBorder: 'hsla(58, 77%, 90%, .75)',
        input: 'hsla(58, 77%, 90%, .15)',
        text: 'white',
        subtext: 'hsla(58, 75%, 80%, 1)'
      },
      veryUnhealthy: {
        cardStart: 'hsla(68, 52%, 86%, .125)',
        cardEnd: 'hsla(68, 52%, 86%, .25)',
        cardBorder: 'hsla(43, 79%, 93%, .25)',
        inputBorder: 'hsla(43, 79%, 93%, .75)',
        input: 'hsla(43, 79%, 93%, .15)',
        text: 'white',
        subtext: 'hsla(43, 75%, 80%, 1)'
      },
      hazardous: {
        cardStart: 'hsla(42, 69%, 66%, .125)',
        cardEnd: 'hsla(42, 69%, 66%, .25)',
        cardBorder: 'hsla(10, 87%, 75%, .25)',
        inputBorder: 'hsla(10, 87%, 75%, .75)',
        input: 'hsla(10, 87%, 75%, .15)',
        text: 'white',
        subtext: 'hsla(10, 75%, 80%, 1)'
      }
    })
  ]
};
