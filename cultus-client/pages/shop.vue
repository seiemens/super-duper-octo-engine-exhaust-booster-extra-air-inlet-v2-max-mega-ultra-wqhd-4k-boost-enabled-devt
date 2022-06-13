<template>
  <div class="bg">
    <Header />
    <div v-if="state == 0">
      <Products />
    </div>
  </div>
</template>

<style scoped src="~/assets/styles/shop.css">
</style>

<script>
export default {
  data() {
    return {
      state: 0,
    };
  },
  name: "IndexPage",
};
</script>
