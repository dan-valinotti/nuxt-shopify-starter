import * as queries from '~/apollo';

export default async function(context) {
  const { app, store, error } = context;
  // Define apollo client
  const {
    apolloProvider: {
      clients: { defaultClient },
    },
  } = app;

  try {
    const { data } = await defaultClient.query({
      query: queries.FETCH_ALL_PRODUCTS,
    });

    if (data) {
      const allProducts = data.products.edges.map((item) => ({ ...item.node }));
      store.commit('products/setAllProducts', allProducts);
      context.allProducts = allProducts;
    }
  } catch (err) {
    error({
      statusCode: 500,
      message: err.message
    })
  }
}