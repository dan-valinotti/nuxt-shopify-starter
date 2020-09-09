import { PDPState } from '~/types/pdp.store';
import type { ProductData } from '~/types/shopify';

const state = (): PDPState => ({
  productData: {} as ProductData,
  loadingState: false as boolean,
});

export default state;
