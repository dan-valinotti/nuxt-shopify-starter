![Nuxt Shopify Starter](https://github.com/dan-valinotti/nuxt-shopify-starter/blob/master/static/img/nuxt-shopify-starter.png)

# Nuxt Shopify Starter Project

A website template that provides functionality and UX elements for developing a Shopify web-store. The basic functions it provides are:

✅ Fetching product information

✅ Displaying products in grid

✅ Fetching product details (title, desc, images etc.)

✅ Adding products to the cart

✅ Storing a generated Shopify checkout ID in cookies, with expiration

❌ Removing / changing quantity of items in the cart

❌ User login / registration

❌ Cart sidebar/page with shortcuts to checkout in Shopify

❌ Automated test suites

## Build Setup

1. Environment configuration

   Create .env file at root of project and provide the following values:

   ```
   BASE_URL=http://localhost:3000
   SHOPIFY_HTTP_ENDPOINT=https://your-store-name.myshopify.com
   SHOPIFY_BROWSER_ENDPOINT=/api/graphql
   SHOPIFY_ACCESS_TOKEN="your-shopify-storefront-access-token"
   SHOPIFY_CHECKOUT_ID_COOKIE=shopify_checkout_id
   SHOPIFY_CHECKOUT_EXPIRATION_COOKIE=shopify_checkout_expires_at
   ```

2. Dependency installation

   ```bash
   # install dependencies
   $ yarn install

   # serve with hot reload at localhost:3000
   $ yarn dev

   # build for production and launch server
   $ yarn build
   $ yarn start
   ```

## Directory Structure

- `/apollo`: Configuration files related to Apollo GraphQL client (queries, mutations, etc.)
- `/assets`: Project assets (images, videos) to be processed by Webpack
- `/components`: Vue single-file components
- `/layouts`: Nuxt.js base page layouts
- `/middleware`: Functions that are run prior to page component render
- `/pages`: Vue component files used for Nuxt.js file-based routing
- `/server`: Express.js server executed at runtime
- `/static`: Static files served to user's browser
- `/store`: Vuex store definitions
- `/test`: Automated test suites

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
