<template>
  <div class="products">
    <Product
      v-for="prod in products"
      :key="prod.id"
      :name="prod.name"
      :price="prod.price"
    />
  </div>
</template>

<style scoped src="~/assets/styles/products.css"></style>


<script>
export default {
  data() {
    return {
      products: [
        { name: "hello", price: 5.44, id: 1 },
        { name: "hello", price: 5.44, id: 1 },
        { name: "hello", price: 5.44, id: 1 },
        { name: "hello", price: 5.44, id: 1 },
        { name: "hello", price: 5.44, id: 1 },
        { name: "hello", price: 5.44, id: 1 },
        { name: "hello", price: 5.44, id: 1 },
        { name: "hello", price: 5.44, id: 1 },
      ],
    };
  },
};
</script>
