import { MutationTree } from 'vuex';
import { ProductsState } from '~/types/products.store';
import type { ProductData } from '~/types/shopify';

const mutations: MutationTree<ProductsState> = {
  setAllProducts: (state, products: ProductData[]) =>
    (state.allProducts = products),
};

export default mutations;
