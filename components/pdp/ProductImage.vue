<template>
  <div class="w-full h-full flex justify-start items-start">
    <img class="image p-8" :src="imageSrc">
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: {
      type: String,
      default: ''
    }
  }
};
</script>
