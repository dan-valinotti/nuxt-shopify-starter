<template>
  <button class="button is-light" :class="buttonClass" @click="onClick">
    <font-awesome-icon :icon="iconName" :class="iconClass" />
  </button>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    iconName: {
      type: String,
      default: 'shopping-cart',
    },
    buttonClass: {
      type: String,
      default: '',
    },
    iconClass: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>
