import type { CartState } from '~/types/cart.store';
import type { CartLineItem } from '~/types/shopify';

const state = (): CartState => ({
  lineItems: [] as CartLineItem[],
  totalPrice: 0 as number,
  totalQuantity: 0 as number,
  webUrl: '' as string,
  sidebarOpen: false as boolean,
});

export default state;
