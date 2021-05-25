<template>

   <div class="container">
       <div class="header"> 
           <h3> Envoie</h3>
       </div>
        <form @submit.prevent="submitForm">
    
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
        v-model="postalCode "
      />
    </div>
    
  
    <button class="btn">Continuer</button>
  </form>
   </div>
</template>

<script>
export default {
    data(){
        return{
            address: '',
            city: '',
            postalCode:'',
        }
    },

    methods:{
        submitForm(){
            let data = {
                address :this.address,
                city: this.city,
                postalCode: this.postalCode
            }
            this.$store.dispatch('cartStore/saveShippingAddress', data)
            this.$router.push(`/payment`)
        }
    }
}
</script>

<style scoped>
.header{
    margin-top: 2rem;
    text-align: center;
}

.container{
    width: 50%;
}
</style>