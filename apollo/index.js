/* eslint-disable no-tabs */
import gql from 'graphql-tag';

export const READ_CACHED_PRODUCTS = gql`
  {
    products @client {
      rechargeable {
        blue {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
        teal {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
        purple {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
      battery {
        blue {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
        teal {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
        purple {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
      refillHeads {
        blue {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
        teal {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
        purple {
          buyOnce {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
          subscription {
            # Can this be another object?
            id
            title
            description
            variants {
              edges {
                node {
                  id
                }
              }
            }
            images {
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
  }
`;

export const READ_SELECTED_PRODUCT = gql`
  {
    selectedProduct @client {
      handle
      color
      orderType
    }
  }
`;

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

// Retrieve a list of all hum branded products.
export const FETCH_HUM_PRODUCTS = gql`
  query HumCollectionProducts {
    collections(first: 1, query: "title:hum") {
      edges {
        node {
          title
          id
          products(first: 30) {
            edges {
              node {
                id
                title
                handle
                description
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
    checkoutLineItemsReplace(
      checkoutId: $checkoutId
      lineItems: $lineItems
    ) {
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

export const READ_CACHED_LINE_ITEMS = gql`
  {
    lineItems @client {
      edges {
        node {
          id
          title
          customAttributes {
            key
            value
          }
          quantity
          variant {
            id
          }
        }
      }
    }
  }
`;

export const READ_CACHED_CHECKOUTID = gql`
  {
    checkoutId @client
  }
`;

export const READ_CACHED_CHECKOUT_URL = gql`
  {
    checkoutUrl @client
  }
`;

export const READ_CACHED_CHECKOUT_TOTAL = gql`
  {
    prices @client {
      subtotalPrice {
        amount
        currencyCode
      }
      totalTax {
        amount
        currencyCode
      }
      totalPrice {
        amount
        currencyCode
      }
    }
  }
`;

export const READ_CACHED_CART_TOTAL_QTY = gql`
  {
    cartTotalQty @client
  }
`;
