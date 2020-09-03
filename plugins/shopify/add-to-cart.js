import { UPDATE_CART_ITEMS, FETCH_CART_ITEMS } from '~/apollo';
import { setLoading, handleAlert, setLineItems } from './utils';

// Plugin function: add selected item to cart
export const addToCart = (context) => {
  const apolloClient = context.app.apolloProvider.clients.defaultClient;
  const store = context.store;
  const checkoutId = context.checkoutId || store.getters['cart/getCheckoutId'];

  if (checkoutId) {
    return apolloClient
      .query({
        query: FETCH_CART_ITEMS,
        variables: {
          checkoutId: context.checkoutId || store.getters['cart/getCheckoutId'],
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
        // Get selected product's variant ID
        const { color, variant, orderType } = store.getters[
          'selectedProduct/getSelectedProduct'
        ];
        const productIds = store.getters['productData/getProductIds'];
        const selectedVariantId = productIds[variant][color][orderType];

        const existingIndex = lineItems.findIndex(
          (item) => item.variantId === selectedVariantId
        );

        if (existingIndex === -1) {
          lineItems.push({
            variantId: selectedVariantId,
            quantity: 1,
            customAttributes:
              orderType === 'subscription'
                ? [
                    {
                      key: 'order_interval_unit',
                      value: 'month',
                    },
                    {
                      key: 'order_interval_frequency',
                      value: '3',
                    },
                    {
                      key: 'charge_interval_frequency',
                      value: '3',
                    },
                  ]
                : [],
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
            setLineItems(
              context,
              data.checkoutLineItemsReplace.checkout.lineItems.edges.map(
                ({ node }) => ({
                  ...node,
                })
              )
            );
            handleAlert(
              context,
              'Success!',
              'Product added to cart. Redirecting...',
              'success'
            );
            setLoading(context, false);
            // Redirect to cart page after 2.5s
            setTimeout(() => {
              context.app.router.push({
                path: '/cart',
              });
            }, 2500);
            return true;
            // Catch error in update cart items mutation
          })
          .catch((err) => {
            setLoading(context, false);
            handleAlert(
              context,
              'Something went wrong...',
              err.message,
              'error'
            );
            return false;
          });
        // Catch error in fetch cart items request
      })
      .catch((err) => {
        setLoading(context, false);
        handleAlert(context, 'Something went wrong...', err.message, 'error');
        return false;
      });
  }
};
