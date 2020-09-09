import { ProductsState } from '~/types/products.store';
import type { ProductData } from '~/types/pdp.store';

const state = (): ProductsState => ({
  allProducts: [] as ProductData[],
});

export default state;
