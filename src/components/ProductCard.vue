<template>
  <div class=" col-md-6 col-lg-3">
    <div class="card">
      <router-link
        :to="{ name: 'ProductDetail', params: { prodId: product._id } }"
      >
        <div class="img">
          <img :src="imageurl + product.image" class="card-img-top" alt=".." />
        </div>
        <div class="card-body">
          <p class="card-text">
            <a href=""> {{ product.name }}</a>
          </p>
          <h4>{{ product.price }} FCFA</h4>
          <div class="rating">
            <rating
              :value="product.rating"
              :text="` ${product.numReviews} Reviews`"
              color="#f8e825"
            ></rating>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Rating from "./Rating.vue";
import apiUrl from "../variables.js";

export default {
  components: {
    Rating,
  },
  props: {
    product: Object,
  },
  data() {
    return {
      imageurl: apiUrl,
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.img {
  height: 95%;
  margin: auto;
}

img {
  height: 286px;
  object-fit: cover;
}

.card {
  margin-bottom: 20px;
  border-radius: 10px;
}

.card:hover {
  box-shadow: 0 1px 10px rgb(0 0 0 / 12%);
}
</style>
