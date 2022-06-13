<template>
  <div class="prod">
    <img src="~/static/toilet.png" alt="" class="img" />
    <span class="name">{{ name }}</span>
    <span class="price">CHF {{ price }}</span>
  </div>
</template>

<style scoped src="~/assets/styles/product.css">
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>