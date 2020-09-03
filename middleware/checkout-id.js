import { CREATE_CART } from '~/apollo';

/**
 * Middleware function that checks browser cookies for a hum checkout ID,
 * if none is found, creates a new Checkout instance in Shopify's API and
 * sets cookies for the returned checkoutId and expiration date (30 days)
 *
 * @param {*} context
 *  Nuxt.js App Context
 */
export default async (context) => {
  const { app, error } = context;
  // Define apollo client
  const {
    apolloProvider: {
      clients: { defaultClient },
    },
  } = app;
  const checkoutIdCookie = process.env.SHOPIFY_CHECKOUT_ID_COOKIE;
  const checkoutExpirationCookie =
    process.env.SHOPIFY_CHECKOUT_EXPIRATION_COOKIE;

  try {
    // Get browser cookies for checkoutId and expiration date
    const checkoutId = app.$cookies.get(checkoutIdCookie);
    const expiration = new Date(app.$cookies.get(checkoutExpirationCookie));

    if (!checkoutId || checkoutId === '' || !expiration) {
      // Create new Checkout instance in Shopify's API
      const { data } = await defaultClient.mutate({
        mutation: CREATE_CART,
        variables: {
          // CheckoutCreateInput
          // https://shopify.dev/docs/storefront-api/reference/mutation/input-object/checkoutcreateinput
          input: {},
        },
      });

      if (data) {
        const newCheckoutId = data.checkoutCreate.checkout.id;
        const now = Date.now();
        const expiresAt = new Date(now + 2592000000); // Expires in 30 days

        // Set browser cookies
        app.$cookies.set(checkoutIdCookie, newCheckoutId);
        app.$cookies.set(checkoutExpirationCookie, expiresAt);

        // Set context value for checkoutId
        context.checkoutId = newCheckoutId;
        context.checkoutExpiration = expiresAt;
      } else {
        context.checkoutId = undefined;
        context.checkoutExpiration = undefined;
      }
    } else {
      context.checkoutId = checkoutId;
      context.checkoutExpiration = expiration;
    }
  } catch (err) {
    context.checkoutId = undefined;
    context.checkoutExpiration = undefined;
    error({
      statusCode: 500,
      message: err.message,
    });
  }
};
