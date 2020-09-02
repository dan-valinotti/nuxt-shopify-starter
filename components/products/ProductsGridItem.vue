<template>
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
        <span class="text-red-300">
          ${{ parseFloat(price).toFixed(2) }}
        </span>
      </div>
    </div>
  </div>
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
    }
  }
}
</script>