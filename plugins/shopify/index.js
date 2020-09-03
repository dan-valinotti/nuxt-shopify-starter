import { addToCart } from './add-to-cart';

/**
 * Globally accessible Shopify plugin ($shopify)
 */
export default (context, inject) => {
  // Define module functions
  const shopify = {
    // getLineItems: () => getLineItems(apolloClient, store, context),
    // removeFromCart: (variantId) => removeFromCart(context, variantId),
    // updateCart: (quantityMap) => updateCart(context, quantityMap),
    addToCart: () => addToCart(context),
  };

  inject('shopify', shopify);
  context.$shopify = shopify;
};
