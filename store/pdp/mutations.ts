import { MutationTree } from 'vuex';
import { PDPState } from '~/types/pdp.store';
import type { ProductData } from '~/types/shopify';

const mutations: MutationTree<PDPState> = {
  setProductData: (state, data: ProductData) => (state.productData = data),
  setLoadingState: (state, isLoading: boolean) =>
    (state.loadingState = isLoading),
};

export default mutations;
