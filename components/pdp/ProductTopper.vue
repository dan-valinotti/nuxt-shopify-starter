<template>
  <div class="w-full my-8 flex justify-start items-center">
    <div class="flex flex-col justify-start items-start">
      <h1 class="text-4xl font-bold">
        {{ title }}
      </h1>
      <span class="text-right text-gray-600">
        ${{ price }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '0.00'
    },
    description: {
      type: String,
      default: '',
    }
  }
}
</script>