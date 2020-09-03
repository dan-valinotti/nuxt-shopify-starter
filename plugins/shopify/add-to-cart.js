import { UPDATE_CART_ITEMS, FETCH_CART_ITEMS } from '~/apollo';
import { setLoading, handleAlert, setLineItems } from './utils';

// Plugin function: add selected item to cart
export const addToCart = (context) => {
  const { app, store } = context;
  const apolloClient = context.app.apolloProvider.clients.defaultClient;
  const checkoutId =
    context.checkoutId ||
    app.$cookies.get(process.env.SHOPIFY_CHECKOUT_ID_COOKIE);
  console.log(checkoutId);

  if (checkoutId) {
    setLoading(context, true);
    return apolloClient
      .query({
        query: FETCH_CART_ITEMS,
        variables: {
          checkoutId: checkoutId,
        },
      })
      .then(({ data }) => {
        // Transform existing line items from Shopify into proper
        // input for update line items mutation, push current item to array
        const lineItems = data.node.lineItems.edges.map((item) => ({
          variantId: item.node.variant.id,
          quantity: item.node.quantity,
          customAttributes: item.node.customAttributes.map((attr) => ({
            key: attr.key,
            value: attr.value,
          })),
        }));
        console.log(lineItems);
        // Get selected product's variant ID
        const productData = store.getters['pdp/getProductData'];
        console.log(productData);
        const productVariantId = productData.variants.edges[0].node.id;

        const existingIndex = lineItems.findIndex(
          (item) => item.variantId === productVariantId
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
              checkoutId: checkoutId,
              lineItems,
            },
          })
          .then(({ data }) => {
            const checkoutData = data.checkoutLineItemsReplace.checkout;
            const newLineItems = checkoutData.lineItems.edges.map((item) => ({
              ...item.node,
            }));
            const totalPrice = checkoutData.totalPriceV2.amount;
            const totalQuantity = checkoutData.lineItems.edges.reduce(
              (acc, cur) => acc + cur.quantity,
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
          .catch((err) => {
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
      .catch((err) => {
        console.log(err);
        setLoading(context, false);
        // handleAlert(context, 'Something went wrong...', err.message, 'error');
        return false;
      });
  }
};
