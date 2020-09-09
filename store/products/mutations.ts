import { MutationTree } from 'vuex';
import { ProductsState } from '~/types/products.store';
import { ProductData } from '~/types/pdp.store';

const mutations: MutationTree<ProductsState> = {
  setAllProducts: (state, products: ProductData[]) =>
    (state.allProducts = products),
};

export default mutations;
