import type {
  CustomAttribute,
  ProductImage,
  VariantPrice,
} from '~/types/shopify';

/**
 * FETCH_CART_LINE_ITEMS types
 */
export type FetchCartLineItemVariant = {
  __typename: string;
  id: string;
  title: string;
  image: ProductImage;
  priceV2: VariantPrice;
};
export type FetchCartLineItem = {
  node: {
    __typename: string;
    id: string;
    title: string;
    quantity: number;
    customAttributes: CustomAttribute[];
    variant: FetchCartLineItemVariant;
  };
};
export type FetchCartLineItems = {
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  edges: FetchCartLineItem[];
};
export type FetchCartNode = {
  id: string;
  webUrl: string;
  subtotalPriceV2: VariantPrice;
  totalTaxV2: VariantPrice;
  totalPriceV2: VariantPrice;
  lineItems: FetchCartLineItems;
};
export type FetchCartData = {
  data: {
    node: FetchCartNode;
  };
};

/**
 * UPDATE_CART_ITEMS types
 */
export type UserError = {
  code: string | number;
  field: string;
  message: string;
};
export type UpdateCartData = {
  data: {
    checkoutLineItemsReplace: {
      checkout: FetchCartNode;
    };
    userErrors: UserError[];
  };
};
