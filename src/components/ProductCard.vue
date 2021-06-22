<template>
  <div class="col-6 col-md-4 col-xl-3">
    <div class="grid_item">
      <figure>
        <router-link
          :to="{ name: 'ProductDetail', params: { prodId: product._id } }"
        >
          <img class="img-fluid lazy" :src="imageurl + product.image" alt="" />
        </router-link>
      </figure>
      <div class="rating">
        <rating
          :value="product.rating"
          :text="` ${product.numReviews} Reviews`"
          color="#212529"
        ></rating>
      </div>
      <router-link
        :to="{ name: 'ProductDetail', params: { prodId: product._id } }"
      >
        <h3>{{ product.name }}</h3>
      </router-link>
      <div class="price_box">
        <span class="new_price">{{ product.price }} FCFA</span>
        <!-- <span class="old_price">$60.00</span> -->
      </div>
     <!--  <ul>
        <li>
          <a
            href="#0"
            class="tooltip-1"
            data-toggle="tooltip"
            data-placement="left"
            title="Add to cart"
            ><i class="fas fa-shopping-cart"></i><span>Add to cart</span></a
          >
        </li>
      </ul> -->
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
.small-gutters {
  margin-right: -5px !important;
  margin-left: -5px !important;
}
.small-gutters > [class*="col-"] {
  padding-right: 5px !important;
  padding-left: 5px !important;
}
.grid_item {
  margin-bottom: 25px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.grid_item:hover ul li {
  display: block;
}
.grid_item figure:hover {
  -webkit-box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
  box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.25);
}
.grid_item figure:hover img {
  -webkit-transition: opacity 0.5s ease,
    -webkit-transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
  transition: opacity 0.5s ease,
    -webkit-transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
  transition: opacity 0.5s ease, transform 1.5s cubic-bezier(0, 0, 0.44, 1.18);
  transition: opacity 0.5s ease, transform 1.5s cubic-bezier(0, 0, 0.44, 1.18),
    -webkit-transform 2s cubic-bezier(0, 0, 0.44, 1.18);
}
.grid_item figure:hover img:nth-child(2) {
  visibility: visible;
  opacity: 1;
  transform: scale(1.05);
}

figure{
  overflow: hidden;
}

.img-fluid{
  object-fit: cover;
  transition: transform .5s ease;
}

.img-fluid:hover{
  transform: scale(1.5);
}


.grid_item ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 18px;
  font-size: 1.125rem;
  line-height: 1;
  z-index: 2;
}
@media (max-width: 991px) {
  .grid_item ul {
    position: relative;
    left: 0px;
    right: inherit;
    margin-bottom: 10px;
    top: 0;
  }
}
.grid_item ul li {
  margin-bottom: 5px;
  animation: fadeIn 0.1s ease;
  animation-fill-mode: both;
  display: none;
  position: relative;
}
@media (max-width: 991px) {
  .grid_item ul li {
    animation: none;
    display: inline-block !important;
  }
}
.grid_item ul li a {
  background-color: #fff;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  border-radius: 0;
  width: 36px;
  height: 36px;
  color: #444;
  text-align: center;
  line-height: 40px;
  display: block;
  margin: 0;
  padding: 0;
}
.grid_item ul li a:hover {
  background-color: #004dda;
}
.grid_item ul li a:hover i {
  color: #fff;
}
.grid_item ul li a span {
  display: none;
}
@media (max-width: 991px) {
  .grid_item ul li {
    display: block;
  }
}
.grid_item ul li:nth-child(1) {
  animation-delay: 0.05s;
}
.grid_item ul li:nth-child(2) {
  animation-delay: 0.1s;
}
.grid_item ul li:nth-child(3) {
  animation-delay: 0.15s;
}
.grid_item a h3 {
  font-size: 14px;
  font-size: 0.995rem;
  margin: 3px 0 0 0;
  color: #444;
  font-weight: bold;
  display: inline-block;
}
.grid_item a h3:hover {
  color: #004dda;
}
.grid_item .price_box {
  margin-bottom: 5px;
}
.grid_item .price_box .old_price {
  font-size: 14px;
  font-size: 0.875rem;
}
.grid_item .rating {
  display: block;
  margin-bottom: 0;
}

.rating {
  color: #ccc;
  margin-bottom: 15px;
  display: inline-block;
}
.rating i.voted {
  color: #fec348;
}
.rating i:before {
  margin: 2px;
}
.rating em a {
  display: inline-block;
  color: #999;
  margin-left: 10px;
  text-decoration: underline;
  display: inline-block;
}
.rating em a:hover {
  color: #004dda;
}

/* @-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    -ms-transform: translateX(10px);
    -o-transform: translateX(10px);
    transform: translateX(10px);
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
  }
} */
.new_price {
  color: #004dda;
  font-weight: 500;
  font-size: 16px;
  font-size: 1rem;
}

.old_price {
  color: #999;
  text-decoration: line-through;
  display: inline-block;
  white-space: nowrap;
  font-weight: 500;
  font-size: 16px;
  font-size: 1rem;
}

.tooltip {
  line-height: 1.3;
  font-size: 11px;
  font-size: 0.6875rem;
  font-weight: 600;
}

.tooltip.show {
  opacity: 0.8;
}

li i {
  color: #444;
}
</style>
