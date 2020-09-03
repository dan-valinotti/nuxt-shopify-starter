export const state = () => ({
  productData: {},
  loadingState: false,
});

export const mutations = {
  setProductData: (state, data) => (state.productData = data),
  setLoadingState: (state, isLoading) => (state.loadingState = isLoading),
};
