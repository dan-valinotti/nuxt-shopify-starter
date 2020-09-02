export const state = () => ({
  productData: {}
});

export const mutations = {
  setProductData: (state, data) => state.productData = data,
}