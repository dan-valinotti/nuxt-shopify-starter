import type { Plugin } from '@nuxt/types';
import { setLoading, setLineItems } from './utils';
import { UPDATE_CART_ITEMS, FETCH_CART_ITEMS } from '~/apollo';
import type {
  FetchCartData,
  FetchCartLineItem,
  UpdateCartData,
} from '~/apollo/types';
import { CustomAttribute, CartLineItem } from '~/types/shopify';

/**
 * Extend built-in Context type with items being written to the context
 */
declare module '@nuxt/types' {
  interface Context {
    checkoutId: string;
  }
}

// Additional Types
type FilteredLineItem = {
  variantId: string;
  quantity: number;
  customAttributes: CustomAttribute[];
};
type FilteredCustomAttribute = {
  key: string;
  value: string;
};

// Plugin function: add selected item to cart
export const addToCart: Plugin = (context) => {
  const { app, store } = context;
  const apolloClient = context.app.apolloProvider.clients.defaultClient;
  const checkoutId: string =
    context.checkoutId ||
    app.$cookies.get(process.env.SHOPIFY_CHECKOUT_ID_COOKIE);

  if (checkoutId) {
    setLoading(context, true);
    return apolloClient
      .query({
        query: FETCH_CART_ITEMS,
        variables: {
          checkoutId,
        },
      })
      .then(({ data }: FetchCartData) => {
        // Transform existing line items from Shopify into proper
        // input for update line items mutation, push current item to array
        const lineItems = data.node.lineItems.edges.map(
          (item: FetchCartLineItem) => ({
            variantId: item.node.variant.id,
            quantity: item.node.quantity,
            customAttributes: item.node.customAttributes.map(
              (attr: FilteredCustomAttribute) => ({
                key: attr.key,
                value: attr.value,
              })
            ),
          })
        );
        // Get selected product's variant ID
        const productData = store.getters['pdp/getProductData'];
        const productVariantId = productData.variants.edges[0].node.id;

        const existingIndex = lineItems.findIndex(
          (item: FilteredLineItem) => item.variantId === productVariantId
        );

        if (existingIndex === -1) {
          lineItems.push({
            variantId: productVariantId,
            quantity: 1,
            customAttributes: [],
          });
        } else {
          lineItems[existingIndex].quantity++;
        }

        // Update cart line items in Shopify
        apolloClient
          .mutate({
            mutation: UPDATE_CART_ITEMS,
            variables: {
              checkoutId,
              lineItems,
            },
          })
          .then(({ data }: UpdateCartData) => {
            const checkoutData = data.checkoutLineItemsReplace.checkout;
            const newLineItems: CartLineItem[] = checkoutData.lineItems.edges.map(
              (item: FetchCartLineItem): CartLineItem => ({
                ...item.node,
              })
            );
            const totalPrice = checkoutData.totalPriceV2.amount;
            const totalQuantity = checkoutData.lineItems.edges.reduce(
              (acc: number, cur: FetchCartLineItem) => acc + cur.node.quantity,
              0
            );
            setLineItems(context, newLineItems, totalPrice, totalQuantity);
            // handleAlert(
            //   context,
            //   'Success!',
            //   'Product added to cart. Redirecting...',
            //   'success'
            // );
            setLoading(context, false);
            // Redirect to cart page after 2.5s
            // setTimeout(() => {
            //   context.app.router.push({
            //     path: '/cart',
            //   });
            // }, 2500);
            return true;
            // Catch error in update cart items mutation
          })
          .catch((err: Error) => {
            setLoading(context, false);
            console.log(err);
            // handleAlert(
            //   context,
            //   'Something went wrong...',
            //   err.message,
            //   'error'
            // );
            return false;
          });
        // Catch error in fetch cart items request
      })
      .catch((err: Error) => {
        console.log(err);
        setLoading(context, false);
        // handleAlert(context, 'Something went wrong...', err.message, 'error');
        return false;
      });
  }
};
