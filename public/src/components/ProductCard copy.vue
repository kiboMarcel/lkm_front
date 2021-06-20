<template>
  <div class=" col-md-3 col-sm-4 col-6  col-xl-3 product">
    <div class="card">
      <div class="badge">Hot</div>
      <router-link :to="{name : 'ProductDetail', params: {prodId: product._id} }">
       <div class="product-tumb">
          <img :src="imageurl+product.image"  class="card-img-top" alt="..." />
        </div>

        <div class="product-details">
          <span class="product-catagory">{{product.category}}</span>
          <h4><a href="">{{product.name}} </a></h4>
         
          <div class="rating">
            <rating :value="product.rating"
            :text=" ` ${product.numReviews} Reviews`"
            color="#f8e825" ></rating>
          </div>
          <div class="product-bottom-details">
            <div class="product-price"><small>$96.00</small>{{product.price}}</div>
            <div class="product-links">
              <a href=""><i class="fa fa-heart"></i></a>
              <a href=""><i class="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      </router-link>
      
    </div>
  </div>
</template>

<script>
import Rating from "./Rating.vue";
import apiUrl from '../variables.js';

export default {
  components:{
    Rating,

  },
  props: {
    /* name: { required: true},
    image: { required: true},
    category: { required: true},
    desc: { required: true }, */
    product: Object
  },
  data() {
    return {
      imageurl: apiUrl
    };
  },
  computed: {
    /* ...mapGetters(['loadProduct']) */
  },
};
</script>

<style scoped>
.product {
  margin: 0;
  padding: 0 0.5rem;
}
.card {
  margin: 1rem 0;
  box-shadow: 0.5px 0px 10px rgba(0, 0, 0, 0.068);
  position: relative;
}

.badge {
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: red;
  color: #fff;
  padding: 3px 10px;
  border-radius: 0rem;
}



.product-tumb {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f0f0;
}

.product-details {
  padding: 0.5rem;
}

.product-catagory {
  display: block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
}

.product-details h4 a {
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
}

.product-details h4 a:hover {
  color: #fbb72c;
}

.product-details p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
  width: 50;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-bottom-details {
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.rating{
  margin : 0.3rem 0;
}

.product-bottom-details div {
  float: left;
  width: 50%;
}

.product-price {
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
}

.product-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

.product-links {
  text-align: right;
}

.product-links a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
}

.product-links a:hover {
  color: #fbb72c;
}

a {
  text-decoration: none;
  color: black;
}

.card-text {
  font-size: 0.9rem;
}
</style>
