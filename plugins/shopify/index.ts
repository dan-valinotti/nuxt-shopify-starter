import type { Plugin } from '@nuxt/types';
import { addToCart } from './add-to-cart';

type ShopifyPlugin = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  addToCart: Function;
};

declare module '@nuxt/types' {
  interface Context {
    $shopify: ShopifyPlugin;
  }
}

/**
 * Globally accessible Shopify plugin ($shopify)
 */
const shopifyPlugin: Plugin = (context, inject) => {
  // Define module functions
  const shopify = {
    // getLineItems: () => getLineItems(apolloClient, store, context),
    // removeFromCart: (variantId) => removeFromCart(context, variantId),
    // updateCart: (quantityMap) => updateCart(context, quantityMap),
    addToCart: () => addToCart(context, inject),
  };

  inject('shopify', shopify);
  context.$shopify = shopify;
};

export default shopifyPlugin;
