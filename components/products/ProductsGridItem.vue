<template>
  <nuxt-link :to="`/product/${handle}`">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="thumbnail.originalSrc" :alt="thumbnail.altText">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">
              {{ title }}
            </p>
          </div>
        </div>

        <div class="content">
          <span class="text-lg text-green-600">
            ${{ parseFloat(price).toFixed(2) }}
          </span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    thumbnail: {
      type: Object,
      default: () => {},
    },
    title: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '0.00',
    },
    handle: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss">
.card {
  position: relative;
  transform: scale(1);
  transform-origin: center;
  transition: transform 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    cursor: pointer;
    transform: scale(1.05)
  }
}
</style>