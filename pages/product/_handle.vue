<template>
  <div class="container mx-auto px-4">
    <div
      class="w-full h-full flex flex-col md:flex-row justify-start items-start pt-16"
    >
      <product-image
        :image-src="productData.images.edges[0].node.transformedSrc"
      />
      <div
        class="flex flex-col justify-start items-start w-full h-full px-4 pb-8 md:px-8"
      >
        <product-topper
          :title="productData.title"
          :price="
            parseFloat(productData.priceRange.minVariantPrice.amount).toFixed(2)
          "
        />
        <product-description :text="productData.description" />
        <product-cta-buttons @click="onClickAddToCart" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ProductTopper from '~/components/pdp/ProductTopper';
import ProductImage from '~/components/pdp/ProductImage';
import ProductDescription from '~/components/pdp/ProductDescription';
import ProductCtaButtons from '~/components/pdp/ProductCtaButtons';

export default {
  middleware: ['pdp-get-info'],
  components: {
    ProductTopper,
    ProductImage,
    ProductDescription,
    ProductCtaButtons,
  },
  computed: {
    ...mapState({
      productData: (state) => state.pdp.productData,
      isLoading: (state) => state.pdp.loadingState,
    }),
  },
  methods: {
    ...mapMutations({
      setIsLoading: 'pdp/setLoadingState',
    }),
    onClickAddToCart() {
      this.$shopify.addToCart();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
