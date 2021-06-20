<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8 col">
          <h2>My Shopping Cart</h2>
          <table class=" table table-striped">
            <thead>
              <tr>
                <th>product</th>
                <th>price</th>
                <th>qty</th>
                <th>subtotal</th>
                <th>option</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in $store.state.cartStore.cartItems"
                :key="item._id"
              >
                <td>
                  <div class="thumb-cart">
                    <img :src="imageurl + item.image" alt="" />
                    <span class="item-cart"> {{ item.name }}</span>
                  </div>
                </td>
                <td>
                  <strong> {{ item.price }}</strong>
                </td>
                <td>
                  <div class="item-qty ">
                    <input type="text" :value="item.quantity" />
                  </div>
                </td>
                <td>{{ item.price * item.quantity }}</td>
                <td>
                  <div class="delete">
                    <a @click="removeItem(item._id)" class="search_icon"
                      ><i class="fas fa-trash"></i
                    ></a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-4 col">
          <h2>Produit({{ $store.state.cartStore.cartCount }})</h2>
          <div class="resume">
            <div class="total">
              <h4>Total</h4>
            </div>
            <div class="prix">
              <h5>{{ sum }}</h5>
            </div>
          </div>
          <div class="checkout">
            <button
              @click="checkout"
              class="btn"
              :class="!checkCartITem ? 'disabled' : ''"
            >
              Passer la Commande
            </button>
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
      products: this.$store.state.cartStore.cartItems,
      imageurl: apiUrl,
    };
  },

  methods: {
    removeItem(item) {
      this.$store.commit("cartStore/removeCartItem", item);
    },
    checkout() {
      if (!this.checkCartITem) {
        return;
      } else {
        this.$router.push(`/shipping/`);
      }
    },
  },

 /*  mounted() {
    //this.$store.dispatch("LoadCart", this.$route.params.id);
    //this.cartItems = localStorage.getItem("cartItems");
    //console.log(this.cartItems);
   
  }, */

  computed: {
    /* getCartItems() {
      return this.$store.getters.loadCartItem;
    }, */
    checkCartITem() {
      let confirm;
      if (this.$store.state.cartStore.cartItems.length != 0) {
        confirm = true;
      } else {
        confirm = false;
      }
      return confirm;
    },

    sum() {
       let sum = 0;
    for (let i in this.products) {
      let subT =
        parseFloat(this.products[i].price) *
        parseFloat(this.products[i].quantity);
      sum += subT;
    }
    return sum;
    },
  },
};
</script>

<style scoped>
.item-cart {
  display: flex;
  align-items: center;
}

.thumb-cart {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 1098px) {
  .thumb-cart span {
    display: none;
  }
}

thead th {
  text-align: center;
}

td {
  vertical-align: middle;
}

div h2 {
  text-align: center;
  color: #4f4f4f;
  margin: 25px 0;
}

.item-qty {
  margin: 50%;
  display: inline;
}

.item-qty input {
  width: 30%;
  text-align: center;
}

.resume {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 1px solid #9e9e9e;
  margin-bottom: 30px;
}

img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin: 0 15px;
}

.delete {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.delete:hover {
  cursor: pointer;
}

.checkout {
  display: flex;
  justify-content: center;
}

.checkout button {
  background-color: black;
  color: white;
  text-align: center;
}

/* --------------------*/
</style>
