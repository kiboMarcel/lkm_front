<template>
  <div  v-if="orderDetail.user" class="container mt-5">
   
     <div class="list-group">
      <h2>Commande N {{ orderDetail._id }}</h2>
      <h2>Envoyer à</h2>
      <p>
        Nom: <strong> {{ orderDetail.user.name}} </strong>
      </p>
      <p>
        email: <strong> {{ orderDetail.user.email }}</strong>
      </p>
      <p>
        addresse:<strong> {{ orderDetail.ShippingAddress.address }}</strong>
      </p>
      <p>
        ville: <strong> {{ orderDetail.ShippingAddress.city }}</strong>
      </p>

      <div v-if="orderDetail.isDelivred" class="alert-success">
        <p>
          <strong>{{ orderDetail.deliveredAt }}</strong>
        </p>
      </div>
      <div v-else class="alert-warning">
        <p><strong>En attente de livraison</strong></p>
      </div>
    </div>
     <div class="list-group">
      <h2>Methode de payement</h2>
      <p>{{ paymentMethod }}</p>

      <div v-if="orderDetail.ispaid" class="alert-success">
        <p> <strong>{{ orderDetail.paidAt }}</strong> </p>
      </div>
      <div v-else class="alert-danger">
        <p><strong>En attente de paiment</strong> </p>
      </div>
    </div>
    <div class="list-group">
      <h2>Liste des produits</h2>
      <ul>
        <li class="list-item" v-for="item in cartProducts" :key="item._id">
          <em> {{ item.name }} </em>
          <span>{{ item.price * item.quantity }} CFA</span>
        </li>
      </ul>
      <div class="string"></div>
      <ul>
        <li class="list-item">
          <em> Sous Total </em>
          <span> {{ sum }} CFA</span>
        </li>
        <li class="list-item">
          <em> livraison </em>
          <span> {{ shippingPrice }} CFA</span>
        </li>
      </ul>
    </div> 

  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["orderId"],

  data() {
    return {
      cartProducts: this.$store.state.cartStore.cartItems,
      cartAddress: this.$store.state.cartStore.shippingAddress,
      paymentMethod: this.$store.state.cartStore.paymentMethod,
      orderd: this.$store.state.orderStore, 
      shippingPrice: 0,
      taxPrice: 0,
    };
  },

  mounted() {
    console.log(this.orderId)
    this.$store.dispatch("orderStore/OrderDetail", this.orderId);
  },

  computed: {
     sum() {
       let sum = 0;
    for (let i in this.cartProducts) {
      let subT =
        parseFloat(this.cartProducts[i].price) *
        parseFloat(this.cartProducts[i].quantity);
      sum += subT;
    }
    return sum;
    },
    ...mapState("orderStore", ["orderDetail"]),
  },
};
</script>

<style scoped>
.container {
  width: 75%;
}

.list-group {
  border-bottom: 1px solid #c0bfbf;
  margin-bottom: 12px;
}

p {
  margin: 0;
  padding: 6px 0;
}

ul {
  list-style: none;
  margin: 0 0 15px 0;
  padding: 0;
}

ul li {
  padding: 0;
  margin: 0 0 15px 0;
  font-weight: 500;
  display: block;
  line-height: 1.3;
}

.list-item::after {
  display: block;
  clear: both;
  content: "";
}

ul li em {
  font-style: normal;
  float: left;
  width: 70%;
  font-weight: 400;
}

ul li span {
  float: right;
  text-align: right;
  width: 30%;
  font-weight: 700;
}

.string {
  width: 50%;
  border-top: 1px solid #c0bfbf;
  margin: auto;
}

.total {
  font-size: 1.125rem;
  font-weight: 700;
  border-bottom: none;
  color: red;
}

span {
  float: right;
  margin-bottom: 15px;
}

.confirm-btn {
  margin-bottom: 20px;
}

button {
  width: 100%;
}
</style>