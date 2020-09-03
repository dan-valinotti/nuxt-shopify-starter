// Set lineItems value in Vuex state
export function setLineItems(context, lineItems, totalPrice, totalQuantity) {
  const store = context.store;
  store.commit('cart/setLineItems', lineItems);
  store.commit('cart/setTotalPrice', totalPrice);
  // Update cart total qty badge
  store.commit('cart/setTotalQuantity', totalQuantity);
}
// Set cart total quantity (for nav icon badge)
export function setCartTotalQty(context, qty) {
  const store = context.store;
  store.commit('cart/setTotalQty', qty);
}

// Set loading value (popup, pdp) in Vuex state
export function setLoading(context, isLoading) {
  const store = context.store;
  store.commit('pdp/setLoadingState', isLoading);
  // store.commit('popup/setVisible', isLoading);
}
// Open success/error alert popup, hide after 2s
export function handleAlert(context, title, message, level) {
  const store = context.store;
  store.commit('error/setError', {
    status: true,
    title,
    message,
    level,
  });

  setTimeout(() => {
    store.commit('error/setError', {
      status: false,
    });
  }, 2000);
}
