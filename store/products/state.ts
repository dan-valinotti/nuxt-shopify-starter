import { ProductsState } from '~/types/products.store';
import type { ProductData } from '~/types/shopify';

const state = (): ProductsState => ({
  allProducts: [] as ProductData[],
});

export default state;
