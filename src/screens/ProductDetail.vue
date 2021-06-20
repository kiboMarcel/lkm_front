<template>
<div class="container">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6 col-xl-6">
        <div class="img-thb">
          <img :src="imageurl + product.image" alt="" class="product-img" />
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-6 col-xl-6">
        <div class="p-detail">
          <h3>{{ product.name }}</h3>
          <strong>Prix: </strong><h4>{{ product.price }}</h4>
          <a href="">
            <p>{{ product.category }}</p>
          </a>
        
    <div class="form-group row">
          <label v-if="product.countInStock > 0" class="col-md-8 label-control"
            >Statut: En stock
          </label>
          <label v-else class="col-md-8 label-control"
            >Statut: Pas en stock
          </label>
        </div>

          <div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>
          <div class="qte"  v-if="product.countInStock > 0">
            <strong> Quantite: </strong>
            <p></p>
            <div class="input-group">
              <span class="input-group-btn">
                <button
                @click="decrease"
                  type="button"
                  class="btn "
                >
                  <span><i class="fas fa-minus-square"></i></span>
                </button>
              </span>
              <input
                type="text"
                name="quant[1]"
                class="input-number"
                
                v-model="selected"
              />
              <span class="input-group-btn">
                <button
                @click="increase"
                  type="button"
                  class="btn"
                >
                  <span><i class="fas fa-plus-square"></i></span>
                </button>
              </span>
            </div>
            <p></p>
          </div>
          <div class="desc">
            <p>
              {{ product.description }}
            </p>
          </div>
          <div class="btn-grp">
              <button class="btn buy" type="submit">buy</button>
              <button class="btn add" type="submit"><i class="fab fa-opencart"></i>  add to cart</button>
          </div>
        </div>
      </div>
    </div>
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
      increase(){
            this.qte += 1
        },
        decrease(){
            this.qte -= 1
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
   watch: {
        qte(value){
            if (value<1){
                this.qte = 1
            }
        }
    }
};
</script>

<style scoped>
.row {
  margin-top: 110px;
  justify-content: center;
}
.img-thb {
  height: 370px;
  background-color: coral;
  border-radius: 20px;
}
/*product  detail */

.p-detail {
  margin-top: 10px;
}

.p-detail div {
  margin-bottom: 1rem;
}

.qte {
  display: flex;
  margin-right: 50px;
  flex-direction: row;
  justify-content: space-between;
}

.input-group {
  display: flex;
  flex-wrap: nowrap;
  align-items: stretch;
  width: 100%;
  justify-content: flex-end;
}

.qte .btn {
  background-color: cornflowerblue;
  display: inline-block;
  margin: 0;
}

.qte input {
  width: 120px;
  text-align: center;
}

.p-detail a {
  text-decoration: none;
}

.p-detail p {
  color: gray;
}

@media (max-width: 930px) {
  .p-detail {
    margin-top: 12px;
  }
}
.btn-grp{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}

.btn-grp .btn{
   width: 150px;
}

.add {
  background-color: fuchsia;
}
.buy {
    background-color: rgb(97, 11, 179);
}
</style>
