import type {
  ProductVariants,
  ProductImages,
  PriceRange,
} from '~/types/shopify';

export type ProductData = {
  __typename: string;
  id: string;
  title: string;
  description: string;
  handle: string;
  images: ProductImages;
  priceRange: PriceRange;
  variants: ProductVariants;
};

export interface PDPState {
  productData: ProductData;
  loadingState: boolean;
}
