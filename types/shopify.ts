/**
 * Shopify Product Variant types
 */
export type ProductVariant = {
  node: {
    __typename: string;
    id: string;
    title: string;
  };
};
export type ProductVariants = {
  edges: ProductVariant[];
};

/**
 * Shopify product price types
 */
export type VariantPrice = {
  __typename: string;
  amount: string;
};
export type PriceRange = {
  minVariantPrice: VariantPrice;
  maxVariantPrice: VariantPrice;
};

/**
 * Shopify product image types
 */
export type ProductImage = {
  node: {
    id: string;
    transformedSrc: string;
  };
};
export type ProductImages = {
  edges: ProductImage[];
};

/**
 * Product data type used in Vuex store defs
 */
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
