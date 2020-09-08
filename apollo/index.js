/* eslint-disable no-tabs */
import gql from 'graphql-tag';

export const FETCH_ALL_PRODUCTS = gql`
  query AllProducts {
    products(first: 25) {
      edges {
        node {
          id
          title
          handle
          variants(first: 3) {
            edges {
              node {
                id
              }
            }
          }
          images(first: 3) {
            edges {
              node {
                id
                originalSrc
                altText
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

// Retrieves detailed info for provided product handle.
export const FETCH_PRODUCT_DETAILS = gql`
  query ProductDetailQuery($handle: String!) {
    productByHandle(handle: $handle) {
      id
      variants(first: 1) {
        edges {
          node {
            id
            title
          }
        }
      }
      handle
      title
      description
      images(first: 1) {
        edges {
          node {
            id
            transformedSrc
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
        }
      }
    }
  }
`;

// Fetch lineItems in customer's cart.
// Variables: checkoutId (String)
export const FETCH_CART_ITEMS = gql`
  fragment checkout on Checkout {
    id
    webUrl
    subtotalPriceV2 {
      amount
      currencyCode
    }
    totalTaxV2 {
      amount
      currencyCode
    }
    totalPriceV2 {
      amount
      currencyCode
    }
    lineItems(first: 250) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          title
          customAttributes {
            key
            value
          }
          variant {
            id
            title
            image {
              altText
              transformedSrc
            }
            priceV2 {
              amount
              currencyCode
            }
          }
          quantity
        }
      }
    }
  }
  query CheckoutQuery($checkoutId: ID!) {
    node(id: $checkoutId) {
      ... on Checkout {
        ...checkout
      }
    }
  }
`;

// Create new Checkout (cart) instance in Shopify API.
// Variables: input (optional, can use empty object)
//  'input' properties: allowPartialAddresses, customAttributes, email,
//  lineItems, note, presentmentCurrencyCode, shippingAddress
export const CREATE_CART = gql`
  mutation checkoutCreate($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        id
      }
      checkoutUserErrors {
        code
        field
        message
      }
    }
  }
`;

export const GET_CHECKOUT_COMPLETED = gql`
  fragment checkoutCompleted on Checkout {
    id
    webUrl
    completedAt
  }
  query CheckoutQuery($checkoutId: ID!) {
    node(id: $checkoutId) {
      ... on Checkout {
        ...checkoutCompleted
      }
    }
  }
`;

// Replaces lineItems in provided checkout with lineItems in variables.
// Variables: checkoutId (string), lineItems (array[CheckoutLineItemInput])
export const UPDATE_CART_ITEMS = gql`
  mutation checkoutLineItemsReplace(
    $checkoutId: ID!
    $lineItems: [CheckoutLineItemInput!]!
  ) {
    checkoutLineItemsReplace(checkoutId: $checkoutId, lineItems: $lineItems) {
      checkout {
        id
        webUrl
        subtotalPriceV2 {
          amount
          currencyCode
        }
        totalTaxV2 {
          amount
          currencyCode
        }
        totalPriceV2 {
          amount
          currencyCode
        }
        lineItems(first: 250) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            node {
              id
              title
              variant {
                id
                title
                image {
                  transformedSrc
                }
                priceV2 {
                  amount
                  currencyCode
                }
              }
              quantity
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;
