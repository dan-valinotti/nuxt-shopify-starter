export const state = () => ({
  lineItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  webUrl: '',
  sidebarOpen: false,
});

export const mutations = {
  setLineItems: (state, items) => (state.lineItems = items),
  setTotalPrice: (state, price) => (state.totalPrice = price),
  setTotalQuantity: (state, qty) => (state.totalQuantity = qty),
  setWebUrl: (state, webUrl) => (state.webUrl = webUrl),
  setSidebarOpen: (state, isOpen) => (state.sidebarOpen = isOpen),
};
