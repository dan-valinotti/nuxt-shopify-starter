<template>
  <div class="products-grid">
    <div class="w-full flex flex-col justify-center items-center">
      <div class="grid grid-flow-row grid-cols-5 grid-rows-5 gap-4 w-full h-full">
        <div v-for="(product, index) in products" :key="index" class="product">
          <products-grid-item
            :thumbnail="product.images.edges[0].node"
            :title="product.title"
            :price="product.priceRange.minVariantPrice.amount"
          />
        </div>
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