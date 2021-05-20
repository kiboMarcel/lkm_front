<template>
  <div>
    <h3>My Cart</h3>
    <div class="container-fluid">
      <div class="row">
      <div class="col-md-8 col">
        <div class="card cart_items">
          <div v-for="item in $store.state.cartStore.cartItems" :key="item._id">
            <div class="card-body">
              <div class="image">
                <img :src="imageurl + item.image" alt="" />
              </div>
              <div class="info">
                <h4>{{ item.name }}</h4>
                <h5>Prix :{{ item.price }}</h5>
                <h5>Qtite: {{ item.quantity }}</h5>
              </div>
              <div class="action">
                <a @click="removeItem(item._id)" class="search_icon"><i class="fas fa-trash"></i></a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
       <div class="col-md-4 col">
        <div class="card ">
          <h3>objet total</h3>
          <div>

          </div>
         
        </div>
      </div>
     
    </div>
    </div>
    
  </div>
</template>

<script>
import apiUrl from "../variables.js";
export default {
  props: {
    id: String,
    name: String,
    price: Number,
  },

  data() {
    return {
      imageurl: apiUrl,
      cartItems: {
        product_id: this.id,
        product_name: this.name,
        product_price: this.product_price,
        product_quantity: 1,
      },
    };
  },

  methods: {
    removeItem(item){
      this.$store.commit('cartStore/removeCartItem', item);
      
    }
  }

  /* mounted() {
    this.$store.dispatch("LoadCart", this.$route.params.id);
    this.cartItems = localStorage.getItem("cartItems");
    console.log(this.cartItems);
  }, */

  /* computed: {
    getCartItems() {
      return this.$store.getters.loadCartItem;
    },
  }, */
};
</script>

<style scoped>
div h3 {
  text-align: center;
  color: #4f4f4f;
  margin: 25px 0;
}

.card{
box-shadow: 1px 1px 15px 2px rgb(0 0 0 / 8%);
}

.cart_items {
  margin-bottom: 5rem;
  
}


.card-body {
  display: flex;
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
}

.image {
  display: flex;
  width: 200px;
  height: 200px;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: auto;
}

.info {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  
}

.action {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

hr {
  margin: 1rem 1rem 0 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
