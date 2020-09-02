export const state = () => ({
  allProducts: [],
});

export const mutations = {
  setAllProducts: (state, products) => state.allProducts = products,
}