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
