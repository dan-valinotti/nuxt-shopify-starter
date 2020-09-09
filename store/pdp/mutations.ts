import { MutationTree } from 'vuex';
import { PDPState, ProductData } from '~/types/pdp.store';

const mutations: MutationTree<PDPState> = {
  setProductData: (state, data: ProductData) => (state.productData = data),
  setLoadingState: (state, isLoading: boolean) =>
    (state.loadingState = isLoading),
};

export default mutations;
