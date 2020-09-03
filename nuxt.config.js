require('dotenv').config();

module.exports = {
  globalName: 'Nuxt Shopify Starter',
  mode: 'universal',
  telemetry: false,
  components: ['~/components/global'],
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        crossorigin: 'anonymous',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Docs: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Docs: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Docs: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    'nuxt-buefy',
  ],
  // nuxt-buefy module config
  // Docs: https://github.com/buefy/nuxt-buefy
  // Buefy docs: https://buefy.org/documentation/start
  buefy: {},
  // @nuxtjs/apollo module config
  // Docs: https://github.com/nuxt-community/apollo-module
  apollo: {
    includeNodeModules: true,
    clientConfigs: {
      default: {
        httpEndpoint: process.env.SHOPIFY_HTTP_ENDPOINT,
        browserHttpEndpoint: process.env.SHOPIFY_BROWSER_ENDPOINT,
        httpLinkOptions: {
          uri: `${process.env.SHOPIFY_HTTP_ENDPOINT}${process.env.SHOPIFY_BROWSER_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/graphql',
            'X-Shopify-Storefront-Access-Token':
              process.env.SHOPIFY_ACCESS_TOKEN,
          },
        },
      },
    },
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
