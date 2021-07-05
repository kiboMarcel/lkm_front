<template>
  <div>
    <div class="list-group">
      <h2>Adresse</h2>
      <p>
        {{ cartAddress.address }}
        {{ cartAddress.city }}
        {{ cartAddress.postalCode }}
      </p>
    </div>
    <div class="list-group">
      <h2>Methode de payement</h2>
      <p>{{ paymentMethod }}</p>
    </div>
    <div class="list-group">
      <h2>Liste des produits</h2>
      <ul>
        <li class="list-item" v-for="item in cartProducts" :key="item._id">
          <em> {{ item.name }} </em>
          <span>{{  item.price * item.quantity }} CFA</span>
        </li>
      </ul>
      <div class="string"></div>
      <ul>
        <li class="list-item">
          <em> Sous Total </em>
          <span> {{sum}} CFA</span>
        </li>
        <li class="list-item">
          <em> livraison </em>
          <span> {{shippingPrice}} CFA</span>
        </li>
      </ul>
    </div>
    <div class="total">
      TOTAL
      <span>{{ sum + shippingPrice + taxPrice}} CFA</span>
    </div>
    <h2> {{order._id}} </h2>
    <div class="confirm-btn">
      <button class="btn btn-outline-info" @click="confirm" >Confirmer et Payer</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartProducts: this.$store.state.cartStore.cartItems,
      cartAddress : this.$store.state.cartStore.shippingAddress,
      paymentMethod: this.$store.state.cartStore.paymentMethod,
      shippingPrice: 0,
      taxPrice: 0,
    };
  },

  computed:{
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
    order(){
        //console.log(this.$store.getters["orderStore/order"])

        return this.$store.getters["orderStore/order"];
        
    }
  },

  methods:{

     async confirm(){
      let data =  {
        orderItems: this.cartProducts,
        shippingAddress: this.cartAddress,
        paymentMethod: this.paymentMethod,
        itemsPrice: this.sum,
        shippingPrice: this.shippingPrice,
        taxPrice: this.taxPrice,
        totalPrice: this.sum + this.shippingPrice + this.taxPrice
      }
           let id = await this.$store.dispatch('orderStore/createOrder', data)

          console.log(id)
          //console.log(this.$store.state.orderStore.marcel)
        
        
        this.$router.push(`/order/`+id,);
      //this.router.push({ path: `/order/${this.order._id}` })
     //this.router.push({ name: 'OrderDetail', params: { orderId: id  } })
    }
  }
};
</script>

<style scoped>
.list-group {
  border-bottom: 1px solid #c0bfbf;
  margin-bottom: 12px;
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

.confirm-btn{
margin-bottom: 20px;
}

button {
  width: 100%;
}


</style>
