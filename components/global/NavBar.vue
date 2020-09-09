<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <span class="button is-primary">Nuxt Shopify Store</span>
      </b-navbar-item>
    </template>
    <template slot="start">
      <nuxt-link to="/" class="navbar-item">Home</nuxt-link>
      <nuxt-link to="/products" class="navbar-item">Products</nuxt-link>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <button class="button is-primary">
            <strong>Sign up</strong>
          </button>
          <button class="button is-light">Log in</button>
          <nav-bar-icon-button
            icon-name="shopping-cart"
            @click="onClickCartButton"
          />
          <nav-bar-icon-button
            icon-name="user-circle"
            @click="onClickCartButton"
          />
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      cartSidebarOpen: (state) => state.cart.sidebarOpen,
    }),
  },
  methods: {
    ...mapMutations({
      setCartSidebarOpen: 'cart/setSidebarOpen',
    }),
    onClickCartButton() {
      this.setCartSidebarOpen(true);
    },
    onCloseCartSidebar() {
      this.setCartSidebarOpen(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.buttons {
  flex-wrap: nowrap;
}
</style>
