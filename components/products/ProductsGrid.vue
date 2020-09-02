<template>
  <div class="products-grid">
    <div class="w-full flex flex-col justify-center items-center">
      <div v-if="products.length > 0" class="grid grid-flow-row grid-cols-5 grid-rows-5 gap-4 w-full h-full">
        <div v-for="(product, index) in products" :key="index" class="product">
          <products-grid-item
            :thumbnail="product.images.edges[0].node"
            :title="product.title"
            :price="product.priceRange.minVariantPrice.amount"
            :handle="product.handle"
          />
        </div>
      </div>
      <div v-else>
        <h2>Whoops! Looks like there isn't anything here.</h2>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsGridItem from './ProductsGridItem';

export default {
  components: {
    ProductsGridItem
  },
  props: {
    products: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style lang="scss">
.products-grid {
  width: 100%;
}
</style>