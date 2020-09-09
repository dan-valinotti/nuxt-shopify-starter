import { PDPState, ProductData } from '~/types/pdp.store';

const state = (): PDPState => ({
  productData: {} as ProductData,
  loadingState: false as boolean,
});

export default state;
