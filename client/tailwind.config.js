/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const tailwindcssBorderStyles = require('tailwindcss-border-styles')
const tailwindcssForms = require('@tailwindcss/forms')
const tailwindcssTypography = require('@tailwindcss/typography')
const tailwindcssAspectRatio = require('@tailwindcss/aspect-ratio')
const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  // compatible with @nuxtjs/color-mode
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#EDF1F9',
          200: '#D1DBF0',
          300: '#B6C5E7',
          400: '#7F9AD4',
          500: '#486EC2',
          600: '#4163AF',
          700: '#2B4274',
          800: '#203257',
          900: '#16213A',
        },
        brand: {
          googlePlus: '#DD4B39',
          twitter: '#1DA1F2',
          github: '#333333',
        },
      },
      height: {
        80: '80vh',
        84: '84vh',
        85: '85vh',
        90: '90vh',
        95: '95vh',
      },
      borderWidth: {
        6: '6px',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
    borderStyles: {
      styles: true, // defaults to false
      colors: true, // defaults to false
    },
  },
  variants: {},
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.-animate-delay-1': {
          'animation-delay': '-0.32s',
        },
        '.-animate-delay-2': {
          'animation-delay': '-0.16s',
        },
      }
      addUtilities(newUtilities)
    }),
    tailwindcssBorderStyles(),
    tailwindcssForms,
    tailwindcssTypography,
    tailwindcssAspectRatio,
  ],
}
