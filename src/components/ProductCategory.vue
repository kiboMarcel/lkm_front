<template>
  <div class="row">
    <prod-card
      v-for="item in productCategory"
      :key="item._id"
      :product="item"
    >
    </prod-card>
  </div>
</template>


<script>
import ProdCard from "./ProductCard.vue";
import { mapState } from "vuex";

export default {
  components: {
    ProdCard,
  },

  props: {
    category: {tpype: String, required: true}
  },
 
  data() {
   
  },

  mounted() {
    this.$store.dispatch("productStore/loadProductCategory", this.category);
  },

  computed: {
    ...mapState("productStore", ["productCategory"]),
  },
};
</script>

<style>
</style>