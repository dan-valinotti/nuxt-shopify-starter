import * as queries from '~/apollo';

export default async function(context) {
  const { app, store, error, route } = context;
  // Define apollo client
  const {
    apolloProvider: {
      clients: { defaultClient },
    },
  } = app;

  try {
    const { data } = await defaultClient.query({
      query: queries.FETCH_PRODUCT_DETAILS,
      variables: {
        handle: route.params.handle,
      }
    });

    if (data) {
      const productData = data.productByHandle;
      store.commit('pdp/setProductData', productData);
      context.productData = productData;
    }
  } catch (err) {
    error({
      statusCode: 500,
      message: err.message
    })
  }
}