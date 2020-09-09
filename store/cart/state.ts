import type { CartState } from './types';

const state = (): CartState => ({
  lineItems: [] as string[],
  totalPrice: 0 as number,
  totalQuantity: 0 as number,
  webUrl: '' as string,
  sidebarOpen: false as boolean,
});

export default state;
