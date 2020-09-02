<template>
  <div class="container">
    <div class="w-full h-full flex flex-col justify-start items-start pt-16">
      <product-topper :title="productData.title" :price="parseFloat(productData.priceRange.minVariantPrice.amount).toFixed(2)"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductTopper from '~/components/pdp/ProductTopper';

export default {
  middleware: ['pdp-get-info'],
  components: {
    ProductTopper,
  },
  computed: {
    ...mapState({
      productData: (state) => state.pdp.productData,
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  justify-content: flex-start;
  align-items: flex-start;
}
</style>