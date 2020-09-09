import type { ProductData } from '~/types/shopify';

export interface PDPState {
  productData: ProductData;
  loadingState: boolean;
}
