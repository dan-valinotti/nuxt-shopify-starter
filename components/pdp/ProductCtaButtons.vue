<template>
  <div class="flex justify-start items-center my-8">
    <b-button class="is-primary" :loading="isLoading" @click="onClick">Add to Cart</b-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      isLoading: (state) => state.pdp.loadingState,
    }),
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>