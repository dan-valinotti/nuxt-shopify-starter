import { MutationTree } from 'vuex';

export const state = () => ({
  lineItems: [] as string[],
  totalPrice: 0 as number,
  totalQuantity: 0 as number,
  webUrl: '' as string,
  sidebarOpen: false as boolean,
});

export type RootState = ReturnType<typeof state>;

export const mutations: MutationTree<RootState> = {
  setLineItems: (state, items: string[]) => (state.lineItems = items),
  setTotalPrice: (state, price: number) => (state.totalPrice = price),
  setTotalQuantity: (state, qty: number) => (state.totalQuantity = qty),
  setWebUrl: (state, webUrl: string) => (state.webUrl = webUrl),
  setSidebarOpen: (state, isOpen: boolean) => (state.sidebarOpen = isOpen),
};
