<template>
  <div class="container mx-auto px-4  ">
    <div class="w-full h-full flex justify-start items-start pt-16">
      <product-image :image-src="productData.images.edges[0].node.transformedSrc" />
      <div class="flex flex-col justify-start items-start w-full h-full">
        <product-topper :title="productData.title" :price="parseFloat(productData.priceRange.minVariantPrice.amount).toFixed(2)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductTopper from '~/components/pdp/ProductTopper';
import ProductImage from '~/components/pdp/ProductImage';

export default {
  middleware: ['pdp-get-info'],
  components: {
    ProductTopper,
    ProductImage
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