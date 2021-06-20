<template>
  <div class="home-body" >
    <carousel />
    <the-support-area></the-support-area>
    <div class="container-fluid">
      <h2>Latest news</h2>
      <product-list></product-list>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel";
import TheSupportArea from "../components/SupportArea.vue";
import ProductList from "../components/ProductList.vue";

export default {
  components: {
    Carousel,
    TheSupportArea,
    ProductList,
  },
};
</script>

<style scoped>
* {
  background-color: rgb(255, 255, 255);
}

.container-fluid ,
.home-body {
  background-color: #F2F2F2; 
}


.container-fluid > h2 {
  font-size: 2rem;
  margin-top: 1rem;
  text-align: center;
  background-color: #F2F2F2;
}
</style>
