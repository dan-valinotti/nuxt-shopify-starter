<template>
  <footer class="footer-nav py-16 w-full h-full">
    <div class="content has-text-centered w-full h-full">
      <p>
        <strong>Nuxt Shopify Store</strong>
      </p>
      <nuxt-link to="/">
        Home
      </nuxt-link> /
      <nuxt-link to="/products">
        Products
      </nuxt-link>
    </div>
  </footer>
</template>

<style lang="scss">
.footer-nav {
  display: flex;
  background-color: #7957d5;

  * {
    color: #fafafa;
  }
}
</style>
