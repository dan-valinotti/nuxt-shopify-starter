<template>
  <div class="container">
    <div class="w-full h-full flex flex-col justify-start items-start pt-16 px-4">
      <div class="w-full my-8 flex justify-start">
        <h1 class="text-4xl font-bold">
          Products
        </h1>
      </div>
      <div class="w-full flex justify-start items-start">
        <products-grid :products="allProducts" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductsGrid from '~/components/products/ProductsGrid';

export default {
  middleware: ['products-get'],
  components: {
    ProductsGrid,
  },
  computed: {
    ...mapState({
      allProducts: state =>
        state.products.allProducts.map(node => ({ ...node })),
    }),
  },
};
</script>

<style lang="scss" scoped>
.container {
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
