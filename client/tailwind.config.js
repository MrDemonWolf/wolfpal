/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    // compatible with @nuxtjs/color-mode
    darkSelector: '.dark-mode',
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
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive',
    ],
    backgroundImage: ['responsive', 'dark'],
    gradientColorStops: ['responsive', 'dark'],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive',
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive'],
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('@tailwindcss/ui')({
      // See https://tailwindui.com/documentation#configuring-sidebar-breakpoints
      // Turning this off for now. This may be buggy as it makes the hero sections like the "with wide angled image on right" look funky
      // https://tailwindui.com/components/marketing/sections/heroes
      // layout: 'sidebar',
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.h-80': {
          height: '80vh',
        },
        '.h-84': {
          height: '84vh',
        },
        '.h-85': {
          height: '85vh',
        },
        '.h-90': {
          height: '90vh',
        },
        '.text-7xl': {
          'font-size': '5rem',
        },
        '.text-8xl': {
          'font-size': '6rem',
        },
        '.text-9xl': {
          'font-size': '7rem',
        },
      }

      addUtilities(newUtilities)
    }),
  ],

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
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
