<template>
  <div class="w-full h-full pr-4">
    <p class="text-gray-700 text-base text-left">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
};
</script>
