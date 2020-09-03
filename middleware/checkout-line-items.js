import { FETCH_CART_ITEMS } from '~/apollo';

/**
 * Nuxt.js Middleware function that retrieves the user's cart items
 * from the Shopify API. Only run on /cart'
 *
 * @param {*} context
 *  Nuxt.js App Context
 */
export default async (context) => {
  const { app, store, error } = context;
  const {
    apolloProvider: {
      clients: { defaultClient },
    },
  } = app;
  try {
    const checkoutId =
      context.checkoutId ||
      app.$cookies.get(process.env.SHOPIFY_CHECKOUT_ID_COOKIE);
    if (checkoutId) {
      const { data } = await defaultClient.query({
        query: FETCH_CART_ITEMS,
        variables: {
          checkoutId,
        },
      });

      if (data) {
        const totalPrice = data.node.totalPriceV2.amount;
        const lineItems = data.node.lineItems.edges.map((item) => ({
          ...item.node,
        }));
        const totalQuantity = data.node.lineItems.edges.reduce(
          (acc, cur) => acc + cur.quantity,
          0
        );

        store.commit('cart/setLineItems', lineItems);
        store.commit('cart/setTotalPrice', totalPrice);
        store.commit('cart/setTotalQuantity', totalQuantity);
        store.commit('cart/setWebUrl', data.node.webUrl);
        context.lineItems = lineItems;
      } else {
        context.lineItems = [];
        error({
          statusCode: 500,
          message: 'Failed to get data from Shopify API.',
        });
      }
    } else {
      context.lineItems = [];
      error({
        statusCode: 500,
        message: 'No checkout ID available.',
      });
    }
  } catch (err) {
    error({
      statusCode: 500,
      message: err.message,
    });
  }
};
