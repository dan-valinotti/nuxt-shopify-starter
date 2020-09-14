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
  currencyCode?: string;
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

/**
 * Cart line item, item customAttribute in Vuex store
 */
export type CustomAttribute = {
  key: string;
  value: string;
};
export type CartLineItemVariant = {
  __typename: string;
  id: string;
  title: string;
  image: ProductImage;
  priceV2: VariantPrice;
};
export type CartLineItem = {
  __typename: string;
  id: string;
  title: string;
  quantity: number;
  variant: CartLineItemVariant;
  customAttributes: CustomAttribute[];
};
