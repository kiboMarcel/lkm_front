<template>
  <div class="row">
    <product-card v-for="item in products" :key="item._id" :product="item">
    </product-card>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    ProductCard,
  },

  data() {
    return {
      /*  products: products, */
    };
  },
  provide() {
    return { prods: this.products };
  },

  mounted() {
    this.$store.dispatch("productStore/loadProducts");
    //console.log(this.$store)
    
  },
  computed: {
    ...mapState('productStore', ['products']),
  },
};
</script>

<style scoped>
.row {
  background-color: #f2f2f2;
  margin: 0 0.5rem 100px 0.5rem;
}
</style>
