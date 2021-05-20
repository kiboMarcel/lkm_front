<template>
  <div class="small-container product">
    <div class="row">
      <div class="col-md-6 col-12">
        <img :src="imageurl + product.image" alt="" class="product-img" />

        <div class="small-img-row">
          <div class="small-img-col" v-for="image in images" :key="image.id">
            <img
              :src="image.url"
              alt=""
              @click="selected(image.id, image.url)"
            />
          </div>
        </div>
      </div>
      <div class=" form-group col-md-6 col-12">
        <p>Home / Chaussure</p>
        <h1>{{ product.name }}</h1>
        <div class="form-group row">
          <label class="col-md-8 label-control"
            >Prix : {{ product.price }} FCFA</label
          >
        </div>
        <div class="form-group row">
          <label v-if="product.countInStock > 0" class="col-md-8 label-control"
            >Statut: En stock
          </label>
          <label v-else class="col-md-8 label-control"
            >Statut: Pas en stock
          </label>
        </div>
        <div v-if="product.countInStock > 0" class="form-group row">
          <label class="col-md-3 label-control">Quantite:</label>
          <div class="col-sm-5">
            <select
              v-model="selected"
              class="form-control md"
              id="exampleFormControlSelect1"
            >
              <option v-for="i in product.countInStock" :key="i" :value="i">
                {{ i }}
              </option>
            </select>
          </div>
        </div>

        <button class="btn btn-danger">Buy</button>
        <button class="btn btn-primary" @click="addtoCart(product)">
          Add to cart
        </button>

        <h3>Product Detail <i class="fa fa-indent"></i></h3>
        <p>
          {{ product.description }}
        </p>
      </div>

    </div>
    <ul>
      <li v-for="item in $store.state.cartItems" :key="item.id">
        {{item.name}}
        {{item.quantity}}  
        {{ item.price}}
      </li>
    </ul>
  </div>
</template>

<script>

import apiUrl from '../variables.js';

export default {

  props: ["prodId"],

  data() {
    return {
      selected: 1,
      imageurl: apiUrl,
     

      images: [
        {
          id: 1,
          url:
            "https://photos6.spartoo.com/photos/162/16270961/16270961_500_A.jpg",
        },
        {
          id: 2,
          url:
            "https://photos6.spartoo.com/photos/154/15487608/15487608_500_A.jpg",
        },
        {
          id: 3,
          url:
            "https://photos6.spartoo.com/photos/124/12434149/12434149_500_A.jpg",
        },
      ],
      src: "",
    };
  },

  /*  created() {
    const prodId = this.$route.params.prodId
    console.log(prodId)
    const selectedProd = this.prods.find(product => product.id === prodId);
    this.product = selectedProd
    console.log(this.product)
},  */

  methods: {
    Selected(id, url) {
      console.log(id);
      this.src = url;
    },
    addtoCart(product) {
     /*  console.log(
        this.selected + " of " + this.product.name + " is added to cart",
        //this.$router.push(`/cart/${this.product._id}`),
      ); */
      //product = this.$store.getters.loadProduct
       let addedProduct ={
        _id : product._id,
        name : product.name,
        price: product.price,
        quantity: this.selected,
        image : product.image,
      }

      this.$store.commit('cartStore/addToCart', addedProduct)
      this.$router.push(`/cart/`)
    },
  },

  mounted() {
    this.$store.dispatch("productStore/loadProduct", this.$route.params.prodId);
  },

  created() {},

  computed: {
    product() {
      /*return this.$store.getters.loadProductG;*/
      return this.$store.getters['productStore/loadProductG'];
    },
  },
};
</script>

<style scoped>
.product {
  margin: 80px 25px;
  align-content: center;
}

.product-img {
  display: block;
  margin: auto;
  width: 75%;
}

.product .col-2 img {
  padding: 20px;
}

.product h4 {
  margin: 0px;
  font-size: 22px;
  font-weight: bold;
}

.product select {
  display: block;
  padding: 10px;
  margin-top: 0px;
}

.product input {
  width: 50px;
  height: 40px;
  padding-left: 10px;
  font-size: 20px;
  margin-right: 10px;
  border: 1px solid #ff523b;
}

input:focus {
  outline: none;
}

.btn {
  margin: 12px;
}

.product .fa {
  color: #ff523b;
  margin-left: 10px;
}

.small-img-row {
  display: flex;
  justify-content: space-between;
}

.small-img-row img {
  width: 100%;
}

.small-img-col {
  flex-basis: 24%;
  cursor: pointer;
}

.small-img-col:focus {
  border: 1px solid gray;
}

.small-img-col:active {
  border: 1px solid gray;
}
.small-img-col:target {
  border: 1px solid gray;
}
.small-img-col:hover {
  border: 1px solid gray;
}
</style>
