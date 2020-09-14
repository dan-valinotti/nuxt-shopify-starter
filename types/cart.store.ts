import type { CartLineItem } from './shopify';

export interface CartState {
  lineItems: CartLineItem[];
  totalPrice: number;
  totalQuantity: number;
  webUrl: string;
  sidebarOpen: boolean;
}
