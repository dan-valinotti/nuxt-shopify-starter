import type { NuxtConfig } from '@nuxt/types';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const config: NuxtConfig = {
  globalName: 'Nuxt Shopify Starter',
  mode: 'universal',
  telemetry: false,
  components: ['~/components/global'],
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
  plugins: ['~/plugins/shopify/index.ts'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Docs: https://composition-api.nuxtjs.org
    '@nuxtjs/composition-api',
    // Docs: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Docs: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Docs: https://typescript.nuxtjs.org/guide/
    '@nuxt/typescript-build',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Docs: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/apollo',
    'cookie-universal-nuxt',
    'nuxt-buefy',
    'nuxt-fontawesome',
  ],
  fontawesome: {
    component: 'fa',
    imports: [
      // import whole set
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas'],
      },
    ],
  },
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
    // extend(config, ctx) {},
  },
  render: {
    bundleRenderer: {
      shouldPreload: (type) => {
        return ['script', 'style', 'font'].includes(type);
      },
    },
  },
};

export default config;
