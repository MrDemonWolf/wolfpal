export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',

  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: process.env.IP || '127.0.0.1', // default: localhost
  },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.SITE_TITLE || 'WolfPal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.SITE_DESCRIPTION ||
          'A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: false,

  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/filters' },
    { src: '~/plugins/percentageCal' },
    { src: '~/plugins/is-empty' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  // components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/color-mode-module
    '@nuxtjs/color-mode',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          regular: ['faMoon'],
          solid: [
            'faCaretDown',
            'faPlus',
            'faTrash',
            'faSun',
            'faCheck',
            'faSkull',
            'faCog',
            'faLock',
            'faUnlock',
            'faMapMarkerAlt',
            'faCalendar',
          ],
          brands: ['faGoogle', 'faTwitter', 'faGithub'],
        },
      },
    ],
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: [100, 300, 400, 500, 700, 900],
          Montserrat: [100, 300, 400, 500, 700, 900],
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://pwa.nuxtjs.org/
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/svg',
    // Doc: https://github.com/shakee93/vue-toasted
    '@nuxtjs/toast',
    'nuxt-user-agent',
    'portal-vue/nuxt',
    '@nuxtjs/dayjs',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: { proxy: true },
  proxy: {
    '/api/': {
      target: process.env.API_URI || 'http://localhost:8080',
      pathRewrite: {
        '^/api/': '/',
      },
    },
  },

  /*
   ** Auth configuration
   */
  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          maxAge: 1000 * 60 * 5, //  5 mins
          type: 'Bearer',
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh_token',
          maxAge: 1000 * 60 * 60 * 24 * 14, // Two Weeks
        },
        user: {
          property: 'user',
          autoFetch: true,
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          refresh: { url: '/api/auth/refresh', method: 'post' },
          user: { url: '/api/account', method: 'get' },
          logout: { url: '/api/auth/logout', method: 'post' },
        },
        // autoLogout: false
      },
    },
  },

  /*
   ** dayjs configuration
   */
  dayjs: {
    plugins: ['localizedFormat'],
  },

  /*
   ** Toast configuration
   */
  toast: {
    position: 'top-right',
    duration: 6500,
  },

  /*
   ** Color mode configuration
   */
  colorMode: {
    classSuffix: '',
  },

  /*
   ** Runtime configuration
   */
  publicRuntimeConfig: {
    title: process.env.SITE_TITLE || 'WolfPal',
    description:
      process.env.SITE_DESCRIPTION ||
      'A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals.',
    copyright: process.env.COPYRIGHT || 'WolfPal',
    copyrightLink:
      process.env.COPYRIGHT_LINK || 'https://www.mrdemonwolf.github.io/wolfpal',
    registration: process.env.REGISTRATION || true,
    landing: {
      description:
        process.env.SITE_DESCRIPTION ||
        'A wolf to guide you to your end goals by helping keep you on track weely, bi-weekly or even monthly and yearly goals.',
    },
  },

  /**
   * purgeCSS configuration
   */
  purgeCSS: {
    whitelist: ['dark'],
  },

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
