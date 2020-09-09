import { GetterTree } from 'vuex';
import { ProductData, PDPState } from '~/types/pdp.store';

const getters: GetterTree<PDPState, PDPState> = {
  getProductData: (state: PDPState): ProductData => state.productData,
};

export default getters;
