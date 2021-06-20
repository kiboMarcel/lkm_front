<template>
  <div class="body">
         <form @submit.prevent="submitForm">
           <p v-if="!formIsValid"> donne manquant</p>
      <div class="form-group">
        <label for=""> Adresse</label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Entrer votre adresse"
          v-model="address"
        />
      </div>
      <div class="form-group">
        <label for=""> Ville</label>
        <input
          type="text"
          class="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter la ville"
          v-model="city"
        />
      </div>
      <div class="form-group">
        <label for=""> code postal</label>
        <input
          type="text"
          class="form-control"
          placeholder="code postal"
          v-model="postalCode"
        />
      </div>
      

      <button class="btn">Continuer</button>
    </form>
  </div>
</template>

<script>
export default {
  emit:{
    valid: false
  },
  data() {
    return {
      address: this.$store.state.cartStore.shippingAddress.address,
      city: this.$store.state.cartStore.shippingAddress.city,
      postalCode: this.$store.state.cartStore.shippingAddress.postalCode,
      formIsValid: true,
      country: "Togo"
    };
  },

 
  methods: {
    submitForm() {
      this.formIsValid = true
      if(this.address== '' || this.city=='' || this.postalCode== ''){
        this.formIsValid = false
        return
      }
      let data = {
        address: this.address,
        city: this.city,
        postalCode: this.postalCode,
        country: this.country
      };
      this.$store.dispatch("cartStore/saveShippingAddress", data);
      this.$router.push(`/payment`);
    },
  },
};
</script>

<style scoped>

.form {
  padding: 0 10px;
}

.form-control{
  border: 2px solid #f0f0f0;
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #777;
    outline: 0;
    box-shadow: none;
}

.body button{
  background-color: blueviolet;
  color:white;
  width: 100%;
  margin-bottom: 30px;
}

.body button:hover{
  background-color: rgb(106, 37, 172);
}


</style>