import { MutationTree } from 'vuex';
import type { CartState } from './types';

const mutations: MutationTree<CartState> = {
  setLineItems: (state, items: string[]) => (state.lineItems = items),
  setTotalPrice: (state, price: number) => (state.totalPrice = price),
  setTotalQuantity: (state, qty: number) => (state.totalQuantity = qty),
  setWebUrl: (state, webUrl: string) => (state.webUrl = webUrl),
  setSidebarOpen: (state, isOpen: boolean) => (state.sidebarOpen = isOpen),
};

export default mutations;
