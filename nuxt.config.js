require('dotenv').config();

module.exports = {
  mode: 'universal',
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
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo'
  ],
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
              process.env.SHOPIFY_ACCESS_TOKEN
          }
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
