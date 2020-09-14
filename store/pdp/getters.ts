import { GetterTree } from 'vuex';
import { PDPState } from '~/types/pdp.store';
import type { ProductData } from '~/types/shopify';

const getters: GetterTree<PDPState, PDPState> = {
  getProductData: (state: PDPState): ProductData => state.productData,
};

export default getters;
